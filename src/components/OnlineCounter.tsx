import { useState, useEffect } from 'react';
import { Users, MessageCircle, Phone } from 'lucide-react';

const OnlineCounter = () => {
  const [onlineCount, setOnlineCount] = useState(22);
  const [currentNotification, setCurrentNotification] = useState(0);
  const [showNotification, setShowNotification] = useState(false);

  const notifications = [
    {
      icon: MessageCircle,
      text: "1 pessoa acabou de entrar em contato",
      color: "text-green-600"
    },
    {
      icon: Phone,
      text: "2 pessoas chamaram no WhatsApp",
      color: "text-blue-600"
    }
  ];

  // Incrementa contador a cada 15 segundos
  useEffect(() => {
    const counterInterval = setInterval(() => {
      setOnlineCount(prev => prev + 3);
    }, 15000);

    return () => clearInterval(counterInterval);
  }, []);

  // Alterna notificações a cada 8 segundos
  useEffect(() => {
    const notificationInterval = setInterval(() => {
      setShowNotification(true);
      
      setTimeout(() => {
        setShowNotification(false);
        setCurrentNotification(prev => (prev + 1) % notifications.length);
      }, 4000);
    }, 8000);

    // Mostra a primeira notificação após 2 segundos
    const initialTimeout = setTimeout(() => {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 4000);
    }, 2000);

    return () => {
      clearInterval(notificationInterval);
      clearTimeout(initialTimeout);
    };
  }, []);

  const CurrentIcon = notifications[currentNotification].icon;

  return (
    <div className="fixed bottom-20 left-4 z-30 space-y-2">
      {/* Contador de pessoas online */}
      <div className="bg-white/90 backdrop-blur-sm rounded-md shadow-md p-2 border border-gray-200">
        <div className="flex items-center space-x-1.5">
          <div className="relative">
            <Users className="w-4 h-4 text-brand-red" />
            <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
          </div>
          <div>
            <div className="text-xs font-semibold text-gray-900">{onlineCount} pessoas</div>
            <div className="text-xs text-gray-600">online agora</div>
          </div>
        </div>
      </div>

      {/* Notificações alternadas */}
      <div className={`bg-white/90 backdrop-blur-sm rounded-md shadow-md p-2 border border-gray-200 transition-all duration-500 ${
        showNotification ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
      }`}>
        <div className="flex items-center space-x-1.5">
          <CurrentIcon className={`w-3.5 h-3.5 ${notifications[currentNotification].color}`} />
          <div className="text-xs text-gray-800">
            {notifications[currentNotification].text}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineCounter;
