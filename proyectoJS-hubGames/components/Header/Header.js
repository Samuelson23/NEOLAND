import { printGames } from "../../pages/Games/Games";
import { initController } from "../../utils/route";
import "./Header.css";

const template = () => {
  return `
    <img src="https://res.cloudinary.com/dy25vd1yu/image/upload/v1682969275/ProyectoJS-hubGames/Games-PNG-File_n9nh9b.png" alt="logo games" class="imgLogo"/>
    
    <ul>
        <a href="#null" class="linkHome">
            <li>
                <img src="https://res.cloudinary.com/dy25vd1yu/image/upload/v1682964372/ProyectoJS-hubGames/home_FILL0_wght400_GRAD0_opsz48_amqopm.png" alt="logo home"/>
                <p>Home</p>
            </li>
        </a>
        <a href="#null" class="linkGames">
            <li>
                <img src="https://res.cloudinary.com/dy25vd1yu/image/upload/v1682964368/ProyectoJS-hubGames/stadia_controller_FILL0_wght400_GRAD0_opsz48_fe6tao.png" alt="logo games"/>
                <p>Games</p>
            </li>
        </a>
        <a href="#null" class="linkAbout">
            <li>
                <img src="https://res.cloudinary.com/dy25vd1yu/image/upload/v1682964627/ProyectoJS-hubGames/live_help_FILL0_wght400_GRAD0_opsz48_swth07.png" alt="logo about"/>
                <p>About</p>
            </li>
        </a>
        <a href="#null" class="linkLogin">
            <li>
                <img src="https://res.cloudinary.com/dy25vd1yu/image/upload/v1682964376/ProyectoJS-hubGames/login_FILL0_wght400_GRAD0_opsz48_o6pn4r.png" alt="logo login" class="iconLogin"/>
                
                <p>Login</p>
            </li>
        </a>
        <a href="#null" class="linkLogout">
            <li>
                <img src="https://res.cloudinary.com/dy25vd1yu/image/upload/v1682964374/ProyectoJS-hubGames/logout_FILL0_wght400_GRAD0_opsz48_snteb5.png" alt="logo logout" class="iconLogout"/>
                <p>Logout</p>
            </li>
        </a>
    </ul>
    <button type="button" class="claroOscuro" "onclick="changeMode()">Tema</button>
    `;
};

const headerListeners = () => {
  const linkHome = document.querySelector(".linkHome");
  linkHome.addEventListener("click", (ev) => {
    initController("undefined");
  });
  const linkGames = document.querySelector(".linkGames");
  linkGames.addEventListener("click", (ev) => {
    !localStorage.getItem("user") ? initController("Login") : printGames();
  });
  const linkAbout = document.querySelector(".linkAbout");
  linkAbout.addEventListener("click", (ev) => {
    !localStorage.getItem("user") ? initController("Login") : printGames();
  });
  const linkLogin = document.querySelector(".linkLogin");
  linkLogin.addEventListener("click", (ev) => {
    //changeLogin();
    initController("Login");
  });
  const linkLogout = document.querySelector(".linkLogout");
  linkLogout.addEventListener("click", (ev) => {
    localStorage.removeItem("user");
    initController("Login");
  });
  const temaOscuro = document.querySelector(".claroOscuro");
  temaOscuro.addEventListener("click", (ev) => {
    document.querySelector("main").classList.toggle("darkMode");
  });
};

export const changeLogin = () => {
  const login = document.querySelector(".linkLogin");
  const logout = document.querySelector(".linkLogout");

  if (localStorage.getItem("user")) {
    console.log("localstorage", localStorage.getItem("user"));
    logout.style.display = "flex";
    login.style.display = "none";
  }
};

export const printHeader = () => {
  document.querySelector("header").innerHTML = template();
  headerListeners();
  changeLogin();
};
