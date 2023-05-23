import React, { useState } from "react";
//import QRCode from "qrcode.react";
import { QRCode } from 'react-qrcode-logo';
import html2canvas from "html2canvas";
import GenerateButton from "../generateButton";
import DownloadButton from "../downloadButton";
import Input from "../input";
import "./styles.css";
import Resizer from "react-image-file-resizer";

export default function Home() {
  const [linkInput, setLinkInput] = useState("");
  const [link, setLink] = useState("");
  const [qrcodeLink, setQrcodeLink] = useState("");
  const [showIconInput, setShowIconInput] = useState(false);
  const [logoIcon, setLogoIcon] = useState("");

  function handleIconOptionClick() {
    setShowIconInput(!showIconInput);
  }

  function handleGenerate(linkUrl) {
    setLink(linkUrl);
    setQrcodeLink(linkUrl);
  }

  function handleLinkInput(e) {
    setLinkInput(e.target.value);
  }

  function handleLogoFileChange(e) {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === "image/png") {
      resizeImage(selectedFile);
    } else {
      alert("Por favor, selecione um arquivo PNG");
    }
  }

  function resizeImage(file) {
    Resizer.imageFileResizer(
      file,
      800,
      800,
      "PNG",
      100,
      0,
      (resizedImage) => {
        const tempUrl = URL.createObjectURL(resizedImage);
        setLogoIcon(tempUrl);
      },
      "blob"
    );
  }

  function handleButtonClick() {
    if (linkInput.trim() === "") {
      alert("Por favor, insira um link antes de gerar o QR Code.");
      return;
    }
    handleGenerate(linkInput);
  }

  function handleDownloadClick() {
    const qrCodeSection = document.getElementById("qrcode-section");

    if (!qrCodeSection) {
      alert("Erro ao capturar o QR Code.");
      return;
    }

    html2canvas(qrCodeSection)
      .then((canvas) => {
        const qrCodeImage = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = qrCodeImage;
        link.download = "QRCode.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => {
        console.error("Erro ao gerar a imagem do QR Code:", error);
        alert("Erro ao gerar a imagem do QR Code.");
      });
  }

  return (
    <main>
      <section>
        <h1>QRCode Generator</h1>
        <div id="qrcode-section">
          <QRCode
            value={qrcodeLink}
            size={250}
            quietZone={20}
            logoImage={logoIcon || ""}
            logoWidth={70}
            logoHeight={70}
            removeQrCodeBehindLogo={true}
            
          />
        </div>
        <Input
          placeholder="Digite um link"
          value={linkInput}
          onChange={handleLinkInput}
        />
        <div className="addIcon">
          <p onClick={handleIconOptionClick}>Adicionar ícone?</p>
          {showIconInput && (
            <input
              type="file"
              accept=".png"
              onChange={handleLogoFileChange}
            />
          )}
        </div>
        <div className="buttonsContainer">
          <GenerateButton onClick={handleButtonClick} btnText="Gerar QRCode" />
          <DownloadButton
            onClick={handleDownloadClick}
            btnText="Baixar QRCode"
          />
        </div>
      </section>
    </main>
  );
}