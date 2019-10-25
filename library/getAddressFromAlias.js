const getAddressFromAlias = aliasName => {
  return new Promise((resolve, reject) => {
    fetch("https://api.testnet-0bsnetwork.com/v0/aliases/" + aliasName)
      .then(response => {
        if (response.status == 200) resolve(response.json());
        else reject();
      })
      .catch(error => {
        reject(error);
      });
  });
};

export default getAddressFromAlias;