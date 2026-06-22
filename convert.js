import pdf2img from 'pdf-img-convert';
import fs from 'fs';

async function main() {
  try {
    const outputImages = await pdf2img.convert('./public/hindled.pdf', {
      width: 1200,
      page_numbers: [1]
    });
    fs.writeFileSync('./public/logo.png', outputImages[0]);
    console.log("Converted successfully!");
  } catch(e) {
    console.error(e);
  }
}
main();
