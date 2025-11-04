// https://leetcode.com/problems/happy-number/description/?envType=study-plan-v2&envId=top-interview-150

// 398 teatcases from 420 !! :) 

export function isHappy(n: number): boolean {
  let set: Set<number> = new Set<number>();
  let cur = 0, sum = 0
  while (!set.has(n)) {
    set.add(n)
    sum = 0
    while (n > 0) {
      cur = n % 10
      cur = cur ** 2
      sum += cur
      n = Math.floor((n / 10))
    }
    n = sum
    if (n === 1)
      return true
  }
  return false
};
