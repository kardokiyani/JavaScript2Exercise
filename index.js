function updateLabel() {
  var addend1 = getNumber1();
  console.log("addend1:", addend1);
  var addend2 = getNumber2();
  console.log("addend2:", addend2);
  var sum = addend1 + addend2;
  console.log("sum:", sum);
  label.textContent = addend1 + " + " + addend2 + " = " + sum;
}
