
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
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
          </p>
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
            © {new Date().getFullYear()} Ótica Gouveia. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default NotFound;
