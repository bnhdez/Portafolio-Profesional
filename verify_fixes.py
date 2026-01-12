
import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()

        await page.goto("http://localhost:5173")

        # 1. Verify Translations (Default ES)
        print("Checking ES translations...")
        h1 = await page.inner_text("h1")
        if "Hola, soy Boris" not in h1:
            print(f"FAIL: Expected 'Hola, soy Boris', found '{h1}'")
        else:
            print("PASS: ES Intro Title found")

        tech_badge = await page.inner_text(".tecnologias .badge")
        if "Tecnologias" not in tech_badge:
            print(f"FAIL: Expected 'Tecnologias', found '{tech_badge}'")
        else:
            print("PASS: ES Tech Badge found")

        # 2. Switch to English
        print("Switching to English...")
        # Current logic: {language === 'ES' ? 'EN' : 'ES'}
        # If in ES, button shows EN.
        # Use a more robust selector.
        await page.click(".modes button:has-text('EN')")

        # Verify EN Translations
        print("Checking EN translations...")
        h1_en = await page.inner_text("h1")
        if "Hi, I'm Boris" not in h1_en:
            print(f"FAIL: Expected 'Hi, I'm Boris', found '{h1_en}'")
        else:
            print("PASS: EN Intro Title found")

        tech_badge_en = await page.inner_text(".tecnologias .badge")
        if "Technologies" not in tech_badge_en:
            print(f"FAIL: Expected 'Technologies', found '{tech_badge_en}'")
        else:
            print("PASS: EN Tech Badge found")

        # 3. Verify Dark Mode Fixes
        print("Switching to Dark Mode...")
        # Toggle theme.
        # Light mode: theme != 'dark' -> class "icon-night"
        await page.click(".modes button:has(.icon-night)")

        # Allow transition
        await page.wait_for_timeout(1000)

        # Check .card background in experience
        card = page.locator(".experiencia .card").first
        bg_color = await card.evaluate("el => getComputedStyle(el).backgroundColor")
        print(f"Card background color in Dark Mode: {bg_color}")

        if bg_color == "rgb(255, 255, 255)":
            print("FAIL: Card background is still white in dark mode")
        else:
            print("PASS: Card background is not white (likely dark)")

        # Check badge background
        badge = page.locator(".badge.text-bg-secondary").first
        badge_bg = await badge.evaluate("el => getComputedStyle(el).backgroundColor")
        print(f"Badge background color in Dark Mode: {badge_bg}")

        # Check navbar scrolled background
        # We need to scroll down to trigger .scrolled
        await page.evaluate("window.scrollBy(0, 500)")
        await page.wait_for_timeout(500)

        navbar = page.locator(".navbar.scrolled")
        if await navbar.count() > 0:
            nav_bg = await navbar.evaluate("el => getComputedStyle(el).backgroundColor")
            print(f"Navbar scrolled background: {nav_bg}")
            if nav_bg == "rgba(255, 255, 255, 0.7)":
                 print("FAIL: Navbar is using old rgba value")
            else:
                 print("PASS: Navbar background is updated")
        else:
            print("WARN: Navbar scrolled class not applied")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
