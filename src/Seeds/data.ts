interface Task {
    name: string;
    progress: number;
}

interface Project {
    id: number;
    title: string;
    subtitle: string;
    image: string;
    date: string;
    progress: number;
    link: string;
    price: number;
    dailyVariation: number;
    tasks: Task[];
    stage: 'Ideia' | 'Protótipo' | 'Testes' | 'Produção';
}

const data: Project[] = [
    {
        id: 1,
        title: "HyperVolt",
        subtitle: "Patinete Eletrico",
        image: "/assets/images/alva2.jpg",
        date: "2024-06-01T00:00:00.000Z",
        progress: 50,
        link: "https://example.com/projeto1",
        price: 1000,
        dailyVariation: 2.5,
        tasks: [
            { name: "Design do produto", progress: 80 },
            { name: "Desenvolvimento do motor", progress: 50 },
            { name: "Testes iniciais", progress: 30 }
        ],
        stage: 'Protótipo'
    },
    {
        id: 2,
        title: "Bicicleta Hibrida",
        subtitle: "HydroVolt",
        image: "/assets/images/alva2.jpg",
        date: "2024-06-15T00:00:00.000Z",
        progress: 75,
        link: "https://example.com/projeto2",
        price: 1500,
        dailyVariation: -1.2,
        tasks: [
            { name: "Pesquisa de mercado", progress: 100 },
            { name: "Desenvolvimento do quadro", progress: 75 },
            { name: "Integração do sistema elétrico", progress: 60 }
        ],
        stage: 'Testes'
    },
    {
        id: 3,
        title: "Projeto 3",
        subtitle: "Descrição do Projeto 3",
        image: "/assets/images/alva2.jpg",
        date: "2024-07-01T00:00:00.000Z",
        progress: 25,
        link: "https://example.com/projeto3",
        price: 800,
        dailyVariation: 0.5,
        tasks: [
            { name: "Planejamento inicial", progress: 20 },
            { name: "Desenvolvimento do conceito", progress: 30 },
            { name: "Testes preliminares", progress: 10 }
        ],
        stage: 'Ideia'
    }
];

export default data;
