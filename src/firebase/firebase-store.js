import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCtXeZAyNbWn9lT36vE85zJQZfjZRt-2t8",
    authDomain: "zxw13820.firebaseapp.com",
    databaseURL: "https://zxw13820.firebaseio.com",
    storageBucket: "zxw13820.appspot.com",
    messagingSenderId: "1048296019597"
};
firebase.initializeApp(config);

const root = firebase.database().ref();
const todos = firebase.database().ref('todos');

const Fb = {
  root,
  todos
};
export { Fb };