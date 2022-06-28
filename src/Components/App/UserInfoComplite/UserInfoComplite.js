import React,{ useState ,useEffect} from 'react'
import { auth , storage , db } from './../../../Firebase/firebaseConfig';
import { updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable , getDownloadURL } from "firebase/storage";
import {  getDocs , collection , query , where , updateDoc , doc } from "firebase/firestore";

import { useNavigate } from "react-router-dom";

function UserInfoComplite() {
    const n=auth.currentUser.displayName
    const i=auth.currentUser.photoURL
    let navigate = useNavigate();
    
    
    const [name,setName]=useState(n);
    const [Img,setImg]=useState(i)
    const [ImgLink,setImgLink]=useState(null)
    const [error,setError]=useState("")
    const [Role,setRole]=useState("")
    const [selectedImage, setSelectedImage] = useState(null);
    const storageRef = ref(storage, 'Pdp/'+auth.currentUser.uid);

    useEffect(()=>{
        const getRole = async() => {
            const Users = collection(db,"Users")
            const Userq = query(Users,where("Id","==",auth.currentUser.uid));
            const UserSnap = await getDocs(Userq)
            const res = UserSnap.docs[0].data()
            setRole(res["Role"])
        }
        getRole()
    },[])

    const Update = async (name,img)=> {
        if( selectedImage ){
        uploadBytesResumable(storageRef, selectedImage)
        getDownloadURL(storageRef).then((link)=>{
            setImgLink(link)
        })}

        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: img
          }).then(() => {
            setError("")
          }).catch((error) => {
            setError(error.message)
          });
        const Users = doc(db,"Users/"+auth.currentUser.uid)
        // const Userq = await query(Users,where("Id","==",auth.currentUser.uid));
        // console.log(Userq)
        await updateDoc(Users,{Role:Role})
        navigate("../");
    }

    useEffect(() => {
        if (selectedImage) {
            setImg(URL.createObjectURL(selectedImage));
        }
      }, [selectedImage]);
    return (
            <div className="container " style={{
                "display": "flex",
                "justifyContent": "center",
                "alignItems": "center",
                "height": "100vh"
            }}>
                <div>
                    <h2 Compliter className="text-primary text-center mb-5">Compléter vos informations</h2>
                    <div className="form-floating">
                        <input type="text" className="form-control" placeholder="Nom d’utilisateur" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                        <label for="floatingInput">Nom d’utilisateur</label>
                    </div>
                    <center>
                        {Img ?<img src={Img} className="rounded-circle mt-3" width="150px" height="150px" alt=""/>:""}
                    </center>
                    <div className="d-flex mt-3 mb-3">
                    <div className="form-check w-50">
                        <input className="form-check-input" type="radio" name="role" value="Student" checked={Role === "Student" ? true : false} onChange={(e)=>{setRole(e.target.value)}}/>
                        <label className="form-check-label" for="flexRadioDefault1" >
                            Student 
                        </label>
                    </div>
                    <div className="form-check w-50">
                        <input className="form-check-input" type="radio" name="role" value="Enseignant" checked={Role === "Enseignant" ? true : false} onChange={(e)=>{setRole(e.target.value)}}/>
                        <label className="form-check-label" for="flexRadioDefault2">
                            Enseignant
                        </label>
                    </div>
                    </div>
                    <div className="form-floating d-flex mt-3">
                        <h5 className="w-75">Télécharger l’image :</h5>
                        <input className="w-50 btn btn-primary" type="file" accept="image/*" placeholder="Photo de profile" onChange={(e)=>{setSelectedImage(e.target.files[0])}}/>
                    </div>
                    <h4 className="text-danger text-center mt-3 mb-3">{error}</h4>
                    <button className="w-100 btn btn-lg btn-success" onClick={()=>Update(name,ImgLink)}><i className="bi bi-check-lg"></i> Sauvegarder</button>
                </div>
            </div>
    )
}

export default UserInfoComplite
