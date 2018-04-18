var arraystring = ["Harder","Faster","Better","Stronger"];
var understring = "better";
function coincidence(arraystring,understring){
	function testing(arr){
		arr=arr.toLowerCase();
		lowerunder=understring.toLowerCase();
		test = arr.indexOf(lowerunder);
		return test >=0;
	}
       
        return arraystring.some(testing);
}

console.log(coincidence(arraystring,understring));