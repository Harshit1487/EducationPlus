import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";


import Register from './components/Register'
import Login from './components/Login'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'

const App = () => {
  return (
    <div>

    <Router>
      <div>
        <Header/>
        <Switch>
        <Route exact path="/register" component={() => <Register />} />
        <Route exact path="/login" component={() => <Login />} />
        <Route exact path="/" component={() => <Home />} /> 
        </Switch>
      </div>
    </Router>
    <Footer/>
      {/*<Footer/>*/}
    </div>
  )
}

export default App


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
