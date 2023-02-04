import { useEffect, useState } from 'react';

// Modify a variable base on the window size
export default function Effect2() {
  const [windowWith, setWindowWith] = useState(window.innerWidth);

  console.log('render');

  const handleResize = () => {
    setWindowWith(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize); // window resize event listener

    return () => {
      // componentDidUnmount in class component
      // The return statement is the cleanup function.
      // Otherwise, memory leak will happen that will cause the app to slow down or crash.
      // It's gonna run before the useEffect function runs again.
      // It's gonna run when the component unmounts.
      window.removeEventListener('resize', handleResize); // remove the event listener when the component is unmounted
    };
  }, []);

  return <h1>{windowWith}</h1>;
}
