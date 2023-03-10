import { useState } from 'react';
import { User } from './models/user';

// React Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component.

// The React useState Hook allows us to track state in a function component.
// State generally refers to data or properties that need to be tracking in an application.
export const State = () => {
  // hooks, prefixed with use, can only be used in a function component, not in a class component
  // you can't put hooks in a loop, condition, or nested function
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('blue');

  const [user, setUser] = useState<User>({
    firstName: '',
    lastName: '',
  });

  const decrementCount = () => {
    // business logic
    setCount(previousValue => previousValue - 1);
    setTheme('red');
  };

  const incrementCount = () => {
    // business logic
    setCount(count + 1);
    setTheme('blue');
  };

  return (
    <div>
      <div>
        <button onClick={decrementCount} className="btn btn--secondary">
          DECREMENT
        </button>
      </div>
      <div className="my-5">
        <span>{count}</span>
        <span>{theme}</span>
      </div>
      <div>
        <button onClick={incrementCount} className="btn btn--primary">
          INCREMENT
        </button>
      </div>
      <section>
        <p>
          {user.firstName} {user.lastName}
        </p>
      </section>
      <section>
        <label>First Name:</label>
        <input
          className="field"
          value={user.firstName}
          onChange={e => setUser({ ...user, firstName: e.target.value })}
        />
      </section>
      <section>
        <label>Last Name:</label>
        <input
          className="field"
          value={user.lastName}
          onChange={e => setUser({ ...user, lastName: e.target.value })}
        />
      </section>
    </div>
  );
};
