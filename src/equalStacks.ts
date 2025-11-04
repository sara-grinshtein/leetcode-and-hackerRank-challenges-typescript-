// https://www.hackerrank.com/challenges/equal-stacks/problem
export function equalStacks(h1: number[], h2: number[], h3: number[]): number {
    let prefixH1: Set<number> = new Set<number>();
    let prefixH2: Set<number> = new Set<number>();
    let prefixH3: Set<number> = new Set<number>();
    let current: number = 0
    for (let i = 0; i < h1.length; i++) {
        current += h1[h1.length - 1 - i]
        prefixH1.add(current)
    }
    current = 0
    for (let i = 0; i < h2.length; i++) {
        current += h2[h2.length - 1 - i]
        prefixH2.add(current)
    }
    current = 0
    for (let i = 0; i < h3.length; i++) {
        current += h3[h3.length - 1 - i]
        prefixH3.add(current)
    }
    let height: number = 0;
    prefixH1.forEach(x =>
        {
            if (prefixH2.has(x) && prefixH3.has(x))
                height = x
        })
    return height
}

/*
function equalStacks(h1: number[], h2: number[], h3: number[]): number {
      let followH1: number[] = [], followH2: number[] = [], followH3: number[] = [];
    let current: number = 0
    for (let i = 0; i < h1.length; i++) {
        current += h1[h1.length - 1 - i]
        followH1.push(current)
    }
    current = 0
    for (let i = 0; i < h2.length; i++) {
        current += h2[h2.length - 1 - i]
        followH2.push(current)
    }
    current = 0
    for (let i = 0; i < h3.length; i++) {
        current += h3[h3.length - 1 - i]
        followH3.push(current)
    }
    let height:number=0;
    for(let i=0;i<followH1.length;i++)
    {
        if(followH2.find(x=>x===followH1[i])&&
            followH3.find(x=>x===followH1[i]))
            {
                height=i
            }
    }
    return followH1[height];    
}

*/