## Building a simple web app for displaying Stock Data

Process is as follows:
1. User should see an input field where he can enter a comma-separated list of stock symbols.

2. After pressing submit button and on clicking the submit it should display all the stock details (entered in the input) in a table below.

3. Use this link to fetch stock details, https://api.worldtradingdata.com/api/v1/stock?symbol=SNAP,TWTR,VOD.L&api_token=demo. User can replace the symbol query parameter value with the input field value.

This assignment is build using fetch api/XHR requests to make ajax call to the server and handle response using promise.
Also RxJs observables for adding event listeners.
