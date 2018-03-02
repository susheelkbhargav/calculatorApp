
exports.sup=(function(req,res){
	//res.writeHead(200, {'Content-Type': 'text/plain'});
	//res.write("This is "+req.param("a")+" This is b"+req.param("b"));
	//res.end();
	var a=req.param("num1");
	var b=req.param("num2");
	console.log("-------------------------------------------"+a);
	//console.log(a);
	//var b=req.param("b");
	var choice= req.query.choice;
	console.log(choice);
	var r=0;
	switch(choice)
	{
	case"add": 
		r=parseInt(a)+ parseInt(b);
		console.log(sum);
		break;
	case "multiply":
		r=parseInt(a)*parseInt(b);
		break;
	case "divide":
		r=parseInt(a)/ parseInt(b);
		break;
	case "subtract":
		r=parseInt(a)- parseInt(b);
		break;
	default:
		break;
	}
	res.render('Cal', { title : r });
	//res.render('Cal', { title: 'Express' });
});