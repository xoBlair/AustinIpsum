var foodWords = ["Gordoughs was voted best foodtruck in 2014. ", "Breakfast tacos for days. ", "This one time I saw a queso river. ", "Coffee coffee coffee espresso coffee beer. ", "There's never enough queso. ", "Avocado margs. ", "Shiner tastes like water. ", ];
var funWords = ["Bro ... ", "Alrighty alrighty alright.  ", "Sorry, not sorry. ", "RIP Leslie. " , "Brunchhhhh. ", "Ugh, traffic sucks. ", "LOL, I'm @ ACL! ", "I barely remember SXSW. ", "Just ordered an Uber. ", "I love General Assembly Austin! ", "Download PackStack for iOS!!! ", ];
// var num = $("#number").val();
var count = 0;

function chooseParagraph(number){ 
	console.log(number);
	if (count == 1){ 
		$("#paragraph").text("");
		var nonRepeat = [];
		for (var i = 0; i < number; i++){
			checkWord();
			function checkWord(){
				var word = foodWords[i];
				var randomNum = Math.random() * foodWords.length;
				var randomIndex = Math.floor(randomNum);
				var randomWord = foodWords[randomIndex];
				var isUnique = true;
				nonRepeat.forEach(function(existingWord){
					if (existingWord == randomWord)
					{ 
						isUnique = false;
					}
				});
				if (isUnique == true)
				{
					nonRepeat.push(randomWord);
					$("#paragraph").append(randomWord);
				}
				else if (isUnique == false)
				{
					checkWord();
				}
			}
			// nonRepeat.push(randomWord);
			
			// $("#paragraph").append(word);
		}
	}
	if (count == 2){
		$("#paragraph").text("");
		var nonRepeat = [];
		for (var i = 0; i < number; i++){
			checkWordAgain();
			function checkWordAgain(){
				var word = funWords[i];
				var randomNum = Math.random() * funWords.length;
				var randomIndex = Math.floor(randomNum);
				var randomWord = funWords[randomIndex];
				var isUnique = true;
				nonRepeat.forEach(function(existingWord){
					if (existingWord == randomWord)
					{ 
						isUnique = false;
					}
				});
				if (isUnique == true)
				{
					nonRepeat.push(randomWord);
					$("#paragraph").append(randomWord);
				}
				else if (isUnique == false)
				{
					checkWord();
				}
			}
		}
	}
}

$("#food").click(function(){
	count = 1;	
});


$("#fun").click(function(){
	count = 2;
});

//go button function
$("#go").click(function(){
	 var num = $("#number").val();
	chooseParagraph(num);
});

//clear button function

$("#clear").click(function() {
    $("#paragraph").html("");
    $("#number").val("");
});










