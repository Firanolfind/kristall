require('colors');

const port = 3000;

const Express = require('express');

//Server
const App = new Express();

App.use(Express.static('build'));

//static files
App.get("/", function(req, res) {
	res.sendFile(__dirname + '/build/index.html');
})

//start server
App.listen(port, function(err) {
	if(err){
		console.error(err)
	}else{
		console.info("==> Listennin on port " + "%s".red + ". Address "	+ "http://localhost:%s/".yellow, port, port);
	}
})