import { useState } from 'react';
import QRCode from 'react-qr-code';
import QRCodeLink from 'qrcode';
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
        <button onClick={handleButtonClick}>Gerar QRCode</button>
        <button><a href={qrcodeLink} download={`QrCode`}>Baixar QRCode</a></button>
      </section>
    </main>
  );
}