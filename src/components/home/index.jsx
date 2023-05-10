import { useState } from 'react';
import QRCode from 'react-qr-code';
import QRCodeLink from 'qrcode';
import GerenateButton from '../generateButton';
import DownloadButton from '../downloadButton';
import './styles.css';

export default function Home() {
  const [linkInput, setLinkInput] = useState(' ');
  const [link, setLink] = useState('');
  const [qrcodeLink, setQrcodeLink] = useState('');

  function handleGenerate(link_url) {
    QRCodeLink.toDataURL(link_url, {
      width: 600,
      margin: 3,
    }, function(err, url) {
      setQrcodeLink(url);
    });
  }

  function handleLinkInput(e) {
    setLinkInput(e.target.value);
  }

  function handleButtonClick() {
    setLink(linkInput);
    handleGenerate(linkInput);
  }

  function handleDownloadClick() {
    const link = document.createElement('a');
    link.href = qrcodeLink;
    link.download = 'QRCode.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <main>
      <section>
        <QRCode value={link} />
        <input
          className='inputLink'
          placeholder='Digite um link'
          value={linkInput}
          onChange={(e) => handleLinkInput(e)}
        />
        <GerenateButton onClick={handleButtonClick} btnText='Gerar QRCode'/>
        <DownloadButton onClick={handleDownloadClick} btnText='Baixar QRCode'/>
      </section>
    </main>
  );
}