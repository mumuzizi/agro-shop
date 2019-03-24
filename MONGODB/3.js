var modify = {
    findAndModify:"user",
    query:{name:'liixn'},
    update:{$set:{age:32}},
    new:true
};

var result = db.runCommand(modify);
printjson(result);


db.user.find(
    {},
    {name:true,age:true,_id:false}
).limit(10).skip(20).sort({age:-1})