import test from "node:test";
import assert from "node:assert/strict";
import { normalizeBasePath, stripBasePath, withBasePath } from "./pathUtils.ts";

const GH_BASE = "/siddhikinjwadekar-portfolio/";

test("normalizeBasePath handles root and subdirectory bases", () => {
  assert.equal(normalizeBasePath("/"), "");
  assert.equal(normalizeBasePath(GH_BASE), "/siddhikinjwadekar-portfolio");
  assert.equal(normalizeBasePath("siddhikinjwadekar-portfolio/"), "/siddhikinjwadekar-portfolio");
});

test("stripBasePath maps GitHub Pages paths to app routes", () => {
  assert.equal(stripBasePath("/siddhikinjwadekar-portfolio/", GH_BASE), "/");
  assert.equal(stripBasePath("/siddhikinjwadekar-portfolio", GH_BASE), "/");
  assert.equal(stripBasePath("/siddhikinjwadekar-portfolio/index.html", GH_BASE), "/");
  assert.equal(stripBasePath("/siddhikinjwadekar-portfolio/about", GH_BASE), "/about");
  assert.equal(stripBasePath("/siddhikinjwadekar-portfolio/about/", GH_BASE), "/about");
  assert.equal(
    stripBasePath("/siddhikinjwadekar-portfolio/work/fitpulse", GH_BASE),
    "/work/fitpulse"
  );
  assert.equal(stripBasePath("/", "/"), "/");
  assert.equal(stripBasePath("/work/fitpulse", "/"), "/work/fitpulse");
});

test("withBasePath resolves internal routes and static assets cleanly", () => {
  assert.equal(withBasePath("/", GH_BASE), "/siddhikinjwadekar-portfolio/");
  assert.equal(withBasePath("/about", GH_BASE), "/siddhikinjwadekar-portfolio/about");
  assert.equal(
    withBasePath("/work/bitamin-catalogs-products", GH_BASE),
    "/siddhikinjwadekar-portfolio/work/bitamin-catalogs-products"
  );
  assert.equal(withBasePath("/sk-logo.png", GH_BASE), "/siddhikinjwadekar-portfolio/sk-logo.png");
  assert.equal(
    withBasePath("/assets/aistudio/Case_Studies_1bddce2b.pdf", GH_BASE),
    "/siddhikinjwadekar-portfolio/assets/aistudio/Case_Studies_1bddce2b.pdf"
  );
  assert.equal(
    withBasePath("/siddhikinjwadekar-portfolio/about", GH_BASE),
    "/siddhikinjwadekar-portfolio/about"
  );
  assert.equal(
    withBasePath("https://www.linkedin.com/in/siddhi-kinjawadekar18", GH_BASE),
    "https://www.linkedin.com/in/siddhi-kinjawadekar18"
  );
  assert.equal(withBasePath("#works", GH_BASE), "#works");
});
