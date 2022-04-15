//var util = require('../../../utils/util.js');
const app = getApp();
const db = wx.cloud.database().collection('activity')

Page({
  onShareAppMessage() {
    return {
      title: 'form',
      path: 'components/form/form'
    }
  },
  /**
   * 页面的初始数据
   */
  data: {
      pickerHidden: true,
      chosen: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  handleChange(e) {
      console.log(e)
      this.setData({
      })
  },

  pickerConfirm() {
      this.setData({
        pickerHidden: true
      })
  },

  pickerCancel() {
    this.setData({
      pickerHidden: true
    })
  },

  pickerShow() {
    this.setData({
      pickerHidden: false
    })
  },

  formSubmit(e) {
    wx.showLoading({
      title: '数据提交中',
    })
    var {outline,time,timelen,location,totalnum,donenum,contact,more} = e.detail.value;
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    db.add({
      data:{
        contact:contact,
        outline: outline,
        time: time,
        donenum: donenum,
        location: location,
        timelen: timelen,
        totalnum: totalnum,
        more: more,
      }
    }).then(res=>{
      console.log(res)
      wx.hideLoading({
        success: (res) => {},
      })
      
    })
    wx.redirectTo({
      url: '/pages/index/index',
    });
  },


  formReset(e) {
    console.log('form发生了reset事件，携带数据为：', e.detail.value)
    this.setData({
      chosen: ''
    })
  },

})