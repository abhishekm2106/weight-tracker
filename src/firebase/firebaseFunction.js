import firebase from 'firebase'
import './firbaseConfig'


export const auth = firebase.auth()
export const db = firebase.firestore()


const addUserToFirestore = (user)=>{

    db.collection('users').doc(user.uid).set({
        uid:user.uid,
        email:user.email,
        name:user.displayName
    })
}





var provider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = ()=>auth.signInWithPopup(provider)
.then(authenticate => addUserToFirestore(authenticate.user))
.catch((error)=>alert(error.message))


export const signInAnonymously = ()=>auth.signInAnonymously()
.then(authenticate => addUserToFirestore(authenticate.user))
.catch((error)=>alert(error.message))
