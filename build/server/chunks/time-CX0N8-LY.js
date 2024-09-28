function secondsToDHM(seconds) {
  const days = Math.floor(seconds / (3600 * 24));
  const hours = Math.floor(seconds % (3600 * 24) / 3600);
  const minutes = Math.floor(seconds % 3600 / 60);
  return { days, hours, minutes };
}
function DHMToSeconds({
  days,
  hours,
  minutes
}) {
  return (days ?? 0) * 3600 * 24 + (hours ?? 0) * 3600 + (minutes ?? 0) * 60;
}

export { DHMToSeconds as D, secondsToDHM as s };
//# sourceMappingURL=time-CX0N8-LY.js.map
