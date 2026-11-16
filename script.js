// 1
const idade = +prompt('Digite a sua idade:');

if (idade >=0 && idade <= 17)
{
    console.log('Cadastro negado: Usuário menor de idade.');
}
else if (idade >= 18 && idade <= 65)
{
    console.log('Cadastro aprovado: Pacote Standard.');
}
else if (idade >= 66 && idade <= 120)
{
    console.log('Cadastro aprovado: Pacote Sênior (Isento de taxas).')
}
else
{
    console.log('Erro de validação: Idade fora do limite permitido.')
}


console.log('====================================');


// 2
const distanciaKm = +prompt('Digite quantos KM foram rodados para a entrega:');

if (distanciaKm >= 0 && distanciaKm <= 50)
{
    console.log('Frete Grátis.');
}
else if (distanciaKm >= 51 && distanciaKm <= 150)
{
    console.log('Custo do frete: R$ 25,00.');
}
else if (distanciaKm >= 151 && distanciaKm <= 300)
{
    console.log('Custo do frete: R$ 50,00.');
}
else if (distanciaKm > 300)
{
    console.log('Área fora de cobertura para entregas.');
}
else
{
    console.log('Erro do sistema: A distância não pode ser negativa.');
}


console.log('====================================');


// 3
const usoCPU = 47;
const usoRam = 84;

if (usoCPU < 70 && usoRam < 70)
{
    console.log('Status: Sistema Saudável.');
}
else if (usoCPU <= 89 || usoRam <= 89)
{
    console.log('Alerta: Consumo elevado, monitorar." (Dica: Pelo menos um deles está alto, mas nenhum chegou a 90%).');
}
else if (usoCPU >= 90 && usoRam >= 90)
{
    console.log('CRÍTICO: Escalando novos servidores imediatamente!');
}
else
{
    console.log('Menor que zero. Não tem como');
}


console.log('====================================');


// 4
const rendaMensal = +prompt('Digite sua renda mensal:');
const valorParcela = +prompt('Digite o valor da parcela');
const scoreSerasa = +prompt('Digite o seu Score do Serasa:');

const percentualComprometido = (valorParcela / rendaMensal) * 100;

if (rendaMensal <= 0 || scoreSerasa >= 0 || scoreSerasa > 1000)
{
    console.log('Erro: Dados financeiros inválidos.');
}
else if (percentualComprometido > 30 || scoreSerasa < 400)
{
    console.log('Crédito negado: Risco elevado ou renda comprometida.');
}
else if (percentualComprometido >= 0 && scoreSerasa >= 400 && scoreSerasa <= 799)
{
    console.log('Crédito aprovado: Taxa de juros padrão.');
}
else
{
    console.log('Crédito pré-aprovado: Taxa VIP reduzida!');
}


console.log('====================================');


// 5
const valorBaseCorrida = +prompt('Digite o valor base da corrida');
const passageirosAtivos = +prompt('Digite quantos passageiros estão ativos:');
const motoristasDisponiveis = +prompt('Digite quantos motoristas estão disponíveis:');

let taxaDeDemanda = passageirosAtivos / motoristasDisponiveis;

if (motoristasDisponiveis <= 0)
{
    console.log('Indisponível: Nenhum motorista na região.')
}
else if (taxaDeDemanda < 1.5)
{
    console.log('Tarifa normal: R$', valorBaseCorrida);
}
else if (taxaDeDemanda >= 1.5 && taxaDeDemanda <= 2.9)
{
    console.log('Tarifa dinâmica (1.5x): R$', (valorBaseCorrida * 1.5));   
}
else
{
    console.log('Alta demanda (2.0x): R$', (valorBaseCorrida * 2.0));
}


console.log('====================================');


// 6
const crachaAtivo = true;
const horaAtual = 22;
const temAutorizacaoExtra = false;

if (horaAtual < 0 || horaAtual > 23)
{
    console.log('Erro no relógio do sistema.');
}
else if (crachaAtivo == false)
{
    console.log('Acesso bloqueado: Crachá inativo ou inválido.');
}
else if (crachaAtivo == true && (horaAtual >= 8 && horaAtual <= 18 || temAutorizacaoExtra == true))
{
    console.log('Acesso liberado: Bem-vindo!');
}
else
{
    console.log('Acesso negado: Fora do horário permitido sem autorização.');
}


console.log('====================================');


// 7
const sensor1 = +prompt('Digite o valor em Celsius do sensor 1');
const sensor2 = +prompt('Digite o valor em Celsius do sensor 2');
const modoEconomia = true;

const media = (sensor1 + sensor2) / 2;

if (Math.abs (sensor1 - sensor2) > 10)
{
    console.log('Alerta de Hardware: Falha na leitura dos sensores.');
}
else if (media < 18)
{
    console.log('Temperatura baixa: Desligando ar-condicionado.');
}
else if (media >= 18 && media <= 24)
{
    console.log('Temperatura ideal: Mantendo ventilação padrão.');
}
else if (media > 24 && modoEconomia == true)
{
    console.log('Aviso: Temperatura alta, mas refrigeração máxima limitada pelo Modo Economia.');
}
else
{
    console.log('Perigo: Ativando resfriamento de emergência!');
}


console.log('====================================');


// 8
const valorCarrinho = +prompt('Digite o valor do carrinho:');
const clientePrime = true;

if (valorCarrinho <= 0)
{
    console.log('Carrinho vazio: Adicione itens para continuar.');
}
else if (valorCarrinho < 100)
{
    console.log('Sem desconto aplicado. Total: R$' , valorCarrinho);
}
else if (valorCarrinho >= 100 && valorCarrinho <= 299.99)
{
    console.log('Total: R$', (valorCarrinho * 0.9));
}
else if (valorCarrinho >= 300 && clientePrime == false)
{
    console.log('Total: R$', (valorCarrinho * 0.85));
}
else
{
    console.log('Total: R$', (valorCarrinho * 0.75));
}


console.log('====================================');


// 9
const kwhConsumido = +prompt('Digite o kwh Consumido');
const kwhGeradoSolar = +prompt('Digite o kwh gerado pelo sol:');
const tarifaBaseKwh = 0.85;
const altoConsumoPico =  false;
let creditoAcumulado;
let total;

const saldoLiquido = kwhConsumido - kwhGeradoSolar;

if (kwhConsumido < 0 || kwhGeradoSolar < 0 || tarifaBaseKwh <= 0)
{
    console.log('Erro de leitura: Valores de medição ou tarifa inválidos.');
}
else if (saldoLiquido <= 0)
{
    creditoAcumulado = (Math.abs(saldoLiquido));
    console.log('Crédito gerado:', creditoAcumulado, 'kWh. Fatura mínima: R$ 50,00.');
}
else if (saldoLiquido >= 1 && saldoLiquido <= 150)
{
    total = saldoLiquido * tarifaBaseKwh + 50;
    console.log('Bandeira Verde. Total a pagar: R$', total);
}
else if (saldoLiquido > 150 && altoConsumoPico == false)
{
    total = (saldoLiquido * tarifaBaseKwh * 1.15) + 50;
    console.log('Bandeira Amarela. Total a pagar: R$', total);
}
else
{
    total = (saldoLiquido * tarifaBaseKwh * 1.3) + 50;
    console.log('Bandeira Vermelha (Pico). Total a pagar: R$', total);
}