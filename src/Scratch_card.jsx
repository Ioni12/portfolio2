import { useEffect, useRef, useState } from 'react';

const ScratchCard = ({ width = 300, height = 150 }) => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [scratchSize, setScratchSize] = useState(30);
  const contextRef = useRef(null);
  const totalPixelsRef = useRef(width * height);
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Expanded collection of quotes organized by categories
  const quotes = [
    // Motivation & Success
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The future depends on what you do today. - Mahatma Gandhi",
    "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
    
    // Life & Wisdom
    "Life is 10% what happens to you and 90% how you react to it. - Charles R. Swindoll",
    "The purpose of our lives is to be happy. - Dalai Lama",
    "Live life as if everything is rigged in your favor. - Rumi",
    "Life isn't about finding yourself. Life is about creating yourself. - George Bernard Shaw",
    "The best way to predict the future is to create it. - Peter Drucker",
    
    // Growth & Learning
    "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice. - Brian Herbert",
    "The expert in anything was once a beginner. - Helen Hayes",
    "The beautiful thing about learning is that no one can take it away from you. - B.B. King",
    "Education is not preparation for life; education is life itself. - John Dewey",
    "Live as if you were to die tomorrow. Learn as if you were to live forever. - Mahatma Gandhi",
    
    // Courage & Perseverance
    "Courage is not having the strength to go on; it is going on when you don't have the strength. - Theodore Roosevelt",
    "It always seems impossible until it's done. - Nelson Mandela",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
    "Fall seven times and stand up eight. - Japanese Proverb",
    
    // Creativity & Innovation
    "Creativity is intelligence having fun. - Albert Einstein",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "The best way to have a good idea is to have lots of ideas. - Linus Pauling",
    "Imagination is everything. It is the preview of life's coming attractions. - Albert Einstein",
    "Change is the end result of all true learning. - Leo Buscaglia",
    
    // Peace & Mindfulness
    "Peace comes from within. Do not seek it without. - Buddha",
    "Every moment is a fresh beginning. - T.S. Eliot",
    "Happiness is not something ready-made. It comes from your own actions. - Dalai Lama",
    "The present moment is filled with joy and happiness. If you are attentive, you will see it. - Thich Nhat Hanh",
    "In the middle of difficulty lies opportunity. - Albert Einstein"
  ];

  const getRandomQuote = () => {
    setIsLoading(true);
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setContent(randomQuote);
    setIsLoading(false);
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = width;
    canvas.height = height;

    const context = canvas.getContext('2d');
    context.fillStyle = '#AAAAAA';
    context.fillRect(0, 0, width, height);
    contextRef.current = context;
  }, [width, height]);

  const updateScratchedPercentage = () => {
    const context = contextRef.current;
    const imageData = context.getImageData(0, 0, width, height);
    let scratchedPixels = 0;
    
    for (let i = 3; i < imageData.data.length; i += 4) {
      if (imageData.data[i] === 0) scratchedPixels++;
    }
    
    const percentage = (scratchedPixels / totalPixelsRef.current) * 100;
    if (percentage >= 50) {
      revealAll();
    }
  };

  const revealAll = () => {
    const context = contextRef.current;
    context.clearRect(0, 0, width, height);
  };

  const handleScratch = (e) => {
    if (!isDrawing) return;
    e.preventDefault();

    const canvas = canvasRef.current;
    const context = contextRef.current;
    const rect = canvas.getBoundingClientRect();
    
    const clientX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
    const clientY = e.type.includes('mouse') ? e.clientY : e.touches[0].clientY;
    
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    context.globalCompositeOperation = 'destination-out';
    context.beginPath();
    context.arc(x, y, scratchSize, 0, 2 * Math.PI);
    context.fill();

    updateScratchedPercentage();
  };

  const handleNewQuote = () => {
    getRandomQuote();
    const context = contextRef.current;
    context.fillStyle = '#AAAAAA';
    context.fillRect(0, 0, width, height);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div 
        className="relative border  rounded-lg overflow-hidden bg-white shadow-md" 
        style={{ width, height }}
      >
        <div 
          className="absolute inset-0 flex items-center justify-center p-6 text-center text-lg"
        >
          {isLoading ? (
            <div className="animate-pulse">Loading...</div>
          ) : (
            content
          )}
        </div>
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 touch-none"
          onMouseDown={() => setIsDrawing(true)}
          onMouseMove={handleScratch}
          onMouseUp={() => setIsDrawing(false)}
          onMouseOut={() => setIsDrawing(false)}
          onTouchStart={(e) => {
            setIsDrawing(true);
            handleScratch(e);
          }}
          onTouchMove={handleScratch}
          onTouchEnd={() => setIsDrawing(false)}
        />
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="text-sm text-gray-600">
          Scratch to reveal wisdom!
        </div>
        <button 
          onClick={handleNewQuote}
          className="px-4 py-2 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors"
        >
          Get New Quote
        </button>
      </div>
    </div>
  );
};

export default ScratchCard;