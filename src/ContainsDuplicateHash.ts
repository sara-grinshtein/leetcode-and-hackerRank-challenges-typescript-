// https://leetcode.com/problems/contains-duplicate-ii/description/?envType=study-plan-v2&envId=top-interview-150

export function containsNearbyDuplicate(nums: number[], k: number): boolean {
    let indexMap: Map<number, number[]> = new Map<number, number[]>();
    for (let i = 0; i < nums.length; i++) {
        if (!indexMap.has(nums[i]))
            indexMap.set(nums[i], [i])
        else
            indexMap.get(nums[i])!.push(i)
    }
    for (let record of indexMap) {
        let arr = record[1]
        if (arr.length >= 2) {
            for (let i = arr.length; i > 0; i--) {
                if (arr[i] - arr[i - 1] <= k)
                    return true;
            }
        }
    }
    return false
};
//לשפר את זה לדרך יותר יעילה
// export function containsNearbyDuplicate(nums: number[], k: number): boolean {
//     let indexMap: Map<number, number> = new Map<number, number>();
//     for(let i=0;i<nums.length;i++)
//     {
//         if(indexMap.has(nums[i]))
//         {
//             if(indexMap.get(nums[i])<=k)
//              ...
//         }
//          indexMap.set(nums[i],i)
//     }
// }