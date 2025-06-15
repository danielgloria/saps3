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
  const campos = ['tipo_admissao', 'local_origem', 'tempo_internacao',
                  'estado_cirurgico', 'tipo_cirurgia', 'infeccao',
                  'vasopressor', 'vm', 'idade', 'glasgow', 'pas', 'fc',
                  'oxigenacao', 'motivo', 'leucocitos', 'ph', 'plaquetas',
                  'bilirrubina', 'creatinina'];
  campos.forEach(id => {
    const el = document.getElementById(id);
    if (el) total += parseInt(el.value);
  });

  // Fórmula ajustada para América do Sul
  let x = -32.6659 + Math.log(total + 20.5958) * 7.8321;
  let mortalidade = (Math.exp(x) / (1 + Math.exp(x))) * 100;
  mortalidade = mortalidade.toFixed(1);

  const iniciais = document.getElementById('iniciais').value || 'Paciente';
  const atendimento = document.getElementById('atendimento').value || 'N/A';

  document.getElementById('resultado').innerHTML = 
    `<h3>SAPS 3: ${total}</h3><h3>Mortalidade estimada (América do Sul): ${mortalidade}%</h3>`;
  document.getElementById('export-pdf').style.display = 'inline-block';

  window.pdfData = {
    iniciais: iniciais,
    atendimento: atendimento,
    saps: total,
    mortalidade: mortalidade
  };
});

function gerarPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const d = window.pdfData;

  doc.setFontSize(16);
  doc.text("Resumo – SAPS 3 (América do Sul)", 20, 20);
  doc.setFontSize(12);
  doc.text(`Iniciais do Paciente: ${d.iniciais}`, 20, 40);
  doc.text(`Nº de Atendimento: ${d.atendimento}`, 20, 50);
  doc.text(`SAPS 3: ${d.saps}`, 20, 70);
  doc.text(`Mortalidade Estimada (América do Sul): ${d.mortalidade}%`, 20, 80);
  doc.save(`saps3_${d.iniciais}_SA.pdf`);
}
