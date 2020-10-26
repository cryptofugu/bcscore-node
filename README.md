BCScore Node
============

A BCS full node for building applications and services with Node.js. A node is extensible and can be configured to run additional services.

## Getting Started

1. Install nvm https://github.com/creationix/nvm  

    ```bash
    nvm i v6
    nvm use v6
    ```  
2. Install mongo https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/  

3. Install bcs-bitcore https://github.com/bcsproject/bcs-bitcore - with ZMQ ! 

    ```bash
    # with ZMQ
    sudo apt-get install libzmq3-dev 
    ```  
4. Install bcscore-node  

    ```bash
    npm i https://github.com/bcsproject/bcscore-node.git#master

    $(npm bin)/bcscore-node create mynode

    cd mynode

    ```  
5. Edit bcscore-node.json  

    ```json
    {
      "network": "livenet",
      "port": 3001,
      "services": [
	    "bcsd",
        "web"
      ],
      "servicesConfig": {
        "bcsd": {
          "spawn": {
            "datadir": "/home/user/.bcs",
            "exec": "/home/user/bcs-bitcore/src/bcsd"
          }
        }
      }
	}
    ```  
6. Edit bcs.conf  

    ```
    server=1
    whitelist=127.0.0.1
    txindex=1
    addressindex=1
    timestampindex=1
    spentindex=1
    zmqpubrawtx=tcp://127.0.0.1:28332
    zmqpubhashblock=tcp://127.0.0.1:28332
    rpcallowip=127.0.0.1
    rpcuser=user
    rpcpassword=password
    rpcport=18332
    reindex=1
    gen=0
    addrindex=1
    logevents=1
    ```  
7. Run Node  

    ```
    $(npm bin)/bcscore-node start
    ```  

## Add-on Services

There are several add-on services available to extend the functionality of BCScore:

- [BCS Insight API](https://github.com/bcsproject/insight-api)
- [BCS Explorer](https://github.com/bcsproject/bcs-explorer)

## Contributing



## License
