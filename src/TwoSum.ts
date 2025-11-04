// https://leetcode.com/problems/two-sum/?envType=study-plan-v2&envId=top-interview-150
export function twoSum(nums: number[], target: number): number[] {
    let map:Map<number,number> = new Map<number,number>();
    for(let i =0;i<nums.length;i++)
    {
        map.set(nums[i],i)
    }
    
    for(let i=0;i<nums.length;i++)
    {
        let cur:number = nums[i]
        let x:number = target-cur
        if(map.has(x)&&map.get(x)!=i)
            return [i,map.get(x)??0]
    }
    return [];
};