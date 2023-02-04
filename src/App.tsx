import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Effect1 from './built-in-hooks/Effect1';
import Effect2 from './built-in-hooks/Effect2';
import Effect3 from './built-in-hooks/Effect3';
import State from './built-in-hooks/State';
import EagerRoutes from './EagerRoutes';

const App = () => {
  const [value, setValues] = useState(0);
  return (
    <BrowserRouter>
      {/* <div className="container mx-auto px-4"> */}
      {/* <State /> */}
      {/* <Effect1 /> */}
      {/* <Effect2 /> */}
      {/* <Effect3 cost={20} discount={10} /> */}
      {/* </div> */}
      <EagerRoutes />
    </BrowserRouter>
  );
};

export default App;
