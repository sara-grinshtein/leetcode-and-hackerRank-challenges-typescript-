// https://coderbyte.com/editor/Find%20Intersection:TypeScript

function FindIntersection(strArr: string) {
  let group1 = strArr[0].split(",")
  let group2 = strArr[1].split(",")
  let g1: number = 0, g2: number = 0;
  let res: string = ""
  while (g1 < group1.length && g2 < group2.length) {
    if (Number(group1[g1]) === Number(group2[g2])) {
      res += group1[g1] + ', '
      g1++;
      g2++;
    }
    else {
      if (Number(group2[g2]) < Number(group1[g1]))
        g2++
      else
        g1++
    }
  }
  res = res.substring(0, res.length - 1 - 1)
  // code goes here  
  if (res !== "")
    return res;
  return false;

}