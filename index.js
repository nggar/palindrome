module.exports = Phrase;

// Reverses a string.
function reverse( string ) {
     return Array.from( string ).reverse().join( "" );
}

// Defines a Phrase object
function Phrase( content ) {
     this.content = content;

     // Return string to lower case
     this.processor = function ( string ) {
          return string.toLowerCase();
     }

     // Return content processed for palindrome testing
     this.processedContent = function processedContent() {
          return this.processor( this.content );
     }

     // Return true for palindrome, false otherwise.
     this.palindrome = function palindrome() {
          return this.processedContent() === reverse( this.processedContent() );
     }
}