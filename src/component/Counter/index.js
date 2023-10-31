import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleCount = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  const handleToggle = () => {
    setIsOpen(true);
  };

  return (
    <div>
      Counter:{count}
      {isOpen ? <h1>Modal Opened</h1> : <p>Lorem Ipsum closed</p>}
      <button onClick={handleCount}>Click me</button>
      <button onClick={handleToggle}>Open</button>
    </div>
  );
};
