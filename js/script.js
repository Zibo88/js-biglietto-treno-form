//Il programma dovrà mostrare una form da compilare 
//con cui chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio,
//secondo queste regole:
//il prezzo del biglietto è definito in base ai km (0.21 € al km)
//va applicato uno sconto del 20% per i minorenni
//va applicato uno sconto del 40% per gli over 65.
//Il recap dei dati e l'output del prezzo finale va stampato in pagina 
//(formattato con massimo due decimali, per indicare centesimi sul prezzo). 


// Dati da chiedere all'utente

const generateButton = document.getElementById('generate-ticket');

generateButton.addEventListener('click', 
    function() {
        const userName = document.getElementById('user-name').value;
        console.log(userName);

        const userKm = parseInt (document.getElementById('user-km').value);
        console.log(userKm);

        let userAge = document.getElementById('user-age').value;
        console.log(userAge);

        // prezzo del biglietto di default
        const ticketPrice = userKm * 0.21;
    

        // prezzo biglietto scontato
        let discount = 0;

        // prezzo finale scontato
        if (userAge === 'minorenne') {
            discount = ticketPrice * 0.2;
            
        } else if (userAge === 'over') {
            discount = ticketPrice * 0.4;
        }

        let finalPrice = ticketPrice - discount;
        console.log(finalPrice)

        document.getElementById('ticket-name').innerHTML = userName;
        document.getElementById ('carriage').innerHTML = Math.floor(Math.random() * 10);
        document.getElementById ('cpcode').innerHTML= Math.floor(Math.random() * 1000)
        document.getElementById('price').innerHTML=  finalPrice.toFixed(2);
        document.getElementById ('finished-ticket').classList.add('active');

    }   




)
