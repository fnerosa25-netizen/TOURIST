// Open the selected mountain's Google Maps directions.
document.querySelectorAll(".destination-card").forEach((card) => {
  card.addEventListener("click", () => {
    const destination = card.dataset.destination;
    const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`;
    window.open(mapsUrl, "_blank", "noopener,noreferrer");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
