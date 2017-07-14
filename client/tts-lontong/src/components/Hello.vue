<template>
  <div class="hello">
    <div class="row">
      <div class="col-md-4 col-md-offset-4">
        <table class="board">
          <tr v-for="i in 5">
            <td v-for="j in 5">
              <input v-if="crossword[i-1][j-1] == ' '" type="text" name="" :value="crossword[i-1][j-1]" maxlength="1" size="4" disabled>
              <input v-else type="text" name="" maxlength="1" size="10" v-model="crossword[i-1][j-1]">
            </td>
          </tr>
        </table>
        <div class="row">
          <div class="col-md-4 col-md-offset-3">
            <div id="question">
              <h3> {{ currentQuestion }}</h3>
            </div>
            <div id="choice">
              <h1>Anda yakin ???</h1>
              <button type="button" name="button" @click="checkAll">Pasti !</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      halo: 'coba',
      currentQuestion: 'sss',
      listQuestions: [
        `Badan Usaha Milik Negara disingkat...`
      ],
      correctHAnswer: '',
      correctVAnswer: '',
      updatedValue: '',
      score: 0,
      currentUser: '',
      hAnswer: [[0, 1], [2, 0], [4, 1]],
      vAnswer: [[0, 1]],
      answer: ['MANA', 'MAKAN', 'AKUN', 'NASI'],
      crossword: [
        [' ', 'M', '', 'N', 'A'],
        [' ', '', ' ', ' ', ' '],
        ['A', '', '', 'N', ' '],
        [' ', '', ' ', ' ', ' '],
        [' ', 'N', 'A', '', '']
      ]
    }
  },
  methods: {
    updateBoard: function (i, j, val) {
      console.log(`${i}, ${j}, ${val}`)
    },
    checkAll: function () {
      let checked
      for (let i = 0; i < this.hAnswer.length; i++) {
        checked = this.checkHorizontal(this.hAnswer[i])
        if (checked.status) {
          this.correctHAnswer = this.hAnswer.splice(i, 1)
          this.score += 100
          break
        } else {
          this.correctHAnswer = ''
        }
      }
      for (let i = 0; i < this.vAnswer.length; i++) {
        checked = this.checkVertikal(this.vAnswer[i])
        if (checked.status) {
          this.correctVAnswer = this.vAnswer.splice(i, 1)
          this.score += 100
          break
        } else {
          this.correctVAnswer = ''
        }
      }
      if (this.correctHAnswer) {
        console.log(this.correctHAnswer)
      } else if (this.correctVAnswer) {
        console.log(this.correctVAnswer)
      } else {
        console.log(`salaaah`)
      }
      if (this.hAnswer.length === 0 && this.vAnswer.length === 0) {
        console.log(`YOU WIIN`)
      }
    },
    checkHorizontal: function (pos) {
      let r = pos[0]
      let result = {}
      let word = this.crossword[r].join('').trim()
      if (this.answer.includes(word)) {
        result.type = 'horizontal'
        result.status = true
        result.word = word
        return result
      } else {
        result.status = false
        result.word = word
        return result
      }
    },
    checkVertikal: function (pos) {
      let c = pos[1]
      let hWord = []
      let word
      let result = {}
      for (let i = 0; i < this.crossword.length; i++) {
        hWord.push(this.crossword[i][c])
      }
      word = hWord.join('').trim()
      if (this.answer.includes(word)) {
        result.type = 'vartikal'
        result.status = true
        result.word = word
        return result
      } else {
        result.status = false
        result.word = word
        return result
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
  text-align: center;
  width: 50px;
  height: 50px;
  font-size: 16px;
  font-weight: bold;
}

input[disabled] {
  background-color: black;
}

table {
  padding: 5px;
  background-color: black;
}

.hello {
  padding: 100px;
  background-image: url('http://jurnalapps.co.id/assets/img/content/1491636977_TTS-Lontong.jpg');
  height: 100%;
}

#question {
  padding: 0.5em;
  background-color: black;
}

#choice {
  padding: 0,5px;
  background-color: black;
}
</style>
