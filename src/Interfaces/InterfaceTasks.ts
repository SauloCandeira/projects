// Representa um tipo de estágio com id, nome e referência de estágio.

interface Task {
    id?: number; // Id opcional para tarefas que ainda não foram salvas no banco de dados.
    id_stage: number; // Id do estágio associado à tarefa.
    id_status?: number; // Id do status associado à tarefa.
    name: string; // Nome da tarefa.
    progress: number; // Progresso da tarefa (0-100).
}


export interface TaskStage {
    id: number;
    name: string;
    stage_ref: 'Ideia' | 'Protótipo' | 'Testes' | 'Produção';
}

// Representa um status de tarefa com id, nome e referência de estágio.
export interface TaskStatus {
    id: number;
    name: string;
    status_ref: 'Não iniciado' | 'Pausado' | 'Em andamento' | 'Atrasado' | 'Completo';
}

// Dados de exemplo para popular as interfaces TaskStage e TaskStatus
export const taskStages: TaskStage[] = [
    { id: 1, name: 'Ideia', stage_ref: 'Ideia' },
    { id: 2, name: 'Protótipo', stage_ref: 'Protótipo' },
    { id: 3, name: 'Testes', stage_ref: 'Testes' },
    { id: 4, name: 'Produção', stage_ref: 'Produção' }
];

export const taskStatuses: TaskStatus[] = [
    { id: 1, name: 'Não iniciado', status_ref: 'Não iniciado' },
    { id: 2, name: 'Pausado', status_ref: 'Pausado' },
    { id: 3, name: 'Em andamento', status_ref: 'Em andamento' },
    { id: 4, name: 'Atrasado', status_ref: 'Atrasado' },
    { id: 5, name: 'Completo', status_ref: 'Completo' }
];
