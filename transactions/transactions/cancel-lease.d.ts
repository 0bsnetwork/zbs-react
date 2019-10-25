import { ICancelLeaseTransaction, ICancelLeaseParams, WithId, WithSender } from '../transactions';
import { TSeedTypes } from '../types';
/**
 * Creates and signs [[ICancelLeaseTransaction]].
 *
 * If no senderPublicKey is set, it will be derived from seed.
 * In case sender and signer are different, you need to pass senderPublicKey explicitly.
 *
 * You can use this function with multiple seeds. In this case it will sign transaction accordingly and will add one proof per seed.
 * Also you can use already formed [[ICancelLeaseTransaction]] instead of params.
 *
 * ### Usage
 * ```js
 * const { cancelLease } = require('@0bsnetwork/zbs-transactions')
 *
 * const seed = 'example seed phrase'
 *
 * const params = {
 *   leaseId: '2fYhSNrXpyKgbtHzh5tnpvnQYuL7JpBFMBthPSGFrqqg',
 *   //senderPublicKey: 'by default derived from seed',
 *   //timestamp: Date.now(),
 *   //fee: 100000,
 *   //chainId: 'W'
 * }
 *
 * const signedCancelLeaseTx = cancelLease(params, seed)
 * ```
 * ### Output
 * ```json
 * {
 *   "id": "3muu1m5FFD5U31LxcfEkPp6v3AEeccqPjSv1kcY4s6Fm",
 *   "type": 9,
 *   "version": 2,
 *   "senderPublicKey": "3SU7zKraQF8tQAF8Ho75MSVCBfirgaQviFXnseEw4PYg",
 *   "leaseId": "2fYhSNrXpyKgbtHzh5tnpvnQYuL7JpBFMBthPSGFrqqg",
 *   "fee": 100000000,
 *   "timestamp": 1554061591983,
 *   "chainId": 90,
 *   "proofs": [
 *     "k3uvLQXBdDSVqjYWcfkG6YgZyX4c9HTWTukqXnifLPWQcp44Y84SQdWYbpovsTGHq9PpxaDV25Z4qkkaiGWxFgr"
 *   ]
 * }
 * ```
 *
 */
export declare function cancelLease(params: ICancelLeaseParams, seed: TSeedTypes): ICancelLeaseTransaction & WithId;
export declare function cancelLease(paramsOrTx: ICancelLeaseParams & WithSender | ICancelLeaseTransaction, seed?: TSeedTypes): ICancelLeaseTransaction & WithId;
