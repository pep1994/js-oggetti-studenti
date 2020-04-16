// - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
// -Stampare a schermo attraverso il for in tutte le proprietà;
// - Creare un array di oggetti di studenti.
// -Ciclare su tutti gli studenti e stampare per ognuno nome e cognome;
// - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

$(document).ready(function(){

  // variabili handlebars - template title
  var targetTitleHtml = $('#title-template').html();
  var template = Handlebars.compile(targetTitleHtml);

  // variabili handlebars - template student
  var targetStudentHtml = $('#student-template').html();
  var templateStudent = Handlebars.compile(targetStudentHtml);

  // do il valore al primo segnaposto del template title
  var titleOneText = {
    title: 'Dati primo studente'
  }

  // do il valore al secondo segnaposto del template title
  var titleTwoText = {
    title: 'Nomi e cognomi degli studenti'
  }

  var titleOneHtml = template(titleOneText);

  var titleTwoHtml = template(titleTwoText);


  // creo oggetto che rappresenta il primo studente
  var student = {
    nome: 'Marco',
    cognome: 'Petrini',
    eta: 26
  }

  // riporto in pagina il titolo attraverso il template
  $('.container-first-student').append(titleOneHtml);

  // ciclo for-in per accedere ai valori di tutte le proprietà dell'oggetto
  for (var key in student) {

    var singleStudent = {
      property: key + ': ',
      value: student[key]
    }

    var studentHtml = templateStudent(singleStudent)

    // riporto in pagina i dati del primo studente attraverso il template
    $('.container-first-student').append(studentHtml);

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

  // riporto in pagina il titolo attraverso il template
  $('.container-first-student').append(titleTwoHtml)

  // ciclo per stampare in pagina i nomi e i cognomi degli studenti
  for (var i = 0; i < students.length; i++) {

    // salvo in due variabili i nomi e i cognomi degli studenti
    var nomeStudente = students[i].nome;
    var cognomeStudente = students[i].cognome;


    var contextOneStudents = {
      property: 'Nome: ' ,
      value: nomeStudente
    }

    var contextTwoStudents = {
      property: 'Cognome: ' ,
      value: cognomeStudente
    }

    var studentListNameHtml = templateStudent(contextOneStudents);
    var studentListSurnameHtml = templateStudent(contextTwoStudents);

    // riporto in pagina i nomi e i cognomi degli studenti attraverso il template
    $('.container-students').append(studentListNameHtml + studentListSurnameHtml);

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

    // cambio il valore delle variabili del template perchè è stato aggiunto uno studente
     nomeStudente = students[i].nome;
     cognomeStudente = students[i].cognome;

     // cambio il valore degli oggetti del template perchè è stato aggiunto uno studente
      contextOneStudents = {
       property: 'Nome: ' ,
       value: nomeStudente
     }

      contextTwoStudents = {
       property: 'Cognome: ' ,
       value: cognomeStudente
     }

     // cambio il valore delle variabili del template perchè è stato aggiunto uno studente
     studentListNameHtml = templateStudent(contextOneStudents);
     studentListSurnameHtml = templateStudent(contextTwoStudents);

     // salvo in una variabile il valore dell'html in modo da non essere sovrascritto all'ultima iterazione del ciclo
    var backContent = $('.container-students').html();

    // riporto in pagina tutti i nomi e cognomi degli studenti compreso quello nuovo aggiunto dall'utente attraverso il template
    $('.container-students').html(backContent + studentListNameHtml + studentListSurnameHtml);
  }

});
