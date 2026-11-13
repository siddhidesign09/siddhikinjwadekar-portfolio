import test from "node:test";
import assert from "node:assert/strict";
import { filterProjects, findProject, isValidEmail, formatEditorialIndex } from "./portfolioUtils";
import { PROJECTS } from "../data/portfolioData";

test("filterProjects returns all projects when query is empty", () => {
  const result = filterProjects(PROJECTS, "");
  assert.equal(result.length, PROJECTS.length);
});

test("filterProjects finds projects by search keyword", () => {
  const catalogResults = filterProjects(PROJECTS, "catalog");
  assert.equal(catalogResults.length >= 1, true);
  assert.equal(catalogResults[0].slug, "bitamin-catalogs-products");

  const gymResults = filterProjects(PROJECTS, "FitPulse");
  assert.equal(gymResults.length >= 1, true);
  assert.equal(gymResults[0].slug, "fitpulse");
});

test("findProject correctly retrieves by slug or id", () => {
  const project = findProject(PROJECTS, "whatsapp-flows");
  assert.ok(project);
  assert.equal(project?.title, "Making Complex WhatsApp Journeys Easier to Build");

  const missing = findProject(PROJECTS, "non-existent-slug");
  assert.equal(missing, undefined);
});

test("isValidEmail checks format accurately", () => {
  assert.equal(isValidEmail("siddhi.design09@gmail.com"), true);
  assert.equal(isValidEmail("invalid-email"), false);
  assert.equal(isValidEmail(""), false);
});

test("formatEditorialIndex formats with leading zeros", () => {
  assert.equal(formatEditorialIndex(0), "01");
  assert.equal(formatEditorialIndex(4), "05");
  assert.equal(formatEditorialIndex(9), "10");
});
