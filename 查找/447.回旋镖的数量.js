/*
 * @Description:https://leetcode-cn.com/problems/number-of-boomerangs/
 */
/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
  // 这是一个典型的排列组合问题
  let result = 0

  if(points.length <=2 ) return result

  for (let item of points) {
    //第一层的item作为中心点
    let map = new Map()
    for (let item1 of points) {
      // 在给定i的情况下，计算与item相等距离的 (j, k)的组合个数为多少，用map记录
      // 然后用这个个数计算排列组合
      let x = item[0] - item1[0]
      let y = item[1] - item1[1]

      let distance = x * x + y * y
      //item-item1这个距离，如果在map中有记录，则++，无则设1
      map.set(distance, map.has(distance) ? map.get(distance) + 1 : 1)

    }
    // 执行流到这里：map中保存了从当前item出发，到points中所有点的距离有多少种，及每种距离有多少个
    for (let item of map.values()) {
      // 如果每种距离有>=2个，如m个，则可以构成一个m*m-1个回旋镖组合。
      // 这里只要回旋镖的顺序不一样，就是不同的回旋镖。而不是看点是否重复。否则又要用一个map记录已出现的回旋镖组合。
      if (item >= 2) {
        result += item*(item-1)
      }
    }
  }
  return result
};

let points = [[1, 1]];


console.log(numberOfBoomerangs(points));
