<template>
    <div>
        <slot name="content">
            <img src="../assets/img_fish.svg" alt="">
        </slot>
        <p>
            <slot name="caption" v-bind:source="source">Caption</slot> <!-- scoped slot : original <slot name="caption"> -->
        </p>
    </div>
</template>

<script>
export default {
// scoped slot : below code moved from app.vue to here
data() {
    return {
      source: "samplesource.co",
    }
  }
}
</script>

<style scoped>
img {width: 100%;}
</style>