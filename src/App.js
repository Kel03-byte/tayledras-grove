import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Nav from './components/nav-bar';
import SideBar from './components/side-bar';
import Home from './pages/home/home-page';
import Stallion from './pages/stallion/stallion-page';
import About from './pages/about/about-page';
import Contact from './pages/contact/contact-page';
import Mares from './pages/mares/mare-page';
import Sales from './pages/for-sale/for-sale-page';
import Progeny from './pages/progeny/progeny-page';

function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <SideBar />
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/about-us' component={About}></Route>
        <Route exact path='/stallion' component={Stallion}></Route>
        <Route exact path='/mares' component={Mares}></Route>
        <Route exact path='/for-sale' component={Sales}></Route>
        <Route exact path='/progeny' component={Progeny}></Route>
        <Route exact path='/contact-us' component={Contact}></Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
