// https://www.hackerrank.com/challenges/sherlock-and-array/problem?isFullScreen=true
export function balancedSums(arr: number[]): string {
   let totalSum:number=0;
    for(let i=0;i<arr.length;i++)
    {
        totalSum+=arr[i]
    }
    let leftSum:number = 0
    for(let i=0;i<arr.length;i++)
    {
        totalSum-=arr[i]
        if(leftSum==totalSum)
            return "YES";
        leftSum+=arr[i]
    }
    return "NO"
}