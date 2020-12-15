const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('./report.html', {waitUntil: 'networkidle2'});
    await page.pdf({path: 'report.pdf', format: 'A4'});

    await browser.close();
})();