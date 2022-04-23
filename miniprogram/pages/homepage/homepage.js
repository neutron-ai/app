// pages/homepage/homepage.js
var dataObj1 = require("Data/imgData.js");
var dataObj2 = require("Data/classifyData.js");
var dataObj3 = require("Data/locateData.js");
var dataObj4 = require("Data/recData.js");
var dataObj5 = require("Data/select4.js");
var dataObj6 = require("Data/recData4.js");
var dataObj7 = require("Data/navImage.js");
var dataObj8 = require("Data/todayNews.js");

Page({

    /**
     * 页面的初始数据
     */
    data: {
        imgData: {
            settingsImg: "https://cdn.jsdelivr.net/gh/neutron-ai/images@main/settings.png"
        },
        title: [
          "站点查找",
          "今日资讯",
          "跳蚤市场",
          "跳蚤平台"
        ],
        classifyData: dataObj2.classifyData,
        locateData: dataObj3.locateData,
        recData: dataObj4.recData,
        select4: dataObj5.select4,
        recData4: dataObj6.recData4,
        navImage: dataObj7.navImage,
        todayNews: dataObj8.todayNews,
        selected: 1,
        fontColor: '#fff',
    },

    onTapShowText: function(event) {
      var postID = event.currentTarget.dataset.id
      if(postID == 0){
        wx.navigateTo({
          url: '../news1/news1',
        })
      }
      else if(postID == 1){
        wx.navigateTo({
          url: '../news2/news2',
        })
      }
    },

    onTapAct: function(event) {
      var select = event.currentTarget.dataset.idx + 1;
      this.setData({
        selected: select,
        fontColor: '#FFFFFF'
      })
    },



    onTapJump0:function(event) {
        wx.navigateTo({
          url: '../pay0/pay0',
        })
    },

    onTapJump1:function(event) {
        wx.navigateTo({
          url: '../pay1/pay1',
        })
    },

    onTapJump3:function(event) {
      wx.navigateTo({
        url: '../MarketIntroduction/MarketIntroduction',
      })
  },

    onTapJump:function(event) {
        wx.navigateTo({
          url: '../morePosition/morePosition',
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            
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