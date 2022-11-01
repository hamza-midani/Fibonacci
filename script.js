let numbrOfTerme = -1; //  numbreofterme  recoit un nombre negatif -1 pour entrer dans le boucle while
while (numbrOfTerme <= 0) {
  numbrOfTerme = parseInt(prompt("Enter the number of fibonaci sequence : ")); //boucle while pour numbrofterme soit positif
}
console.log("A fibonacci sequence is written as:");
fibonaciSequence = (numbrOfTerme) => {
  let arr = [0, 1];

  let Fn = 0; //le premier nombre recoit 0
  let Sn = 1; //le deuxieme nombre recoit 1
  let S = 0; //somme  recoit 0
  for (let i = 1; i <= numbrOfTerme; i++) {
    S = Fn + Sn; //somme egale le premier nombre et le seconde nombre
    Fn = Sn; //premier nombre egale seconde nombre
    Sn = S; //seconde nombre egale somme
    arr.push(S); //insertion la somme dans la fin array par  push
    console.log(`step ${i}:${arr}`); //afficher chaque etape d'insertion d un valeur
  }
  console.log(`${arr}`);
  console.log(arr.join(","));
  console.log(...arr);
};
fibonaciSequence(numbrOfTerme);
