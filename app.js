//1 texto "abc123$$"; 
//1 expresion = /\p{Sc}/gu;

//2 texto "abc123 \t$$";
//2 expresion /\s/g;

//3 texto = "abcABCαβγΑΒΓ123$$"; 
//3 expresion =  /[\p{Script=Latin}\p{Script=Greek}]/gu;

let texto = "abcABC123";
let expresion =/[\p{L}\p{N}]/gu;
console.log (texto.match(expresion))