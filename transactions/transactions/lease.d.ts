import { ILeaseTransaction, ILeaseParams, WithId, WithSender } from '../transactions';
import { TSeedTypes } from '../types';
/**
 * Creates and signs [[ILeaseTransaction]].
 *
 * If no senderPublicKey is set, it will be derived from seed.
 * In case sender and signer are different, you need to pass senderPublicKey explicitly.
 *
 * You can use this function with multiple seeds. In this case it will sign transaction accordingly and will add one proof per seed.
 * Also you can use already formed [[ILeaseTransaction]] instead of params.
 *
 * ### Usage
 * ```js
 * const { lease } = require('@0bsnetwork/zbs-transactions')
 *
 * const seed = 'example seed phrase'
 *
 * const params = {
 *   amount: 100,
 *   recipient: '3P23fi1qfVw6RVDn4CH2a5nNouEtWNQ4THs',
 *   //senderPublicKey: 'by default derived from seed',
 *   //timestamp: Date.now(),
 *   //fee: 100000,
 * }
 *
 * const signedLeaseTx = lease(params, seed)
 * ```
 * ### Output
 * ```json
 * {
 *   "id": "GVFWRDMmFMLuvRTvpdWr5QG1uNUwdXWp7ciEHCGLHM3X",
 *   "type": 8,
 *   "version": 2,
 *   "senderPublicKey": "3SU7zKraQF8tQAF8Ho75MSVCBfirgaQviFXnseEw4PYg",
 *   "amount": 100,
 *   "recipient": "3P23fi1qfVw6RVDn4CH2a5nNouEtWNQ4THs",
 *   "fee": 500000000,
 *   "timestamp": 1554061592063,
 *   "proofs": [
 *     "4e85qgz4Ut5UfWA6G3YpL8afESQG3BJKxdVuQLDjDSM6eka9wcawgKFNSTE1XTjT9GQHY5V6ER5jGN3G44WWHqzg"
 *   ]
 * }
 * ```
 *
 */
export declare function lease(params: ILeaseParams, seed: TSeedTypes): ILeaseTransaction & WithId;
export declare function lease(paramsOrTx: ILeaseParams & WithSender | ILeaseTransaction, seed?: TSeedTypes): ILeaseTransaction & WithId;
