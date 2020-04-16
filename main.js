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

 $('body').append('<h2>Dati primo studente</h2>');

// ciclo for-in per accedere ai valori di tutte le proprietà dell'oggetto
for (var key in student) {
  $('body').append('<h3>' + key + ': ' + student[key] + '</h3>');

}

// creo un array di studenti
var students = [
  {
    nome: 'Marco',
    cognome: 'Petrini',
    eta: 26
  },
  {
    nome: 'Paolo',
    cognome: 'Fiaschi',
    eta: 30
  },
  {
    nome: 'Alessandro',
    cognome: 'Matonti',
    eta: 36
  },
  {
    nome: 'Francesco',
    cognome: 'Ferruccio',
    eta: 28
  },
  {
    nome: 'Federica',
    cognome: 'Tosti',
    eta: 34
  },
  {
    nome: 'Antonella',
    cognome: 'Cino',
    eta: 33
  }

];

// scrivo titolo in pagina
$('body').append('<h2>Nomi e cognomi degli studenti</h2>')

// ciclo per stampare in pagina i nomi e i cognomi degli studenti
for (var i = 0; i < students.length; i++) {

  var nomeStudente = students[i].nome;
  var cognomeStudente = students[i].cognome;

  $('body').append('<h4>' + 'Nome: ' + nomeStudente + '</h4>' + '<h4>' + 'Cognome: ' + cognomeStudente + '</h4>');

}
