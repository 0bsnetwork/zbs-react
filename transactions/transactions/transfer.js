"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const transactions_1 = require("../transactions");
const waves_crypto_1 = require("@waves/ts-lib-crypto");
const generic_1 = require("../generic");
const marshall_1 = require("@waves/marshall");
function transfer(paramsOrTx, seed) {
  const type = transactions_1.TRANSACTION_TYPE.TRANSFER;
  const version = paramsOrTx.version || 2;
  const seedsAndIndexes = generic_1.convertToPairs(seed);
  const senderPublicKey = generic_1.getSenderPublicKey(
    seedsAndIndexes,
    paramsOrTx
  );
  const tx = {
    type,
    version,
    senderPublicKey,
    assetId: paramsOrTx.assetId === "ZBS" ? null : paramsOrTx.assetId,
    recipient: paramsOrTx.recipient,
    amount: paramsOrTx.amount,
    attachment: paramsOrTx.attachment || "",
    fee: generic_1.fee(paramsOrTx, 5000000),
    feeAssetId: paramsOrTx.feeAssetId === "ZBS" ? null : paramsOrTx.feeAssetId,
    timestamp: paramsOrTx.timestamp || Date.now(),
    proofs: paramsOrTx.proofs || [],
    id: ""
  };
  const bytes = marshall_1.binary.serializeTx(tx);
  seedsAndIndexes.forEach(([s, i]) =>
    generic_1.addProof(tx, waves_crypto_1.signBytes(s, bytes), i)
  );
  tx.id = waves_crypto_1.address(bytes);
  return tx;
}
exports.transfer = transfer;
//# sourceMappingURL=transfer.js.map
