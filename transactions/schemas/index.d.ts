import Ajv = require('ajv');
import schemas from './manifest';
export declare const validators: Record<"TTx" | "IAliasTransaction" | "IIssueTransaction" | "ITransferTransaction" | "IReissueTransaction" | "IBurnTransaction" | "IExchangeTransaction" | "ILeaseTransaction" | "ICancelLeaseTransaction" | "IMassTransferTransaction" | "ISetScriptTransaction" | "ISetAssetScriptTransaction" | "IDataTransaction" | "ISponsorshipTransaction" | "IInvokeScriptTransaction" | "IOrder" | "IAliasParams" | "IIssueParams" | "ITransferParams" | "IReissueParams" | "IBurnParams" | "ILeaseParams" | "ICancelLeaseParams" | "IMassTransferParams" | "ISetScriptParams" | "ISetAssetScriptParams" | "IDataParams" | "ISponsorshipParams" | "IInvokeScriptParams", Ajv.ValidateFunction>;
export declare const schemaTypeMap: {
    [i: number]: {
        schema: any;
        paramsSchema: any;
        validator: Ajv.ValidateFunction;
        paramsValidator: Ajv.ValidateFunction;
    };
};
export { schemas };
