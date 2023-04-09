/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const defGorevler = [
  {
  GorevID: 1,
  Adi: "Saglik",
  Aciklama: "Bedenen"
},
{
  GorevID: 2,
  Adi: "Egitim",
  Aciklama: "Zihnen"
},
{
  GorevID: 3,
  Adi: "Spor",
  Aciklama: "Bedenen"
},
]

const defTasklar = [
  {
    Adi: "Kosu",
    Aciklama: "Sahil",
    GorevID: 3,
  },
  {
    Adi: "Tenis",
    Aciklama: "Toprak kort",
    GorevID: 3,
  },
  {
    Adi: "Kitap oku",
    Aciklama: "Felsefe",
    GorevID: 2,
  },
  {
    Adi: "Sebze ye",
    Aciklama: "Organik",
    GorevID: 1,
  },
  {
    Adi: "Meditasyon",
    Aciklama: "Nefes",
    GorevID: 1,
  },
]

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex("Gorevler").truncate()
  await knex("Gorevler").insert(defGorevler)
  await knex("Tasklar").truncate()
  await knex("Tasklar").insert(defTasklar)
};
