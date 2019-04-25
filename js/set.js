//新建一个set结构
const set = new Set()

const arr = [1,2,3,4,5,5,6,6,7,8,8]
arr.forEach((item)=>{

    set.add(item)
})

//在set中 5和“5”代表的是不同的两个值  在添加新的数据时不会发生数据转换

set.add(5)
set.add("5")

console.log(set)

//set的数据操作方法
//add 添加数据  返回set本身 可以链式调用
//delete 删除数据  返回Boolean值
//has 判断是否存在某个值  返回Boolean值
//clear 清楚所有元素 没有返回值

set.add("feng")
console.log("是否存在"+set.has(1))
console.log("删除"+set.delete(2))

//使用Array.from实现数据去重
Array.from(new Set([1,2,3,3,3,5]))


//set的遍历操作
//keys 遍历键名
//values 遍历键值
//entries 遍历键值对
//forEach
//set的遍历顺序就是插入顺序


const a = new Set([1,2,3,4])
const b = new Set([2,3,5,6])

//实现交集
const intersect  = new Set([...a].filter(item => b.has(item)))
//实现差集
const difference  = new Set([...a].filter(item => !b.has(item)))

console.log(intersect)
console.log(difference)