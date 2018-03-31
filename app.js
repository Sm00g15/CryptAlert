var cron = require('node-cron');
var isomorphicFetch = require('isomorphic-fetch');


// this api hit runs every 5 seconds
var task = cron.schedule('*/5 * * * * *', function(){
  fetch('https://api.coinmarketcap.com/v1/ticker/?limit=1')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
	if(myJson[0].price_usd > //[desired price here]) {
		fetch('https://api.bulksms.com/v1/messages', {
 		 method: 'post',
  		headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
    'Authorization': 'Basic [BULK SMS Authorization goes here]'
  	},
	  body: JSON.stringify({
      "from": "263912313",
	  	"to": "(insert phone # here [don't use the + operator and leave of the trailing zero. Just country code and phone #.)",
    	"body": "(insert message here)"	 
    	})
	})
 .then(res=>res.json())
  .then(res => console.log(res));
    }
  });
}, false);


fetch('https://api.bulksms.com/v1/messages', {
   method: 'get',
     headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
    'Authorization': 'Basic [BULK SMS Authorization goes here]'
   }
 })
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
      data.forEach(function(data) {
        console.log(data);
        // log message history in the console
      })
    })


task.start();


