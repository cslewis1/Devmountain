const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeAll(async () => {
  driver = new Builder().forBrowser(Browser.CHROME).build();
});

afterAll(async () => {
  await driver.quit();
});

describe("Test for the movie app", () => {
    test("can cross of a movie", async () => {
        await driver.get("http://localhost:3000/");
    
        await driver
          .findElement(By.css('input[name="movieTitle"]'))
          .sendKeys("The Little Mermaid");
        await driver.findElement(By.css('button[type="submit"]')).click();
    
        const addedMovie = await driver.wait(
          until.elementLocated(By.css("#movies-list li label")),
          1000
        );
        expect(await addedMovie.getText()).toBe("The Matrix");
    });
    
    test("can check off a movie", async () => {
        await driver.get("http://localhost:3000/");
    
        await driver
          .findElement(By.css('input[type="checkbox"]')).click()
        await driver.findElement(By.css('button[type="submit"]')).click();
    
        const checkedMovie = await driver.wait(
          until.elementLocated(By.css("#message")),
          1000
        );
        expect(await addedMovie.getText()).toBe("Watched The Little Mermaid");
    });
    
    test("can delete movie", async () => {
        await driver.get("http://localhost:3000/");
    
        await driver
          .findElement(By.css('.delete-btn')).click()
        await driver.findElement(By.css('button[type="submit"]')).click();
    
        const deletedMovie = await driver.wait(
            until.elementLocated(By.css("#message")),
            1000
          );
          expect(await addedMovie.getText()).toBe("The Little Mermaid deleded!");
      });
    
})