import { Route, Switch,useHistory } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./components/home-page/HomePage";
import SignInPage from "./components/signin-page/SignInPage";
import {auth} from './firebase/firebaseFunction'
import {useState,useEffect} from 'react'

function App() {
  const [currentUser,setUser] = useState()

  const history = useHistory()

  useEffect(()=>{ 
      auth.onAuthStateChanged(user=>{
        setUser(user)
        if (user) history.push('/')
    })
  },[history])

  return (
    <div className="App">
      <Header currentUser={currentUser}/>
      <Switch>
        <Route path="/" exact>
          <HomePage currentUser={currentUser}/>
        </Route>
        <Route path="/signin">
          <SignInPage />
        </Route>
      </Switch>
      <p className='credit'>Made with ❤️ by Abhishek Mohanty</p>
    </div>
  );
}

export default App;
