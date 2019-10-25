
const { transfer, broadcast } = require("./../transactions");

const makeTransfer = params => {
    return new Promise((resolve, reject) => {
        try{
        const signedTx = transfer(
            {
              amount: params.amount,
              recipient: params.recipient,
              chainId: "T",
            },
            params.SEED_DATA
          );
          broadcast(signedTx, params.NODE_URL)
            .then(resp => resolve(resp))
            .catch(e => reject(e));
        }
        catch(e){
            reject(e)
        }
    });
  };
  
  export default makeTransfer;