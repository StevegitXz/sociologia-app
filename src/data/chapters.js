// Illustration imports (Vite handles these as URLs)
import imgSociety from '../assets/illustrations/society.png';
import imgAnthropology from '../assets/illustrations/anthropology.png';
import imgCulture from '../assets/illustrations/culture.png';
import imgStructure from '../assets/illustrations/structure.png';

export const chaptersData = {
  intro: {
    title: "Introdução: O olhar sociológico sobre o cotidiano",
    illustration: imgSociety,
    illustrationAlt: "Ilustração abstrata de conexões sociais entre pessoas",
    sections: [
      {
        id: "intro-1",
        heading: "O que é a sociedade?",
        content: "A sociedade vai muito além de normas e concentração de poder. A convivência social dá sentido ao cotidiano das pessoas. As Ciências Sociais buscam entender como acontece essa vida em sociedade: as formas de convivência, a criação de desejos, os conflitos e como as sociedades mudam ao longo do tempo.",
        keyTerms: [
          { term: "Ciências Sociais", definition: "Conjunto de disciplinas (Sociologia, Antropologia, Ciência Política) que estudam o comportamento humano em sociedade." },
          { term: "convivência social", definition: "O viver junto — as interações, relações e vínculos entre indivíduos e grupos na vida cotidiana." }
        ],
        pullQuote: "A convivência social dá sentido ao cotidiano das pessoas.",
        extraNote: "As Ciências Sociais se dividem em três grandes áreas: a Sociologia (estudo das estruturas sociais), a Antropologia (estudo das culturas e diversidade humana) e a Ciência Política (estudo das relações de poder e do Estado).",
        fact: { number: "3", label: "Grandes Áreas", caption: "Sociologia, Antropologia e Ciência Política formam as Ciências Sociais." }
      },
      {
        id: "intro-2",
        heading: "A vida em sociedade e a Desnaturalização",
        content: "Um dos objetivos das Ciências Sociais é desenvolver o pensamento crítico, ou seja, a habilidade de desvendar mecanismos que parecem naturais, mas não são. A desnaturalização nos ajuda a perceber que as regras e papéis na sociedade (como o trabalho doméstico associado a mulheres historicamente) são construções sociais e passíveis de mudança.",
        keyTerms: [
          { term: "desnaturalização", definition: "Processo de questionar aquilo que a sociedade trata como 'natural' ou 'normal', revelando que são construções históricas e culturais." },
          { term: "pensamento crítico", definition: "Capacidade de analisar, questionar e avaliar informações e situações em vez de aceitá-las passivamente." },
          { term: "construções sociais", definition: "Ideias, normas, papéis e instituições criadas coletivamente pela sociedade, e não pela natureza." }
        ],
        pullQuote: "Aquilo que parece natural é, na verdade, uma construção histórica passível de mudança.",
        extraNote: "Um exemplo clássico de desnaturalização: por séculos, o trabalho doméstico foi considerado 'naturalmente feminino'. A sociologia mostra que essa associação é uma construção social reforçada por instituições como a família, a escola e a mídia."
      },
      {
        id: "intro-3",
        heading: "Como funcionam as Ciências Sociais?",
        content: "As Ciências Sociais operam por meio de conceitos precisos e métodos de pesquisa (qualitativos e quantitativos). Diferente do senso comum, o conhecimento científico busca analisar dados reais para distinguir opiniões de fatos e reconhecer discursos ideológicos.",
        keyTerms: [
          { term: "senso comum", definition: "Conhecimento prático e cotidiano, baseado em experiências pessoais e crenças compartilhadas, sem rigor científico." },
          { term: "qualitativos", definition: "Métodos de pesquisa que analisam significados, experiências e comportamentos (ex: entrevistas, etnografia)." },
          { term: "quantitativos", definition: "Métodos de pesquisa que usam dados numéricos e estatísticos (ex: censos, surveys, questionários)." }
        ],
        extraNote: "A pesquisa qualitativa busca entender o 'porquê' e o 'como' dos fenômenos sociais (por exemplo, entrevistas em profundidade). A pesquisa quantitativa mede o 'quanto' (por exemplo, pesquisas de opinião com milhares de entrevistados).",
        fact: { number: "≠", label: "Senso Comum vs. Ciência", caption: "A ciência usa métodos rigorosos para ir além das opiniões do dia a dia." }
      }
    ],
    videoUrl: "https://www.youtube.com/embed/5r3G9y5sDkE",
    quiz: [
      {
        question: "Qual o principal objetivo da desnaturalização nas Ciências Sociais?",
        options: [
          "Aceitar o mundo exatamente como ele é.",
          "Perceber que tudo o que existe na sociedade é obra exclusiva da natureza.",
          "Compreender que as regras, papéis e relações sociais são construções históricas e podem ser questionadas.",
          "Decorar leis políticas sem questionar."
        ],
        correct: 2
      }
    ],
    mindmap: {
      nodes: [
        { id: '1', data: { label: 'Ciências Sociais' }, position: { x: 250, y: 0 } },
        { id: '2', data: { label: 'Desnaturalização' }, position: { x: 100, y: 100 } },
        { id: '3', data: { label: 'Pensamento Crítico' }, position: { x: 400, y: 100 } },
      ],
      edges: [
        { id: 'e1-2', source: '1', target: '2' },
        { id: 'e1-3', source: '1', target: '3' },
      ]
    }
  },
  cap1: {
    title: "Capítulo 1: O pensamento antropológico",
    illustration: imgAnthropology,
    illustrationAlt: "Ilustração abstrata de pensamento antropológico com símbolos culturais",
    sections: [
      {
        id: "cap1-1",
        heading: "A construção do pensamento antropológico",
        content: "O avanço colonialista europeu sobre as Américas, África e Ásia (séc. XVI em diante) gerou a necessidade de conhecer as populações nativas. Os europeus passaram a estudar esses povos para dominá-los, convertê-los e explorar riquezas, mas esse contato inicial também formou a base para os primeiros estudos antropológicos.",
        keyTerms: [
          { term: "colonialista", definition: "Relativo ao colonialismo — sistema de dominação política, econômica e cultural de um povo sobre outro." },
          { term: "antropológicos", definition: "Relativos à Antropologia — ciência que estuda a diversidade cultural humana, seus costumes, crenças e estruturas sociais." }
        ],
        pullQuote: "O encontro entre culturas, ainda que marcado pela dominação, plantou a semente da Antropologia.",
        fact: { number: "XVI", label: "Século do contato", caption: "O colonialismo europeu a partir do séc. XVI impulsionou os primeiros estudos sobre outros povos." }
      },
      {
        id: "cap1-2",
        heading: "Evolucionismo Social",
        content: "No século XIX, predominou o Evolucionismo Social (Lewis Henry Morgan, Edward Tylor). Acreditava-se em uma escala única de evolução: Selvageria → Barbárie → Civilização (sociedade europeia). Essa visão etnocêntrica justificou a dominação e exploração de outros povos em nome do 'progresso'.",
        keyTerms: [
          { term: "Evolucionismo Social", definition: "Teoria do séc. XIX que classificava as sociedades em uma escala linear de 'desenvolvimento', com a Europa no topo." },
          { term: "etnocêntrica", definition: "Visão de mundo que considera a própria cultura como superior e padrão de referência para julgar as outras." }
        ],
        pullQuote: "A crença numa escala de evolução — selvageria, barbárie, civilização — serviu para justificar a exploração de povos inteiros.",
        extraNote: "Lewis Henry Morgan (1818–1881) propôs a teoria de que todas as sociedades passariam pelas mesmas etapas de desenvolvimento. Edward Tylor (1832–1917) definiu cultura como 'o todo complexo' que inclui conhecimento, crenças, arte, moral, lei e costumes."
      },
      {
        id: "cap1-3",
        heading: "Resistência e Mitos (Estruturalismo)",
        content: "Posteriormente, estudiosos como Claude Lévi-Strauss mostraram, através do Estruturalismo, que mitos e narrativas indígenas demonstram um pensamento humano altamente sofisticado. Hoje, a luta dos povos indígenas no Brasil é marcada por resistência em defesa de suas terras e diversidade cultural.",
        keyTerms: [
          { term: "Estruturalismo", definition: "Corrente teórica que busca identificar as estruturas inconscientes que organizam o pensamento e a cultura humana." },
          { term: "Lévi-Strauss", definition: "Claude Lévi-Strauss (1908–2009), antropólogo francês, fundador da antropologia estrutural." }
        ],
        extraNote: "Lévi-Strauss demonstrou que o 'pensamento selvagem' é tão lógico e complexo quanto o pensamento científico ocidental — ele apenas opera com categorias diferentes (como natureza, animais e plantas em vez de conceitos abstratos)."
      }
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    quiz: [
      {
        question: "Segundo o Evolucionismo Social do século XIX, como a história da humanidade era vista?",
        options: [
          "Como um processo de diversidade onde não há superiores.",
          "Como uma escala evolutiva linear (selvageria, barbárie, civilização).",
          "Como um ciclo infinito de repetição.",
          "Como uma invenção política recente."
        ],
        correct: 1
      }
    ],
    mindmap: {
      nodes: [
        { id: '1', data: { label: 'Antropologia Clássica' }, position: { x: 250, y: 0 } },
        { id: '2', data: { label: 'Evolucionismo Social' }, position: { x: 100, y: 100 } },
        { id: '3', data: { label: 'Estruturalismo' }, position: { x: 400, y: 100 } },
      ],
      edges: [
        { id: 'e1-2', source: '1', target: '2' },
        { id: 'e1-3', source: '1', target: '3' },
      ]
    }
  },
  cap2: {
    title: "Capítulo 2: O conceito de cultura",
    illustration: imgCulture,
    illustrationAlt: "Ilustração abstrata de mosaico representando diversidade cultural",
    sections: [
      {
        id: "cap2-1",
        heading: "Civilização vs. Cultura",
        content: "Franz Boas foi fundamental ao criticar a ideia de uma escala evolutiva única. Ele propôs pensar em 'culturas' no plural e não em uma 'civilização' padrão. Desenvolveu o conceito de relativismo cultural: uma posição que defende que cada cultura deve ser analisada nos seus próprios termos.",
        keyTerms: [
          { term: "Franz Boas", definition: "Antropólogo alemão-americano (1858–1942), considerado o 'pai da antropologia moderna' por combater o racismo científico." },
          { term: "relativismo cultural", definition: "Princípio de que cada cultura deve ser compreendida a partir de seus próprios valores e contexto, sem julgamentos externos." }
        ],
        pullQuote: "Pensar em 'culturas' no plural — e não em uma 'civilização' padrão — foi a revolução de Franz Boas.",
        fact: { number: "∞", label: "Culturas, não Civilização", caption: "Boas propôs que existem infinitas formas válidas de organizar a vida em sociedade." }
      },
      {
        id: "cap2-2",
        heading: "Relativismo e Etnocentrismo",
        content: "O etnocentrismo é julgar outras culturas usando os padrões da sua própria cultura como superiores. O relativismo cultural de Boas ajudou a combater isso. Contudo, o relativismo extremo pode ser um impasse (ex: aceitar mutilações ou violência como 'aspecto cultural' sem críticas de direitos humanos).",
        keyTerms: [
          { term: "etnocentrismo", definition: "Tendência de avaliar outras culturas a partir dos valores e normas da própria cultura, considerando-a superior." },
          { term: "direitos humanos", definition: "Direitos fundamentais e universais de todo ser humano, independente de cultura, raça, gênero ou religião." }
        ],
        extraNote: "O debate entre relativismo e universalismo é um dos mais importantes das ciências sociais: até que ponto devemos respeitar práticas culturais que violam direitos humanos? Não há resposta simples, mas o diálogo é essencial."
      },
      {
        id: "cap2-3",
        heading: "Padrões Culturais",
        content: "Antropólogas como Margaret Mead e Ruth Benedict mostraram que as personalidades e comportamentos humanos são, na verdade, moldados por 'padrões culturais' específicos de cada sociedade. Aquilo que consideramos natural é frequentemente um costume cultural internalizado.",
        keyTerms: [
          { term: "Margaret Mead", definition: "Antropóloga americana (1901–1978), estudou como a cultura molda o comportamento, especialmente em relação a gênero e sexualidade." },
          { term: "padrões culturais", definition: "Conjunto de comportamentos, valores e normas compartilhados que caracterizam uma sociedade e são aprendidos socialmente." }
        ],
        pullQuote: "Aquilo que consideramos 'natural' é frequentemente um costume cultural internalizado.",
      }
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    quiz: [
      {
        question: "O que é o Relativismo Cultural segundo Franz Boas?",
        options: [
          "A ideia de que a cultura europeia deve ser o modelo absoluto.",
          "A noção de que todas as raças humanas possuem a mesma biologia, sem influenciar a cultura.",
          "A posição de que cada cultura deve ser analisada e compreendida a partir de seus próprios termos e valores.",
          "A teoria que divide o ser humano em escalas."
        ],
        correct: 2
      }
    ],
    mindmap: {
      nodes: [
        { id: '1', data: { label: 'Cultura' }, position: { x: 250, y: 0 } },
        { id: '2', data: { label: 'Etnocentrismo' }, position: { x: 100, y: 100 } },
        { id: '3', data: { label: 'Relativismo' }, position: { x: 400, y: 100 } },
      ],
      edges: [
        { id: 'e1-2', source: '1', target: '2' },
        { id: 'e1-3', source: '1', target: '3' },
      ]
    }
  },
  cap3: {
    title: "Capítulo 3: Da estrutura à identidade",
    illustration: imgStructure,
    illustrationAlt: "Ilustração abstrata de estrutura social com nós interconectados",
    sections: [
      {
        id: "cap3-1",
        heading: "A perspectiva inglesa (Funcionalismo)",
        content: "Autores como Bronislaw Malinowski desenvolveram o método etnográfico (trabalho de campo). Ele via a cultura como algo que tem uma função: responder a necessidades básicas humanas. Já Radcliffe-Brown focava na estrutura social, comparando a sociedade a um organismo onde cada parte tem uma função.",
        keyTerms: [
          { term: "método etnográfico", definition: "Técnica de pesquisa que envolve conviver com um grupo social por longo período, observando e participando de sua vida cotidiana." },
          { term: "Funcionalismo", definition: "Teoria que vê a sociedade como um sistema onde cada elemento (família, religião, economia) cumpre uma função para manter o todo." }
        ],
        pullQuote: "A sociedade é como um organismo: cada parte tem uma função essencial para manter o todo vivo.",
        fact: { number: "🏝️", label: "Trabalho de Campo", caption: "Malinowski viveu anos nas Ilhas Trobriand, inaugurando a etnografia moderna." }
      },
      {
        id: "cap3-2",
        heading: "O olhar dos franceses",
        content: "Marcel Mauss estudou as trocas, argumentando (em Ensaio sobre a dádiva) que a sociedade estabelece relações de aliança pelo dever de 'dar, receber e retribuir'. Lévi-Strauss focou nas regras inconscientes que estruturam a mente e o parentesco humano.",
        keyTerms: [
          { term: "Marcel Mauss", definition: "Sociólogo e antropólogo francês (1872–1950), sobrinho de Durkheim, autor de obras fundamentais sobre trocas e corpo." },
          { term: "dádiva", definition: "Sistema de trocas baseado na obrigação social de dar, receber e retribuir — não é apenas econômico, mas cria vínculos sociais." }
        ],
        extraNote: "No 'Ensaio sobre a Dádiva' (1925), Mauss mostra que em muitas sociedades, as trocas de presentes criam obrigações mútuas que mantêm a coesão social. Não se trata apenas de economia, mas de um sistema de alianças."
      },
      {
        id: "cap3-3",
        heading: "A escola de Manchester e Etnicidade",
        content: "A Escola de Manchester (Max Gluckman) estudou os impactos da expansão capitalista nas sociedades africanas. Fredrik Barth passou a analisar a etnicidade não apenas como traços culturais, mas como fronteiras desenhadas nas interações e conflitos entre diferentes grupos. Surgem os estudos de minorias étnicas e movimentos sociais.",
        keyTerms: [
          { term: "etnicidade", definition: "Identidade de um grupo baseada em características culturais compartilhadas (língua, costumes, história), construída nas interações sociais." },
          { term: "Fredrik Barth", definition: "Antropólogo norueguês (1928–2016), revolucionou o estudo da etnicidade ao focar nas fronteiras entre grupos, não nos traços internos." }
        ],
        pullQuote: "A etnicidade não é um traço fixo — é uma fronteira desenhada nas interações entre grupos.",
        fact: { number: "↔", label: "Fronteiras Étnicas", caption: "Barth mostrou que a identidade étnica se define pelo contraste com o 'outro', não por traços isolados." }
      }
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    quiz: [
      {
        question: "Segundo Marcel Mauss, no Ensaio sobre a dádiva, qual o sistema fundamental para estabelecer relações na sociedade?",
        options: [
          "A imposição bélica.",
          "O isolamento geográfico.",
          "A obrigação de dar, receber e retribuir.",
          "O comércio capitalista."
        ],
        correct: 2
      }
    ],
    mindmap: {
      nodes: [
        { id: '1', data: { label: 'Identidade e Estrutura' }, position: { x: 250, y: 0 } },
        { id: '2', data: { label: 'Funcionalismo' }, position: { x: 100, y: 100 } },
        { id: '3', data: { label: 'Dádiva' }, position: { x: 250, y: 100 } },
        { id: '4', data: { label: 'Etnicidade' }, position: { x: 400, y: 100 } },
      ],
      edges: [
        { id: 'e1-2', source: '1', target: '2' },
        { id: 'e1-3', source: '1', target: '3' },
        { id: 'e1-4', source: '1', target: '4' },
      ]
    }
  }
};
