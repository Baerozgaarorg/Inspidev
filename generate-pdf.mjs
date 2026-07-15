import puppeteer from 'puppeteer';

(async () => {
  console.log("Launching browser...");
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  
  // Set to a standard 1080p desktop width
  await page.setViewport({width: 1920, height: 1080, deviceScaleFactor: 2});
  
  console.log("Navigating to http://localhost:3000...");
  try {
    await page.goto('http://localhost:3000', {waitUntil: 'domcontentloaded', timeout: 60000});
  } catch (err) {
    console.error("Navigation error:", err);
  }
  
  // Wait explicitly for components to render
  console.log("Waiting for content to settle...");
  await new Promise(r => setTimeout(r, 8000));

  console.log("Calculating page height...");
  const bodyHandle = await page.$('body');
  const { height } = await bodyHandle.boundingBox();
  await bodyHandle.dispose();

  console.log("Generating PDF (height: " + Math.ceil(height) + ")...");
  // Create a continuous PDF (one long page) so it looks exactly like the website
  await page.pdf({
    path: 'INSPIDEV_Portfolio.pdf',
    width: 1920,
    height: Math.ceil(height) + 200,
    printBackground: true,
  });

  await browser.close();
  console.log('PDF successfully generated at INSPIDEV_Portfolio.pdf');
})();
