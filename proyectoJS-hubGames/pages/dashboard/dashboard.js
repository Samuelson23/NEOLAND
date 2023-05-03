import "./dashboard.css";

const template = () => {
  return `
    <div class="textoDash">
      <h1>BIENVENIDO/A A GAMESHUB</h1>
      <h2>
        Disfruta recordando míticos juegos que no pasan de moda, pero esta en
        vez, en formato digital. Tambien tienes una pequeña Pokédex si eres fan
        de los graciosos pokemons
      </h2>
      <h2>
        A continuación tienes una breve descripción de los juegos. Si quieres
        jugar a alguno puedes hacerlo desde la pestaña de "Games"
      </h2>
      <h2>
        Además, cada partida que ganes tendrá su recompensa!! No olvides visitar
        la tienda antes de irte
      </h2>
      </div>
        <div class="divDash">
          <section>
            <img
              src="https://res.cloudinary.com/dy25vd1yu/image/upload/v1683033113/ProyectoJS-hubGames/International_Pok%C3%A9mon_logo.svg_mivwok.png"
              alt="imagen de pokemon"
            />
            <div>
              <h3>Pokédex</h3>
              <p>
                Descubre la increíble saga de Pokemon con esta Pokédex
                interactiva. Aquí encontraras los 150 pokemons de la primera
                generación. Cada pokemon se muestra con toda su información
                encontrada en la PokeApi. Además, para que no te aburras puedes
                echarte unos combates entre pokemons y conseguir puntos!
              </p>
            </div>
          </section>
          <section>
            <img
              src="https://res.cloudinary.com/dy25vd1yu/image/upload/v1683033353/ProyectoJS-hubGames/6168680_ww70ev.png"
              alt="imagen del ahorcado"
            />
            <div>
              <h3>El ahorcado</h3>
              <p>
                El mítico juego del ahorcado...¿Serás capaz de descubrir la
                palabra? Cada partida cuenta con un número máximo de intentos y
                si aciertas la palabra podrás ganar puntos!
              </p>
            </div>
          </section>
          <section>
            <img
              src="https://res.cloudinary.com/dy25vd1yu/image/upload/v1683033538/ProyectoJS-hubGames/png-clipart-quiz-guess-word-trivia-history-quiz-game-quiz-miscellaneous-game_imcfur.png"
              alt="imagen quiz game"
            />
            <div>
              <h3>Quiz Game</h3>
              <p>
                ¿Cuántas preguntas eres capaz de adivinar? Pon a prueba tu
                cerebro y sorpréndete. Cada pregunta que aciertes te dará
                puntos!
              </p>
            </div>
          </section>
          <section>
            <img
              src="https://res.cloudinary.com/dy25vd1yu/image/upload/v1683035663/ProyectoJS-hubGames/pngwing.com_uksjgm.png"
              alt="imagen atrapa el topo"
            />
            <div>
              <h3>¡Atrapa el topo!</h3>
              <p>
                Atrapa el topo antes de que se esconda en su madriguera.
                Demuestra que eres más rápido que él. Pero date prisa, que sólo
                tienes 30 segundos!
              </p>
            </div>
          </section>
          <section>
            <img
              src="https://res.cloudinary.com/dy25vd1yu/image/upload/v1683033578/ProyectoJS-hubGames/Tic_tac_toe.svg_fsymts.png"
              alt="imagen tres en raya"
            />
            <div>
              <h3>Tres en raya</h3>
              <p>
                El primero que haga tres en raya gana. Juega unas partidas
                contra la máquina y demuestra quien es el mejor. Si eres capaz
                de ganarle obtendras una recompensa de puntos!
              </p>
            </div>
          </section>
          <section>
            <img
              src="https://res.cloudinary.com/dy25vd1yu/image/upload/v1683034645/ProyectoJS-hubGames/kisspng-material-yellow-orange-referee-cards-5ab0c13f260580.8581438515215332471558_cw24fl.png"
              alt="imagen memoriza las cartas"
            />
            <div>
              <h3>Match the Cards!</h3>
              <p>
                Memoriza las cartas y encuentra su pareja. No es tan fácil como
                parece. Además tienes un límite de tiempo asique no te lo
                pienses mucho
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  `;
};

//listeners

export const printDashboard = () => {
  document.querySelector("main").innerHTML = template();
  //listeners
};
