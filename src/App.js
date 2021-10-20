import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Header from './component/Header/Header';
import Banner from './component/Banner/Banner';
import Services from './component/Services/Services';
import Footer from './component/Footer/Footer';
import Home from './component/Home/Home';
import LogIn from './component/LogIn/LogIn';
import Register from './component/Register/Register';
import ServiceDetail from './component/ServiceDetail/ServiceDetail';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import VisitingInfo from './component/VIsitingInfo/VisitingInfo';
import About from './component/About/About';
import NotFound from './component/NotFound/NotFound';

function App() {
  return (
    <div className="App bg-secondary">
      <BrowserRouter>
      <Header></Header>
      <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route exact path="/Home">
        <Home></Home>
      </Route>
      <Route exact path="/LogIn">
        <LogIn></LogIn>
      </Route>
      <Route exact path="/Register">
        <Register></Register>
      </Route>
     

     <PrivateRoute path="/VisitingInfo">
       <VisitingInfo></VisitingInfo>
     </PrivateRoute>
      <PrivateRoute exact path="/ServiceDetail">
          <ServiceDetail></ServiceDetail>
      </PrivateRoute>
      <PrivateRoute path="/About">
        <About></About>
      </PrivateRoute>
      <Route exact path="*">
       <NotFound></NotFound>

      </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
