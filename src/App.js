import './App.css';
import { Switch, Route } from 'react-router-dom';

import Triangle from './Triangle';
import Area from './Area';
import CalcArea from './CalcArea';
import Hypotenuse from './Hypotenuse';
import Quiz from './Quiz';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' render={() => <Triangle />} />
        <Route exact path='/calculate' render={() => <CalcArea />} />
        <Route exact path='/quiz' render={() => <Quiz />} />
        <Route exact path='/hypotenuse' render={() => <Hypotenuse />} />
        <Route exact path='/area' render={() => <Area />} />
      </Switch>
    </div>
  );
}

export default App;
