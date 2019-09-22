<!--  -->
<template>
  <div>
     <h1>按钮</h1>
     <h2>介绍</h2>
     <h2>引入</h2>
     <div  class="import-code"></div>
     <h2>Example</h2>
     <zbutton type="info" icon-name="loading" :isLoading="true" >123</zbutton>
     <pre>
       <code>
         <span>
          <<span class='code-entity'>button</span> <span class='code-attr'>type</span>=<span class='code-tag'>primary</span>>sd</<span class='code-entity'>button</span>>      
          <<span class='code-entity'>button</span> <span class='code-attr'>type</span>=<span class='code-tag'>info</span>>sd</<span class='code-entity'>button</span>>      
           
         </span>
         <span>sdsd</span>
         <span>sdsd</span>
       </code>
     </pre>
     <div class="use-code"></div>
     <h2>API</h2>
  </div>
</template>

<script>
import zbutton from '../components/zbutton'
export default {
  components:{
    zbutton
  }
}

</script>
<style scoped lang="scss">
  
</style>