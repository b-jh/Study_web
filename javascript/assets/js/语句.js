for(var x=1;x<10;x++){
	var msg="";
	for(var y=1;y<10;y++){
		
		msg+=x+"*"+y+"="+x*y+"   ";
		if(x<=y){
			break;
		}
		
	}
	console.log(msg)
}