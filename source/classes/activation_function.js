/***********************************************************
* Author : De Biasi Loris
* Description : 
* Version : 0.1
* Date : 24.04.2017
***********************************************************/

// Abstract class for activation function
class activationFunction {
	//
	constructor() {
		if (new.target === activationFunction) {
			throw new TypeError("Cannot construct activationFunction instances directly");
		}
	}

	normal(x) { throw new Error("Must override method"); }
	derivative(x) { throw new Error("Must override method"); }
}

// Sigmoid activation function class
class sigmoid extends activationFunction {
	constructor() {
		// Parent constructor
		super();
	}

	normal(x) {
		return 1/(1+Math.pow(Math.E, -x));
	}

	derivative(x) {
		return Math.exp(-x / ((1+Math.exp(-x))**2));
	}
}

// Tanh activation function class
class tanh extends activationFunction{
	constructor() {
		// Parent constructor
		super();
	}
	
	normal(x) {
		return Math.tanh(x);
	}

	derivative(x) {
		return 1 - (x * x);
	}
}