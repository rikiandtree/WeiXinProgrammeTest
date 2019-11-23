// page/component/pages/cover-view/cover-view.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
      return{
        title:'cover-view',
        path: 'page/component/pages/cover-view/cover-view'
      }
  }
})