import {quais} from "quais";


const mnemonic = quais.Mnemonic.fromPhrase("fiscal document grain ecology wheat around sport nice guitar topple add north");
// console.log('seed: ', mnemonic.computeSeed());

const quaiWallet = quais.QuaiHDWallet.fromMnemonic(mnemonic);


for (var i = 0; i < 5; i++) {

   let addressInfo0 = quaiWallet.getNextAddressSync(0, quais.Zone.Cyprus1);
    console.log('Address info #1: ', addressInfo0);


}





