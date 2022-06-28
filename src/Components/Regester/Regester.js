import React,{ useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth , db} from './../../Firebase/firebaseConfig';
import { useNavigate } from "react-router-dom";
import { setDoc , doc } from "firebase/firestore";

function Regester() {
    //Recuperation des données
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [error , setError] = useState("");
    let navigate = useNavigate();
    //Create User With Email And Password :
    const regester = async (email, password) => {
        try {
            await createUserWithEmailAndPassword(auth,email,password).then(async() => {
                await setDoc(doc(db, "Users", auth.currentUser.uid), {Id:auth.currentUser.uid,Role:""});
                navigate("../");
              })
        }catch(err){
            setError(err.code)
        }
    }
  return (
    <div>
        <div className="container-sm pt-5" style={{
        }}>
            <div className="form-signin w-100 m-auto" style={{
                "display":"flex",
                "justifyContent":"center",
                "flexDirection":"column",
                "maxWidth":"330px",
                "height":"50vh"
            }}>
                <div className="text-center">
                    <h1 className="text-primary mb-5">Créer un compte</h1>
                    <div className="form-floating">
                        <input type="email" className="form-control" placeholder="nom@example.com"  value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                        <label for="floatingInput">Adresse e-mail</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control"  placeholder="Mot de passe" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                        <label for="floatingPassword">Mot de passe</label>
                    </div>
                    <h4 className="text-danger">{error}</h4>
                    <button className="w-100 btn btn-lg btn-primary mt-3" type="submit" onClick={()=>{regester(email, password)}}>Créer un compte</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Regester