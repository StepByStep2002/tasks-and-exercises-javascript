const people = [
  "Chris",
  "Anne",
  "Colin",
  "Terri",
  "Phil",
  "Lola",
  "Sam",
  "Kay",
  "Bruce",
];

const admitted = document.querySelector(".admitted");
const refused = document.querySelector(".refused");


for (const name of people)
{
    if(name === "Phil" || name === "Lola")
    {
        refused.textContent += name + ", ";
    }
    else
    {
        admitted.textContent += name + ", ";
    }
}