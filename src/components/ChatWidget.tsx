import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[99]">
      {isOpen ? (
        <div className="bg-surface-2 border border-border rounded-2xl w-80 shadow-2xl overflow-hidden flex flex-col mb-4">
          <div className="bg-surface p-4 border-b border-border flex justify-between items-center">
            <span className="font-display text-ivory text-lg">Chat with Us</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-ivory transition-colors"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>
          <div className="p-4 h-64 overflow-y-auto bg-background/50 flex flex-col gap-3">
            <div className="bg-surface border border-border p-3 rounded-lg text-sm text-ivory w-[85%] rounded-tl-none">
              Hello! Welcome to Lumina Beauty. How can we help you find your perfect glow today?
            </div>
          </div>
          <div className="p-3 border-t border-border bg-surface flex gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 bg-background border border-border rounded-full px-4 py-2 text-sm text-ivory placeholder:text-muted-foreground focus:outline-none focus:border-rose-gold transition-colors"
            />
            <button className="bg-primary text-primary-foreground rounded-full p-2 w-10 h-10 flex items-center justify-center hover:opacity-90 transition-opacity">
              <span className="sr-only">Send</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </button>
          </div>
        </div>
      ) : null}
      
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-primary text-primary-foreground p-4 rounded-full shadow-lg hover:scale-105 transition-transform rose-gold-glow ml-auto flex items-center justify-center"
          aria-label="Open chat"
        >
          <MessageCircle size={24} />
        </button>
      )}
    </div>
  );
}
