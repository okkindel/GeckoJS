import { Lexer } from './lexer/lexer'

var lexer = new Lexer('3 - 2');

var tokens = lexer.tokenize();

console.log(tokens);