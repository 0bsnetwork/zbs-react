
const generateDocumentHash = (params, bridge) => bridge.hashDocument(params, "sha256");

export default generateDocumentHash;