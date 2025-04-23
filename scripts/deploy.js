const algosdk = require("algosdk");

async function deploy() {
  const algodToken = "YOUR_ALGOD_TOKEN";
  const algodServer = "http://localhost";
  const algodPort = 4001;

  const client = new algosdk.Algodv2(algodToken, algodServer, algodPort);

  const creatorMnemonic = "YOUR_MNEMONIC";
  const creatorAccount = algosdk.mnemonicToSecretKey(creatorMnemonic);

  const approvalProgram = await readProgram("contracts/tic_tac_toe.teal");

  const params = await client.getTransactionParams().do();
  const txn = algosdk.makeApplicationCreateTxnFromObject({
    from: creatorAccount.addr,
    approvalProgram,
    clearProgram: new Uint8Array(),
    numGlobalInts: 1,
    numGlobalByteSlices: 1,
    numLocalInts: 0,
    numLocalByteSlices: 0,
    suggestedParams: params,
    onComplete: algosdk.OnApplicationComplete.NoOpOC,
  });

  const signedTxn = txn.signTxn(creatorAccount.sk);
  const { txId } = await client.sendRawTransaction(signedTxn).do();
  console.log("Transaction sent with ID:", txId);
}

async function readProgram(filePath) {
  const fs = require("fs").promises;
  const path = require("path");
  const file = await fs.readFile(path.resolve(filePath));
  return new Uint8Array(file);
}

deploy().catch(console.error);
