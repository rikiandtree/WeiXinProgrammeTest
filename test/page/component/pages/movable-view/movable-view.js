// page/component/pages/movable-view/movable-view.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    x:0,
    y:0,
    scale:2,
  },

  tap(){
    this.setData({
      x:30,
      y:30
    })
  },
  tap2(){
    this.setData({
      scale:3
    })
  },

  onChange(e){
    console.log(e.detail)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
      return{
        title:'movable-view',
        path:'page/component/pages/movable-view/movable-view'
      }
  }
})