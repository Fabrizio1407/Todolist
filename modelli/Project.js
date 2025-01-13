class Project {
    constructor(nome) {
        this.nome = nome;
        this.tasks = [];
    }

    addTask(task) {
       this.tasks.push(task);
    }
    
    removeTask(task) {
        this.tasks.filter((item) => item.id!=task);
    }
}

export default Project;