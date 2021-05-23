import { Route, Switch,useHistory } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./components/home-page/HomePage";
import SignInPage from "./components/signin-page/SignInPage";
import {auth,db} from './firebase/firebaseFunction'
import {useState,useEffect} from 'react'

function App() {
  const [currentUser,setUser] = useState()
  const [weightList, updateWeightList] = useState([])

  const history = useHistory()

  useEffect(()=>{ 
      auth.onAuthStateChanged(user=>{
        setUser(user)
        if (user) {
          db.collection('users').doc(user.uid).collection('weightList').orderBy("created",'desc')
              .onSnapshot((querySnapshot) => {
                  updateWeightList(querySnapshot.docs)
              })
          history.push('/')
      }
      else {
          updateWeightList([])
      }
    })
  },[history])

  return (
    <div className="App">
      <Header currentUser={currentUser}/>
      <Switch>
        <Route path="/" exact>
          <HomePage currentUser={currentUser} weightList={weightList}/>
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
