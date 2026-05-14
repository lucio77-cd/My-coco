function saveFood(){

  const input =
    document.getElementById("food-input");

  const foods =
    input.value
      .split(",")
      .map(f => f.trim());

  const tx = db.transaction(
    "food_logs",
    "readwrite"
  );

  const store = tx.objectStore("food_logs");

  store.add({
    foods,
    timestamp:new Date()
  });

  input.value = "";

  loadEvents();

}
