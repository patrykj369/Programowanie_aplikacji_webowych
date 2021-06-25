// potrzebne pakiety:
// npm i puppeteer
// npm i @types/puppeteer
// npm i puppeteer-tsd

// uruchomienie
// 1) build projektu
// 2) node index.test.ts z katalogu build

import * as puppeteer from 'puppeteer';

(async () => {
  // const browser = await puppeteer.launch(); // headless
  const browser = await puppeteer.launch({ headless: false, slowMo: 130 })
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 })
  await page.goto('http://localhost:8080/');
  await page.waitForSelector('#addNoteButton')
  await page.click('#addNoteButton')
  await page.type('#titleInp', 'Testowa notatka puppeteer');
  await page.type('#contentInp', 'Testowa notatka puppeteer');
  await page.click('#buttonSaveNote')
  // await page.type('#mat-input-1', 'password');
  // await page.click('someButtonSelector')
  await page.waitFor(2000); // nie stosować bez wyraźnej potrzeby!
  await page.screenshot({path: 'screen-after-saveNote.png'});
  await page.waitFor(2000);
  await browser.close();
})();
