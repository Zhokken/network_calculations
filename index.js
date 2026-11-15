// tester uten input, det kommer snart. DETTE ER en variabel av type str
// let inputIP = "192.168.2.123";
// //samme her 
// let inputSM = "255.255.255.128";
//


//DETTE ER BARE FOR TESTING VILL BLI FJERNET ELLER KOMMENTERT UT SENERE
//calculate_network(inputIP, inputSM);
// making example none existing
// function example(){
//     let _inputIP = '192.168.2.111';
//     let _inputSM = '255.255.255.128';
//     calculate_network(_inputIP, _inputSM);
//
// }


function handleInput(){
	// Select the input element and extract its value string
	let IP_input = document.getElementById("ipinput").value;
	let SM_input = document.getElementById("sminput").value;

	//få container til å buke nedenfor (dette ble kopiert fra en tidligere implementasjon)
	const container = document.getElementById("target-container");

	//validate input ved hjelp av en validate func
	if(!isValidInput(IP_input)){
		//show, med error (grunn til feil)
		container.hidden = false;
		container.textContent = "Uguldig IPaddr. Eks: 192.168.2.123";
		//return exiter func å går videre
		return;
	}
	//GJØR SAMME MED Subnet mask input
	if(!isValidInput(SM_input)){
		//show, med error (grunn til feil)
		container.hidden = false;
		container.textContent = "Subnetmask må ha fire tall fra 0 - 255. Eks. 255.255.255.0";
		//return exiter func å går videre
		return;
	}


	//validate sm input enda mere! jeg ønsker ikke at x8.x8.x8.00010000 skal være lov
	calculate_network(IP_input,SM_input);
}


//må validate input å gi bruker riktig svar dersom det skulle oppstå feil input
function isValidInput(input){

	const parts = input.split("."); //splitt i deler som ikke skal endre bare leses
	if (parts.length !==4) return false; //sjekker om input har fire okteter (x.x.x.x) de skal være separert ved . (av brukeren) --- returnerer false å dette skal vi sjekke for i beregningen  

	//lag en loop for å sjekke om tallene i ip input er valid
	//assign i og bruk den i while istedet for for-loop (JEG må bruke to løkkesetninger ;)
	let i = 0;
	while (i < parts.length){
		//sjekk current index av parts feks [1] xxx xxx xxx xxx
		//				        ^^^
		const part = parts[i];

		//sjekket om andre metoder som regex, men denne måten ser bedre ut å oppnår samme mål

		//assign en variabel med current index av parts (part) som number constant
		const tall = Numer(part);
		//gjør dette i one-liners siden det er såppas småe valgsetninger
		if (!Number.isInteger(tall)) return false;
		if (tall < 0 || tall > 255) return false;
		//dersom input er en tom string, må dette ikke funke, derfor sjekker,
		//jeg num med str, siden 0 er ikke lik "0"
		if (String(tall) !== part) return false;




	}
}

//
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



	displayResult(strIP, cidr, finalResult, strAddr);
}


function displayResult(ip, c, nid, t_adr){


	const resultCard = {
		ip: `${ip}`,
		c: `${c}`,
		nid:`${nid}`,
		t_adr:`${t_adr}`

	};

	//assigne og declare objectet med id 'container' i html'en.
	const container = document.getElementById("target-container");

	//lage html template ved bruk av template literals
	const resultHTML = `
    <div class="product-card">
	<h3>${resultCard.ip}</h3>
	<p class="price">${resultCard.c}</p>
	<p class="price">${resultCard.nid}</p>
	<p class="price">${resultCard.t_adr}</p>
    </div>
`;
	//sett den til false. jeg har satt den til hidden = true i html, siden den vises før den spawnsed hvis ikke.
	container.hidden = false;

	// 4. Spawn it into the container
	// container.innerHTML += resultHTML;
	//JEG SETTER DEN TIL resultated isteded for å append | jeg ønsker bare ett resultat om gangen.
	container.innerHTML = resultHTML;

}

