//Inicialização do sdk da IA para fazer as requisições
const Groq = require('groq-sdk');


const groq = new Groq({ apiKey: process.env.EXPO_PUBLIC_API_KEY, dangerouslyAllowBrowser: true });

//Treinamento da IA + envio do prompt do usuário
export async function generateTravelItinerary(destination: string) {
    try {
        const chatCompletion = await groq.chat.completions.create({
            "messages": [
                {
                    "role": "user",
                    "content": "Crie um roteiro de viagem detalhado e personalizado com base nas seguintes informações fornecidas pelo usuário:\n\nDestino: {destino}\nPerfil do viajante: {perfil} (Exemplos: romântico, agitado, aventureiro, cultural, relaxante)\nDuração da viagem: {duracao} (número de dias)\nOrçamento: {orcamento} (baixo, médio ou alto)\nA resposta deve ser exclusivamente o texto com o roteiro, não coloque nenhuma informação além do roteiro que foi pedido"
                },
                {
                    "role": "assistant",
                    "content": "Por favor, forneça as informações do usuário, eu Crearei um roteiro de viagem personalizado para você!"
                },
                {
                    "role": "user",
                    "content": "minas gerais aventureiro 10 dias medio"
                },
                {
                    "role": "assistant",
                    "content": "**Roteiro de Viagem a Minas Gerais para Aventuriers (10 dias, orçamento médio)**\n\n**Dias 1-2: Salvador e sua região**\n\nChegue em Belo Horizonte, capital de Minas Gerais, e suba para Salvador, na Bahia, à noite. No dia seguinte, desfrute da cidade colonial mais bem preservada do Brasil, visitando a Praça da Sé, o Elevador Lacerda e o Mercado Modelo. Durante o dia, viaje até a Serra do Abaíre, para trekking e relaxar em meio à natureza.\n\n**Dias 3-4: Viçosa e o Vale do Rio Doce**\n\nParta para Viçosa, cidade conhecida como a \"Capital Mineira\" devido à sua importância na exploração de minérios. Desfrute da incrível paisagem da fazenda São Francisco, com suas praias artificiais e lagoas. Ainda na região, visite o Parque Natural Municipal do Rio Pardo, para sentir o frescor da Mata Atlântica.\n\n**Dias 5-6: Diamantina e o Sertão**\n\nPasse os próximos dois dias na cidade colonial de Diamantina, Patrimônio da Humanidade da UNESCO. Explore a cidade histórica, visitando a Praça Tiradentes, a Igreja Matriz e o Museu de Mineralogia. Após a noite, dirija-se ao Sertão para se hospedar em uma fazenda perto de Pedra Azul, onde pode desfrutar de um piquenique e uma caminhada pela natureza.\n\n**Dias 7-8: Congonhas e Mariana**\n\nVolte para a região montanhosa de Minas Gerais e pouse em Congonhas, para visitar o Santuário de Sant'ANA e a Fazenda São Tomé. Por fim, alcance Mariana, onde pode visitar a Catedral de São João Batista e o Museu da Catedral.\n\n**Dias 9-10: Belo Horizonte e o Vale do Paraíba**\n\nRetorne a Belo Horizonte e explore a cidade, visitando a Pampulha Modern Ensemble, o Parque Municipal e o Mercado Central. Por fim, ireia conhecer o Vale do Paraíba, visitando a cidade de Conselheiro Lafaiete e o Parque Estadual do Rio Doce.\n\n**Orçamento detalhado**\n\n* Hospedagem: R$ 800,- por pessoa, por noite (media de R$ 1.600,- por pessoas para todo o roteiro)\n* Alimentação: R$ 30,- por refeição, o que totaliza R$ 900,- por pessoa para todo o roteiro\n* Transporte: R$ 500,- por pessoa, totalizando R$ 5.000,- para todo o roteiro\n* Atrações e atividades: R$ 300,- por pessoa, totalizando R$ 3.000,- para todo o roteiro\n* Total: R$ 9.600,- por pessoa para todo o roteiro\n\nEssa viagem tem um orçamento médio, garantindo uma experiência de aventura e sossego em Minas Gerais, com preços acessíveis para aproveitar ao máximo este destino. Lembre-se de que o orçamento pode variar de acordo com as opções de hospedagem e transporte escolhidas."
                },
                {
                    "role": "user",
                    "content": "las vegas 10 dias caro agitado"
                },
                {
                    "role": "assistant",
                    "content": "**Roteiro de Viagem a Las Vegas para Pessoas Agitadas e com Orçamento Alto (10 dias, US$ 5.000,- - US$ 10.000,-)**\n\n**Dias 1-2: Luxo e Entretenimento em Las Vegas**\n\nChegue em Las Vegas, o maior destino de entretenimento do mundo, e se hospede em um dos hotéis mais luxuosos da Strip, como o The Cosmopolitan ou o Bellagio. Desfrute de um brunch de luxo no Vdara Hotel & Spa e explore a cidade, visitando a Fountains of Bellagio e o Conservatory & Botanical Gardens. Noite, direja-se ao Caesar's Palace para assistir a um show de Cirque du Soleil.\n\n**Dias 3-4: Utah e a sua Natureza**\n\nPasse o dia explorando a beleza natural de Utah, visitando o Bryce Canyon e o Zion National Park. Se hospede em um lodge luxuoso, como o The Lodge at Bryce Canyon, e desfrute de uma aventura de rafting ou mountain biking.\n\n**Dias 5-6: Férias em um Resort de Luxo**\n\nPasse os próximos dois dias em um resort de luxo, como o Wynn Las Vegas ou o Encore at Wynn Las Vegas. Desfrute de um dia de lazer no resort, com acesso à praia privada, à sauna e ao spa. Noite, junte-se a um tour para assistir a um show de música no Red Rock Canyon.\n\n**Dias 7-8: Downtown Las Vegas e a sua História**\n\nDesvie da Strip e explore o Downtown Las Vegas, visitando a Golden Gate Hotel & Casino, o Pioneer Courthouse e o Neon Museum. Noite, junte-se a um guia para um tour noturno da cidade, visitando os principais hotéis e casinos.\n\n**Dias 9-10: Fim de Semana em Style**\n\nPasse os últimos dois dias da viagem explorando a cidade, com opções de shopping no Forum Shops e no Grand Canal Shoppes. Noite, junte-se a um grupo para um dinner show no The Axis at Planet Hollywood.\n\n**Orçamento detalhado**\n\n* Hospedagem: US$ 2.000,- por pessoa, por noite (hotel luxuoso à beira da Strip)\n* Alimentação: US$ 100,- por refeição, o que totaliza US$ 2.000,- por pessoa para todo o roteiro\n* Transporte: US$ 500,- por pessoa, totalizando US$ 5.000,- para todo o roteiro\n* Atrações e atividades: US$ 1.000,- por pessoa, totalizando US$ 10.000,- para todo o roteiro\n* Total: US$ 10.500,- por pessoa para todo o roteiro\n\nEsse roteiro é dirigido para pessoas com orçamento alto que desejam vivenciar o lado mais agitado de Las Vegas, com opções de luxo e entretenimento. Lembre-se de que os preços podem variar de acordo com as opções escolhidas."
                },
                {
                    "role": "user",
                    "content": `${destination}`
                    ,
                },

            ],
            "model": "llama3-8b-8192",
            "temperature": 1,
            "max_tokens": 1024,

        });

        //Retorno da api com a mensagem
        return chatCompletion.choices[0]?.message.content;

    } catch (error) {

        return 'Infelizmente, não foi possível processar sua solicitação no momento. Por favor, tente novamente';


    }

}

