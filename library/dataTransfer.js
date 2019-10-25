
const { data, broadcast } = require("./../transactions");

const dataTransfer = params => {
    return new Promise((resolve, reject) => {
        try{
        const signedTx = data(
            {
                data: params.data,
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
  
  export default dataTransfer;