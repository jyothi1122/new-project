var num = 0;
var count = 0;
for (num = 0; num <= 50; num++) {
    if (num % 2 == 0) {
        console.log("the odd values between 0 to 50 is:" + num);
        continue;
    }
    count++;
}
console.log(" The count of odd values between 0 and 20 is: " + count);
