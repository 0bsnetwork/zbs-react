declare const _default: {
    TTx: {
        "anyOf": {
            "$ref": string;
        }[];
        "definitions": {
            "IAliasTransaction<LONG>": {
                "type": string;
                "properties": {
                    "type": {
                        "$ref": string;
                    };
                    "alias": {
                        "type": string;
                    };
                    "timestamp": {
                        "type": string;
                    };
                    "fee": {
                        "$ref": string;
                    };
                    "version": {
                        "type": string;
                    };
                    "proofs": {
                        "description": string;
                        "minItems": number;
                        "maxItems": number;
                        "type": string;
                        "items": {
                            "type": string;
                        };
                    };
                    "senderPublicKey": {
                        "description": string;
                        "type": string;
                    };
                    "chainId": {
                        "description": string;
                        "type": string;
                    };
                };
                "required": string[];
            };
            "TRANSACTION_TYPE.ALIAS": {
                "type": string;
                "enum": number[];
            };
            "LONG": {
                "type": string[];
            };
            "IIssueTransaction<LONG>": {
                "type": string;
                "properties": {
                    "type": {
                        "$ref": string;
                    };
                    "name": {
                        "minLength": number;
                        "maxLength": number;
                        "type": string;
                    };
                    "description": {
                        "maxLength": number;
                        "type": string;
                    };
                    "decimals": {
                        "type": string;
                    };
                    "quantity": {
                        "$ref": string;
                    };
                    "reissuable": {
                        "type": string;
                    };
                    "script": {
                        "type": string;
                    };
                    "timestamp": {
                        "type": string;
                    };
                    "fee": {
                        "$ref": string;
                    };
                    "version": {
                        "type": string;
                    };
                    "proofs": {
                        "description": string;
                        "minItems": number;
                        "maxItems": number;
                        "type": string;
                        "items": {
                            "type": string;
                        };
                    };
                    "senderPublicKey": {
                        "description": string;
                        "type": string;
                    };
                    "chainId": {
                        "description": string;
                        "type": string;
                    };
                };
                "required": string[];
            };
            "TRANSACTION_TYPE.ISSUE": {
                "type": string;
                "enum": number[];
            };
            "ITransferTransaction<LONG>": {
                "description": string;
                "type": string;
                "properties": {
                    "type": {
                        "$ref": string;
                    };
                    "recipient": {
                        "type": string;
                    };
                    "amount": {
                        "$ref": string;
                    };
                    "attachment": {
                        "type": string;
                    };
                    "feeAssetId": {
                        "type": string[];
                    };
                    "assetId": {
                        "type": string[];
                    };
                    "timestamp": {
                        "type": string;
                    };
                    "fee": {
                        "$ref": string;
                    };
                    "version": {
                        "type": string;
                    };
                    "proofs": {
                        "description": string;
                        "minItems": number;
                        "maxItems": number;
                        "type": string;
                        "items": {
                            "type": string;
                        };
                    };
                    "senderPublicKey": {
                        "description": string;
                        "type": string;
                    };
                };
                "required": string[];
            };
            "TRANSACTION_TYPE.TRANSFER": {
                "type": string;
                "enum": number[];
            };
            "IReissueTransaction<LONG>": {
                "type": string;
                "properties": {
                    "type": {
                        "$ref": string;
                    };
                    "assetId": {
                        "type": string;
                    };
                    "quantity": {
                        "$ref": string;
                    };
                    "reissuable": {
                        "type": string;
                    };
                    "timestamp": {
                        "type": string;
                    };
                    "fee": {
                        "$ref": string;
                    };
                    "version": {
                        "type": string;
                    };
                    "proofs": {
                        "description": string;
                        "minItems": number;
                        "maxItems": number;
                        "type": string;
                        "items": {
                            "type": string;
                        };
                    };
                    "senderPublicKey": {
                        "description": string;
                        "type": string;
                    };
                    "chainId": {
                        "description": string;
                        "type": string;
                    };
                };
                "required": string[];
            };
            "TRANSACTION_TYPE.REISSUE": {
                "type": string;
                "enum": number[];
            };
            "IBurnTransaction<LONG>": {
                "type": string;
                "properties": {
                    "type": {
                        "$ref": string;
                    };
                    "assetId": {
                        "type": string;
                    };
                    "quantity": {
                        "$ref": string;
                    };
                    "timestamp": {
                        "type": string;
                    };
                    "fee": {
                        "$ref": string;
                    };
                    "version": {
                        "type": string;
                    };
                    "proofs": {
                        "description": string;
                        "minItems": number;
                        "maxItems": number;
                        "type": string;
                        "items": {
                            "type": string;
                        };
                    };
                    "senderPublicKey": {
                        "description": string;
                        "type": string;
                    };
                    "chainId": {
                        "description": string;
                        "type": string;
                    };
                };
                "required": string[];
            };
            "TRANSACTION_TYPE.BURN": {
                "type": string;
                "enum": number[];
            };
            "ILeaseTransaction<LONG>": {
                "type": string;
                "properties": {
                    "type": {
                        "$ref": string;
                    };
                    "amount": {
                        "$ref": string;
                    };
                    "recipient": {
                        "type": string;
                    };
                    "timestamp": {
                        "type": string;
                    };
                    "fee": {
                        "$ref": string;
                    };
                    "version": {
                        "type": string;
                    };
                    "proofs": {
                        "description": string;
                        "minItems": number;
                        "maxItems": number;
                        "type": string;
                        "items": {
                            "type": string;
                        };
                    };
                    "senderPublicKey": {
                        "description": string;
                        "type": string;
                    };
                };
                "required": string[];
            };
            "TRANSACTION_TYPE.LEASE": {
                "type": string;
                "enum": number[];
            };
            "IExchangeTransaction<string|number>": {
                "type": string;
                "properties": {
                    "type": {
                        "$ref": string;
                    };
                    "order1": {
                        "$ref": string;
                    };
                    "order2": {
                        "$ref": string;
                    };
                    "price": {
                        "type": string[];
                    };
                    "amount": {
                        "type": string[];
                    };
                    "buyMatcherFee": {
                        "type": string[];
                    };
                    "sellMatcherFee": {
                        "type": string[];
                    };
                    "timestamp": {
                        "type": string;
                    };
                    "fee": {
                        "type": string[];
                    };
                    "version": {
                        "type": string;
                    };
                    "proofs": {
                        "description": string;
                        "minItems": number;
                        "maxItems": number;
                        "type": string;
                        "items": {
                            "type": string;
                        };
                    };
                    "senderPublicKey": {
                        "description": string;
                        "type": string;
                    };
                };
                "required": string[];
            };
            "TRANSACTION_TYPE.EXCHANGE": {
                "type": string;
                "enum": number[];
            };
            "IOrder<string|number>": {
                "type": string;
                "properties": {
                    "version": {
                        "type": string;
                    };
                    "orderType": {
                        "enum": string[];
                        "type": string;
                    };
                    "assetPair": {
                        "type": string;
                        "properties": {
                            "amountAsset": {
                                "type": string[];
                            };
                            "priceAsset": {
                                "type": string[];
                            };
                        };
                        "required": string[];
                    };
                    "price": {
                        "type": string[];
                    };
                    "amount": {
                        "type": string[];
                    };
                    "timestamp": {
                        "type": string;
                    };
                    "expiration": {
                        "type": string;
                    };
                    "matcherFee": {
                        "type": string;
                    };
                    "matcherPublicKey": {
                        "type": string;
                    };
                    "proofs": {
                        "description": string;
                        "minItems": number;
                        "maxItems": number;
                        "type": string;
                        "items": {
                            "type": string;
                        };
                    };
                    "senderPublicKey": {
                        "description": string;
                        "type": string;
                    };
                };
                "required": string[];
            };
            "ICancelLeaseTransaction<LONG>": {
                "type": string;
                "properties": {
                    "type": {
                        "$ref": string;
                    };
                    "leaseId": {
                        "type": string;
                    };
                    "timestamp": {
                        "type": string;
                    };
                    "fee": {
                        "$ref": string;
                    };
                    "version": {
                        "type": string;
                    };
                    "proofs": {
                        "description": string;
                        "minItems": number;
                        "maxItems": number;
                        "type": string;
                        "items": {
                            "type": string;
                        };
                    };
                    "senderPublicKey": {
                        "description": string;
                        "type": string;
                    };
                    "chainId": {
                        "description": string;
                        "type": string;
                    };
                };
                "required": string[];
            };
            "TRANSACTION_TYPE.CANCEL_LEASE": {
                "type": string;
                "enum": number[];
            };
            "IMassTransferTransaction<LONG>": {
                "type": string;
                "properties": {
                    "type": {
                        "$ref": string;
                    };
                    "transfers": {
                        "type": string;
                        "items": {
                            "$ref": string;
                        };
                    };
                    "attachment": {
                        "type": string;
                    };
                    "assetId": {
                        "type": string[];
                    };
                    "timestamp": {
                        "type": string;
                    };
                    "fee": {
                        "$ref": string;
                    };
                    "version": {
                        "type": string;
                    };
                    "proofs": {
                        "description": string;
                        "minItems": number;
                        "maxItems": number;
                        "type": string;
                        "items": {
                            "type": string;
                        };
                    };
                    "senderPublicKey": {
                        "description": string;
                        "type": string;
                    };
                };
                "required": string[];
            };
            "TRANSACTION_TYPE.MASS_TRANSFER": {
                "type": string;
                "enum": number[];
            };
            "IMassTransferItem<LONG>": {
                "type": string;
                "properties": {
                    "recipient": {
                        "type": string;
                    };
                    "amount": {
                        "$ref": string;
                    };
                };
                "required": string[];
            };
            "ISetScriptTransaction<LONG>": {
                "type": string;
                "properties": {
                    "type": {
                        "$ref": string;
                    };
                    "script": {
                        "description": string;
                        "type": string[];
                    };
                    "timestamp": {
                        "type": string;
                    };
                    "fee": {
                        "$ref": string;
                    };
                    "version": {
                        "type": string;
                    };
                    "proofs": {
                        "description": string;
                        "minItems": number;
                        "maxItems": number;
                        "type": string;
                        "items": {
                            "type": string;
                        };
                    };
                    "senderPublicKey": {
                        "description": string;
                        "type": string;
                    };
                    "chainId": {
                        "description": string;
                        "type": string;
                    };
                };
                "required": string[];
            };
            "TRANSACTION_TYPE.SET_SCRIPT": {
                "type": string;
                "enum": number[];
            };
            "ISponsorshipTransaction<LONG>": {
                "type": string;
                "properties": {
                    "type": {
                        "$ref": string;
                    };
                    "minSponsoredAssetFee": {
                        "$ref": string;
                        "description": string;
                    };
                    "assetId": {
                        "description": string;
                        "type": string;
                    };
                    "timestamp": {
                        "type": string;
                    };
                    "fee": {
                        "$ref": string;
                    };
                    "version": {
                        "type": string;
                    };
                    "proofs": {
                        "description": string;
                        "minItems": number;
                        "maxItems": number;
                        "type": string;
                        "items": {
                            "type": string;
                        };
                    };
                    "senderPublicKey": {
                        "description": string;
                        "type": string;
                    };
                };
                "required": string[];
            };
            "TRANSACTION_TYPE.SPONSORSHIP": {
                "type": string;
                "enum": number[];
            };
            "IDataTransaction<LONG>": {
                "type": string;
                "properties": {
                    "type": {
                        "$ref": string;
                    };
                    "data": {
                        "type": string;
                        "items": {
                            "$ref": string;
                        };
                    };
                    "timestamp": {
                        "type": string;
                    };
                    "fee": {
                        "$ref": string;
                    };
                    "version": {
                        "type": string;
                    };
                    "proofs": {
                        "description": string;
                        "minItems": number;
                        "maxItems": number;
                        "type": string;
                        "items": {
                            "type": string;
                        };
                    };
                    "senderPublicKey": {
                        "description": string;
                        "type": string;
                    };
                };
                "required": string[];
            };
            "TRANSACTION_TYPE.DATA": {
                "type": string;
                "enum": number[];
            };
            "DataEntry": {
                "type": string;
                "properties": {
                    "key": {
                        "type": string;
                    };
                    "type": {
                        "$ref": string;
                    };
                    "value": {
                        "type": string[];
                    };
                };
                "required": string[];
            };
            "DATA_FIELD_TYPE": {
                "enum": string[];
                "type": string;
            };
            "ISetAssetScriptTransaction<LONG>": {
                "type": string;
                "properties": {
                    "type": {
                        "$ref": string;
                    };
                    "assetId": {
                        "type": string;
                    };
                    "script": {
                        "description": string;
                        "type": string[];
                    };
                    "timestamp": {
                        "type": string;
                    };
                    "fee": {
                        "$ref": string;
                    };
                    "version": {
                        "type": string;
                    };
                    "proofs": {
                        "description": string;
                        "minItems": number;
                        "maxItems": number;
                        "type": string;
                        "items": {
                            "type": string;
                        };
                    };
                    "senderPublicKey": {
                        "description": string;
                        "type": string;
                    };
                    "chainId": {
                        "description": string;
                        "type": string;
                    };
                };
                "required": string[];
            };
            "TRANSACTION_TYPE.SET_ASSET_SCRIPT": {
                "type": string;
                "enum": number[];
            };
            "IInvokeScriptTransaction<LONG>": {
                "type": string;
                "properties": {
                    "type": {
                        "$ref": string;
                    };
                    "dappAddress": {
                        "type": string;
                    };
                    "feeAssetId": {
                        "type": string[];
                    };
                    "call": {
                        "type": string;
                        "properties": {
                            "function": {
                                "type": string;
                            };
                            "args": {
                                "type": string;
                                "items": {};
                            };
                        };
                        "required": string[];
                    };
                    "payment": {
                        "type": string;
                        "items": {
                            "$ref": string;
                        };
                    };
                    "timestamp": {
                        "type": string;
                    };
                    "fee": {
                        "$ref": string;
                    };
                    "version": {
                        "type": string;
                    };
                    "proofs": {
                        "description": string;
                        "minItems": number;
                        "maxItems": number;
                        "type": string;
                        "items": {
                            "type": string;
                        };
                    };
                    "senderPublicKey": {
                        "description": string;
                        "type": string;
                    };
                    "chainId": {
                        "description": string;
                        "type": string;
                    };
                };
                "required": string[];
            };
            "TRANSACTION_TYPE.INVOKE_SCRIPT": {
                "type": string;
                "enum": number[];
            };
            "IInvokeScriptPayment<string|number>": {
                "type": string;
                "properties": {
                    "assetId": {
                        "type": string[];
                    };
                    "amount": {
                        "type": string[];
                    };
                };
                "required": string[];
            };
        };
        "$schema": string;
        "$id": string;
    };
    IAliasTransaction: {
        "type": string;
        "properties": {
            "type": {
                "$ref": string;
            };
            "alias": {
                "type": string;
            };
            "timestamp": {
                "type": string;
            };
            "fee": {
                "$ref": string;
            };
            "version": {
                "type": string;
            };
            "proofs": {
                "description": string;
                "minItems": number;
                "maxItems": number;
                "type": string;
                "items": {
                    "type": string;
                };
            };
            "senderPublicKey": {
                "description": string;
                "type": string;
            };
            "chainId": {
                "description": string;
                "type": string;
            };
        };
        "required": string[];
        "definitions": {
            "TRANSACTION_TYPE.ALIAS": {
                "type": string;
                "enum": number[];
            };
            "LONG": {
                "type": string[];
            };
        };
        "$schema": string;
        "$id": string;
    };
    IIssueTransaction: {
        "type": string;
        "properties": {
            "type": {
                "$ref": string;
            };
            "name": {
                "minLength": number;
                "maxLength": number;
                "type": string;
            };
            "description": {
                "maxLength": number;
                "type": string;
            };
            "decimals": {
                "type": string;
            };
            "quantity": {
                "$ref": string;
            };
            "reissuable": {
                "type": string;
            };
            "script": {
                "type": string;
            };
            "timestamp": {
                "type": string;
            };
            "fee": {
                "$ref": string;
            };
            "version": {
                "type": string;
            };
            "proofs": {
                "description": string;
                "minItems": number;
                "maxItems": number;
                "type": string;
                "items": {
                    "type": string;
                };
            };
            "senderPublicKey": {
                "description": string;
                "type": string;
            };
            "chainId": {
                "description": string;
                "type": string;
            };
        };
        "required": string[];
        "definitions": {
            "TRANSACTION_TYPE.ISSUE": {
                "type": string;
                "enum": number[];
            };
            "LONG": {
                "type": string[];
            };
        };
        "$schema": string;
        "$id": string;
    };
    ITransferTransaction: {
        "description": string;
        "type": string;
        "properties": {
            "type": {
                "$ref": string;
            };
            "recipient": {
                "type": string;
            };
            "amount": {
                "$ref": string;
            };
            "attachment": {
                "type": string;
            };
            "feeAssetId": {
                "type": string[];
            };
            "assetId": {
                "type": string[];
            };
            "timestamp": {
                "type": string;
            };
            "fee": {
                "$ref": string;
            };
            "version": {
                "type": string;
            };
            "proofs": {
                "description": string;
                "minItems": number;
                "maxItems": number;
                "type": string;
                "items": {
                    "type": string;
                };
            };
            "senderPublicKey": {
                "description": string;
                "type": string;
            };
        };
        "required": string[];
        "definitions": {
            "TRANSACTION_TYPE.TRANSFER": {
                "type": string;
                "enum": number[];
            };
            "LONG": {
                "type": string[];
            };
        };
        "$schema": string;
        "$id": string;
    };
    IReissueTransaction: {
        "type": string;
        "properties": {
            "type": {
                "$ref": string;
            };
            "assetId": {
                "type": string;
            };
            "quantity": {
                "$ref": string;
            };
            "reissuable": {
                "type": string;
            };
            "timestamp": {
                "type": string;
            };
            "fee": {
                "$ref": string;
            };
            "version": {
                "type": string;
            };
            "proofs": {
                "description": string;
                "minItems": number;
                "maxItems": number;
                "type": string;
                "items": {
                    "type": string;
                };
            };
            "senderPublicKey": {
                "description": string;
                "type": string;
            };
            "chainId": {
                "description": string;
                "type": string;
            };
        };
        "required": string[];
        "definitions": {
            "TRANSACTION_TYPE.REISSUE": {
                "type": string;
                "enum": number[];
            };
            "LONG": {
                "type": string[];
            };
        };
        "$schema": string;
        "$id": string;
    };
    IBurnTransaction: {
        "type": string;
        "properties": {
            "type": {
                "$ref": string;
            };
            "assetId": {
                "type": string;
            };
            "quantity": {
                "$ref": string;
            };
            "timestamp": {
                "type": string;
            };
            "fee": {
                "$ref": string;
            };
            "version": {
                "type": string;
            };
            "proofs": {
                "description": string;
                "minItems": number;
                "maxItems": number;
                "type": string;
                "items": {
                    "type": string;
                };
            };
            "senderPublicKey": {
                "description": string;
                "type": string;
            };
            "chainId": {
                "description": string;
                "type": string;
            };
        };
        "required": string[];
        "definitions": {
            "TRANSACTION_TYPE.BURN": {
                "type": string;
                "enum": number[];
            };
            "LONG": {
                "type": string[];
            };
        };
        "$schema": string;
        "$id": string;
    };
    IExchangeTransaction: {
        "type": string;
        "properties": {
            "type": {
                "$ref": string;
            };
            "order1": {
                "$ref": string;
            };
            "order2": {
                "$ref": string;
            };
            "price": {
                "$ref": string;
            };
            "amount": {
                "$ref": string;
            };
            "buyMatcherFee": {
                "$ref": string;
            };
            "sellMatcherFee": {
                "$ref": string;
            };
            "timestamp": {
                "type": string;
            };
            "fee": {
                "$ref": string;
            };
            "version": {
                "type": string;
            };
            "proofs": {
                "description": string;
                "minItems": number;
                "maxItems": number;
                "type": string;
                "items": {
                    "type": string;
                };
            };
            "senderPublicKey": {
                "description": string;
                "type": string;
            };
        };
        "required": string[];
        "definitions": {
            "TRANSACTION_TYPE.EXCHANGE": {
                "type": string;
                "enum": number[];
            };
            "IOrder<string|number>": {
                "type": string;
                "properties": {
                    "version": {
                        "type": string;
                    };
                    "orderType": {
                        "enum": string[];
                        "type": string;
                    };
                    "assetPair": {
                        "type": string;
                        "properties": {
                            "amountAsset": {
                                "type": string[];
                            };
                            "priceAsset": {
                                "type": string[];
                            };
                        };
                        "required": string[];
                    };
                    "price": {
                        "type": string[];
                    };
                    "amount": {
                        "type": string[];
                    };
                    "timestamp": {
                        "type": string;
                    };
                    "expiration": {
                        "type": string;
                    };
                    "matcherFee": {
                        "type": string;
                    };
                    "matcherPublicKey": {
                        "type": string;
                    };
                    "proofs": {
                        "description": string;
                        "minItems": number;
                        "maxItems": number;
                        "type": string;
                        "items": {
                            "type": string;
                        };
                    };
                    "senderPublicKey": {
                        "description": string;
                        "type": string;
                    };
                };
                "required": string[];
            };
            "LONG": {
                "type": string[];
            };
        };
        "$schema": string;
        "$id": string;
    };
    ILeaseTransaction: {
        "type": string;
        "properties": {
            "type": {
                "$ref": string;
            };
            "amount": {
                "$ref": string;
            };
            "recipient": {
                "type": string;
            };
            "timestamp": {
                "type": string;
            };
            "fee": {
                "$ref": string;
            };
            "version": {
                "type": string;
            };
            "proofs": {
                "description": string;
                "minItems": number;
                "maxItems": number;
                "type": string;
                "items": {
                    "type": string;
                };
            };
            "senderPublicKey": {
                "description": string;
                "type": string;
            };
        };
        "required": string[];
        "definitions": {
            "TRANSACTION_TYPE.LEASE": {
                "type": string;
                "enum": number[];
            };
            "LONG": {
                "type": string[];
            };
        };
        "$schema": string;
        "$id": string;
    };
    ICancelLeaseTransaction: {
        "type": string;
        "properties": {
            "type": {
                "$ref": string;
            };
            "leaseId": {
                "type": string;
            };
            "timestamp": {
                "type": string;
            };
            "fee": {
                "$ref": string;
            };
            "version": {
                "type": string;
            };
            "proofs": {
                "description": string;
                "minItems": number;
                "maxItems": number;
                "type": string;
                "items": {
                    "type": string;
                };
            };
            "senderPublicKey": {
                "description": string;
                "type": string;
            };
            "chainId": {
                "description": string;
                "type": string;
            };
        };
        "required": string[];
        "definitions": {
            "TRANSACTION_TYPE.CANCEL_LEASE": {
                "type": string;
                "enum": number[];
            };
            "LONG": {
                "type": string[];
            };
        };
        "$schema": string;
        "$id": string;
    };
    IMassTransferTransaction: {
        "type": string;
        "properties": {
            "type": {
                "$ref": string;
            };
            "transfers": {
                "type": string;
                "items": {
                    "$ref": string;
                };
            };
            "attachment": {
                "type": string;
            };
            "assetId": {
                "type": string[];
            };
            "timestamp": {
                "type": string;
            };
            "fee": {
                "$ref": string;
            };
            "version": {
                "type": string;
            };
            "proofs": {
                "description": string;
                "minItems": number;
                "maxItems": number;
                "type": string;
                "items": {
                    "type": string;
                };
            };
            "senderPublicKey": {
                "description": string;
                "type": string;
            };
        };
        "required": string[];
        "definitions": {
            "TRANSACTION_TYPE.MASS_TRANSFER": {
                "type": string;
                "enum": number[];
            };
            "IMassTransferItem<LONG>": {
                "type": string;
                "properties": {
                    "recipient": {
                        "type": string;
                    };
                    "amount": {
                        "$ref": string;
                    };
                };
                "required": string[];
            };
            "LONG": {
                "type": string[];
            };
        };
        "$schema": string;
        "$id": string;
    };
    ISetScriptTransaction: {
        "type": string;
        "properties": {
            "type": {
                "$ref": string;
            };
            "script": {
                "description": string;
                "type": string[];
            };
            "timestamp": {
                "type": string;
            };
            "fee": {
                "$ref": string;
            };
            "version": {
                "type": string;
            };
            "proofs": {
                "description": string;
                "minItems": number;
                "maxItems": number;
                "type": string;
                "items": {
                    "type": string;
                };
            };
            "senderPublicKey": {
                "description": string;
                "type": string;
            };
            "chainId": {
                "description": string;
                "type": string;
            };
        };
        "required": string[];
        "definitions": {
            "TRANSACTION_TYPE.SET_SCRIPT": {
                "type": string;
                "enum": number[];
            };
            "LONG": {
                "type": string[];
            };
        };
        "$schema": string;
        "$id": string;
    };
    ISetAssetScriptTransaction: {
        "type": string;
        "properties": {
            "type": {
                "$ref": string;
            };
            "assetId": {
                "type": string;
            };
            "script": {
                "description": string;
                "type": string[];
            };
            "timestamp": {
                "type": string;
            };
            "fee": {
                "$ref": string;
            };
            "version": {
                "type": string;
            };
            "proofs": {
                "description": string;
                "minItems": number;
                "maxItems": number;
                "type": string;
                "items": {
                    "type": string;
                };
            };
            "senderPublicKey": {
                "description": string;
                "type": string;
            };
            "chainId": {
                "description": string;
                "type": string;
            };
        };
        "required": string[];
        "definitions": {
            "TRANSACTION_TYPE.SET_ASSET_SCRIPT": {
                "type": string;
                "enum": number[];
            };
            "LONG": {
                "type": string[];
            };
        };
        "$schema": string;
        "$id": string;
    };
    IDataTransaction: {
        "type": string;
        "properties": {
            "type": {
                "$ref": string;
            };
            "data": {
                "type": string;
                "items": {
                    "$ref": string;
                };
            };
            "timestamp": {
                "type": string;
            };
            "fee": {
                "$ref": string;
            };
            "version": {
                "type": string;
            };
            "proofs": {
                "description": string;
                "minItems": number;
                "maxItems": number;
                "type": string;
                "items": {
                    "type": string;
                };
            };
            "senderPublicKey": {
                "description": string;
                "type": string;
            };
        };
        "required": string[];
        "definitions": {
            "TRANSACTION_TYPE.DATA": {
                "type": string;
                "enum": number[];
            };
            "DataEntry": {
                "type": string;
                "properties": {
                    "key": {
                        "type": string;
                    };
                    "type": {
                        "$ref": string;
                    };
                    "value": {
                        "type": string[];
                    };
                };
                "required": string[];
            };
            "DATA_FIELD_TYPE": {
                "enum": string[];
                "type": string;
            };
            "LONG": {
                "type": string[];
            };
        };
        "$schema": string;
        "$id": string;
    };
    ISponsorshipTransaction: {
        "type": string;
        "properties": {
            "type": {
                "$ref": string;
            };
            "minSponsoredAssetFee": {
                "$ref": string;
                "description": string;
            };
            "assetId": {
                "description": string;
                "type": string;
            };
            "timestamp": {
                "type": string;
            };
            "fee": {
                "$ref": string;
            };
            "version": {
                "type": string;
            };
            "proofs": {
                "description": string;
                "minItems": number;
                "maxItems": number;
                "type": string;
                "items": {
                    "type": string;
                };
            };
            "senderPublicKey": {
                "description": string;
                "type": string;
            };
        };
        "required": string[];
        "definitions": {
            "TRANSACTION_TYPE.SPONSORSHIP": {
                "type": string;
                "enum": number[];
            };
            "LONG": {
                "type": string[];
            };
        };
        "$schema": string;
        "$id": string;
    };
    IInvokeScriptTransaction: {
        "type": string;
        "properties": {
            "type": {
                "$ref": string;
            };
            "dappAddress": {
                "type": string;
            };
            "feeAssetId": {
                "type": string[];
            };
            "call": {
                "type": string;
                "properties": {
                    "function": {
                        "type": string;
                    };
                    "args": {
                        "type": string;
                        "items": {};
                    };
                };
                "required": string[];
            };
            "payment": {
                "type": string;
                "items": {
                    "$ref": string;
                };
            };
            "timestamp": {
                "type": string;
            };
            "fee": {
                "$ref": string;
            };
            "version": {
                "type": string;
            };
            "proofs": {
                "description": string;
                "minItems": number;
                "maxItems": number;
                "type": string;
                "items": {
                    "type": string;
                };
            };
            "senderPublicKey": {
                "description": string;
                "type": string;
            };
            "chainId": {
                "description": string;
                "type": string;
            };
        };
        "required": string[];
        "definitions": {
            "TRANSACTION_TYPE.INVOKE_SCRIPT": {
                "type": string;
                "enum": number[];
            };
            "IInvokeScriptPayment<string|number>": {
                "type": string;
                "properties": {
                    "assetId": {
                        "type": string[];
                    };
                    "amount": {
                        "type": string[];
                    };
                };
                "required": string[];
            };
            "LONG": {
                "type": string[];
            };
        };
        "$schema": string;
        "$id": string;
    };
    IOrder: {
        "type": string;
        "properties": {
            "version": {
                "type": string;
            };
            "orderType": {
                "enum": string[];
                "type": string;
            };
            "assetPair": {
                "type": string;
                "properties": {
                    "amountAsset": {
                        "type": string[];
                    };
                    "priceAsset": {
                        "type": string[];
                    };
                };
                "required": string[];
            };
            "price": {
                "$ref": string;
            };
            "amount": {
                "$ref": string;
            };
            "timestamp": {
                "type": string;
            };
            "expiration": {
                "type": string;
            };
            "matcherFee": {
                "type": string;
            };
            "matcherPublicKey": {
                "type": string;
            };
            "proofs": {
                "description": string;
                "minItems": number;
                "maxItems": number;
                "type": string;
                "items": {
                    "type": string;
                };
            };
            "senderPublicKey": {
                "description": string;
                "type": string;
            };
        };
        "required": string[];
        "definitions": {
            "LONG": {
                "type": string[];
            };
        };
        "$schema": string;
        "$id": string;
    };
    IAliasParams: {
        "type": string;
        "properties": {
            "alias": {
                "type": string;
            };
            "fee": {
                "description": string;
                "$ref": string;
            };
            "additionalFee": {
                "description": string;
                "type": string;
            };
            "senderPublicKey": {
                "description": string;
                "type": string;
            };
            "timestamp": {
                "description": string;
                "type": string;
            };
            "chainId": {
                "description": string;
                "type": string[];
            };
        };
        "required": string[];
        "definitions": {
            "LONG": {
                "type": string[];
            };
        };
        "$schema": string;
        "$id": string;
    };
    IIssueParams: {
        "type": string;
        "properties": {
            "name": {
                "minLength": number;
                "maxLength": number;
                "type": string;
            };
            "description": {
                "maxLength": number;
                "type": string;
            };
            "quantity": {
                "$ref": string;
            };
            "decimals": {
                "type": string;
            };
            "reissuable": {
                "type": string;
            };
            "script": {
                "type": string;
            };
            "fee": {
                "description": string;
                "$ref": string;
            };
            "additionalFee": {
                "description": string;
                "type": string;
            };
            "senderPublicKey": {
                "description": string;
                "type": string;
            };
            "timestamp": {
                "description": string;
                "type": string;
            };
            "chainId": {
                "description": string;
                "type": string[];
            };
        };
        "required": string[];
        "definitions": {
            "LONG": {
                "type": string[];
            };
        };
        "$schema": string;
        "$id": string;
    };
    ITransferParams: {
        "type": string;
        "properties": {
            "recipient": {
                "type": string;
            };
            "amount": {
                "$ref": string;
            };
            "assetId": {
                "type": string[];
            };
            "feeAssetId": {
                "description": string;
                "type": string[];
            };
            "attachment": {
                "description": string;
                "type": string;
            };
            "fee": {
                "description": string;
                "$ref": string;
            };
            "additionalFee": {
                "description": string;
                "type": string;
            };
            "senderPublicKey": {
                "description": string;
                "type": string;
            };
            "timestamp": {
                "description": string;
                "type": string;
            };
        };
        "required": string[];
        "definitions": {
            "LONG": {
                "type": string[];
            };
        };
        "$schema": string;
        "$id": string;
    };
    IReissueParams: {
        "type": string;
        "properties": {
            "assetId": {
                "type": string;
            };
            "quantity": {
                "$ref": string;
            };
            "reissuable": {
                "type": string;
            };
            "fee": {
                "description": string;
                "$ref": string;
            };
            "additionalFee": {
                "description": string;
                "type": string;
            };
            "senderPublicKey": {
                "description": string;
                "type": string;
            };
            "timestamp": {
                "description": string;
                "type": string;
            };
            "chainId": {
                "description": string;
                "type": string[];
            };
        };
        "required": string[];
        "definitions": {
            "LONG": {
                "type": string[];
            };
        };
        "$schema": string;
        "$id": string;
    };
    IBurnParams: {
        "type": string;
        "properties": {
            "assetId": {
                "type": string;
            };
            "quantity": {
                "$ref": string;
            };
            "fee": {
                "description": string;
                "$ref": string;
            };
            "additionalFee": {
                "description": string;
                "type": string;
            };
            "senderPublicKey": {
                "description": string;
                "type": string;
            };
            "timestamp": {
                "description": string;
                "type": string;
            };
            "chainId": {
                "description": string;
                "type": string[];
            };
        };
        "required": string[];
        "definitions": {
            "LONG": {
                "type": string[];
            };
        };
        "$schema": string;
        "$id": string;
    };
    ILeaseParams: {
        "type": string;
        "properties": {
            "recipient": {
                "type": string;
            };
            "amount": {
                "$ref": string;
            };
            "fee": {
                "description": string;
                "$ref": string;
            };
            "additionalFee": {
                "description": string;
                "type": string;
            };
            "senderPublicKey": {
                "description": string;
                "type": string;
            };
            "timestamp": {
                "description": string;
                "type": string;
            };
        };
        "required": string[];
        "definitions": {
            "LONG": {
                "type": string[];
            };
        };
        "$schema": string;
        "$id": string;
    };
    ICancelLeaseParams: {
        "type": string;
        "properties": {
            "leaseId": {
                "type": string;
            };
            "fee": {
                "description": string;
                "$ref": string;
            };
            "additionalFee": {
                "description": string;
                "type": string;
            };
            "senderPublicKey": {
                "description": string;
                "type": string;
            };
            "timestamp": {
                "description": string;
                "type": string;
            };
            "chainId": {
                "description": string;
                "type": string[];
            };
        };
        "required": string[];
        "definitions": {
            "LONG": {
                "type": string[];
            };
        };
        "$schema": string;
        "$id": string;
    };
    IMassTransferParams: {
        "type": string;
        "properties": {
            "transfers": {
                "type": string;
                "items": {
                    "$ref": string;
                };
            };
            "attachment": {
                "description": string;
                "type": string;
            };
            "assetId": {
                "type": string[];
            };
            "fee": {
                "description": string;
                "$ref": string;
            };
            "additionalFee": {
                "description": string;
                "type": string;
            };
            "senderPublicKey": {
                "description": string;
                "type": string;
            };
            "timestamp": {
                "description": string;
                "type": string;
            };
        };
        "required": string[];
        "definitions": {
            "IMassTransferItem<string|number>": {
                "type": string;
                "properties": {
                    "recipient": {
                        "type": string;
                    };
                    "amount": {
                        "type": string[];
                    };
                };
                "required": string[];
            };
            "LONG": {
                "type": string[];
            };
        };
        "$schema": string;
        "$id": string;
    };
    ISetScriptParams: {
        "type": string;
        "properties": {
            "script": {
                "description": string;
                "type": string[];
            };
            "fee": {
                "description": string;
                "$ref": string;
            };
            "additionalFee": {
                "description": string;
                "type": string;
            };
            "senderPublicKey": {
                "description": string;
                "type": string;
            };
            "timestamp": {
                "description": string;
                "type": string;
            };
            "chainId": {
                "description": string;
                "type": string[];
            };
        };
        "required": string[];
        "definitions": {
            "LONG": {
                "type": string[];
            };
        };
        "$schema": string;
        "$id": string;
    };
    ISetAssetScriptParams: {
        "type": string;
        "properties": {
            "script": {
                "description": string;
                "type": string;
            };
            "assetId": {
                "type": string;
            };
            "fee": {
                "description": string;
                "$ref": string;
            };
            "additionalFee": {
                "description": string;
                "type": string;
            };
            "senderPublicKey": {
                "description": string;
                "type": string;
            };
            "timestamp": {
                "description": string;
                "type": string;
            };
            "chainId": {
                "description": string;
                "type": string[];
            };
        };
        "required": string[];
        "definitions": {
            "LONG": {
                "type": string[];
            };
        };
        "$schema": string;
        "$id": string;
    };
    IDataParams: {
        "type": string;
        "properties": {
            "data": {
                "type": string;
                "items": {
                    "anyOf": {
                        "$ref": string;
                    }[];
                };
            };
            "fee": {
                "description": string;
                "$ref": string;
            };
            "additionalFee": {
                "description": string;
                "type": string;
            };
            "senderPublicKey": {
                "description": string;
                "type": string;
            };
            "timestamp": {
                "description": string;
                "type": string;
            };
        };
        "required": string[];
        "definitions": {
            "TypelessDataEntry": {
                "type": string;
                "properties": {
                    "key": {
                        "type": string;
                    };
                    "value": {
                        "anyOf": ({
                            "description": string;
                            "type": string;
                            "additionalProperties": boolean;
                            "patternProperties": {
                                "^[0-9]+$": {
                                    "type": string;
                                };
                            };
                            "items"?: undefined;
                        } | {
                            "type": string;
                            "items": {
                                "type": string;
                            };
                            "description"?: undefined;
                            "additionalProperties"?: undefined;
                            "patternProperties"?: undefined;
                        } | {
                            "type": string[];
                            "description"?: undefined;
                            "additionalProperties"?: undefined;
                            "patternProperties"?: undefined;
                            "items"?: undefined;
                        })[];
                    };
                };
                "required": string[];
            };
            "DataEntry": {
                "type": string;
                "properties": {
                    "key": {
                        "type": string;
                    };
                    "type": {
                        "$ref": string;
                    };
                    "value": {
                        "type": string[];
                    };
                };
                "required": string[];
            };
            "DATA_FIELD_TYPE": {
                "enum": string[];
                "type": string;
            };
            "LONG": {
                "type": string[];
            };
        };
        "$schema": string;
        "$id": string;
    };
    ISponsorshipParams: {
        "type": string;
        "properties": {
            "assetId": {
                "description": string;
                "type": string;
            };
            "minSponsoredAssetFee": {
                "$ref": string;
                "description": string;
            };
            "fee": {
                "description": string;
                "$ref": string;
            };
            "additionalFee": {
                "description": string;
                "type": string;
            };
            "senderPublicKey": {
                "description": string;
                "type": string;
            };
            "timestamp": {
                "description": string;
                "type": string;
            };
        };
        "required": string[];
        "definitions": {
            "LONG": {
                "type": string[];
            };
        };
        "$schema": string;
        "$id": string;
    };
    IInvokeScriptParams: {
        "type": string;
        "properties": {
            "dappAddress": {
                "type": string;
            };
            "feeAssetId": {
                "type": string[];
            };
            "call": {
                "type": string;
                "properties": {
                    "function": {
                        "type": string;
                    };
                    "args": {
                        "type": string;
                        "items": {
                            "type": string;
                            "properties": {
                                "type": {
                                    "enum": string[];
                                    "type": string;
                                };
                                "value": {
                                    "type": string[];
                                };
                            };
                            "required": string[];
                        };
                    };
                };
                "required": string[];
            };
            "payment": {
                "type": string;
                "items": {
                    "$ref": string;
                };
            };
            "fee": {
                "description": string;
                "$ref": string;
            };
            "additionalFee": {
                "description": string;
                "type": string;
            };
            "senderPublicKey": {
                "description": string;
                "type": string;
            };
            "timestamp": {
                "description": string;
                "type": string;
            };
            "chainId": {
                "description": string;
                "type": string[];
            };
        };
        "required": string[];
        "definitions": {
            "IInvokeScriptPayment<string|number>": {
                "type": string;
                "properties": {
                    "assetId": {
                        "type": string[];
                    };
                    "amount": {
                        "type": string[];
                    };
                };
                "required": string[];
            };
            "LONG": {
                "type": string[];
            };
        };
        "$schema": string;
        "$id": string;
    };
};
export default _default;
