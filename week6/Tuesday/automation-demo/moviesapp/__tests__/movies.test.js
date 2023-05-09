const { Builder, Browser, By, until, Key } = require("selenium-webdriver");

let diver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("testing the movies app", () => {
  test("can add a movie", async() => {
    //navigate to the webapp
      await driver.get('http//localhost:3000')
    //Find the input
      await driver.findElement(By.css('input[name="movieTitle"]')).sendKeys('Encanto')
    //Type in the movie
    //Find the add button and click it
      await driver.findElement(By.css('button[type="submit"]')).click()
    //Wait until the movie apprears on the list
      const addedMovie = await driver.wait(until.elementsLocated(By.css("movies-list li label")),1000)
    //Check if the movie is on the list
      expect(await addedMovie.getText()).toBe('Encanto')
  });
});
