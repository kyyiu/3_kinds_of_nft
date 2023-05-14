# 使用 hardhat 初始化

```
npm i hardhat -D
cmd
.\node_modules\.bin\hardhat
这里使用 Create an empty hardhat.config.js 方案
```

# 更多依赖

```
yarn add --dev @nomiclabs/hardhat-ethers@npm:hardhat-deploy-ethers ethers@5.5.4 @nomiclabs/hardhat-etherscan @nomiclabs/hardhat-waffle chai ethereum-waffle hardhat hardhat-contract-sizer hardhat-deploy hardhat-gas-reporter prettier prettier-plugin-solidity solhint solidity-coverage dotenv
```

# 编译 sol

```
yarn add --dev hardhat-shorthand
.\node_modules\.bin\hh compile

or
yarn hardhat compile

部署
yarn hardhat deploy

默认使用hardhat网络(即本地)

yarn hardhat deploy --network 网络名 --tags tag名
网络名是hardhat.config.js中networks属性里面的键名意味着这次往这个网络里面配置的属性进行部署
tag名是执行部署哪些文件
比如
module.exports.tags = ["all", "basicnft", "main"]
main代表所有有main的都会执行

例子
我们把这个例子中的contract部署到sepolia测试网络
yarn hardhat deploy --network sepolia --tags main
完成后可以在
etherscan中查看到
(如果是部署的测试网络，就到对应的测试网络去看)
(比如这里是sepolia 就到 sepolia.etherscan.io)
看到了表示部署已经成功了
接下来就可以使用了
```

# ipfs 地址使用

```
https://docs.ipfs.tech/how-to/address-ipfs-on-web/#dweb-addressing-in-brief
```

# nft 制作

1. 基本 nft，基于 ERC721 标准
   使用依赖 yarn add --dev @openzeppelin/contracts
   代码参考 contracts\BasicNFT.sol 和 deploy\basicNft.js
   cmd 运行 yarn hardhat deploy
2. Random IPFS NFT
   随机 nft
3. Dynamic SVG NFT
   存储在 contract 中的 nft

# Pinata API Node SDK

```
https://www.pinata.cloud/
```
