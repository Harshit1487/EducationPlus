import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";


import Register from './components/Register'
import Login from './components/Login'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Quiz from './components/Quiz'
import Livechat from './screens/Chat/Livechat.js'
import Uploadnote from './screens/Notesfeature/Uploadnote';

const App = () => {
  const [isAuth,setIsAuth] = useState(false);
  return (
    <div>
      <header>
        </header>
        <main>
    <Router>
      <div>
        <Header/>
        <Switch>
        <Route exact path="/register" component={() => <Register isAuth={isAuth} setIsAuth={setIsAuth}/>} />
        <Route exact path="/login" component={() => <Login isAuth={isAuth} setIsAuth={setIsAuth} />} />
        <Route exact path="/" component={() => <Home isAuth={isAuth}/>} /> 
        <Route exact path="/quiz" component={() => <Quiz isAuth={isAuth}/>} /> 
        <Route exact path="/Livechat" component={() => <Livechat isAuth={isAuth}/>} /> 
        <Route exact path="/Uploadnote" component={() => <Uploadnote isAuth={isAuth}/>} />
        </Switch>
      </div>
    </Router>
      </main>
      <footer>
      <Footer/>
      </footer>
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
