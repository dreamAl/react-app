import React from 'react';
import {BrowserRouter,Route,Redirect} from 'react-router-dom';
import Routercom from './components/routercom';
import Index from './pages/index';
import Community from './pages/community';
import Publish from './pages/publish';
import Message from './pages/message';
import My from './pages/my';
import IndexDeilt from './pages/indexDeilt';
import ListDeilt from './pages/listDeilt';
import './App.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/index" component={Index}></Route>
        <Route path="/community" component={Community}></Route>
        <Route path="/publish" component={Publish}></Route>
        <Route path="/message" component={Message}></Route>
        <Route path="/my" component={My}></Route>
        {/* 传参第一步：路由规则中定义接收参数 */}
        <Route path="/indexDeilt/:id" component={IndexDeilt}></Route>
        <Route path="/listDeilt" component={ListDeilt}></Route>
        {/* 设置路由重定向 */}
        {/* <Redirect to="/my"/> */}
        <Routercom/>
      </BrowserRouter>
    </div>
  );
}
export default App;
