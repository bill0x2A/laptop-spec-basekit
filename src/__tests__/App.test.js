import App from "../App";
import React from "react";
import { componentType } from "../constants/productList";
import { testComponents } from "../constants/testing";
import puppeteer from "puppeteer";

let browser;
let page;

describe("<App/>", () => {
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: true,
    });
    page = await browser.newPage();
    await page.goto("http://localhost:3000/");
  });

  it("renders the spec sheet and summary windows", async () => {
    const choices = await page.$(".spec-sheet");
    const summary = await page.$(".summary-window");
    expect(choices).toBeTruthy();
    expect(summary).toBeTruthy();
  });

  it("updates components in state when an option is clicked", async () => {

    const option = await page.$$(".component-options__component-option")
    let el = await option[1].getProperty("className");
    let cn = await el.jsonValue();
    let classNameString = cn.split(" ");
    expect(classNameString.includes("selected")).toBeFalsy();

    await option[1].click();

    el = await option[1].getProperty("className");
    cn = await el.jsonValue();
    classNameString = cn.split(" ");
    expect(classNameString.includes("selected")).toBeTruthy();
  });
});
