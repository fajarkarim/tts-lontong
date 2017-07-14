<template lang="html">
  <div class="">
    <input type="text" v-model="nameLogin">
    <button type="button" name="buttonLogin" @click='loginUser'>Login</button>
    <div v-if='isLogin == true'>
      <button type="button" @click='logoutUser'>Logout</button>
    </div>
    <tr v-for='user in currentUser'>
      <td>{{user.name}}</td>
      <td>{{user.score}}</td>
    </tr>
    {{errorMsg}}
    <button type="button" name="button" @click='testScore'>Test Score</button>
  </div>
</template>

<script>
import {firebaseApp} from '@/firebase'

export default {
  data () {
    return {
      nameLogin: '',
      score: 'A',
      userKey: '',
      errorMsg: '',
      isLogin: false,
      currentUser: null
    }
  },
  methods: {
    loginUser: function () {
      var self = this
      self.userKey = firebaseApp.database().ref().child('currentuser').push().key
      var userData = {
        name: self.nameLogin,
        score: self.score
      }
      var updates = {}
      updates['currentuser/' + self.userKey] = userData
      firebaseApp.database().ref().update(updates)
      self.isLogin = true
    },
    logoutUser: function () {
      var self = this
      console.log('Key' + self.userKey)
      firebaseApp.database().ref().child('currentuser').child(self.userKey).remove()
      self.isLogin = false
      self.userKey = ''
    },
    testScore: function () {
      var self = this
      firebaseApp.database().ref('currentuser/' + self.userKey + '/' + 'score').set(self.score + 'A')
    }
  },
  created: function () {
  },
  firebase: {
    currentUser: {
      source: firebaseApp.database().ref().child('currentuser')
    },
    userScore: {
      source: firebaseApp.database().ref().child('currentuser/' + this.userKey + '/' + 'score')
    }
  }
}
</script>

<style lang="css">
</style>
