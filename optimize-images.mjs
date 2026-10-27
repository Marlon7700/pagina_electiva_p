import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const dir = path.join(process.cwd(), 'public', 'imagenes');
const files = fs.readdirSync(dir);

console.log(`Starting optimization of ${files.length} images...`);

for (const file of files) {
  if (!file.endsWith('.png') && !file.endsWith('.jpg') && !file.endsWith('.jpeg')) continue;
  
  const fullPath = path.join(dir, file);
  const tempPath = path.join(dir, 'temp_' + file);
  
  try {
    const meta = await sharp(fullPath).metadata();
    const maxWidth = 1280;
    
    let pipeline = sharp(fullPath);
    if (meta.width > maxWidth) {
      pipeline = pipeline.resize({ width: maxWidth, withoutEnlargement: true });
    }
    
    // Save as optimized webp and also overwrite png with compressed version
    const webpName = file.replace(/\.(png|jpg|jpeg)$/i, '.webp');
    await sharp(fullPath)
      .resize({ width: Math.min(meta.width, 1280), withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(path.join(dir, webpName));

    // Also compress the original PNG to high efficiency
    await pipeline
      .png({ quality: 80, compressionLevel: 8 })
      .toFile(tempPath);
      
    fs.renameSync(tempPath, fullPath);
    
    const newStat = fs.statSync(fullPath);
    console.log(`Optimized ${file}: now ${(newStat.size / 1024).toFixed(0)} KB (WebP: ${(fs.statSync(path.join(dir, webpName)).size / 1024).toFixed(0)} KB)`);
  } catch (err) {
    console.error(`Error optimizing ${file}:`, err);
    if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
  }
}

// Also optimize assets
const assetsDir = path.join(process.cwd(), 'public', 'assets');
if (fs.existsSync(assetsDir)) {
  const assetFiles = fs.readdirSync(assetsDir);
  for (const afile of assetFiles) {
    const aPath = path.join(assetsDir, afile);
    if (afile.endsWith('.jpg') || afile.endsWith('.png')) {
      const aWebp = path.join(assetsDir, afile.replace(/\.(png|jpg)$/i, '.webp'));
      await sharp(aPath)
        .resize({ width: 1400, withoutEnlargement: true })
        .webp({ quality: 82 })
        .toFile(aWebp);
      console.log(`Optimized asset ${afile} -> ${path.basename(aWebp)}`);
    }
  }
}

console.log('All images optimized successfully!');
