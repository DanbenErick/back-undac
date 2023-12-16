const puppeteer = require('puppeteer');
const fs = require('fs').promises;

async function generarPDFConImagen() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Leer el contenido del archivo HTML
  const contenidoHTML = await fs.readFile('plantilla.html', 'utf-8');

  // Establecer el contenido HTML en la página
  await page.setContent(contenidoHTML, { waitUntil: 'domcontentloaded' });

  // Generar el PDF
  await page.pdf({ path: 'archivo_con_imagen.pdf', format: 'letter' });

  await browser.close();

  console.log('PDF generado exitosamente con la imagen.');
}

// Llamar a la función para generar el PDF con la imagen
generarPDFConImagen();
