import React from "react";
import { useParams } from "react-router-dom";
import { noticias } from "../data/noticia";
import "./DetalhesNoticia.css";

export default function DetalhesNoticia() {
  const { id } = useParams();

  const noticia = noticias.find((n) => n.id === Number(id));

  if (!noticia) {
    return <h2>Notícia não encontrada.</h2>;
  }

  return (
    <div className="container-detalhes">
      <h1 className="titulo-detalhes">Notícias</h1>
      <p className="tema-detalhes">{noticia.temas}</p>
      <p className="titulo-noticias-detalhes">{noticia.titulo}</p>
      <img className="img-detalhes" src={noticia.foto} alt={noticia.titulo} />
      <p className="texto-detalhes">{noticia.textoCompleto}</p>
      <div className="container-autor-data">
        <p className="data-detalhes">{noticia.data}</p>
        <p className="autor-detalhes">{noticia.autor}</p>
      </div>
    </div>
  );
}
