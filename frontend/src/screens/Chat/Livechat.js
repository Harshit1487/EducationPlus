
import React, { useState, useRef } from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import './Livechat.css';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyBSBMyQgyrAuYdZI5x5cqcbP-ZGBIIviVU",
  authDomain: "fireship-demos-c5685.firebaseapp.com",
  projectId: "fireship-demos-c5685",
  storageBucket: "fireship-demos-c5685.appspot.com",
  messagingSenderId: "1019073480203",
  appId: "1:1019073480203:web:20e0b6ae88e04b1fa0e90e"
})
const auth = firebase.auth();
const firestore = firebase.firestore();

// const [user] = useAuthState(auth);

function Livechat() {
  const [user] = useAuthState(auth);
  return (
    <div className="Livechat">
      {/* <header> */}
      <h1>⚛️🔥💬</h1>
        <SignOut />
      {/* </header> */}
      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

function SignIn(){
  const signInWithGoogle = () =>{
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <button onClick={signInWithGoogle}>Sign in with google</button>
  )
}

function SignOut(){
  return auth.currentUser && (
    <button onClick={()=> auth.signOut()}>Sign Out</button>
  )
}

function ChatRoom(){

  const dummy = useRef()

  const messagesRef = firestore.collection('chatdata');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const[chatdata] = useCollectionData(query, {idField: 'id'});

  const [formValue, setFormValue] = useState('');

  const sendMessage = async(e) =>{
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('');

    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return(
    <>
    <main>
      {chatdata && chatdata.map(msg => <ChatMessage key={msg.id} chatdata={msg} />)}

      <div ref={dummy}></div>
    </main>

    <form className="chatform" onSubmit={sendMessage}>
      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} />
      <button type="submit">👍</button>
    </form>
    <div>

    </div>
    </>
  )
}

function ChatMessage(props) {
  const { text, uid, photoURL } = props.chatdata;

  const massageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (
    <div className={`chatdata ${massageClass}`}>
      <img src={photoURL}/>
      <p>{text}</p>
    </div>
  )
}

export default Livechat;
