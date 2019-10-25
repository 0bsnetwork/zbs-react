"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const transactions_1 = require("../transactions");
const waves_crypto_1 = require("@waves/ts-lib-crypto");
const generic_1 = require("../generic");
const marshall_1 = require("@waves/marshall");
function invokeScript(paramsOrTx, seed) {
    const type = transactions_1.TRANSACTION_TYPE.INVOKE_SCRIPT;
    const version = paramsOrTx.version || 1;
    const seedsAndIndexes = generic_1.convertToPairs(seed);
    const senderPublicKey = generic_1.getSenderPublicKey(seedsAndIndexes, paramsOrTx);
    const tx = {
        type,
        version,
        senderPublicKey,
        dappAddress: paramsOrTx.dappAddress,
        call: paramsOrTx.call,
        payment: paramsOrTx.payment || [],
        fee: generic_1.fee(paramsOrTx, 100000),
        feeAssetId: paramsOrTx.feeAssetId,
        timestamp: Date.now(),
        chainId: generic_1.networkByte(paramsOrTx.chainId, 90),
        proofs: paramsOrTx.proofs || [],
        id: '',
    };
    const bytes = marshall_1.binary.serializeTx(tx);
    seedsAndIndexes.forEach(([s, i]) => generic_1.addProof(tx, waves_crypto_1.signBytes(bytes, s), i));
    tx.id = waves_crypto_1.hashBytes(bytes);
    //FixMe: for now node requires to have empty key field in args
    tx.call.args = tx.call.args.map(arg => (Object.assign({}, arg, { key: '' })));
    return tx;
}
exports.invokeScript = invokeScript;
//# sourceMappingURL=invoke-script.js.map