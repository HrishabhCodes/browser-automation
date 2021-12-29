###### A basic JS script for automating a simple task. This activity is great to learn about Promises.

### Articles on Puppeteer and its Documentation

- [Getting to Know Puppeteer Using Practical Examples](https://nitayneeman.com/posts/getting-to-know-puppeteer-using-practical-examples/)
- [Introduction to Puppeteer](https://flaviocopes.com/puppeteer/)
- [Documentation](https://pptr.dev)

### Various Puppeteer Functions Used in this Activity

##### 1. launch()

- Opens up the browser.
- Browser is "headless" by default. Hence, Chromium won't show up until we pass {headless: false} as an argument.

##### 2. pages()

- Gives currently opened tabs.

##### 3. waitForSelector()

- Our script might run before the page gets loaded, so it might fail. Hence, we wait for the element to be loaded first using this method.

##### 4. goto()

- Navigates us to the URL passed as an argument.

##### 5. type()

- Selects an element of the page using CSS Selectors and then types the string provided as the second argument inside it.

##### 6. press()

- Presses the key passed as the argument.
