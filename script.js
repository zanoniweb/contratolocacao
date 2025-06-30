document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('formContrato').addEventListener('submit', function (e) {
    e.preventDefault();

    const nomeLocador = document.getElementById('nomeLocador').value;
    const cpfLocador = document.getElementById('cpfLocador').value;
    const enderecoLocador = document.getElementById('enderecoLocador').value;

    const nomeLocatario = document.getElementById('nomeLocatario').value;
    const cpfLocatario = document.getElementById('cpfLocatario').value;
    const enderecoLocatario = document.getElementById('enderecoLocatario').value;
    const dataLocacao = document.getElementById('dataLocacao').value;
     const dataFinal = document.getElementById('dataFinal').value;

    const nomeTestemunha01 = document.getElementById('nomeTestemunha01').value;
    const cpfTestenhuma01 = document.getElementById('cpfTestemunha01').value;
    
    const nomeTestemunha02 = document.getElementById('nomeTestemunha02').value;
    const cpfTestenhuma02 = document.getElementById('cpfTestemunha02').value;

    const enderecoImovel = document.getElementById('enderecoImovel').value;
    const loteamentoBairro = document.getElementById('loteamentoBairro').value;
    const numeroQuadra = document.getElementById('numeroQuadra').value;
    const numeroLote = document.getElementById('numeroLote').value;
    const areaLote = document.getElementById('areaLote').value;
    const areaEdificada = document.getElementById('areaEdificada').value;
    const valorAluguel = document.getElementById('valorAluguel').value;
    const formaPagamentoAluguel = document.getElementById('formaPagamentoAluguel').value;

    const contrato = `
    
    <center>
    <h1>CONTRATO DE LOCAÇÃO DE IMÓVEL</h1>
    <h2>IMOBILIÁRIO NOME XXXXXX - CNPJ Nº XXXXXXXXXXXXXXXXXXXXXXX</h2>
    </center>

    <p>Data da Inicial da Locação: ${dataLocacao}.</p>
    
    <p>Data da Final da Locação: ${dataFinal}.</p>

    <p> LOCADOR (A): ${nomeLocador}, CPF: ${cpfLocador}, residente em ${enderecoLocador}.</p>
   
    <p>LOCATÁRIO (A): ${nomeLocatario}, CPF: ${cpfLocatario}, residente em ${enderecoLocatario}.</p>
    
    <p>Imóvel objeto do contrato de locação:</p><br>
    
    <p>Localizado em ${enderecoImovel}, Loteamento: ${loteamentoBairro}, Quadra: ${numeroQuadra}, Lote: ${numeroLote}, Área do Lote: ${areaLote}, Área Edificada: ${areaEdificada}, Valor do aluguel: ${valorAluguel} e Forma de pagamento do aluguel: ${formaPagamentoAluguel}.</p>
   
    <p>Cláusulas Contratuais:</p>

    <p>1. OBJETO DO CONTRATO: O presente contrato tem por objeto a locação do imóvel situado à ${enderecoImovel}, devidamente registrado sob a matrícula nº [número da matrícula] no Cartório de Registro de Imóveis de Londrina/Pr, com as seguintes características: loteamento ${loteamentoBairro}, quadra nº ${numeroQuadra}, lote nº ${numeroLote}, área do lote ${areaLote} m² e área edificada ${areaEdificada} m².\ \ ${valorAluguel}, que será pago pelo LOCATÁRIO da seguinte forma: ${formaPagamentoAluguel}, todo dia [dia do mês] de cada mês, a partir de ${dataLocacao}.</p>

    <p>3. PRAZO DE LOCAÇÃO: O prazo desta locação é de [número] meses, com início em ${dataLocacao} e término em ${dataFinal}.</p>
    
    <p>4. CONDIÇÕES DE ENTREGA E DEVOLUÇÃO DO IMÓVEL: O imóvel é entregue ao LOCATÁRIO em perfeitas condições de uso, com todos os sistemas (elétrico, hidráulico, etc.) e acessórios (portas, janelas, louças, etc.) em pleno funcionamento. O LOCATÁRIO se obriga a restituir o imóvel, ao final da locação, no mesmo estado em que o recebeu, salvo as deteriorações decorrentes do uso normal.</p>
    
    <p> 5. DESPESAS E ENCARGOS: Todas as despesas de consumo (água, luz, gás, telefone, internet), condomínio, IPTU e demais taxas e tributos que recaírem sobre o imóvel durante o período de locação serão de responsabilidade do (a) LOCATÁRIO (A) ${nomeLocatario} - CPF: ${cpfLocatario}, conforme acordado entre as partes.</p>
   
    <p> 6. MULTA POR ATRASO E DESCUMPRIMENTO: Em caso de atraso no pagamento do aluguel, o LOCATÁRIO pagará multa de [percentual]% sobre o valor do aluguel, acrescido de juros de [percentual]% ao mês. Em caso de descumprimento de qualquer outra cláusula deste contrato, a parte infratora pagará multa equivalente a [valor da multa, ex: três aluguéis], além de eventuais perdas e danos.</p>
   
    <p> 7. INADIMPLÊNCIA E RESCISÃO: Caso o LOCATÁRIO (A) ${nomeLocatario} - CPF: ${cpfLocatario} não cumpra com os pagamentos acordados ou demais obrigações contratuais, o presente contrato poderá ser rescindido pelo LOCADOR (A) ${nomeLocador} - CPF: ${cpfLocador}, com a imediata desocupação do imóvel e cobrança dos valores devidos, multas e encargos.</p>
   
    <p>8. VISTORIA: O LOCATÁRIO declara ter vistoriado o imóvel e o encontrado em perfeitas condições de uso e habitabilidade, conforme termo de vistoria anexo que faz parte integrante deste contrato.</p>
    
    <p>9. DISPOSIÇÕES FINAIS: Este contrato é firmado em duas vias de igual teor, assinadas pelas partes e por duas testemunhas, obrigando-se seus herdeiros e sucessores ao seu fiel cumprimento.</p>
    
    <p>Londrina, ${dataLocacao}.</p><br><br>

    <p>Assinaturas:</p><br><br>

    <p>LOCADOR (A): ${nomeLocador} - CPF: ${cpfLocador}</p><br><br>

    <p>LOCATÁRIO (A): ${nomeLocatario} - CPF: ${cpfLocatario}</p><br><br>

    <p>Testemunha 1: ${nomeTestemunha01} - CPF: ${cpfTestenhuma01}</p><br><br>

    <p>Testemunha 2: ${nomeTestemunha02} - CPF: ${cpfTestenhuma02}</p><br><br>


    <center>
    <h3>IMOBILIÁRIO NOME XXXXXX - CNPJ Nº XXXXXXXXXXXXXXXXXXXXXXX</h3>

    <p>Rua XXXXXXXXXXXXXXXXXX, nº - Bairro XXXXXX - Complemento XXXXX - Cidade/Estado - CEP XXXXX-XXX</p>

    <p>Telefone: (0xx) XXXX-XXXX</p>

    <p>Site: XXXXXXXXXXXXXXXXXXXXXXXXXX</p>

    <p>E-mail: XXXXXXXXXXXXXXXXXXXXXXXX</p>
    </center>

    `;

    document.getElementById('conteudoContrato').innerHTML = contrato;
    document.getElementById('contratoGerado').style.display = 'block';

    const botao = document.getElementById('baixarPDF');
    if (botao) {
      botao.addEventListener('click', async function () {
        const { jsPDF } = window.jspdf;
        const contrato = document.getElementById('conteudoContrato');

        const canvas = await html2canvas(contrato, {
          scale: 2,
          useCORS: true
        });

        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');

        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();

        const imgProps = pdf.getImageProperties(imgData);

        const margin = 10; // margem de 10mm
        const usableWidth = pageWidth - 2 * margin;
        const usableHeight = (imgProps.height * usableWidth) / imgProps.width;

        let remainingHeight = usableHeight;
        let currentPosition = margin;

        while (remainingHeight > 0) {
          pdf.addImage(imgData, 'PNG', margin, currentPosition, usableWidth, usableHeight);
          remainingHeight -= pageHeight - 2 * margin;
          if (remainingHeight > 0) {
            pdf.addPage();
            currentPosition = margin;
          }
        }

        pdf.save('contrato_compra_venda.pdf');
      }, { once: true });
    }
  });
});
