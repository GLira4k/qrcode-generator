import { useState } from 'react'
import QRCode from 'react-qr-code'
import './styles.css'

export default function Home() {
  const [link, setLink] = useState(' ')
  
  function handleLink(e){
    setLink(e.target.value);
  }

  return(
    <main>
      <section>
        <QRCode value={link}/>
        <input
          className='inputLink'
          placeholder='Digite um link'
          value={link}
          onChange={(e) => handleLink(e)}
        />
      </section>
    </main>
  )

}