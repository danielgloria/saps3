document.getElementById('saps-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const idade = parseInt(document.getElementById('idade').value) || 0;
  const pas = parseInt(document.getElementById('pas').value) || 0;
  const temp = parseFloat(document.getElementById('temp').value) || 0;
  const ecg = parseInt(document.getElementById('ecg').value) || 0;
  const comorb = parseInt(document.getElementById('comorbidades').value) || 0;
  const dias_pre = parseInt(document.getElementById('dias_pre_uti').value) || 0;
  const loc_pre = parseInt(document.getElementById('local_pre_uti').value) || 0;

  let score = 16; // base de admissão

  // idade
  if (idade < 40) score += 0;
  else if (idade < 60) score += 5;
  else if (idade < 70) score += 9;
  else if (idade < 75) score += 13;
  else if (idade < 80) score += 15;
  else score += 18;

  score += comorb;

  // tempo antes da UTI
  if (dias_pre >= 14 && dias_pre < 28) score += 6;
  else if (dias_pre >= 28) score += 7;

  // localização pré-uti já vem do valor do select
  score += loc_pre;

  // PAS
  if (pas < 40) score += 11;
  else if (pas < 70) score += 8;
  else if (pas < 120) score += 3;

  // Temperatura
  if (temp < 35) score += 7;

  // Glasgow
  if (ecg >= 13) score += 0;
  else if (ecg >= 7) score += 2;
  else if (ecg == 6) score += 7;
  else if (ecg == 5) score += 10;
  else if (ecg <= 4) score += 15;

  // Fórmula de mortalidade
  let x = -32.6659 + Math.log(score + 20.5958) * 7.3068;
  let mortalidade = (Math.exp(x) / (1 + Math.exp(x))) * 100;
  mortalidade = mortalidade.toFixed(1);

  document.getElementById('resultado').innerHTML = 
    `<h3>SAPS 3 estimado: ${score}</h3>
     <h3>Mortalidade estimada: ${mortalidade}%</h3>`;
});
