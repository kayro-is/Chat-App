import React, { useState } from 'react';
import "./login.css";

const Login = () => {

    const [avatar, setavatar] = useState({
        file:null,
        url:""
    })

const handelAvatar = e =>{
    if(e.target.files[0]){

    setavatar({
        file:e.target.files[0],
        url: URL.createObjectURL(e.target.files[0])
    })
}
}

  return (
    <div className='login'>
    <div className="item">
        <h2>Content de te revoir</h2>
        <form>
            <input type="text" placeholder='Email' name='email' />
            <input type="password" placeholder='Mot de passe' name='password' />
            <button>se connecter</button>
        </form>
    </div>

    <div className="separateur"></div>
    <div className="item">
        <h2>Créer un compte</h2>
        <form>
            <label htmlFor='file'>
                <img src={avatar.url || "./avatar.png"} alt="" />
                Télécharger une image</label>
            <input type="file" id='file' style={{display:"none"}} 
            onChange={handelAvatar}/>
            <input type="text" placeholder="nom d'utilisateur" name="nom d'utilisateur" />
            <input type="text" placeholder='Email' name='email' />
            <input type="password" placeholder='Password' name='password'/>
            <button>{"s'inscrire"}</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
