module.exports = Phrase;

// Reverses a string.
function reverse( string ) {
     return Array.from( string ).reverse().join( "" );
}

// Defines a Phrase object
function Phrase( content ) {
     this.content = content;

     // Return content processed for palindrome testing
     this.processedContent = function processedContent() {
          return this.content.toLowerCase();
     }

     // Return only letters in the content.
     this.letters = function letters() {
          return this.content;
     }

     // Return true for palindrome, false otherwise.
     this.palindrome = function palindrome() {
          return this.processedContent() === reverse( this.processedContent() );
     }
}