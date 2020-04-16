// - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
// -Stampare a schermo attraverso il for in tutte le proprietà;
// - Creare un array di oggetti di studenti.
// -Ciclare su tutti gli studenti e stampare per ognuno nome e cognome;
// - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


// creo oggetto che rappresenta uno studente
var student = {
  nome: 'Marco',
  cognome: 'Petrini',
  eta: 26
}

// ciclo for-in per accedere ai valori di tutte le proprietà dell'oggetto
for (var key in student) {
  $('body').append('<h2>' + key + ': ' + student[key] + '</h2>');
  console.log(student[key]);
}
