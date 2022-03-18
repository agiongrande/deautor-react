import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getDocs, collection, query, where } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_ApiKey,
  authDomain: process.env.REACT_APP_AuthDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_StorageBucket,
  messagingSenderId: process.env.REACT_APP_MessagingSenderId,
  appId: process.env.REACT_APP_AppId
};

const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)

export const getProducts = (categoryName) => {
  return new Promise((resolve,reject) => {
    const collectionRef= categoryName ?  query(collection(firestoreDb, 'productos'),where('Categoria', '==', categoryName)) : collection(firestoreDb,'productos')

    getDocs(collectionRef).then(querySnapshot => {
      const products = querySnapshot.docs.map(doc => {
        return {id: doc.id, ...doc.data()}
      })
      resolve(products)
    }).catch((error) => {
      reject('Error obteniendo productos: ', error)
    })
  })
}