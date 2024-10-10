import {hash, CallData, ec, CairoOption, CairoOptionVariant, CairoCustomEnum} from "starknet"




const private_key = "0x0656df4f9f071f8a9f8a56b524e8477bebf938e55400174bb6c492e7db1de023"
const class_hash = "0x036078334509b514626504edc9fb252328d1a240e4e948bef8d0c08dff45927f"
const public_key = ec.starkCurve.getStarkKey(private_key);


const ownerSigner = new CairoCustomEnum({
    Starknet: {signer: public_key},
    Secp256k1: undefined,
    Secp256r1: undefined,
    Eip191: undefined,
    Webauthn: undefined,
});
// const guardian = "0x0";

// 0.4.0
const guardian = new CairoOption(CairoOptionVariant.None);

const address = hash.calculateContractAddressFromHash(
    public_key,
    class_hash,
    CallData.compile(
        {
            ownerSigner,
            guardian,
        }
    ),
    0,
)

// console.log(`address: ${address}`)










// 原始代码

// const ownerPrivateKey = "0x041df0b7bdfd5478eade3ed020a9846b14f96e00d47d8a60956cf81802e3da36";
// const classHash = "0x036078334509b514626504edc9fb252328d1a240e4e948bef8d0c08dff45927f"
// const ownerPubKey = ec.starkCurve.getStarkKey(ownerPrivateKey);
//
// const ownerSigner = new CairoCustomEnum({
//     Starknet: { signer: ownerPubKey },
//     Secp256k1: undefined,
//     Secp256r1: undefined,
//     Eip191: undefined,
//     Webauthn: undefined,
// });
//
// const guardian = new CairoOption(CairoOptionVariant.None);
//
// const calculatedAddress = hash.calculateContractAddressFromHash(
//     ownerPubKey, // salt
//     classHash,
//     CallData.compile({ owner: ownerSigner, guardian }), // constructor calldata
//     0 // deployer address
// );
// console.log(`owner public key: ${ownerPubKey}`);
// console.log(`classHash: ${classHash}`);
// console.log(`calculated address: ${calculatedAddress}`);

