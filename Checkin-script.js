
 
function CheckChar(){
    var pom = document.getElementById("input").value;     //  pom iz valiable for insert id
    if(pom.length === 4){
    //  call function for check id in base
     
    // /document.getElementById("d").innerHTML = "Uspesno prosao test broja karaktera";  onlu for test
    alert("Uneli ste dovoljan broj karaktera");
    }
    else{
        if(pom.length < 4)
        alert("Uneli ste nedovoljan broj karaktera");
        else
        alert("Uneli ste previse karaktera, pokusajte ponovo");  
        pom = ""; //  Insert functio for delate caracter or only delete caracter in string pom = ""   
    }
    document.getElementById("input").value = "";
}