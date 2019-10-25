import { NativeModules } from "react-native";

import generateToken from "./library/generateToken";
import getAddressFromAlias from "./library/getAddressFromAlias";
import makeTransfer from "./library/makeTransfer";
import dataTransfer from "./library/dataTransfer";
import generateDocumentHash from "./library/generateDocumentHash";
const { RN0bsnetwork } = NativeModules;

const bridge = NativeModules.RN0bsnetwork;

export default {
  generateToken: () => generateToken(bridge),
  getAddressFromAlias: aliasName => getAddressFromAlias(aliasName),
  makeTransfer: params => makeTransfer(params),
  dataTransfer: params => dataTransfer(params),
  generateDocumentHash: params => generateDocumentHash(params, bridge),
};
