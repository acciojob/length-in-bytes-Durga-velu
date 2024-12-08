const byteSize = (str) => {
  // write your code here
	const obj={};
	for(let myStr of str){
		if(obj.hasOwnproperty(myStr)){
			obj(myStr)=1;
		}
		else{
			obj[myStr]++;
		}
	}
	
};

// Do not change the code below
const str =prompt("Enter some string.");
alert(byteSize(str));
