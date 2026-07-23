// Illustration imports (Vite handles these as URLs)
import imgSociety from '../assets/illustrations/society.png';
import imgAnthropology from '../assets/illustrations/anthropology.png';
import imgCulture from '../assets/illustrations/culture.png';
import imgStructure from '../assets/illustrations/structure.png';
import imgPeixeAgua from '../assets/illustrations/peixe_agua.jpg';
import imgTresCiencias from '../assets/illustrations/tres_ciencias.jpg';
import imgRelativismo from '../assets/illustrations/relativismo.jpg';
import imgDadiva from '../assets/illustrations/dadiva.jpg';
import imgConflito from '../assets/illustrations/conflito.jpg';
import imgFronteiras from '../assets/illustrations/fronteiras.jpg';

export const chaptersData = {
  intro: {
    title: "Introdução: O olhar sociológico sobre o cotidiano",
    colorTheme: "orange",
    illustration: imgSociety,
    illustrationAlt: "Ilustração abstrata de conexões sociais entre pessoas",
    sections: [
      {
        id: "intro-1",
        heading: "O que é a sociedade?",
        content: "A sociedade é um grupo de pessoas de tamanho variável, sendo extremamente complexa, mesmo quando pequena. Ela é caracterizada por múltiplas normas, regras e conflitos que moldam a convivência diária.\n\nAlém disso, as regras e normas não são sempre explícitas; muitas pessoas sequer percebem que seguem determinadas regras em seu cotidiano. Os cientistas sociais sabem que essas regras e normas de uma sociedade não são neutras.\n\nPelo contrário, elas tendem a favorecer determinados grupos em detrimento de outros. Um dos principais efeitos dessa dinâmica é a concentração de poder, que acaba gerando recursos, privilégios e benefícios para grupos específicos.",
        keyTerms: [
          { term: "sociedade", definition: "Grupo de pessoas de tamanho variável e complexo, regido por normas e regras." },
          { term: "normas sociais", definition: "Regras de comportamento, muitas vezes implícitas, que orientam as ações dos indivíduos em um grupo." },
          { term: "concentração de poder", definition: "Acúmulo de influência, recursos e controle por parte de grupos específicos na sociedade." }
        ],
        pullQuote: "As regras e normas de uma sociedade não são neutras; elas tendem a favorecer determinados grupos.",
        extraNote: "As Ciências Sociais avançam por meio de diferentes 'linhagens' de pensamento, que oferecem diversas formas de interpretar as regras e a estrutura da sociedade.",
        fact: { number: "800", label: "Complexidade", caption: "Até mesmo o Vaticano, com apenas cerca de 800 habitantes, é uma sociedade extremamente complexa." }
      },
      {
        id: "intro-2",
        heading: "A vida em sociedade e a Desnaturalização",
        content: "A vida em sociedade vai muito além do mero seguimento de normas; a convivência social é o que dá verdadeiro sentido ao cotidiano. Ela cria desejos que frequentemente tomamos como estritamente individuais, mas que, na verdade, são sociais, como o desejo de consumir intensamente na sociedade capitalista.\n\nNesse contexto, surge a importância da desnaturalização. Nas Ciências Sociais, entende-se que nada é simplesmente natural no mundo social; tudo é construído social e historicamente. Por exemplo, o trabalho doméstico foi visto por muito tempo como 'naturalmente feminino'.\n\nQuando as mulheres passaram a questionar isso, compreendeu-se que a sociedade estava estruturada para favorecer os homens. Figuras como Frida Kahlo desafiaram ativamente esses conceitos de feminilidade de sua época.\n\nMais recentemente, manifestações culturais, como o cantor Harry Styles posando de vestido para a capa da revista Vogue, continuam o processo de desnaturalização das normas de gênero. A sociedade, portanto, é também um espaço constante de conflitos, tensões e desigualdades.",
        keyTerms: [
          { term: "desnaturalização", definition: "Processo de perceber que os fenômenos sociais são construções históricas e não fatos dados pela natureza." },
          { term: "pensamento crítico", definition: "A atitude de questionar o que parece óbvio ou natural na organização social." },
          { term: "construções sociais", definition: "Práticas e ideias que são criadas e mantidas pelas relações e arranjos da própria sociedade." },
          { term: "sociedade capitalista", definition: "Organização social baseada na propriedade privada e em relações de consumo e produção voltadas ao lucro." }
        ],
        pullQuote: "Nada é simplesmente natural no mundo social, tudo é construído social e historicamente.",
        extraNote: "A desnaturalização é um exercício contínuo que nos ajuda a romper com o conformismo diante de desigualdades naturalizadas.",
        sectionIllustration: imgPeixeAgua,
        memoryAnchor: {
          icon: "eye",
          title: "A Metáfora do Peixe na Água",
          phrase: "A água é a última coisa que o peixe percebe. A desnaturalização nos tira da 'água' das certezas cotidianas.",
          metaphor: "Assim como o peixe não nota a água até ser tirado dela, nós tomamos papéis sociais como 'naturais' até que o olhar sociológico nos mostre a construção histórica."
        }
      },
      {
        id: "intro-3",
        heading: "As Ciências Sociais",
        content: "Para entender a sociedade de forma sistemática, recorremos à ciência. A ciência é um tipo de conhecimento marcado por regras e métodos compartilhados que exigem objetividade e universalidade. Isso a difere marcadamente do senso comum e do conhecimento religioso.\n\nNo final do século XIX, as Ciências Sociais se formaram, e os primeiros cientistas sociais imaginavam poder compreender a sociedade com a mesma precisão matemática com que um físico entende a gravidade. Hoje, sabemos que as Ciências Sociais são muito diferentes das ciências exatas ou biológicas, dada a complexidade humana. Elas se dividem em três grandes ramos.\n\nA Antropologia estuda a diversidade humana e como os seres humanos podem levar vidas tão diferentes. Por exemplo, compara como vivem os inuits perto do Ártico e os hadzas na Tanzânia; iniciou estudando sociedades 'primitivas', mas a partir de meados do século XX desenvolveu também a antropologia urbana.\n\nA Sociologia, por sua vez, tenta entender as transformações causadas pelas mudanças no trabalho na sociedade ocidental devido ao capitalismo. Ela estuda como a sociedade se estrutura, como produz e distribui bens, e como essa distribuição implica concentração de poder.\n\nPor fim, a Ciência Política estuda a política e as formas de poder, vendo a política como um conjunto de imposições (sociais, morais, culturais) e analisando as estratégias que os atores políticos empregam para alcançar seus objetivos.",
        keyTerms: [
          { term: "Antropologia", definition: "Ciência que estuda a diversidade cultural e o modo de vida humano em diferentes contextos." },
          { term: "Sociologia", definition: "Ciência voltada para a estrutura da sociedade capitalista, focando no trabalho, produção, distribuição e classes sociais." },
          { term: "Ciência Política", definition: "Ciência que investiga as formas de poder, o Estado, e as estratégias políticas e morais de imposição." },
          { term: "epistemologia", definition: "Área da filosofia que estuda a natureza e os limites do próprio conhecimento, incluindo o científico." },
          { term: "colonialismo", definition: "Prática histórica de expansão territorial em que muitas das primeiras bases para estudos sociais foram delineadas." }
        ],
        pullQuote: "A Antropologia se dedica ao estudo da diferença, a Sociologia à estrutura da sociedade capitalista, e a Ciência Política às formas de poder.",
        fact: { number: "3", label: "Ramos Principais", caption: "As Ciências Sociais dividem-se tradicionalmente em Antropologia, Sociologia e Ciência Política." },
        sectionIllustration: imgTresCiencias,
        memoryAnchor: {
          icon: "compass",
          title: "O Trio da Lente Social",
          phrase: "Antropologia foca na diferença; Sociologia foca na estrutura; Ciência Política foca no poder.",
          metaphor: "São três lentes: a Antropologia dá zoom na cultura do outro, a Sociologia analisa o motor do trabalho e a Ciência Política mede quem dá a palavra final no jogo."
        }
      },
      {
        id: "intro-4",
        heading: "Como funcionam as Ciências Sociais?",
        content: "Para pesquisar a realidade social, os cientistas dependem de dois instrumentos principais: conceitos e métodos. Os conceitos são a porta de entrada para explicar a realidade. Nós usamos conceitos o tempo todo sem perceber. Ao falarmos 'mesa', a palavra denota uma ideia, não apenas o objeto físico.\n\nA grande diferença é que os conceitos científicos precisam de precisão rigorosa para evitar ambiguidades do senso comum. Além disso, os conceitos mudam com o tempo, a exemplo do papel esperado das mulheres do século XIX para hoje. Existe também um constante trânsito entre conceitos científicos e o senso comum, como ocorre com a palavra 'cultura'.\n\nJá os métodos são conjuntos de técnicas para coletar e tratar informações. Cada ramo tem suas preferências. Um cientista político frequentemente utiliza dados do IBGE e modelos matemáticos. Um sociólogo pode produzir novos dados através de surveys (pesquisas de opinião). Um antropólogo geralmente recorre ao trabalho de campo, participando do cotidiano do grupo estudado.\n\nEsses métodos se dividem em quantitativos, que são objetivos, respondem a hipóteses por meio de questionários e permitem generalizações, ainda que mais distantes da realidade vivida. E há os métodos qualitativos, que são exploratórios, buscam os aspectos subjetivos e produzem dados por meio da proximidade, mas cujas conclusões são difíceis de generalizar. No fim das contas, ambas as abordagens são complementares para entender a complexidade social.",
        keyTerms: [
          { term: "conceitos", definition: "Ideias e categorias estruturadas que servem para explicar fenômenos da realidade." },
          { term: "métodos", definition: "Técnicas sistemáticas empregadas para coletar, tratar e interpretar informações na pesquisa social." },
          { term: "pesquisa quantitativa", definition: "Método objetivo que gera dados numéricos e permite generalizações estatísticas." },
          { term: "pesquisa qualitativa", definition: "Método exploratório focado em entender subjetividades, motivações e contextos específicos." },
          { term: "survey", definition: "Pesquisa de amplo alcance utilizando questionários padronizados." },
          { term: "trabalho de campo", definition: "Método de imersão no cotidiano do grupo estudado, característico da antropologia." },
          { term: "senso comum", definition: "Conhecimentos adquiridos pela experiência cotidiana, sem métodos científicos rigorosos." }
        ],
        pullQuote: "Os conceitos mudam com o tempo, porque os contextos nos quais foram produzidos também mudam.",
        fact: { number: "IBGE", label: "Dados Censitários", caption: "O Instituto Brasileiro de Geografia e Estatística é fonte crucial de dados para as Ciências Sociais no Brasil." }
      },
      {
        id: "intro-5",
        heading: "O Pensamento Crítico",
        content: "As Ciências Sociais têm como um de seus principais legados ensinar-nos a pensar criticamente e a não aceitar qualquer argumento sem questionamento. Os critérios fundamentais usados para elaborar uma boa pesquisa acadêmica são igualmente úteis para analisarmos argumentos no dia a dia. Elas nos ensinam a analisar os fatos cuidadosamente em vez de simplesmente acreditar neles.\n\nUma perspectiva crítica ajuda a avaliar o que é mais ou menos razoável e a distinguir argumentos sólidos de meras enganações. Podemos tomar como exemplo o debate público sobre a limitação de publicidade de bebidas alcoólicas. De um lado, argumenta-se a favor da liberdade individual; do outro, defende-se a saúde pública.\n\nEsse debate poderia continuar indefinidamente, com posições que parecem razoáveis de ambos os lados. Diante disso, as Ciências Sociais nos ensinam a perguntar: Quais interesses estão em jogo? Quem fala em nome de quem? Os argumentos realmente se sustentam com dados? Existe algum truque na argumentação de alguma das partes?\n\nApós fazer essa análise cuidadosa, ficamos muito mais bem preparados para tomar decisões embasadas em uma perspectiva verdadeiramente crítica.",
        keyTerms: [
          { term: "pensamento crítico", definition: "A capacidade de não aceitar informações passivamente, mas de analisá-las de forma estruturada e questionadora." },
          { term: "argumentação", definition: "Conjunto de raciocínios articulados para sustentar ou contestar uma afirmação, ou defender uma tese." },
          { term: "análise crítica", definition: "O exame detalhado de argumentos e informações para identificar falhas lógicas, viéses e interesses ocultos." },
          { term: "saúde pública", definition: "Esforço coletivo e do Estado para melhorar e proteger a saúde das populações, muitas vezes em conflito com interesses econômicos." }
        ],
        pullQuote: "As Ciências Sociais nos ensinam a analisar em lugar de simplesmente acreditar."
      },
      {
        id: "intro-6",
        heading: "Ideologia",
        content: "Podemos definir ideologia como o conjunto de ideias e valores expressos e defendidos por determinados grupos ou classes sociais. Um exemplo comum hoje é a 'ideologia do consumo', que faz as pessoas acreditarem que precisam possuir certas coisas para serem mais felizes. A história mostra que cada momento histórico possui as suas ideologias dominantes, as quais geralmente refletem os interesses dos grupos que estão no poder.\n\nO poder, na verdade, só se constitui solidamente com o auxílio da ideologia. Ela cria nas pessoas desejos e valores que facilitam a vida daqueles que controlam as estruturas de poder, convencendo a maioria de que aquela organização social é natural ou a melhor possível. As Ciências Sociais nos fornecem as ferramentas para identificar essas ideologias, descobrindo quem as produz e com que finalidade.\n\nPor outro lado, existem as ideologias alternativas, que surgem para questionar e desestabilizar as ideologias dominantes. Um exemplo contundente da história recente foi a resistência à ditadura civil-militar no Brasil (1964-1985). A ideologia dominante da época baseava-se na 'segurança nacional', argumentando que a nação estava em guerra contra ideologias que queriam alterar a ordem social.\n\nEsse discurso foi usado como justificativa para suprimir direitos individuais, implementar repressão e impor censura. Em resposta, vários grupos se manifestaram contra o regime, defendendo ativamente outras ideologias focadas em democracia, liberdade e direitos humanos.",
        keyTerms: [
          { term: "ideologia", definition: "Conjunto organizado de ideias, crenças e valores de um grupo ou classe." },
          { term: "ideologia dominante", definition: "O conjunto de ideias que sustenta e justifica os interesses do grupo no poder." },
          { term: "ideologias alternativas", definition: "Ideias e valores que questionam, desafiam e buscam substituir a ideologia dominante." },
          { term: "ditadura civil-militar", definition: "Regime autoritário ocorrido no Brasil (1964-1985) que utilizou fortemente o controle ideológico." },
          { term: "consumo", definition: "Ato de adquirir bens, muitas vezes impulsionado por ideologias que associam o consumo à felicidade." }
        ],
        pullQuote: "O poder só se constitui com o auxílio da ideologia, criando nas pessoas desejos e valores que facilitam a vida daqueles que controlam o poder.",
        fact: { number: "1964-1985", label: "Ditadura Militar", caption: "Período da ditadura civil-militar no Brasil, onde houve intenso embate entre a ideologia dominante de segurança nacional e ideologias democráticas." }
      }
    ],
    videos: [
      { id: 'v1', title: 'O que é Sociologia?', description: 'Introdução ao olhar sociológico sobre o cotidiano e a vida em sociedade.', url: 'https://www.youtube.com/embed/placeholder1', relatedSection: 'intro-1' },
      { id: 'v2', title: 'Desnaturalização e Pensamento Crítico', description: 'Como as Ciências Sociais nos ensinam a questionar o que parece natural.', url: 'https://www.youtube.com/embed/placeholder2', relatedSection: 'intro-2' },
      { id: 'v3', title: 'As três Ciências Sociais', description: 'Antropologia, Sociologia e Ciência Política: o que cada uma estuda.', url: 'https://www.youtube.com/embed/placeholder3', relatedSection: 'intro-3' },
      { id: 'v4', title: 'Conceitos e Métodos nas Ciências Sociais', description: 'Como os cientistas sociais pesquisam e produzem conhecimento.', url: 'https://www.youtube.com/embed/placeholder4', relatedSection: 'intro-4' },
      { id: 'v5', title: 'Ideologia e Poder', description: 'O papel da ideologia na manutenção e transformação do poder social.', url: 'https://www.youtube.com/embed/placeholder5', relatedSection: 'intro-6' }
    ],
    videoUrl: "https://www.youtube.com/embed/placeholder1",
    quiz: [
      {
        question: "De acordo com os cientistas sociais, as regras e normas de uma sociedade:",
        options: [
          "São perfeitamente justas e neutras para todos os cidadãos.",
          "São sempre explícitas e totalmente claras para qualquer pessoa.",
          "Não são neutras, pois tendem a favorecer determinados grupos e concentrar poder.",
          "São leis da natureza imutáveis que independem das relações humanas."
        ],
        correct: 2,
        explanation: "As regras e normas de uma sociedade tendem a favorecer determinados grupos, o que resulta na concentração de poder, gerando recursos e benefícios específicos para alguns."
      },
      {
        question: "O conceito de 'desnaturalização' nas Ciências Sociais refere-se a:",
        options: [
          "Preservar os ecossistemas naturais contra o avanço das indústrias.",
          "Compreender que as práticas e normas sociais são construções históricas, e não meros fenômenos naturais.",
          "Transformar a cultura humana de volta a um estado primitivo e natural.",
          "Aceitar que certas desigualdades e papéis sociais são definidos biologicamente."
        ],
        correct: 1,
        explanation: "Desnaturalizar significa reconhecer que tudo no mundo social é construído histórica e socialmente, opondo-se à ideia de que costumes, como certas divisões de gênero, derivam da natureza."
      },
      {
        question: "A Sociologia, ao contrário da Antropologia e da Ciência Política, foca predominantemente em qual dos aspectos a seguir?",
        options: [
          "O estudo da diversidade humana ao longo de diferentes épocas e ambientes geográficos.",
          "A análise das formas de imposição e das estratégias dos atores para alcançar seus objetivos no Estado.",
          "As estruturas da sociedade capitalista, a produção de bens, e as transformações no mundo do trabalho.",
          "O estudo estritamente biológico do ser humano em sua evolução genética."
        ],
        correct: 2,
        explanation: "A Sociologia tenta compreender as transformações decorrentes do capitalismo, da estrutura social e da divisão do trabalho e suas consequências."
      },
      {
        question: "Por que os conceitos nas Ciências Sociais diferem dos do senso comum?",
        options: [
          "Porque os conceitos científicos são dogmas imutáveis que nunca se alteram com o tempo.",
          "Porque exigem precisão para evitar as ambiguidades típicas da linguagem cotidiana, embora dialoguem com o senso comum.",
          "Porque apenas pessoas religiosas conseguem interpretar corretamente a ciência.",
          "Porque os cientistas inventam palavras completamente novas que não têm relação com a vida real."
        ],
        correct: 1,
        explanation: "Os conceitos científicos requerem maior precisão teórica para analisar a realidade de forma sistemática e sem as ambiguidades do senso comum."
      },
      {
        question: "Assinale a alternativa que melhor descreve a principal diferença entre os métodos quantitativos e qualitativos.",
        options: [
          "Os métodos quantitativos usam dados numéricos para responder hipóteses, enquanto os qualitativos são exploratórios e buscam os aspectos subjetivos da experiência.",
          "Ambos utilizam exclusivamentes grandes questionários, diferindo apenas no idioma em que a pesquisa é aplicada.",
          "O método qualitativo permite generalizar amplamente os dados de uma população, o quantitativo não.",
          "Os métodos quantitativos foram desenvolvidos na Grécia antiga, ao passo que os qualitativos surgiram no século XX."
        ],
        correct: 0,
        explanation: "Métodos quantitativos focam na objetividade e medição estatística (como o uso de surveys), já os qualitativos mergulham nas significações e vivências dos indivíduos."
      },
      {
        question: "O desenvolvimento do 'Pensamento Crítico' por meio das Ciências Sociais tem qual principal utilidade?",
        options: [
          "Forçar as pessoas a rejeitarem todas as formas de autoridade, não importando a situação.",
          "Decorar estatísticas e tabelas com precisão matemática.",
          "Permitir que analisemos cuidadosamente argumentos, distinguindo ideias sólidas de enganações ou interesses escusos.",
          "Aprender a repetir as ideologias dominantes de forma mais articulada e sofisticada."
        ],
        correct: 2,
        explanation: "As Ciências Sociais nos ensinam a não acreditar sem questionar, exigindo análises cuidadosas e a avaliação de quem fala e quais interesses estão por trás dos discursos."
      },
      {
        question: "De acordo com as Ciências Sociais, o que é 'Ideologia'?",
        options: [
          "O estudo rigoroso dos ecossistemas biológicos.",
          "A capacidade mental e genética herdada por determinados povos.",
          "Um conjunto de ideias e valores expressos por grupos sociais, que frequentemente auxilia na manutenção e estruturação do poder.",
          "Um método puramente matemático usado pelo IBGE para contar a população."
        ],
        correct: 2,
        explanation: "Ideologia compreende as ideias, crenças e valores promovidos por um grupo, servindo de forma muito eficaz para constituir e proteger as dinâmicas de poder na sociedade."
      },
      {
        question: "Harry Styles aparecer vestido com roupas femininas na capa de uma revista é um exemplo que pode ser associado, sociologicamente, a qual processo?",
        options: [
          "Reforço das ideologias de senso comum que governam as leis da biologia.",
          "Consolidação de ideias dominantes durante a ditadura militar.",
          "Aumento dos métodos quantitativos e das surveys sobre a juventude contemporânea.",
          "Desnaturalização, desafiando a noção de que roupas e normas de gênero são fatos naturais."
        ],
        correct: 3,
        explanation: "Isso se relaciona com o processo de desnaturalização, mostrando que as normas atreladas a papéis de gênero não derivam da natureza, mas são construções que podem ser alteradas."
      }
    ],
    mindmap: {
      nodes: [
        { id: '1', data: { label: 'Ciências Sociais' }, position: { x: 300, y: 0 } },
        { id: '2', data: { label: 'Antropologia' }, position: { x: 100, y: 100 } },
        { id: '3', data: { label: 'Sociologia' }, position: { x: 300, y: 100 } },
        { id: '4', data: { label: 'Ciência Política' }, position: { x: 500, y: 100 } },
        { id: '5', data: { label: 'Desnaturalização' }, position: { x: 100, y: 200 } },
        { id: '6', data: { label: 'Pensamento Crítico' }, position: { x: 300, y: 200 } },
        { id: '7', data: { label: 'Ideologia' }, position: { x: 500, y: 200 } },
        { id: '8', data: { label: 'Conceitos' }, position: { x: 100, y: -50 } },
        { id: '9', data: { label: 'Métodos' }, position: { x: 500, y: -50 } }
      ],
      edges: [
        { id: 'e1-2', source: '1', target: '2' },
        { id: 'e1-3', source: '1', target: '3' },
        { id: 'e1-4', source: '1', target: '4' },
        { id: 'e2-5', source: '2', target: '5' },
        { id: 'e3-6', source: '3', target: '6' },
        { id: 'e4-7', source: '4', target: '7' },
        { id: 'e1-8', source: '1', target: '8' },
        { id: 'e1-9', source: '1', target: '9' }
      ]
    }
  },
  cap1: {
    title: "Capítulo 1: O pensamento antropológico",
    colorTheme: "emerald",
    illustration: imgAnthropology,
    illustrationAlt: "Ilustração abstrata de pensamento antropológico com símbolos culturais",
    sections: [
      {
        id: "cap1-1",
        heading: "A construção do pensamento antropológico",
        content: "O avanço colonialista europeu sobre as Américas, África e Ásia, a partir do século XVI, gerou a necessidade de conhecer as populações nativas. Os europeus passaram a estudar esses povos impulsionados por interesses políticos e econômicos, visando dominá-los, convertê-los religiosamente e explorar suas riquezas.\n\nContudo, esse contato inicial, ainda que pautado na dominação e na violência, formou a base embrionária para os primeiros estudos antropológicos. A curiosidade e o choque cultural diante do 'outro' instigaram as primeiras reflexões sistemáticas sobre a diversidade humana.\n\nCom o tempo, essa necessidade de catalogar e compreender os costumes nativos deu origem a uma disciplina científica própria, dedicada a investigar a complexidade das culturas não europeias e, posteriormente, a própria condição humana em sua totalidade.",
        keyTerms: [
          { term: "colonialismo", definition: "Sistema de dominação política, econômica e cultural de um povo sobre outro, historicamente exercido por potências europeias." },
          { term: "Antropologia", definition: "Ciência que estuda a diversidade cultural humana, seus costumes, crenças e estruturas sociais de forma comparativa e abrangente." },
          { term: "alteridade", definition: "A qualidade de ser o outro; o reconhecimento da diferença e da diversidade humana como elemento fundamental da identidade." }
        ],
        pullQuote: "O encontro entre culturas, ainda que marcado pela dominação, plantou a semente para a compreensão científica da diversidade humana.",
        extraNote: "Os primeiros relatos sobre povos nativos eram feitos por viajantes, missionários e administradores coloniais, frequentemente carregados de preconceitos morais e religiosos europeus.",
        fact: { number: "XVI", label: "Século do Contato", caption: "O expansionismo colonial europeu no século XVI marcou o início de uma nova era global de encontros e dominações culturais." },
        sectionIllustration: imgAnthropology,
        memoryAnchor: {
          icon: "compass",
          title: "O Desafio da Alteridade",
          phrase: "Antropologia nasce do impacto de encarar o 'outro' e perceber que a sua cultura não é o centro do universo.",
          metaphor: "Estranhar o diferente é o primeiro passo para compreender que a humanidade tem infinitas formas de viver."
        }
      },
      {
        id: "cap1-2",
        heading: "O Evolucionismo Social e seus Impactos",
        content: "No século XIX, período de grande prestígio para as ciências naturais, a Antropologia foi fortemente influenciada pelo Evolucionismo Social. Autores como Lewis Henry Morgan e Edward Tylor acreditavam que todas as sociedades humanas seguiam uma única e inexorável escala evolutiva.\n\nEssa escala linear classificava o desenvolvimento humano em três grandes estágios: Selvageria, Barbárie e Civilização. Naturalmente, no topo dessa suposta evolução, como o ápice do progresso humano, encontrava-se a civilização europeia industrializada.\n\nEssa visão profundamente etnocêntrica não apenas distorcia a realidade da diversidade cultural, mas serviu como uma poderosa justificativa ideológica para o imperialismo. A dominação de outros povos era defendida como uma 'missão civilizatória', necessária para levar o 'progresso' às sociedades consideradas atrasadas ou primitivas.",
        keyTerms: [
          { term: "Evolucionismo Social", definition: "Corrente do séc. XIX que classificava as sociedades em estágios universais de evolução linear, culminando na civilização europeia." },
          { term: "etnocentrismo", definition: "Visão que considera os valores, costumes e normas da própria cultura como superiores aos de outras culturas." },
          { term: "missão civilizatória", definition: "Ideologia imperialista que justificava a colonização como um dever das nações 'avançadas' de educar e modernizar povos 'atrasados'." }
        ],
        pullQuote: "A crença numa escala linear de evolução serviu de alicerce ideológico para justificar a exploração e o domínio de povos inteiros sob o disfarce do progresso.",
        extraNote: "Edward Tylor, um dos pioneiros, foi crucial ao definir cultura em 1871 como 'o todo complexo' que inclui conhecimento, arte, moral e costumes adquiridos pelo homem.",
        fact: { number: "3", label: "Estágios Evolutivos", caption: "Morgan dividia a humanidade em três grandes fases: Selvageria, Barbárie e Civilização." },
        memoryAnchor: {
          icon: "shield",
          title: "A Falsa Escada Linear",
          phrase: "Não existem culturas 'superiores' ou 'primitivas', apenas caminhos históricos e respostas diferentes.",
          metaphor: "O evolucionismo social mediu o mundo inteiro com a régua europeia. A antropologia moderna provou que essa régua era falsa."
        }
      },
      {
        id: "cap1-3",
        heading: "O Funcionalismo e a Importância da Etnografia",
        content: "No início do século XX, a Antropologia sofreu uma revolução metodológica com o surgimento do Funcionalismo, liderado por Bronislaw Malinowski. Malinowski criticou a abordagem de gabinete dos evolucionistas e defendeu a necessidade do trabalho de campo rigoroso.\n\nEle estabeleceu a etnografia moderna ao passar anos vivendo entre os habitantes das Ilhas Trobriand, participando ativamente de seu cotidiano e aprendendo sua língua. Essa imersão profunda provou ser essencial para compreender verdadeiramente uma cultura.\n\nTeoricamente, o Funcionalismo via a cultura como um sistema integrado onde cada costume, crença ou instituição cumpria uma função vital. Assim, práticas que pareciam irracionais aos olhos ocidentais revelavam-se mecanismos complexos e perfeitamente lógicos para garantir a sobrevivência e a coesão do grupo.",
        keyTerms: [
          { term: "Funcionalismo", definition: "Abordagem teórica que interpreta a cultura como um sistema em que cada elemento possui uma função essencial para a manutenção da sociedade." },
          { term: "etnografia", definition: "Método de pesquisa qualitativa baseado na observação participante e na imersão prolongada do pesquisador na vida da comunidade estudada." },
          { term: "trabalho de campo", definition: "Coleta de dados diretamente no ambiente natural onde vivem os sujeitos da pesquisa, essencial para a Antropologia moderna." }
        ],
        pullQuote: "As práticas culturais que parecem irracionais de fora, revelam-se mecanismos complexos de sobrevivência e coesão quando vistas por dentro.",
        extraNote: "A publicação de 'Os Argonautas do Pacífico Ocidental' (1922) por Malinowski é considerada o marco fundador da etnografia e da antropologia social moderna.",
        fact: { number: "1922", label: "Marco Etnográfico", caption: "Ano de publicação da obra que revolucionou o método de pesquisa com observação participante." },
        memoryAnchor: {
          icon: "compass",
          title: "O Diário de Campo de Malinowski",
          phrase: "Para entender a cultura do outro, você precisa sair da varanda e viver a rotina dele.",
          metaphor: "Ler sobre natação não ensina a nadar. A etnografia é pular na água do dia a dia do grupo estudado."
        }
      },
      {
        id: "cap1-4",
        heading: "A Revolução do Estruturalismo",
        content: "Em meados do século XX, o antropólogo francês Claude Lévi-Strauss introduziu o Estruturalismo na Antropologia. Em contraste com o foco funcionalista em necessidades práticas, Lévi-Strauss voltou sua atenção para a capacidade cognitiva humana e as estruturas inconscientes da mente.\n\nAtravés da análise minuciosa de mitos, sistemas de parentesco e cosmologias indígenas, ele demonstrou que o pensamento das sociedades 'tradicionais' não era de forma alguma inferior, infantil ou irracional. Ao contrário, o 'pensamento selvagem' é altamente sofisticado, lógico e operante.\n\nEle argumentou que todas as mentes humanas funcionam organizando o mundo por meio de oposições binárias, como cultura/natureza, cru/cozido. Assim, as diferenças culturais são apenas manifestações variadas de uma mesma estrutura mental humana subjacente.",
        keyTerms: [
          { term: "Estruturalismo", definition: "Corrente teórica que busca identificar as estruturas inconscientes universais que organizam o pensamento, os mitos e as práticas culturais." },
          { term: "Claude Lévi-Strauss", definition: "Antropólogo francês que revolucionou a disciplina ao demonstrar a complexidade lógica do pensamento indígena e dos mitos." },
          { term: "oposições binárias", definition: "Pares de conceitos contrastantes que, segundo Lévi-Strauss, formam a estrutura básica pela qual o cérebro humano categoriza a realidade." }
        ],
        pullQuote: "O 'pensamento selvagem' não é irracional; ele é tão lógico e complexo quanto o pensamento científico moderno, operando apenas com outras categorias.",
        extraNote: "A obra 'O Pensamento Selvagem' (1962) desconstruiu a ideia de superioridade cognitiva ocidental, defendendo a unidade intelectual da humanidade.",
        fact: { number: "100", label: "Centenário", caption: "Claude Lévi-Strauss viveu mais de um século, deixando um legado inestimável para a compreensão das estruturas do pensamento." },
        memoryAnchor: {
          icon: "cpu",
          title: "A Gramática da Mente Humana",
          phrase: "Os mitos e rituais indígenas não são 'fantasia', mas arquitetura de lógica pura.",
          metaphor: "Usamos regras gramaticais sem recitar o dicionário. Os mitos revelam o 'código-fonte' universal da mente."
        }
      }
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    quiz: [
      {
        question: "Como o Evolucionismo Social do século XIX compreendia a história e o desenvolvimento das diferentes sociedades humanas?",
        options: [
          "Como uma tapeçaria diversa onde cada cultura tem sua própria linha do tempo e validade.",
          "Como um processo de declínio contínuo a partir de uma 'Idade de Ouro' original perfeita.",
          "Como uma escala linear e universal de progresso, passando da selvageria à barbárie e culminando na civilização europeia.",
          "Como estruturas mentais universais onde não existe diferença evolutiva entre as nações."
        ],
        correct: 2,
        explanation: "O Evolucionismo Social impôs uma visão eurocêntrica que classificava as sociedades não europeias como 'atrasadas' em uma escala obrigatória de progresso, que serviu para justificar o colonialismo."
      },
      {
        question: "Qual inovação fundamental Bronislaw Malinowski trouxe para a metodologia das Ciências Sociais e, especificamente, para a Antropologia?",
        options: [
          "A análise quantitativa maciça através da aplicação de surveys globais.",
          "O trabalho de campo prolongado e a observação participante, fundando a etnografia moderna.",
          "A teoria de que todas as sociedades deveriam ser comparadas através de fósseis humanos e ferramentas de pedra.",
          "A criação de um modelo matemático para prever comportamentos culturais e eleitorais."
        ],
        correct: 1,
        explanation: "Malinowski exigiu que o antropólogo saísse do escritório e vivesse diretamente com o povo estudado, inaugurando o trabalho de campo etnográfico como pilar da antropologia."
      },
      {
        question: "O conceito de 'Etnocentrismo' é melhor descrito por qual das seguintes afirmações?",
        options: [
          "A atitude de julgar outras culturas usando os valores e padrões da sua própria cultura, assumindo-a como superior.",
          "O estudo imparcial e objetivo da organização celular de diferentes etnias humanas.",
          "A capacidade de relativizar todos os comportamentos e aceitar práticas de violência como tradições sagradas.",
          "O processo de miscigenação que ocorre quando duas civilizações distintas se encontram para fins comerciais."
        ],
        correct: 0,
        explanation: "Etnocentrismo é enxergar o mundo sob as lentes da própria cultura e, consequentemente, julgar culturas diferentes como inferiores, anormais ou erradas."
      },
      {
        question: "De acordo com Claude Lévi-Strauss e o Estruturalismo, como deve ser compreendido o pensamento dos povos indígenas (o 'pensamento selvagem')?",
        options: [
          "Como um modo de pensar primitivo e irracional, focado apenas em necessidades animais de sobrevivência.",
          "Como uma reprodução imperfeita do modelo europeu de ciência racional.",
          "Como um sistema sofisticado, ordenado e tão lógico quanto o pensamento científico, mas baseado em outras classificações do sensível.",
          "Como um fenômeno passageiro que desaparece imediatamente quando exposto à tecnologia."
        ],
        correct: 2,
        explanation: "Lévi-Strauss desmistificou o preconceito contra os nativos, provando que seus mitos e lógicas são altamente complexos e estruturados, revelando a capacidade universal do intelecto humano."
      },
      {
        question: "Qual foi o papel do projeto colonialista na origem da Antropologia?",
        options: [
          "Impediu o desenvolvimento da ciência antropológica, que só surgiu após a descolonização.",
          "Foi irrelevante, pois a Antropologia surgiu exclusivamente como um esforço acadêmico europeu sem contato externo.",
          "Serviu como o principal financiador da proteção irrestrita dos direitos dos povos nativos no século XVI.",
          "Gerou a necessidade inicial de estudar as populações dominadas, fornecendo a base embrionária sobre a qual a disciplina foi posteriormente construída."
        ],
        correct: 3,
        explanation: "As potências coloniais precisavam entender os povos conquistados para governá-los. Esse interesse utilitário produziu os primeiros relatos sistemáticos que, embora enviesados, deram origem ao estudo antropológico."
      },
      {
        question: "Para a corrente teórica do Funcionalismo, qual é a principal característica das práticas culturais (como rituais ou sistemas de parentesco)?",
        options: [
          "Elas não possuem nenhuma lógica inerente, sendo apenas erros históricos da humanidade.",
          "Elas são formadas apenas para justificar o controle do Estado sobre os indivíduos.",
          "Elas existem exclusivamente para satisfazer interesses econômicos e gerar lucro para a tribo.",
          "Elas são vistas como partes interconectadas de um sistema integrado que funcionam para manter a sobrevivência e a coesão social."
        ],
        correct: 3,
        explanation: "O Funcionalismo, inspirado por Malinowski e Radcliffe-Brown, argumenta que qualquer instituição ou costume desempenha um papel essencial (uma função) para manter a sociedade operando perfeitamente."
      }
    ],
    mindmap: {
      nodes: [
        { id: '1', data: { label: 'Pensamento Antropológico' }, position: { x: 300, y: 0 } },
        { id: '2', data: { label: 'Colonialismo e Contato' }, position: { x: 100, y: 80 } },
        { id: '3', data: { label: 'Evolucionismo Social' }, position: { x: 500, y: 80 } },
        { id: '4', data: { label: 'Morgan & Tylor' }, position: { x: 500, y: 160 } },
        { id: '5', data: { label: 'Funcionalismo' }, position: { x: 100, y: 200 } },
        { id: '6', data: { label: 'Etnografia / Malinowski' }, position: { x: 100, y: 280 } },
        { id: '7', data: { label: 'Estruturalismo' }, position: { x: 300, y: 160 } },
        { id: '8', data: { label: 'Lévi-Strauss (Mitos)' }, position: { x: 300, y: 240 } }
      ],
      edges: [
        { id: 'e1-2', source: '1', target: '2' },
        { id: 'e1-3', source: '1', target: '3' },
        { id: 'e1-5', source: '1', target: '5' },
        { id: 'e1-7', source: '1', target: '7' },
        { id: 'e3-4', source: '3', target: '4' },
        { id: 'e5-6', source: '5', target: '6' },
        { id: 'e7-8', source: '7', target: '8' }
      ]
    },
    videos: [
      { id: 'v1_cap1', title: 'A invenção da Antropologia', description: 'Como a antropologia nasceu do confronto e da curiosidade sobre a alteridade.', url: 'https://www.youtube.com/embed/placeholder_cap1_1', relatedSection: 'cap1-1' },
      { id: 'v2_cap1', title: 'O que foi o Evolucionismo Social?', description: 'Entenda os erros e vieses do evolucionismo do século XIX.', url: 'https://www.youtube.com/embed/placeholder_cap1_2', relatedSection: 'cap1-2' },
      { id: 'v3_cap1', title: 'O método etnográfico de Malinowski', description: 'A importância da vivência de campo nas Ilhas Trobriand.', url: 'https://www.youtube.com/embed/placeholder_cap1_3', relatedSection: 'cap1-3' }
    ]
  },
  cap2: {
    title: "Capítulo 2: O conceito de cultura",
    colorTheme: "violet",
    illustration: imgCulture,
    illustrationAlt: "Ilustração abstrata de mosaico representando diversidade cultural",
    sections: [
      {
        id: "cap2-1",
        heading: "A Revolução de Franz Boas e o Pluralismo Cultural",
        content: "No início do século XX, o antropólogo alemão-americano Franz Boas trouxe uma mudança fundamental para a compreensão humana, criticando duramente o Evolucionismo Social. Boas rejeitou a noção de que houvesse uma 'civilização' única e superior como padrão universal de desenvolvimento.\n\nEle argumentou de forma contundente que não podemos falar de 'Cultura' no singular, mas apenas de 'culturas' no plural. Cada sociedade constrói sua própria história e seus próprios valores, e, portanto, o progresso de um povo não pode ser medido pela régua de desenvolvimento de outro.\n\nEssa perspectiva inovadora abriu caminho para o conceito de pluralismo cultural. Boas enfatizou que a biologia (ou a 'raça', termo que ele ajudou a desconstruir) não determina o intelecto humano ou os traços culturais, separando definitivamente a antropologia cultural da biologia e combatendo o racismo científico predominante na época.",
        keyTerms: [
          { term: "Franz Boas", definition: "Antropólogo considerado o fundador da antropologia cultural americana; desconstruiu o racismo científico e enfatizou a pesquisa empírica." },
          { term: "pluralismo cultural", definition: "A valorização de que existem múltiplas culturas legítimas e distintas, sem uma hierarquia de superioridade entre elas." },
          { term: "determinismo biológico", definition: "A ideia rejeitada por Boas de que a biologia e a genética ditam o comportamento social e o potencial cultural das populações." }
        ],
        pullQuote: "Pensar em 'culturas' no plural — e rejeitar uma 'civilização' como régua universal — foi a revolução intelectual promovida por Franz Boas.",
        extraNote: "A oposição de Franz Boas às explicações biológicas para o comportamento humano foi central para derrubar teorias pseudocientíficas racistas no início do século XX.",
        fact: { number: "∞", label: "Infinitas Culturas", caption: "Boas defendia que não existe um caminho único para o desenvolvimento humano, mas sim caminhos incontáveis." },
        sectionIllustration: imgCulture
      },
      {
        id: "cap2-2",
        heading: "Relativismo Cultural vs. Etnocentrismo",
        content: "A partir das ideias de Boas, consolidou-se na Antropologia o conceito de Relativismo Cultural. Este princípio metodológico defende que as crenças e costumes de uma sociedade devem ser compreendidos dentro do seu próprio contexto cultural, suspendendo julgamentos prévios baseados na moralidade do observador.\n\nO relativismo é, portanto, a principal ferramenta intelectual contra o Etnocentrismo, que é a tendência instintiva de julgar a cultura do outro como estranha ou inferior. O etnocentrismo frequentemente gera preconceito e discriminação, dificultando o diálogo intercultural.\n\nContudo, o relativismo cultural também impõe complexos debates éticos nas ciências sociais contemporâneas. Se levado a um extremo, como a humanidade lidaria com violações de Direitos Humanos fundamentais fundamentadas em 'tradição'? A antropologia moderna busca equilibrar o respeito à diferença com a universalidade dos direitos humanos essenciais.",
        keyTerms: [
          { term: "relativismo cultural", definition: "Metodologia e postura analítica que busca entender uma prática cultural a partir das lógicas e valores da própria sociedade onde ela ocorre." },
          { term: "Direitos Humanos", definition: "Conjunto de garantias universais de dignidade, liberdade e igualdade, que frequentemente entram em tensão com certas práticas tradicionais específicas." },
          { term: "alteridade radical", definition: "A compreensão profunda da diferença do outro sem tentar enquadrá-lo ou reduzi-lo às nossas categorias familiares." }
        ],
        pullQuote: "O relativismo nos ensina a compreender antes de julgar, desafiando a tendência etnocêntrica de considerar a própria cultura como o único modelo aceitável.",
        extraNote: "O embate ético entre os defensores ferrenhos da tradição (relativistas radicais) e os ativistas globais (universalistas) é um dos tópicos mais quentes da antropologia jurídica contemporânea.",
        fact: { number: "1948", label: "Declaração Universal", caption: "A DUDH gerou intensos debates na Associação Americana de Antropologia sobre como conciliar direitos universais e diversidade." },
        sectionIllustration: imgRelativismo,
        memoryAnchor: {
          icon: "shield",
          title: "O Relógio do Etnocentrismo",
          phrase: "O etnocentrismo é usar um relógio que só marca a hora da sua cidade e achar que todas as outras cidades estão erradas.",
          metaphor: "Compreender antes de julgar é a bússola do relativismo cultural para evitar preconceitos."
        }
      },
      {
        id: "cap2-3",
        heading: "Personalidade e Padrões Culturais",
        content: "Após a consolidação das ideias de Boas, uma nova geração de antropólogas, como Margaret Mead e Ruth Benedict, iniciou o movimento de Cultura e Personalidade. Elas buscaram compreender como as sociedades moldam ativamente o comportamento e as emoções de seus indivíduos desde o nascimento.\n\nBenedict argumentou que as culturas selecionam certos traços de temperamento humano, promovendo alguns e suprimindo outros, criando 'padrões culturais' distintivos. Assim, o comportamento considerado 'normal' e aceablyável varia imensamente de uma sociedade para outra.\n\nMargaret Mead, em seus célebres estudos em Samoa e Nova Guiné, demonstrou que os papéis de gênero, a adolescência e a agressividade não são fenômenos biologicamente pré-programados de maneira universal. O que a sociedade ocidental muitas vezes assume ser 'da natureza humana' é, na verdade, um roteiro profundamente cultural e internalizado.",
        keyTerms: [
          { term: "Cultura e Personalidade", definition: "Corrente antropológica que investigava a interação entre a cultura coletiva e a formação da psicologia e personalidade individual." },
          { term: "Ruth Benedict", definition: "Autora de 'Padrões de Cultura', demonstrou como cada sociedade escolhe e consolida certas características psicológicas." },
          { term: "Margaret Mead", definition: "Estudou a adolescência em Samoa, provando que crises da puberdade dependem da cultura, e não apenas de hormônios ou biologia." }
        ],
        pullQuote: "Aquilo que consideramos ser instintivo ou natural no comportamento humano é, frequentemente, um padrão cultural profundamente enraizado em nós.",
        extraNote: "As descobertas de Margaret Mead nas décadas de 1920 e 1930 foram fundamentais para os movimentos feministas e libertários que surgiriam mais tarde no século XX.",
        fact: { number: "1928", label: "Coming of Age in Samoa", caption: "Publicação do livro clássico de Mead, que revolucionou a percepção pública sobre juventude e cultura." },
        memoryAnchor: {
          icon: "lightbulb",
          title: "O Roteiro da Personalidade",
          phrase: "O que a sociedade chama de 'natureza humana' é um script cultural internalizado.",
          metaphor: "Margaret Mead provou em Samoa que as angústias da juventude não vêm da biologia, mas de como a cultura organiza a vida."
        }
      },
      {
        id: "cap2-4",
        heading: "A Cultura como Lente e Dinâmica Contínua",
        content: "A cultura, contudo, não é um conjunto rígido de regras ou um fóssil imutável. Como aponta a antropologia contemporânea, a cultura funciona como uma lente através da qual enxergamos e interpretamos o mundo, moldando nossa percepção desde coisas simples, como o que é comestível, até o que consideramos moralmente correto.\n\nAlém disso, as culturas são sistemas extremamente dinâmicos. Elas estão em constante mudança e reconfiguração devido ao contato com outros grupos, ao desenvolvimento tecnológico e a disputas políticas internas. Não existem culturas estáticas ou 'puras'.\n\nEssa dinamicidade é visível, por exemplo, na cultura brasileira contemporânea, que incorpora elementos globais aos seus hábitos locais sem perder sua essência. A cultura é viva e é um campo constante de negociação, criatividade humana e, às vezes, de profundos conflitos sociais.",
        keyTerms: [
          { term: "lente cultural", definition: "A ideia de que a cultura filtra a nossa percepção da realidade, fazendo com que interpretemos fatos neutros de acordo com valores aprendidos." },
          { term: "dinamismo cultural", definition: "A característica inerente às culturas humanas de estarem sempre se transformando e adaptando, contrariando ideias de 'pureza cultural'." },
          { term: "sincretismo", definition: "A fusão ou amálgama de diferentes tradições culturais ou religiosas formando um elemento completamente novo." }
        ],
        pullQuote: "As culturas não são relíquias congeladas no tempo, mas organismos vivos, dinâmicos e em constante reconstrução através do contato humano.",
        extraNote: "A visão moderna rejeita purismos. Hoje se entende que processos como a globalização não necessariamente destroem as culturas locais, mas as reconfiguram e as hibridizam.",
        fact: { number: "100%", label: "Mudança", caption: "Nenhuma cultura hoje é exatamente igual ao que era há um século; a adaptação e o hibridismo são regras universais." },
        memoryAnchor: {
          icon: "eye",
          title: "Óculos Coloridos da Realidade",
          phrase: "Nenhuma cultura é uma estátua de pedra estática; todas são rios em constante transformação.",
          metaphor: "A cultura é o óculo colorido com o qual enxergamos a realidade. Não há olhar sem lente na experiência humana."
        }
      }
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    quiz: [
      {
        question: "Por que Franz Boas rejeitou radicalmente a ideia de Evolucionismo Social e da existência de apenas uma 'Civilização'?",
        options: [
          "Porque ele acreditava que a civilização europeia estava em decadência devido à falta de religião.",
          "Porque ele demonstrou que as qualidades humanas não são dadas pela genética (raça), mas moldadas pelas inúmeras e valiosas trajetórias culturais (culturas).",
          "Porque ele defendia a volta da humanidade ao estado de natureza pura.",
          "Porque ele provou estatisticamente que apenas civilizações antigas, como as do Egito, mereciam o título de 'Cultura'."
        ],
        correct: 1,
        explanation: "Boas separou biologia de cultura, afirmando que não há sociedade mais ou menos avançada num caminho universal; as culturas constroem caminhos diversos e merecem ser respeitadas em sua pluralidade."
      },
      {
        question: "Qual o principal benefício metodológico do 'Relativismo Cultural' na pesquisa antropológica?",
        options: [
          "Ele estabelece uma nova hierarquia onde as culturas menos tecnológicas são consideradas moralmente superiores.",
          "Ele permite aos pesquisadores justificar toda e qualquer atrocidade humana sob a justificativa de que é 'tradição'.",
          "Ele exige que o pesquisador suspenda seus julgamentos pré-concebidos, permitindo compreender a cultura a partir dos valores do próprio grupo estudado.",
          "Ele comprova matematicamente que todos os hábitos alimentares ao redor do planeta são nutricionalmente equivalentes."
        ],
        correct: 2,
        explanation: "O relativismo cultural é fundamental para afastar o etnocentrismo do pesquisador, garantindo uma compreensão profunda do porquê o outro age de determinada maneira, baseando-se no contexto e na visão de mundo deles."
      },
      {
        question: "O que o trabalho inovador de Margaret Mead sobre adolescentes em Samoa conseguiu demonstrar para as Ciências Sociais?",
        options: [
          "Que as crises de rebeldia na adolescência são fenômenos estritamente hormonais e inevitáveis em qualquer lugar do mundo.",
          "Que os papéis de gênero, comportamentos e transições de fase da vida são majoritariamente construções culturais flexíveis, não imposições biológicas.",
          "Que a cultura samoana era superior à cultura americana, devendo ser copiada integralmente.",
          "Que adolescentes só se comportam bem quando há leis governamentais severas de punição criminal."
        ],
        correct: 1,
        explanation: "Mead evidenciou que a adolescência em Samoa não passava pelo mesmo estresse emocional intenso comum nos EUA, revelando a força determinante da cultura na modelagem da personalidade e das fases da vida."
      },
      {
        question: "A metáfora da cultura como uma 'lente' significa que:",
        options: [
          "O ser humano precisa de instrumentos científicos complexos para enxergar de forma objetiva.",
          "Apenas as culturas letradas conseguem observar os astros com telescópios.",
          "A nossa percepção de mundo não é neutra, mas filtrada através de valores, regras e tabus ensinados por nossa sociedade.",
          "As pessoas de diferentes culturas possuem capacidades oftalmológicas biologicamente diversas."
        ],
        correct: 2,
        explanation: "Nós interpretamos o mundo ao nosso redor — do que consideramos repulsivo ao que consideramos sagrado — através da 'lente' das regras e categorias culturais que internalizamos desde o nascimento."
      },
      {
        question: "Assinale a alternativa que melhor expressa o conflito ético contemporâneo que envolve o relativismo cultural extremo.",
        options: [
          "A dificuldade de aplicar relativismo a populações que falam mais de três idiomas ao mesmo tempo.",
          "A tensão constante entre o respeito incondicional às práticas de outras culturas e a defesa da universalidade dos Direitos Humanos.",
          "O custo financeiro insustentável de se treinar pesquisadores que aceitem todas as religiões mundiais de uma vez.",
          "A impossibilidade de usar métodos qualitativos com tribos isoladas."
        ],
        correct: 1,
        explanation: "Um grande debate moderno surge quando práticas tradicionais envolvem, por exemplo, a mutilação corporal severa. É aceitável interferir em nome dos Direitos Humanos Universais, ou o relativismo impede qualquer intervenção e crítica externa?"
      },
      {
        question: "Como as Ciências Sociais atuais compreendem a 'mudança cultural'?",
        options: [
          "Como um processo negativo que destrói a essência das culturas, que deveriam permanecer intactas e isoladas.",
          "Como uma ocorrência exclusiva da modernidade capitalista e da internet.",
          "Como um processo dinâmico e contínuo essencial a todas as sociedades, envolvendo criatividade humana, contatos e reconfigurações, sem invalidar a cultura.",
          "Como uma farsa inventada, visto que as sociedades indígenas permanecem absolutamente idênticas ao que eram há dez mil anos."
        ],
        correct: 2,
        explanation: "A antropologia contemporânea não acredita em culturas 'puras' ou estáticas. Toda cultura está em transformação devido às relações de poder, contatos interculturais e adaptação a novas realidades ao longo da história."
      }
    ],
    mindmap: {
      nodes: [
        { id: '1', data: { label: 'Conceito de Cultura' }, position: { x: 300, y: 0 } },
        { id: '2', data: { label: 'Franz Boas' }, position: { x: 100, y: 80 } },
        { id: '3', data: { label: 'Pluralismo Cultural' }, position: { x: 100, y: 160 } },
        { id: '4', data: { label: 'Relativismo x Etnocentrismo' }, position: { x: 500, y: 80 } },
        { id: '5', data: { label: 'Margaret Mead e R. Benedict' }, position: { x: 300, y: 80 } },
        { id: '6', data: { label: 'Cultura e Personalidade' }, position: { x: 300, y: 160 } },
        { id: '7', data: { label: 'Dinamismo e Mudança' }, position: { x: 500, y: 160 } },
        { id: '8', data: { label: 'Direitos Humanos' }, position: { x: 500, y: 240 } }
      ],
      edges: [
        { id: 'e1-2', source: '1', target: '2' },
        { id: 'e1-4', source: '1', target: '4' },
        { id: 'e1-5', source: '1', target: '5' },
        { id: 'e2-3', source: '2', target: '3' },
        { id: 'e5-6', source: '5', target: '6' },
        { id: 'e4-7', source: '4', target: '7' },
        { id: 'e4-8', source: '4', target: '8' }
      ]
    },
    videos: [
      { id: 'v1_cap2', title: 'Franz Boas e o Relativismo Cultural', description: 'Por que devemos analisar cada cultura a partir de seus próprios valores.', url: 'https://www.youtube.com/embed/placeholder_cap2_1', relatedSection: 'cap2-1' },
      { id: 'v2_cap2', title: 'O que é Etnocentrismo?', description: 'Exemplos práticos de etnocentrismo e como combatê-lo.', url: 'https://www.youtube.com/embed/placeholder_cap2_2', relatedSection: 'cap2-2' },
      { id: 'v3_cap2', title: 'Padrões Culturais e Identidade', description: 'Como Margaret Mead e Ruth Benedict estudaram o impacto da cultura.', url: 'https://www.youtube.com/embed/placeholder_cap2_3', relatedSection: 'cap2-3' }
    ]
  },
  cap3: {
    title: "Capítulo 3: Da estrutura à identidade",
    colorTheme: "cyan",
    illustration: imgStructure,
    illustrationAlt: "Ilustração abstrata de estrutura social com nós interconectados",
    sections: [
      {
        id: "cap3-1",
        heading: "A Perspectiva Funcionalista e Estrutural Inglesa",
        content: "A antropologia social britânica desenvolveu teorias robustas sobre a organização das sociedades, distanciando-se de interesses puramente históricos e focando no 'aqui e agora'. Sob a ótica de A.R. Radcliffe-Brown e Bronislaw Malinowski, as instituições de uma sociedade foram interpretadas por sua utilidade estrutural e coesiva.\n\nRadcliffe-Brown aprimorou o chamado 'Estrutural-Funcionalismo', adotando uma metáfora orgânica. Para ele, a sociedade funcionava como o corpo humano: assim como os órgãos vitais mantêm o corpo vivo, as instituições (como os tribunais, as religiões, o sistema familiar) são interdependentes e essenciais para a manutenção de um equilíbrio estrutural do corpo social.\n\nEsses estudiosos procuravam por leis sociais que explicavam a coesão. Eles se preocupavam fundamentalmente em responder à pergunta sociológica clássica: como as sociedades não se desintegram no caos e conseguem manter a estabilidade em suas estruturas políticas e de parentesco ao longo das gerações?",
        keyTerms: [
          { term: "Estrutural-Funcionalismo", definition: "Corrente teórica britânica que estuda a sociedade com foco em como as instituições se inter-relacionam para promover a harmonia e o equilíbrio da estrutura social como um todo." },
          { term: "A.R. Radcliffe-Brown", definition: "Proeminente antropólogo britânico que formalizou os conceitos de estrutura social e o uso da analogia orgânica nas análises sociológicas." },
          { term: "equilíbrio social", definition: "O estado no qual as várias partes da sociedade trabalham juntas para manter a ordem e a coesão coletiva." }
        ],
        pullQuote: "Assim como os órgãos mantêm um corpo vivo, as instituições mantêm a sociedade coesa e a salvo do caos e da desintegração.",
        extraNote: "Embora revolucionária para a época, a perspectiva britânica focada no equilíbrio logo seria criticada por estudiosos posteriores, por ignorar os conflitos sociais, as rebeliões e o papel histórico das mudanças nas estruturas de poder.",
        fact: { number: "1940", label: "Estrutura Social", caption: "Data da publicação clássica 'Sistemas Políticos Africanos', marco dos estudos sobre governança nativa pela escola britânica." },
        sectionIllustration: imgStructure,
        memoryAnchor: {
          icon: "cpu",
          title: "A Metáfora do Organismo Vivo",
          phrase: "Cada instituição é um órgão mantendo o sistema vivo e coeso.",
          metaphor: "A família, a escola e a justiça funcionam como o coração, os pulmões e os rins da sociedade para impedir o colapso."
        }
      },
      {
        id: "cap3-2",
        heading: "O Olhar dos Franceses: Aliança e Dádiva",
        content: "Paralelamente aos britânicos, a escola sociológica francesa, profundamente marcada por Émile Durkheim, gerou grandes inovações por meio de pensadores como Marcel Mauss. Em seu clássico 'Ensaio sobre a Dádiva' (1925), Mauss deslocou o foco da mera funcionalidade para entender como laços sociais profundos são gerados.\n\nEle descobriu que, nas sociedades tradicionais (e até mesmo nas modernas), as economias primitivas baseavam-se no imperativo moral da Dádiva: as obrigações fundamentais de dar, receber e retribuir. Dar presentes, festas ou bens não era um mero ato comercial neutro, mas uma política complexa desenhada para criar prestígio e estabelecer alianças de paz essenciais entre tribos.\n\nPosteriormente, Claude Lévi-Strauss aprofundou essa ideia, transformando-a no cerne da Teoria da Aliança para os sistemas de parentesco. Segundo ele, o tabu do incesto existe principalmente para obrigar as famílias a oferecerem seus membros (como filhas ou irmãs) para grupos externos. A troca cria alianças interdependentes que transformam bandos biológicos em uma sociedade humana baseada em regras culturais e matrimônios recíprocos.",
        keyTerms: [
          { term: "Dádiva", definition: "Um complexo sistema de trocas recíprocas e moralmente obrigatórias que forjam vínculos inquebráveis e posições de poder entre indivíduos e grupos." },
          { term: "Marcel Mauss", definition: "Sociólogo francês e sobrinho de Durkheim, demonstrou que a troca não é apenas econômica, mas um 'fato social total' que envolve política, religião e moral." },
          { term: "Teoria da Aliança", definition: "Teoria estruturalista de parentesco onde casamentos não se baseiam em procriação ou linhagem, mas na necessidade estrutural de forjar conexões políticas pacíficas entre grupos divergentes." }
        ],
        pullQuote: "O dom — ou a troca e retribuição de presentes — não é mera economia, mas o próprio tecido mágico e político que mantém as sociedades alinhadas e unidas.",
        extraNote: "A lógica da dádiva ainda opera fortemente em nossas vidas. A obrigação social moderna de retribuir um jantar quando somos convidados para comer na casa de amigos é um eco direto da teoria de Mauss.",
        fact: { number: "3", label: "Obrigações", caption: "Dar, receber e retribuir formam o círculo inquebrável da reciprocidade nas sociedades humanas." },
        sectionIllustration: imgDadiva,
        memoryAnchor: {
          icon: "bookmark",
          title: "A Tríplice Aliança da Dádiva",
          phrase: "Dar, receber e retribuir: um presente nunca é apenas um objeto, é uma aliança social.",
          metaphor: "Ao aceitar um presente de aniversário, você aceita também uma aliança invisível de retribuição que renova a amizade."
        }
      },
      {
        id: "cap3-3",
        heading: "A Escola de Manchester e o Estudo do Conflito",
        content: "As abordagens focadas apenas em equilíbrio ou em regras estruturais fixas enfrentaram seus limites nas décadas de 1950 e 1960. Antropólogos britânicos e sul-africanos, reunidos em torno de Max Gluckman na chamada Escola de Manchester, introduziram inovações radicais ao tratar do conflito não como falha do sistema, mas como parte integrante da estrutura social.\n\nEles observaram o impacto devastador e transformador da industrialização, da mineração e da expansão capitalista nas populações da África colonial. Pela primeira vez, antropólogos começaram a levar o contexto histórico e a mudança acelerada a sério.\n\nGluckman argumentava que o conflito e a rebelião (o descontentamento com indivíduos no poder e o choque entre diferentes etnias ou classes) são ferramentas normais da dinâmica de mudança, e que essas fraturas são frequentemente o próprio meio pelo qual a sociedade readapta sua coesão a novas realidades.",
        keyTerms: [
          { term: "Escola de Manchester", definition: "Grupo de pesquisadores em antropologia que priorizou a análise de redes sociais, processos históricos, e do conflito, focando muito na África industrializada." },
          { term: "Max Gluckman", definition: "Antropólogo inovador que compreendeu e teorizou que os atritos e rituais de rebelião fortalecem as estruturas sociopolíticas em vez de invariavelmente as destruírem." },
          { term: "mudança social", definition: "As profundas transições e transformações de regras e normas que ocorrem numa sociedade sob pressão de modernização ou embate colonial." }
        ],
        pullQuote: "O conflito não é necessariamente a destruição da sociedade; muitas vezes, ele é o próprio motor da mudança e readaptação das estruturas de poder.",
        extraNote: "A Escola de Manchester foi crucial no desenvolvimento de novos métodos metodológicos, como a Análise Situacional e a atenção aos dramas sociais complexos na modernidade.",
        fact: { number: "1950s", label: "Surgimento", caption: "A Escola de Manchester ganhou força no período pós-guerra, desafiando a estabilidade e o conservadorismo funcionalista clássico." },
        sectionIllustration: imgConflito,
        memoryAnchor: {
          icon: "cpu",
          title: "O Conflito como Motor Estrutural",
          phrase: "O conflito não destrói a sociedade: ele renegocia as regras e renova o sistema.",
          metaphor: "A válvula de escape de uma panela de pressão evita que ela exploda. O conflito social é a válvula de renovação do sistema."
        }
      },
      {
        id: "cap3-4",
        heading: "Fredrik Barth e as Fronteiras Étnicas",
        content: "Historicamente, grupos étnicos eram classificados de forma rígida baseando-se no que eles 'pareciam' possuir de forma fixa: sua língua isolada, religião singular ou território e roupas. Contudo, em 1969, o antropólogo norueguês Fredrik Barth revolucionou os estudos identitários na Antropologia ao publicar sua obra 'Grupos Étnicos e suas Fronteiras'.\n\nBarth sugeriu que a identidade cultural (ou etnicidade) não resulta de uma lista estática de traços que o grupo possui internamente. Em vez disso, a etnicidade é ativamente criada, gerida e negociada através do contato e da tensão com o 'outro'.\n\nAs fronteiras étnicas não são linhas territoriais geográficas, mas limites sociais de inclusão e exclusão. As pessoas de grupos étnicos moldam sua identidade enfatizando diferenças culturais seletivas para se oporem estrategicamente aos seus vizinhos. Esse olhar fluido influenciou fortemente a sociologia urbana, os movimentos sociais contemporâneos e o estudo da integração de minorias migrantes nas sociedades modernas.",
        keyTerms: [
          { term: "etnicidade", definition: "Um processo ativo e relacional de identificação cultural criado através de categorização e do contato prolongado com membros e não membros do grupo." },
          { term: "Fredrik Barth", definition: "Autor essencial que realocou o foco da antropologia dos traços isolados de uma cultura para a manutenção fluida das fronteiras entre grupos sociais." },
          { term: "fronteiras étnicas", definition: "Limites simbólicos, organizacionais e identitários mantidos através da demarcação de diferenças sociais contínuas em interação com outras etnias." }
        ],
        pullQuote: "A identidade cultural e étnica não mora no isolamento. Ela se acende e é gerida na interação contrastante, na oposição fluida contra o 'outro'.",
        extraNote: "Essa teoria mostra como os grupos étnicos modernos conseguem preservar sua essência identitária mesmo quando suas práticas externas mudam devido à modernização, pois o mais vital é manter a linha simbólica de filiação frente a terceiros.",
        fact: { number: "1969", label: "Obra Revolucionária", caption: "O lançamento do livro de Barth mudou definitivamente como as ciências compreendem os movimentos identitários globalmente." },
        sectionIllustration: imgFronteiras,
        memoryAnchor: {
          icon: "compass",
          title: "A Fronteira Viva de Fredrik Barth",
          phrase: "Identidade não é o conteúdo da mala cultural, é a linha desenhada no contato com o vizinho.",
          metaphor: "Uma ilha só se percebe como ilha porque há o mar ao redor. A identidade étnica nasce no contraste com o outro."
        }
      }
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    quiz: [
      {
        question: "A corrente teórica britânica do 'Estrutural-Funcionalismo' frequentemente utilizava uma metáfora fundamental para explicar a sociedade. Qual era essa metáfora?",
        options: [
          "A sociedade como um mecanismo de relógio que desmoronará em breve.",
          "A sociedade como uma teia de aranha que busca imobilizar o intelecto.",
          "A sociedade como um organismo vivo (como o corpo humano), onde suas instituições funcionam como órgãos vitais trabalhando interdependentes para a manutenção do equilíbrio total.",
          "A sociedade como um mercado de livre comércio eterno que não possui governo."
        ],
        correct: 2,
        explanation: "Inspirada em Radcliffe-Brown, a visão estrutural-funcionalista aplicou a ideia de que cada braço social, da lei ao parentesco, é responsável por funções indispensáveis para segurar a harmonia sistêmica, tal qual as vísceras corporais."
      },
      {
        question: "De acordo com Marcel Mauss, o sistema da Dádiva é caracterizado por qual princípio essencial?",
        options: [
          "O acúmulo avarento de riquezas financeiras e a evitação total de partilha com estrangeiros.",
          "As transações puramente governamentais baseadas na impressão da moeda em papel.",
          "O desinteresse verdadeiro pela retribuição e pelo poder diplomático e moral.",
          "O dever e a obrigação simultânea de dar generosamente, receber formalmente e, com o tempo, retribuir o ato à altura, construindo laços duráveis."
        ],
        correct: 3,
        explanation: "No Ensaio Sobre a Dádiva, Mauss observou que os presentes nunca são plenamente 'grátis'. Eles geram fortes e essenciais elos sociais através do trinômio das obrigações morais contínuas (dar, receber, retribuir) assegurando acordos."
      },
      {
        question: "Como Lévi-Strauss adaptou e revolucionou a ideia de troca das dádivas para sua 'Teoria da Aliança' aplicada ao parentesco humano?",
        options: [
          "Ele argumentou que apenas os líderes poderiam organizar casamentos por razões políticas sem que o resto da população participasse do arranjo.",
          "Ele explicou que a interdição (tabu) do incesto não visa evitar defeitos genéticos, mas força as famílias e irmãos a formarem pactos e casamentos com grupos externos, garantindo uma aliança fundamental para a estruturação cultural.",
          "Ele teorizou que casamentos e filiações eram regidos exclusivamente pelo subconsciente animalesco dos rituais ocidentais reprodutivos.",
          "Ele focou seu estudo apenas na biologia e genética sem se importar com pactos morais e tribais entre os noivos."
        ],
        correct: 1,
        explanation: "Para o Estruturalismo de Lévi-Strauss, ao não podermos casar com nossos próprios parentes, criamos e ofertamos alianças matrimoniais exogâmicas entre grupos distintos, as quais constroem teias políticas abrangentes que sustentam a sobrevivência coesa pacífica."
      },
      {
        question: "Qual aspecto da vida social os antropólogos da Escola de Manchester (como Max Gluckman) enfatizaram enormemente ao estudarem a realidade turbulenta africana e industrial moderna?",
        options: [
          "As danças primitivas puramente artísticas com conotações puramente emocionais de isolamento existencial.",
          "A necessidade absoluta de retorno aos padrões clássicos fixos de tranquilidade conservadora das mitologias passadas sem influência europeia.",
          "O foco contínuo e analítico no conflito, contradição e disputas históricas reais ocorrendo durante a mudança social acelerada provocada pelo colonialismo e trabalho mineral.",
          "O desprezo pelo mapeamento político para estudar apenas as linguagens e literaturas poéticas isoladas do continente."
        ],
        correct: 2,
        explanation: "Gluckman e seus pares entenderam que conflitos, brigas de poder e pressões do choque colonial capitalista (nas vilas da Rodésia/Zâmbia) eram os fatos dominantes essenciais — contrariando modelos estáticos que superenfatizavam o equilíbrio sem tensões."
      },
      {
        question: "Segundo Fredrik Barth, como deve ser entendida a 'Identidade Étnica' (Etnicidade)?",
        options: [
          "Um processo interacional e fronteiriço no qual o pertencimento e as diferenças são mobilizados estrategicamente na interação com o 'outro', e não apenas um pacote fixo de roupas, línguas ou crenças estanques.",
          "O exame profundo de laboratório do DNA ancestral passado que comprova que apenas raças originais possuem status na sociedade plural globalizada.",
          "O agrupamento aleatório imposto exclusivamente por governantes maliciosos, independentemente dos traços culturais partilhados por populações históricas unidas.",
          "Uma fase passageira da adolescência, similar aos desenvolvimentos e pesquisas de Margaret Mead para o povo de Samoa na mesma época da história intelectual."
        ],
        correct: 0,
        explanation: "Barth virou o jogo ao provar que os limites dos grupos sociais são fluídos e baseados no contraste relacional. Ou seja: as etnias gerenciam quem entra e sai baseando as distinções culturais necessárias e viáveis face aos vizinhos contatados."
      },
      {
        question: "Qual exemplo a seguir melhor reflete o princípio da Escola de Manchester que afirma que 'rituais de rebelião e pequenos conflitos frequentemente readaptam e fortalecem o sistema e suas ordens estruturais'?",
        options: [
          "Uma catástrofe climática global que leva à desintegração demográfica absoluta e fome irremediável por décadas, sem nenhuma esperança futura para restauro.",
          "O assassinato total e definitivo e exílio físico eterno de todos os governantes competentes e elites, esvaziando a capacidade criativa institucional da localidade afetada.",
          "Uma manifestação sindical massiva e organizada numa fábrica reivindicando melhores salários de forma regulamentada, canalizando a tensão popular de forma expressiva para prevenir um caos revolucionário maior no longo prazo.",
          "As observações sobre papéis de gênero feminino na infância estudadas em Nova Guiné pela Margaret Mead e analisadas pela teoria do funcionalismo clássico europeu."
        ],
        correct: 2,
        explanation: "Muitas das rebeliões, como greves e queixas comunitárias, são válvulas de escape; elas manifestam a insatisfação, mas são processadas de tal maneira que reforçam a própria lei geral da sociedade, evitando seu colapso catastrófico maior e permitindo a inovação sistêmica."
      }
    ],
    mindmap: {
      nodes: [
        { id: '1', data: { label: 'Identidade e Estrutura' }, position: { x: 300, y: 0 } },
        { id: '2', data: { label: 'Funcionalismo Britânico' }, position: { x: 100, y: 80 } },
        { id: '3', data: { label: 'Escola de Manchester' }, position: { x: 100, y: 180 } },
        { id: '4', data: { label: 'Gluckman / Conflito' }, position: { x: 100, y: 260 } },
        { id: '5', data: { label: 'Escola Francesa' }, position: { x: 300, y: 80 } },
        { id: '6', data: { label: 'Dádiva (Mauss)' }, position: { x: 300, y: 180 } },
        { id: '7', data: { label: 'Etnicidade' }, position: { x: 500, y: 80 } },
        { id: '8', data: { label: 'Fredrik Barth' }, position: { x: 500, y: 180 } }
      ],
      edges: [
        { id: 'e1-2', source: '1', target: '2' },
        { id: 'e1-5', source: '1', target: '5' },
        { id: 'e1-7', source: '1', target: '7' },
        { id: 'e2-3', source: '2', target: '3' },
        { id: 'e3-4', source: '3', target: '4' },
        { id: 'e5-6', source: '5', target: '6' },
        { id: 'e7-8', source: '7', target: '8' }
      ]
    },
    videos: [
      { id: 'v1_cap3', title: 'Funcionalismo vs Estruturalismo', description: 'Diferenças fundamentais entre as escolas teóricas inglesas e francesas.', url: 'https://www.youtube.com/embed/placeholder_cap3_1', relatedSection: 'cap3-1' },
      { id: 'v2_cap3', title: 'O Ensaio sobre a Dádiva (Marcel Mauss)', description: 'Dar, receber e retribuir: a lógica das trocas sociais.', url: 'https://www.youtube.com/embed/placeholder_cap3_2', relatedSection: 'cap3-2' },
      { id: 'v3_cap3', title: 'Fronteiras Étnicas (Fredrik Barth)', description: 'Como a identidade étnica é construída no contraste entre grupos.', url: 'https://www.youtube.com/embed/placeholder_cap3_3', relatedSection: 'cap3-3' }
    ]
  }
};
