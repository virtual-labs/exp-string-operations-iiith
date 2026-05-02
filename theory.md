Strings are fundamental data types in computer science, representing sequences of characters. They are used to store and manipulate text, process user input, and solve a wide range of computational problems. Understanding string operations is essential for programming, algorithms, and problem solving.

---

### What is a String?

A **string** is a sequence of characters, such as letters, digits, or symbols. Strings can be mutable (modifiable) or immutable (fixed after creation), depending on the programming language. They are typically stored as arrays of characters and can be manipulated using various operations.

<img src="./images/experiment-image.png" alt="Alphabet: Example of string characters" width="400"/>

_Figure: The English alphabet (upper and lower case) — the basic building blocks for string operations._

Common string operations include:

- Accessing individual characters
- Concatenation (joining strings)
- Substrings (extracting parts of a string)
- Searching and pattern matching
- Reversing and comparing strings

---

### Problems Explored in This Experiment

In this experiment, you will solve two classic problems that illustrate important string operations:

### 1. Palindrome Detection

A **palindrome** is a string that reads the same forwards and backwards, ignoring spaces, punctuation, and capitalization. For example:

- "Madam, I'm Adam." is a palindrome.
- "Eve." is not a palindrome.

#### Problem Statement

Write a program that detects palindromes. Your program should accept a string from the keyboard and output YES or NO.

**Input Specification:**

- Input will contain a string S entered from keyboard, with fewer than 1000 characters.

**Output Specification:**

- Output must be either "YES" or "NO" depending on whether or not it is a palindrome.

**Sample Input and Output:**

```
Input: Madam, I'm Adam
Output: YES
Input: Eve.
Output: NO
```

**How to detect a palindrome?**

1. Remove all non-alphabetic characters and convert all letters to the same case (usually lowercase).
2. Compare the cleaned string to its reverse. If they are the same, it is a palindrome.

---

### 2. Subsequence Checking

Given two strings, determine if the second string can be obtained from the first by deleting zero or more characters (without reordering the remaining characters). This is called checking if the second string is a **subsequence** of the first.

#### Problem Statement

Write a program to print YES or NO depending on whether the second string can be obtained from the first by deleting none, one, or more characters.

**Input Specification:**

- Input will contain two strings separated by a space; the size of each string is at most 107 characters.

**Output Specification:**

- Output must be either "YES" or "NO" depending on whether the second string can be obtained from the first string.

**Sample Input and Output:**

```
Input: hyderabad her
Output: YES
Input: hyderabad dear
Output: NO
```

**How to check for a subsequence?**

1. Start with two pointers, one for each string.
2. Move through the first string, advancing the pointer in the second string whenever a matching character is found.
3. If you reach the end of the second string, it is a subsequence.

**Mathematical Formulation:**
Suppose the length of string A is M and string B is N. We need to find an N-tuple (X[0], X[1], ..., X[N-1]) such that X[i] < X[i+1] for 0 ≤ i ≤ N-2 and A[X[i]] = B[i] for 0 ≤ i ≤ N-1. If such a tuple exists, B is a subsequence of A.

---

### Why Study String Operations?

String problems are everywhere: in text processing, data validation, search engines, DNA sequencing, and more. Mastering string operations helps you:

- Develop efficient algorithms for real-world applications
- Strengthen your programming and analytical skills
- Understand the foundations of pattern matching and text manipulation

---

_This experiment encourages you to implement algorithms for palindrome detection and subsequence checking, deepening your understanding of string manipulation and programming._
