/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./index.html";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function getAllDomain() {
  let pronouns = ["the", "my", "hers", "ours", "yours"];
  let adjectives = ["great", "big", "small", "slimy", "hairy"];
  let nouns = ["food", "computer", "car"];
  let ends = [".com", ".net", ".org"];
  const domainNames = [];
  for (const pronoun of pronouns) {
    for (const adjective of adjectives) {
      for (const noun of nouns) {
        for (const end of ends) {
          const domainName = `${pronoun}${adjective}${noun}${end}`;
          domainNames.push(domainName);
        }
      }
    }
  }
  return domainNames;
}

window.onload = () => {
  //write your code here
  const li = document.querySelector("#domain");
  li.innerHTML = getAllDomain();
};
