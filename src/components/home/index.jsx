import { useState } from 'react'
import Input from '../input'
import './styles.css'

export default function Home() {
  return (
    <main>
      <h1>Hello, World!</h1>
      <Input type='text' placeholder='Digite um link' />
    </main>
  )
};