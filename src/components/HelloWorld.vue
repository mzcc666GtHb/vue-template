<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 @click="tip">Essential Links</h2>
  </div>
</template>

<script>
  import api from '@/service/ajax.js'
  console.log(api)
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods:{
     tip () {
       alert(123)
     }
    },
    mounted () {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
