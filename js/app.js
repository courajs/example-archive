(function(){

App.el = $('#app')
App.cards = []

var MEMORIZATION_TIME = 1250	// time a non-match stay flipped (ms)

App.playerHasWon = function(){
	return App.cards.every(function(card){
		return card.flipped
	})
}

App.newGame = function(){
	var cards = App.cards = []
	var c, rank, suit
	for (rank = 0; rank<13; rank++){
		for (suit = 0; suit<4; suit++){
			c = new App.Card(rank, suit)
			App.el.append(c.el)
			cards.push(c)
		}
	}
	App.el.on('click', '.card', mainHandler)
}

App.newGame()



var flipped = undefined
var frozen = false

function freeze(){
	frozen = true
	App.el.addClass('frozen')
}
function unfreeze(){
	frozen = false
	App.el.removeClass('frozen')
}

function mainHandler(){
	if (frozen){
		console.log('nope, frozen')
		return				// ignore input while a non-match are face-up for memorization (and after victory)
	}

	var card = App.cards[$(this).index()]

	if (card.flipped){
		console.log('nope, already flipped')
		return		// either clicked it again after flipping it, or they've already matched it
	}

	card.flip()
	if (!flipped) {		// first card of a pair - easy
		console.log("flipping first card: "+card)
		flipped = card
	} else {	// second card - check for match etc.
		console.log("flipping second card: "+card, "first card was: "+flipped)
		freeze()
		if (cardsMatch(flipped, card)) {
			successfulMatch()
		} else {
			failedMatch(flipped, card)
		}
	}
}

function cardsMatch(card1, card2){
	var match = card1.rank === card2.rank
	console.log('match:', match)
	return match
}

function failedMatch(card1, card2){
	setTimeout(function(){
		unfreeze()
		card1.flip()
		card2.flip()
		flipped = undefined
	}, MEMORIZATION_TIME)
}

function successfulMatch(){
	if (App.playerHasWon()){
		victory()
	}
	else {
		unfreeze()
		flipped = undefined
	}
}

function victory(){
	alert("Congratulations, you did it! You concentrated hard, and you figured it out. I'm so proud of you.")
}

})()