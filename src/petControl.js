const foodIdArray = [0,1,2,3,4,5]
let foodId = 0
let foodIndex
const foodXPositions =  [96, 240, 384, 528, 672, 816]

let spritePositionX = 432
let speed = 12
let speedX = 12
let foodReachX = 0
let direction = "none"
let petPosition = 2

let message =""

let petName = "Bob"
let age = 0
let fitness = 0
let hunger = 0

let paused = false

let canClick = true

function petAgeStart() {
  petName = pet.name
  console.log(petName)
  document.getElementById("statsName").innerHTML= (`${petName}`)
  const timer = setInterval(() => {
    if (!paused) {
      pet.growUp()
      happyBirthday()
      updateStats()
    }
  }, 20000);
}

function updateStats() {
  age = pet.age
  hunger = pet.hunger
  fitness = pet.fitness

  document.getElementById("statsAge").innerHTML=(`Age: ${age}`)
  document.getElementById("statsFitness").innerHTML=(`Fitness: ${fitness}`)
  document.getElementById("statsHunger").innerHTML=(`Hunger: ${hunger}`)
}

function feedPet() {
  if (canClick) {
    canClick = false
    feedPetAction()
  }
}  

function feedPetAction() {
  foodIndex = Math.floor(Math.random() * foodIdArray.length)
  foodId = foodIdArray[foodIndex]
  const foodSheetX = (Math.floor(Math.random() * 9) * 48)
  const foodSheetY = (Math.floor(Math.random() * 4) * 48)
  document.getElementById(`food${foodId}`).style.background = `url("../images/food/food.png") -${foodSheetX}px -${foodSheetY}px`

  const timer = setTimeout(() => {
    if (petPosition == foodId) {
      foodReached()
    } else {
      setDirection()
    }
  }, 1000);
}

function setDirection() {
  foodReachX = foodXPositions[foodIndex]

  if (foodReachX < spritePositionX) {
    direction = "left"
    speedX = -12
  } 
  if (foodReachX > spritePositionX) {
    direction = "right"
    speedX = 12
  }

  animateSprite()
}

function animateSprite() {
  const sprite = document.querySelector("#petSprite")
  let frame = 0
  const frames = [0,96,192,96]
  const interval = 150

  let spritesheetY
  if (direction == "left") {
    spritesheetY = "-96px"
  }
  if (direction == "right") {
    spritesheetY = "-192px"
  }

  const animation = setInterval(() => {
    spritePositionX = Number(spritePositionX) + Number(speedX)

    sprite.style.left = `${spritePositionX}px`
    sprite.style.backgroundPosition = `-${frames[frame]}px ${spritesheetY}`    
      
    frame += 1
      if (frame > 3) {
        frame = 0
    
    if (direction == "left" && spritePositionX < foodReachX - 24) {
      speed = 0
      foodReached()
      clearInterval(animation)
    }
    if (direction == "right" && spritePositionX > foodReachX - 24) {
      speed = 0
      foodReached()
      clearInterval(animation)
    }
  }} , interval )
}

function foodReached() {
  canClick = true
  pet.feed()
  updateStats()

  const sprite = document.querySelector("#petSprite")
  direction = "none"

  let audio = new Audio("../sound/sfx/foodEaten2.wav")
  audio.play()
  message = "-4 HUNGER"
  newMessage()
  updateStats()

  petPosition = foodIdArray[foodIndex]
  sprite.style.backgroundPosition = "-96px 0px"
  spritePositionX =  `${(foodXPositions[foodIndex])}`
  sprite.style.left = `${spritePositionX-24}px`

  console.log(spritePositionX)

  const timer = setTimeout(() => {
    document.getElementById(`food${foodId}`).style.background = `url("")`
  }, 1000);
}

function exercisePet() {
  pet.walk()
  alert("walk")
  updateStats()
}

function bgmGameDancePlay() {
  if (canClick === true) {
    canClick = false
    bgmGameDancePlayAction()
  }
}  


function bgmGameDancePlayAction() {
  paused = true
  pet.walk()

  let bgmTracks = ["POL-staff-roll-short-32", "POL-follow-me-short-32", "POL-pet-park-short-32", "POL-star-way-short-32"]
  let bgmChoice = bgmTracks[Math.floor(Math.random() * bgmTracks.length)]
  let bgm = document.getElementById(bgmChoice)
  let bgmLength = document.getElementById(bgmChoice).duration
  bgm.play()

  let framesX = [0,96,192]
  let framesY = [0,96,192,288]

  const interval = (bgmLength*1000)/32


  animation = setInterval(() => {
    const sprite = document.getElementById("petSprite")
    
    let minX = Math.ceil(0);
    let maxX = Math.floor(2);
    let frameX = Math.floor(Math.random() * (maxX - minX) + minX)

    let minY = Math.ceil(0);
    let maxY = Math.floor(3);
    let frameY = Math.floor(Math.random() * (maxY - minY) + minY)

    sprite.style.backgroundPosition = `-${framesX[frameX]}px -${framesY[frameY]}px`
  } , interval )
}

function bgmGameDanceReset() {
  paused = false
  canClick = true
  let audio = new Audio("../sound/sfx/foodEaten2.wav")
  audio.play()
  message = "+4 FITNESS!"
  newMessage()
  clearInterval(animation)
  document.getElementById("petSprite").style.backgroundPosition = "-96px 0px"
  updateStats()
  }

function sleepPet() {
  paused = true
  let interval = 6000
  let nightTime
  
  document.getElementById("petSprite").style.width = "256px"
  document.getElementById("petSprite").style.height = "128px"
  document.getElementById("petSprite").style.background = `url(../images/tent.png)`

  document.getElementById("mainBackground").style.backgroundImage = 'url(../images/background/night.png)';
  
  nightTime = setTimeout(() => {
    document.getElementById("mainBackground").style.backgroundImage = 'url(../images/background/day.png)';
    document.getElementById("petSprite").style.width = "96px"
    document.getElementById("petSprite").style.height = "96px"
    
    document.getElementById("petSprite").style.background = `url("../images/frames/96px/${petChoice}.png") -96px 0px`
    paused = false
  }, interval)
}

  function newMessage() {
    document.getElementById("sectionHeading").innerHTML=message
    updateStats()

    const timer = setTimeout(() => {
      document.getElementById("sectionHeading").innerHTML=""
    }, 2000);
  }

  function happyBirthday() {
    document.getElementById("happyBirthday").innerHTML=(`HAPPY BIRTHDAY ${petName}`)

    const timer = setTimeout(() => {
      document.getElementById("happyBirthday").innerHTML=""
    }, 4000);
  }
  

  function updateStats() {
    document.getElementById("statsAge").innerHTML=(`Age: ${pet.age}`)
    document.getElementById("statsFitness").innerHTML=(`Fitness: ${pet.fitness}`)
    document.getElementById("statsHunger").innerHTML=(`Hunger: ${pet.hunger}`)
  }