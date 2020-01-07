import '../scss/main.scss';

let rxjs = require('rxjs');
let btn = document.getElementById('fetchBtn');

//function for creating elements
function createNode(element) {
    return document.createElement(element);
}

//function for appending childnodes to parentnodes
function append(parent, element) {
    return parent.appendChild(element);
}


//RXJS observer to get json data
const Btnevent = rxjs.fromEvent(btn, 'click');
let subscription = Btnevent.subscribe(function (x) {

    //defining the URL
    let url = "https://api.worldtradingdata.com/api/v1/stock?symbol=symData&api_token=TAMfjkIfNAHmlnp7Sogu0JewOAhE84EOQpCx3iktQzYr8S6sT6y8zSsz4tKF";
    let tbl = document.getElementById("tblStock");

    //getting user input
    let inputTxt = document.getElementById("inputText").value;
    console.log(inputTxt);
    url = url.replace("symData", inputTxt);

    //removing all the nodes of table
    while (tbl.hasChildNodes()) {
        tbl.removeChild(tbl.firstChild);
    }

    //Creating headers of table
    let th1 = createNode('th');
    let th2 = createNode('th');
    let th3 = createNode('th');
    let th4 = createNode('th');
    let th5 = createNode('th');
    let th6 = createNode('th');
    let th7 = createNode('th');
    let th8 = createNode('th');
    let th9 = createNode('th');
    let th10 = createNode('th');
    let th11 = createNode('th');
    let th12 = createNode('th');
    let th13 = createNode('th');
    let th14 = createNode('th');
    let th15 = createNode('th');
    let th16 = createNode('th');
    let th17 = createNode('th');
    let th18 = createNode('th');
    let th19 = createNode('th');
    let th20 = createNode('th');
    let th21 = createNode('th');
    let th22 = createNode('th');
    let th23 = createNode('th');
    let th24 = createNode('th');

    //Adding Data to headers
    th1.innerHTML = "Symbol";
    th2.innerHTML = "Name";
    th3.innerHTML = "Currency";
    th4.innerHTML = "Price";
    th5.innerHTML = "Price_Open";
    th6.innerHTML = "Day_High";
    th7.innerHTML = "Day_Low";
    th8.innerHTML = "52_Week_High";
    th9.innerHTML = "52_Week_Low";
    th10.innerHTML = "Day_Change";
    th11.innerHTML = "Change_Pct";
    th12.innerHTML = "Close_Yesterday";
    th13.innerHTML = "Market_Cap";
    th14.innerHTML = "Volume";
    th15.innerHTML = "Volume_Avg";
    th16.innerHTML = "Shares";
    th17.innerHTML = "Stock_Exchange_Long";
    th18.innerHTML = "Stock_Exchange_Short";
    th19.innerHTML = "Timezone";
    th20.innerHTML = "Timezone_Name";
    th21.innerHTML = "Gmt_offset";
    th22.innerHTML = "Last_Trade_Time";
    th23.innerHTML = "Pe";
    th24.innerHTML = "Eps";

    //appending headers to table 
    tbl.appendChild(th1);
    tbl.appendChild(th2);
    tbl.appendChild(th3);
    tbl.appendChild(th4);
    tbl.appendChild(th5);
    tbl.appendChild(th6);
    tbl.appendChild(th7);
    tbl.appendChild(th8);
    tbl.appendChild(th9);
    tbl.appendChild(th10);
    tbl.appendChild(th11);
    tbl.appendChild(th12);
    tbl.appendChild(th13);
    tbl.appendChild(th14);
    tbl.appendChild(th15);
    tbl.appendChild(th16);
    tbl.appendChild(th17);
    tbl.appendChild(th18);
    tbl.appendChild(th19);
    tbl.appendChild(th20);
    tbl.appendChild(th21);
    tbl.appendChild(th22);
    tbl.appendChild(th23);
    tbl.appendChild(th24);

    //Fetching the data from URL
    fetch(url)
        .then((resp) => resp.json())
        .then(function (stockData) {

            let stock = stockData.data;
            return stock.map(function (s) {
                //creating a row
                let row = createNode('tr');

                //creating cells
                let td1 = createNode('td');
                let td2 = createNode('td');
                let td3 = createNode('td');
                let td4 = createNode('td');
                let td5 = createNode('td');
                let td6 = createNode('td');
                let td7 = createNode('td');
                let td8 = createNode('td');
                let td9 = createNode('td');
                let td10 = createNode('td');
                let td11 = createNode('td');
                let td12 = createNode('td');
                let td13 = createNode('td');
                let td14 = createNode('td');
                let td15 = createNode('td');
                let td16 = createNode('td');
                let td17 = createNode('td');
                let td18 = createNode('td');
                let td19 = createNode('td');
                let td20 = createNode('td');
                let td21 = createNode('td');
                let td22 = createNode('td');
                let td23 = createNode('td');
                let td24 = createNode('td');

                //Getting values in cells
                td1.innerHTML = s.symbol;
                td2.innerHTML = s.name;
                td3.innerHTML = s.currency;
                td4.innerHTML = s.price;
                td5.innerHTML = s.price_open;
                td6.innerHTML = s.day_high;
                td7.innerHTML = s.day_low;
                td8.innerHTML = s["52_week_high"];
                td9.innerHTML = s["52_week_low"];
                td10.innerHTML = s.day_change;
                td11.innerHTML = s.change_pct;
                td12.innerHTML = s.close_yesterday;
                td13.innerHTML = s.market_cap;
                td14.innerHTML = s.volume;
                td15.innerHTML = s.volume_avg;
                td16.innerHTML = s.shares;
                td17.innerHTML = s.stock_exchange_long;
                td18.innerHTML = s.stock_exchange_short;
                td19.innerHTML = s.timezone;
                td20.innerHTML = s.timezone_name;
                td21.innerHTML = s.gmt_offset;
                td22.innerHTML = s.last_trade_time;
                td23.innerHTML = s.pe;
                td24.innerHTML = s.eps;

                //appending all cells to the row
                append(row, td1);
                append(row, td2);
                append(row, td3);
                append(row, td4);
                append(row, td5);
                append(row, td6);
                append(row, td7);
                append(row, td8);
                append(row, td9);
                append(row, td10);
                append(row, td11);
                append(row, td12);
                append(row, td13);
                append(row, td14);
                append(row, td15);
                append(row, td16);
                append(row, td17);
                append(row, td18);
                append(row, td19);
                append(row, td20);
                append(row, td21);
                append(row, td22);
                append(row, td23);
                append(row, td24);

                //appending row to table
                append(tbl, row);

            })
        })
        //if promise is rejected
        .catch(function (error) {
            console.log(error);

            alert("Invalid Input!!!! Please enter a valid name of the stock");
            while (tbl.hasChildNodes()) {
                tbl.removeChild(tbl.firstChild);
            }
        });

});

//unsubscribe function
window.onunload = function () {
    subscription.unsubscribe();
};

