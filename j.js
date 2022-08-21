const toggleBtn = document.getElementById("toggle-btn");
//2
const toggleBtn2= document.getElementById("toggle-btn2");
//2
const theme = document.getElementById("theme");
let darkMode = localStorage.getItem("dark-mode");

const enableDarkMode = () => {
  theme.classList.add("dark-mode-theme");
  toggleBtn.classList.remove("dark-mode-toggle");
  //2
  toggleBtn2.classList.remove("dark-mode-toggle");
  //2
  localStorage.setItem("dark-mode", "enabled");
};

const disableDarkMode = () => {
  theme.classList.remove("dark-mode-theme");
  toggleBtn.classList.add("dark-mode-toggle");
  localStorage.setItem("dark-mode", "disabled");
};

if (darkMode === "enabled")
 {
  toggleBtn.src="sun.png";
  toggleBtn2.src="sun.png";
  enableDarkMode(); // set state of darkMode on page load
}

toggleBtn.addEventListener("click", (e) => {
  darkMode = localStorage.getItem("dark-mode"); // update darkMode when clicked
  if (darkMode === "disabled")
   {
    toggleBtn.src="sun.png";
    toggleBtn2.src="sun.png";
    enableDarkMode();
  } else
   {
    toggleBtn.src="moon.png";
    toggleBtn2.src="moon.png";
    disableDarkMode();
  }
});
//2


toggleBtn2.addEventListener("click", (e) => {
  darkMode = localStorage.getItem("dark-mode"); // update darkMode when clicked
  if (darkMode === "disabled")
   {
    toggleBtn.src="sun.png";
    toggleBtn2.src="sun.png";
    enableDarkMode();
  } else {
    toggleBtn.src="moon.png";
    toggleBtn2.src="moon.png";
    disableDarkMode();
  }
});


//2


function w3_open()
{
document.getElementById("sidebar").style.width="170px";

document.getElementById("sidebar").style.height="body";

}
function w3_close()
{
document.getElementById("sidebar").style.width="0px";

}



document.getElementById


//<!-- imga  -->
             

//<!-- ok check check ✔️✔️✔️✔️-->




//<!-- ✔️✔️✔️✔️✔️✔️ -->


