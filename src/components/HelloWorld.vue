<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 @click="tip">Essential Links</h2>
  </div>
</template>

<script>
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
      this.$http.chance({
        'searchType':1,
        'pageNum':1,
        'token':localStorage.getItem('token')
      }).then((res)=>{
        console.log(res)
      }).catch((err)=>{

      })
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
