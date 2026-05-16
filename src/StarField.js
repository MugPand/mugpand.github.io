import React, { useEffect, useState } from 'react';
import './StarField.css';

const StarField = () => {
  const [stars, setStars] = useState([]);
  const [starChars, setStarChars] = useState({});

  // Define character sequences for shimmer effect - better ASCII star chars
  const charSequences = [
    ['·', '◦', '●', '◉'],
    ['⋆', '✦', '★', '✧'],
    ['✱', '✲', '✳', '✲'],
    ['▪', '◉', '●', '◦'],
    ['✧', '✦', '⋆', '◦'],
  ];

  const cloudConfigs = [
    {
      id: 'c1',
      x: 6,
      y: 16,
      width: 28,
      rotation: -18,
      opacity: 0.14,
      scaleX: 2.8,
      text: [
        '  .  .  .    .  .   .   .   .   .',
        ' .  .    . .   .   .  .   .  .   ',
        '  .   .   .   .   .   .   .   . ',
      ],
    },
    {
      id: 'c2',
      x: 58,
      y: 12,
      width: 42,
      rotation: 10,
      opacity: 0.08,
      scaleX: 3.5,
      text: [
        ' .   .   .   .   .   .   .   .   .',
        '  .  .  .   .  .  .  .   .  .  . ',
        ' .   .   .   .   .   .   .   .   ',
      ],
    },
    {
      id: 'c3',
      x: 28,
      y: 62,
      width: 38,
      rotation: -12,
      opacity: 0.10,
      scaleX: 3.2,
      text: [
        '   .   .   .   .   .   .   .   . ',
        ' .   .   .  .   .   .   .   .   .',
        '   .   .   .   .   .   .   .   . ',
      ],
    },
    {
      id: 'c4',
      x: 40,
      y: 30,
      width: 28,
      rotation: 6,
      opacity: 0.10,
      scaleX: 2.6,
      text: [
        '    .  .  .    .  .  .   .   .  ',
        '  .   .    .  .   .   .   .    .',
        '    .  .   .   .    .   .   .   ',
      ],
    },
  ];

  useEffect(() => {
    const generatedStars = [];
    const initialChars = {};
    
    // Generate 80-120 stars
    const starCount = Math.floor(Math.random() * 40) + 80;
    
    for (let i = 0; i < starCount; i++) {
      const sequence = charSequences[Math.floor(Math.random() * charSequences.length)];
      generatedStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        sequence: sequence,
        duration: Math.random() * 6 + 8, // 8-14 seconds (much slower)
        delay: Math.random() * 3, // 0-3 seconds
        size: Math.random() * 0.6 + 0.4, // 0.4-1.0
      });
      initialChars[i] = 0;
    }
    
    setStars(generatedStars);
    setStarChars(initialChars);
  }, []);

  // Animate character cycling
  useEffect(() => {
    const intervals = stars.map((star) => {
      return setInterval(() => {
        setStarChars(prev => ({
          ...prev,
          [star.id]: (prev[star.id] + 1) % star.sequence.length
        }));
      }, (star.duration * 1000) / star.sequence.length);
    });

    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, [stars]);

  return (
    <div className="star-field">
      {cloudConfigs.map((cloud) => (
        <div
          key={cloud.id}
          className="cloud"
          style={{
            left: `${cloud.x}%`,
            top: `${cloud.y}%`,
            width: `${cloud.width}vw`,
            opacity: cloud.opacity,
            transform: `scaleX(${cloud.scaleX}) rotate(${cloud.rotation}deg)`,
          }}
        >
          {cloud.text.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>
      ))}

      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            fontSize: `${star.size}rem`,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
          }}
        >
          {star.sequence[starChars[star.id] || 0]}
        </div>
      ))}
    </div>
  );
};

export default StarField;
