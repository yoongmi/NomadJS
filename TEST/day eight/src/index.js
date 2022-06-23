const clockTitle = document.querySelector(".js-clock");

function dday() {
  const christmas = new Date("2022-12-25");
  const today = new Date();
  const dayeve = christmas - today;

  const dayeveDay = Math.floor(dayeve / (1000 * 60 * 60 * 24));
  const dayeveHour = Math.floor((dayeve / (1000 * 60 * 60)) % 24);
  const dayeveMin = Math.floor((dayeve / (1000 * 60)) % 60);
  const dayeveSec = Math.floor((dayeve / 1000) % 60);

  clockTitle.innerText = `${dayeveDay}d ${dayeveHour}h ${dayeveMin}m ${dayeveSec}s`;
}
dday();
setInterval(dday, 1000);
