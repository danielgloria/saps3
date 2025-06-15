function nextStep(n) {
  document.querySelectorAll('.step').forEach(el => el.style.display = 'none');
  document.getElementById('step-' + n).style.display = 'block';
}
function prevStep(n) {
  nextStep(n);
}

document.getElementById('saps-form').addEventListener('submit', function(e) {
  e.preventDefault();

  let score = 16;
  score += parseInt(document.getElementById('tipo_admissao').value);
  score += parseInt(document.getElementById('local_origem').value);
  score += parseInt(document.getElementById('tempo_internacao').value);
  score += parseInt(document.getElementById('idade').value);
  score += parseInt(document.getElementById('glasgow').value);
  score += parseInt(document.getElementById('bilirrubina').value);
  score += parseInt(document.getElementById('creatinina').value);

  let x = -32.6659 + Math.log(score + 20.5958) * 7.3068;
  let mortalidade = (Math.exp(x) / (1 + Math.exp(x))) * 100;
  mortalidade = mortalidade.toFixed(1);

  document.getElementById('resultado').innerHTML = 
    `<h3>SAPS 3 estimado: ${score}</h3><h3>Mortalidade estimada: ${mortalidade}%</h3>`;
  document.getElementById('export-pdf').style.display = 'inline-block';
});
