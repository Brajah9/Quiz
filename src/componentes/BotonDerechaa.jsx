import React, { useState } from 'react';

function ApretarRight() {
  const [mounted, setMounted] = useState(false);

  function handleClick() {
    if (mounted) {
      alert("INCORRECTO")
    }
  }

  if (!mounted) {
    setMounted(true);
  }

  return (
    <button onClick={handleClick} className='buttonB'>
        RIGHT
    </button>
  );
}

export default ApretarRight;