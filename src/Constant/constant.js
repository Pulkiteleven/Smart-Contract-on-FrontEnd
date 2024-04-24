const contractAddress = "0xEbd35a0aA675146d1DB44677f957F33108F94e2D";

const contractAbi = [
    {
      "inputs": [],
      "name": "getMovie",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "movie",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "movieName",
          "type": "string"
        }
      ],
      "name": "setMovie",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];

  export {contractAddress,contractAbi};