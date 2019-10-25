"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schemas_1 = require("./schemas");
const isLongType = (type) => {
    if (typeof type !== 'object' || type.length !== 2)
        return false;
    return type[0] === 'string' && type[1] === 'number';
};
const resolveProp = (fullPath, fullSchema) => {
    function go(path, schema) {
        if (!schema)
            return;
        if (schema.$ref) {
            const refArr = schema.$ref.split('/');
            const definition = refArr[refArr.length - 1];
            return go(path, fullSchema.definitions[definition]);
        }
        if (path.length === 0)
            return schema;
        if (typeof schema !== 'object' || (!schema.type && !schema.$ref))
            return undefined;
        if (schema.type === 'object')
            return go(path.slice(1), schema.properties[path[0]]);
        if (schema.type === 'array') {
            return go(path.slice(1), schema.items);
        }
    }
    return go(fullPath, fullSchema);
};
function txToJson(value) {
    const path = [];
    const stack = [];
    const type = value.type;
    function stringifyValue(value) {
        if (typeof value === 'string') {
            const prop = resolveProp(path, schemas_1.schemaTypeMap[type] && schemas_1.schemaTypeMap[type].schema);
            if (prop && isLongType(prop.type)) {
                return value;
            }
        }
        if (typeof value === 'boolean' || value instanceof Boolean ||
            value === null ||
            typeof value === 'number' || value instanceof Number ||
            typeof value === 'string' || value instanceof String ||
            value instanceof Date) {
            return JSON.stringify(value);
        }
        if (Array.isArray(value)) {
            return stringifyArray(value);
        }
        if (value && typeof value === 'object') {
            return stringifyObject(value);
        }
        return undefined;
    }
    function stringifyArray(array) {
        let str = '[';
        const stackIndex = stack.length;
        stack[stackIndex] = array;
        for (let i = 0; i < array.length; i++) {
            let key = i + '';
            let item = array[i];
            if (typeof item !== 'undefined' && typeof item !== 'function') {
                path[stackIndex] = key;
                str += stringifyValue(item);
            }
            else {
                str += 'null';
            }
            if (i < array.length - 1) {
                str += ',';
            }
        }
        stack.length = stackIndex;
        path.length = stackIndex;
        str += ']';
        return str;
    }
    function stringifyObject(object) {
        let first = true;
        let str = '{';
        const stackIndex = stack.length;
        stack[stackIndex] = object;
        for (let key in object) {
            if (object.hasOwnProperty(key)) {
                let value = object[key];
                if (includeProperty(value)) {
                    if (first) {
                        first = false;
                    }
                    else {
                        str += ',';
                    }
                    str += ('"' + key + '":');
                    path[stackIndex] = key;
                    str += stringifyValue(value);
                }
            }
        }
        stack.length = stackIndex;
        path.length = stackIndex;
        str += '}';
        return str;
    }
    function includeProperty(value) {
        return typeof value !== 'undefined'
            && typeof value !== 'function';
    }
    return stringifyValue(value);
}
exports.txToJson = txToJson;
//# sourceMappingURL=txToJson.js.map