// import {Mnemonic, QuaiHDWallet,QiHDWallet, Zone, SigningKey, computeAddress} from "../../project/quais.js/dist/quais.min.js";
const {Mnemonic, QuaiHDWallet,QiHDWallet, Zone, SigningKey, computeAddress, HDNodeWallet} = require("../../project/quais.js/dist/quais.umd.min.js");



 const mnemonic = Mnemonic.fromPhrase("fiscal document grain ecology wheat around sport nice guitar topple add north");
// console.log('seed: ', mnemonic.computeSeed();

const quaiWallet = QuaiHDWallet.fromMnemonic(mnemonic);
console.log('xpub = ',quaiWallet._root);








