import React from "react";
import { useParams } from "react-router-dom";
import { noticias } from "../data/noticia";
import "./DetalhesNoticia.css"

export default function DetalhesNoticia() {
  const { id } = useParams();
  const noticia = noticias.find((n) => n.id === Number(id));

  if (!noticia) {
    return <h2>Notícia não encontrada.</h2>;
  }

  return (
    <div>
      <h1>Notícias</h1>
      <img src={noticia.foto} alt={noticia.titulo} />
      <p>{noticia.titulo}</p>
      <p>{noticia.tema}</p>
      <p>{noticia.textoCompleto}</p>
      <p>{noticia.data}</p>
      <p>{noticia.autor}</p>
    </div>
  );
}
