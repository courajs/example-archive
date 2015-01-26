(function(){

var $root = $('#app')
var c, rank, suit;

var cards = []

for (rank = 0; rank<13; rank++){
	for (suit = 0; suit<4; suit++){
		c = new App.Card(rank, suit);
		$root.append(c.el)
		cards.push(c)
	}
}

$root.on('click', '.card', function(){
	var card = cards[$(this).index()]
	if (card.cleared) return;
	
	card.flip()
	setTimeout(function(){
		card.clear()
	}, 750)
})

})()