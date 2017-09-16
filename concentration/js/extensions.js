Array.prototype.contains = function(item){
	return this.indexOf(item) !== -1;
}

Array.prototype.randomIndex = function(){
	return Number.randomInt(this.length)
}

Array.prototype.randomElement = function(){
	return this[this.randomIndex()]
}

Array.prototype.popRandomElement = function(){
	return this.splice(this.randomIndex(), 1)[0]
}

Array.prototype.shuffled = function(){
	var copy = this.slice()
	var result = []
	while (copy.length > 0){
		result.push(copy.popRandomElement())
	}
	return result
}

Number.randomInt = function(i){
	return Math.floor(Math.random() * i)
}