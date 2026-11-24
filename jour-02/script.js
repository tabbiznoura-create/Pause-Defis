let articles = [
  { id: 1, titre: "Bague solitaire or 18K", categorie: "bague", prix: 4200, stock: 3, date: "2026-09-12" },
  { id: 2, titre: "Collier perles", categorie: "collier", prix: 1850, stock: 0, date: "2026-10-03" },
  { id: 3, titre: "Bracelet argent", categorie: "bracelet", prix: 650, stock: 12, date: "2026-08-21" },
  { id: 4, titre: "Bague alliance", categorie: "bague", prix: 2900, stock: 5, date: "2026-11-01" },
  { id: 5, titre: "Boucles d'oreilles émeraude", categorie: "boucles", prix: 5600, stock: 1, date: "2026-07-15" },
  { id: 6, titre: "Collier or jaune", categorie: "collier", prix: 7300, stock: 2, date: "2026-10-28" },
  { id: 7, titre: "Bracelet jonc or", categorie: "bracelet", prix: 3400, stock: 0, date: "2026-09-30" },
  { id: 8, titre: "Bague saphir", categorie: "bague", prix: 6100, stock: 0, date: "2026-11-10" },
  { id: 9, titre: "Collier main de Fatma", categorie: "collier", prix: 980, stock: 7, date: "2026-08-05" },
  { id: 10, titre: "Créoles argent", categorie: "boucles", prix: 720, stock: 9, date: "2026-10-18" }
];

// 01
//  par prix
const prixCroissante = [...articles].sort((a, b) => 
  a.prix - b.prix
)
.map(article => article.titre)
// console.table(prixCroissante)

// par titre
const parTitre = [...articles].sort((a, b) => 
  a.titre.localeCompare(b.titre))
.map(article => article.titre)
// console.log(parTitre)

//  par date, du plus récent au plus ancien

const parDate =   [...articles].sort((a, b) => 
  b.date.localeCompare(a.date))
.map(article => article.titre)
// console.table(parTitre)


// 02
const total = articles.reduce((total, article) => {
  return total + (article.prix * article.stock)
}, 0)
// console.log(total)

// 03
const total2 = articles.reduce((acc, article) => {
  if (acc[article.categorie]) {
    acc[article.categorie]++;
  } else {
    acc[article.categorie] = 1;
  }
  return acc;
}, {});

// console.table(total2);
// console.table(articles[0].titre)





