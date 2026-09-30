export default {
  async fetch(request) {
    const url = new URL(request.url);
    const pathname = url.pathname.toLowerCase();
    const userAgent = (request.headers.get('user-agent') || '').toLowerCase();

    const customHeaders = {
      'Access-Control-Allow-Origin': '*',
      'X-Powered-By': 'Cloudflare Workers & Ubuntu',
      'X-Author': 'Dulith Divisekara',
      'X-Status': 'Ready to build awesome things!'
    };

    if (pathname === '/json') {
      const jsonData = {
        name: "Dulith Divisekara",
        title: "Information Technology Undergraduate",
        tagline: "I combine core computer science fundamentals with modern AI tools to build and deploy software fast.",
        skills: {
          code: ["JavaScript", "Java", "Python", "R", "Bash", "HTML/CSS"],
          technology: ["Docker", "MSSQL", "Cloudflare Workers", "Spring Boot", "Ubuntu"],
          concepts: ["AI Model Training", "Serverless Edge", "Browser Extensions"]
        },
        projects: {
          featured: [
            {
              name: "SLIIT Courseweb Cleaner",
              description: "A context-aware browser extension designed to optimize the SLIIT Moodle interface by filtering out irrelevant modules and batch announcements.",
              links: {
                chrome: "https://chromewebstore.google.com/detail/sliit-courseweb-cleaner/lnoadlfhebmkhmbfmehdgoffjllgadjm",
                edge: "https://microsoftedge.microsoft.com/addons/detail/sliit-courseweb-cleaner/gmlodfhgiopjgamoijjffcmgfenkkkhe",
                firefox: "https://addons.mozilla.org/en-US/firefox/addon/sliit-courseweb-cleaner/"
              }
            },
            {
              name: "SLIIT IT - Knowledge Base (Y1S2)",
              description: "An open-source, highly structured collection of study notes, runnable code snippets, and active recall quizzes featuring AI study partners and Mermaid.js diagrams.",
              github: "https://github.com/dulithdivisekara"
            },
            {
              name: "Terminal CV",
              description: "A serverless command-line interface resume deployed on the edge. Dynamically detects client environments to route traffic.",
              github: "https://github.com/dulithdivisekara/terminal-cv"
            }
          ]
        },
        contact: {
          email: "dulithmdivisekara@gmail.com",
          github: "https://github.com/dulithdivisekara",
          linkedin: "https://linkedin.com/in/dulithdivisekara"
        }
      };
      return new Response(JSON.stringify(jsonData, null, 2) + '\n', {
        headers: { ...customHeaders, 'content-type': 'application/json; charset=utf-8' }
      });
    }

    if (pathname === '/secret') {
      const secretMessage = `
\x1b[1;36m╭── \x1b[1;32mSYSTEM.OVERRIDE_GRANTED\x1b[1;36m ───────────────────────────────────────────────────╮\x1b[0m
  \x1b[1;35m[!] Hidden Protocol Initialized\x1b[0m

  \x1b[1;33m■ Networking Philosophy :\x1b[0m "There is no place like 127.0.0.1"
  \x1b[1;33m■ Development Approach  :\x1b[0m I treat AI-assisted development as a force 
                            multiplier, not a shortcut.
  
  Let's build something scalable. Reach out on LinkedIn!
\x1b[1;36m╰──────────────────────────────────────────────────────────────────────────────╯\x1b[0m
`;
      return new Response(secretMessage, {
        headers: { ...customHeaders, 'content-type': 'text/plain; charset=utf-8' }
      });
    }

    if (userAgent.includes('curl') || userAgent.includes('wget') || userAgent.includes('powershell')) {
      const asciiResume = `
\x1b[1;36m\x1b[0;33;40m    \x1b[0;90;1;40m▄▄▄\x1b[0;37;40m \x1b[0;33;40m       \x1b[0;37;40m \x1b[0;33;40m      \x1b[0;37;40m \x1b[0;90;1;40m▄▄\x1b[0;37;40m \x1b[0;90;1;40m▄\x1b[0;90;1;43m░█\x1b[0;90;1;40m▄\x1b[0;37;40m \x1b[0;90;1;40m▄▄▄\x1b[0;33;40m    \x1b[0;37;40m      \x1b[0;33;40m    \x1b[0;90;1;40m▄▄▄\x1b[0;37;40m \x1b[0;90;1;40m▄▄\x1b[0;37;40m \x1b[0;33;40m     \x1b[0;90;1;40m▄▄\x1b[0;37;40m \x1b[0;90;1;40m▄▄\x1b[0;37;40m \x1b[0;33;40m       \x1b[0;37;40m \x1b[0;33;40m      \x1b[0;37;40m \x1b[0;33;40m    \x1b[0;90;1;40m▄▄\x1b[0;37;40m \x1b[0;33;40m       \x1b[0;37;40m \x1b[0;33;40m      \x1b[0;37;40m \x1b[0;33;40m       \x1b[0m
\x1b[1;36m\x1b[0;90;1;40m▄█▀▀\x1b[0;90;1;43m▒\x1b[0;90;1;40m█\x1b[0;33;40m \x1b[0;37;40m \x1b[0;90;1;40m▀██\x1b[0;33;40m  \x1b[0;90;1;43m▀\x1b[0;90;1;40m█\x1b[0;37;40m \x1b[0;90;1;40m██\x1b[0;33;40m    \x1b[0;37;40m \x1b[0;90;1;40m▄▄\x1b[0;37;40m \x1b[0;33;40m \x1b[0;90;1;43m \x1b[0;90;1;40m█\x1b[0;33;40m \x1b[0;37;40m \x1b[0;33;40m \x1b[0;90;1;43m▒\x1b[0;90;1;40m█▀▀\x1b[0;90;1;43m▓\x1b[0;90;1;40m█\x1b[0;37;40m      \x1b[0;90;1;40m▄█▀▀\x1b[0;90;1;43m▒\x1b[0;90;1;40m█\x1b[0;33;40m \x1b[0;37;40m \x1b[0;90;1;40m▄▄\x1b[0;37;40m \x1b[0;90;1;40m▀██\x1b[0;33;40m  \x1b[0;90;1;43m \x1b[0;90;1;40m█\x1b[0;37;40m \x1b[0;90;1;40m▄▄\x1b[0;37;40m \x1b[0;33;40m \x1b[0;90;1;43m█\x1b[0;90;1;40m█▀▀█▄\x1b[0;37;40m \x1b[0;90;1;40m██▀▀\x1b[0;90;1;43m▀\x1b[0;90;1;40m▄\x1b[0;37;40m \x1b[0;90;1;43m░\x1b[0;90;1;40m█▄▄█▀\x1b[0;37;40m \x1b[0;90;1;40m▀\x1b[0;90;1;43m░\x1b[0;90;1;40m█▀▀█▄\x1b[0;37;40m \x1b[0;90;1;43m░\x1b[0;90;1;40m█▀▀\x1b[0;90;1;43m \x1b[0;90;1;40m▄\x1b[0;37;40m \x1b[0;90;1;40m▀\x1b[0;90;1;43m░\x1b[0;90;1;40m█▀▀█▄\x1b[0m
\x1b[1;36m\x1b[0;90;1;43m \x1b[0;90;1;40m█\x1b[0;33;40m  \x1b[0;90;1;43m░\x1b[0;90;1;40m█\x1b[0;33;40m \x1b[0;37;40m \x1b[0;33;40m \x1b[0;90;1;43m░\x1b[0;90;1;40m█\x1b[0;33;40m  \x1b[0;90;1;43m░▓\x1b[0;37;40m \x1b[0;90;1;43m▒\x1b[0;90;1;40m█\x1b[0;33;40m    \x1b[0;37;40m \x1b[0;90;1;43m░\x1b[0;90;1;40m█\x1b[0;37;40m \x1b[0;33;40m \x1b[0;90;1;43m ▀\x1b[0;33;40m \x1b[0;37;40m \x1b[0;33;40m \x1b[0;90;1;43m \x1b[0;90;1;40m█\x1b[0;33;40m  \x1b[0;90;1;43m \x1b[0;90;1;40m█\x1b[0;37;40m      \x1b[0;90;1;43m \x1b[0;90;1;40m█\x1b[0;33;40m  \x1b[0;90;1;43m░\x1b[0;90;1;40m█\x1b[0;33;40m \x1b[0;37;40m \x1b[0;90;1;43m░\x1b[0;90;1;40m█\x1b[0;37;40m \x1b[0;33;40m \x1b[0;90;1;43m \x1b[0;90;1;40m█\x1b[0;33;40m  \x1b[0;90;1;43m ▒\x1b[0;37;40m \x1b[0;90;1;43m░\x1b[0;90;1;40m█\x1b[0;37;40m \x1b[0;33;40m \x1b[0;90;1;43m░▀\x1b[0;33;40m  \x1b[0;90;1;40m▀▀\x1b[0;37;40m \x1b[0;90;1;43m░\x1b[0;90;1;40m█\x1b[0;33;40m  \x1b[0;90;1;43m░\x1b[0;90;1;40m█\x1b[0;37;40m \x1b[0;90;1;43m ▀\x1b[0;33;40m  \x1b[0;90;1;43m \x1b[0;90;1;40m█\x1b[0;37;40m \x1b[0;33;40m \x1b[0;90;1;43m░▓\x1b[0;33;40m  \x1b[0;90;1;43m▒\x1b[0;90;1;40m█\x1b[0;37;40m \x1b[0;90;1;43m \x1b[0;90;1;40m█\x1b[0;33;40m  \x1b[0;90;1;43m░\x1b[0;90;1;40m█\x1b[0;37;40m \x1b[0;33;40m \x1b[0;90;1;43m░▓\x1b[0;33;40m  \x1b[0;90;1;43m▒\x1b[0;90;1;40m█\x1b[0m
\x1b[1;36m\x1b[0;90;1;43m░▒\x1b[0;33;40m▄▄\x1b[0;90;1;43m  \x1b[0;33;40m \x1b[0;37;40m \x1b[0;33;40m \x1b[0;90;1;43m  \x1b[0;33;40m▄▄\x1b[0;90;1;43m  \x1b[0;37;40m \x1b[0;90;1;43m░▓\x1b[0;33;40m  \x1b[0;90;1;43m ▓\x1b[0;37;40m \x1b[0;93;1;43m▄ \x1b[0;37;40m \x1b[0;33;40m \x1b[0;90;1;43m ▓\x1b[0;33;40m \x1b[0;37;40m \x1b[0;33;40m \x1b[0;90;1;43m \x1b[0;33;40m█  \x1b[0;93;1;43m▄\x1b[0;90;1;43m▒\x1b[0;37;40m      \x1b[0;90;1;43m░▒\x1b[0;33;40m▄▄\x1b[0;90;1;43m  \x1b[0;33;40m \x1b[0;37;40m \x1b[0;93;1;43m▄ \x1b[0;37;40m \x1b[0;33;40m \x1b[0;90;1;43m░▀\x1b[0;33;40m▄▄\x1b[0;90;1;43m░\x1b[0;33;40m▀\x1b[0;37;40m \x1b[0;93;1;43m▄ \x1b[0;37;40m \x1b[0;33;40m ▀▀▀▀\x1b[0;90;1;43m░▓\x1b[0;37;40m \x1b[0;33;40m█\x1b[0;90;1;43m▓\x1b[0;33;40m▀▀▀▀\x1b[0;37;40m \x1b[0;90;1;43m ▓\x1b[0;33;40m  \x1b[0;93;1;43m░\x1b[0;90;1;43m▒\x1b[0;37;40m \x1b[0;33;40m \x1b[0;93;1;43m░\x1b[0;33;40m█▀▀\x1b[0;90;1;43m░\x1b[0;93;1;43m░\x1b[0;37;40m \x1b[0;90;1;43m ▓\x1b[0;33;40m    \x1b[0;37;40m \x1b[0;33;40m \x1b[0;93;1;43m░\x1b[0;33;40m█▀▀\x1b[0;90;1;43m░\x1b[0;93;1;43m░\x1b[0m
\x1b[1;36m\x1b[0;37;40m        \x1b[0;33;40m     ▀▀\x1b[0;37;40m \x1b[0;33;40m ▀▀▀▀▀\x1b[0;37;40m \x1b[0;93;1;40m▀▀\x1b[0;37;40m      \x1b[0;33;40m     \x1b[0;93;1;40m▀▀\x1b[0;37;40m              \x1b[0;93;1;40m▀▀\x1b[0;37;40m         \x1b[0;93;1;40m▀▀\x1b[0;37;40m \x1b[0;33;40m \x1b[0;93;1;40m▀\x1b[0;33;40m▀▀▀▀▀\x1b[0;37;40m \x1b[0;33;40m ▀▀▀▀▀\x1b[0;37;40m \x1b[0;33;40m    \x1b[0;93;1;40m▀▀\x1b[0;37;40m \x1b[0;33;40m     ▀▀\x1b[0;37;40m        \x1b[0;33;40m     ▀▀\x1b[0m
\x1b[1;90m                                                               v2.1.0 | \x1b[1;32mIT Undergraduate\x1b[0m

\x1b[1;36m╭── \x1b[1;37mABOUT ME\x1b[1;36m ────────────────────────────────────────────────────────────────────────╮\x1b[0m
  I am an Information Technology undergraduate who builds systems.
  I combine core computer science fundamentals with modern AI tools to design, 
  build, and deploy functional software fast. 

\x1b[1;36m╭── \x1b[1;37mCORE SKILLS\x1b[1;36m ─────────────────────────────────────────────────────────────────────╮\x1b[0m
  \x1b[1;33m■ Code       :\x1b[0m JavaScript, Java, Python, R, Bash, HTML/CSS
  \x1b[1;33m■ Technology :\x1b[0m Docker, MSSQL, Cloudflare Workers, Spring Boot, Ubuntu
  \x1b[1;33m■ Concepts   :\x1b[0m AI Model Training, Serverless Edge, Browser Extensions

\x1b[1;36m╭── \x1b[1;37mFEATURED PROJECTS\x1b[1;36m ───────────────────────────────────────────────────────────────╮\x1b[0m
  \x1b[1;32m★ SLIIT Courseweb Cleaner\x1b[0m
    A context-aware browser extension filtering irrelevant Moodle modules.
    ↳ Install: \x1b]8;;https://chromewebstore.google.com/detail/sliit-courseweb-cleaner/lnoadlfhebmkhmbfmehdgoffjllgadjm\x07\x1b[4;36mChrome\x1b[0m\x1b]8;;\x07 • \x1b]8;;https://microsoftedge.microsoft.com/addons/detail/sliit-courseweb-cleaner/gmlodfhgiopjgamoijjffcmgfenkkkhe\x07\x1b[4;36mEdge\x1b[0m\x1b]8;;\x07 • \x1b]8;;https://addons.mozilla.org/en-US/firefox/addon/sliit-courseweb-cleaner/\x07\x1b[4;36mFirefox\x1b[0m\x1b]8;;\x07

  \x1b[1;32m★ SLIIT IT Vault (Y1S2)\x1b[0m
    An open-source, highly structured learning base with AI study partners.

  \x1b[1;32m★ Terminal CV (This Script)\x1b[0m
    A CLI-first resume hosted on global edge networks.
    ↳ \x1b]8;;https://github.com/dulithdivisekara/terminal-cv\x07\x1b[4;36mView on GitHub\x1b[0m\x1b]8;;\x07

\x1b[1;36m╭── \x1b[1;37mCONTACT & LINKS\x1b[1;36m ─────────────────────────────────────────────────────────────────╮\x1b[0m
  \x1b[1;35m✉ Email    :\x1b[0m dulithmdivisekara@gmail.com
  \x1b[1;35m⑂ GitHub   :\x1b[0m \x1b]8;;https://github.com/dulithdivisekara\x07\x1b[4;36mgithub.com/dulithdivisekara\x1b[0m\x1b]8;;\x07
  \x1b[1;35m@ LinkedIn :\x1b[0m \x1b]8;;https://linkedin.com/in/dulithdivisekara\x07\x1b[4;36mlinkedin.com/in/dulithdivisekara\x1b[0m\x1b]8;;\x07

\x1b[1;90m───────────────────────────────────────────────────────────────────────────────────────\x1b[0m
\x1b[1;90mTip: curl whoami.dulith.me/json   \x1b[1;36m(View data as JSON)\x1b[0m
\x1b[1;90mTip: curl whoami.dulith.me/secret \x1b[1;36m(Execute hidden protocol)\x1b[0m
\x1b[1;90m───────────────────────────────────────────────────────────────────────────────────────\x1b[0m
`;

      return new Response(asciiResume, {
        headers: { ...customHeaders, 'content-type': 'text/plain; charset=utf-8' },
      });
    }

    return Response.redirect('https://dulithdivisekara.pages.dev', 301);
  }
}