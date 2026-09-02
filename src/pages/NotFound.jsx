import React from 'react'
import { Link } from 'react-router-dom'
import "./NotFound.css"

export default function NotFound() {
  return (
      <div className='erro-container'>
          <h1 className='erro-titulo'>Error 404</h1>
          <p className='erro-descricao'>Esta página não existe mais.</p>
          <Link className='link-erro-home' to="/">Voltar para Home</Link>
    </div>
  )
}
