var userName = "lixin";
var time = Date.parse(new Date());
var data = {
    "username":userName,
    "registTime":time
};
var db=connect('course');
db.user.insert(data);
print('insert success');