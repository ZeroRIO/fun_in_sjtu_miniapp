const cloud = require('../history/node_modules/wx-server-sdk');

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
});

const db = cloud.database();

// 创建集合云函数入口函数
exports.main = async (event, context) => {
  try {
    // 创建集合
    await db.createCollection('activity');
    await db.collection('activity').add({
      // data 字段表示需新增的 JSON 数据
      data: {
        donenum: event.donenum,
        time:event.time,
        location: event.location,
        more: event.more,
        totalnum: event.totalnum,
        time:event.time,
        timelen:event.timelen,
        outline: event.outline
      }
    });
    await db.collection('activity').add({
      // data 字段表示需新增的 JSON 数据
      data: {
        donenum: '1',
        location: '南体',
        more: '注意个人防护',
        totalnum: '4',
        time:'2022-02-29 22:22',
        timelen:'2',
        outline: 'majiang!',
        contact:'abcd'
      }
    });
    return {
      success: true
    };
  } catch (e) {
    // 这里catch到的是该collection已经存在，从业务逻辑上来说是运行成功的，所以catch返回success给前端，避免工具在前端抛出异常
    return {
      success: true,
      data: 'create collection success'
    };
  }
};
