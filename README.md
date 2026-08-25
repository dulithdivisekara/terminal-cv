# 👨‍💻 Terminal CV

A serverless, CLI-first resume built with Cloudflare Workers.

This project uses edge computing to serve my professional resume directly to the terminal. By leveraging user-agent routing, the worker dynamically detects how the URL is being accessed. Terminal clients (`curl`, `wget`, or PowerShell) are served an interactive ASCII layout, while standard web browsers are seamlessly redirected to my portfolio website.

![Terminal CV Demo Placeholder](docs/screenshot_mac_linux.png)  
*Example: Fetching the resume via a Unix terminal.*

---

## 🚀 Live Demo

You can interact with the live worker using your terminal across any major operating system:

### Mac / Linux
```bash
# View the standard ASCII resume
curl [https://whoami.dulithdivisekara.workers.dev](https://whoami.dulithdivisekara.workers.dev)

# Get the resume data in structured JSON format
curl [https://whoami.dulithdivisekara.workers.dev/json](https://whoami.dulithdivisekara.workers.dev/json)