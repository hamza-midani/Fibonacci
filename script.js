let numbrOfTerme = -1;
while (numbrOfTerme <= 0) {
  numbrOfTerme = parseInt(prompt("Enter the number of fibonaci sequence : "));
}
console.log("A fibonacci sequence is written as:");
fibonaciSequence = (numbrOfTerme) => {
  let arr = [0, 1];

  let Fn = 0;
  let Sn = 1;
  let S = 0;
  for (let i = 1; i <= numbrOfTerme; i++) {
    S = Fn + Sn;
    Fn = Sn;
    Sn = S;
    arr.push(S);
    console.log(`step ${i}:${arr}`);
  }
  console.log(`${arr}`);
  console.log(arr.join(","));
  console.log(...arr);
};
fibonaciSequence(numbrOfTerme);
