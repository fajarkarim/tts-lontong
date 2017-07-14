
import Firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyBhTNonBoIkGrUKP7OlTmySUwf4Pk0PJyI',
  authDomain: 'crossword-4bb3b.firebaseapp.com',
  databaseURL: 'https://crossword-4bb3b.firebaseio.com',
  storageBucket: 'crossword-4bb3b.appspot.com',
  messagingSenderId: '261863668831'
}

export var firebaseApp = Firebase.initializeApp(config)
