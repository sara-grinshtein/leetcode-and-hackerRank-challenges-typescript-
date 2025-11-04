// //https://leetcode.com/problems/remove-element/?envType=study-plan-v2&envId=top-interview-150

export function removeElement(nums: number[], val: number): number {
    if (nums==null)
        return 0;
    let k:number=0,emp:number=Number.POSITIVE_INFINITY;
    for(let i=0;i<nums.length;i++)
    {
        if(nums[i]==val)
        {
            if(i!=0&&nums[i-1]!=val&&nums[i-1]!=Number.POSITIVE_INFINITY)
            {
                emp=i;
            }
            if(i===0&&nums[i]==val)
                emp=i
            nums[i] = Number.POSITIVE_INFINITY
        }
        else{
            k++;
            if(emp!=Number.POSITIVE_INFINITY)
            {
                nums[emp]=nums[i]
                nums[i]=Number.POSITIVE_INFINITY
                emp++
            }
        }
    }
    return k;
};
