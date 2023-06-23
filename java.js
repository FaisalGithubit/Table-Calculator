function Showtable(){

    table=+document.querySelector("#tab").value;
    for(i=1;i<=10;i++){

       document.write(`${table}X${i}=${table*i}</br>`);
    // document.querySelector("#result").innerHTML=`${table}X${i}=${table*i}</br>`;
    }

}
