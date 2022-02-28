// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country

interface Props {
  continent: string;
  country: string;
}

const accessProperties = (obj: Props) => {
  return obj.country; // or obj['country']
};

console.log(accessProperties({ continent: "Asia", country: "Japan" })); // Japan
console.log(accessProperties({ country: "Sweden", continent: "Europe" })); // Sweden
