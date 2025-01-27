const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

const classe = students.find((Element) => {
  return Element.name == 'Marco Lanci'
})

console.log (`${classe.class}`)

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'