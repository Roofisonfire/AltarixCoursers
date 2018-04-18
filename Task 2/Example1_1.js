
function calculater(num1,oper,num2){
test1_1 = typeof(num1);
test1_2 = typeof(num2);
test2_1 = test1_1.indexOf("number");
test2_2 = test1_2.indexOf("number");

if((test2_1 != 0)||(test2_2 != 0)){
	return "Введена не цифра";
}

if((oper != "+")&&(oper != "-")&&(oper != "*")&&(oper != "/")){
	return "Введен неправильный оператор";
}
switch (oper){
	case "+":
	return num1+num2;
	case "-":
	return num1-num2;
	case "*":
	return num1*num2;
	case "/":
	if(num2 != 0){
		return num1/num2;
	}
	else{
		return "На ноль делить нельзя";
	}
}
}
console.log(calculater(4,"-",1));