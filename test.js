// Create a function that computes the hamming distance between two strings.
// Hamming distance is the number of characters that differ between two strings.
// Both strings will have the same length.
function hammingDistance(str1, str2) {
  let result;
	for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
        result++
    }
  }
    return result;
}

hammingDistance("abcde", "bcdef") // ➞ 5
