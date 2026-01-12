
import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()

        await page.goto("http://localhost:5173/robot")
        await page.wait_for_load_state('networkidle')

        # 1. Verify Default ES
        print("Checking Robot Page ES...")
        # Target the h2 inside the robot section
        h2 = await page.inner_text(".robot h2")
        print(f"H2: {h2}")
        if "Robot Autónomo - Arduino" not in h2:
             print("FAIL: ES Title mismatch")
        else:
             print("PASS: ES Title correct")

        # 2. Switch to English
        print("Switching to English...")
        await page.click(".modes button:has-text('EN')")
        await page.wait_for_timeout(500)

        # 3. Verify EN
        print("Checking Robot Page EN...")
        h2_en = await page.inner_text(".robot h2")
        print(f"H2: {h2_en}")
        if "Autonomous Robot - Arduino" not in h2_en:
             print("FAIL: EN Title mismatch")
        else:
             print("PASS: EN Title correct")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
