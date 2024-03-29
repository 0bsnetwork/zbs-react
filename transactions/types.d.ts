export declare type TOption<T> = T | undefined | null;
export interface IIndexSeedMap {
    [key: number]: string;
}
export declare type TSeedTypes = string | TOption<string>[] | IIndexSeedMap;
