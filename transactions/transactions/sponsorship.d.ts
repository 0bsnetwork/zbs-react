import { WithId, WithSender, ISponsorshipParams, ISponsorshipTransaction } from '../transactions';
import { TSeedTypes } from '../types';
/**
 * Creates and signs [[ISponsorshipTransaction]].
 *
 * If no senderPublicKey is set, it will be derived from seed.
 * In case sender and signer are different, you need to pass senderPublicKey explicitly.
 *
 * You can use this function with multiple seeds. In this case it will sign transaction accordingly and will add one proof per seed.
 * Also you can use already formed [[ISponsorshipTransaction]] instead of params.
 *
 * ### Usage
 * ```js
 * const { sponsorship } = require('@0bsnetwork/zbs-transactions')
 *
 * const seed = 'example seed phrase'
 *
 * const params = {
 *   assetId: '4uK8i4ThRGbehENwa6MxyLtxAjAo1Rj9fduborGExarC',
 *   minSponsoredAssetFee: 100,
 *   //senderPublicKey: 'by default derived from seed',
 *   //timestamp: Date.now(),
 *   //fee: 100000,
 *   //chainId: 'W',
 * }
 *
 * const signedSponsorshipTx = sponsorship(params, seed)
 * ```
 * ### Output
 * ```json
 * {
 *   "id": "HZ6NaGNnyaYFF23YdNCvkMsr8PyW88iGJPaBWyPUce5f",
 *   "type": 14,
 *   "version": 1,
 *   "senderPublicKey": "3SU7zKraQF8tQAF8Ho75MSVCBfirgaQviFXnseEw4PYg",
 *   "minSponsoredAssetFee": 100,
 *   "assetId": "4uK8i4ThRGbehENwa6MxyLtxAjAo1Rj9fduborGExarC",
 *   "fee": 5000000000,
 *   "timestamp": 1554061592156,
 *   "proofs": [
 *     "tyn2HXrh3LhtzyQdDCnUsnMfFHXrQc7UUakfYg1vZmwB8uUn64vJcBGnxw1vDMkiVpgKMM8F3FeiRcQ9jkWn6CQ"
 *   ]
 * }
 * ```
 *
 */
export declare function sponsorship(params: ISponsorshipParams, seed: TSeedTypes): ISponsorshipTransaction & WithId;
export declare function sponsorship(paramsOrTx: ISponsorshipParams & WithSender | ISponsorshipTransaction, seed?: TSeedTypes): ISponsorshipTransaction & WithId;
