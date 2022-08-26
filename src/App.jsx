//React Import
import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

//Component Import
import Navbar from './components/Navigation/Navbar';
import Cart from './components/Cart/Checkout';
import logo from './images/Logo_NIKE.png';

//Page Import
import PersonalizeCollections from './components/Collections/PersonalizeCollections';
import WomenCollections from './components/Collections/WomenCollections';
import KidsCollections from './components/Collections/KidsCollections';
import MenCollections from './components/Collections/MenCollections';
import Collections from './components/Collections/Collections';
import Whatsnew from './components/Collections/Whatsnew';
import Sales from './components/Collections/Sales';

//Data and Styles Import
import dummyData from './dummyData';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <div className='group-container'>
          <img className='App-logo' alt='logo' src={logo} />
          <Navbar />
          <Cart />
        </div>
        <div>
          <Route path='/' exact>
            <Whatsnew value={dummyData[1]} />
          </Route>
          <Route path='/mencollections'>
            <MenCollections value={dummyData[0]} />
          </Route>
          <Route path='/whatsnew'>
            <Whatsnew value={dummyData[1]} />
          </Route>
          <Route path='/womencollections'>
            <WomenCollections value={dummyData[1]} />
          </Route>
          <Route path='/sales'>
            <Sales value={dummyData[1]} />
          </Route>
          <Route path='/personalizecollections'>
            <PersonalizeCollections value={dummyData[1]} />
          </Route>
          <Route path='/kidscollections'>
            <KidsCollections value={dummyData[0]} />
          </Route>
          <Route path='/collections'>
            <Collections value={dummyData[0]} />
          </Route>
          <Redirect to='/' />
        </div>
      </div>
    </Router>
  );
}
export default App;
