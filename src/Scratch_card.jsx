import { useEffect, useRef, useState } from 'react';

const ScratchCard = ({ content = "You Won!", width = 300, height = 150 }) => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [scratchSize, setScratchSize] = useState(30);
  const contextRef = useRef(null);
  const totalPixelsRef = useRef(width * height);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = width;
    canvas.height = height;

    const context = canvas.getContext('2d');
    contextRef.current = context;

    // Initial gray overlay
    context.fillStyle = '#AAAAAA';
    context.fillRect(0, 0, width, height);
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

    const canvas = canvasRef.current;
    const context = contextRef.current;
    const rect = canvas.getBoundingClientRect();
    
    // Get coordinates based on event type (mouse or touch)
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

  const handleSizeChange = (e) => {
    setScratchSize(Number(e.target.value));
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div 
        className="relative border border-gray-300" 
        style={{ width, height }}
      >
        <div 
          className="absolute inset-0 flex items-center justify-center text-2xl text-gray-700"
        >
          {content}
        </div>
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0"
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
      
      
    </div>
  );
};

export default ScratchCard;