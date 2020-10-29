import {BrowserRouter, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'

import Home from './pages/Home'

export default function App(){
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={Home}/>
      </BrowserRouter>
    </div>
  )
}