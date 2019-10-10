import React from 'react';
import {BrowserRouter,Route,Redirect} from 'react-router-dom';
import Routercom from './components/routercom';
import Index from './pages/index';
import Community from './pages/community';
import Publish from './pages/publish';
import Message from './pages/message';
import My from './pages/my';
import './App.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="bodys">
        <Route path="/index" component={Index}></Route>
        <Route path="/community" component={Community}></Route>
        <Route path="/publish" component={Publish}></Route>
        <Route path="/message" component={Message}></Route>
        <Route path="/my" component={My}></Route>
        {/* 设置路由重定向 */}
        <Redirect to="/my"/>
      </div>
        <Routercom/>
      </BrowserRouter>
    </div>
  );
}
export default App;
