import { IIssueTransaction, IIssueParams, WithId, WithSender } from '../transactions';
import { TSeedTypes } from '../types';
/**
 * Creates and signs [[IIssueTransaction]].
 *
 * If no senderPublicKey is set, it will be derived from seed.
 * In case sender and signer are different, you need to pass senderPublicKey explicitly.
 *
 * You can use this function with multiple seeds. In this case it will sign transaction accordingly and will add one proof per seed.
 * Also you can use already formed [[IIssueTransaction]] instead of params.
 *
 * ### Usage
 * ```js
 * const { issue } = require('@0bsnetwork/zbs-transactions')
 *
 * const seed = 'example seed phrase'
 *
 * const params = {
 *   name: 'SCAM TOKEN',
 *   description: 'Awesome token that will tokenize tokenization tokenized',
 *   quantity: 1000000,
 *   //senderPublicKey: 'by default derived from seed',
 *   //reissuable: false
 *   //decimals: 8
 *   //timestamp: Date.now(),
 *   //fee: 100000000,
 *   //chainId: 'W'
 * }
 *
 * const signedIssueTx = issue(params, seed)
 * ```
 * ### Output
 * ```json
 * {
 *   "id": "HW9b6LGktG8pDMm4iTB1fLmF4q4TJBrvmnc73bbbAPQE",
 *   "type": 3,
 *   "version": 2,
 *   "senderPublicKey": "3SU7zKraQF8tQAF8Ho75MSVCBfirgaQviFXnseEw4PYg",
 *   "name": "SCAM TOKEN",
 *   "description": "Awesome token that will tokenize tokenization tokenized",
 *   "quantity": 1000000,
 *   "decimals": 8,
 *   "reissuable": false,
 *   "fee": 50000000000,
 *   "timestamp": 1554061592029,
 *   "chainId": 90,
 *   "proofs": [
 *     "53fLhJLjfuXMHkX9s8yq5Zcr4oqDaobczEN8m8g7AnEccbNEo9EG8k7LKByTjwRcYd9kpT2G1hzL525Uu4bRFUmR"
 *   ]
 * }
 * ```
 *
 */
export declare function issue(params: IIssueParams, seed: TSeedTypes): IIssueTransaction & WithId;
export declare function issue(paramsOrTx: IIssueParams & WithSender | IIssueTransaction, seed?: TSeedTypes): IIssueTransaction & WithId;
