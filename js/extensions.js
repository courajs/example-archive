Array.prototype.contains = function(item){
	return this.indexOf(item) !== -1;
}

Array.prototype.randomIndex = function(){
	return Number.randomInt(this.length)
}

Array.prototype.randomElement = function(){
	return this[this.randomIndex()]
}

Number.randomInt = function(i){
	return Math.floor(Math.random() * i)
}