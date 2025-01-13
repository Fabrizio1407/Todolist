

class Servizio {
    constructor() {
        this.projects = [];
    }

    addProject(project) {
        this.projects.push(project);
    }

    removeProject(project) {
        this.projects.filter((proj) => proj.nome!=project);
    }
}

export default Servizio;

