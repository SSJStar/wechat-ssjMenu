// components/ssjMenu/ssjMenu.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    menueList:{
      type:Object,
      value:{}
      },
    mainmodel: {
      type: Object,
      value: {}
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    show:true,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //点击主菜单，切换show的值
    mainViewClick:function(){
      let showValue = !this.data.show
      this.setData({ 
        show: showValue
      })
      // console.log('showValue:' + JSON.stringify(showValue));
    },
    
    childViewClick:function(e){
      var indexValue = e.currentTarget.dataset.index
      console.log("点击了下标:" + indexValue)
      this.mainViewClick()
      // const { value: searchvalue } = e.detail
      // console.log('searchvalue:'+searchvalue)
      // console.log('e:' + JSON.stringify(e))
      this.triggerEvent('menuItemClick', {
        'jsonForClicked':this.data.menueList[indexValue]
       }, {})

    },

  }
})
