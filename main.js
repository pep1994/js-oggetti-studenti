// - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
// -Stampare a schermo attraverso il for in tutte le proprietà;
// - Creare un array di oggetti di studenti.
// -Ciclare su tutti gli studenti e stampare per ognuno nome e cognome;
// - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

$(document).ready(function(){

  // creo oggetto che rappresenta uno studente
  var student = {
    nome: 'Marco',
    cognome: 'Petrini',
    eta: 26
  }

   $('.container-first-student').append('<h2>Dati primo studente</h2>');

  // ciclo for-in per accedere ai valori di tutte le proprietà dell'oggetto
  for (var key in student) {
    $('.container-first-student').append('<h3>' + key + ': ' + student[key] + '</h3>');

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
  $('.container-first-student').append('<h2>Nomi e cognomi degli studenti</h2>')

  // ciclo per stampare in pagina i nomi e i cognomi degli studenti
  for (var i = 0; i < students.length; i++) {

    var nomeStudente = students[i].nome;
    var cognomeStudente = students[i].cognome;

    $('.container-students').append('<h4>' + 'Nome: ' + nomeStudente + '</h4>' + '<h4>' + 'Cognome: ' + cognomeStudente + '</h4>');

  }

  // chiedo all'utente di inserire nome, cognome ed età del nuovo studente
  var nomeNewStudente = prompt('Inserisci il nome del nuovo studente');
  var cognomeNewStudente = prompt('Inserisci il cognome del nuovo studente');
  var etaNewStudente = prompt("Inserisci l'età del nuovo studente");

  // faccio il push del nuovo oggetto nell'array students
  students.push({
    nome: nomeNewStudente,
    cognome: cognomeNewStudente,
    eta: etaNewStudente
  });

  // rimuovo tutti gli elementi all'interno del container students in modo che l'html non si ripeta due volte
  $('.container-students').children().remove();

  // rieseguo il ciclo per stampare anche l'ultimo studente aggiunto dall'utente
  for (var i = 0; i < students.length; i++) {

    var nomeStudente = students[i].nome;
    var cognomeStudente = students[i].cognome;

    var backContent = $('.container-students').html();

    $('.container-students').html(backContent + '<h4>' + 'Nome: ' + nomeStudente + '</h4>' + '<h4>' + 'Cognome: ' + cognomeStudente + '</h4>');
  }

});
