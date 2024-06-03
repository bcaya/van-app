
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
    getFirestore, 
    collection, 
    doc, 
    getDoc, 
    getDocs,
    query,
    where } from "firebase/firestore/lite"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQem0dXFdGLJA_jVcMmuB_MVgxs3RM64A",
  authDomain: "vanventures-c4893.firebaseapp.com",
  projectId: "vanventures-c4893",
  storageBucket: "vanventures-c4893.appspot.com",
  messagingSenderId: "63191524408",
  appId: "1:63191524408:web:543287f14c2c69a19db2cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

//refactoring functions below
const vansCollectionRef = collection(db, "vans")

export async function getVans(){
  const snapshot = await getDocs(vansCollectionRef)
  const vans = snapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
  }))
  return vans
}


export async function getVan(id){
  const docRef = doc(db, "vans", id)
  const snapshot = await getDoc(docRef)
  return {
    ...snapshot.data(),
    id: snapshot.id
  }
}
// export async function getVans(id){
//   const url = id ? `/api/vans/${id}` : "/api/vans"
//   const res = await fetch(url)
//     if(!res.ok){
//       throw{
//         message: "Failed to fetch vans",
//         statusText: res.statusText,
//         status: res.status 
//       }
//     }
//     const data = await res.json()
//     return data.vans
// }
export async function getHostVans() {
  const q = query(vansCollectionRef, where("hostId", "==", "123"))
  const snapshot = await getDocs(q)
  const vans = snapshot.docs.map(doc => ({
      ...doc.data(),
      id: doc.id
  }))
  return vans
}

export async function loginUser(creds){
  const res = await fetch("/api/login",
    {method: "post", body: JSON.stringify(creds)}
  )
  const data = await res.json()

  if(!res.ok){
    throw{
      message: data.message,
      statusText: res.statusText, 
      status: res.status
    }
  }
  return data
}