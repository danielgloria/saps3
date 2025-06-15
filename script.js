function nextStep(n) {
  document.querySelectorAll('.step').forEach(el => el.style.display = 'none');
  document.getElementById('step-' + n).style.display = 'block';
}
function prevStep(n) {
  nextStep(n);
}

function getRadioValue(name) {
  const radios = document.getElementsByName(name);
  for (let r of radios) {
    if (r.checked) return parseInt(r.value);
  }
  return 0;
}

document.getElementById('saps-form').addEventListener('submit', function(e) {
  e.preventDefault();

  let total = 16;
  const variaveis = [
    'tipo_admissao', 'local_origem', 'tempo_internacao',
    'estado_cirurgico', 'tipo_cirurgia'
  ];
  variaveis.forEach(nome => total += getRadioValue(nome));

  let x = -32.6659 + Math.log(total + 20.5958) * 7.8321;
  let mortalidade = (Math.exp(x) / (1 + Math.exp(x))) * 100;
  mortalidade = mortalidade.toFixed(1);

  const iniciais = document.getElementById('iniciais').value || 'Paciente';
  const atendimento = document.getElementById('atendimento').value || 'N/A';

  document.getElementById('resultado').innerHTML =
    `<h3>SAPS 3: ${total}</h3><h3>Mortalidade Estimada: ${mortalidade}%</h3>`;
  document.getElementById('export-pdf').style.display = 'inline-block';

  window.pdfData = { iniciais, atendimento, saps: total, mortalidade };
});

function gerarPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const d = window.pdfData;
  doc.setFontSize(16);
  doc.text("Resumo – SAPS 3 (América do Sul)", 20, 20);
  doc.setFontSize(12);
  doc.text(`Iniciais: ${d.iniciais}`, 20, 40);
  doc.text(`Atendimento: ${d.atendimento}`, 20, 50);
  doc.text(`SAPS 3: ${d.saps}`, 20, 70);
  doc.text(`Mortalidade: ${d.mortalidade}%`, 20, 80);
  doc.save(`saps3_${d.iniciais}.pdf`);
}
