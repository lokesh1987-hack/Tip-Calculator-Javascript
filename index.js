function collect() {
    var bill_amount = document.getElementById("bill_amount").value;
    var service = document.getElementById("service").value;
    var bill_sharing = document.getElementById("bill_sharing").value;
    var temp;

    if (service == "1") 
    {
        temp = bill_amount * (20 / 100);
    } 
    else if (service == "2") 
    {
        temp = bill_amount * (10 / 100);
    }
    else if (service == "3") {
        temp = bill_amount * (5 / 100);
    }
    
    var result = temp / bill_sharing;
    document.getElementById('result').innerHTML = 'Rs '+result;
    document.getElementById('Tip_amout').innerHTML = "Each";
}
