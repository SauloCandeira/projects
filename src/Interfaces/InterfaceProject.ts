interface Task {
    id?: number; // Id opcional para tarefas que ainda não foram salvas no banco de dados.
    id_stage: number; // Id do estágio associado à tarefa.
    id_status?: number; // Id do status associado à tarefa.
    name: string; // Nome da tarefa.
    progress: number; // Progresso da tarefa (0-100).
}

interface MarketCapProps {
    totalCost: number; // Custo total
    totalSales: number; // Total de vendas
    dailyVariation: number; // Variação diária do preço
}

interface Cost {
    id: number; // Id do custo.
    price: number; // Preço do custo.
    name: string; // Nome do custo.
}

interface Sale {
    id: number; // Id da venda.
    price: number; // Preço da venda.
    name: string; // Nome da venda.
}

interface Budget {
    id: number; // Id do orçamento.
    cost: Cost[]; // Lista de custos associados ao orçamento.
    sale: Sale[]; // Lista de vendas associadas ao orçamento.
    totalCost: number; // Custo total.
    totalSales: number; // Total de vendas.
    profit: number; // Lucro calculado.
}

interface Stage {
    id_stage: number; // Id do estágio.
    name: string; // Nome do estágio.
    stage_ref: 'Ideia' | 'Protótipo' | 'Testes' | 'Produção'; // Referência do estágio.
}

interface Status {
    id_status: number; // Id do status.
    name: string; // Nome do status.
    status_ref: 'Não iniciado' | 'Pausado' | 'Em andamento' | 'Atrasado' | 'Completo'; // Referência do status.
}

export interface Project {
    id: number;
    title: string;
    subtitle: string;
    date: string;
    image: string;
    progress: number;
    stage: Stage;
    tasks: Task[];
    salePrice: number;
    dailyVariation: number;
    link: string;
    budget: Budget; // Adicionando a propriedade budget à interface Project
    marketCap: number;
}

function calculateProfit(totalCost: number, totalSales: number): number {
    return totalSales - totalCost;
}

function calculateTotalCost(costs: Cost[]): number {
    return costs.reduce((sum, cost) => sum + cost.price, 0);
}

function calculateTotalSales(sales: Sale[]): number {
    return sales.reduce((sum, sale) => sum + sale.price, 0);
}

function calculateTotalProgress(tasks: Task[]): number {
    if (tasks.length === 0) return 0;
    const totalProgress = tasks.reduce((sum, task) => sum + task.progress, 0);
    return totalProgress / tasks.length;
}

export const data: Project[] = [
    {
        id: 1,
        title: "Orange - HyperVolt",
        subtitle: "Electric Scooter",
        image: "/assets/images/alva2.jpg",
        date: "2024-06-01T00:00:00.000Z",
        progress: calculateTotalProgress([
            { id: 1, name: "Design do produto", progress: 80, id_stage: 2, id_status: 3 },
            { id: 2, name: "Desenvolvimento do motor", progress: 50, id_stage: 2, id_status: 3 },
            { id: 3, name: "Testes iniciais", progress: 30, id_stage: 2, id_status: 3 }
        ]),
        link: "https://example.com/projeto1",
        dailyVariation: 2.5,
        tasks: [
            { id: 1, name: "Design do produto", progress: 80, id_stage: 2, id_status: 3 },
            { id: 2, name: "Desenvolvimento do motor", progress: 50, id_stage: 2, id_status: 3 },
            { id: 3, name: "Testes iniciais", progress: 30, id_stage: 2, id_status: 3 },
            { id: 3, name: "Testes iniciais", progress: 30, id_stage: 1, id_status: 2 }
        ],
        stage: { id_stage: 2, name: 'Protótipo', stage_ref: 'Protótipo' },
        salePrice: 1000,
        budget: {
            id: 1,
            cost: [{ id: 1, price: 800, name: 'Custo de produção' }],
            sale: [{ id: 1, price: 1000, name: 'Preço de venda' }],
            totalCost: calculateTotalCost([{ id: 1, price: 800, name: 'Custo de produção' }]),
            totalSales: calculateTotalSales([{ id: 1, price: 1000, name: 'Preço de venda' }]),
            profit: calculateProfit(
                calculateTotalCost([{ id: 1, price: 800, name: 'Custo de produção' }]),
                calculateTotalSales([{ id: 1, price: 1000, name: 'Preço de venda' }])
            )
        },
        marketCap: 50000
    }
];
