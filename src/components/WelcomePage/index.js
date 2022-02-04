export const WelcomePage =({user,setIsLoggedIn}) => {



    return(
        <div>
            <p>Bem vindo {user}</p>
            <button onClick={()=>setIsLoggedIn(false)}>Sair</button>
        </div>
    )
}