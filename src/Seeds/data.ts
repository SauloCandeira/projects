interface Project {
    id: number;
    title: string;
    subtitle: string;
    image: string;
    date: string;
    progress: number;
    link: string;
}

const data: Project[] = [
    {
        id: 1,
        title: "Projeto 1",
        subtitle: "Descrição do Projeto 1",
        image: "/assets/images/alva2.jpg",
        date: "2024-06-01T00:00:00.000Z",
        progress: 50,
        link: "https://example.com/projeto1"
    },
    {
        id: 2,
        title: "Projeto 2",
        subtitle: "Descrição do Projeto 2",
        image: "/assets/images/alva2.jpg",
        date: "2024-06-15T00:00:00.000Z",
        progress: 75,
        link: "https://example.com/projeto2"
    },
    {
        id: 3,
        title: "Projeto 3",
        subtitle: "Descrição do Projeto 3",
        image: "/assets/images/alva2.jpg",
        date: "2024-07-01T00:00:00.000Z",
        progress: 25,
        link: "https://example.com/projeto3",
    }
];

export default data;
