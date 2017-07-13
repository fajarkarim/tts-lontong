<template>
  <div id="app">
    <navbar></navbar>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Firebase from 'firebase'
export default {
  name: 'app'
}
var config = {
    apiKey: "...",
    authDomain: "...",
    databaseURL: "...",
    storageBucket: "...",
    messagingSenderId: "..."
  };

var app = Firebase.initializeApp(config)
var db = app.database()
// var booksRef = db.ref('books')
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
