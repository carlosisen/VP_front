import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import texts from "@src/constants/texts.json";
import Header from "./header";
const headerTexts = texts[0].spanish.header;

describe("render Header with Nav", () => {
  const wrapper = render(<Header />);
  const { getByText, getByRole } = wrapper;
  test("Title is Render", () => {
    expect(wrapper).toBeTruthy();
    expect(getByText(headerTexts.main)).toBeTruthy();
  });
  test("nav is Render", () => {
    headerTexts.nav.forEach((data) => {
      expect(getByRole("menuitem", { name: data, hidden: true })).toBeTruthy();
    });
  });
});
