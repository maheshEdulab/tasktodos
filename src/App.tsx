import Register from './component/Register';
import { Switch, Route} from 'react-router-dom'
import Login from './component/Login';
import ReadData from './component/ReadData';
import UpdateData from './CURD/UpdateData';
import Nomatch from './component/Nomatch';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={'/'} component={Register} />
        <Route path={'/login'} component={Login} />
        <Route path={'/read'} component={ReadData} />
        <Route path={'/update'} component={UpdateData} />
        <Route path={["*"]} component={Nomatch}/>
      </Switch>
    </div>
  );
}

export default App;
