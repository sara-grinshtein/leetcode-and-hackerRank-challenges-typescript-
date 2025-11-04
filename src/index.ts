import { merge } from "./mergeSortedArrays"
import { buildList, MyListNode, printList } from './structures/MyListNode'
import { mergeTwoLists } from './MergeTwoSortedLists'
import { removeDuplicates } from './RemoveDupplicates'
import { removeElement } from './RemoveElemet'
import { isPalindrome } from './validPalindrom'
import { twoSum } from './TwoSum'
import { isValid } from './validParenthesesStack'
import { containsNearbyDuplicate } from './ContainsDuplicateHash'
import { findSmallestMissingPositive } from './smallestMissingArray'
import { countResponseTimeRegressions } from './countElementSmallerThenPreviesAverage'
import { balancedSums } from './balancedSums'
import { equalStacks } from './equalStacks'
import {isHappy } from './HappyNumber'
import {isSubsequence} from './isSubSequence'
import {findAnagrams} from './findAnagram'
import {QuestionsMarks} from './questionMark'


//QuestionMark()
export function QuestionMark(){
    let str1 = "arrb6???4xxbl5???eee5"
    console.log( QuestionsMarks(str1))
    let str2 =  "aa6?9"
    console.log(QuestionsMarks(str2))
}

//main_anagram()
export function main_anagram(){
    let s ="abab"
    let p ="ab"
   console.log(findAnagrams(s,p)) 
}

//main_isSubswquence()
export function main_isSubswquence(){
    let s = "abc"
    let t = "ahbgdc"
    isSubsequence(s,t)
}

export function main_Happy_number(){
    let num1= 7
   console.log(isHappy(num1)) 
}
// main_Happy_number()

export function main_FirsFactorial(){
    let num = 4;
   let res = FirstFactorial(4)
   console.log(res)
   console.log(FirstFactorial(8))
}
//main_FirsFactorial()

export function FirstFactorial(num: number) { 
  for(let i=num-1;i>=1;i--)
  {
    num = num * i
  }
  // code goes here  
  return num; 

}


export function main_equalStacks() {
    let h1: number[] = [3, 2, 1, 1, 1]
    let h2: number[] = [4, 3, 2]
    let h3: number[] = [1, 1, 4, 1]
    console.log(equalStacks(h1,h2,h3)) 
}
//main_equalStacks()

export function main_balancedSums() {
    let nums1: number[] = [1, 1, 4, 1, 1]
    console.log(`nums1 is: ${nums1}`)
    console.log(balancedSums(nums1))
    let nums2: number[] = [2, 0, 0, 0]
    console.log(`nums2 is: ${nums2}`)
    console.log(balancedSums(nums2))
    let nums3: number[] = [0, 0, 2, 0]
    console.log(`nums3 is: ${nums3}`)
    console.log(balancedSums(nums3))
    let nums4: number[] = [1, 2, 3]
    console.log(`nums4 is: ${nums4}`)
    console.log(balancedSums(nums4))
}
// main_balancedSums() 

export function main_countResponseTimeRegressions() {
    let responseTimes1 = [100, 200, 150, 300]
    console.log(responseTimes1)
    countResponseTimeRegressions(responseTimes1)
    let responseTimes2 = [100]
    console.log(responseTimes2)
    countResponseTimeRegressions(responseTimes2)
}
//main_countResponseTimeRegressions()

export function main_findSmallestMissing() {
    let nums1 = [3, 4, -1, 1]
    console.log(findSmallestMissingPositive(nums1))
    let nums2 = [0]
    console.log(findSmallestMissingPositive(nums2))
    let nums3 = [1, 1]
    console.log(findSmallestMissingPositive(nums3))

}
//main_findSmallestMissing()

export function main_containDuplicateHash() {
    let nums1: number[] = [1, 2, 3, 1]
    console.log(containsNearbyDuplicate(nums1, 3))
    let nums2: number[] = [1, 0, 1, 1]
    console.log(containsNearbyDuplicate(nums2, 1))
    let nums3: number[] = [1, 2, 3, 1, 2, 3]
    console.log(containsNearbyDuplicate(nums3, 2))

}
//main_containDuplicateHash()
export function main_Parentheses() {
    let str1: string = "["
    console.log(isValid(str1))
    let str2: string = "()[]{}"
    console.log(isValid(str2))
    let str3: string = "(]"
    console.log(isValid(str3))
    let str4: string = "([])"
    console.log(isValid(str4))
    let str5: string = "([)]"
    console.log(isValid(str5))
}
//main_Parentheses()
export function main_Two_Sum() {

    let nums1: number[] = [2, 7, 11, 15]
    let res1: number[] = twoSum(nums1, 9)
    console.log(res1)
    let nums2: number[] = [3, 2, 4]
    let res2: number[] = twoSum(nums2, 6)
    let nums3: number[] = [3, 3]
    let res3: number[] = twoSum(nums3, 6)

}
//main_Two_Sum()

export function main_mergeTwoLists() {
    let list1 = buildList([1])
    let list2 = buildList([])
    let res: MyListNode | null = mergeTwoLists(list1, list2);
    console.log(` the merged list is: ${printList(res)}`)

}
// main_mergeTwoLists()

export function main_palindromArray() {
    let phrase1: string = 'ababa'
    console.log(`phrase1 is: ${phrase1}`)
    console.log(`phrase1 is palindrom ? ${isPalindrome(phrase1)}`)
    let phrase2: string = 'race a car'
    console.log(`phrase2 is ${phrase2}`)
    console.log(`phrase2 is palindrom ? ${isPalindrome(phrase2)}`)
    let phrase3: string = "rrrrr"
    console.log(`phrase3 us ${phrase3}`)
    console.log(`phrase3 is palindrom ? ${isPalindrome(phrase3)}`)
    let phrase4: string = ' '
    console.log(`phrase4 is: ${phrase4}`)
    console.log(`phrase4 is palindrom ? ${isPalindrome(phrase4)}`)
    // A man, a plan, a canal: Panama
}
//main_palindromArray()

export function main_RemoveElement() {
    let nums1: number[] = [2]
    removeElement(nums1, 3)
    console.log(`nums1 after remove element is: ${nums1}`)
    let nums2: number[] = [3, 3]
    removeElement(nums2, 3)
    console.log(`nums2 after remove element is: ${nums2}`)
    let nums3 = [3, 2, 2, 3]
    removeElement(nums3, 3)
    console.log(`nums3 after remove element is: ${nums3}`)
    let nums4 = [0, 1, 2, 2, 3, 0, 4, 2]
    removeElement(nums4, 2)
    console.log(`nums4 after remove element is: ${nums4}`)

}

//main_RemoveElement()

export function main_removeDuplicates() {
    let nums = [1, 2, 3]

    console.log(removeDuplicates(nums))
}
// main_removeDuplicates()

export function main_mergeTwoSortedArrays() {
    let nums1: number[] = [4, 5, 6, 0, 0, 0]
    let nums2: number[] = [1, 2, 3]
    merge(nums1, 3, nums2, 3)
    console.log(`the merged array is: ` + nums1)
    nums1 = [1]
    nums2 = []
    merge(nums1, 1, nums2, 0)
    console.log(`the merged array is: ` + nums1)
    nums1 = [0]
    nums2 = [1]
    merge(nums1, 0, nums2, 1)
    console.log(`the merged array is: ` + nums1)
    nums1 = [2, 0]
    nums2 = [1]
    merge(nums1, 1, nums2, 1)
    console.log(`the merged array is: ` + nums1)
}
//main_mergeTwoSortedArrays()
