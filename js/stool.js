function saveStoolEvent(image){

  const tx = db.transaction(
    "stool_events",
    "readwrite"
  );

  const store =
    tx.objectStore("stool_events");

  store.add({

    image,

    bristol_type:null,

    color:null,

    ai_summary:null,

    timestamp:new Date()

  });

  tx.oncomplete = () => {

    alert("Evento salvo");

    window.location.href = "index.html";

  };

}
