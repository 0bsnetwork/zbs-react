import { ICancelOrder, IOrder, TRANSACTION_TYPE, TTx, TTxParams } from './transactions';
import { TSeedTypes } from './types';
export interface WithTxType {
    type: TRANSACTION_TYPE;
}
export declare const txTypeMap: {
    [type: number]: {
        sign: (tx: TTx | TTxParams & WithTxType, seed: TSeedTypes) => TTx;
    };
};
/**
 * Signs arbitrary transaction. Can also create signed transaction if provided params have type field
 * @param tx
 * @param seed
 */
export declare function signTx(tx: TTx | TTxParams & WithTxType, seed: TSeedTypes): TTx;
/**
 * Converts transaction or order object to Uint8Array
 * @param obj transaction or order
 */
export declare function serialize(obj: TTx | IOrder): Uint8Array;
/**
 * Verifies signature of transaction or order
 * @param obj
 * @param proofN - proof index. Takes first proof by default
 * @param publicKey - takes senderPublicKey by default
 */
export declare function verify(obj: TTx | IOrder, proofN?: number, publicKey?: string): boolean;
/**
 * Sends transaction to waves node
 * @param tx - transaction to send
 * @param nodeUrl - node address to send tx to. E.g. https://nodes.0bsnetwork.com/
 */
export declare function broadcast(tx: TTx, nodeUrl: string): Promise<any>;
/**
 * Retrieve information about waves account balance
 * @param address - waves address as base58 string
 * @param nodeUrl - node address to ask balance from. E.g. https://nodes.0bsnetwork.com/
 */
export declare function addressBalance(address: string, nodeUrl: string): Promise<number>;
/**
 * Get data from account dictionary by key
 * @param address - waves address as base58 string
 * @param key - dictionary key
 * @param nodeUrl - node address to ask balance from. E.g. https://nodes.0bsnetwork.com/
 */
export declare function addressDataByKey(address: string, key: string, nodeUrl: string): Promise<number | Uint8Array | string | null>;
/**
 * Sends order to matcher
 * @param ord - transaction to send
 * @param matcherUrl - matcher address to send order to. E.g. https://matcher.0bsnetwork.com/
 */
export declare function submitOrder(ord: IOrder, matcherUrl: string): Promise<any>;
/**
 * Sends cancel order command to matcher. Since matcher api requires amountAsset and priceAsset in request url,
 * this function requires them as params
 * @param co - signed cancelOrder object
 * @param amountAsset - amount asset of the order to be canceled
 * @param priceAsset - price asset of the order to be canceled
 * @param matcherUrl - matcher address to send order cancel to. E.g. https://matcher.0bsnetwork.com/
 */
export declare function cancelSubmittedOrder(co: ICancelOrder, amountAsset: string | null, priceAsset: string | null, matcherUrl: string): Promise<any>;
