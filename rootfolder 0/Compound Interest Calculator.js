let p = prompt("Enter the principal amount");
let r = prompt("Enter the annual interst rate");
let n = prompt("Enter number of times interest is compounded per year");
let r_n_1 = r / n;
let r_n_2 = r / n + 1;
let t = prompt("Enter the time the money is invested for");
let t_1 = t * r;
let r_n_t = r_n_2 **t_1;
let a_1 = p * r_n_2;
let a_2 = a_1 ^ t_1
alert("The compound interest after " + "years is " "$" + a_2)

