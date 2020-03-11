<template>
  <div id="app">
    <!-- 默认按钮 -->
    <dhx-button>默认按钮</dhx-button>
    <!-- 带类型的按钮 -->
    <dhx-button type="primary">主要按钮</dhx-button>
    <dhx-button type="warning">警告按钮</dhx-button>
    <dhx-button type="danger">危险按钮</dhx-button>
    <dhx-button type="success">成功按钮</dhx-button>
    <dhx-button type="info">信息按钮</dhx-button>
    <!-- 带按钮的图标 -->
    <dhx-button type="primary" icon="search">搜索</dhx-button>
    <dhx-button type="warning" icon="edit">编辑</dhx-button>
    <!-- 可控制图标左右位置的按钮 -->
    <dhx-button type="danger" icon="edit" icon-position="right">编辑</dhx-button>
    <dhx-button type="warning" icon="edit" icon-position="left">编辑</dhx-button>
    <dhx-button type="warning" icon="edit" icon-position="left"></dhx-button>
    <!-- 带loading的按钮 -->
    <dhx-button type="warning" icon="edit" icon-position="left" loading>加载中</dhx-button>
    <!-- 带事件的按钮 -->
    <dhx-button type="warning" icon="edit" icon-position="left" @click="fn">编辑</dhx-button>

    <!-- 组合按钮 -->
    <dhx-button-group>
      <!-- <div></div> -->
      <dhx-button type="primary" icon="xiangqian1" icon-position="left">上一页</dhx-button>
      <dhx-button type="primary" icon="right" icon-position="right">下一页</dhx-button>
    </dhx-button-group>
    

    <!-- 图标 -->
    <dhx-icon icon="search"></dhx-icon>
    <dhx-icon icon="edit"></dhx-icon>

    
  </div>
</template>

<script>

export default {
  name: 'App',
  methods:{
    fn(e){
      console.log(e)
    }
  }
}
</script>

<style lang="scss">

</style>
