const DB_NAME = "mycoco_db";
const DB_VERSION = 1;

let db;

const request = indexedDB.open(DB_NAME, DB_VERSION);

request.onupgradeneeded = (event) => {

  db = event.target.result;

  if(!db.objectStoreNames.contains("water_logs")){

    db.createObjectStore("water_logs", {
      keyPath:"id",
      autoIncrement:true
    });

  }

  if(!db.objectStoreNames.contains("food_logs")){

    db.createObjectStore("food_logs", {
      keyPath:"id",
      autoIncrement:true
    });

  }

  if(!db.objectStoreNames.contains("stool_events")){

    db.createObjectStore("stool_events", {
      keyPath:"id",
      autoIncrement:true
    });

  }

};

request.onsuccess = (event) => {
  db = event.target.result;
  console.log("Banco conectado");
};

request.onerror = () => {
  console.error("Erro IndexedDB");
};
