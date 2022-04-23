// pages/news2/news2.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        title: "习近平在金砖国家领导人第十三次会晤上的讲话",
        image: "https://fastly.jsdelivr.net/gh/neutron-ai/images@main/news2.png",
        summary: "习近平：我们将扩大合作空间，加大对共建“一带一路”国家服务业发展的支持，同世界共享中国技术发展成果。",
        content: [
            "当前，新冠肺炎疫情仍在全球肆虐，世界经济复苏艰难曲折，国际秩序演变深刻复杂。面对挑战，金砖国家要展现担当，为世界和平与发展作出积极贡献，推动构建人类命运共同体。",
            "——我们要推动践行真正的多边主义，恪守联合国宪章宗旨和原则，维护以联合国为核心的国际体系和以国际法为基础的国际秩序。",
            "——我们要推动全球团结抗疫，携手应对疫情，坚持科学溯源，反对政治化、污名化，加强联防联控，促进疫苗作为全球公共产品的研发、生产、公平分配。",
            "——我们要推动开放创新增长，助力世界经济平稳复苏，维护展务实合作，推动金砖国家疫苗研发中心在线上尽快启动。要加强传统医药合作，为抗击疫情提供更多手段。",
            "我们应该坚决维护联合国权威和地位，共同践行真正的多边主义。推动构建人类命运共同体，需要一个强有力的联合国，需要改革和建设全球治理体系。世界各国应该维护以联合国为核心的国际体系、以国际法为基础的国际秩序、以联合国宪章宗旨和原则为基础的国际关系基本准则。国际规则只能由联合国193个会员国共同制定，不能由个别国家和国家集团来决定。国际规则应该由联合国193个会员国共同遵守，没有也不应该有例外。对联合国，世界各国都应该秉持尊重的态度，爱护好、守护好这个大家庭，决不能合则利用、不合则弃之，让联合国在促进人类和平与发展的崇高事业中发挥更为积极的作用。中国愿同各国秉持共商共建共享理念，探索合作思路，创新合作模式，不断丰富新形势下多边主义实践。"
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