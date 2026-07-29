import { MessageCircle } from "lucide-react";

declare global {
  interface Window {
    Tawk_API?: {
      maximize?: () => void;
      toggle?: () => void;
    };
  }
}

const ChatWidget = () => {
  const handleOpenChat = () => {
    if (window.Tawk_API?.maximize) {
      window.Tawk_API.maximize();
    } else if (window.Tawk_API?.toggle) {
      window.Tawk_API.toggle();
    }
  };

  return (
    <button
      onClick={handleOpenChat}
      className="fixed bottom-6 right-6 z-[110] w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group scale-100 opacity-100"
      aria-label="Open live chat"
    >
      <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
      {/* Notification dot */}
      <span className="absolute top-0 right-0 w-3 h-3 bg-destructive rounded-full border-2 border-background animate-pulse" />
    </button>
  );
};

export default ChatWidget;
