const hre = require("hardhat");

async function main() {
  console.log("🚀 Deploying Mars NFT Contract...");

  // Get deployer account
  const [deployer] = await hre.ethers.getSigners();
  console.log(`📍 Deploying from account: ${deployer.address}`);

  // Deploy MarsNFT contract
  const MarsNFT = await hre.ethers.getContractFactory("MarsNFT");
  const marsNFT = await MarsNFT.deploy();
  await marsNFT.deployed();

  console.log(`✅ Mars NFT Contract deployed to: ${marsNFT.address}`);

  // Sample Mars parcels data
  const marsParcels = [
    {
      coordinates: "45.2N,112.3E",
      elevation: 2500,
      geology: "Basalt",
      waterIceProbability: 85,
      scientificValue: 9,
      purchasePrice: hre.ethers.utils.parseEther("0.5"),
      uri: "ipfs://QmSampleURI1",
    },
    {
      coordinates: "22.8S,48.2E",
      elevation: -1200,
      geology: "Olivine-rich",
      waterIceProbability: 72,
      scientificValue: 8,
      purchasePrice: hre.ethers.utils.parseEther("0.3"),
      uri: "ipfs://QmSampleURI2",
    },
    {
      coordinates: "15.4N,78.9W",
      elevation: 3800,
      geology: "Andesite",
      waterIceProbability: 45,
      scientificValue: 6,
      purchasePrice: hre.ethers.utils.parseEther("0.2"),
      uri: "ipfs://QmSampleURI3",
    },
    {
      coordinates: "60.1S,135.7E",
      elevation: 500,
      geology: "Ice-rich regolith",
      waterIceProbability: 95,
      scientificValue: 10,
      purchasePrice: hre.ethers.utils.parseEther("1.0"),
      uri: "ipfs://QmSampleURI4",
    },
    {
      coordinates: "33.3N,155.2W",
      elevation: 1800,
      geology: "Phyllosilicate-bearing",
      waterIceProbability: 60,
      scientificValue: 7,
      purchasePrice: hre.ethers.utils.parseEther("0.4"),
      uri: "ipfs://QmSampleURI5",
    },
  ];

  console.log("\n📦 Minting sample Mars parcels...");

  for (let i = 0; i < marsParcels.length; i++) {
    const parcel = marsParcels[i];
    const tx = await marsNFT.mintMarsParcels(
      deployer.address,
      parcel.coordinates,
      parcel.elevation,
      parcel.geology,
      parcel.waterIceProbability,
      parcel.scientificValue,
      parcel.purchasePrice,
      parcel.uri
    );
    await tx.wait();
    console.log(`  ✅ Minted parcel ${i + 1}: ${parcel.coordinates}`);
  }

  console.log("\n🎉 Deployment complete!");
  console.log(`\n📊 Contract Details:`);
  console.log(`   Address: ${marsNFT.address}`);
  console.log(`   Network: Polygon Mumbai (Testnet)`);
  console.log(`   Total Parcels Minted: ${marsParcels.length}`);

  // Save deployment info
  const fs = require("fs");
  const deploymentInfo = {
    contractAddress: marsNFT.address,
    network: "mumbai",
    deployer: deployer.address,
    timestamp: new Date().toISOString(),
    parcels: marsParcels.length,
  };

  fs.writeFileSync(
    "deployment-info.json",
    JSON.stringify(deploymentInfo, null, 2)
  );

  console.log("\n💾 Deployment info saved to deployment-info.json");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
