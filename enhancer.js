module.exports = {

class Item {
	constructor(name,type,durability,enhancement){
		this.name = name;
		this.type = type;
		this.durability = durability = 100;
		this.enhancement = enhancement = 0;
	}
	
	function enhance(this.enhancement){
		if(this.enhancement !=== 100){
			return this.ehancement++;
		} else {
			return console.log("MAX Enhancement reached!!!");
		}
	}
	
	function degrade(this.durability){
		if(this.durability === 0){return "Item broken lol";} else {
			return (
				console.log(durability);
				this.durability--;
				console.log(durability);
			);
		}
	}

};
