"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const waves_crypto_1 = require("@waves/ts-lib-crypto");
const axios_1 = __importDefault(require("axios"));
exports.mapObj = (obj, f) => Object.entries(obj).map(([k, v]) => [k, f(v)])
    .reduce((acc, [k, v]) => (Object.assign({}, acc, { [k]: v })), {});
function getSenderPublicKey(seedsAndIndexes, params) {
    if (seedsAndIndexes.length === 0 && params.senderPublicKey == null)
        throw new Error('Please provide either seed or senderPublicKey');
    else {
        return params.senderPublicKey || waves_crypto_1.publicKey(seedsAndIndexes[0][0]);
    }
}
exports.getSenderPublicKey = getSenderPublicKey;
exports.base64Prefix = (str) => str == null || str.slice(0, 7) === 'base64:' ? str : 'base64:' + str;
function addProof(tx, proof, index) {
    if (index == null) {
        tx.proofs = [...tx.proofs, proof];
        return tx;
    }
    if (tx.proofs != null && !!tx.proofs[index])
        throw new Error(`Proof at index ${index} already exists.`);
    for (let i = tx.proofs.length; i < index; i++)
        tx.proofs.push('');
    tx.proofs[index] = proof;
    return tx;
}
exports.addProof = addProof;
function convertToPairs(seedObj) {
    //Due to typescript duck typing, 'string' type satisfies IIndexSeedMap interface. Because of this we should typecheck against string first
    if (seedObj == null) {
        return [];
    }
    else if (typeof seedObj === 'string') {
        return [[seedObj, undefined]];
    }
    else if (Array.isArray(seedObj)) {
        return seedObj.map((s, i) => [s, i]).filter(([s, _]) => s);
    }
    else {
        const keys = Object.keys(seedObj).map(k => parseInt(k)).filter(k => !isNaN(k)).sort();
        return keys.map(k => [seedObj[k], k]);
    }
}
exports.convertToPairs = convertToPairs;
exports.isOrder = (p) => p.assetPair !== undefined;
exports.delay = (timeout) => {
    const t = {};
    const p = new Promise((resolve, _) => {
        t.resolve = resolve;
        t.id = setTimeout(() => resolve(), timeout);
    });
    p.cancel = () => {
        t.resolve();
        clearTimeout(t.id);
    };
    return p;
};
exports.waitForTx = (txId, timeout, apiBase) => __awaiter(this, void 0, void 0, function* () {
    let expired = false;
    const to = exports.delay(timeout);
    to.then(() => expired = true);
    const promise = () => axios_1.default.get(`transactions/info/${txId}`, { baseURL: apiBase })
        .then(x => {
        to.cancel();
        return x.data;
    })
        .catch(_ => exports.delay(1000)
        .then(_ => expired ?
        Promise.reject(new Error('Tx wait stopped: timeout')) :
        promise()));
    return promise();
});
function networkByte(p, def) {
    switch (typeof p) {
        case 'string':
            return p.charCodeAt(0);
        case 'number':
            return p;
        default:
            return def;
    }
}
exports.networkByte = networkByte;
function fee(params, def) {
    if (params.fee)
        return params.fee;
    if (!params.additionalFee)
        return def;
    return def + params.additionalFee;
}
exports.fee = fee;
//# sourceMappingURL=generic.js.map