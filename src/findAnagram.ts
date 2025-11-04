// https://leetcode.com/problems/find-all-anagrams-in-a-string/ 
// 48 / 65 
export function findAnagrams(s: string, p: string): number[] {
    let res: number[] = []
    // map that contains the letters in p and the
    // occurrences of every letter
    let mapP = new Map<string, number>();
    for (let i = 0; i < p.length; i++) {
        if (!mapP.has(p[i]))
            mapP.set(p[i], 1)
        else
            mapP.set(p[i],
                mapP.get(p[i])! + 1)
    }
    // map that contains the letters in p and the
    // occurrences of every letter
    let mapS = new Map<string, number>();
    let left = 0, right = p.length - 1;
    //first interaction outside the loop 
    for (right = 0; right < p.length; right++) {
        mapS.set(s[right], mapS.get(s[right]) ?  mapS.get(s[right])! + 1 :1)
    }
   
    const isequal = Array.from(mapP.entries()).every(([key, value]) => (mapS.has(key) && mapS.get(key) === value))
    while (right < s.length) {
          if (isequal)
            res.push(left)
        mapS.set(s[right], mapS.get(s[right])! + 1)
        mapS.delete(s[left])
        right++;
        left++;
      
    }
      if (isequal)
            res.push(left)
    return res;
};
