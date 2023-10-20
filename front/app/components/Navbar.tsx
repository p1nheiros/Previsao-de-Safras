import React from 'react';


const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-green p-5 fixed w-full top-0 z-10 select-none">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white font-bold text-2xl">AgroSync</div>
          <div className="hidden md:flex space-x-6 text-lg"> {/* Adiciona a classe 'hidden' para telas menores que md */}
            <a onClick={() => scrollToSection('#Home')} className="text-white cursor-pointer">Início</a>
            <a onClick={() => scrollToSection('#About')} className="text-white cursor-pointer">Sobre</a>
            <a onClick={() => scrollToSection('#Product')} className="text-white cursor-pointer">Projeto</a>
            <a onClick={() => scrollToSection('#Plans')} className="text-white cursor-pointer">Planos</a>
            <a onClick={() => scrollToSection('#Contact')} className="text-white cursor-pointer">Contato</a>
          </div>
          <div className="md:hidden flex"> {/* Adiciona a classe 'flex' para telas menores que md */}
            <button className="text-white">
              <i className="fas fa-bars"></i> {/* Adicione um ícone de menu (precisa de font-awesome ou outro conjunto de ícones) */}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
''