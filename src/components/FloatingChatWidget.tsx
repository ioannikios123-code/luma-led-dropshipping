import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, X, Send, Phone, Mail } from "lucide-react";

const FloatingChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "👋 Hi! I'm Sarah from LumaLights support. How can I help you today?",
      sender: "support",
      time: "now"
    }
  ]);
  const [newMessage, setNewMessage] = useState("");

  const quickReplies = [
    "Product questions",
    "Installation help", 
    "Order status",
    "Returns & exchanges",
    "Technical support"
  ];

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    
    const userMessage = {
      id: messages.length + 1,
      text: newMessage,
      sender: "user",
      time: "now"
    };
    
    setMessages(prev => [...prev, userMessage]);
    setNewMessage("");
    
    // Simulate support response
    setTimeout(() => {
      const supportResponse = {
        id: messages.length + 2,
        text: "Thanks for your message! I'll help you with that right away. For immediate assistance, you can also call us at 1-800-LED-HELP.",
        sender: "support",
        time: "now"
      };
      setMessages(prev => [...prev, supportResponse]);
    }, 1000);
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
            Online
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
                Live Support
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
            <p className="text-sm text-foreground/60">Usually responds instantly</p>
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
            </div>

            {/* Quick Replies */}
            {messages.length === 1 && (
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
                className="flex-1 h-9"
              />
              <Button 
                size="sm" 
                onClick={handleSendMessage}
                className="bg-gradient-primary border-0 h-9 w-9 p-0"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>

            {/* Contact Options */}
            <div className="flex justify-center gap-4 mt-2 pt-2 border-t border-border/30">
              <Button
                variant="ghost"
                size="sm"
                className="text-xs h-auto p-1 text-foreground/60"
                onClick={() => window.open('tel:1-800-LED-HELP')}
              >
                <Phone className="w-3 h-3 mr-1" />
                Call
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-xs h-auto p-1 text-foreground/60"
                onClick={() => window.open('mailto:support@lumalights.com')}
              >
                <Mail className="w-3 h-3 mr-1" />
                Email
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default FloatingChatWidget;