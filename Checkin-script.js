
var pom; 
function CheckChar(){
    pom = document.getElementById("input").value;   //  pom iz valiable for insert id
    if(pom.length == 4){
                 
                CheckPIN();    //  call function for check id in base
     
                                // /document.getElementById("d").innerHTML = "Uspesno prosao test broja karaktera";  onlu for test
                
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



function CheckPIN(){

    var niz = new Array(); // there iz line for insert conection vith sql base 
    niz = [1234,2345,3456,4567]; //test
    var p = false;

    for (let i = 0; i < niz.length; i++) {
        if(niz[i] == pom)
        {
            document.getElementById("d").innerHTML = "Uspesno ste se prijavili kao " + pom;
            p = true;

        
        }
        else if(p){
            alert("Uneli ste pogresan pin broj karaktera");
        }
        
        
    }

}