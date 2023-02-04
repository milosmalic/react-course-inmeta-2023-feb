import React, { useEffect } from 'react';

// The useEffect Hook allows you to perform side effects in your components.
// Some examples of side effects are: fetching data, directly updating the DOM, and timers.
// useEffect accepts two arguments.
// The second argument is optional. useEffect(<function>, <dependency>)
export default function Effect1() {
  useEffect(() => {}, []);

  return <div>Effect1 Works!</div>;
}
