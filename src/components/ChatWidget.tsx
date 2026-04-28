import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import type { KeyboardEvent } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Message } from "@/models";

export function ChatWidget() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "welcome", // Use key for bot messages to allow dynamic translation
      sender: "bot",
    },
  ]);

  const handleSend = () => {
    if (!message.trim()) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      text: message,
      sender: "user" as const,
    };
    setMessages((prev) => [...prev, userMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botMessage = {
        id: Date.now() + 1,
        text: "botResponse", // Use key for bot messages
        sender: "bot" as const,
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);

    setMessage("");
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const { pathname } = useLocation();

  useEffect(() => {
    // Small timeout to ensure footer is rendered
    const timeoutId = setTimeout(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(!entry.isIntersecting);
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px 50px 0px",
        },
      );

      const footer = document.querySelector("footer");
      if (footer) {
        observer.observe(footer);
      }

      return () => {
        if (footer) {
          observer.unobserve(footer);
        }
      };
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return (
    <div
      className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[10001] transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      {isOpen ? (
        <div className="bg-surface-2 border border-border rounded-2xl w-[calc(100vw-2rem)] max-w-sm sm:w-80 shadow-2xl overflow-hidden flex flex-col mb-4 animate-slide-in-bottom">
          <div className="bg-surface p-4 border-b border-border flex justify-between items-center">
            <span className="font-display font-bold text-ivory text-base sm:text-lg tracking-wider">
              {t.chat.title}
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-ivory transition-all duration-300 hover:rotate-90"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>
          <div className="p-4 h-64 overflow-y-auto bg-background/50 flex flex-col gap-3 scrollbar-hide">
            {messages.map((msg, index) => (
              <div
                key={msg.id}
                className={`bg-surface border border-border p-3 rounded-lg text-sm text-ivory max-w-[85%] animate-scale-in transition-all duration-300 ${
                  msg.sender === "user"
                    ? "ml-auto rounded-tr-none bg-primary/20 border-primary/30"
                    : "rounded-tl-none border-rose-gold/20"
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {msg.sender === "bot"
                  ? t.chat[msg.text as keyof typeof t.chat] || msg.text
                  : msg.text}
              </div>
            ))}
          </div>
          <div className="p-3 border-t border-border bg-surface flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={t.chat.placeholder}
              className="flex-1 bg-background border border-border rounded-full px-4 py-2 text-sm text-ivory placeholder:text-muted-foreground focus:outline-none focus:border-rose-gold transition-all duration-300"
            />
            <button
              onClick={handleSend}
              className="bg-primary text-primary-foreground rounded-full p-2 w-10 h-10 flex items-center justify-center hover:opacity-90 transition-all duration-300 shrink-0 hover:scale-110 rose-gold-glow"
              aria-label={t.chat.send}
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      ) : null}

      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-primary text-primary-foreground p-3 sm:p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300 rose-gold-glow flex items-center justify-center pointer-events-auto animate-scale-in"
          aria-label="Open chat"
        >
          <MessageCircle size={20} className="sm:w-6 sm:h-6" />
        </button>
      )}
    </div>
  );
}
