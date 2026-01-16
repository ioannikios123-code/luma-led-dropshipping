import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, X, Send, Phone, Mail, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: number;
  text: string;
  sender: "user" | "assistant";
  time: string;
}

const FloatingChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "👋 Hi! I'm your Luma Lights AI assistant. How can I help you today?",
      sender: "assistant",
      time: "now"
    }
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const quickReplies = [
    "Tell me about your products",
    "Installation help", 
    "How do I order?",
    "Returns policy",
    "Technical support"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!newMessage.trim() || isLoading) return;
    
    const userMessage: Message = {
      id: messages.length + 1,
      text: newMessage,
      sender: "user",
      time: "now"
    };
    
    setMessages(prev => [...prev, userMessage]);
    setNewMessage("");
    setIsLoading(true);
    
    try {
      const conversationHistory = [...messages, userMessage].map(msg => ({
        role: msg.sender === "user" ? "user" : "assistant",
        content: msg.text
      }));

      const { data, error } = await supabase.functions.invoke('chat-assistant', {
        body: { messages: conversationHistory }
      });

      if (error) throw error;

      const assistantResponse: Message = {
        id: messages.length + 2,
        text: data.choices[0].message.content,
        sender: "assistant",
        time: "now"
      };
      
      setMessages(prev => [...prev, assistantResponse]);
    } catch (error: any) {
      console.error('Error calling chat assistant:', error);
      
      let errorMessage = "I'm having trouble connecting right now. Please try again or contact us directly.";
      
      if (error.message?.includes("429")) {
        errorMessage = "I'm receiving too many requests. Please wait a moment and try again.";
      } else if (error.message?.includes("402")) {
        errorMessage = "Service temporarily unavailable. Please contact support@lumalights.com or call 1-800-LUMA-LED.";
      }
      
      toast({
        title: "Connection Error",
        description: errorMessage,
        variant: "destructive",
      });
      
      const errorResponse: Message = {
        id: messages.length + 2,
        text: errorMessage,
        sender: "assistant",
        time: "now"
      };
      
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-gradient-primary border-0 shadow-glow hover:scale-110 transition-all duration-300"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </Button>
        {!isOpen && (
          <Badge className="absolute -top-2 -left-2 bg-led-green text-white animate-pulse">
            AI Online
          </Badge>
        )}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-80 h-96 z-40 border-border/50 bg-card/95 backdrop-blur-sm shadow-glow animate-scale-in">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center justify-between text-lg">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-led-green rounded-full animate-pulse"></div>
                AI Assistant
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setIsOpen(false)}
                className="h-6 w-6 p-0"
              >
                <X className="w-4 h-4" />
              </Button>
            </CardTitle>
            <p className="text-sm text-foreground/60">Powered by AI • Instant responses</p>
          </CardHeader>
          
          <CardContent className="flex flex-col h-72">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto space-y-3 mb-4 pr-2">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg text-sm ${
                      message.sender === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-card border border-border/50'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-card border border-border/50 p-3 rounded-lg">
                    <Loader2 className="w-4 h-4 animate-spin" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length === 1 && !isLoading && (
              <div className="mb-3">
                <p className="text-xs text-foreground/60 mb-2">Quick questions:</p>
                <div className="flex flex-wrap gap-1">
                  {quickReplies.slice(0, 3).map((reply, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="text-xs h-6 px-2"
                      onClick={() => setNewMessage(reply)}
                    >
                      {reply}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Message Input */}
            <div className="flex gap-2">
              <Input
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                disabled={isLoading}
                className="flex-1 h-9"
              />
              <Button 
                size="sm" 
                onClick={handleSendMessage}
                disabled={isLoading}
                className="bg-gradient-primary border-0 h-9 w-9 p-0"
              >
                {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              </Button>
            </div>

            {/* Contact Options */}
            <div className="flex justify-center gap-4 mt-2 pt-2 border-t border-border/30">
              <a
                href="tel:+18005862533"
                className="inline-flex items-center text-xs p-1 text-foreground/60 hover:text-primary transition-colors"
              >
                <Phone className="w-3 h-3 mr-1" />
                Call
              </a>
              <a
                href="mailto:support@lumalights.com"
                className="inline-flex items-center text-xs p-1 text-foreground/60 hover:text-primary transition-colors"
              >
                <Mail className="w-3 h-3 mr-1" />
                Email
              </a>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default FloatingChatWidget;
