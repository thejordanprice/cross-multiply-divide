// quotes for bottom of page
const quoteEl = document.querySelector('#quote');

const quotes = [
  'Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding.',
  'There should be no such thing as boring mathematics.',
  'Without mathematics, there’s nothing you can do. Everything around you is mathematics. Everything around you is numbers.',
  'Somehow it’s o.k. for people to chuckle about "not being good at math". Yet if I said "I never learned to read", they\'d say "I was an illiterate dolt".',
  'Life is a math equation. In order to gain the most, you have to know how to convert negatives into positives.',
  'The only way to learn mathematics is to do mathematics.',
  'Mathematics is, in its way, the poetry of logical ideas.',
  'Mathematics may not teach us to add love or subtract hate, but it gives us hope that every problem has a solution.',
  'Mathematics is the music of reason.'
];

const select = (array, callback) => {
  let selected = array[Math.floor(Math.random() * array.length)];
  callback(selected);
};

select(quotes, (quote) => {
  quoteEl.innerHTML = quote;
});