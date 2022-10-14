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
  this.phrase = "Hello"
}

Pet.prototype.growUp = function() {
  this.age += 1;
  this.hunger += hungerGrowUpChange;
  this.fitness -= fitnessGrowUpChange;

  if (this.fitness > maxFitness) {
    this.fitness = maxFitness;
  }
};

Pet.prototype.walk = function() {
  this.fitness += fitnessWalkChange;
    if (this.fitness > maxFitness){
      this.fitness = maxFitness;
  };
};

Pet.prototype.feed = function() {
  this.hunger -= hungerFeedChange;
    if (this.hunger < minHunger){
      this.hunger = minHunger;
  };
};

Pet.prototype.checkUp = function () {
  if (this.fitness <= minFitnessForWalk && this.hunger >= minHungerForFeed) {
    return ("I am hungry AND I need a walk")
  };  
  if (this.fitness <= minFitnessForWalk) {
    return ("I need a walk")
  };
  if (this.hunger >= minHungerForFeed) {
    return("I am hungry")
  };
  if (this.hunger < minHungerForFeed && this.fitness > minFitnessForWalk) {
    return("I feel great!")
  };  
};

module.exports = Pet;

// const Pet = require('./src/pet.js');