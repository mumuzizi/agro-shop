var db = connect('course');
var userList = db.user.find();
userList.forEach(function(user){
    
    printjson(user);
});