var d=10;
console.log(d);
let x=20;
console.log("In X variable we have value ->", x);
const b=10;
console.log(b);
console.log("....................................................")
let a=10;
let pi=3.14;
let c="string";
let di=true;
let e=null;
let f=undefined;
let g;
let i=BigInt(1234567899874563210123654789321012365478989745623130n);
let s={
    name:"Bhanu",
    age: 30,
    isStudent: false
}
let arr=[1,2,3,4,5];
console.log(a,"\n",pi,"\n",c,"\n",di,"\n",e,"\n",f,"\n",g,"\n",i,"\n",s,"\n",arr);
console.log("....................................................");
console.log(typeof(a),"\n",typeof(pi),"\n",typeof(c),"\n",typeof(di),"\n",typeof(e),"\n",typeof(f),"\n",typeof(g),"\n",typeof(i),"\n",typeof(s),"\n",typeof(arr));
console.log("....................................................");

let a1=10;
let b1=5;
console.log("Arithemetic operators: for a1: ", a1,"b1: ",b1);
console.log("Add: ",a1+b1);
console.log("Sub: ",a1-b1);
console.log("Mul: ",a1*b1);
console.log("Div: ",a1/b1);
console.log("....................................................");
console.log("\n Comparision Operators: ");
console.log("Equal: ",a==b);
console.log("Not Equal: ",a!=b);
let q=2;
let r='2';
console.log("Equal: ",q==r);
console.log("Strict Equal: ",q===r);
console.log("Not Equal: ",q!=r);
console.log("Strict Not Equal: ",q!==r);
console.log("Greater than: ",a1>b1);
console.log("Less than: ",a1<b1);
console.log("Greater than or equal: ",a1>=b1);
console.log("Less than or equal: ",a1<=b1);
console.log("....................................................");
console.log("\n Logical Operators: ");
console.log("AND :",a>5&&b<10);
console.log("OR :",a>5 || b<10);
console.log("NOT :", !(a>5));
console.log("....................................................");
console.log("\n Bitwise Operators: ");
console.log("Bitwise AND :",a&b);
console.log("Bitwise OR :",a|b);
console.log("Bitwise XOR :",a^b);
console.log("Left shift :",a<<1);
console.log("Right shift :",a>>1);
console.log("....................................................");
console.log("\n Ternery Operator: ");
let age=18;
let canVote=(age >=18)? "You can vote." : "You connot vote.";
console.log("Result :",canVote);
console.log("....................................................");
if(age>18){
    console.log("You are eligible.");
}
else if(age<18){
    console.log("You are not eligible.");
}
else if(age===18){
    console.log("You are exactly 18");
}