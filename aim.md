String is traditionally a sequence of characters, either as a literal constant or as some kind of variable. The latter may allow its elements to be mutated and/or the length changed, or it may be fixed (after creation). A string is generally understood as a data type and is often implemented as a byte (or word) array that stores a sequence of elements, typically characters, using some character encoding. A string may also denote more general array data types and/or other sequential data types and structures; terms such as byte string, or more general, string of datatype, or datatype-string, are sometimes used to denote strings in which the stored data does not(necessarily) represent text.

**Problem 1:**

A palindrome is a symmetric character sequence that looks the same when read backwards, i.e. from right to left. Interestingly, human being usually discards blank spaces and punctuation marks while recognizing a palindromes like: (a) "Madam, I'm Adam."(b)"Eve." etc.  

Write a program that detects palindromes. Your program should accept a string from the key board and output YES/NO.  


**Input Specification**

Input will contain a string S entered from keyboard, with number of characters less than 1000.  


**Output Specification**

Output must be either "YES" or "NO"(quotes for clarity) depending upon whether or not it is a palindrome.  


**Sample Input and Output**

Input: Madam, I'm Adam  
Output:YES  
Input: Eve.  
Output: NO  



**Problem 2:**

Given two strings, PRINT (YES or NO) whether the second string can be obtained from the first by deletion of none, one or more characters.


**Input Specification**

Input will contain two strings separated by a space and size of each string is at max 107.  


**Output Specification**

Output must be either "YES" or "NO" depending on whether 2nd string can be obtained from 1st string.  


**Sample Input and Output**

Input: hyderabad her  
Output: YES  
Input: hyderabad dear  
Output: NO  


