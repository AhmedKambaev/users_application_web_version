import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCAcIzcphTmhGIb09Tq7CMA6oAnpVbc8DM",
    authDomain: "global-project-d6644.firebaseapp.com",
    databaseURL: "https://global-project-d6644.firebaseio.com",
    projectId: "global-project-d6644",
    storageBucket: "global-project-d6644.appspot.com",
    messagingSenderId: "524645160819"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();

export {
    firebaseDB
}

// firebaseDB.ref('users').orderByChild('lastname').limitToFirst(4).once('value')
// .then(snapshop => {
//     const users = [];

//     snapshop.forEach((childSnapshot) => {
//         users.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     });

//     console.log(users)
// })
// .catch((err) => {
//     console.log(err)
// })

// firebaseDB.ref('users').push({
//     name: 'Nikita',
//     lastname: 'Rumonov'
// });

// ---------------------- support

// ref(name(users)).push([...array])

// ref(name/id-user(- Le2SZIJ5HKbuUPmBjec )).once('value') or update or delete
// .then(snapshot => {
//     console.log(snapshot);
// })
// -----------------
// remove(delete)
// ref(name).remove().then... or ref(name/name2).remove()
// or ref(name).set(null)


// update data
// ref(name).set(newValue)
// or ref(name).update(newUpdate)


// get data
// ref().once('value')
// .then((response) => {
// console.log(response.val());
// })

// .ref(name).once('value')
// .then(res => {
//     console.log(res.val())
// })

// при изменении и для получения данных
// ref(name).on('value', (snapshot) => {
//     console.log(snapshot.val())
// })

// on('child_added') or on('child_deleted')


// .ref('users').limitToFirst(1) limited users get

// изменит name на text
// ref(name).orderByChild(name).equalTo(text)