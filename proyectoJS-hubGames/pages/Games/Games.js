import "./Games.css";

const template = () => {
  return `
    <div id="mainGames">
      <section id="gameSection" class="linkPokemon">
        <h3>Pokédex</h3>
        <img src="https://res.cloudinary.com/dy25vd1yu/image/upload/v1683033113/ProyectoJS-hubGames/International_Pok%C3%A9mon_logo.svg_mivwok.png" alt="imagen de pokemon" />
        <p>Descubre el universo de Pokemon y observa a los 150 más famosos. Además, podrás realizar combates entre ellos</p>
      </section>
      <section id="gameSection" class="linkHangman">
        <h3>El ahorcado</h3>
        <img src="https://res.cloudinary.com/dy25vd1yu/image/upload/v1683033353/ProyectoJS-hubGames/6168680_ww70ev.png" alt="imagen del ahorcado" />
        <p>El mítico juego del ahorcado...¿Serás capaz de descubrir la palabra? Consiguelo antes de que se te acaben los intentos</p>
      </section>
      <section id="gameSection" class="linkQuizgames">
        <h3>Quiz Game</h3>
        <img src="https://res.cloudinary.com/dy25vd1yu/image/upload/v1683033538/ProyectoJS-hubGames/png-clipart-quiz-guess-word-trivia-history-quiz-game-quiz-miscellaneous-game_imcfur.png" alt="imagen quiz game" />
        <p>¿Cuántas preguntas eres capaz de adivinar? Pon a prueba tu cerebro y sorpréndete</p>
      </section>
      <section id="gameSection" class="linkWhakatopo">
        <h3>¡Atrapa el topo!</h3>
        <img src="https://res.cloudinary.com/dy25vd1yu/image/upload/v1683035663/ProyectoJS-hubGames/pngwing.com_uksjgm.png" alt="imagen atrapa el topo" />
        <p>Atrapa el topo antes de que se esconda en su madriguera. Demuestra que eres más rápido que él.</p>
      </section>
      <section id="gameSection" class="linkTresenraya">
        <h3>Tres en raya</h3>
        <img src="https://res.cloudinary.com/dy25vd1yu/image/upload/v1683033578/ProyectoJS-hubGames/Tic_tac_toe.svg_fsymts.png" alt="imagen tres en raya" />
        <p>El primero que haga tres en raya gana. Juega unas partidas contra la máquina y demuestra quien es el mejor</p>
      </section>
      <section id="gameSection" class="linkMemorycard">
        <h3>Match the Cards!</h3>
        <img src="https://res.cloudinary.com/dy25vd1yu/image/upload/v1683034645/ProyectoJS-hubGames/kisspng-material-yellow-orange-referee-cards-5ab0c13f260580.8581438515215332471558_cw24fl.png" alt="imagen memoriza las cartas" />
        <p>Memoriza las cartas y encuentra su pareja. No es tan fácil como parece</p>
      </section>
    </div>
  `;
};

//listeners

export const printGames = () => {
  document.querySelector("main").innerHTML = template();
};
