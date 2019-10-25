import { WithProofs, TTx, IOrder, IBasicParams, WithSender } from './transactions';
import { TSeedTypes } from './types';
export declare const mapObj: <T, U, K extends string>(obj: Record<K, T>, f: (v: T) => U) => Record<K, U>;
export declare function getSenderPublicKey(seedsAndIndexes: [string, number?][], params: Partial<WithSender>): string;
export declare const base64Prefix: (str: string | null) => string | null;
export declare function addProof(tx: WithProofs, proof: string, index?: number): WithProofs;
export declare function convertToPairs(seedObj?: TSeedTypes): [string, number | undefined][];
export declare const isOrder: (p: any) => p is IOrder<string | number>;
export declare type CancellablePromise<T> = Promise<T> & {
    cancel: () => void;
};
export declare const delay: (timeout: number) => CancellablePromise<{}>;
export declare const waitForTx: (txId: string, timeout: number, apiBase: string) => Promise<TTx<string | number>>;
export declare function networkByte(p: number | string | undefined, def: number): number;
export declare function fee(params: IBasicParams, def: number): string | number;
