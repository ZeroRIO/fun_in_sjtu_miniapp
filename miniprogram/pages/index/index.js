//index.js
const app = getApp()
const { envList } = require('../../envList.js');

Page({
  data: {
    powerList: [{
      title: '创建组局',
      tip: '发起一个活动招募',
      showItem: false,
      item: [{
        title: '发起组局',
        page: 'org_sport'
      },
    ]
    }, {
      title: '活动列表',
      tip: '查看现存组局',
      showItem: false,
      item: [{
        title: '查看列表',
        page: 'actslist'
      }]
    }, {
      title: '我的活动',
      tip: '查看我的组局、加入活动',
      showItem: false,
      item: [{
        title: '我的活动',
        page: 'myacts'
      },
      {
        title: '历史记录',
        page: 'history'
      }]
    }, {
      title: '帮助',
      tip: '平台介绍及用户反馈',
      showItem: false,
      item: [{
        title: '反馈',
        page: 'help'
      }]
    }],
  },

  onClickPowerInfo(e) {
    const index = e.currentTarget.dataset.index;
    const powerList = this.data.powerList;
    powerList[index].showItem = !powerList[index].showItem;

    this.setData({
      powerList
    })
  },
  jumpPage(e) {
    wx.navigateTo({
      url: `/pages/${e.currentTarget.dataset.page}/${e.currentTarget.dataset.page}?`,
    });
  },
});
