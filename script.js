import Project from "./modelli/Project";
import Servizio from "./Servizio";
import Rendering from "./Rendering";

  // crea un oggetto che contenga chiavi e valori, questi ultimi sono gli id.
  // dalla classe ti crei (trasferisci tutto questo) le costanti con i riferimenti al DOM

const aggiungi = document.getElementById("add-task");
const addProject = document.querySelector("#add-project");
const projSidebar = document.querySelector(".sidebar-header");
const projContainer = document.querySelector(".projectcontainer");
const sidebarBody = document.querySelector(".sidebar-body");

const ulListaAttivita = document.getElementById("task-list");
const inputAttivita = document.getElementById("activity");

aggiungi.addEventListener("click", addTask);

addProject.addEventListener("click", addProjInput);

const servizio = new Servizio();
const rendering = new Rendering(servizio.projects, sidebarBody);


let listaAttivita = [];

function addProjInput() {
  const projInput = document.createElement("input");
  projInput.classList.add("input");
  projInput.placeholder="Nome progetto";
  sidebarBody.appendChild(projInput);

  projInput.addEventListener("keydown", (event) => {
    if (event.key=="Enter") {
       servizio.addProject(projInput.value);

    }
  })
}



function addTask() 
{


  listaAttivita.push({nome: inputAttivita.value, stato: ""});

    
  
    const li = document.createElement("li");
    li.textContent = inputAttivita.value;
    li.id="task"+listaAttivita.length;
    li.className="task";
    ulListaAttivita.appendChild(li);

    

    const rimuovi = document.createElement("button");
    const id = listaAttivita.length;
    li.appendChild(rimuovi);
    rimuovi.textContent="X";
    rimuovi.className="removeTask";
    rimuovi.id="deltask"+listaAttivita.length;
    rimuovi.addEventListener("click", () => removeTask(id));
}

function removeTask(id) {
    listaAttivita= listaAttivita.filter((attivita) => attivita!=id);

    const liToRemove = document.getElementById("task"+id);
    const delToRemove = document.getElementById("deltask"+id);

    ulListaAttivita.removeChild(liToRemove);
    liToRemove.removeChild(delToRemove);
  
}

