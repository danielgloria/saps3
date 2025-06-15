function nextStep(n) {
  document.querySelectorAll('.step').forEach(el => el.style.display = 'none');
  document.getElementById('step-' + n).style.display = 'block';
}
function prevStep(n) {
  nextStep(n);
}

function getValue(name) {
  let r = document.querySelector(`input[name="${name}"]:checked`);
  return r ? parseInt(r.value) : 0;
}

document.getElementById('saps-form').addEventListener('submit', function(e) {
  e.preventDefault();
  let total = 16; // compensação padrão
  let variaveis = ['admissao','vasoativas','infeccao','imuno','comorbidade'];
  variaveis.forEach(v => total += getValue(v));

  let x = -32.6659 + Math.log(total + 20.5958) * 7.8321;
  let mortalidade = (Math.exp(x) / (1 + Math.exp(x))) * 100;
  mortalidade = mortalidade.toFixed(1);
  document.getElementById('resultado').innerHTML =
    `<h3>SAPS 3: ${total}</h3><h3>Mortalidade Estimada: ${mortalidade}%</h3>`;
  document.getElementById('export-pdf').style.display = 'inline-block';
  window.pdfData = {
    iniciais: document.getElementById("iniciais").value,
    atendimento: document.getElementById("atendimento").value,
    saps: total, mortalidade
  };
});

function gerarPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const d = window.pdfData;
  doc.text("Resumo – SAPS 3 (América do Sul)", 20, 20);
  doc.text(`Iniciais: ${d.iniciais || "N/A"}`, 20, 40);
  doc.text(`Atendimento: ${d.atendimento || "N/A"}`, 20, 50);
  doc.text(`SAPS 3: ${d.saps}`, 20, 70);
  doc.text(`Mortalidade: ${d.mortalidade}%`, 20, 80);
  doc.save("saps3_final.pdf");
}
