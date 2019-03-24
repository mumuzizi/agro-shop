var user1 = {
    name:"lixin",
    age:20,
    hobby:['看电视','阅读','旅游'],
    pc:{
        brand:'ASUS',
        system:'window 10'
    }
};

var user2 = {
    name:'ligaijun',
    age:43,
    hobby:['看篮球赛','喝茶','看剧'],
    pc:{
        brand:'apple',
        system:'macOS'
    }
};

var user3 = {
    name:'lifangyi',
    age:18,
    hobby:['学习','咸鱼躺','看剧']
};

var db = connect('course');
db.user.insert([user1,user2,user3]);
print('insert success 3 data');