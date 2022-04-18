// pages/homepage/homepage.js
var dataObj1 = require("Data/imgData.js");
var dataObj2 = require("Data/classifyData.js");
var dataObj3 = require("Data/locateData.js");
var dataObj4 = require("Data/recData.js");

Page({

    /**
     * 页面的初始数据
     */
    data: {
        imgData: {
            settingsImg: "https://cdn.jsdelivr.net/gh/neutron-ai/images@main/settings.png"
        },
        classifyData: dataObj2.classifyData,
        locateData: dataObj3.locateData,
        recData: dataObj4.recData
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