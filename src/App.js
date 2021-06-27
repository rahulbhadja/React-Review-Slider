import React, { useState, useEffect } from 'react';
import data from './data';
import Review from './Review';
import Heading from './Heading';
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  const prev = () => {
    setIndex(index - 1);
  };
  const next = () => {
    setIndex(index + 1);
  };
  return (
    <section className='section'>
      <Heading />
      <Review people={people} index={index} prev={prev} next={next} />
    </section>
  );
}

export default App;
