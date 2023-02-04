import React, { useEffect, useState } from 'react';

// The useEffect Hook allows you to perform side effects in your components.
// Some examples of side effects are: fetching data, directly updating the DOM, and timers.
// useEffect accepts two arguments.
// The second argument is optional. useEffect(<function>, <dependency>)
export default function Effect1() {
  const [resourceType, setResourceType] = useState('posts');
  const [items, setItems] = useState<any[]>([]);

  console.log('render');

  useEffect(() => {
    console.log('run useEffect');
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json));

    return () => {
      console.log('clean up'); // more of this in the next useEffect example
    };
  }, [resourceType]);
  // The 2nd parameter array is the dependency array.
  // If it's empty, it's gonna run only once.
  // If it's not empty, it's gonna run every time the value in the array changes.
  // The dependency array is needed to avoid infinite loops.

  return (
    <>
      <div>
        <button onClick={() => setResourceType('posts')} className="btn">
          Posts
        </button>
        <button onClick={() => setResourceType('users')} className="btn">
          Users
        </button>
        <button onClick={() => setResourceType('comments')} className="btn">
          Comments
        </button>
      </div>
      <h1>{resourceType}</h1>
      {items.map((item: any) => {
        return <pre key={item.id}>{JSON.stringify(item)}</pre>;
      })}
    </>
  );
}
