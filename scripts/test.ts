// import type { NextPage } from "next";
import {ethers} from 'ethers';


const TOKEN_ADDRESS = "0x9C7CC1f4b043Afe73186a645b3F172445689FAE9"
const RPC_ENDPOINT_URL = "https://eth-sepolia.g.alchemy.com/v2/feS1H_RIpUyU1ydJPtLFlxrNomQOMcAw"
const LOTTERY_ADDRESS = "0xE983e0E9b08ed5F5e23991f153727744d3be207A"

const provider =  new ethers.JsonRpcProvider("https://eth-sepolia.g.alchemy.com/v2/feS1H_RIpUyU1ydJPtLFlxrNomQOMcAw");
async function main() {
    const currentBlock = await provider.getBlock('latest');
    console.log(currentBlock)
    const timestamp = currentBlock?.timestamp ?? 0;
    const currentBlockDate = new Date(timestamp * 1000);
    const closingTime = await contract.betsClosingTime();
    const closingTimeDate = new Date(Number(closingTime) * 1000);
    console.log(
      `The last block was mined at ${currentBlockDate.toLocaleDateString()} : ${currentBlockDate.toLocaleTimeString()}\n`
    );
    console.log(
       `lottery should close at ${closingTimeDate.toLocaleDateString()} : ${closingTimeDate.toLocaleTimeString()}\n`
     );
    // const timestamp = currentBlock?.timestamp ?? 0;
    // const currentBlockDate = new Date(timestamp * 1000);

  }
  
main().catch(console.error);


// const timestamp = currentBlock?.timestamp ?? 0;
// const currentBlockDate = new Date(timestamp * 1000);
