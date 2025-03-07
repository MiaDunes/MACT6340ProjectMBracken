"use strict";
(()=> {
    
    let userAddress = null;
    let connect = document.querySelector("#wallet-connect");
  
    if (window.ethereum) {
      connectWallet();
    } else {
      userAddress = null;
      connect.innerHTML = "Connect Wallet";
    }
  
    connect.addEventListener("click", async () => {
      connectWallet();
    });
    async function connectWallet() {
        await window.ethereum
        .request({method: "eth_requestAccounts"})
        .then((data) => {
            let userAddress = data[0];
            let walletString =
            userAddress.substring(0,5) + "..." +
            userAddress(38, 45);
            connect.innerHTML = walletString;
            return userAddress;
        })
        .catch((err) => {
            if (err.code === 4001) {
                console.log("Please connect a wallect.");
            } else {
                console.error(err);
            }
        });
    }

})();