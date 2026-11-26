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


function appliquerFiltres(items, options) {
  let resultat = items.filter(article =>
  article.titre.toLowerCase().includes(options.q.toLowerCase())
  &&
  (options.categorie === "toutes" || article.categorie === options.categorie)
  )
if (options.tri === "prix-asc"){
  resultat = [...resultat].sort((a, b) => 
    a.prix - b.prix)
} else if (options.tri === "prix-desc") {
  resultat = [...resultat].sort((a, b) => 
  b.prix - a.prix)
} else if (options.tri === "titre") { 
  resultat = [...resultat].sort((a, b) =>
  a.titre.localeCompare(b.titre))
}
return resultat
}
// console.table(appliquerFiltres(articles, { q: "bague"}));
// console.table(appliquerFiltres(articles, {
//   q: "argent",
//   categorie: "bracelet",
//   tri: "prix-desc"
//   tri: "prix-asc"
//   tri: "titre"
// }).map(article => ({titre: article.titre, 
//   prix: article.prix
// }))
// );


const liste = document.querySelector("#liste")

function render(articlesAffiches) {
  liste.textContent = "";
  articles.forEach(function(article) {
    const li = document.createElement("li");
    li.textContent = `${article.titre} - ${article.categorie} - ${article.prix} DH ` +
    (article.stock === 0 ? "Rupture" : `Stock : ${article.stock}`)
    liste.appendChild(li);
  })
  const compteur = document.querySelector("#compteur")
    compteur.textContent = `Nombre d'articles : ${articlesAffiches.length}`

  const valeurStock = document.querySelector("#valeur-stock")

    const totalStock = articlesAffiches.reduce((total, article) => {
      return total + (article.prix * article.stock)
      }, 0)

      valeurStock.textContent = `Valeur du stock : ${totalStock} dh`
}
render(articles);
// render(appliquerFiltres(articles, {
//   q : "",
//   categorie: "bague",
//   tri: "titre"
// }))
