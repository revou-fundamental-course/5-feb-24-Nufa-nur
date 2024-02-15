function konversi(){
    let input = document.getElementById("celcius").value;
    let hasil = input * (9/5) + 32 ;
    document.getElementById("fahrenheit").value = hasil

}

function reset (){
    document.getElementById("celcius").value = "";
    document.getElementById("fahrenheit").value = "";
}