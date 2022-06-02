// This function checks if a given string is a palindrome.
function isPalindrome(x) {
    return x.toLowerCase() === x.split("").reverse().join("").toLowerCase() ? true : false
}

isPalindrome("a") // true
isPalindrome("aba") // true
isPalindrome("Abba") // true
isPalindrome("hello") // false
isPalindrome("Bob") // true
isPalindrome("Madam") // true
isPalindrome("AbBa") // true
isPalindrome("") // true
