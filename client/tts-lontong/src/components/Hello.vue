<template>
  <div class="hello">
    <table>
      <tr v-for="i in 5">
        <td v-for="j in 5">
          <input v-if="crossword[i-1][j-1] == ' '" type="text" name="" :value="crossword[i-1][j-1]" disabled>
          <input v-else type="text" name="" v-model="crossword[i-1][j-1]">
        </td>
      </tr>
    </table>
    <button type="button" name="button" @click="checkAll">Anda Yakin ?</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      halo: 'coba',
      updatedValue: '',
      hAnswer: [[2, 0], [4, 1]],
      vAnswer: [[0, 1]],
      answer: ['MANA', 'MAKAN', 'AKU', 'NASI'],
      crossword: [
        [' ', 'M', 'A', 'N', 'A'],
        [' ', '', ' ', ' ', ' '],
        ['A', '', 'U', ' ', ' '],
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
      for (let i = 0; i < this.hAnswer.length; i++) {
        console.log(this.checkHorizontal(this.hAnswer[i]))
      }
      for (let i = 0; i < this.vAnswer.length; i++) {
        console.log(this.checkVertikal(this.vAnswer[i]))
      }
    },
    checkHorizontal: function (pos) {
      let r = pos[0]
      let word = this.crossword[r].join('').trim()
      if (this.answer.includes(word)) {
        return ['horizontal', true, word]
      } else {
        return ['horizontal', false, word]
      }
    },
    checkVertikal: function (pos) {
      let c = pos[1]
      let hWord = []
      let word
      for (let i = 0; i < this.crossword.length; i++) {
        hWord.push(this.crossword[i][c])
      }
      word = hWord.join('').trim()
      if (this.answer.includes(word)) {
        return ['vertikal', true, word]
      } else {
        return ['vertikal', false, word]
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
  text-align: center;
  width: 25px;
}
</style>
