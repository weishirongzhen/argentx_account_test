import {quais} from "quais";


/// 助记词生成账户
// const mnemonic = quais.Mnemonic.fromPhrase("fiscal document grain ecology wheat around sport nice guitar topple add north");

let entropy = quais.Mnemonic.phraseToEntropy("fiscal document grain ecology wheat around sport nice guitar topple add north");

const options ={
    usePathing: true
}
const provider = new quais.JsonRpcProvider("https://rpc.quai.network", null, options);

console.log('entropy', entropy);
const mnemonic = quais.Mnemonic.fromEntropy(entropy);

console.log('mnemonic ', mnemonic.phrase)
const quaiWallet = quais.QuaiHDWallet.fromMnemonic(mnemonic);

let extendPrivateKey = quaiWallet.xPub;
console.log("extendPrivateKey=", extendPrivateKey);
// 获取第0个账户
let account = quaiWallet.getNextAddressSync(0, quais.Zone.Cyprus1);
console.log("address=", account.address);
console.log("publicKey=", account.pubKey);
console.log("privateKey=", account.priKey);
console.log("account index=", account.index);


let pubKey = new quais.SigningKey(account.priKey).compressedPublicKey
let address = quais.computeAddress(pubKey);
console.log("account pubKey=", pubKey);
console.log("account address=", address);
// let account1 = quaiWallet.deriveNextAddressNode(0, account.index + 1, quais.Zone.Cyprus1, false);
//
// console.log("account1 address=", account1.address);
// console.log("account1 publicKey=", account1.publicKey);
// console.log("account1 privateKey=", account1.privateKey);
// console.log("account1 account index=", account1.index);
//
// let account11 = quaiWallet.deriveNextAddressNode(0, 500, quais.Zone.Cyprus1, false);
// console.log("account11 address=", account11.address);
// console.log("account11 publicKey=", account11.publicKey);
// console.log("account11 privateKey=", account11.privateKey);
// console.log("account11 account index=", account11.index);
//
// let signer = new quais.SigningKey(account.priKey);
// console.log("signer pub=", signer.compressedPublicKey)
// const txObj = new quais.QuaiTransaction(account.address);
// txObj.to = '0x001106602F3bDF9eE4DCd7c0E06f96746bF25917';
// txObj.value = BigInt(100);
// txObj.chainId = BigInt(9000);
// txObj.type = 0;
// const provider = new quais.JsonRpcProvider("http://rpc.sandbox.quai.network:9200");
// quaiWallet.connect(provider)
// provider.get
// let nonce = await provider.getTransactionCount(txObj.from);
// txObj.nonce = nonce;
// // txObj.data = '0x12345aa1aa'
// let gas = await provider.estimateGas(txObj);
// // let gas = 0n;
// txObj.gasLimit = gas;
// console.log("gas:", gas);
// let chainID =await provider.send('quai_chainId',[]);
// console.log("nonce:", nonce);
// console.log("chainID:", chainID);
// // //
// let fee =await provider.getFeeData(quais.Zone.Cyprus1);
// console.log("feeData:", fee);
// txObj.maxFeePerGas = 2000000000n;
// txObj.maxPriorityFeePerGas = 10n;
// // let balance = await  provider.getBalance("0x002a8cf994379232561556Da89C148eeec9539cd");
// //
// //
// // quaiWallet.sendTransaction()
// // console.log('balance', balance);
// console.log('txObj', JSON.stringify(txObj));
// const signedTx = await  quaiWallet.signTransaction(txObj);
// // let a = await  provider.broadcastTransaction(quais.Zone.Cyprus1, signedTx);
// console.log('signedTx', signedTx);
//
// let btx = quais.QuaiTransaction.from(txObj);
//
// const digest = quais.keccak256(btx.unsignedSerialized);
// btx.signature = signer.sign(digest);
//
// console.log('signedTx  =',btx.serialized);




// const rsult  = await  quaiWallet.sendTransaction(txObj)
// console.log('rsult', rsult);

// /*
//  * The following fields are optional, but can be set as follows:

//  * txObj.nonce = await provider.getTransactionCount(from, 'latest');
//  * txObj.gasLimit = BigInt(1000000);
//  * txObj.maxPriorityFeePerGas = BigInt(10000000000),
//  * txObj.maxFeePerGas = BigInt(30000000000000),

// const tx = quais.QuaiTransactionLike();
// const btx = quais.QuaiTransaction.from(<quais.QuaiTransactionLike>tx);
//  const digest = keccak256(btx.unsignedSerialized);
//  btx.signature = this.signingKey.sign(digest);


// let now = new Date();
// console.log(now)
// for (var i = 0; i< 100; i++){
//     let account = quaiWallet.getNextAddressSync(0,quais.Zone.Cyprus1);
//    console.log(account.index);
//
// }
// now = new Date();
// console.log(now)

//
// let account0 = quaiWallet.getNextAddressSync(0, quais.Zone.Cyprus1);
//
// let signer = new quais.SigningKey(quaiWallet.getPrivateKey(account0.address));
// quaiWallet.signTransaction()
//
// console.log("account0=",account0.pubKey);
// console.log("signer=",signer.compressedPublicKey);


// index = 0
// index =1
// index =2
//
// index =index +1
//
// m/44/xxx/xxxx/x /0;
// m/44/xxx/xxxx/x /1;
// m/44/xxx/xxxx/x /2;
// m/44/xxx/xxxx/x /3;
// m/44/xxx/xxxx/x /4;
//
// 0  =>index  355
// 1  =>index  1000
// 2  =>index  4999
// 3  =>index  ？5100

// 交易参数转换
// const btx = QuaiTransaction.from(<QuaiTransactionLike>tx);
//  const digest = keccak256(btx.unsignedSerialized);
//  btx.signature = this.signingKey.sign(digest);










