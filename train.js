// Tasks
function count_digits(str) {
  let count = 0;
  for (let a of str) {
    if (a > "3" && a <= "7") {
      count++;
    }
  }
  return count;
}

const natija = count_digits("ah98mad7al3ie1v");
console.log(natija);