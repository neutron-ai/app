// pages/news1/news1.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        bigImage: "https://fastly.jsdelivr.net/gh/neutron-ai/images@main/news1.png",
        smallImage: "https://fastly.jsdelivr.net/gh/neutron-ai/images@main/news1_icon1.png",
        from: "即时通讯",
        time: "50分钟前",
        readNum: "999人阅读",
        title: "在2021年中国国际服务贸易交易会全球服务贸易峰会上的致辞",
        head: "9月2日晚，国家主席习近平在2021年中国国际服务贸易交易会全球服务贸易峰会上发表视频致辞",
        welcome: "尊敬的各位来宾，女士们，先生们，朋友们：",
        content: [
            "大家好！我谨代表中国政府和中国人民，并以我个人名义，向参加2021年中国国际服务贸易交易会的所有嘉宾，表示热烈的欢迎和诚挚的问候！",
            "本届服贸会以“数字开启未来，服务促进发展”为主题，相信在各方积极参与下，将成为一届特色鲜明、富有成效的盛会。",
            "服务贸易是国际贸易的重要组成部分和国际经贸合作的重要领域，在构建新发展格局中具有重要作用。我们愿同各方一道，坚持开放合作、互利共赢，共享服务贸易发展机遇，共促世界世界经济复苏和增长。",
            "我们将提高开放水平，在全国推进实施跨境服务贸易负面清单，探索建设国家服务贸易创新发展示范区；我们将扩大合作空间，加大对共建“一带一路”国家服务业发展的支持，同世界共享中国技术发展成果；我们将加强服务领域规则建设，支持北京等地开展国际高水平自由贸易协定规则对接先行先试，打造数字贸易示范区；我们将继续支持中小企业创新发展，深化新三板改革，设立北京证券交易所，打造服务创新型中小企业主阵地。",
            "女士们、先生们、朋友们！",
            "让我们携手抗疫、共克时艰，坚持用和平、发展、合作、共赢的“金钥匙”，破解当前世界经济、国际贸易和投资面临的问题，共创更加美好的未来！",
            "谢谢大家。",
        ],
        showModal: false,
        fontSize: 26,
        lineHeight: 40,
        selectColorIndex: 1,
        selectWeightIndex: 1,
        backgroundColor: '#FFFFFF',
        fontColor: '#26262E',
        fontWeight: 'normal'
    },

    onTapBack: function (event) {
        wx.switchTab({
          url: '../homepage/homepage',
        })
    },

    onTapBack: function (event) {
        wx.switchTab({
          url: '../homepage/homepage',
        })
    },

    pop:function(event) {
        this.setData({
            showModal: true
        })
    },

    hide:function(event) {
        this.setData({
            showModal: false
        })
    },

    fontSizeChange:function(event) {
        this.setData({
            fontSize: event.detail.value,
            lineHeight: event.detail.value
        })
    },

    selectColor1: function(event) {
        this.setData({
            selectColorIndex: 1,
            backgroundColor: '#FFFFFF',
            fontColor: '#26262E'
        })
    },

    selectColor2: function(event) {
        this.setData({
            selectColorIndex: 2,
            backgroundColor: '#FFF5D6',
            fontColor: '#26262E'
        })
    },

    selectColor3: function(event) {
        this.setData({
            selectColorIndex: 3,
            backgroundColor: '#1E2039',
            fontColor: '#FFFFFF'
        })
    },

    selectWeight1: function(event) {
        this.setData({
            selectWeightIndex: 1,
            fontWeight: 'normal'
        })
    },

    selectWeight2: function(event) {
        this.setData({
            selectWeightIndex: 2,
            fontWeight: 'bold'
        })
    },

    selectWeight3: function(event) {
        this.setData({
            selectWeightIndex: 3,
            fontWeight: '1000'
        })
    },

    onShareAppMessage: function() {
        wx.showShareMenu({
            withShareTicket: "true",
          menus: ['shareAppMessage', 'shareTimeline'],
        })
    },

    onShareTimeline: function() {
        return {
            title: title,
        }
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