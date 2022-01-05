let year = +prompt('Введите год =','') 


if((year % 4 == 0) && (year % 100 !== 0)){
        console.log("Високосный");
}else{
    if(year % 400 == 0 ){
        console.log("Високосный");
    }else{
    console.log("Не високосный");
    }
}