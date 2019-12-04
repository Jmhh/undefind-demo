const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;

// mock一组数据
const produceData = () => {
    let articles = [];
    for (let i = 0; i < 30; i++) {
        let newArticleObject = {
            title: Random.csentence(5, 30), // Random.csentence( min, max )
            thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
            author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
            date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
        }
        articles.push(newArticleObject)
    }
    return {
        data: articles
    }
}

//首页四项状态信息
const statesData = () => {
    let data = {
        studentCount: 216,
        clasCount: 2,
        lastAvgScore: 78,
        avgScore: 82,
        topicCount: 125,
        oTopicCount: 115,
    }
    return data
}
Mock.mock('/stats', /post|get/i, statesData);

//首页学生测试列表
const studentLists = () => {
    let data = [];
    for (let i = 0; i < 5; i++) {
        let newObject = {
            id: Random.natural(1, 1000),
            name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
            score: Random.natural(1, 150),
            rank: Random.natural(1, 100),
            change: Random.natural(-20, 20),
            date: Random.datetime() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
        }
        data.push(newObject)
    }
    return data
}
Mock.mock('/studentLists', /post|get/i, studentLists);

//首页班级测试情况
Mock.mock('/testStage', /post|get/i, {
    'data|8': [{
        "title|+1": 1, //测试序号
        'cScore|60-90': 70, //班级平均分
        'gScore|60-90': 70, //年级2平均分
    }]
});

//获取测试情况
const testPeriodAvgs = () => {
    let data = {
        avgScore: 78,
        maxScore: 96,
        minScore: 44,
        passRate: 92,
        excellentCount: 12,
        goodCount: 37,
        passCount: 43,
        failedCount: 8,
    }
    return data
}
Mock.mock('/testPeriodAvgs', /post|get/i, testPeriodAvgs);

//获取知识点正确率
Mock.mock('/ratios', /post|get/i, {
    'data|6': [{
        "name|+1": ['数列的概念', '等差数列', '等比数列', '数列求和', '数列的综合应用', '数列方程式'],
        'successCount|50-90': 50,
        'failedCount|20-40': 50,
        'passRatios|50-90': 50,
    }]
});


Mock.mock('/news', /post|get/i, produceData); //当post或get请求到/news路由时Mock会拦截请求并返回上面的数据