# Hello World

This Solidity program is a simple "Display of Smart Contracts on Front End" program that demonstrates the basic syntax and functionality of the Solidity programming language. The purpose of this program is to serve as a starting point for those who are new to Solidity and want to get a feel for how it works.

## Description

This program is a simple contract written in Solidity, a programming language used for developing smart contracts on the Ethereum blockchain. The contract of "Movie" is in file named "Movie.sol"


## Getting Started

### Executing program

To run this program, you can use Remix, an online Solidity IDE. To get started, go to the Remix website at https://remix.ethereum.org/.

Once you are on the Remix website, create a new file by clicking on the "+" icon in the left-hand sidebar. Save the file with a .sol extension (e.g., MyToken.sol). Copy and paste the following code into the file:

```javascript



  // SPDX-License-Identifier: MIT

pragma solidity >=0.8.11 ;

contract Movie{
    string public movie;

    function getMovie() public view  returns (string memory){
        return movie;
    }

    function setMovie(string memory movieName) public {
        movie = movieName;
    }
}

    



```

To compile the code, click on the "Solidity Compiler" tab in the left-hand sidebar. Make sure the "Compiler" option is set to "0.8.18" (or another compatible version), and then click on the "Compile ErrorHandling.sol" button.

Once the code is compiled, you can deploy the contract by clicking on the "Deploy & Run Transactions" tab in the left-hand sidebar. Select the "Error" contract from the dropdown menu, and then click on the "Deploy" button.

Once the contract is deployed, you can interact with it by passing the params in mint and burn functions and checking the values if it updates or not..


This is Blockchain based project developed by me.. to run the Project follow the following commands..
## Description
To deploy the contract first run the following command in terminal

```javascript
npx hardhat compile 
```
after the contract is compiled
run this command which will deploy your contract on test net volta this is a whole differnt thing

```javascript
npx hardhat run --network volta scripts/deploy.js
```

after your contract is deployed you will get your contract address in the console
paste it in src/Constant/constant.js

now that you have deployed your contract just run in terminal
and your project will run on web browser
```javascript
npm  start
```

## Authors

Pulkit Dubey 

## License

This project is licensed under the MIT License - see the LICENSE.md file for details
