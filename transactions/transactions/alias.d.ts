import { IAliasParams, IAliasTransaction, WithId, WithSender } from '../transactions';
import { TSeedTypes } from '../types';
/**
 * Creates and signs [[IAliasTransaction]].
 *
 * If no senderPublicKey is set, it will be derived from seed.
 * In case sender and signer are different, you need to pass senderPublicKey explicitly.
 *
 * You can use this function with multiple seeds. In this case it will sign transaction accordingly and will add one proof per seed.
 * Also you can use already formed [[IAliasTransaction]] instead of params.
 *
 * ### Usage
 * ```js
 * const { alias } = require('@0bsnetwork/zbs-transactions')
 *
 * const seed = 'example seed phrase'
 *
 * const params = {
 *   alias: 'MyNewAlias',
 *   chainId: 'W',
 *   //senderPublicKey: 'by default derived from seed',
 *   //timestamp: Date.now(),
 *   //fee: 100000,
 * }
 *
 * const signedAliasTx = alias(params, seed)
 * ```
 * ### Output
 * ```json
 * {
 *   "id": "5guHBCfJkrcGd28SQou8FMY8HuX6YW7uwrgFPJabpFys",
 *   "type": 10,
 *   "version": 2,
 *   "senderPublicKey": "3SU7zKraQF8tQAF8Ho75MSVCBfirgaQviFXnseEw4PYg",
 *   "alias": "MyNewAlias",
 *   "fee": 1000000000,
 *   "timestamp": 1554061592129,
 *   "chainId": 87,
 *   "proofs": [
 *     "38GYcs42DtHK6DHfY3SbMe2JrFfpTsX684C3bWUpoFtYbA3t7uBgdPyvd7gMv9ykc3UZ7kKv2GtWXvFeURwVmEbW"
 *   ]
 * }
 * ```
 *
 */
export declare function alias(params: IAliasParams, seed: TSeedTypes): IAliasTransaction & WithId;
export declare function alias(paramsOrTx: IAliasParams & WithSender | IAliasTransaction, seed?: TSeedTypes): IAliasTransaction & WithId;
