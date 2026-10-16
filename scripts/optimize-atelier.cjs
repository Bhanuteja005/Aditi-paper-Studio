(async () => {
 const { default: fs } = await import("node:fs");
 const { default: sharp } = await import("sharp");
 const files = JSON.parse(fs.readFileSync("docs/generated-assets.json","utf8").replace(/^\uFEFF/,""));
 for (const file of files) {
  const src = file.name === "logo-concept" ? "docs/brand/logo-concept.png" : "public/img/atelier/"+file.name+".png";
  await sharp(src).webp({quality:88,effort:5}).toFile(src.replace(/\.png$/,".webp"));
 }
 console.log("Optimized "+files.length+" assets without cropping; original PNG files retained.");
})();
