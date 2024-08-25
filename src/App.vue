<template>
 <captioned-content>
  <template v-slot:content> <!-- a normal format to write v-slot -->

  </template>
  <template v-slot:caption> 
    
  </template>
 </captioned-content>

 <captioned-content>
  <template #content> <!-- short-handed format to write v-slot -->
    <img src="./assets/img_apple.svg" alt="">
  </template>
  <template #caption="{ source }"> <!-- scoped slot from original <template #caption> -->
    source : <a href="samplesource.co">{{ source }}</a>
  </template>
 </captioned-content>
</template>

<script>
import SlotCaptionCcontent from './components/SlotCaptionContent.vue'

export default{
  components:{
    SlotCaptionCcontent,
  },
  // scoped slot : move the below code from parent App.vue move the below code to child component SlotCaptionContent.vue 
  // data() {
  //   return {
  //     source: "samplesource.co",
  //   }
  // }
}
</script>

<style>
#app {
  width: 100%;
  margin: 0;
  padding: 0;
  text-align: center;
}
</style>
