import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MapPin, Phone, Clock, Instagram, Star, Zap, Shield, Heart, Mail, User, MessageCircle, Menu, X, ChevronDown, CheckCircle } from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

// Componente de WhatsApp flutuante
const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5511939369778?text=Olá! Gostaria de agendar uma consulta no Tattoo até os Ossos"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 z-50 pulse-animation"
      data-testid="whatsapp-button"
    >
      <Phone className="w-6 h-6" />
    </a>
  );
};

// Header/Navigation
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black/95 backdrop-blur-sm text-white py-4 fixed top-0 w-full z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/images/logo/tattoo-ate-os-ossos.png"
              alt="Tattoo até os Ossos"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h1 className="text-xl font-bold text-orange-500">TAO</h1>
              <p className="text-xs text-gray-400">Tattoo até os Ossos</p>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#sobre" className="hover:text-orange-500 transition-colors">Sobre</a>
            <a href="#servicos" className="hover:text-orange-500 transition-colors">Serviços</a>
            <a href="#portfolio" className="hover:text-orange-500 transition-colors">Portfolio</a>
            <a href="#contato" className="hover:text-orange-500 transition-colors">Contato</a>
            <a
              href="https://wa.me/5511939369778"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-lg transition-colors"
            >
              Agendar
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="mobile-menu-button"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4">
              <a href="#sobre" className="hover:text-orange-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Sobre</a>
              <a href="#servicos" className="hover:text-orange-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Serviços</a>
              <a href="#portfolio" className="hover:text-orange-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
              <a href="#contato" className="hover:text-orange-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Contato</a>
              <a
                href="https://wa.me/5511939369778"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-lg transition-colors text-center"
              >
                Agendar
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

// Hero Section - SEM foto de fundo
const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-orange-900 overflow-hidden pt-24">
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col justify-center min-h-screen">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8">
            <img
              src="/images/logo/tattoo-ate-os-ossos.png"
              alt="Tattoo até os Ossos Logo"
              className="w-32 h-32 mx-auto mb-6 rounded-full bg-white/10 p-4"
              data-testid="hero-logo"
            />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 text-shadow" data-testid="hero-title">
            <span className="text-orange-500">TATTOO</span> ATÉ OS 
            <span className="block text-orange-500">OSSOS</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed">
            Estúdio referência em <span className="text-orange-400 font-semibold">realismo, blackwork e piercing profissional</span> em São Paulo
          </p>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Mais de 15 anos criando arte exclusiva na pele, com técnica, segurança e estilo. 
            <span className="text-orange-400 block mt-4 text-2xl font-semibold">Venha viver sua experiência até os ossos. 💀🔥</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <a
              href="https://wa.me/5511939369778?text=Olá! Gostaria de agendar uma consulta"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-5 rounded-lg font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-xl"
              data-testid="hero-whatsapp-button"
            >
              <Phone className="inline-block mr-3" size={24} />
              AGENDAR CONSULTA
            </a>
            <a
              href="#portfolio"
              className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-10 py-5 rounded-lg font-bold text-xl transition-all duration-300"
              data-testid="hero-portfolio-button"
            >
              VER PORTFOLIO
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-gray-400">
            <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-lg">
              <MapPin size={20} />
              <span className="font-medium">Vila Prudente - Vila Zelina</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-lg">
              <Star size={20} className="text-yellow-500" />
              <span className="font-medium">15+ Anos de Experiência</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-lg">
              <Shield size={20} className="text-green-500" />
              <span className="font-medium">100% Esterilizado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Componente Modal para Zoom de Imagens
const ImageModal = ({ src, alt, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="relative max-w-4xl max-h-full">
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-orange-400 transition-colors"
          data-testid="modal-close-button"
        >
          <X size={32} />
        </button>
        <img
          src={src}
          alt={alt}
          className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />
        <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg">
          <p className="font-semibold">{alt}</p>
        </div>
      </div>
    </div>
  );
};

