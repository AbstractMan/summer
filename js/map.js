
//map是键值对集合 每个键值对的键名可以是字符串，可以是对象

const map = new Map()
let obj = {"name":"fengqinghua"}
map.set(obj,"object")

console.log(map.has(obj))
console.log(map.get(obj))

//map的键实际是与地质绑定 在使用对象作为map的键名时 只有同地址的对象才能指向同一个值

//如下 两个数组[1]其实是两个不同的地址 因此在取值时失败 返回undefined
map.set([1],55)
console.log(map.get([1]))

//对于两个基本数据类型值的键名  只有两个严格相等才能指向同一个值
//如下

map.set(5 , "number")
map.set("5","string")

console.log(map.get(5))
console.log(map.get("5"))

//操作方法  1.set 添加数据 2.get获取数据 3.delete 根据键名来删除 4.has 根据键名来判断是否存在
//遍历方法  1.keys 键名遍历 2.values 键值遍历 3.entries 键值对遍历
//遍历顺序是set 的先后顺序、
//通过entries 来遍历如下
for(let [key,value] of map.entries()){
    console.log(key,value)
}

//weakMap 同 Map 一样 键值对集合、可以使用 set,get方法
//weakMpa 的键名只能是对象 不可以是基本数据类型 （null除外）
//weakMap 键值 不计入垃圾回收机制 同为弱引用类型