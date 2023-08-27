import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import "hardhat-circom";
// circuits
import circuits = require('./circuits.config.json')
import 'dotenv/config'
// set env var to the root of the project
process.env.BASE_PATH = __dirname;

// tasks
import "./tasks/newcircuit.ts"

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.17",
      },
      {
        version: "0.6.11",
      }
    ]
  },
  networks: {
    mumbai: {
      url: `https://rpc-mumbai.maticvigil.com/`,
      accounts: ['5267458dc7384fbd1d4bc0a9a63bfc06527188e6d845ca0e63e83f8ff75db550']
    }
  },
   
  circom: {
    
    inputBasePath: "./circuits",
    // (required) The final ptau file, relative to inputBasePath, from a Phase 1 ceremony
    ptau: "powersOfTau28_hez_final_12.ptau",
    // (required) Each object in this array refers to a separate circuit
    circuits: JSON.parse(JSON.stringify(circuits))
  },
};

export default config;