// Seção Sobre - Com perfis do Coringa e Jennyfer
const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8" data-testid="about-title">
              Conheça os Profissionais
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Nosso compromisso é eternizar sua história com arte de alto nível, 
              em um espaço seguro e acolhedor
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Perfil do Coringa */}
            <div className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center mb-8">
                <div className="w-24 h-24 rounded-full overflow-hidden mr-6 border-4 border-orange-500 shadow-lg">
                  <img 
                    src="/images/logo/coringa.png" 
                    alt="Coringa - Tatuador Fundador"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">Coringa</h3>
                  <p className="text-orange-600 font-bold text-lg">Tatuador Fundador</p>
                  <div className="flex items-center gap-2 text-gray-500 mt-2">
                    <Clock size={16} />
                    <span className="font-medium">15+ anos de experiência</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                O Coringa é especialista em tatuagens autorais que unem emoção e identidade. 
                Tatuador fundador do estúdio, conhecido pelo traço firme e pela criatividade ousada. 
                Construiu sua trajetória no mundo da tatuagem com a ideia de que cada desenho 
                começa mais do que apenas memória - é identidade e expressão de vida.
              </p>
              
              <div className="mb-8">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2 text-lg">
                  <Zap className="text-orange-500" size={20} />
                  Especialidades
                </h4>
                <div className="flex flex-wrap gap-3">
                  {['Realismo', 'Blackwork', 'Criação Artística', 'Designs Exclusivos'].map((skill, idx) => (
                    <span key={idx} className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-between text-center border-t pt-8">
                <div>
                  <div className="text-3xl font-bold text-orange-600">1000+</div>
                  <div className="text-gray-500 font-medium">Trabalhos</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600">100%</div>
                  <div className="text-gray-500 font-medium">Satisfação</div>
                </div>
              </div>
            </div>
            
            {/* Perfil da Jennyfer */}
            <div className="bg-gray-900 text-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center mb-8">
                <div className="w-24 h-24 rounded-full overflow-hidden mr-6 border-4 border-orange-500 shadow-lg">
                  <img 
                    src="/images/logo/jennyfer-perfil.png" 
                    alt="Jennyfer - Body Piercer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">Jennyfer</h3>
                  <p className="text-orange-400 font-bold text-lg">Body Piercer</p>
                  <div className="flex items-center gap-2 text-gray-400 mt-2">
                    <Clock size={16} />
                    <span className="font-medium">8+ anos de experiência</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Jennyfer é body piercer com formação em saúde, que garante 
                estética e cuidado em cada procedimento. Body piercer altamente qualificada, 
                traz não apenas técnica impecável, mas também uma formação sólida na área da saúde, 
                garantindo segurança e confiança em cada procedimento.
              </p>
              
              <div className="mb-8">
                <h4 className="font-bold text-white mb-4 flex items-center gap-2 text-lg">
                  <Heart className="text-orange-500" size={20} />
                  Especialidades
                </h4>
                <div className="flex flex-wrap gap-3">
                  {['Piercing Corporal', 'Técnicas de Saúde', 'Procedimentos Seguros', 'Cuidados Pós-Piercing'].map((skill, idx) => (
                    <span key={idx} className="bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-semibold border border-orange-500/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-between text-center border-t border-gray-700 pt-8">
                <div>
                  <div className="text-3xl font-bold text-orange-400">500+</div>
                  <div className="text-gray-400 font-medium">Trabalhos</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-400">100%</div>
                  <div className="text-gray-400 font-medium">Satisfação</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Estatísticas Gerais */}
          <div className="bg-orange-600 text-white p-16 rounded-2xl shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold mb-4">1500+</div>
                <div className="text-orange-100 font-medium text-lg">Tatuagens Realizadas</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-4">15</div>
                <div className="text-orange-100 font-medium text-lg">Anos de Estúdio</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-4">2</div>
                <div className="text-orange-100 font-medium text-lg">Profissionais</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-4">100%</div>
                <div className="text-orange-100 font-medium text-lg">Materiais Esterilizados</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Seção de Serviços - SEM preços
const ServicesSection = () => {
  const services = [
    {
      title: "Tatuagens Artísticas",
      description: "Realismo, blackwork, fino traço e estilos exclusivos",
      image: "/images/portfolio/tattoo-realismo-01.png",
      highlights: ["Realismo fotográfico", "Blackwork detalhado", "Fino traço delicado", "Designs personalizados"],
      featured: true
    },
    {
      title: "Piercing Profissional", 
      description: "Piercing seguro com materiais de alta qualidade",
      image: "/images/portfolio/piercing-01.png.jpg",
      highlights: ["Materiais cirúrgicos", "Ambiente esterilizado", "Diversos modelos", "Cuidados pós-piercing"]
    },
    {
      title: "Pinturas Digitais",
      description: "Arte digital exclusiva para tatuagens únicas", 
      image: "/images/portfolio/dragao.png",
      highlights: ["Designs únicos", "Alta resolução 4K", "Personalização total", "Arquivo digital incluso"]
    },
    {
      title: "Cover Up",
      description: "Transformação de tatuagens antigas em obras de arte",
      image: "/images/portfolio/reforma-depois.png",
      highlights: ["Análise detalhada", "Novo design criativo", "Cobertura completa", "Resultado garantido"]
    }
  ];
  
  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8" data-testid="services-title">
            Nossos Serviços
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
            Oferecemos uma gama completa de serviços para transformar sua visão em realidade
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className={`bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${service.featured ? 'ring-4 ring-orange-500 ring-opacity-50' : ''}`} data-testid={`service-card-${index}`}>
              {service.featured && (
                <div className="bg-orange-500 text-white text-center py-3 font-bold text-sm">
                  DESTAQUE
                </div>
              )}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-lg">{service.description}</p>
                <div className="space-y-3 mb-8">
                  {service.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle size={16} className="text-orange-500 flex-shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="https://wa.me/5511939369778?text=Olá! Gostaria de solicitar orçamento"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 px-6 rounded-lg font-bold transition-colors duration-300 text-center block"
                >
                  Solicitar Orçamento
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-gray-100 p-12 rounded-2xl inline-block max-w-6xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Como Funciona</h3>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">1</div>
                <h4 className="font-bold text-gray-900 mb-3 text-lg">Consulta</h4>
                <p className="text-gray-600">Conversa inicial sobre sua ideia</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">2</div>
                <h4 className="font-bold text-gray-900 mb-3 text-lg">Design</h4>
                <p className="text-gray-600">Criação do desenho personalizado</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">3</div>
                <h4 className="font-bold text-gray-900 mb-3 text-lg">Aprovação</h4>
                <p className="text-gray-600">Ajustes e aprovação final</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">4</div>
                <h4 className="font-bold text-gray-900 mb-3 text-lg">Execução</h4>
                <p className="text-gray-600">Realização da tatuagem</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Seção Portfolio com imagens reais E ZOOM
const PortfolioSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const portfolioImages = [
    { src: "/images/portfolio/tattoo-realismo-01.png", alt: "Tatuagem Realismo 1", category: "Realismo" },
    { src: "/images/portfolio/tiger.png", alt: "Tatuagem Tiger", category: "Realismo" },
    { src: "/images/portfolio/tattoo-coruja-01.png", alt: "Tatuagem Coruja", category: "Realismo" },
    { src: "/images/portfolio/tattoo-costas-01.png", alt: "Tatuagem Costas", category: "Blackwork" },
    { src: "/images/portfolio/tattoo-braco-01.png.png", alt: "Tatuagem Braço", category: "Blackwork" },
    { src: "/images/portfolio/portrait-filha.png", alt: "Portrait", category: "Realismo" },
    { src: "/images/portfolio/portifolio1.png", alt: "Portfolio 1", category: "Diversos" },
    { src: "/images/portfolio/portifolio2.png", alt: "Portfolio 2", category: "Diversos" },
    { src: "/images/portfolio/portfolio3.png", alt: "Portfolio 3", category: "Diversos" },
    { src: "/images/portfolio/portifolio4.png", alt: "Portfolio 4", category: "Diversos" },
    { src: "/images/portfolio/reforma-antes.png", alt: "Cover Up - Antes", category: "Cover Up" },
    { src: "/images/portfolio/reforma-depois.png", alt: "Cover Up - Depois", category: "Cover Up" },
    { src: "/images/portfolio/piercing-01.png.jpg", alt: "Piercing Orelha", category: "Piercing Jennyfer" },
    { src: "/images/portfolio/piercing-02.png.jpg", alt: "Piercing Nariz", category: "Piercing Jennyfer" },
    { src: "/images/portfolio/piercing-03.png.jpg", alt: "Piercing Facial", category: "Piercing Jennyfer" },
    { src: "/images/portfolio/piercing-04.png.jpg", alt: "Piercing Orelha Completa", category: "Piercing Jennyfer" },
    { src: "/images/portfolio/piercing-05.png.jpg", alt: "Piercing Cartilagem", category: "Piercing Jennyfer" },
    { src: "/images/portfolio/piercing-06.png.jpg", alt: "Piercing Helix", category: "Piercing Jennyfer" },
    { src: "/images/portfolio/piercing-07.png.jpg", alt: "Piercing Múltiplo", category: "Piercing Jennyfer" },
    { src: "/images/portfolio/piercing-08.png.jpg", alt: "Piercing Industrial", category: "Piercing Jennyfer" }
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="portfolio" className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8" data-testid="portfolio-title">
            Portfolio
          </h2>
          <p className="text-2xl text-gray-400 max-w-4xl mx-auto">
            Alguns dos nossos trabalhos realizados ao longo desses 15 anos
          </p>
          <p className="text-lg text-orange-400 mt-4 font-semibold">
            Clique nas imagens para ver em tamanho grande
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {portfolioImages.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer" 
              data-testid={`portfolio-item-${index}`}
              onClick={() => openModal(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 text-white">
                  <span className="text-sm font-bold bg-orange-500 px-3 py-1 rounded-full">{image.category}</span>
                  <p className="text-sm mt-2">{image.alt}</p>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a
            href="https://instagram.com/tattooateosossos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-10 py-5 rounded-lg font-bold text-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-xl"
            data-testid="instagram-button"
          >
            <Instagram size={24} />
            Seguir @tattooateosossos
          </a>
        </div>
      </div>
      
      {/* Modal de Zoom */}
      <ImageModal
        src={selectedImage?.src}
        alt={selectedImage?.alt}
        isOpen={!!selectedImage}
        onClose={closeModal}
      />
    </section>
  );
};

// Seção de Contato SIMPLIFICADA - só Instagram e WhatsApp
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `*Tattoo até os Ossos - Nova Consulta*\n\n*Nome:* ${formData.name}\n*Email:* ${formData.email}\n*Telefone:* ${formData.phone}\n*Serviço:* ${formData.service}\n*Mensagem:* ${formData.message}`;
    const whatsappUrl = `https://wa.me/5511939369778?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contato" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8" data-testid="contact-title">
            Entre em Contato
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
            Agende sua consulta e transforme sua ideia em arte
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Informações de Contato SIMPLIFICADAS */}
          <div className="space-y-8">
            <div className="bg-white p-10 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <MapPin className="text-orange-500" size={28} />
                Como Chegar
              </h3>
              <div className="space-y-4 text-gray-700 text-lg">
                <p className="font-bold text-xl">Tattoo Até os Ossos</p>
                <p>Rua Monsenhor Pio Ragazinskas, 15 - Sobreloja</p>
                <p>Vila Zelina/Vila Prudente - São Paulo - SP</p>
                <p>CEP: 03142-000</p>
              </div>
              <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                <p className="text-orange-800"><strong>🚇 Transporte Público:</strong> Próximo à estação Vila Prudente do Metrô (Linha Azul)</p>
              </div>
            </div>
            
            <div className="bg-white p-10 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Clock className="text-orange-500" size={28} />
                Horário de Funcionamento
              </h3>
              <div className="space-y-4 text-gray-700 text-lg">
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="font-semibold">Segunda - Sexta:</span>
                  <span>13:30 - 19:00</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="font-semibold">Sábado:</span>
                  <span>10:00 - 17:00</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="font-semibold">Domingo:</span>
                  <span className="text-red-600 font-semibold">Fechado</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <p className="text-green-800"><strong>✅ Atendimento por agendamento via WhatsApp</strong></p>
              </div>
            </div>
            
            {/* CONTATO DIRETO SIMPLIFICADO - só Instagram e WhatsApp */}
            <div className="bg-white p-10 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contato Direto</h3>
              <div className="space-y-6">
                <a href="https://wa.me/5511939369778" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                  <Phone className="text-green-500" size={24} />
                  <div>
                    <p className="font-semibold text-gray-900">(11) 93936-9778</p>
                    <p className="text-sm text-gray-600">WhatsApp Business</p>
                  </div>
                </a>
                <a href="https://instagram.com/tattooateosossos" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                  <Instagram className="text-purple-500" size={24} />
                  <div>
                    <p className="font-semibold text-gray-900">@tattooateosossos</p>
                    <p className="text-sm text-gray-600">Instagram</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          
          {/* Formulário de Contato */}
          <div className="bg-white p-10 rounded-2xl shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Solicite uma Consulta</h3>
            <p className="text-gray-600 mb-8 text-lg">Preencha o formulário e entraremos em contato via WhatsApp</p>
            
            <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Digite seu nome completo"
                  className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-lg"
                  data-testid="contact-name-input"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="seu@email.com"
                  className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-lg"
                  data-testid="contact-email-input"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  WhatsApp *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="(11) 99999-9999"
                  className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-lg"
                  data-testid="contact-phone-input"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                  Serviço Desejado *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-lg"
                  data-testid="contact-service-select"
                >
                  <option value="">Escolha um serviço</option>
                  <option value="Tatuagem Realismo">Tatuagem - Realismo</option>
                  <option value="Tatuagem Blackwork">Tatuagem - Blackwork</option>
                  <option value="Tatuagem Fino Traço">Tatuagem - Fino Traço</option>
                  <option value="Pinturas Digitais">Pinturas Digitais</option>
                  <option value="Piercing Profissional">Piercing Profissional</option>
                  <option value="Cover Up">Cover Up</option>
                  <option value="Consulta Geral">Consulta Geral</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Descreva sua ideia
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-lg"
                  placeholder="Conte-nos sobre sua ideia, estilo desejado, tamanho, localização no corpo..."
                  data-testid="contact-message-textarea"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-5 px-6 rounded-lg font-bold text-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-xl"
                data-testid="contact-submit-button"
              >
                <MessageCircle size={24} />
                Enviar via WhatsApp
              </button>
              
              <p className="text-sm text-gray-500 text-center">
                Ao enviar, você será redirecionado para o WhatsApp com suas informações preenchidas
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer PROFISSIONAL com termos
const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Footer Principal */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img
                  src="/images/logo/tattoo-ate-os-ossos.png"
                  alt="TAO Logo"
                  className="w-16 h-16 rounded-full bg-white/10 p-2"
                />
                <div>
                  <h3 className="text-3xl font-bold text-orange-500">TAO</h3>
                  <p className="text-gray-400">Tattoo até os Ossos</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md text-lg leading-relaxed">
                Transformamos ideias em arte permanente. Especialistas em tatuagens artísticas, 
                realismo, blackwork e piercing profissional na Vila Zelina, São Paulo.
              </p>
              <p className="text-orange-400 font-bold text-lg">Arte que marca para sempre</p>
              
              {/* Redes Sociais */}
              <div className="flex gap-4 mt-6">
                <a
                  href="https://instagram.com/tattooateosossos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                  data-testid="footer-instagram"
                >
                  <Instagram className="text-white" size={20} />
                </a>
                <a
                  href="https://wa.me/5511939369778"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 p-3 rounded-lg hover:bg-green-600 transition-all duration-300"
                  data-testid="footer-whatsapp"
                >
                  <Phone className="text-white" size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6 text-orange-500">Serviços</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#servicos" className="hover:text-orange-400 transition-colors">Tatuagens Artísticas</a></li>
                <li><a href="#servicos" className="hover:text-orange-400 transition-colors">Realismo</a></li>
                <li><a href="#servicos" className="hover:text-orange-400 transition-colors">Blackwork</a></li>
                <li><a href="#servicos" className="hover:text-orange-400 transition-colors">Fino Traço</a></li>
                <li><a href="#servicos" className="hover:text-orange-400 transition-colors">Pinturas Digitais</a></li>
                <li><a href="#servicos" className="hover:text-orange-400 transition-colors">Piercing</a></li>
                <li><a href="#servicos" className="hover:text-orange-400 transition-colors">Cover Up</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6 text-orange-500">Contato</h4>
              <div className="space-y-3 text-gray-400">
                <p>(11) 93936-9778</p>
                <p>@tattooateosossos</p>
                <p>Rua Monsenhor Pio Ragazinskas, 15</p>
                <p>Vila Zelina - São Paulo - SP</p>
                <p className="text-orange-400 font-semibold">Seg-Sex: 13:30-19h | Sáb: 10h-17h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom com Links Legais */}
      <div className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Tattoo Até os Ossos LTDA. Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="/termos.html" className="text-gray-400 hover:text-orange-400 transition-colors">Termos de Uso</a>
              <a href="/privacidade.html" className="text-gray-400 hover:text-orange-400 transition-colors">Política de Privacidade</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Componente principal Home
const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

// Componente principal App
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;