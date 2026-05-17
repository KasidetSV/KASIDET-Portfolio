# ⚙️ PORTFOLIO SYSTEM CONFIGURATION
> **Asset Status:** LIVE // OPERATIONAL

This document registers the active parameters, secure paths, and deployment credentials of the portfolio vehicle inside the AntiGravity local directory.

---

## 🌐 Live Production Metrics

*   **Production Deployment URL:** [https://kasidet-portfolio.vercel.app/](https://kasidet-portfolio.vercel.app/)
*   **Git Hub Source Code:** [https://github.com/KasidetSV/KASIDET-Portfolio.git](https://github.com/KasidetSV/KASIDET-Portfolio.git)
*   **Hosting Provider:** Vercel Hobby Tier ($0, Lifetime Free)
*   **CI/CD Pipeline:** Active (Every push to GitHub `main` triggers an instant rebuild & hot-deploy on Vercel within 15 seconds).

---

## 📈 Real-Time Visitor Telemetry & Web Analytics

To track and monitor how many people visit your website, we have integrated **Vercel Web Analytics**. This is a GDPR-compliant, privacy-friendly, zero-cookie analytics system that collects page views, visitor regions, devices, and traffic referrers directly on your Vercel Dashboard without slowing down your website.

### Setup Checklist:
1.  **Code Integration:** Deployed (`index.html` has successfully been updated with the telemetry hook `<script defer src="/_vercel/insights/script.js"></script>`). ✅
2.  **Activation in Vercel Dashboard:** Follow these steps to start seeing active charts:
    *   Open your browser and navigate to the **[Vercel Dashboard](https://vercel.com/dashboard)**.
    *   Click on your project: **`KASIDET-Portfolio`**.
    *   Click on the **`Analytics`** tab at the top of the dashboard.
    *   Click the big blue button: **`Enable Analytics`** (Choose the Free Tier/Hobby plan).
    *   *That's it!* Vercel will immediately start recording and charting traffic on your dashboard in real-time.

---

## 🛠️ Port Execution Commands

If you need to execute structural updates locally:

*   **Staging Status Check:**
    ```bash
    git status
    ```
*   **Staging Commit and Push:**
    ```bash
    git add .
    git commit -m "chore: system refactor"
    git push
    ```

---
*Maintained securely under the COGNOS Autonomous System.*
