
//weakSet的元素只能是对象
//weakSet中的对象是弱引用 即 存在weakSet中的对象 如果没有被其他对象引用
//垃圾回收机制就会收回该内存 即使该对象存在weakSet中
//基于以上特点 weakSet不可遍历，成员的多少取决于垃圾回收机制

let arr = [[1,2],[4,5]]
let weakSet = new WeakSet()

weakSet.add(arr)//添加新的元素
console.log(weakSet.has(arr))//判断是否存在某原书
console.log(weakSet.delete(arr))//删除元素