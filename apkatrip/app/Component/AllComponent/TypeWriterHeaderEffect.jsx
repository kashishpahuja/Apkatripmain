import React, { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TypeWriterHeaderEffect = () => {
  const [isAffordableComplete, setAffordableComplete] = useState(false);

  useEffect(() => {
    // Simulate the completion of the first typewriter after it finishes typing
    const typingDuration = 50 * 'Book affordable'.length; // typeSpeed * number of characters
    const delayAfterTyping = 500; // Add a slight delay after typing

    const timer = setTimeout(() => {
      setAffordableComplete(true);
    }, typingDuration + delayAfterTyping);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <div className="text-white flex items-center gap-2 font-bold py-3 md:text-2xl">
      {/* First Typewriter for "Book affordable" */}
      <h2>
        <Typewriter
          words={['Book affordable']}
          loop={1} // Runs only once
          typeSpeed={50} // Adjust the typing speed
          deleteSpeed={0} // Disable delete effect
        />
      </h2>

      {/* Second Typewriter for other words */}
      <h2>
        {isAffordableComplete && (
          <Typewriter
            words={['flights!', 'hotels!', 'cruises!', 'cabs!', 'buses!']}
            loop={Infinity} // Loops continuously
            typeSpeed={50} // Adjust typing speed
            deleteSpeed={50} // Delete effect speed
            delaySpeed={1000} // Delay between word cycles
          />
        )}
      </h2>
    </div>
  );
};

export default TypeWriterHeaderEffect;
