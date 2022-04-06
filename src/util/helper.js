let log = function printDate() {

   
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
console.log("current Date: ",today)
}

module.exports.date = log 



let month = function printMonth()
{
    var m_names = ['January', 'February', 'March', 
               'April', 'May', 'June', 'July', 
               'August', 'September', 'October', 'November', 'December'];

d = new Date();
var n = m_names[d.getMonth()]; 
console.log("Current Month: ",n)

      
}

module.exports.month = month

let batch = function getbatchinfo()
{
    console.log("Uranium, W3-D3, the topic for today is Nodejs module system")
}

module.exports.batch = batch