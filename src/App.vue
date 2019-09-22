<template>
  <div id="app">
    <header class="header">
        <h1>ZVUI使用文档</h1>
    </header>
    <section class="main">
      <nav class="nav">
       <div>Components</div>
       <ul class="nav-ul">
         <li v-for="item in subItem">
            <router-link :to="item.urls">{{item.title}}</router-link>
         </li>        
       </ul>
      </nav>
      <div class="content">
        <router-view></router-view>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
     subItem:[{title:'button',urls:'/components/button'},
              {title:'popover',urls:'/components/popover'},             
             ]
    }
  }
}
</script>

<style scoped lang="scss" >
  
    
     
  
</style>
