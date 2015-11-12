var foodWords = ["If Anthony Bourdain can be swooned by Gourdough&#39;s warm, fresh, holy-shit-delicious donuts, you should expect to fall in love with this little Austin treasure, too.   ",
  "I want a big fat donut.   ", "Breakfast tacos for days.   ", "This one time I saw a bird covered in queso and wanted to cry.   ",
   "I had brunch plans but.. mimosas got me mimosted.   ", 
  "Venti iced skinny hazelnut macchiato, sugar-free syrup, extra shot, light ice, no whip.   ",
 "There's never enough queso.   ", "Frozen avocado margarita with sugar and chili-lime salt.   ", 
 "Pineapple basil lime lemon watermelon infused water.  ", "Breaking news: Bluebell Ice Cream is back in stock.   ",
  "Grande, iced, sugar-free, vanilla latte with soy milk.   ", 
  "Texas-fried turkey breast with award-winning oaxacan mole sauce, mexican rice, avocado, quest fresco, and fresh cilantro - served on a flour tortilla.   ", ];


var funWords = ["Bro...   ", "BRO!   ", "Alrighty alrighty alright.    ",
 "Sorry, not sorry.   ", "RIP Leslie.   " , "LOL, I&#39;m @ ACL!   ", "I barely remember SXSW.   ",
  "Just ordered an Uber.   ","Don&#39;t Dallas my Austin.   ", "Castle Hill Hope Outdoor gallery.   ",
   "Pedicab Realness.   ", "Tweet that!   ", "Don&#39;t worry, I&#39;m not sick, it&#39;s allergies.   ",
    "Wishing Ikea sold clothes.   ", "KVUE, where trust is earned.   ", "I <3 General Assembly Austin!   ",
     "Download PackStack for iOS!!!   ", "Is that a rescue dog?    ", "The local badass is playing at Scoot Inn and we got tickets!    "];
// var num = $("#number").val();
var count = 0;

function chooseParagraph(number){ 
	console.log(number);
	if (count == 1){ 
		$("#paragraph").text("");
		var nonRepeating = [];
		for (var i = 0; i < number; i++){
			checkWord();
			function checkWord(){
				var word = foodWords[i];
				var randomNum = Math.random() * foodWords.length;
				var randomIndex = Math.floor(randomNum);
				var randomWord = foodWords[randomIndex];
				var isUnique = true;
				nonRepeating.forEach(function(existingWord){
					if (existingWord == randomWord)
					{ 
						isUnique = false;
					}
				});
				if (isUnique == true)
				{
					nonRepeating.push(randomWord);
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










