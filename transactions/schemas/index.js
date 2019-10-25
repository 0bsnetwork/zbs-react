"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Ajv = require("ajv");
const generic_1 = require("../generic");
const transactions_1 = require("../transactions");
const manifest_1 = __importDefault(require("./manifest"));
exports.schemas = manifest_1.default;
const ajv = Ajv({
    allErrors: true,
});
exports.validators = generic_1.mapObj(manifest_1.default, (schema) => ajv.compile(schema));
exports.schemaTypeMap = {
    [transactions_1.TRANSACTION_TYPE.ISSUE]: {
        schema: manifest_1.default.IIssueTransaction,
        paramsSchema: manifest_1.default.IIssueParams,
        validator: exports.validators.IIssueTransaction,
        paramsValidator: exports.validators.IIssueParams,
    },
    [transactions_1.TRANSACTION_TYPE.TRANSFER]: {
        schema: manifest_1.default.ITransferTransaction,
        paramsSchema: manifest_1.default.ITransferParams,
        validator: exports.validators.ITransferTransaction,
        paramsValidator: exports.validators.ITransferParams,
    },
    [transactions_1.TRANSACTION_TYPE.REISSUE]: {
        schema: manifest_1.default.IReissueTransaction,
        paramsSchema: manifest_1.default.IReissueParams,
        validator: exports.validators.IReissueTransaction,
        paramsValidator: exports.validators.IReissueParams,
    },
    [transactions_1.TRANSACTION_TYPE.BURN]: {
        schema: manifest_1.default.IBurnTransaction,
        paramsSchema: manifest_1.default.IBurnParams,
        validator: exports.validators.IBurnTransaction,
        paramsValidator: exports.validators.IBurnParams,
    }, [transactions_1.TRANSACTION_TYPE.LEASE]: {
        schema: manifest_1.default.ILeaseTransaction,
        paramsSchema: manifest_1.default.ILeaseParams,
        validator: exports.validators.ILeaseTransaction,
        paramsValidator: exports.validators.ILeaseParams,
    },
    [transactions_1.TRANSACTION_TYPE.CANCEL_LEASE]: {
        schema: manifest_1.default.ICancelLeaseTransaction,
        paramsSchema: manifest_1.default.ICancelLeaseParams,
        validator: exports.validators.ICancelLeaseTransaction,
        paramsValidator: exports.validators.ICancelLeaseParams,
    },
    [transactions_1.TRANSACTION_TYPE.ALIAS]: {
        schema: manifest_1.default.IAliasTransaction,
        paramsSchema: manifest_1.default.IAliasParams,
        validator: exports.validators.IAliasTransaction,
        paramsValidator: exports.validators.IAliasParams,
    },
    [transactions_1.TRANSACTION_TYPE.MASS_TRANSFER]: {
        schema: manifest_1.default.IMassTransferTransaction,
        paramsSchema: manifest_1.default.IMassTransferParams,
        validator: exports.validators.IMassTransferTransaction,
        paramsValidator: exports.validators.IMassTransferParams,
    },
    [transactions_1.TRANSACTION_TYPE.DATA]: {
        schema: manifest_1.default.IDataTransaction,
        paramsSchema: manifest_1.default.IDataParams,
        validator: exports.validators.IDataTransaction,
        paramsValidator: exports.validators.IDataParams,
    },
    [transactions_1.TRANSACTION_TYPE.SET_SCRIPT]: {
        schema: manifest_1.default.ISetScriptTransaction,
        paramsSchema: manifest_1.default.ISetScriptParams,
        validator: exports.validators.ISetScriptTransaction,
        paramsValidator: exports.validators.ISetScriptParams,
    },
    [transactions_1.TRANSACTION_TYPE.SET_ASSET_SCRIPT]: {
        schema: manifest_1.default.ISetAssetScriptTransaction,
        paramsSchema: manifest_1.default.ISetAssetScriptParams,
        validator: exports.validators.ISetAssetScriptTransaction,
        paramsValidator: exports.validators.ISetAssetScriptParams,
    },
    [transactions_1.TRANSACTION_TYPE.ALIAS]: {
        schema: manifest_1.default.IAliasTransaction,
        paramsSchema: manifest_1.default.IAliasParams,
        validator: exports.validators.IAliasTransaction,
        paramsValidator: exports.validators.IAliasParams,
    },
};
//# sourceMappingURL=index.js.map