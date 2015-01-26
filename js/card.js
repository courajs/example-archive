var template = '<div class="card down"><span class="face red"><span class="rank">K</span><span class="suit">♦</span></span></div>';

function Card(){
	this.el = $(template)
	this.el.click(this.flip.bind(this))
}

Card.prototype.flip = function(){
	this.el.toggleClass('down')
}

var suits = ['♠︎','♣︎','♥︎','♦︎']