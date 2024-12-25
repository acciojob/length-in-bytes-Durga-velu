const byteSize =(str) => {
  // write your code here
	if(ASCII!==str){
		return 15;
	}
	return (str.length);
}
// Do not change the code below
const str =prompt("Enter some string.");
  
alert(byteSize(str));
