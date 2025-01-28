const projectDetails = [
  {
    "title": "Autocord",
    "description": "Autocord is a API wrapper for Discord centered around automation and selfbots",
    "live": null,
    "code": "https://github.com/wa1ker38552/autocord",
    "language": "python",
    "languageDetail": "py"
  },
  {
    "title": "ps99rap",
    "description": "A database with statistics and analysis for pet simulator 99. 40k+ monthly users",
    "live": "https://ps99rap.com/",
    "code": null,
    "language": "python",
    "languageDetail": "py"
  },
  {
    "title": "Rolimons",
    "description": "A Python API wrapper for the Roblox trading site Rolimons",
    "live": null,
    "code": "https://github.com/wa1ker38552/rolimons.py",
    "language": "python",
    "languageDetail": "py"
  },
  {
    "title": "FakeCord",
    "description": "A custom Discord client written with Flask and Javascript",
    "live": null,
    "code": "https://github.com/wa1ker38552/FakeCord-v2",
    "language": "javascript",
    "languageDetail": "js"
  },
  {
    "title": "Homepage",
    "description": "A customizable homepage for your browser with tons of features",
    "live": "https://home.cadenchau.com",
    "code": "https://github.com/wa1ker38552/Browser-Homepage",
    "language": "HTML",
    "languageDetail": "html"
  },
  {
    "title": "Typing Test",
    "description": "A minimalistic typing test from scratch, inspired from MonkeyType",
    "live": "https://type.cadenchau.com",
    "code": "https://github.com/wa1ker38552/type",
    "language": "javascript",
    "languageDetail": "js"
  },
  {
    "title": "Checklist",
    "description": "A simple and minimalistic checklist app to help you keep track of things",
    "live": "https://checklist.cadenchau.com",
    "code": null,
    "language": "javascript",
    "languageDetail": "js"
  },
  {
    "title": "Logs",
    "description": "A simple and minimalistic journal app",
    "live": null,
    "code": "https://github.com/wa1ker38552/logs",
    "language": "HTML",
    "languageDetail": "html"
  },
  {
    "title": "Pixel Painter",
    "description": "A group painting app inspired from r/place",
    "live": "https://pixelpainter.cadenchau.com/",
    "code": "https://github.com/wa1ker38552/pixelpainter",
    "language": "HTML",
    "languageDetail": "html"
  },
  {
    "title": "Music",
    "description": "A simple app showing what music I listen to",
    "live": "https://music.cadenchau.com/",
    "code": "https://github.com/wa1ker38552/music",
    "language": "javascript",
    "languageDetail": "js"
  }
]

function updateProject(detail) {
  document.getElementById("projectTitle").innerHTML = detail.title
  document.getElementById("projectDescription").innerHTML = detail.description
  document.getElementById("projectLanguage").innerHTML = detail.language
  document.getElementById("projectLanguage").className = "project-language "+detail.languageDetail
  

  const liveButton = document.getElementById("viewButton")
  if (detail.live) {
    liveButton.className = "centered-vertically"
    liveButton.onclick = function() {window.open(detail.live, "_blank")}
  } else {
    liveButton.className = "centered-vertically disabled-button"
    liveButton.onclick = ""
  }

  const codeButton = document.getElementById("codeButton")
  if (detail.code) {
    codeButton.className = "centered-vertically"
    codeButton.onclick = function() {window.open(detail.code, "_blank")}
  } else {
    codeButton.className = "centered-vertically disabled-button"
    codeButton.onclick = ""
  }
}

function shiftLeft() {
  counter -= 1
  if (counter < 0) {
    counter = projectDetails.length-1
  }
  projectCounter.innerHTML = counter+1+"/"+projectDetails.length
  updateProject(projectDetails[counter])
}

function shiftRight() {
  counter += 1
  if (counter == projectDetails.length) {
    counter = 0
  }
  projectCounter.innerHTML = counter+1+"/"+projectDetails.length
  updateProject(projectDetails[counter])
}

var counter = 0
var projectCounter
window.onload = function() {
  projectCounter = document.getElementById("projectCounter")
  projectCounter.innerHTML = counter+1+"/"+projectDetails.length
  
  const title_e = [
    document.getElementById("title_1"),
    document.getElementById("title_2"),
    document.getElementById("title_3"),
    document.getElementById("title_4"),
  ]
  var title_increment = 0
  var age = document.getElementById("age")
  var yrs = document.getElementById("years")

  age.innerHTML = new Date().getFullYear()-2007-1
  yrs.innerHTML = new Date().getFullYear()-2018

  updateProject(projectDetails[0])
  
  setInterval(function() {
    if (title_increment != 0) {
      title_e[(title_increment-1)%4].classList.remove("accented-text")
      title_e[(title_increment-1)%4].classList.remove("accented-transparent")
    }
    if (title_increment%4 == 1 || title_increment%4 == 2) {
      title_e[title_increment%4].classList.add("accented-transparent")
    } else {
      title_e[title_increment%4].classList.add("accented-text")
    }
    title_increment++
  }, 500)
}
