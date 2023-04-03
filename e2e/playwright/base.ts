  async selectTodaysDate(){
    await this.page.locator(`(//div[@class='ant-calendar-date'][text()='${getDateOfToday().getDate()}'])[1]`).click()
    await this.page.locator(`(//div[@class='ant-calendar-date'][text()='${getDateOfToday().getDate()}'])[1]`).hover()
    await this.page.locator(`(//div[@class='ant-calendar-date'][text()='${getDateOfToday().getDate()}'])[1]`).click()
  }


 await basePage.dateRange.click()
        await automatedJobPage.selectTodaysDate()



export const getFirstThreeCharacterOfMonth = () => {
  let date = new Date()
  let currentMonth = date.toLocaleString("default", { month: "long" }).substring(0, 3)
  return currentMonth
}



 async selectTodayFromDateRange() {
    await this.dateRange.click()
    await expect(this.calendarDropDown).toBeVisible()
    await this.calendarDropDown.hover()
    await this.calendarDropDownItem.filter({ hasText: 'Today' }).click()
  }




  page.on('requestfinished', async (request) => {
    if (request.url().match(/authenticate/)) {
        let response = await request.response();
        console.log(await response?.json())
        fs.writeFileSync(
          "./fixtures/asset/a.json",
          JSON.stringify(await response?.json())
        );
   }
  })



  page.on('requestfinished', async (request) => {
    if (request.url().match(/authenticate/)) {
      let response = await request.postDataJSON();
      fs.writeFileSync(
        "./fixtures/asset/authUber.json",
        JSON.stringify(response)
      );
    }
  })
