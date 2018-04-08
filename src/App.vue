<template>
  <div id="app">
     <!-- <img src="./assets/logo.png"> -->
     <ul>
       <li><router-link to="/" exact>Home</router-link></li>
       <li><router-link to="/topics">Topics</router-link></li>
       <li><router-link to="/counter">Counter</router-link></li>
       <li><router-link to="/about">About</router-link></li>
       <li><router-link to="/flights">Flights</router-link></li>
     </ul>
     <router-view class="view"></router-view>
  </div>
</template>

<style>
  body {
    font-family: Helvetica, sans-serif;
  }
  .router-link-active{
    color: red ;
  }
  li{
    display:inline;
    padding-right:20px;
  }
  a{color: slateblue}
  a:visited, a:hover, a:focus{color:steelblue}
</style>
