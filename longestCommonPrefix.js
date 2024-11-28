// Longest Common Prefix of Strings
// Difficulty: EasyAccuracy: 29.52%Submissions: 295K+Points: 2
// Given an array of strings arr[]. Return the longest common prefix among each and every strings present in the array. If there's no prefix common in all the strings, return "".

// Examples :

// Input: arr[] = ["geeksforgeeks", "geeks", "geek", "geezer"]
// Output: "gee"
// Explanation: "gee" is the longest common prefix in all the given strings.
// Input: arr[] = ["hello", "world"]
// Output: ""
// Explanation: There's no common prefix in the given strings.
// Constraints:
// 1 ≤ |arr| ≤ 103
// 1 ≤ |arr[i]| ≤ 103

class Solution {
    longestCommonPrefix(arr) {
        // code here
        arr.sort((a,b)=>a-b)
       // Sort the array of strings
    arr.sort();

    // Get the first and last strings after sorting
    let first = arr[0];
    let last = arr[arr.length - 1];
    let minLength = Math.min(first.length, last.length);

    let i = 0;
    
    // Find the common prefix between the first and 
    // last strings
    while (i < minLength && first[i] === last[i]) {
        i++;
    }

    // Return the common prefix
    return first.substring(0, i);
      
        
    }
}

