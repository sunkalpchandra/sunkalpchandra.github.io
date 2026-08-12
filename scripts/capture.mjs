import { chromium, devices } from "playwright";

const S = process.argv[2] ?? "/tmp";
const BASE = "http://127.0.0.1:8917";

const browser = await chromium.launch();

async function shot(name, url, opts = {}) {
  const ctx = await browser.newContext({
    viewport: opts.viewport ?? { width: 1440, height: 900 },
    colorScheme: opts.colorScheme ?? "light",
    reducedMotion: "reduce",
    ...(opts.device ? devices[opts.device] : {}),
  });
  const page = await ctx.newPage();
  await page.goto(`${BASE}${url}`, { waitUntil: "networkidle" });
  await page.waitForTimeout(600);
  await page.screenshot({ path: `${S}/pw-${name}.png`, fullPage: opts.fullPage ?? false });
  await ctx.close();
  console.log(`done: ${name}`);
}

// Light mode desktop (the default most visitors see)
await shot("home-light", "/", { fullPage: true });
await shot("work-light", "/work/", { fullPage: true });
await shot("trident-light", "/work/trident/", { fullPage: true });
await shot("research-light", "/research/", {});
await shot("tribe-light", "/work/tribe/", { fullPage: true });
await shot("exp-light", "/experience/", { fullPage: true });
await shot("cv-light", "/cv/", { fullPage: true });
await shot("notes-light", "/notes/how-this-site-works/", { fullPage: true });

// True mobile emulation (iPhone 13)
await shot("mobile-home", "/", { device: "iPhone 13", fullPage: true });
await shot("mobile-trident", "/work/trident/", { device: "iPhone 13", fullPage: true });
await shot("mobile-research", "/research/", { device: "iPhone 13", fullPage: true });

// Mobile menu open
{
  const ctx = await browser.newContext({ ...devices["iPhone 13"], reducedMotion: "reduce" });
  const page = await ctx.newPage();
  await page.goto(`${BASE}/`, { waitUntil: "networkidle" });
  await page.getByRole("button", { name: "Open menu" }).click();
  await page.waitForTimeout(400);
  await page.screenshot({ path: `${S}/pw-mobile-menu.png` });
  await ctx.close();
  console.log("done: mobile-menu");
}

// CV PDF (print CSS, light)
{
  const ctx = await browser.newContext({ colorScheme: "light" });
  const page = await ctx.newPage();
  await page.goto(`${BASE}/cv/`, { waitUntil: "networkidle" });
  await page.emulateMedia({ media: "print" });
  await page.pdf({
    path: "/Users/sunkalp/sunkalpchandra.github.io/public/cv.pdf",
    format: "Letter",
    margin: { top: "0.6in", bottom: "0.6in", left: "0.7in", right: "0.7in" },
    printBackground: false,
  });
  await ctx.close();
  console.log("done: cv.pdf");
}

await browser.close();
console.log("ALL_DONE");
