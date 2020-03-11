<template>
  <svg class="dhx-icon" aria-hidden="true">
      <use :xlink:href="`#icon-${icon}`"></use>
  </svg>
</template>
<script>
import '../styles/icon'
export default {
  name:'dhx-icon',
  props:{
    icon:{
      type:String,
      required:true
    }
  }
}
</script>
<style lang="scss">
.dhx-icon{
  width:25px;
  height:25px;
  vertical-align: middle;
}
</style>