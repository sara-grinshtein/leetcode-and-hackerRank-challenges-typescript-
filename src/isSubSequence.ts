//https://leetcode.com/problems/is-subsequence/?envType=study-plan-v2&envId=top-interview-150 

export function isSubsequence(s: string, t: string): boolean {
    
    let fitletters:number[]= new Array(t.length);
    let indexS =0 ,indexT=0,indexfit=0, count =0;
    while(indexS<s.length&&indexT<t.length)
    {
        if(s[indexS]===t[indexT])
        {
            fitletters[indexfit++] = ++count;
            indexS++;
            indexT++;
        }
        else
        {
            indexT++;
            if(indexfit>0)
                 fitletters[indexfit]=fitletters[indexfit-1];
            else
                fitletters[indexfit]=0;
            indexfit++;
        }
    }
    for(let i=0;i<fitletters.length;i++)
    {
        if(fitletters[i]===s.length) 
            return true
    }
    return false
};