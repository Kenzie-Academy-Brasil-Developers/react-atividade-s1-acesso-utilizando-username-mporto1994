
import './App.css';
import { useState } from 'react';
import { GetUserComponent } from './components/GetUserComponent';
import { WelcomePage } from './components/WelcomePage';

function App() {
  const [user, setUser]=useState("")
  const [isLoggedIn,setIsLoggedIn]=useState(false)
  console.log(user)

  return (
    <div className="App">
      <header className="App-header">
        { isLoggedIn === false ? 
              <GetUserComponent setIsLoggedIn={setIsLoggedIn} setUser={setUser}/> :
              <WelcomePage user={user} setIsLoggedIn={setIsLoggedIn}/> }
      </header>
    </div>
  );
}

export default App;
