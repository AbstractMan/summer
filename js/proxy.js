
//拦截函数
//基本语法

//let proxy = new Proxy(target,handler)
// 生成proxy实例 target为目标对象 handler为目标对象行为

const proxy = new Proxy([1,2,3,4,5,6],{
    //参数 目标对象 属性名 proxy本身
    //实现数组读取负数索引
    get(target, p, receiver) {
        let index = Number(p)
        if(index < 0){

            p = target.length + index
        }

        return Reflect.get(target,p,receiver)
    },
    set(target,  p, value, receiver) {
        if(p === "age"){
            target[p] = 30;
            console.log("age must be 30")
        }else{
            target[p] = value
        }
    }
});
let obj = Object.create(proxy);
console.log(obj[-2])


