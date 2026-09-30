# Terminal Portfolio

<p align="center">
  <img src="assets/terminal_demo.gif" alt="Terminal Execution Demo" width="800">
</p>

A serverless command-line interface resume deployed on the edge. This project dynamically detects the client environment, serving structured ASCII layouts to native terminals and redirecting standard web browsers to a graphical user interface.

## Access the Portfolio

You can interact with the live deployed worker using your system native terminal. Copy and paste the appropriate command below based on your environment.

<div align="center">

| Operating System | Native Terminal Command |
| :--- | :--- |
| **Linux & Mac** | `curl whoami.dulith.me` |
| **Windows (PowerShell)** | `Invoke-RestMethod whoami.dulith.me` |
| **Windows (CMD)** | `curl.exe whoami.dulith.me` |

</div>

*Note: Accessing whoami.dulith.me via a standard web browser will automatically redirect you to the visual portfolio at dulith.me.*

## Technical Architecture

This project was built to demonstrate core networking concepts, edge computing, and zero-dependency JavaScript development. 

* **Edge Deployment:** The application runs entirely on Cloudflare Workers, executing at global data centers closest to the user for ultra-low latency.
* **User-Agent Routing:** The worker intercepts HTTP requests and inspects the User-Agent header to return ANSI-formatted text for terminals or a 301 redirect for web browsers.
* **Zero Dependencies:** The script relies entirely on the native V8 JavaScript engine and the standard Fetch API, avoiding external libraries in the production environment.
* **Custom HTTP Headers:** The response injects custom metadata into the HTTP headers for engineers inspecting the network traffic.
* **Continuous Deployment:** The repository is linked to a CI/CD pipeline that automatically builds and deploys updates upon merging to the main branch.

## Local Development

To host and modify your own version of this project, you must have Node.js installed on your system.

**1. Clone the repository and navigate into the directory:**
```bash
git clone https://github.com/dulithdivisekara/terminal-cv
cd terminal-cv

```

**2. Start the local Cloudflare development server:**

```bash
npx wrangler dev

```

**3. Verify the output:**
Open a secondary terminal window and query the local server.

```bash
curl localhost:8787

```

**4. Deploy to your edge network:**

```bash
npx wrangler deploy

```

## License

This project is open-source and available under the [MIT License](LICENSE).
