import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

/*const getAgents = (req, res) => {
  res.send(["Phoenix", "Viper", "Sage", "Cypher", "Reyna", "Jett"]);
}; */


const sendAgent = async () =>{
let agentName = document.querySelector('input[name="agent"]').value
let agentMetier = document.querySelector('input')

let response = await fetch("let response = await fetch"), {

},

fetch('http://localhost:3000/agents')
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    let agents = document.querySelector('#agents')
    data.forEach((agent) => {
      agents.innerHTML += `
            <a href="index.html?id=${agent.id}">
              <h2>${agent.name}</h2>
              
            </a>
            <h3>

            
          `
    })
  }) 
    }



/*envoyer un agents*/
const getAgents = (req, res) => {
  res.send(["Harry Potter, Hermione Granger, Drago Malfoy? Ron Weasley"]);
  return prisma.agent.findMany().then((agents) => {
    return res.send(agents);
  });
};

/*creer un agent*/
const createAgent = (req, res) => {
  let agent = req.body;
  console.log(agent);
  prisma.agent
    .create({
      data: {
        name: agent.name,
      },
    })

    .then((agent) => {
      res.json(agent);
    })

    .catch((error) => {
      res.json(error);
    });
};


const afficherAgent = async () => {
  try {
    const response = await fetch("http://localhost:3000/agents");
    const agents = await response.json();
    let agentsList = document.querySelector("#agents");
    agentsList.innerHTML = ""; // Nettoie la liste avant de la remplir à nouveau
    agents.forEach((agent) => {
      agentsList.innerHTML += `<h2>${agent.name}</h2>`; // Affiche chaque agent par son nom
    });
  } catch (error) {
    console.error("Failed to fetch agents:", error);

 }
  }

/*updater l'agent*/
const updateAgent = (req, res) => {
  let id = Number(req.params.id);
  let agent = req.body;

  prisma.agent
    .update({
      where: {
        id: id,
      },
      data: {
        name: agent.name,
      },
    })
    .then((agent) => {
      res.json(agent);
    })
    .catch((error) => {
      res.json(error);
    });
};

/*supprimer un agent*/

const deleteAgent = (req, res) => {
  let id = Number(req.params.id);

  prisma.agent
    .delete({
      where: {
        id: id,
      },
    })
    .then((agent) => {
      res.json(agent);
    })
    .catch((error) => {
      res.json(error);
    });
};

/*exporter les agents */
export { getAgents, getAgents, createAgent, updateAgent, deleteAgent, sendAgent };
