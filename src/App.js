import logo from './logo.svg';
import './App.css';
import {ethers} from 'ethers';
import { useState, useEffect } from 'react';
import { contractAbi, contractAddress } from './Constant/constant';
// import { connected } from 'process';
import React from 'react';
import Login from './Components/login';

function App() {
  const [provider, setProvider] = useState(null);
  const [account, setAccount] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [movieName,setMovieName] = useState('');
  const [newmovieName,setnewMovieName] = useState('');



  async function connectToMetaMask(){
    if(window.ethereum){
      try{
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(provider);
        await provider.send("eth_requestAccounts",[]);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        setIsConnected(true)
        console.log("MetaMask Connected : "   + address );

      }
      catch(err){
        console.log(err);
      }
    }
    else{
      console.log("Metamask is not detected");
    }
  }

  async function getMovie(){
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
  
  const contractInstance = new ethers.Contract(
    contractAddress,contractAbi,signer
  );

  try{
    const mName = await contractInstance.getMovie();
    setMovieName(mName);
  }
 catch(err){
  console.log(err);
 }
  }

  async function setMovie(){
    console.log("Hello");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const contractInstance = new ethers.Contract (
        contractAddress, contractAbi, signer
      );

      const sm = await contractInstance.setMovie(
        newmovieName
      );
      await sm.wait();
      setMovieName(newmovieName);
  }
  if(isConnected){
    return (
      <div className='bg-blue-50 flex items-center justify-center h-screen'>
      
      <form className="max-w-md mx-auto mt-8">
      <div className="mb-4">
          <h3 className="text-3xl font-bold mb-8 text-gray-800"> Current Movie Name</h3><br/>
          <h1  className="text-5xl font-bold mb-8 text-blue-800">{movieName}</h1>
        </div>
        <div className="mb-4">
          <label htmlFor="Moviename" className="block text-gray-700 font-bold mb-2">Movie Name</label>
          <input
            type="text"
            id="Moviename"
            className="border border-gray-300 rounded px-4 py-2 w-full"
            value={newmovieName}
            onChange={(e) => setnewMovieName(e.target.value)}
          />
        </div>
        <div className="text-center">
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          
            onClick={setMovie}
          >
            Set Movie
          </button>
          <button
            type="button"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          
            onClick={getMovie}
          >
            Get Movie
          </button>
        </div>
      </form>
      </div>
    );
  }
  else{
    return (
      <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-8 text-blue-700">Connect Your Wallet</h1>
        <div className="flex flex-col items-center space-y-4">
          <button 
          onClick={connectToMetaMask}
          className="w-32 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
           Connect
          </button>
          
        </div>
      </div>
    </div>
      );
  }
}

export default App;
