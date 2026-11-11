/*IP 192.168.2.123
SM 255.255.255.0
    ^
    11111111, 11111111, 11111111, 00000000

    / 24 (calculate this as well from the ip and SM)

NetID fra ip og SM

CIDR også*/
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
    let inputIP = '192.168.2.123';
    let inputSM = '255.255.255.128';
    calculate_network(inputIP, inputSM);

}


function handleInput(){
    // Select the input element and extract its value string
    let InputIP = document.getElementById("ipinput").value;
    let InputSM = document.getElementById("sminput").value;
    
    calculate_network(InputIP, InputSM);

    // Display the result
    //document.getElementById("display").textContent = `You entered: ${inputString}`;
}

///just some random bs; lmao ps mathias:) 
function  sigmaBallz(a) {
    for (let i = 0; i <= a; i++){
        console.log("SIGMA");
    }

}

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


sigmaBallz(21);

function calculate_network(ip_input, sm_input){
    let ipArr = ip_input.split(".");
    let smArr = sm_input.split(".");

    Number(ipArr, smArr);
    console.log(ipArr, smArr);
    resultCidr
   


    const ip_result = document.querySelector("#resultIP");
    const netID_result = document.querySelector("#resultNetID");
    const cidr_result = document.querySelector("#resultCidr");
    const addr_result = document.querySelector("#resultAddr");

    //let counter = 0; //tell hvor stor /xx er!
    let result = ""; //fikk undefined første iteration av loop
    let resultBinary = "";
    for (let i = 0; i <= 3; i++ ){
        console.log(`${ipArr[i]}, ${smArr[i]}`);
        
        //jeg lager en ny var, siden jeg trenger å bruke smArr senere; lmao
        let newArr = smArr;
      
        let tempN = Number(newArr[i]);
        let binaryTxt = tempN.toString(2);

        //debuggin ahhhh | ser litt bedre ut med spaces
        console.log(`     ^^^ = ${binaryTxt}
    -------------`);
        
        //loop gjennom binary txt og iterere count da bit er 1 type shiii!
        //assign value empty string for å ikke få undefined
        //NVM VI SPLITTER OG TAR 1ere ikke looper.
        resultBinary += binaryTxt;
        

        
        
        //do the bitwise calculations
        let temp1 = ipArr[i] & smArr[i];
        
        //legg til punktum mellom ip åktetene
        let temp2 = temp1 += ".";
        
        //cast numb til str
        toString(temp1);
        result += temp2;
    }

    //KANSKJE NY function eller noe objects, får å gjøre result lettere og lage flere av
        
    //bare vis ip i tilleg, why not
    let strIP = `IP: ${inputIP}`
    //ip_result.innerHTML += strIP;
    ip_result.innerHTML = strIP;

    //// NettverksID  ***** REFACTOR CODE SENERE TIL NOE BEDRE 
    //gjør dette for å ta vekk . bak stringen
    finalResult = result.slice(0, -1);
    //FÅ RESULT PÅ SKJERM lmao
    //netID_result.innerHTML += "Nid: " + finalResult;
    netID_result.innerHTML = "Nid: " + finalResult;


    //jeg dobbelsjekker om det type av string for å være sikker lmao
    console.log(resultBinary, typeof(resultBinary));
    const c = resultBinary.split("1").length -1;

    let cidr = `sm: ${inputSM} \\${c}`
    //cidr_result.innerHTML += cidr;
    cidr_result.innerHTML = cidr;



    //rough hosts calculations..
    const IP_BITS = 32;
    let hostBits = IP_BITS - c;
    let totalAddr = Math.pow(2, hostBits) -2; //- bc og host
    console.log(totalAddr);
    let strAddr = `tilgjenegelige addresser: ${totalAddr}`
    //addr_result.innerHTML += strAddr;
    addr_result.innerHTML = strAddr;
    //se på submentmask for å få CIRD prefix /xx
    //do some bitwise shi idk


}
