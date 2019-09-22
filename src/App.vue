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

 <style  lang="stylus" rel="stylesheet/stylus">
   
    
    pre
      background #1e1e1e
      color white
    #app
      height 100%    
    .main
      display flex
      height 100%
      width  100%
      .nav
        flex 1
        border 1px solid black
        overflow-x hidden
        overflow-y auto
        height 100%
        &::-webkit-scrollbar
          width 5px
        &::-webkit-scrollbar-thumb
          background black     
        ul
          margin 0 
          list-style none           
        li
          &:hover
            cursor pointer          
            background lightgray 
      .content
        flex 10  
        height 100px
        border 1px solid blue
        padding 0 20px

// ---------------------//
.code-entity
  color #569cd6
.code-attr
  color #9cdcfe
.code-tag
  color #d7ba7d
 </style>
