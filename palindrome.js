// This function checks if a given string is a palindrome.
function isPalindrome(x) {
    return x.toLowerCase() === x.split("").reverse().join("").toLowerCase() ? true : false
}