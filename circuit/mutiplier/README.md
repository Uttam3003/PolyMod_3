# circum_circuit
-Designing  a new zkSNARK circuit that implements some logical operations. We need to implement the circuit and deploy a verifier on-chain to verify proofs generated from this circuit

-Our goal is to prove you know the inputs A (0) & B (1) that yield a 0 output.
<img width="604" alt="image" src="https://github.com/dheerajkaushik/circum_circuit/assets/94304859/84c050b4-8409-4387-b1dd-0653c1b38b18">

# circuit overview

<img width="164" alt="image" src="https://github.com/dheerajkaushik/circum_circuit/assets/94304859/b53a2182-cb8a-488b-a7d9-7d558ce97fd4">

# circuit logic
<img width="124" alt="image" src="https://github.com/dheerajkaushik/circum_circuit/assets/94304859/edbc94a6-c54f-47ac-aa88-1de54d605c2a">

Gates used: 
-AND
-NOT
-OR
# steps
1. run command npm i
2. run command npx hardhat compile
3. run command npx hardhat run scripts/deploy.ts
4. make sure to update hardhatconfige.ts file with your private key and rpc url.
5. Your account must have tokens to deploy contract to mumbai network
6. <img width="267" alt="image" src="https://github.com/dheerajkaushik/circum_circuit/assets/94304859/ec93be3b-7735-4dc3-9b5c-2962769f7f5d">

7. run npx hardhat run scripts/deploy.ts --network mumbai to deploy
8. It  must varify "OK" in terminal

   We use .env to hide our private key of account.

   # Author
   Dheeraj kaushik

   # Contact
   dkher4@gmail.com
