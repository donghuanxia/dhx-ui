<template>
  <div class="dhx-button-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:'dhx-button-group',
  mounted(){
    //校验内部孩子是否是我们的button组件，如果不是报错
    let children = this.$el.children//获取到dom元素

    //let children = this.$el.$children//获取到的是子组件
    for(let i=0;i<children.length;i++){
      console.assert(children[i].tagName==='BUTTON','子元素必须是button')
    }

  }
}
</script>
<style lang="scss">
@import '../styles/_var.scss';
.dhx-button-group{
  display: inline-flex;
  vertical-align: middle;
  .dhx-button {
    position: relative;
    border-radius: 0;
    &:not(first-child){
      margin-left: -1;
    }
    &:first-child{
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
    }
    &:last-child{
      border-top-right-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
    &:hover{
      z-index: 1;
    }
    &:active,&:focus{
      z-index: 2;
    }
  }
}
</style>
