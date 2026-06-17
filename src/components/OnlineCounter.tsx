import { useState, useEffect } from 'react';
import { Users, MessageCircle, Phone } from 'lucide-react';

const OnlineCounter = () => {
  const [onlineCount, setOnlineCount] = useState(22);
  const [currentNotification, setCurrentNotification] = useState(0);
  const [showNotification, setShowNotification] = useState(false);

  const notifications = [
    {
      icon: MessageCircle,
      text: '1 pessoa acabou de entrar em contato',
      color: 'text-green-600',
    },
    {
      icon: Phone,
      text: '2 pessoas chamaram no WhatsApp',
      color: 'text-brand-red',
    },
  ];

  useEffect(() => {
    const counterInterval = setInterval(() => {
      setOnlineCount((prev) => prev + 3);
    }, 15000);
    return () => clearInterval(counterInterval);
  }, []);

  useEffect(() => {
    const notificationInterval = setInterval(() => {
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
        setCurrentNotification((prev) => (prev + 1) % notifications.length);
      }, 3500);
    }, 9000);

    const initialTimeout = setTimeout(() => {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3500);
    }, 2500);

    return () => {
      clearInterval(notificationInterval);
      clearTimeout(initialTimeout);
    };
  }, []);

  const CurrentIcon = notifications[currentNotification].icon;

  return (
    <div
      className="fixed left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1.5 pointer-events-none"
      style={{ bottom: 'calc(env(safe-area-inset-bottom, 0px) + 6px)' }}
    >
      {/* Notificação alternada - sobe de baixo */}
      <div
        className={`bg-white/85 backdrop-blur-md rounded-full shadow-md px-3 py-1.5 border border-gray-200/60 transition-all duration-500 ease-out ${
          showNotification
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-6 pointer-events-none'
        }`}
      >
        <div className="flex items-center gap-1.5">
          <CurrentIcon className={`w-3.5 h-3.5 ${notifications[currentNotification].color}`} />
          <span className="text-[11px] font-medium text-gray-800 whitespace-nowrap">
            {notifications[currentNotification].text}
          </span>
        </div>
      </div>

      {/* Contador online - discreto */}
      <div className="bg-white/70 backdrop-blur-sm rounded-full shadow-sm px-2.5 py-1 border border-gray-200/50">
        <div className="flex items-center gap-1.5">
          <div className="relative">
            <Users className="w-3 h-3 text-brand-red" />
            <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
          </div>
          <span className="text-[10px] font-semibold text-gray-900">
            {onlineCount} <span className="text-gray-600 font-normal">online</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default OnlineCounter;
