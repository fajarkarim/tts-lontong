<template>
  <div class="hello">
    <table>
      <tr v-for="i in 5">
        <td v-for="j in 5">
          <input v-if="crossword[i-1][j-1] == ' '" type="text" name="" :value="crossword[i-1][j-1]" disabled>
          <input v-else type="text" name="" v-model="crossword[i-1][j-1]" @keyup="updateBoard(i-1, j-1, value)">
        </td>
      </tr>
    </table>
    <input type="text" name="" v-model="halo">
    <input type="text" @>
    <h2>{{ halo }}</h2>
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
      dict: [
        [' ', 'M', 'A', 'N', 'A'],
        [' ', 'A', ' ', ' ', ' '],
        ['A', 'K', 'U', ' ', ' '],
        [' ', 'A', ' ', ' ', ' '],
        [' ', 'N', 'A', 'S', 'I']
      ],
      crossword: [
        [' ', 'M', '', 'N', 'A'],
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
