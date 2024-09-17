function convertToRoman(num) {
  	const obj = [
      ['M', 1000], 
      ['CM', 900],
      ['D', 500],
      ['CD', 400],
      ['C', 100], 
      ['XC', 90],
      ['L', 50], 
      ['XL', 40],
      ['X', 10], 
	    ['IX', 9],
      ['V', 5], 
	    ['IV', 4],
      ['I', 1]
    ];

  let result = '';

	for(let i of obj){
		let[symbol, value]=i;

		while(num>=value){
			result += symbol;
			num -= value;
		}
		if(num===0) break;
	}
	
return result;
}

//console.log(convertToRoman(14));




// do not edit below this line
module.exports = convertToRoman
