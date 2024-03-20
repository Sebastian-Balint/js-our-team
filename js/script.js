// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

// creo un array di oggetti con i dati forniti
const arrayTeam = [
  {
    nome: "Wayne Barnett",
    ruolo: "Founder & CEO",
    foto: "wayne-barnett-founder-ceo.jpg",
  },
  {
    nome: "Angela Caroll",
    ruolo: "Chief Editor",
    foto: "angela-caroll-chief-editor.jpg",
  },
  {
    nome: "Walter Gordon",
    ruolo: "Office Manager",
    foto: "walter-gordon-office-manager.jpg",
  },
  {
    nome: "Angela Lopez",
    ruolo: "Social Media Manager",
    foto: "angela-lopez-social-media-manager.jpg",
  },
  {
    nome: "Scott Estrada",
    ruolo: "Developer",
    foto: "scott-estrada-developer.jpg",
  },
  {
    nome: "Barbara Ramos",
    ruolo: "Graphic Designer",
    foto: "barbara-ramos-graphic-designer.jpg",
  },
];

const div = document.getElementById("contenitore");

for (let i = 0; i < 6; i++) {
  console.log(arrayTeam[i].nome);
  console.log(arrayTeam[i].ruolo);
  console.log(arrayTeam[i].foto);
  div.innerHTML += `<div> ${arrayTeam[i].nome}</div>`;
  div.innerHTML += `<div> ${arrayTeam[i].ruolo}</div>`;
  div.innerHTML += `<img src="./img/${arrayTeam[i].foto}"></img>`;
}
