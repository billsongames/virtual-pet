const Pet = require('../src/pet');

describe('constructor', () => {
	it('returns an object', () => {
		expect(new Pet('Fido')).toBeInstanceOf(Object);
	});

	it('pet has a name', () => {
		const pet = new Pet('Fido');
		expect(pet.name).toEqual('Fido');
	});

	it('pet initial age is 0', () => {
		const pet = new Pet('Fido');
		expect(pet.age).toEqual(0);
	});

	it('pet initial hunger is 0', () => {
		const pet = new Pet('Fido');
		expect(pet.hunger).toEqual(0);
	});

	it('pet initial fitness is 10', () => {
		const pet = new Pet('Fido');
		expect(pet.fitness).toEqual(10);
	});
});

describe('growUp', () => {
	it('increase age by 1', () => {
		const pet = new Pet('Fido');
		pet.growUp();
		expect(pet.age).toEqual(1);
		expect(pet.hunger).toEqual(5);
	});
});

describe('walk', () => {
	it('walk increases fitness by 4', () => {
		const pet = new Pet('Fido');
		pet.fitness = 4;
		pet.walk();
		expect(pet.fitness).toEqual(8);
	});

	it('walk increases fitness by 4 up to max of 10', () => {
		const pet = new Pet('Fido');
		pet.fitness = 8;
		pet.walk();
		expect(pet.fitness).toEqual(10);	
	});
});

describe('feed', () => {

	it('throws an exception if pet not alive', () => {
		const pet = new Pet('Fido');
		pet.age = 30;
		expect(() => pet.feed()).toThrow('Your pet is no longer alive! :o(');
	});

	it('feed decreases hunger by 3', () => {
		const pet = new Pet('Fido');
		pet.hunger = 8;
		pet.feed();
		expect(pet.hunger).toEqual(5);
	});	

	it('feed decreases hunger by 3 down to minimum of 0', () => {
		const pet = new Pet('Fido');
		pet.hunger = 2;
		pet.feed();
		expect(pet.hunger).toEqual(0);
		});	
});

describe('checkUp', () => {
	it('return no longer alive', () => {
		const pet = new Pet('Fido');
		pet.age = 30;
		expect(pet.checkUp()).toEqual('Your pet is no longer alive! :o(')		
	});
	
	it('says I need a walk if fitness <=3 ', () => {
		const pet = new Pet('Fido');
		pet.fitness = 2;
		expect(pet.checkUp()).toEqual('I need a walk')
	});

	it('says I am hungry if hunger >=5 ', () => {
		const pet = new Pet('Fido');
		pet.hunger = 6;
		expect(pet.checkUp()).toEqual('I am hungry')
	});

	it('I am hungry AND I need a walk if fitness <=3 AND hunger >=5 ', () => {
		const pet = new Pet('Fido');
		pet.hunger = 6;
		pet.fitness =2;
		expect(pet.checkUp()).toEqual('I am hungry AND I need a walk')
	});

	it('I feel great! if fitness > 3 AND hunger < 5 ', () => {
		const pet = new Pet('Fido');
		pet.fitness = 6;
		pet.hunger = 3;
		expect(pet.checkUp()).toEqual('I feel great!')
	});
});

describe('isAlive', () => {
	const pet = new Pet('Fido');
	it('pet is not alive', () => {
		expect(() => {
			pet.isAlive(false);
		}).toThrow();
	});
});

describe('adopt a child gives correct child info', () => {
	const parent = new Pet('Fido');
	const child = new Pet('Shep');
	parent.adoptChild(child)
	it('adopt a child ', () => {
		expect(parent.children[0].name).toEqual('Shep')
	});
});

describe('have a baby gives correct child info', () => {
	const parent = new Pet('Fido');
	parent.haveBaby('Fang')
	it('adopt a child ', () => {
		expect(parent.children[0].name).toEqual('Fang')
	});
});