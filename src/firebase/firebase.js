import * as firebase from 'firebase';

const  firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  };

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export {firebase,database as default}; 


// database.ref()




// /*database.ref('notes').push({
//   title:'To do',
//   body:'React angular python'
// });*/




// /*database.ref('expenses').push({
//   description:'Gas Bill',
//   note:'Weekly',
//   amount:23,
//   ceatedAt:'25th july'
// })*/












// /*
// database.ref().on('value',(snapshot)=>{
//     console.log(snapshot.val());
// });
// setTimeout(()=>{
//     database.ref('age').set(29);
// },3000);
// setTimeout(()=>{
//     database.ref().off();
// },7000);
// setTimeout(()=>{
//     database.ref('age').set(30);
// },10000);






// /*database.ref('location/city').once('value').
// then((snapshot)=>{
//     const val=snapshot.val();
//     console.log(val);
// }).
// catch((e)=>{
//     console.log('error',e)
// })*/












// /*database.ref().set({
//   name: 'Andrew Mead',
//   age: 26,
//   stressLevel:6,    
//   job:{
//       title:'software engineer',
//       company:'Google'
//   },
//   location: {
//     city: 'Philadelphia',
//     country: 'United States'
//   }
// }).then(() => {
//   console.log('Data is saved!');
// }).catch((e) => {
//   costnsole.log('This failed.', e);
// });
// database.ref().update({
//     name:'Mike',
//     age:29,
//     job:'Software Developer',
//     isSingle:null
// });
// database.ref().update({
//     stressLevel:9,
//     'job/company':'Amazon',
//     'location/city':'Seattle'
// })
// // database.ref()
// //   .remove()
// //   .then(() => {
// //     console.log('Data was removed');
// //   }).catch((e) => {
// //     console.log('Did not remove data', e);
// //   });*/


