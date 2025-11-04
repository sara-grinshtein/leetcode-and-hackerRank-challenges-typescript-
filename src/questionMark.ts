// // https://coderbyte.com/editor/Questions%20Marks:TypeScript

export function QuestionsMarks(str: string) {
    let foundAny = false;        // Flag to track if we ever find a valid pair that sums to 10
  let lastDigit: number | null = null; // Holds the last digit we saw
  let qCount = 0;              // Counts question marks since the last digit

  for (let i = 0; i < str.length; i++) {
    const ch = str[i];

    if (ch === '?') {
      // Count question marks only if we have already seen a digit before
      if (lastDigit !== null) qCount++;
    } else if (ch >= '0' && ch <= '9') {
      const cur = ch.charCodeAt(0) - 48; // Convert char to number (faster than Number(ch))

      if (lastDigit !== null) {
        // We found two consecutive digits (no other digits between them)
        if (lastDigit + cur === 10) {
          // If their sum is 10, we check for exactly 3 question marks between them
          if (qCount !== 3) return false;
          foundAny = true; // Found at least one valid pair
        }
      }

      // Reset the window for the next potential pair
      lastDigit = cur;
      qCount = 0;
    } else {
      // Ignore any letters or other characters
    }
  }

  // Return true only if we found at least one valid pair that met the condition
  return foundAny;
}

// export function QuestionsMarks(str: string) {

//     str = str.replace(/[A-Za-z]/g, "")
//     let firstnum = Number.POSITIVE_INFINITY, lastNum = Number.POSITIVE_INFINITY,
//         ques: number = 0;
//     let i = 0;
//     for (i = 0; i < str.length; i++) {
//         if (str[i] >= '0' && str[i] <= '9') {
//             if (firstnum === Number.POSITIVE_INFINITY)
//                 firstnum = i;
//             else
//                 lastNum = i
//             if (lastNum >= 0 && Number(str[firstnum]) +
//                 Number(str[lastNum]) !== 10 && ques !== 3)
//                 break;
//             console.log(`the sum is: ` + Number(str[firstnum]) + Number(str[lastNum]))
//             if (lastNum >= 0 && Number(str[firstnum]) +
//                 Number(str[lastNum]) === 10 && ques === 3) {
//                 firstnum = lastNum + 1
//                 ques = 0
//             }
//         }
//         else {
//             ques++;
//         }
//         console.log(i)
//     }
//     console.log(i)
//     // code goes here
//     if (i < str.length)
//         return false;
//     return true;
// }

