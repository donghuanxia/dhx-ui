<template>
    <button class="dhx-button" :class="btnClass" :disabled="loading" @click="$emit('click',$event)">
      <!-- :class放对象或数组 -->
      <!-- dhx-icon组件已在main.js中进行了全局注册，所以不需要再次引入了 -->
      <dhx-icon :icon="icon" class="icon" v-if="icon&&!loading"></dhx-icon>
      <dhx-icon icon="loading" class="icon" v-if="loading"></dhx-icon>
      <span v-if="this.$slots.default">
        <slot></slot>
      </span>
    </button>
</template>
<script>
export default {
  name:'dhx-button',
  props:{
    type:{
      type:String,
      default:'',
      validator(type){
        console.log(type)
        if(type && !['primary','warning','success','danger','info'].includes(type)){
          console.error('type类型必须为：'+['primary','warning','success','danger','info'].join('、')+'之一')
        }
        return true
      }
    },
    icon:{
      type:String
    },
    iconPosition:{
      type:String,
      default:'right',
      validator(type){
        if(type&&!['left','right'].includes(type)){
          console.error('iconPosition的属性必须为 left | right')
        }
        return true
      }
    },
    loading:{
      type:Boolean,
      default:false
    }
  },
  computed:{
    btnClass(){
      let classes = []
      if(this.type){
        classes.push(`dhx-button-${this.type}`)
      }
      if(this.iconPosition){
        classes.push(`dhx-button-${this.iconPosition}`)
      }
      return classes
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../styles/_var.scss';
$height: 42px;
$font-size: 16px;
$color: #606266;
$border-color: #dcdfe6;
$background: #ecf5ff;
$active-color: #3a8ee6;
.dhx-button{
  border-radius: $border-radius;
  border:1px solid $border-color;
  height:$height;
  line-height: 1;
  font-size: $font-size;
  cursor: pointer;
  padding: 12px 12px;
  display: inline-flex;
  justify-content: center;
  vertical-align: middle;
  user-select: none;//文字能否被选中
  &:hover{
    border-color: $border-color;
    background: $background;
  }
  &:focus,&:active{
    color: $active-color;
    border-color: 1px solid $active-color;
    background-color: $background;
    outline: none;
  }
  @each $type,$color in (primary:$primary,success:$success,info:$info,danger:$danger,warning:$warning){
    &-#{$type}{
      background:#{$color};
      border:1px solid #{$color};
      color:#fff;
      fill: #fff;
    }
  }
  @each $type,$color in (primary:$primary-hover,success:$success-hover,info:$info-hover,danger:$danger-hover,warning:$warning-hover){
    &-#{$type}:hover{
      background:#{$color};
      border:1px solid #{$type};
      color:#fff;
    }
  }
  @each $type,$color in (primary:$primary-active,success:$success-active,info:$info-active,danger:$danger-active,warning:$warning-active){
    &-#{$type}:active,&-#{$type}:focus{
      background:#{$color};
      border:1px solid #{$color};
      color:#fff;
    }
  }
  .icon{
    width:16px;
    height: 16px;
  }
  &-left{
    svg{order:1}
    span{order:2}
    .icon+span{
      margin-left: 4px;
    }
  }
  &-right{
    span{order:1}
    svg{order:2}
    .icon+span{
      margin-right: 4px;
    }
  }
  &[disabled]{
    cursor: not-allowed;
  }
}
</style>