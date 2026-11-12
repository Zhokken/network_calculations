











/*
IP 192.168.2.123
SM 255.255.255.0
    ^
    11111111, 11111111, 11111111, 00000000

    / 24 (calculate this as well from the ip and SM)

NetID fra ip og SM

CIDR også
*/
//get input


/** NESTE GANG VIKTIG!§ START INPUT SOMEHTING**/
//validate input! 
//display some bs

//CALC
//input for testing (user input easy implementation)
//onst addr_result = document.querySelector("#resultAddr");
//let inputIP = "192.168.2.123";

let inputIP = "192.168.2.123";
//
let inputSM = "255.255.255.128";

//calculate_network(inputIP, inputSM);
function example(){
    let _inputIP = '192.168.2.123';
    let _inputSM = '255.255.255.128';
    calculate_network(_inputIP, _inputSM);

}


function handleInput(){
    // Select the input element and extract its value string
    let InputIP = document.getElementById("ipinput").value;
    let InputSM = document.getElementById("sminput").value;
    
    calculate_network(InputIP, InputSM);

    // Display the result
    //document.getElementById("display").textContent = `You entered: ${inputString}`;
}
//
// ///just some random bs; lmao ps mathias:) 
// function  sigmaBallz(a) {
//     for (let i = 0; i <= a; i++){
//         console.log("SIGMA");
//     }
//
// }
//
let BGC = document.body.style.backgroundColor;
let isGreen = true;

//har number | string | bool (true - false )
//logiske ++ iteration,,, 1
// for (let i = 0; i <= a; i++){
// 
//
//
// need while loop,,, 
// · Minst 2 nye JavaScript-funksjoner || in what sence 
//
// · Web-appen skal manipulere CSS på siden i forhold til brukers «oppførsel» (f.eks. flytte på elementer, endre størrelse på elementer, endre farge på elementer).
//
//
//
//
//   LES OPPGAVE PÅ TEMAS!!!
// · Du skal legge inn kommentar på alle punktene over, med en kort beskrivelse.
//











//basic random testing of css ahhhhhhhhhhhhh
function change() {
    isGreen = !isGreen;

    if(isGreen){
        document.body.style.backgroundColor = "lightblue";
    }else {
        document.body.style.backgroundColor = "red";
    }


}

function remove(){
    //assigne og declare objectet med id 'container' i html'en.
    const container = document.getElementById("target-container");

    //lage html template ved bruk av template literals | en empty for å ikke ha noe der
    const emptyHTML = ``;

    //SETT TILE true, siden vi skal gjemme containeren
    container.hidden = true;

    //sett til emptyHTML for å ta bort
    container.innerHTML = emptyHTML;


}


// sigmaBallz(21);

function calculate_network(ip_input, sm_input){
    let ipArr = ip_input.split(".");
    let smArr = sm_input.split(".");

    Number(ipArr, smArr);
    //Number funksjon gjør om både ipArr og smArr om til type number.
    console.log(ipArr, smArr);
    //debug til consolen, litt lettere å finne feil dersom det skulle oppstå¨ 


    let result = ""; //fikk undefined første iteration av loop | så jeg assigner en empty string.
    let resultBinary = "";
    for (let i = 0; i <= 3; i++ ){
        console.log(`${ipArr[i]}, ${smArr[i]}`);
        
        //jeg lager en ny var, siden jeg trenger å bruke smArr senere; lmao
        let newArr = smArr;
      
        let tempN = Number(newArr[i]);
        let binaryTxt = tempN.toString(2);
        
        resultBinary += binaryTxt;
        

    
        
        //do the bitwise calculations
        let temp1 = ipArr[i] & smArr[i];
        
        //legg til punktum mellom ip åktetene
        let temp2 = temp1 += ".";
        
        //cast numb til str
        toString(temp1);
        result += temp2;
    }

 
    //bare vis ip i tilleg, why not
    let strIP = `IP: ${inputIP}`;
 
    //// NettverksID: 
    //gjør dette for å ta vekk . bak stringen | siden det ble sånn etter loopen,
    const finalResult = result.slice(0, -1);
 
    //c - count tar alle 1'ere i submentmasken og tar lengden -1, **********************************WHY!?
    const c = resultBinary.split("1").length -1;
    
    //en str som har input SM og CIDR nummer - føler det er bedre sånn , istedet for å legge til alt da jeg skal displaye resultatene
    let cidr = `sm: ${inputSM} \\${c}`;

    


    //Jeg declarerer IPv4 bits som const siden den skal ikke endres!
    const IP_BITS = 32;

    //jeg sjekker hvor mange ledige bits det er da jeg tar bort CIDR.
    let hostBits = IP_BITS - c;


    //lager en variable totalAddr og kalkulerere totale addresser ved bruk av hostBits. også subtracter 2 - bc og hostaddr
    let totalAddr = Math.pow(2, hostBits) -2;
    
    //en variabel av type string som har totalAddr i strengen, dette gjør jeg så jeg slipper å legge til alt i resultatvisningen senere.  
    let strAddr = `tilgjenegelige addresser: ${totalAddr}`;
   


   displayResult(strIP, cidr, finalResult);
}


function displayResult(ip, c, nid){


   const resultCard = {
        ip: `${ip}`,
        c: `${c}`,
        nid:`${nid}`
    };
    
    //assigne og declare objectet med id 'container' i html'en.
    const container = document.getElementById("target-container");

    //lage html template ved bruk av template literals
    const resultHTML = `
    <div class="product-card">
        <h3>${resultCard.ip}</h3>
        <p class="price">${resultCard.c}</p>
        <p class="price">${resultCard.nid}</p>
    </div>
`;
    //sett den til false. jeg har satt den til hidden = true i html, siden den vises før den spawnsed hvis ikke.
    container.hidden = false;

    // 4. Spawn it into the container
    // container.innerHTML += resultHTML;
    //JEG SETTER DEN TIL resultated isteded for å append | jeg ønsker bare ett resultat om gangen.
    container.innerHTML = resultHTML;

}

