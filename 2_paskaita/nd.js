// 1 Užduotis


const clientAge = 16;
const legalAge = 20;
if (clientAge >= legalAge) {
  console.log(`Pasiekęs ${legalAge}`);
} else {
  console.log(`Nepasiekęs ${legalAge}`);
}

// 2 Užduotis

const name = 'John';
if (name.length > 6) {
  console.log('Ilgas vardas');
}

// 3 Užduotis

const age = 30;
// "||" - arba(arba)
// && - and(ir)
if (age > 100 || age < 0) {
  console.log('Invalid age');
} else if (age < 18) {
  console.log('Child');
} else {
  console.log('Adult')
}

// 4 Užduotis

const car = "BMW";
if (car === 'VW' || car === 'Audi' || car === 'Bentley' || car === 'Bugatti' || car === 'Lamborghini' || car === 'Porsche') {
  console.log('VW Group');
} else if (car === 'BMW' || car === 'Mini' || car === 'Rolls-Royce') {
  console.log('BMW Group');
} else {
  console.log('Nei vienam');
}