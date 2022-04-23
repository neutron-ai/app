// pages/MarketIntroduction/MarketIntroduction.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        title: [{
            id: "0001",
            name: "附近"
        }, {
            id: "0002",
            name: "相关"
        }, {
            id: "0003",
            name: "推荐"
        }],
        active: "",

        data: {
            one: [{
                img: "cloud://cloud1-0gksotcqf999923c.636c-cloud1-0gksotcqf999923c-1311035359/p1.png",
                distance: "1.5km",
                content: "# 交易日记#  VLOG今日互换日记、二刷汤臣三品",
                userinfo: {
                    icon: "cloud://cloud1-0gksotcqf999923c.636c-cloud1-0gksotcqf999923c-1311035359/icon.png",
                    username: "呢- Gala"
                },
                like: 1020
            }, {

                img: "cloud://cloud1-0gksotcqf999923c.636c-cloud1-0gksotcqf999923c-1311035359/p1.png",
                distance: "1.5km",
                content: "# 交易日记#  VLOG今日互换日记、二刷汤臣三品",
                userinfo: {
                    icon: "cloud://cloud1-0gksotcqf999923c.636c-cloud1-0gksotcqf999923c-1311035359/icon.png",
                    username: "呢- Gala"
                },
                like: 1020
            }],
            two: [{
                img: "cloud://cloud1-0gksotcqf999923c.636c-cloud1-0gksotcqf999923c-1311035359/p3.png",
                distance: "1.5km",
                content: "# # 交易的聚会#  合适且心仪，冲冲冲",
                userinfo: {
                    icon: "cloud://cloud1-0gksotcqf999923c.636c-cloud1-0gksotcqf999923c-1311035359/icon.png",
                    username: "小作1080"
                },
                like: 1020
            },
            {
                img: "cloud://cloud1-0gksotcqf999923c.636c-cloud1-0gksotcqf999923c-1311035359/p4.png",
                distance: "1.5km",
                content: "# nice的环境#换到了想要",
                userinfo: {
                    icon: "cloud://cloud1-0gksotcqf999923c.636c-cloud1-0gksotcqf999923c-1311035359/icon.png",
                    username: "小作1080"
                },
                like: 1020
            }
            ]
        }
    },

    onTapBack: function (options) {
        wx.switchTab({
          url: '../homepage/homepage',
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            active: this.data.title[0].id
        })
    },


    clickTitle: function (e) {
        this.setData({
            active: e.target.id
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