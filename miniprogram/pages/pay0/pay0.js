// pages/pay/pay.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        count: 0,
        checked: false,
        checked1: false
    },
    add() {
        this.setData({
            count: ++this.data.count
        })
    },

    sub() {
        if(this.data.count > 0){
            this.setData({
                count: --this.data.count
            })
        }
    },

    checkedTap:function() {
        var checked = this.data.checked;
        this.setData({
            checked: !checked
        })
    },

    checkedTap1:function() {
        var checked1 = this.data.checked1;
        this.setData({
            checked1: !checked1
        })
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