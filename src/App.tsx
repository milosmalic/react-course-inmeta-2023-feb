import { BrowserRouter } from 'react-router-dom';
import Effect1 from './built-in-hooks/Effect1';
import Effect2 from './built-in-hooks/Effect2';
import Effect3 from './built-in-hooks/Effect3';
import State from './built-in-hooks/State';

const App = () => {
  return (
    <BrowserRouter>
      <div className="container mx-auto px-4">
        {/* <State /> */}
        {/* <Effect1 /> */}
        {/* <Effect2 /> */}
        <Effect3 cost={20} discount={10} />
      </div>
    </BrowserRouter>
  );
};

export default App;
