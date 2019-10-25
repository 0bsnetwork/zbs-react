import { IMassTransferTransaction, IMassTransferParams, WithId, WithSender } from '../transactions';
import { TSeedTypes } from '../types';
/**
 * Creates and signs [[IMassTransferTransaction]].
 *
 * If no senderPublicKey is set, it will be derived from seed.
 * In case sender and signer are different, you need to pass senderPublicKey explicitly.
 *
 * You can use this function with multiple seeds. In this case it will sign transaction accordingly and will add one proof per seed.
 * Also you can use already formed [[IMassTransferTransaction]] instead of params.
 *
 * ### Usage
 * ```js
 * const { massTransfer } = require('@0bsnetwork/zbs-transactions')
 *
 * const seed = 'example seed phrase'
 *
 * const params = {
 *   transfers: [
 *     {
 *       amount: 100,
 *       recipient: '3P23fi1qfVw6RVDn4CH2a5nNouEtWNQ4THs',
 *     },
 *     {
 *       amount: 200,
 *       recipient: '3PPnqZznWJbPG2Z1Y35w8tZzskiq5AMfUXr',
 *     },
 *   ],
 *   //senderPublicKey: 'by default derived from seed',
 *   //timestamp: Date.now(),
 *   //fee: 100000 + transfers.length * 50000,
 * }
 *
 * const signedMassTransferTx = massTransfer(params, seed)
 * ```
 * ### Output
 * ```json
 * {
 *   "id": "9eRAUyGCvp9hGsKdTxaXaN2TRLR2SjEwWDFSyGb4dupG",
 *   "type": 11,
 *   "version": 1,
 *   "senderPublicKey": "3SU7zKraQF8tQAF8Ho75MSVCBfirgaQviFXnseEw4PYg",
 *   "transfers": [
 *     {
 *       "amount": 100,
 *       "recipient": "3P23fi1qfVw6RVDn4CH2a5nNouEtWNQ4THs"
 *     },
 *     {
 *       "amount": 200,
 *       "recipient": "3PPnqZznWJbPG2Z1Y35w8tZzskiq5AMfUXr"
 *     }
 *   ],
 *   "fee": 10000000,
 *   "timestamp": 1554061592078,
 *   "attachment": "",
 *   "proofs": [
 *     "23JKC6f35kaTkPQjxN51ocA2teJcieXmQ34SgA2VDFCUmKb7eKAmrRLQE5RvnDaAf5igxZtRjTRoyVM3EZ9PTxgE"
 *   ]
 * }
 * ```
 *
 */
export declare function massTransfer(params: IMassTransferParams, seed: TSeedTypes): IMassTransferTransaction & WithId;
export declare function massTransfer(paramsOrTx: IMassTransferParams & WithSender | IMassTransferTransaction, seed?: TSeedTypes): IMassTransferTransaction & WithId;
