function timeout() {
    return new Promise(resolve =>{
        setTimeout(()=>{
            console.log(1);
            resolve();
        },2000);
    });
}

async function fn(){
    await timeout();//会等到timeout执行完在执行下一句
    console.log(2);
}

fn();
