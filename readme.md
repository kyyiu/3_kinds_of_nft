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
```

# nft 制作

1. 基本 nft，基于 ERC721 标准
   使用依赖 yarn add --dev @openzeppelin/contracts
   代码参考 contracts\BasicNFT.sol 和 deploy\basicNft.js
   cmd 运行 yarn hardhat deploy
2. Random IPFS NFT
3. Dynamic SVG NFT

# Pinata API Node SDK

```

```
