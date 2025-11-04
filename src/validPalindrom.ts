//https://leetcode.com/problems/valid-palindrome/description/?envType=study-plan-v2&envId=top-interview-150

export function isPalindrome(s: string): boolean {
    s = s.toLowerCase()
    s = s.replace(/[^A-Za-z0-9]/g, "")
    console.log(`s after replace is: ${s}`)
    let start: number = 0, end = s.length - 1;
    while (start < end) {
        if (s[start] != s[end])
            return false;
        else {
            start++
            end--
        }
    }
    return true;
};