// Given an int, figure out how many ones, threes and nines you could fit into
// the number.
// You must create a class.
// You will make variables (class.ones, class.threes, class.nines) to do this.
// Use getters and setters
class OnesThreesNines {
  constructor(ones, threes, nines) {
    this.ones = ones;
    this.threes = threes;
    this.nines = nines;
  }
}

let n1 = new OnesThreesNines(5)
n1.nines ➞ 0

n1.ones ➞ 5

n1.threes ➞ 1
