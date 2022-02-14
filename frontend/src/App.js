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
