import React, { useState, useEffect } from "react";

const Intro = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = ["developer.", "problem-solver.", "student."];

  useEffect(() => {
    const currentWord = words[currentIndex];

    if (isDeleting) {
      // Deleting effect
      if (currentText === "") {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % words.length);
        return;
      }

      const timeout = setTimeout(() => {
        setCurrentText(currentText.slice(0, -1));
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      // Typing effect
      if (currentText === currentWord) {
        // Wait before starting to delete
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);

        return () => clearTimeout(timeout);
      }

      const timeout = setTimeout(() => {
        setCurrentText(currentWord.slice(0, currentText.length + 1));
      }, 150);

      return () => clearTimeout(timeout);
    }
  }, [currentText, currentIndex, isDeleting, words]);

  return (
    <section className="Intro">
      <h5 className="small-heading code-text">Hi, my name is</h5>
      <h2 className="big-heading">Adham Khalifa.</h2>
      <h4
        className="mid-heading"
        style={{
          color: "aliceblue",
          fontSize: "50px",
          marginTop: "5%",
          textAlign: "center",
        }}
      >
        <span className="mid-heading">
          I am a {currentText}
          <span className="typewriter-cursor">|</span>
        </span>
      </h4>
    </section>
  );
};

export default Intro;
