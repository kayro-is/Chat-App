import React, { useState } from 'react';
import "./login.css";
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../lib/firebase';
import { doc, setDoc } from 'firebase/firestore';

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

const handleRegister = async (e) => {
    e.preventDefault()
 const formData = new FormData(e.target);

 const {username,email,password} =  Object.fromEntries(formData);

 try {

    const response = await createUserWithEmailAndPassword(auth,email,password);

    await setDoc(doc(db, "users", response.user.uid), {
        username,
        email,
        id:response.user.uid,
        blocked:[],
      });

    await setDoc(doc(db, "userchats", response.user.uid), {
       chats:[]
      });
     
      toast.success("Compte créé 🎊🎉!! vous pouvez vous connecter maintenant!");
 }catch(err){
    console.log(err);
    toast.error(err.message)
 }

 
 }

const handleLogin = e => {
   e.preventDefault()
}



  return (
    <div className='login'>
    <div className="item">
        <h2>Content de te revoir</h2>
        <form onSubmit={handleLogin}>
            <input type="text" placeholder='Email' name='email' />
            <input type="password" placeholder='Mot de passe' name='password' />
            <button>se connecter</button>
        </form>
    </div>

    <div className="separateur"></div>
    <div className="item">
        <h2>Créer un compte</h2>
        
        <form onSubmit={handleRegister}>
            <label htmlFor='file'>
                <img src={avatar.url || "./avatar.png"} alt="" />
                Télécharger une image</label>
            <input type="file" id='file'
             style={{display:"none"}} 
            onChange={handelAvatar}/>
            <input type="text" placeholder="username" name="username" />
            <input type="text" placeholder='Email' name='email' />
            <input type="password" placeholder='Password' name='password'/>
            
            <button>{"s'inscrire"}</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
