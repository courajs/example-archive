(function(){

var template = '<div class="card down"><div class="front"><div class="rank"></div><div class="suit"></div></div></div>';
var ranks = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
var suits = ['♠︎','♥︎','♣︎','♦︎']

function Card(rank, suit){
	this.rank = rank;
	this.suit = suit;
	this.render();
}

Card.prototype.render = function(){
	this.el = $(template)
	this.el.attr('id', '')
	this.el.find('.rank').text(ranks[this.rank])
	this.el.find('.suit').text(suits[this.suit])
	if (this.suit == 1 || this.suit == 3) {		// hearts & diamonds are red
		this.el.find('.front').addClass('red')
	}
}

Card.prototype.flip = function(){
	this.el.toggleClass('down')
}

Card.prototype.clear = function(){
	this.cleared = true;
	this.el.addClass('cleared')
}

window.App.Card = Card;

})()