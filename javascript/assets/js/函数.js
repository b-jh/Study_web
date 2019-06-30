function add(x,y){
	if(typeof(x) !="number" ||typeof(y) !="number" ) return "错误"
	return x+y;
}
a="12"
b="2"
console.log(add (a,b));


var GrilFriend = function(name,age,heigh){
	this.name=name;
	this.age=age
	switch(heigh){
		case 175:
			this.BWH=[94,66,95]
			break
		case 174:
			this.BWH=[93,55,23]
			break
		defautl:
			this.BWH=[0,0,0]
			break
			
	}
}
var zhangs=new GrilFriend("林志玲","18",175)
console.log(zhangs.BWH)

// JSON
var NewGirlFriend ={
	name:"",
	age:"",
	height:"",
	bwh:"",
	bwhFun:function(){
		switch(this.height){
			case 175:
				return [95,21,43]
				break
		}
	}
}

var Ann= Object.create(NewGirlFriend)

with(Ann){
	name = "ann"
	age=23
	height=175
	bwh=Ann.bwhFun()
}
console.log(Ann.bwh)