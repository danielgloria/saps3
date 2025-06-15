function nextStep(n) {
  document.querySelectorAll('.step').forEach(el => el.style.display = 'none');
  document.getElementById('step-' + n).style.display = 'block';
}
function prevStep(n) {
  nextStep(n);
}

document.getElementById('saps-form').addEventListener('submit', function(e) {
  e.preventDefault();
  let total = 16;
  const ids = [
    'tipo_admissao', 'local_origem', 'tempo_internacao',
    'estado_cirurgico', 'tipo_cirurgia', 'infeccao',
    'vasopressor', 'vm', 'idade', 'glasgow', 'pas', 'fc',
    'oxigenacao', 'motivo', 'leucocitos', 'ph', 'plaquetas',
    'bilirrubina', 'creatinina'
  ];
  ids.forEach(id => total += parseInt(document.getElementById(id).value));
  let x = -32.6659 + Math.log(total + 20.5958) * 7.3068;
  let mort = (Math.exp(x) / (1 + Math.exp(x))) * 100;
  mort = mort.toFixed(1);
  document.getElementById('resultado').innerHTML = `<h3>SAPS 3: ${total}</h3><h3>Mortalidade estimada: ${mort}%</h3>`;
  document.getElementById('export-pdf').style.display = 'inline-block';
});
