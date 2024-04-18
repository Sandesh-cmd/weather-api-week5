import algosdk from "algosdk";
const algodToken = "a".repeat(64);
const server = "http://localhost";
const port = "4001";
const mnemonic = "cook ignore bean tennis wall reveal pulse slow vintage riot jealous object birth only table left fine project wood tooth budget token moral abandon tide";
export function getClient() {
    let client = new algosdk.Algodv2(algodToken, server, port);
    return client;
}
export function getAccount() {
    let account = algosdk.mnemonicToSecretKey(mnemonic);
    return account;
}
//# sourceMappingURL=config.js.map