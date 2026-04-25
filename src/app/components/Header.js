"use client";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="header">
        <nav className="nav-container">
          <img src="/images/logo Hidro-lar.png" alt="Hidro Lar" className="logo-img" />
          <div className="nav-links">
            <a href="#servicos">Serviços</a>
            <a href="#galeria">Galeria</a>
            <a href="#antes-depois">Resultados</a>
            <a href="#por-que">Diferenciais</a>
            <a href="#contato" className="nav-cta">Fale Conosco</a>
          </div>
          <button className="mobile-toggle" onClick={() => setMenuOpen(true)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </nav>
      </header>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <button className="mobile-close" onClick={closeMenu} aria-label="Fechar">✕</button>
        <a href="#servicos" onClick={closeMenu}>Serviços</a>
        <a href="#galeria" onClick={closeMenu}>Galeria</a>
        <a href="#antes-depois" onClick={closeMenu}>Resultados</a>
        <a href="#por-que" onClick={closeMenu}>Diferenciais</a>
        <a href="#contato" onClick={closeMenu}>Fale Conosco</a>
      </div>
    </>
  );
}
