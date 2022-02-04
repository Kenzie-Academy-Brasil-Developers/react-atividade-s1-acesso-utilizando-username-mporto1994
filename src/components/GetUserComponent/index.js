import { useState } from "react/cjs/react.development"

export const GetUserComponent =({setIsLoggedIn,setUser}) => {
    const [userInput, setUserInput]=useState()


    const handleLoggin = (user) =>{
        console.log("did it")
        setUser(user);
        setIsLoggedIn(true);
        
    }

    return(
        <form>
            <input
                placeholder="Usuário"
                type="text"
                value={userInput}
                onChange={(event) => setUserInput(event.target.value)}
                />
            <button onClick={()=>handleLoggin(userInput)}>Entrar</button>
        </form>
    )
}