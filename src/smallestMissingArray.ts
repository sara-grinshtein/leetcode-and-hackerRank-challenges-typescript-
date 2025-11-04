// https://www.hackerrank.com/contests/software-engineer-prep-kit/challenges/find-smallest-missing-positive-integer/problem?isFullScreen=true
export function findSmallestMissingPositive(orderNumbers: number[]): number {
    let cur, tmp;
    if(orderNumbers.length==0)
        return 1
    for (let i = orderNumbers.length - 1; i >= 0;) {
        if (orderNumbers[i] > 0 && orderNumbers[i] !== (i + 1)) {
            cur = orderNumbers[i]
            tmp = orderNumbers[cur - 1]
            orderNumbers[cur - 1] = cur
            orderNumbers[i] = tmp
            if (tmp === cur)
                i--
        }
        else
            i--
    }
    for (let i = 0; i < orderNumbers.length; i++) {
        if (orderNumbers[i] !== i + 1)
            return i + 1
    }
    return orderNumbers.length+1;
}
