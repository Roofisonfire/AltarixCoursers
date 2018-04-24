function task4(){
	fetch("https://api.github.com/search/users?q="+document.getElementById("adress").value)
		.then(function(response){
			return response.json();
		})
		.then(function(users){
			if(users.total_count==0){
		alert("Введите корректный адресс")
	    }
			var gotodiv = document.getElementById("fortable");
			var list = "<ul><li>"+users.items[0].login +"</li><li>"+users.items[1].login +"</li><li>"+users.items[2].login +"</li><li>"+ users.items[3].login+"</li><li>"+ users.items[4].login+"</li></ul>";
			gotodiv.innerHTML = list;
		});
	}	