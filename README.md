
# 👨‍💻 Terminal CV

A serverless, CLI-first resume built with Cloudflare Workers. 

This project uses edge computing to serve my professional resume directly to the terminal. It leverages user-agent routing to detect how the URL is being accessed—serving an interactive ASCII layout for terminal clients (`curl`, `wget`), returning structured data for API requests, and seamlessly redirecting standard web browsers to my LinkedIn profile.

## 🚀 Live Demo

You can interact with the live worker using your terminal:

```bash
# View the standard ASCII resume
curl [https://cv.dulithdivisekara.workers.dev](https://cv.dulithdivisekara.workers.dev)

# Get the resume data in structured JSON format
curl [https://cv.dulithdivisekara.workers.dev/json](https://cv.dulithdivisekara.workers.dev/json)

# Trigger the hidden easter egg
curl [https://cv.dulithdivisekara.workers.dev/secret](https://cv.dulithdivisekara.workers.dev/secret)

```

*(Note: If you visit `https://cv.dulithdivisekara.workers.dev` in a standard web browser, you will be automatically redirected to my LinkedIn profile).*



## ✨ Features

* **User-Agent Routing:** Dynamically returns different responses based on the client (Terminal vs. Browser).
* **Edge Deployed:** Hosted on Cloudflare Workers for globally distributed, ultra-low latency responses.
* **JSON API:** A dedicated `/json` endpoint for easily parsing my skills and experience programmatically.
* **Custom HTTP Headers:** Injects custom headers (`X-Powered-By`, `X-Author`, `X-Status`) for curious engineers inspecting the network requests.
* **Zero Dependencies:** Built entirely with vanilla JavaScript utilizing the native Fetch API `Request` and `Response` interfaces.

---

## 🛠️ Tech Stack

* **JavaScript (ES6+)**
* **Cloudflare Workers** (Serverless Edge Execution)
* **Wrangler CLI** (Deployment & Testing)

---

## 💻 Local Development

If you want to clone this repository and run it locally, you will need [Node.js](https://nodejs.org/) and the [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) installed.

**1. Clone the repository:**

```bash
git clone [https://github.com/dulithdivisekara/terminal-cv.git](https://github.com/dulithdivisekara/terminal-cv.git)
cd terminal-cv

```

**2. Install dependencies (if any):**

```bash
npm install

```

**3. Run the local development server:**

```bash
npx wrangler dev

```

*(This will start a local server, usually on `http://localhost:8787`)*

**4. Deploy to your own Cloudflare account:**

```bash
npx wrangler deploy

```

---

## 📬 Contact

* **LinkedIn:** [linkedin.com/in/dulithdivisekara](https://linkedin.com/in/dulithdivisekara)
* **GitHub:** [github.com/dulithdivisekara](https://github.com/dulithdivisekara)
* **Email:** dulithmdivisekara@gmail.com

---

*Built with code and caffeine by Dulith Divisekara.*
