
Page({

  /**
   * 页面的初始数据
   */
  data: {
    background:['demo-text-1','demo-text-2','demo-text-3'],
    indicatorDots:true,
    vertical:false,
    autoplay:false,
    interval:2000,
    duration:500
  },
  onShareAppMessage(){

    return{
      title:'swiper',
      path:'page/component/pages/swiper/swiper'
    }
  },
  changeIndicatorDots(){
    this.setData(
      {
        indicatorDots:!this.data.indicatorDots
      }
    )
  },

  changeAutoplay(){
    this.setData({
        autoplay:!this.data.autoplay
      }
    )
  },
  intervalChange(e){
    this.setData({
      interval:e.detail.value
    })
  },
  durationChange(e){
    this.setData({
      duration:e.detail.value
    })
  }
 
})