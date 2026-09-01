import React from "react";
import { Link } from "react-router-dom";
import { noticias } from "../data/noticia";
import "./Home.css"

export default function Home() {
  const noticiasDestaque = noticias.slice(0, 6);
  return (
    
    <div className="destaque-content">
      
      {noticiasDestaque.map((noticia) => (
        <Link className="link" key={noticia.id} to={`/noticias/${noticia.id}`}>
          <div>
            <img src={noticia.foto} alt={noticia.titulo} width={400} />
            <h2>{noticia.titulo}</h2>
            <p>{noticia.resumo}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
