// pages/sign_in/sign_in.js
var dataObj = require("Data/imgData.js");

Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

      this.setData({
        imgData: dataObj.imgData
      })

        wx.setNavigationBarTitle({
          title: '登录',
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

    },

    onTapJump:function (event) {
      wx.redirectTo({
        url: '../homepage/homepage',
        success:function () {
          console.log("jump success")
        },
        fail:function () {
          console.log("jump failed")
        },
        complete:function () {
          console.log("jump complete")
        }
      })
    }

})