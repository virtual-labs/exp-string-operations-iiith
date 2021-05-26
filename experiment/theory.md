**Problem 1**

A palindrome is a string which reads same wheter it is read from start to end of from end to the start. In literature, however, even the capitalization of words and punctuations are ignored. So, "Rats live on no evil stars." is also a palindrome. Detection of such palindromes can be done by creating a new string in which all the punctuations have been removed and all the upper case characters have been converted to lower case characters, and then doing a test for plaindome on the new string.

Alternatively, one can create two indices and put them at the end and beginning of the string. The index at the beginning moves towards the end and vice versa. If a character at any of the indices is not an alphabet the corresponding indice is moved until an alphabet is encountered. If the alphabet is in Upper case, then it is converted into lower case. Now, the values at the indices are compared and if they are not same then the string is not a palindome. Otherwise, the check is repeated for new values of indices obtained by moving them by suffiecient amount so that an alphabet is encountered. If at any time the indices are coincident or the indices cross each other, then the string is a palindrome.


**Problem 2**

Inorder to obtain string2 from string1 by deleting 0 or more characters it is fairly obvious that the characters in string2 must appear in the same order as in string1.

**Mathematical formulation**

Suppose the length of string A is M and string B is N we need to find a N tuple (X[0],X[1],...,X[N-1]) such that X[i] < X[i+1] for 0<=i<=N-2 and A[X[i]] = B[i] for 0<=i<=N-1. Why this formulation is correct? B[0] occurs at X[0]
B[1] occurs at X[1]
..
..
..
B[N-1] occurs at X[N-1]


Now, we remove all other characters from A except those which appear at positions indicated by array X. Then we get string B.Thus the problem formulation is correct. The order constraint between X[i]'s is element because we want the characters in B to appear in order in A.


**Solution**

So now once we have stated the problem mathematically we would like to know how can we find array X subjected to the constraints mentioned.Lets see how can we find X[0]. You must be apply the same logic on how to find other values of array X once you are familier with X[0]. X[0] has only one constraint to be satisfied which is A[X[0]] = B[0] . There can be many values of X[0] which can satisfy the above constraint. So which value should X[0] take?



**Proofs**

Suppose S is a set of values which X[0] can take. We prove that X[0] should take the minimum value, amongst all the members of set S. If |S|=1 , then it is obviously valid. So, assume |S|>=2. We will deal with |S|=0 case later. Lets say X[0] = b and the minimum value of the set S is a i.e a < X[0]. Since we have choosen X[0] as b we need to search for B[1] [b+1 m] beacuse B[1]> B[0]. It can happen that B[1] is not present in [b+1 m] at all which would imply that string B cannot be a subsequence of string A. But suppose the character is present in [a+1 b] and X[0]=a then it is possible that string B might be a subsequence of string A. Thus, X[0] must take the minimum value of set S i.e the position where first B[0] is same as chracter of A should be chosen as X[0].

Now, if X[0] = a, we shall search for X[1] in [a+1,M] and similarly X[2] in [X[1]+1,M] and for X[i] in [X[i-1]+1,M].Thus if we can find the array X then we say YES else NO.


