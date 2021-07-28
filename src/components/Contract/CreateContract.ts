import { ethers, providers } from "ethers";
import UnstoppableTweetsContract from "../../artifacts/contracts/UnstoppableTweets.sol/UnstoppableTweets.json";
import { UnstoppableTweets } from "../../typechain/UnstoppableTweets";

const contractAddress = "0x3b71AAdB278DF055b3EaE7150F02a7b5DC801577";

export function CreateContract(
  provider: ethers.providers.BaseProvider
): UnstoppableTweets {
  const daiContract = new ethers.Contract(
    contractAddress,
    UnstoppableTweetsContract.abi,
    provider
  ) as UnstoppableTweets;

  return daiContract;
}

export async function CreateContractWithSigner(): Promise<UnstoppableTweets | null> {
  const anywindow = window as any;

  if (!anywindow.ethereum) {
    console.error("no metamask, you wont be able to create user or posts");
    return null;
  }

  await anywindow.ethereum.request({ method: "eth_requestAccounts" });

  const provider = new ethers.providers.Web3Provider(anywindow.ethereum);
  const signer = provider.getSigner();

  return CreateContract(provider).connect(signer);
}
