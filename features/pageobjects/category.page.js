class CategoryPage {
  get inputName() {
    return $("#category-name");
  }
  get inputDescription() {
    return $("#category-description");
  }
  get btnCreate() {
    return $("#create-button");
  }
  get successMessage() {
    return $("#success-message");
  }
  get deleteDropdown() {
    return (categoryName) =>
      $(`//div[contains(text(), "${categoryName}")]/following-sibling::button`);
  }

  async openCreateCategory() {
    await browser.url("https://kasirdemo.vercel.app/categories/create");
  }

  async openCategoryPage() {
    await browser.url("https://kasirdemo.vercel.app/categories");
  }

  async enterCategory(name, description) {
    await this.inputName.setValue(name);
    await this.inputDescription.setValue(description);
    await this.btnCreate.click();
  }

  async getSuccessMessage() {
    return this.successMessage;
  }

  async clickDeleteDropdown(categoryName) {
    await this.deleteDropdown(categoryName).click();
  }
}

export default new CategoryPage();
