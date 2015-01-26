(function(){

var $root = $('#app')
var i, c, rank, suit;

for (i=0; i<20; i++){
	rank = Number.randomInt(13);
	suit = Number.randomInt(4)
	c = new App.Card(rank, suit);
	$root.append(c.el)
}

})()