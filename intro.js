const puppeteer = require("puppeteer");
let page;

// launch()
const browserOpenPromise = puppeteer.launch({
  headless: false,
  slowMo: true,
  defaultViewport: null,
  args: ["--start-maximized"],
});
browserOpenPromise
  .then((browser) => {
    // pages()
    const pageArrPromise = browser.pages();
    return pageArrPromise;
  })
  .then((browserPages) => {
    page = browserPages[0];
    const gotoPromise = page.goto("https://www.google.com");
    return gotoPromise;
  })
  .then(() => {
    const elementLoaded = page.waitForSelector("input[type = 'text']", {
      visible: true,
    });
    return elementLoaded;
  })
  .then(() => {
    const keysPromise = page.type("input[type = 'text']", "pepcoding");
    return keysPromise;
  })
  .then(() => {
    const pressEnter = page.keyboard.press("Enter");
    return pressEnter;
  })
  .then(() => {
    const resultLoaded = page.waitForSelector("h3.LC20lb.MBeuO.DKV0Md", {
      visible: true,
    });
    return resultLoaded;
  })
  .then(() => {
    const clickFirstResult = page.click("h3.LC20lb.MBeuO.DKV0Md");
    return clickFirstResult;
  })
  .catch((err) => {
    console.log(err);
  });
