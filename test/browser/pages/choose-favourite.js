module.exports = class PlaywrightDevPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.path = "/toy/choose-favourite";
  }

  async continue() {
    await this.page.click("#continue");
  }

  isCurrentPage() {
    const { pathname } = new URL(this.page.url());

    return pathname == this.path;
  }

  async answerTrainSet() {
    await this.page.locator(`#toy-trainset`).first().check();
  }
};
