const tipcalcy = () => {
    
    let btn = document.querySelector('.btn');
    let ba = document.querySelector('.bill_amount').value;
    let tp = document.querySelector('.tip_perc').value;

    let ta = (tp / 100) * ba;
    let tota = ta + Number( ba) ; 

    document.querySelector('.tip_amnt').value = ta;
    document.querySelector('.total_amnt').value = tota;
    console.log('hello');
}
