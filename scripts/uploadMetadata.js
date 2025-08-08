const { ThirdwebStorage } = require("@thirdweb-dev/storage");
const fs = require("fs");
const path = require("path");

const storage = new ThirdwebStorage();

async function uploadMetadata() {
  const metadataDir = path.join(__dirname, "../public/metadata");
  const files = fs.readdirSync(metadataDir).filter(f => f.endsWith(".json"));

  const metadataObjects = files.map((fileName) => {
    const filePath = path.join(metadataDir, fileName);
    const raw = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(raw);
  });https://nextjs.org/docs/app/getting-started/installation#manual-installation

  const uris = await storage.uploadBatch(metadataObjects, {
    uploadWithGatewayUrl: true,
  });

  const tokenUriMap = {};
  files.forEach((fileName, i) => {
    const tokenId = path.basename(fileName, ".json"); // Extract "1" from "1.json"
    tokenUriMap[tokenId] = uris[i];
    console.log(`Token ID ${tokenId} → ${uris[i]}`);
  });

  // Optional: Save mapping to a local file
  fs.writeFileSync("tokenUriMap.json", JSON.stringify(tokenUriMap, null, 2));
}

uploadMetadata().catch(console.error);