// pages/actslist/actslist.js
const app = getApp();
const db = wx.cloud.database({});
const cont = db.collection('activity');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
  },
  // shujuku(){
  //   wx.cloud.database().collection("activity").get({
  //     success(res) {
  //       console.log("数据库获取成功", res)
  //     },
  //     fail(res) {
  //       console.log("数据库获取失败", res);
  //     }
  //   })
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    const db = wx.cloud.database({
      env: 'cloud1-6gki18zid54ff268'
    })
    db.collection('activity').get({
      success: res => {
        console.log(res.data)
        this.setData({
          list:res.data
        })
      }
    })
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

  }
})