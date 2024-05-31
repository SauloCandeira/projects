import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Countdown2 from '../../components/Countdown/Countdown2';
import MarketCap from '../../components/MarketCap/MarketCap';
import data, { Project } from '../../Seeds/InterfaceProject';
import './ProjectDetails.css'; // Importe o arquivo CSS para estilização

const stages = [
    { id: 1, name: 'Ideia' },
    { id: 2, name: 'Protótipo' },
    { id: 3, name: 'Testes' },
    { id: 4, name: 'Produção' }
];

const ProjectDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>(); // Use o useParams para obter o ID do projeto a partir da URL
    const project: Project | undefined = data.find(proj => proj.id === parseInt(id)); // Encontre o projeto com base no ID

    if (!project) {
        return <div>Projeto não encontrado</div>;
    }

    const [selectedStage, setSelectedStage] = useState<string | null>(project.stage.stage_ref); // Estágio selecionado na timeline
    const [stageCompletion, setStageCompletion] = useState<number[]>([]); // Porcentagem de conclusão de cada estágio

    useEffect(() => {
        // Calcula a porcentagem de conclusão de cada estágio
        const calculateStageCompletion = () => {
            const completionArray: number[] = [];
            stages.forEach((stage, index) => {
                const filteredTasks = project.tasks.filter(task => task.id_stage === index + 1);
                const totalProgress = filteredTasks.reduce((acc, task) => acc + task.progress, 0);
                const stageProgress = filteredTasks.length > 0 ? Math.round(totalProgress / filteredTasks.length) : 0;
                completionArray.push(stageProgress);
            });
            setStageCompletion(completionArray);
        };

        calculateStageCompletion();
    }, [project.tasks]);

    const handleStageClick = (stage: string, stageId: number) => {
        setSelectedStage(stage);
        console.log("Stage ID:", stageId); // Exibe o ID do estágio ao clicar
    };

    const currentStageIndex = stages.findIndex(stage => stage.name === selectedStage); // Índice do estágio selecionado

    const handleGenerateReport = (reportType: string) => {
        // Aqui você pode adicionar a lógica para gerar e baixar o relatório
        console.log(`Gerando relatório: ${reportType}`);
        alert(`Gerando relatório: ${reportType}`);
    };

    return (
        <div className="project-details">
            <h1>{project.title}</h1>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
                <p>{project.subtitle}</p>
                <Countdown2 data={project.date} title={project.title} />
                <MarketCap price={project.salePrice} dailyVariation={project.dailyVariation} />
                <progress value={project.progress} max="100" className="project-progress"></progress>
                <span className="progress-percentage">{project.progress}%</span>
                <h2>Estágio do Projeto: {project.stage.name}</h2>
                <div className="timeline">
                    {stages.map((stage, index) => (
                        <div
                            className={`timeline-stage ${stage.name === selectedStage ? 'selected' : ''}`}
                            key={index}
                            onClick={() => handleStageClick(stage.name, stage.id)}
                        >
                            <div
                                className={`timeline-circle ${
                                    index < currentStageIndex ? 'completed' : ''
                                } ${stage.name === selectedStage ? 'active' : ''}`}
                            ></div>
                            <span className="timeline-label">{stage.name}</span>
                            {/* Exibe a porcentagem de conclusão de cada estágio */}
                            <span className="task-percentage">{stageCompletion[index]}% concluído</span>
                        </div>
                    ))}
                </div>
                <h3>Tarefas do Projeto</h3>
                <table className="project-tasks">
                    <thead>
                        <tr>
                            <th>Tarefa</th>
                            <th>Progresso</th>
                        </tr>
                    </thead>
                    <tbody>
                        {project.tasks
                            .filter(task => task.id_stage === currentStageIndex + 1) // Filtra as tarefas pelo estágio selecionado
                            .map((task, index) => (
                                <tr key={index}>
                                    <td>{task.name}</td>
                                    <td>
                                        <progress value={task.progress} max="100"></progress>
                                        <span className="task-progress-percentage">{task.progress}%</span>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
                <div className="buttons-container">
                    <button className="report-button" onClick={() => handleGenerateReport('Plano de Negócio')}>
                        Plano de Negócio
                    </button>
                    <button className="report-button" onClick={() => handleGenerateReport('Relatórios Contábeis')}>
                        Relatórios Contábeis
                    </button>
                    <button className="report-button" onClick={() => handleGenerateReport('Investimentos')}>
                        Investimentos
                    </button>
                    <button className="report-button" onClick={() => handleGenerateReport('Pitch')}>
                        Pitch
                    </button>
                </div>
            </div>
            <div className="btn">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <button>Ver mais</button>
                </a>
            </div>
        </div>
    );
};

export default ProjectDetails;
