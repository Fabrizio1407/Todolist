const aggiungi = document.getElementById("add-task");

const ulListaAttivita = document.getElementById("task-list");
const inputAttivita = document.getElementById("activity");

aggiungi.addEventListener("click", addTask);


let listaAttivita = [];

function addTask() 
{

  async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    return 10;
  }
  
  function f() {
    return wait().then(result => alert(result));
  }

  f();


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

