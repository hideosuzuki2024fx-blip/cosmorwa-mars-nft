# Mars NFT Contract Deployment Guide

## Overview

This guide explains how to deploy the Mars NFT smart contract to Polygon Mumbai testnet.

## Prerequisites

1. **Node.js** (v16+)
2. **npm** or **yarn**
3. **Hardhat** (included in project)
4. **MetaMask** or similar wallet
5. **Polygon Mumbai testnet MATIC** (for gas fees)

## Step 1: Setup Environment

### 1.1 Install Dependencies

```bash
cd /home/ubuntu/cosmorwa_platform
npm install
npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox dotenv
npm install @openzeppelin/contracts
```

### 1.2 Create .env File

Create a `.env` file in the project root:

```
POLYGON_MUMBAI_RPC=https://rpc-mumbai.maticvigil.com
PRIVATE_KEY=your_private_key_here
POLYGONSCAN_API_KEY=your_polygonscan_api_key_here
```

**Important**: 
- Get your private key from MetaMask (DO NOT share publicly)
- Get Polygon Mumbai testnet MATIC from [faucet](https://faucet.polygon.technology/)
- Get PolygonScan API key from [PolygonScan](https://polygonscan.com/apis)

### 1.3 Get Testnet MATIC

1. Go to [Polygon Faucet](https://faucet.polygon.technology/)
2. Select "Mumbai" network
3. Enter your wallet address
4. Request testnet MATIC (you'll receive 0.5 MATIC)

## Step 2: Compile Contract

```bash
npx hardhat compile
```

**Expected Output:**
```
Compiling 1 file with 0.8.20
Compilation successful
```

## Step 3: Deploy Contract

### 3.1 Deploy to Mumbai Testnet

```bash
npx hardhat run scripts/deploy.js --network mumbai
```

**Expected Output:**
```
🚀 Deploying Mars NFT Contract...
📍 Deploying from account: 0x...
✅ Mars NFT Contract deployed to: 0x...
📦 Minting sample Mars parcels...
  ✅ Minted parcel 1: 45.2N,112.3E
  ✅ Minted parcel 2: 22.8S,48.2E
  ✅ Minted parcel 3: 15.4N,78.9W
  ✅ Minted parcel 4: 60.1S,135.7E
  ✅ Minted parcel 5: 33.3N,155.2W
🎉 Deployment complete!
💾 Deployment info saved to deployment-info.json
```

### 3.2 View Deployment Info

```bash
cat deployment-info.json
```

**Output:**
```json
{
  "contractAddress": "0x...",
  "network": "mumbai",
  "deployer": "0x...",
  "timestamp": "2026-01-19T...",
  "parcels": 5
}
```

## Step 4: Verify Contract on PolygonScan

### 4.1 Flatten Contract

```bash
npx hardhat flatten contracts/MarsNFT.sol > MarsNFT_flat.sol
```

### 4.2 Verify on PolygonScan

1. Go to [PolygonScan Mumbai](https://mumbai.polygonscan.com/)
2. Search for your contract address
3. Click "Verify and Publish"
4. Upload the flattened contract code
5. Set compiler version to 0.8.20
6. Set optimization to "Yes" with 200 runs

## Step 5: Interact with Contract

### 5.1 Get Contract Info

```bash
npx hardhat run scripts/interact.js --network mumbai
```

### 5.2 View NFTs on PolygonScan

1. Go to [PolygonScan Mumbai](https://mumbai.polygonscan.com/)
2. Search for contract address
3. Click "Token Tracker" tab
4. View all minted NFTs

### 5.3 View NFTs in MetaMask

1. Open MetaMask
2. Switch to Mumbai network
3. Click "Import tokens"
4. Enter contract address
5. Your Mars NFTs will appear in your wallet

## Step 6: Trigger Discovery Events

### 6.1 Create Script to Trigger Event

Create `scripts/trigger-discovery.js`:

```javascript
const hre = require("hardhat");

async function main() {
  const contractAddress = "0x..."; // Your contract address
  const marsNFT = await hre.ethers.getContractAt("MarsNFT", contractAddress);

  // Trigger discovery event for token 0
  const tx = await marsNFT.triggerDiscoveryEvent(
    0,
    "rover_landing",
    150 // 1.5x value increase
  );
  await tx.wait();

  console.log("✅ Discovery event triggered!");
  console.log(`New value: ${await marsNFT.getDiscoveryValue(0)}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
```

### 6.2 Run Script

```bash
npx hardhat run scripts/trigger-discovery.js --network mumbai
```

## Testing

### 7.1 Run Tests

```bash
npx hardhat test
```

### 7.2 Test Coverage

```bash
npx hardhat coverage
```

## Troubleshooting

### Issue: "Insufficient funds"
**Solution**: Get more testnet MATIC from [faucet](https://faucet.polygon.technology/)

### Issue: "Invalid private key"
**Solution**: Make sure PRIVATE_KEY in .env is valid (without 0x prefix if needed)

### Issue: "Contract not found"
**Solution**: Make sure you're using the correct contract address from deployment

### Issue: "Network error"
**Solution**: Check RPC URL is correct and network is accessible

## Contract Functions

### Mint Mars Parcel
```solidity
function mintMarsParcels(
  address to,
  string memory coordinates,
  uint256 elevation,
  string memory geology,
  uint256 waterIceProbability,
  uint256 scientificValue,
  uint256 purchasePrice,
  string memory uri
) public onlyOwner returns (uint256)
```

### Trigger Discovery Event
```solidity
function triggerDiscoveryEvent(
  uint256 tokenId,
  string memory eventType,
  uint256 valueMultiplier
) public onlyOwner
```

### Get Mars Parcel Data
```solidity
function getMarsParcels(uint256 tokenId) 
  public 
  view 
  returns (MarsParcels memory)
```

### Get Discovery Value
```solidity
function getDiscoveryValue(uint256 tokenId) 
  public 
  view 
  returns (uint256)
```

## Next Steps

1. **Frontend Integration**: Connect Web UI to contract
2. **Marketplace**: Implement NFT trading functionality
3. **Oracle Integration**: Connect Chainlink for real Mars data
4. **Mainnet Deployment**: Deploy to Polygon mainnet when ready

## Resources

- [Hardhat Documentation](https://hardhat.org/)
- [OpenZeppelin Contracts](https://docs.openzeppelin.com/contracts/)
- [Polygon Mumbai Testnet](https://mumbai.polygonscan.com/)
- [Solidity Documentation](https://docs.soliditylang.org/)

## Support

For questions or issues, please refer to the main README.md or contact the development team.
