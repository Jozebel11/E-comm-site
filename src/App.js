import React, { useEffect } from 'react'
import './App.css';
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Banner from './Banner'
import Login from './Login'
import { auth } from "./firebase"
import { useStateValue } from "./StateProvider"
import Payment from './Payment'
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import Orders from './Orders'

const promise = loadStripe('pk_test_51Lx9WMAo7P1BBl8YxqJyb7CuZXbIzP26nPyHZUkCpSQzrTNg6PnzgQuRb49cEuz6BBDeUp2qtH25RfDkZWjQqc7y00E2EO7OPm')

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //will only run once when the app component loads...
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        //the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    //BEM
    <Router>
    <div className="app">
      
      <Routes>
        <Route path='/orders' element={<><Header/><Orders/></>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/checkout' element={<><Header/><Banner /><Checkout /></>}/>
        <Route path='/' element={<><Header/><Banner /><Home /></>}/>
        <Route path='/payment' element={<><Header/><Elements stripe={promise}><Payment/></Elements></>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
