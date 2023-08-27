# Circom Circuit Template: Multiplication Check

This Circom circuit template checks whether c is the correct multiplication of a and b.

## Circuit Structure

The circuit template is composed of multiple component templates that work together to implement the logic of checking if c is the multiplication of a and b.

## GivenCircuit Template

This template contains the main logic of the circuit. It utilizes three component templates: andGate, notGate, and orGate to perform the following steps:

1. The AND gate (andGate) takes inputs a and b and produces output X.
   
2. The NOT gate (notGate) takes input b and produces output Y.
   
3. The OR gate (orGate) takes inputs X and Y, calculates the OR operation, and produces the final output Q.
   
### AND Template

This template implements the logic of an AND gate. It takes inputs a and b and produces the output out as the result of the logical AND operation (a * b).

### NOT Template

This template implements the logic of a NOT gate. It takes input in and produces the output out as the result of the logical NOT operation (1 - in).

### OR Template

This template implements the logic of an OR gate. It takes inputs a and b and produces the output out as the result of the logical OR operation (a + b - a * b).

## Usage

Review the component templates to understand how the circuit logic is structured and implemented.

Modify the values of a, b, and c as needed to test different scenarios.

Compile the circuit using Circom version 2.0.0.

Run the compiled circuit on the desired setup or platform.

## Author
UTTAM KUMAR

## LICENCE
This project is under MIT licence.
