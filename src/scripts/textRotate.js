import React, { useState, useEffect } from 'react';

function RotatingText({ texts, period = 2000 }) {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker); };
  }, [currentText, isDeleting]);

  const tick = () => {
    let i = loopNum % texts.length;
    let fullText = texts[i];

    if (isDeleting) {
      setCurrentText(fullText.substring(0, currentText.length - 1));
    } else {
      setCurrentText(fullText.substring(0, currentText.length + 1));
    }

    if (!isDeleting && currentText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    } else {
      setDelta(200 - Math.random() * 100);
    }
  };

  return (
    <span className="mid-heading">I am a {currentText}</span>
  );
}
