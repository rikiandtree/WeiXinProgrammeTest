// page/component/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        id:'view',
        name:'视图容器',
        open:false,
        pages:['view']
      }
    ]
  },

  kindToggle(e){

    const id = e.currentTarget.id
    const list = this.data.list
    for(let i = 0,len = list.length;i < len;i++){
      if(list[i].id === id){
        list[i].open = !list[i].open
      }else{
        list[i].open = false
      }
    }

    this.setData(
      {
        list
      }
    )

    wx.reportAnalytics("click_view_programmatically", {})
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.reportAnalytics("enter_home_programmatically", {})
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title:'小程序官方组件展示',
      path:'page/component/index'
    }
  }
})