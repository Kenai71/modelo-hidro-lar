"use client";
import Header from "./components/Header";
import BeforeAfter from "./components/BeforeAfter";
import FadeUp from "./components/FadeUp";

const services = [
  {
    icon: "🔧",
    title: "Instalação Hidráulica",
    desc: "Instalação completa de sistemas hidráulicos para residências e empresas, com materiais de qualidade e acabamento impecável.",
  },
  {
    icon: "🚿",
    title: "Manutenção Preventiva",
    desc: "Evite surpresas desagradáveis. Realizamos inspeções periódicas para garantir que tudo funcione perfeitamente.",
  },
  {
    icon: "🔓",
    title: "Desentupimento",
    desc: "Desentupimento de pias, ralos, vasos sanitários e tubulações com equipamentos profissionais e sem quebra-quebra.",
  },
  {
    icon: "💧",
    title: "Limpeza de Caixa D'água",
    desc: "Limpeza e higienização profissional de caixas d'água. Água limpa e segura para sua família ou colaboradores.",
  },
  {
    icon: "🏗️",
    title: "Obras e Reformas",
    desc: "Execução de projetos hidráulicos em obras novas e reformas, com planejamento técnico e acompanhamento completo.",
  },
  {
    icon: "⚡",
    title: "Atendimento Emergencial",
    desc: "Vazamento inesperado? Cano estourado? Atendemos chamados urgentes com agilidade para resolver seu problema.",
  },
];

const whyUs = [
  {
    icon: "✅",
    title: "Garantia em Todos os Serviços",
    desc: "Trabalhamos com confiança. Todos os nossos serviços possuem garantia de qualidade e satisfação.",
  },
  {
    icon: "⏰",
    title: "Pontualidade e Compromisso",
    desc: "Respeitamos seu tempo. Chegamos no horário combinado e cumprimos os prazos acordados.",
  },
  {
    icon: "📋",
    title: "Orçamento Sem Compromisso",
    desc: "Avaliamos seu problema sem custo. Você decide com tranquilidade, sem pressão e sem surpresas no valor.",
  },
  {
    icon: "🛡️",
    title: "Profissional Experiente",
    desc: "Anos de experiência em encanação residencial e empresarial, com centenas de clientes satisfeitos.",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      {/* ===== HERO ===== */}
      <section className="hero" id="inicio">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span className="dot" />
              Disponível para atendimento
            </div>
            <h1>
              Soluções em <span>encanação</span> para sua casa e empresa
            </h1>
            <p>
              Problemas hidráulicos não esperam. Com a Hidro Lar, você tem um
              profissional qualificado, ágil e comprometido com a qualidade do
              serviço. Do reparo simples à obra completa.
            </p>
            <div className="hero-buttons">
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                📲 Solicitar Orçamento
              </a>
              <a href="#servicos" className="btn-secondary">
                Conheça os Serviços →
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <h3>500+</h3>
                <p>Serviços realizados</p>
              </div>
              <div className="stat-item">
                <h3>98%</h3>
                <p>Clientes satisfeitos</p>
              </div>
              <div className="stat-item">
                <h3>10+</h3>
                <p>Anos de experiência</p>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-wrapper">
              <img
                src="/images/Manuten%C3%A7%C3%A3o%20Residencial.jpeg"
                alt="Manutenção Residencial - Hidro Lar"
              />
              <div className="hero-image-overlay">
                <h4>Profissionalismo que você vê</h4>
                <p>Cada detalhe importa no resultado final</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVIÇOS ===== */}
      <section className="section" id="servicos">
        <div className="section-container">
          <FadeUp>
            <div className="section-header">
              <span className="section-tag">Nossos Serviços</span>
              <h2>Tudo que você precisa em encanação</h2>
              <p>
                Oferecemos uma gama completa de serviços hidráulicos para
                resolver qualquer problema, do mais simples ao mais complexo.
              </p>
            </div>
          </FadeUp>
          <div className="services-grid">
            {services.map((s, i) => (
              <FadeUp key={i} delay={i * 100}>
                <div className="service-card">
                  <div className="service-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GALERIA ===== */}
      <section className="section" id="galeria" style={{ background: "var(--gray-50)" }}>
        <div className="section-container">
          <FadeUp>
            <div className="section-header">
              <span className="section-tag">Nosso Trabalho</span>
              <h2>Veja nossos serviços em ação</h2>
              <p>
                Cada projeto é uma oportunidade de demonstrar nosso
                compromisso com a excelência e a satisfação do cliente.
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={200}>
            <div className="gallery-grid">
              <div className="gallery-item">
                <img src="/images/Instala%C3%A7%C3%A3o%20em%20Obra%20Comercial.jpeg" alt="Instalação em Obra Comercial" />
                <div className="gallery-overlay">
                  <p>Instalação em Obra Comercial</p>
                </div>
              </div>
              <div className="gallery-item">
                <img src="/images/Manuten%C3%A7%C3%A3o%20Residencial.jpeg" alt="Manutenção Residencial" />
                <div className="gallery-overlay">
                  <p>Manutenção Residencial</p>
                </div>
              </div>
              <div className="gallery-item">
                <img src="/images/Caixa%20de%20gordura.jpeg" alt="Limpeza de Caixa de Gordura" />
                <div className="gallery-overlay">
                  <p>Limpeza de Caixa de Gordura</p>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ===== ANTES E DEPOIS ===== */}
      <section className="section before-after-section" id="antes-depois">
        <div className="section-container">
          <FadeUp>
            <div className="section-header">
              <span className="section-tag">Resultados Reais</span>
              <h2>Veja a diferença que fazemos</h2>
              <p>
                Arraste o controle para ver a transformação. Limpeza
                profissional de caixa d'água — antes e depois do nosso
                trabalho.
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={200}>
            <BeforeAfter
              beforeSrc="/images/antes.jpeg"
              afterSrc="/images/depois.jpeg"
            />
          </FadeUp>
        </div>
      </section>

      {/* ===== POR QUE NÓS ===== */}
      <section className="section" id="por-que">
        <div className="section-container">
          <FadeUp>
            <div className="section-header">
              <span className="section-tag">Diferenciais</span>
              <h2>Por que escolher a Hidro Lar?</h2>
              <p>
                Não somos apenas mais um encanador. Somos seu parceiro de
                confiança para manter tudo funcionando perfeitamente.
              </p>
            </div>
          </FadeUp>
          <div className="why-grid">
            {whyUs.map((w, i) => (
              <FadeUp key={i} delay={i * 100}>
                <div className="why-card">
                  <div className="why-icon">{w.icon}</div>
                  <div>
                    <h3>{w.title}</h3>
                    <p>{w.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section cta-section" id="contato">
        <div className="section-container">
          <div className="cta-content">
            <FadeUp>
              <h2>Precisa de um encanador agora?</h2>
              <p>
                Entre em contato e receba um orçamento gratuito. Atendemos
                residências e empresas com rapidez e qualidade.
              </p>
              <div className="cta-buttons">
                <a
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chamar no WhatsApp
                </a>
                <a href="tel:+5500000000000" className="btn-phone">
                  📞 Ligar Agora
                </a>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="footer-content">
          <p>© 2025 Hidro Lar. Todos os direitos reservados.</p>
          <div className="footer-links">
            <a href="#inicio">Início</a>
            <a href="#servicos">Serviços</a>
            <a href="#contato">Contato</a>
          </div>
        </div>
      </footer>

      {/* ===== WHATSAPP FAB ===== */}
      <a
        href="https://wa.me/5500000000000"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-fab"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </>
  );
}
