'use client';

import { useState, useRef, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Loader2, Send, Bot, User, Mountain, Compass, Landmark, Leaf, Waves, Wind } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
}

interface Place {
  id: string;
  name: string;
  description: string;
  image?: string;
  duration?: string;
  estimatedCost?: string;
  rating?: number;
}

interface ChatBoxProps {
  onPlacesExtracted?: (places: Place[]) => void;
}

function ChatBox({ onPlacesExtracted }: ChatBoxProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Extract places from bot response
  const extractPlaces = (text: string): Place[] => {
    const places: Place[] = [];
    
    // Try to find JSON format first (if the AI returns structured data)
    try {
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const parsed = JSON.parse(jsonMatch[0]);
        if (Array.isArray(parsed)) {
          return parsed.map((place: any, index: number) => ({
            id: `place-${Date.now()}-${index}`,
            name: place.name || 'Unknown',
            description: place.description || '',
            image: place.image,
            duration: place.duration,
            estimatedCost: place.estimatedCost,
            rating: place.rating,
          }));
        }
      }
    } catch (e) {
      // Continue to regex parsing
    }

    // Fallback: Try to extract places from natural language
    // Pattern: "สถานที่: ชื่อ - คำอธิบาย"
    const placePattern = /(?:สถานที่|place)[:\s]+([^\n-]+)[\s-]+([^\n]+)/gi;
    let match;
    while ((match = placePattern.exec(text)) !== null) {
      places.push({
        id: `place-${Date.now()}-${places.length}`,
        name: match[1].trim(),
        description: match[2].trim(),
      });
    }

    return places;
  };

  const sendMessage = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
    };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/aimodel', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userMessage: input,
          preferences: {},
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.response) {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: data.response,
          sender: 'bot',
        };
        setMessages(prevMessages => [...prevMessages, botMessage]);
        
        // Extract and pass places to parent
        const extractedPlaces = extractPlaces(data.response);
        if (extractedPlaces.length > 0 && onPlacesExtracted) {
          onPlacesExtracted(extractedPlaces);
        }
      }
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'ขออภัย เกิดข้อผิดพลาดในการเชื่อมต่อกับ AI กรุณาลองใหม่อีกครั้ง',
        sender: 'bot',
      };
      setMessages(prevMessages => [...prevMessages, errorMessage]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="h-full flex flex-col bg-white rounded-lg shadow-lg">
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-3">
        <AnimatePresence mode="popLayout">
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className={`flex gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'bot' && (
                <div className="shrink-0">
                  <div className="w-8 h-8 rounded-full bg-linear-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                </div>
              )}
              
              <div
                className={`max-w-md px-4 py-2 rounded-lg ${
                  msg.sender === 'user'
                    ? 'bg-blue-600 text-white rounded-br-none'
                    : 'bg-gray-100 text-gray-800 rounded-bl-none'
                }`}
              >
                <p className="whitespace-pre-wrap text-sm">{msg.text}</p>
              </div>

              {msg.sender === 'user' && (
                <div className="shrink-0">
                  <div className="w-8 h-8 rounded-full bg-linear-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {loading && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-2"
          >
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <Bot className="w-4 h-4 text-gray-600" />
            </div>
            <div className="flex gap-1 items-center">
              <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" />
              <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce delay-100" />
              <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce delay-200" />
            </div>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="border rounded-xl p-4">
        <form onSubmit={sendMessage} className="flex gap-2 w-full h-20 sm:h-28 bg-transparent border-none focus-visible:ring-0 shadow-none resize-none text-sm sm:text-base">
          <Textarea
            placeholder="ถามอะไรก็ได้เกี่ยวกับที่เที่ยว..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage(e as unknown as FormEvent);
              }
            }}
            disabled={loading}
            className="flex-1 resize-none max-h-24"
          />
          <Button
            type="submit"
            disabled={loading || !input.trim()}
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-4 h-12 flex items-center justify-center disabled:opacity-50 transition-all"
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Send className="w-5 h-5" />
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default ChatBox;