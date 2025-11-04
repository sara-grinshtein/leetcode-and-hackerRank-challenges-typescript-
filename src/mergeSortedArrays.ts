// https://leetcode.com/problems/merge-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150

export function merge(nums1: number[], m: number, nums2: number[], n: number): void {
 console.log(`nums1: ${nums1}`)
 console.log(`nums2: ${nums2}`)
let p:number=m+n-1
    if(m===0){
        for(let k =0;k<n;k++)
          nums1[k] = nums2[k]
        return;
    }
    if(n===0)
        return;
    let i=m-1,j=n-1,tmp;
    for(;i>=0&&j>=0;)
    {
      if(nums2[j]>nums1[i])
      {
         nums1[p]= nums2[j];
         console.log(nums1)
         p--;
         j--;
         console.log(nums1)
      }
      else
      {
        nums1[p]=nums1[i];
       console.log(nums1)
        p--;
        i--;
      }
    }
    if(j===0)
    {
      nums1[p]=nums2[j];
      console.log(nums1)
    }
    if(j>0)
    {
      while(j>=0)
      {
        console.log(nums2[j])
        nums1[p]=nums2[j]
        j--
        p--
        console.log(nums1)
      }
      
    }
    
};
