import algosdk from "algosdk";

 const algodToken = "a".repeat(64);
 const server: string = "http://localhost";
 const port: string = "4001";

 const mnemonic: string =
 "cook ignore bean tennis wall reveal pulse slow vintage riot jealous object birth only table left fine project wood tooth budget token moral abandon tide";

 export function getClient(): algosdk.Algodv2 {
   let client = new algosdk.Algodv2(algodToken, server, port);
   return client;
}

export function getAccount(): algosdk.Account {
  let account = algosdk.mnemonicToSecretKey(mnemonic);
  return account;
}
