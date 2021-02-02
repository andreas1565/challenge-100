function NameShuffle(string) {
  const getname = string.split(' ');
  const firstname = getname[0];
  const lastname = getname.pop();
  return `${lastname} ${firstname}`;
}

const test = NameShuffle('Donald Trump');
console.log(test);

const test2 = NameShuffle("Rosie O'Donnell");
console.log(test2);

const test3 = NameShuffle('Seymour Butts');
console.log(test3);
