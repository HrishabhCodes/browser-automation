###### A basic JS script for automating a simple task. This activity is great to learn about Promises.

### Amazing Blogs on Puppeteer

- [Getting to Know Puppeteer Using Practical Examples](https://nitayneeman.com/posts/getting-to-know-puppeteer-using-practical-examples/)
- [Introduction to Puppeteer](https://flaviocopes.com/puppeteer/)

### Various Puppeteer Functions Used in this Activity

###### launch()

- Opens up the browser.
- Browser is "headless" by default. Hence, Chromium won't show up until we pass {headless: false} as an argument.

###### pages()

- Gives currently opened tabs.

###### waitForSelector()

- Our script might run before the page gets loaded, so it might fail. Hence, we wait for the element to be loaded first using this method.

###### goto()

- Navigates us to the URL passed as an argument.

###### type()

- Selects an element of the page using CSS Selectors and then types the string provided as the second argument inside it.

###### press()

- Presses the key passed as the argument.
