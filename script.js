function convertToRoman(num) {
  	const obj = {
      ['M',1000], 
      ['D', 500], 
      ['C', 100], 
      ['L', 50], 
      ['X', 10], 
	  ['IX',9]
      ['V', 5], 
	  ['IV', 4],
      ['I', 1]
    };

	let result=''

	for(let i of obj){
		let[symbol,value]=i;

		while(num>=value){
			result += symbol;
			num -= value;
		}
	}
	
return value;
}

console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
