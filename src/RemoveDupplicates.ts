export function removeDuplicates(nums: number[]): number {
   let uniq:number = 0,cur =1,empty =0;
  
   while(cur<nums.length)
   {
     if(nums[uniq]!== nums[cur]&& empty ===0)
    {
        cur++;
        uniq++
        continue;
    }
    if(nums[uniq]!== nums[cur])
    {
        nums[empty] = nums[cur]
        uniq++;
        empty++;
        cur++;
        nums[empty] = Number.POSITIVE_INFINITY
        console.log(nums)
    }
    else
    {
        if(cur === uniq+1)
            empty = cur; 

       nums[cur] = Number.POSITIVE_INFINITY 
       cur++
       console.log(nums)
    }
   }
   return uniq+1;
};