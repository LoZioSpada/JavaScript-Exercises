/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
/* I principali DataType in JavaScript sono: Number, String, Boolean, undefined e null.
	- Number: il suo valore assocciato, facilmente  intuibile, è il numero. Valori compresi trai -(253 - 1) e +(253 - 1);
	- String: non è altro che una sequenza di caratteri;
	- Boolean: tipo di dato che indica se una entità logica è vera o falsa;
	- undefined: è un valore che non esiste ancora, cioè non è stato assegnato alcun valore. Quando si dichiara una variabile, di base il suo contenuto non è definito.
	- null: è un valore vuoto, ossia che non c'è nulla dentro la variabile dichiarata.
*/

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
/* un oggetto è un gruppo di variabili che descrivono una stessa entità o variabile */


/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let a = 12  //variabile 1
let b = 20  //variabile 2
let c = a + b   //operazione
console.log(c)  //risultato

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12  //assegnare alla variabile "x" 12
console.log(x)

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const name = {
    name: "Riccardo",
    surname: "Spadon",
    hobby: "Videogames & Coding"
}

console.log(name)

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log(4-x)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const name1 = {
    name:"john"
}

const name2 = {
    name: "John"
}

let verifyName = name1 == name2 //verifica dei nomi

console.log(verifyName) //false perché i nomi sono diversi: (j)ohn - (J)ohn 

verifyName = verifyName.toString(); //facciamo diventare verifyName come stringa

console.log(typeof verifyName)  //verifica che verifyName sia diventata una stringa

verifyName = name1.name.toLowerCase() == name2.name.toLowerCase();  //facciamo diventare i nomi entrambi con iniziale minuscola

console.log(verifyName) //true perchè i nomi sono uguali: (j)ohn - (j)ohn