// https://www.hackerrank.com/contests/software-engineer-prep-kit/challenges/count-elements-greater-than-previous-average/problem?isFullScreen=true
export function countResponseTimeRegressions(responseTimes: number[]): number {
    // Write your code here
    let count:number=0,curSum=0,curAvg;
    for(let i=0;i<responseTimes.length;i++)
    {
       
        curSum+=responseTimes[i]
         curAvg = curSum/(i+1)
        if(responseTimes[i]>curAvg&&i>0)
            count++
    }
    return count;

}