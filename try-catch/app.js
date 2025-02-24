try {
   hello.toUpperCase();
} catch {
   console.log('Error, something went wrong');
}

function yell(message) {
   try {
      console.log(message.toUpperCase().repeat(3));
   } catch (error) {
      console.log(error);
      console.log('Please enter a string next time!');
   }
}
