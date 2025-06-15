document.getElementById('saps-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const idade = parseInt(document.getElementById('idade').value);
  const pas = parseInt(document.getElementById('pas').value);
  const temp = parseFloat(document.getElementById('temp').value);
  const ecg = parseInt(document.getElementById('ecg').value);

  let score = 0;

  if (idade >= 80) score += 15;
  else if (idade >= 65) score += 10;
  else if (idade >= 40) score += 5;

  if (pas < 90) score += 10;
  else if (pas < 120) score += 5;

  if (temp < 35 || temp > 39) score += 5;

  if (ecg < 8) score += 15;
  else if (ecg < 12) score += 8;
  else score += 3;

  document.getElementById('resultado').innerHTML = `SAPS 3 estimado: <strong>${score}</strong>`;
});
