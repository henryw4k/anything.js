/**
* Splits a string into tokens
* Example: "Hello!!! How are you?" => ["Hello", "!!!", "How", "are", "you", "?"]
*/

var tokenize = function (string) {
    return string.split(/(\W+)/).map(function(t){
      return t.trim();
    }).filter(function(t){
      return t.length > 0;
    });
}

anything.prototype.tokenize = tokenize;
