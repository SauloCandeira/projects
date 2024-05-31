import React from 'react';
import { useParams } from 'react-router-dom';
import Countdown2 from '../../components/Countdown/Countdown2';
import MarketCap from '../../components/MarketCap/MarketCap';
import data from '../../Seeds/data';
import './Project.css'; // Importe o arquivo CSS para estilização

const stages = ['Ideia', 'Protótipo', 'Testes', 'Produção'];

const Project = () => {
    const { id } = useParams(); // Use o useParams para obter o ID do projeto a partir da URL
    const project = data.find(proj => proj.id === parseInt(id)); // Encontre o projeto com base no ID

    if (!project) {
        return <div>Projeto não encontrado</div>;
    }

    const currentStageIndex = stages.indexOf(project.stage);

    const handleGenerateReport = (reportType) => {
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
                <MarketCap price={project.price} dailyVariation={project.dailyVariation} />
                <progress value={project.progress} max="100" className="project-progress"></progress>
                <span className="progress-percentage">{project.progress}%</span>
                <h2>Estágio do Projeto: {project.stage}</h2>
                <div className="timeline">
                    {stages.map((stage, index) => (
                        <div className="timeline-stage" key={index}>
                            <div
                                className={`timeline-circle ${
                                    index <= currentStageIndex ? 'completed' : ''
                                } ${stage === project.stage ? 'active' : ''}`}
                            ></div>
                            <span className="timeline-label">{stage}</span>
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
                        {project.tasks.map((task, index) => (
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
                    <button className="report-button" onClick={() => handleGenerateReport('Plano de Negócio')}>Plano de Negócio</button>
                    <button className="report-button" onClick={() => handleGenerateReport('Relatórios Contábeis')}>Relatórios Contábeis</button>
                    <button className="report-button" onClick={() => handleGenerateReport('Investimentos')}>Investimentos</button>
                    <button className="report-button" onClick={() => handleGenerateReport('Pitch')}>Pitch</button>
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

export default Project;
