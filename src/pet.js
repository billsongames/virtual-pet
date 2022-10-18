const initialFitness = 10;
const initialHunger = 0;

const hungerGrowUpChange = 5;
const hungerFeedChange = 3;

const fitnessGrowUpChange = 3;
const fitnessWalkChange = 4;

const maxFitness = 10;
const minHunger = 0;

const minFitnessForWalk = 3;
const minHungerForFeed = 5;

function Pet(name) {
  this.petName = name;
  this.age = 0;
  this.hunger = initialHunger;
  this.fitness = initialFitness;
}

Pet.prototype = {
  get isAlive() {
    return this.fitness > 0 && this.hunger < 10 && this.age < 30;
  }
}

Pet.prototype.growUp = function() {
  if (!this.isAlive) {
    throw new Error('Your pet is no longer alive! :o(')
  }
  try {
  } catch (e) {
    console.error(e)
  }

  this.age += 1;
  this.hunger += hungerGrowUpChange;
  this.fitness -= fitnessGrowUpChange;

  if (this.fitness > maxFitness) {
    this.fitness = maxFitness;
  }
}

Pet.prototype.walk = function() {
  if (!this.isAlive) {
    throw new Error('Your pet is no longer alive! :o(')
  }
  try {
  } catch (e) {
    console.error(e)
  }

  this.fitness += fitnessWalkChange;

  if (this.fitness > maxFitness){
    this.fitness = maxFitness;
  }
}

Pet.prototype.feed = function() {
  if (!this.isAlive) {
    throw new Error('Your pet is no longer alive! :o(')
  }
  try {
  } catch (e) {
    console.error(e)
  }

  this.hunger -= hungerFeedChange;

  if (this.hunger < minHunger){
      this.hunger = minHunger;
  }
}

Pet.prototype.checkUp = function () {
  if (!this.isAlive) {
    return('Your pet is no longer alive! :o(')
  }

  if (this.fitness <= minFitnessForWalk && this.hunger >= minHungerForFeed) {
    return ("I am hungry AND I need a walk")
  }

  if (this.fitness <= minFitnessForWalk) {
    return ("I need a walk")
  }

  if (this.hunger >= minHungerForFeed) {
    return("I am hungry")
  }

  if (this.hunger < minHungerForFeed && this.fitness > minFitnessForWalk) {
    return("I feel great!")
  }  
}

module.exports = Pet;