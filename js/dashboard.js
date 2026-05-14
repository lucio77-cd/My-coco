function loadWaterTotal(){

  const tx =
    db.transaction("water_logs");

  const store =
    tx.objectStore("water_logs");

  const request =
    store.getAll();

  request.onsuccess = () => {

    const data = request.result;

    const total =
      data.reduce(
        (sum,item)=>sum+item.amount,
        0
      );

    document.getElementById(
      "water-total"
    ).innerText =
      total + " ml";

  };

}

function loadEvents(){

  const tx =
    db.transaction("stool_events");

  const store =
    tx.objectStore("stool_events");

  const request =
    store.getAll();

  request.onsuccess = () => {

    const events =
      request.result.reverse();

    const container =
      document.getElementById(
        "event-list"
      );

    container.innerHTML = "";

    events.forEach(event => {

      const div =
        document.createElement("div");

      div.classList.add("card");

      div.innerHTML = `
        <p>
          Evento registrado
        </p>

        <small>
          ${new Date(
            event.timestamp
          ).toLocaleString()}
        </small>
      `;

      container.appendChild(div);

    });

  };

}

window.onload = () => {

  loadWaterTotal();

  loadEvents();

};
