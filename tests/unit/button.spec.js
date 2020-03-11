import {shallowMount} from '@vue/test-utils'
import {expect} from 'chai'

import Button from '@/packages/button.vue'
import Icon from '@/packages/icon.vue'

describe('button.vuee',()=>{
  it('1.测试1+1',()=>{
    expect(1+1).to.eq(2)
  })
  it('1.测试button能否正常显示slot里的内容',()=>{//测试当前组件运行在浏览器的情况
    const wrapper = shallowMount(Button,{
      slots:{
        default:'dhx-ui'
      }
    })
    expect(wrapper.text()).to.eq('dhx-ui')

  })
  it('2.测试icon传入是否能正常显示',()=>{
    const wrapper = shallowMount(Button,{
      stubs:{
        'dhx-icon':Icon//替换的功能
      },
      propsData:{
        icon:'edit'
      }
    })
    expect(wrapper.find('use').attributes('href')).to.eq('#icon-edit')

  })
  it('3.测试loading时按钮是禁用状态',()=>{
    const wrapper = shallowMount(Button,{
      stubs:{
        'dhx-icon':Icon//替换的功能
      },
      propsData:{
        loading:true
      }
    })
    expect(wrapper.find('use').attributes('href')).to.eq('#icon-loading')
    expect(wrapper.find('button').attributes('disabled')).to.eq('disabled')
  })
  it('4.测试按钮能否正常点击',()=>{
    const wrapper = shallowMount(Button,{
      // 桩 nodejs内置文件
      stubs:['dhx-ui'],//不会渲染icon 只是一个加标签
    })
    wrapper.find('button').trigger('click')
    expect(wrapper.emitted('click').length).to.eq(1)
  })
  it('5.按钮传入position是否是正常显示',()=>{
    const wrapper = shallowMount(Button,{
      attachToDocument: true,//将组件挂载到浏览器上
      stubs: {
          'dhx-icon': Icon
      },
      slots:{
        default:'dhx-ui'
      },
      propsData: {
          iconPosition: 'left',
          icon: 'edit'
      }
    })
    let ele = wrapper.vm.$el.querySelector('span');
    expect(getComputedStyle(ele, null).order).to.eq('2');
    wrapper.setProps({iconPosition:'right'})//设置props 必须要在下一个时间环去取值
    return wrapper.vm.$nextTick().then(()=>{//一步执行要等上次执行才能执行下次
      expect(getComputedStyle(ele).order).to.eq('1')
    })
  })
  
})