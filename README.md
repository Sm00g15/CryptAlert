# CryptAlert
Get a text message when any cryptocurrency goes over, under, or equal to a particular price.

This program uses node-cron (https://www.npmjs.com/package/node-cron) to fetch the CoinmarketCap API every 5 seconds. 
The program then checks to see if the desired cryptocurrency is <, >, or = to a particular price. 
(in this case Bitcoin: see CMC docs for ideas on how to set alerts for other coins: https://coinmarketcap.com/api/)
Whenever this event is triggered it will then (using BulkSMS [you must create an account]) send a text message to the desired recipient.
After this, the program will then log a history of all messages sent from this BulkSMS account.

# Things to note
1) You can modify the node-cron job to change the checking interval on line 6.

2) Make sure to enter your BulkSMS authorization credentials on line 18 and line 38.

3) Make sure to fill in the "To:" and "Body:" sections on line 22 and 23 to customize your message and recipient when the above event is triggered.
