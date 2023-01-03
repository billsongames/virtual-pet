let petChoice = 0
let animation
let pet

function petImageClick(image) {
  petChoice = image.id
  petImageReset()
  image.style.backgroundColor = "blue"
  image.style.borderColor = "blue"
/*   document.getElementById("petSelectButton").disabled = false */
  document.getElementById("petSelectButton").backgroundColor = "red"

/*   let element = document.getElementById("template_test")
  const clone = element.content.cloneNode(true);
  document.getElementById("petSelectButton").appendChild(clone) */
}

function petImageReset() {
  const pets = [1,2,3,4,5,6]
  for (i=0; i < pets.length; i+=1) {
    const elementId = document.getElementById(`pet${pets[i]}`)
    elementId.style.backgroundColor = "black"
    const elementClass = document.getElementsByClassName("petSprite")
    for (i=0; i< elementClass.length; i += 1) {
      elementClass[i].style.backgroundColor = "black"
    }
  }
}

function petSelected() {
  if (petChoice == 0) {
    alert("Please select a pet")
  } else {
    removeElement("petSelection")
    removeElement("petSelectButton")
    document.getElementById("sectionHeading").innerHTML=("NAME YOUR PET")
  
    newDiv("petNaming", "main", "above")
    appendHTMLTemplate("petNameForm", "petNaming")
    appendHTMLTemplate("nameConfirmButton", "buttonDisplay")
  
    const mainPetImage = document.getElementById("mainPetImage")
 /*    mainPetImage.onload=animatePetNameSprite() */
    mainPetImage.style.background = `url("../images/frames/144px/${petChoice}.png") -144px 0px`
    mainPetImage.style.backgroundColor= "black"
  }
}  

function nameCheck() {
  let name = document.getElementById("petNameInputField").value;
  if (name.length < 1 ) {
    alert("Please type in your pet's name")
  } else {
    generateNewPet()
  }
}  

function generateNewPet() {
  let name = document.getElementById("petNameInputField").value;
  pet = new Pet(name)
  console.log(pet)

  const timeout = setTimeout(() => {
    removeElement("nameForm")
    removeElement("nameConfirmButton")
    newDiv("welcomePetSection", "petNaming", "below")
    appendHTMLTemplate("welcomeText", "welcomePetSection")
    appendHTMLTemplate("playGameButton", "buttonDisplay")
    document.getElementById("welcomeName").innerHTML = (`Welcome ${name}`)
  }, 100);
}

function playGame() {
  clearInterval(animation)
  document.getElementById("sectionHeading").innerHTML=("")
  removeElement("petNaming")
  removeElement("playGameButton")
  prependHTMLTemplate("game", "main")
  document.getElementById("petSprite").style.background = `url("../images/frames/96px/${petChoice}.png") -96px 0px`
  appendHTMLTemplate("gameButtons", "buttonDisplay")

  petAgeStart()
  updateStats()
}

function animateSprites() {
  let frame =0
  let frames = [0,96,192,96]

  let position = 0
  const interval = 150

  animation = setInterval(() => {
    const sprites = document.getElementsByClassName("petSprite")

    for (i=0; i<sprites.length; i+=1) {
      sprites[i].style.backgroundPosition = `-${frames[frame]}px 0px`
    }

    frame += 1
    if (frame > 3) {
      frame = 0
    }} , interval )
}

function animatePetNameSprite() {
  let frame =0
  let frames = [0,144,288,144]

  const interval = 150

  animation = setInterval(() => {
    const sprite = document.getElementById("mainPetImage")

    sprite.style.backgroundPosition = `-${frames[frame]}px 0px`
    
    frame += 1
    if (frame > 3) {
      frame = 0
    }} , interval )
}


function bgmSelectionDiscoPlay() {
  let bgmLength = document.getElementById("POL-staff-roll-short").duration
  let bgm = document.getElementById("POL-staff-roll-short")
  bgm.play()

  let framesX = [0,96,192]
  let framesY = [0,96,192,288]

  const interval = (bgmLength*1000)/32

  animation = setInterval(() => {
    const sprites = document.getElementsByClassName("petSprite")
    
    let minX = Math.ceil(0);
    let maxX = Math.floor(2);
    let frameX = Math.floor(Math.random() * (maxX - minX) + minX)

    let minY = Math.ceil(0);
    let maxY = Math.floor(3);
    let frameY = Math.floor(Math.random() * (maxY - minY) + minY)

    for (i=0; i<sprites.length; i+=1) {
      sprites[i].style.backgroundPosition = `-${framesX[frameX]}px -${framesY[frameY]}px`
    }
  } , interval )
}

function bgmSelectionDiscoReset() {
  clearInterval(animation)
  const pets = [1,2,3,4,5,6]
  for (i=0; i < pets.length; i+=1) {
    const elementId = document.getElementById(`pet${pets[i]}`)
    elementId.style.backgroundPosition = "-96px 0px"
  }
}

  


