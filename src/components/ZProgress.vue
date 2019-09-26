<!--  -->
<template>
  <div  class="z-progress-wrapper">
    <div :class="classes" :style="getWidth" class="z-progress" ref="progress"></div>       
    <span class="z-progress-number"  v-show="progress">{{percent+'%'}}</span>    
  </div>
 
</template>

<script>
export default {
  name:"zprogress",
  mounted() {
   this.setWidth(this.percent)
  },
  data() {
    return {
      percent:this.percents
    }
  },
  props:{
      type:{
        type: String,
        default:"primary",
        validator(type){  
          return ["primary","warning","success","danger","info"].indexOf(type)>-1
        }
      },
      percents:{
        type:Number,
        default:0,
      },
      progress:{
        type:Boolean,
        default:false
      }
  },
  methods: {   
      setWidth(val){
          this.$refs.progress.style.width=val+'%';
          if(val>=100){
              this.$refs.progress.style.width=100+'%';
              this.$emit('complete')
              this.percent=100
          }
           if(val<=0){
             this.percent=0
              this.$refs.progress.style.width='';
          }       
      },
     
  },
  computed: {
      classes(){         
          return `z-progress-${this.type}`
      },
      getWidth(){
        return `width:${this.percent}%`
      }
  },
  watch: {
      // percent(newVal,oldVal){
      //    this.setWidth(newVal) 
      //    if(newVal>=100||oldVal>=100){
      //       this.percent=100;           
      //    }
      // },
      percents:{
        immediate:true,
        handler(val){
          setTimeout(() => {  
            this.percent=val         
            this.setWidth(val)
          });
        }
      }
  },
  
  


  
}

</script>
<style lang='scss' scoped>
 .z-progress-wrapper{
     position: relative;
     width:500px;
     height: 10px;
     border:1px solid black;
     border-radius: 10px;  
     text-align: center; 
 }
 .z-progress{
     height: 100%;
     width: 0;
     border-radius: 10px;
     background: red;
     transition: width 0.5s ease;
 }
 .z-progress-number{line-height: 10px;position: absolute;top: 0;right: 0;left: 0;}
 .z-progress-primary{
    background: $--button-primary-fill;
 }
 .z-progress-success{
    background: $--button-success-fill;
 }
 .z-progress-info{
    background: $--button-info-fill;
 }
 .z-progress-danger{
    background: $--button-danger-fill;
 }
 .z-progress-warning{
    background: $--button-warning-fill;
 }
</style>