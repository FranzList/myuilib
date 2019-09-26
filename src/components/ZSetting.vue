<!--  -->
<template>
  <div class="z-settings">
    <div class="z-settings-left-icon" >
      <span v-show="currentIndex!=0" @click="previous"><</span>
    </div>
    <div class="z-settings-content">
      <div v-for="(option,index) in options" :style="getLeft(index)" class="z-settings-content-items" :class="getClass" ref="contents">{{option}}</div>        
    </div>     
    <div  class="z-settings-right-icon">
      <span v-show="getIcon" @click="next" ref="righ-icon">></span>
    </div>    
  </div>
</template>

<script>
export default {
  name:"ZSetting",
  data () {
    return {
        currentIndex:0,
        //options:['1920*1080','1440*900','哈哈']
    };
  },
  props:{
      ani:{
          type:Boolean,
          default:false
      },
      options:{
          type:Array,
          default:[]
      }
  },
  methods: {
      previous(){
          
          if(this.currentIndex==0){
             this.currentIndex=0
             return
          }
          for (const [index,value] of this.options.entries()) {   
            let left=parseInt(this.$refs.contents[index].style.left)
            this.$refs.contents[index].style.left=left+100+'%';           
          }
          this.currentIndex-=1;  
      },
      next(){
          if(this.currentIndex==this.$refs.contents.length-1){
             this.currentIndex=this.$refs.contents.length-1
             return
          }      
          for (const [index,value] of this.options.entries()) {
            
            let left=parseInt(this.$refs.contents[index].style.left)
            this.$refs.contents[index].style.left=left-100+'%';
            
          }
          this.currentIndex+=1;     
      },
      getLeft(index){ 
          return `left:${index*100}%`
      }
  },
  computed:{
      getIcon(e){
          
          return this.currentIndex<this.options.length-1
      },
      getClass(){
          return [{'z-settings-content-items-animation':this.ani}]
      }
  },
 

  
}

</script>
<style lang='scss' scoped>
.z-settings{
    color: white;
    display: flex;
    background: $--button-default-fill;
    width: 300px;
    height: 30px;
    text-align: center;
    cursor: default;
    overflow: hidden;
    font-size: 20px;
    &-left-icon{
       cursor: pointer;
       z-index: 2;
       flex: 1;
       width: 10%; 
    }
    &-content{
       position: relative;
       flex: 5;
       width: 80%;
       line-height: 1.5;
       overflow: hidden;
       &-items{
           position: absolute;
           width: 100%;
           left: 100%;
           &-animation{
               transition: left 0.3s ease;
           }
       } 
    }
    &-right-icon{
       z-index: 2;
       cursor: pointer;
       flex: 1;
       width: 10%; 
    }

}
</style>