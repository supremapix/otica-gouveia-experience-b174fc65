
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Log the 404 error to help with future redirects
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="flex-grow flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <h1 className="text-9xl font-bold text-brand-red mb-4">404</h1>
          <p className="text-2xl text-brand-gray-900 mb-6">Oops! Página não encontrada</p>
          <p className="text-brand-gray-700 mb-8">
            A página que você está procurando não existe ou foi movida.
            Estamos sempre atualizando nosso site para melhorar sua experiência.
          </p>
          <div className="mb-8">
            <p className="text-brand-gray-700 mb-4">
              Você pode estar procurando:
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Link to="/#services" className="inline-block px-3 py-1 bg-brand-gray-100 text-brand-gray-700 rounded-full hover:bg-brand-gray-200">
                Nossos serviços
              </Link>
              <Link to="/#products" className="inline-block px-3 py-1 bg-brand-gray-100 text-brand-gray-700 rounded-full hover:bg-brand-gray-200">
                Nossos produtos
              </Link>
              <Link to="/#about" className="inline-block px-3 py-1 bg-brand-gray-100 text-brand-gray-700 rounded-full hover:bg-brand-gray-200">
                Sobre nós
              </Link>
              <Link to="/#contact" className="inline-block px-3 py-1 bg-brand-gray-100 text-brand-gray-700 rounded-full hover:bg-brand-gray-200">
                Contato
              </Link>
            </div>
          </div>
          <Link to="/" className="btn-primary inline-flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Voltar para a página inicial
          </Link>
        </div>
      </div>
      <footer className="bg-brand-gray-900 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-brand-gray-400 text-sm">
            © 2025 Ótica Gouveia. Todos os direitos reservados.
          </p>
          <p className="mt-2 text-brand-gray-400 text-sm">
            Criação de sites{" "}
            <a 
              href="https://www.supremamidia.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-brand-red hover:underline"
            >
              Suprema Mídia
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default NotFound;
