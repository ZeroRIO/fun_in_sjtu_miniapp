Page({

  /**
   * 页面的初始数据
   */
  data: {
      value: "2020-12-31 15:11"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  handleChange(e) {
      console.log(e)
      this.setData({
        value: e.detail.date
      })
  },
})