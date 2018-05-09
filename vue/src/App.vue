<template>
  <div id="app">
    <header>
      <my-Header></my-Header>
    </header>
    <router-view/>
    <footer>
      <myFooter></myFooter>
    </footer>
  </div>
</template>

<script>
import myHeader from '@/commen/header'
import myFooter from '@/commen/footer'

export default {
  name: 'App',
  components: {
    myHeader,
    myFooter
  }
}
</script>

<style>
*{
  margin:0;
  padding:0;
}
#app {
  font-family: Arial, 'Microsoft Yahei', Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul li{
  list-style: none;
}
a{
  text-decoration: none;
  color:#666666;
  cursor: pointer;
}
</style>
