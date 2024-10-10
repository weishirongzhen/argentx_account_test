import {quais, SigningKey, computeAddress} from "quais";


 const mnemonic = quais.Mnemonic.fromPhrase("fiscal document grain ecology wheat around sport nice guitar topple add north");
// console.log('seed: ', mnemonic.computeSeed());

const quaiWallet = quais.QuaiHDWallet.fromMnemonic(mnemonic);
const qiWallet = quais.QiHDWallet.fromMnemonic(mnemonic);


const aa = await  qiWallet.getNextAddress(0,quais.Zone.Cyprus1)

console.log(aa);
console.log("````aa````");
const addressInfo1 = await  quaiWallet.getNextAddress(0,quais.Zone.Cyprus1);
console.log('Address info #1: ', addressInfo1.address);
const privateKey  = quaiWallet.getPrivateKey(addressInfo1.address);
console.log('privateKey #1: ', privateKey);

 // quaiWallet.addAddress(addressInfo1.account,addressInfo1.index);

const addressInfo2 = await  quaiWallet.getNextAddress(1,quais.Zone.Cyprus1);
console.log('Address info #2: ', addressInfo2.address);
const addressNode = quaiWallet.deriveNextAddressNode(2,1,quais.Zone.Cyprus1,false);
console.log('addressNode: ', addressNode);

console.log('addresses: ', quaiWallet.getAddressesForAccount(0));


const publicKey = SigningKey.computePublicKey(privateKey, true);
console.log('publicKey: ', publicKey);
let a = computeAddress("0x02b3e6cd376d311b9573aa6e186ecc6145fdec118130525b16c3e81d70144c490c" );
let a1 = computeAddress("0x012bd85110d902284b2bcc7e7853c1f3da34236d17594785457d61a454da5611" );
console.log('address a : ', a);
console.log('address a1: ', a1);




