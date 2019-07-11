const express = require('express'),
	favicon = require('express-favicon'),
	path = require('path'),
	port = process.env.PORT || 8000,
	app = express();

app.use(favicon(__dirname + '/build/favicon.ico'));

// the __dirname is the curent dir from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port);

console.log('Server is running app on port ' + port);
