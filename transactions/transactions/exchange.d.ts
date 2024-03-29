import { IExchangeTransaction, WithId } from '../transactions';
import { TSeedTypes } from '../types';
export declare function exchange(tx: IExchangeTransaction, seed?: TSeedTypes): IExchangeTransaction & WithId;
