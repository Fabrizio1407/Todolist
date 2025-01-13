class Task {
    constructor(nome,descrizione,dataScadenza,note) {
        this.nome = nome;
        this.descrizione = descrizione;
        this.dataScadenza = dataScadenza;
        this.note = note;
        this.status = false;
    }

    editStatus(status) {
        this.status = status;
    }
}

export default Task;