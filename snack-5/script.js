const nums = [2, 8, 4, 7, 12, 87];

const pari = nums.filter((Element) => (Element % 2 == 0))

console.log(`${pari}`)

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]