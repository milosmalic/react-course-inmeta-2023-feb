import { useState } from 'react';
import { User } from './models/user';

export default function State() {
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
}
