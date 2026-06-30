import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI } from "@google/genai";
import { 
  MessageSquare, 
  X, 
  Send, 
  Sparkles, 
  RefreshCw, 
  HelpCircle, 
  ChevronRight, 
  Bot, 
  User, 
  Compass, 
  Info,
  CheckCircle,
  Clock,
  BookOpen,
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  ExternalLink
} from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

const SUGGESTED_TOPICS = [
  {
    icon: <CheckCircle size={14} className="text-brand-gold" />,
    label: "What are WA License Requirements?",
    prompt: "What are the core requirements to get a real estate broker license in Washington State?"
  },
  {
    icon: <Clock size={14} className="text-brand-gold" />,
    label: "How long does it take?",
    prompt: "How many hours of education do I need, and how long does it typically take to finish the program?"
  },
  {
    icon: <BookOpen size={14} className="text-brand-gold" />,
    label: "Do you offer Exam Prep?",
    prompt: "Tell me about Rockwell's Exam Prep options. What is Cram Media and does it guarantee passing?"
  },
  {
    icon: <Sparkles size={14} className="text-brand-gold" />,
    label: "Online vs. Classroom formats",
    prompt: "What is the difference between your Home Study and Online course formats?"
  }
];

export default function GeminiChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "Hello! Welcome to the Rockwell Institute Academic Assistant.\n\nI am your dedicated advisor. Ask me anything about:\n* Getting your Washington State Real Estate License\n* Our approved 90-hour courses and study packages\n* Exam Prep (Cram Media) and state exam tips\n* Continuing Education (CE) renewals\n\nHow can I help guide your real estate career today?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasNewMessage, setHasNewMessage] = useState(true);
  const [isDemoMode, setIsDemoMode] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Check if API key is configured
  const apiKey = process.env.GEMINI_API_KEY;
  const isKeyValid = apiKey && apiKey.length > 5 && !apiKey.startsWith('MY_');

  useEffect(() => {
    if (!isKeyValid) {
      setIsDemoMode(true);
    } else {
      setIsDemoMode(false);
    }
  }, [isKeyValid]);

  // Scroll to bottom whenever messages list or open state changes
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isLoading]);

  const handleOpenToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setHasNewMessage(false);
    }
  };

  // Helper to format bot responses nicely
  const formatText = (text: string) => {
    // Replace and strip any double asterisks (**) to completely prevent bold markers appearing in text
    const cleanedText = text.replace(/\*\*/g, '');

    return cleanedText.split('\n').map((line, i) => {
      let formattedLine = line;
      
      // Handle list bullet items starting with * or -
      const isBullet = line.trim().startsWith('*') || line.trim().startsWith('-');
      if (isBullet) {
        formattedLine = formattedLine.replace(/^[\s*-]+/, '').trim();
      }

      if (isBullet) {
        return (
          <li key={i} className="ml-4 list-disc text-stone-700 text-xs md:text-sm leading-relaxed mb-1 pl-1">
            {formattedLine}
          </li>
        );
      }

      return (
        <p key={i} className="text-stone-700 text-xs md:text-sm leading-relaxed mb-2.5">
          {formattedLine === '' ? '\u00A0' : formattedLine}
        </p>
      );
    });
  };

  const getDemoResponse = (prompt: string): string => {
    const p = prompt.toLowerCase().trim();

    // Specific triggers for socials and maps
    if (p.includes('instagram') || p.includes('insta')) {
      return "Follow Rockwell Institute on Instagram! Our official feed features study guide flashcards, course summaries, celebration posts for successful student brokers, and local Pacific Northwest real estate market highlights.\n\n* Instagram Profile: @rockwellinstitute";
    }
    if (p.includes('facebook') || p.includes('fb')) {
      return "Join our active community on Facebook! We post Washington state real estate licensing guidelines, live study session announcements, career opportunities, and direct help from expert alumni brokers.\n\n* Facebook Page: Rockwell Institute";
    }
    if (p.includes('twitter') || p.includes('tweet') || p.includes('x.com')) {
      return "Stay up to date with Rockwell School on Twitter/X! We share state licensing regulations, real estate board announcements, exam prep tips, and key continuing education deadline alerts.\n\n* Twitter/X: @RockwellSchool";
    }
    if (p.includes('map') || p.includes('location') || p.includes('address') || p.includes('bellevue campus') || p.includes('direction')) {
      return "Our main Bellevue Administrative Campus is located at:\n13218 NE 20th St, Bellevue, WA 98005\n\nYou are welcome to drop by for class registration, physical course textbook pickups, and academic study assistance. Use the action buttons below to load driving directions or open our interactive campus map!";
    }
    if (p.includes('social') || p.includes('connect')) {
      return "Stay connected with Rockwell Institute across all our official social channels! Click any of the interactive buttons below to view our profiles, follow our state exam tips, or reach out to our active community.";
    }

    if (p.includes('requirement') || p.includes('how to get') || p.includes('become a broker')) {
      return "To get your Washington State Real Estate Broker License, you must meet these state requirements:\n\n1. Be at least 18 years of age\n2. Have a High School Diploma or equivalent\n3. Successfully complete 90 hours of approved education (60-hour Real Estate Fundamentals + 30-hour Real Estate Practices)\n4. Pass the Washington State Licensing Exam administered by AMP/PSI\n5. Submit to a fingerprint background check\n\nRockwell Institute's packages cover all 90 hours of required training and are fully approved by the Washington Department of Licensing (DOL).";
    }
    if (p.includes('hour') || p.includes('how long') || p.includes('time') || p.includes('schedule')) {
      return "The state of Washington requires 90 hours of certified learning to sit for the broker's exam. \n\n* Self-Paced Online format: Most students finish in 3 to 5 weeks depending on their daily study commitment.\n* Home Study format: You receive pristine hard-copy textbooks combined with online quizzes and can finish entirely on your own schedule.\n* Daily commitment: Just 2-3 hours per day lets you complete the state requirement in under a month!";
    }
    if (p.includes('exam prep') || p.includes('cram') || p.includes('pass') || p.includes('guarantee')) {
      return "Rockwell's Cram Media Exam Prep is Washington's gold standard! It has a 98% pass rate.\n\n* It includes over 1,000 simulated state exam questions that mirror the actual test perfectly.\n* It features instant feedback, in-depth explanations for every answer, and full timed mock exams.\n* Our Passing Guarantee: If you pass our Cram Media practice exams with an 80% or higher and don't pass the state exam on your first try, we will fully refund your purchase! It's completely risk-free.";
    }
    if (p.includes('online') || p.includes('home study') || p.includes('format') || p.includes('classroom')) {
      return "We offer two highly flexible, 100% approved home learning formats:\n\n1. On-the-Go Online Course: Interactive web-based lessons, progress trackers, and virtual practice exams. Ideal for studying on laptops, tablets, or phones.\n2. Home Study (Textbook) Course: Includes premium printed textbooks shipped to your door, perfect for students who prefer highlighting physical pages, plus web access to quizzes.\n\nBoth formats include academic support from local real estate instructors and are valid for the mandatory 90 hours.";
    }
    if (p.includes('cost') || p.includes('price') || p.includes('fee')) {
      return "Our Washington Broker course packages start at $439 for our basic textbook pack and range to $499 for our premium bundle which includes the legendary Cram Media Exam Prep. All packages include the mandatory 90 hours of state-certified courses with no hidden fees and free credit reporting to the state.";
    }

    // Strict validation for off-topic/general questions
    const realEstateKeywords = [
      'real estate', 'license', 'broker', 'rockwell', 'cram', 'exam', 'fundamentals', 'practices', 'washington', 'dol', 'amp', 'psi', 'course', 'pricing', 'cost', 'fee', 'package', 'ce', 'continuing education', 'managing broker', 'school', 'hours', 'study', 'class', 'format', 'textbook', 'help', 'register', 'pass', 'score', 'requirements',
      'instagram', 'insta', 'facebook', 'fb', 'twitter', 'tweet', 'x.com', 'map', 'location', 'address', 'directions', 'coordinates', 'social', 'connect'
    ];
    
    const isGreeting = p.match(/^(hello|hi|hey|greetings|good morning|good afternoon|good evening|yo)\b/);
    const isRealEstateRelated = realEstateKeywords.some(keyword => p.includes(keyword));

    if (isGreeting && p.length < 12) {
      return "Hello! I am your Rockwell AI Coach. How can I help you navigate your Washington State Real Estate licensing journey today?";
    }

    if (!isRealEstateRelated) {
      return "I can only assist with questions regarding Washington State real estate licensing, course requirements, curriculum formats, and Rockwell Institute academic programs. Please let me know how I can help with your real estate studies!";
    }

    return "That is a great question! At Rockwell Institute, we help you navigate every step of your real estate journey. \n\nOur Washington programs are 100% approved, self-paced, and supported by industry instructors. \n\nWould you like more information on our 90-hour Broker Pre-Licensing package or our famous Cram Media exam prep? You can also check our interactive calculator on the home page to estimate your licensing costs!";
  };

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: textToSend,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      if (isDemoMode) {
        // Simulate a smart delay for the chatbot typing effect
        await new Promise(resolve => setTimeout(resolve, 1200));
        const simulatedText = getDemoResponse(textToSend);
        const botMsg: Message = {
          id: `bot-${Date.now()}`,
          role: 'model',
          text: simulatedText,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMsg]);
      } else {
        // Query real Gemini API using @google/genai SDK
        const ai = new GoogleGenAI({
          apiKey: apiKey,
          httpOptions: {
            headers: {
              'User-Agent': 'aistudio-build',
            }
          }
        });

        // Map existing messages to Gemini API conversation format
        // We exclude the initial welcome message to avoid bloat, or include it as assistant role
        const historyParts = messages.map(msg => ({
          role: msg.role,
          parts: [{ text: msg.text }]
        }));

        const response = await ai.models.generateContent({
          model: "gemini-3.5-flash",
          contents: [
            ...historyParts,
            { role: 'user', parts: [{ text: textToSend }] }
          ],
          config: {
            systemInstruction: "You are 'Rockwell AI Coach', a professional, knowledgeable, encouraging, and highly helpful academic advisor for Rockwell Institute, the leading real estate school in Washington State. Help students understand Washington licensing laws, real estate fundamentals, practices, exam registration, AMP/PSI guidelines, continuing education hours (30 hours every 2 years), managing broker qualifications (3 years experience + 120 hours), and why Rockwell courses with Cram Media have a 98% pass rate. CRITICAL STRICTURE: You must only answer questions regarding Rockwell Institute, Washington real estate licensing, course formats, and school programs. If the user asks general questions, chit-chat, programming, general math, other science topics, history, or anything unrelated to Washington real estate education, politely and firmly decline, and guide them back to real estate licensing topics. CRITICAL RULE: NEVER use markdown bold markers like '**' in your answers. Print everything in clean, standard typography without '**' symbols. Always keep answers beautifully structured, polite, highly informative, and formatted with clean bullet points where appropriate. Keep responses under 220 words."
          }
        });

        const botMsgText = response.text || "I apologize, but I received an empty response. How else can I assist you?";
        
        const botMsg: Message = {
          id: `bot-${Date.now()}`,
          role: 'model',
          text: botMsgText,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMsg]);
      }
    } catch (error) {
      console.error("Gemini Chatbot Error:", error);
      const botErrorMsg: Message = {
        id: `bot-err-${Date.now()}`,
        role: 'model',
        text: "I encountered a minor connection issue while reaching our AI core. However, I can still guide you!\n\nFor immediate assistance, please know that our 90-Hour Washington Broker Package covers everything needed for the state licensing exam, and our student advisors are available toll-free at (800) 221-9347.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botErrorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: 'welcome',
        role: 'model',
        text: "Chat history cleared. I am ready for your next real estate question! How can I help you navigate your career path today?",
        timestamp: new Date()
      }
    ]);
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        <motion.button
          id="chat-toggle-button"
          onClick={handleOpenToggle}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`h-14 w-14 rounded-full flex items-center justify-center text-white shadow-2xl relative border cursor-pointer transition-all duration-300 ${
            isOpen 
              ? 'bg-brand-burgundy border-brand-gold/30 rotate-90' 
              : 'bg-brand-navy border-brand-gold/35 hover:bg-brand-burgundy-light'
          }`}
        >
          {isOpen ? <X size={24} /> : <MessageSquare size={24} className="text-brand-gold animate-pulse" />}
          
          {hasNewMessage && !isOpen && (
            <span className="absolute -top-1.5 -right-1.5 bg-brand-gold text-brand-navy text-[10px] font-extrabold px-1.5 py-0.5 rounded-full border-2 border-white shadow-md animate-bounce">
              1
            </span>
          )}
        </motion.button>
      </div>

      {/* Floating Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="chat-window-panel"
            initial={{ opacity: 0, y: 35, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 180 }}
            className="fixed bottom-24 right-4 sm:right-6 w-[calc(100vw-32px)] sm:w-[425px] h-[580px] max-h-[calc(100vh-115px)] sm:max-h-[80vh] rounded-2xl shadow-2xl z-50 flex flex-col bg-white/95 border border-brand-gold/25 overflow-hidden glass-premium"
          >
            {/* Header */}
            <div className="bg-brand-navy text-white p-4 flex items-center justify-between border-b border-brand-gold/20 relative">
              <div className="absolute inset-0 bg-radial from-brand-burgundy/15 to-transparent pointer-events-none" />
              <div className="flex items-center gap-3 relative z-10">
                <div className="h-10 w-10 rounded-full bg-white border border-brand-gold/30 flex items-center justify-center shrink-0 overflow-hidden shadow-inner">
                  <img 
                    src="https://lh3.googleusercontent.com/d/12WU5wZWTP3suDWOm0iHY3RAtKW8nvk18" 
                    alt="Rockwell Logo" 
                    className="h-full w-full object-cover rounded-full"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-left">
                  <h3 className="font-serif font-bold text-sm tracking-wide text-white flex items-center gap-1.5">
                    Rockwell AI Coach
                    <span className="text-[9px] bg-brand-gold/15 text-brand-gold px-1.5 py-0.5 rounded border border-brand-gold/25 font-sans font-bold whitespace-nowrap">Approved Advisor</span>
                  </h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-[10px] text-stone-300 font-medium whitespace-nowrap">
                      {isDemoMode ? "Intelligent Demo Mode" : "Online • Powered by Gemini"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1 relative z-10">
                <button 
                  onClick={clearChat}
                  title="Clear chat history"
                  className="p-2.5 rounded-lg hover:bg-white/10 text-stone-300 hover:text-white transition-colors cursor-pointer min-w-[38px] min-h-[38px] flex items-center justify-center"
                >
                  <RefreshCw size={15} />
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2.5 rounded-lg hover:bg-white/10 text-stone-300 hover:text-white transition-colors cursor-pointer min-w-[38px] min-h-[38px] flex items-center justify-center"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Conversation Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin bg-stone-50/50 touch-pan-y overscroll-contain">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex gap-2.5 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {/* Assistant Avatar */}
                  {msg.role === 'model' && (
                    <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center border border-brand-gold/25 shrink-0 shadow-sm overflow-hidden">
                      <img 
                        src="https://lh3.googleusercontent.com/d/12WU5wZWTP3suDWOm0iHY3RAtKW8nvk18" 
                        alt="Rockwell Logo" 
                        className="h-full w-full object-cover rounded-full"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}

                  {/* Bubble Container */}
                  <div className={`max-w-[82%] sm:max-w-[78%] flex flex-col`}>
                    <div className={`rounded-2xl p-3 sm:p-3.5 shadow-xs text-left ${
                      msg.role === 'user'
                        ? 'bg-brand-burgundy text-white rounded-tr-none border border-brand-burgundy-light/25 font-medium'
                        : 'bg-white text-stone-800 rounded-tl-none border border-brand-gold/15'
                    }`}>
                      {msg.role === 'user' ? (
                        <p className="text-xs sm:text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                      ) : (
                        <div className="space-y-1">
                          {formatText(msg.text)}

                          {/* Dynamic buttons for Instagram, Facebook, Twitter, and Map */}
                          {(() => {
                            const txt = msg.text.toLowerCase();
                            const hasInsta = txt.includes('instagram') || txt.includes('insta');
                            const hasFb = txt.includes('facebook') || txt.includes('fb');
                            const hasTwitter = txt.includes('twitter') || txt.includes('tweet') || txt.includes('x.com');
                            const hasMap = txt.includes('map') || txt.includes('location') || txt.includes('address') || txt.includes('bellevue campus') || txt.includes('direction');
                            const hasSocials = txt.includes('social') || txt.includes('connect');

                            const showInsta = hasInsta || hasSocials;
                            const showFb = hasFb || hasSocials;
                            const showTwitter = hasTwitter || hasSocials;
                            const showMap = hasMap;

                            if (showInsta || showFb || showTwitter || showMap) {
                              return (
                                <div className="mt-3.5 pt-3 border-t border-stone-100 flex flex-wrap gap-2 animate-fade-in">
                                  {showFb && (
                                    <a
                                      href="https://www.facebook.com/RockwellInstitute/"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-1.5 bg-[#1877F2]/10 hover:bg-[#1877F2]/20 text-[#1877F2] border border-[#1877F2]/20 px-2.5 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all"
                                    >
                                      <Facebook size={12} />
                                      Facebook
                                    </a>
                                  )}
                                  {showInsta && (
                                    <a
                                      href="https://www.instagram.com/rockwellinstitute/"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-1.5 bg-[#E4405F]/10 hover:bg-[#E4405F]/20 text-[#E4405F] border border-[#E4405F]/20 px-2.5 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all"
                                    >
                                      <Instagram size={12} />
                                      Instagram
                                    </a>
                                  )}
                                  {showTwitter && (
                                    <a
                                      href="https://x.com/RockwellSchool"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-1.5 bg-stone-900/10 hover:bg-stone-900/20 text-stone-800 border border-stone-900/10 px-2.5 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all"
                                    >
                                      <Twitter size={12} />
                                      Twitter / X
                                    </a>
                                  )}
                                  {showMap && (
                                    <div className="flex flex-col sm:flex-row gap-2 w-full mt-1.5">
                                      <a
                                        href="https://maps.google.com/?q=13218+NE+20th+St,+Bellevue,+WA+98005"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-1.5 bg-brand-navy text-brand-gold hover:bg-brand-navy-light border border-brand-gold/30 px-3 py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all shadow-xs flex-1"
                                      >
                                        <MapPin size={12} />
                                        Google Maps Directions
                                      </a>
                                      <button
                                        type="button"
                                        onClick={() => {
                                          setIsOpen(false);
                                          const mapEl = document.getElementById('campus-map-section');
                                          if (mapEl) {
                                            mapEl.scrollIntoView({ behavior: 'smooth' });
                                          } else {
                                            window.scrollTo({ top: document.body.scrollHeight - 1500, behavior: 'smooth' });
                                          }
                                        }}
                                        className="inline-flex items-center justify-center gap-1.5 bg-white text-stone-700 hover:text-brand-burgundy border border-stone-200 hover:border-brand-burgundy/40 px-3 py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all shadow-xs flex-1 cursor-pointer"
                                      >
                                        <Compass size={12} className="text-brand-gold" />
                                        On-site Interactive Map
                                      </button>
                                    </div>
                                  )}
                                </div>
                              );
                            }
                            return null;
                          })()}
                        </div>
                      )}
                    </div>
                    <span className={`text-[9px] text-stone-400 mt-1 px-1 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>

                  {/* User Avatar */}
                  {msg.role === 'user' && (
                    <div className="h-8 w-8 rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-burgundy shrink-0 shadow-sm">
                      <User size={15} />
                    </div>
                  )}
                </div>
              ))}

              {/* Typing indicator */}
              {isLoading && (
                <div className="flex gap-2.5 justify-start">
                  <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center border border-brand-gold/25 shrink-0 overflow-hidden">
                    <img 
                      src="https://lh3.googleusercontent.com/d/12WU5wZWTP3suDWOm0iHY3RAtKW8nvk18" 
                      alt="Rockwell Logo" 
                      className="h-full w-full object-cover rounded-full"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="bg-white border border-brand-gold/15 rounded-2xl rounded-tl-none p-3 shadow-xs max-w-[78%] text-left">
                    <div className="flex items-center gap-1 py-1.5 px-1">
                      <span className="w-2 h-2 rounded-full bg-brand-gold animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 rounded-full bg-brand-gold animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 rounded-full bg-brand-gold animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions Block */}
            {messages.length < 3 && !isLoading && (
              <div className="p-2 bg-white border-t border-stone-100 text-left shrink-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                  {SUGGESTED_TOPICS.map((topic, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(topic.prompt)}
                      className="flex items-center justify-between text-left px-2 py-1.5 rounded-md bg-stone-50 border border-stone-150 hover:bg-brand-gold/5 hover:border-brand-gold/40 text-brand-navy font-medium transition-all group cursor-pointer min-h-[32px] touch-manipulation"
                    >
                      <div className="flex items-center gap-1.5 min-w-0">
                        <span className="shrink-0">{topic.icon}</span>
                        <span className="truncate max-w-[280px] text-[10px] leading-tight">{topic.label}</span>
                      </div>
                      <ChevronRight size={10} className="text-stone-300 shrink-0 group-hover:text-brand-gold transform group-hover:translate-x-0.5 transition-all" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Footer */}
            <div className="p-3 bg-white border-t border-brand-gold/10 relative z-10 shrink-0">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage(inputValue);
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  disabled={isLoading}
                  placeholder="Ask a question..."
                  className="flex-1 bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-3 text-xs md:text-sm focus:outline-hidden focus:ring-1 focus:ring-brand-burgundy focus:border-brand-burgundy disabled:opacity-50 text-stone-800"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  className="h-11 w-11 rounded-xl bg-brand-burgundy hover:bg-brand-burgundy-dark text-white flex items-center justify-center shrink-0 transition-colors shadow-md disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer min-w-[44px] min-h-[44px]"
                >
                  <Send size={16} className="text-brand-gold" />
                </button>
              </form>
              <div className="flex items-center justify-between mt-2 px-1 text-[9px] text-stone-400 font-medium">
                <span>⚡ Real-time advisor responses</span>
                <span>Type in natural English</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
