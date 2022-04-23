// pages/my/my.js


Page({

    /**
     * 页面的初始数据
     */
    data: {
        userinfo: {},
        menuList: [{
            icon: "icon-order",
            text: "全部订单",
            url: ""
        }, {
            icon: "icon-dizhidingwei",
            text: "我的地址",
            url: ""
        }, {
            icon: "icon--love",
            text: "站点收藏",
            url: ""
        }, {
            icon: "icon-Wallet1",
            text: "红包卡卷",
            url: ""
        }, {
            icon: "icon-remind1",
            text: "消息提醒",
            url: "icon-locate1e"
        }, {
            icon: "icon-user",
            text: "个人中心",
            url: ""
        }, {
            icon: "icon-settings2",
            text: "常用设置",
            url: ""
        }

        ]
    },

    onLoad: function (options) {
        const that = this;
        wx.getStorage({
            key: "userInfo",
            success(res) {
                that.setData({
                    userinfo: res.data
                })
            }
        })
    },
    quit: function () {
        wx.removeStorage({
            key: "userInfo",
            success(res) {
                wx.redirectTo({
                    url: "/pages/login/login"
                })
            }
        })
    }
})