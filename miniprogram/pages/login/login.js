// pages/login/login.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        toHome: false
    },

    onLoad: function (options) {
        wx.getStorage({
            key: "userInfo",
            success(res) {
                wx.switchTab({
                    url: "../my/my"
                });
            }
        });
    },
    onTapJump: function () {
        wx.getUserProfile({
            desc: "完善个人信息",
            success(res) {
                console.log(res.userInfo);
                wx.setStorage({
                    key: "userInfo",
                    data: res.userInfo
                });
                wx.switchTab({
                    url: "../my/my"
                });
            }
        });

    }
})