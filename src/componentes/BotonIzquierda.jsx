import React, { useState } from 'react';

function ApretarLeft() {
  const [mounted, setMounted] = useState(false);

  function handleClick() {
    if (mounted) {
      alert("CORRECTO PAPA")
    }
  }

  if (!mounted) {
    setMounted(true);
  }

  return (
    <button onClick={handleClick} className='buttonA'>
      LEFT
    </button>
  );
}

export default ApretarLeft;