export default {
  async fetch(request) {
    const url = new URL(request.url);
    const pathname = url.pathname.toLowerCase();
    const userAgent = (request.headers.get('user-agent') || '').toLowerCase();
    
    const customHeaders = {
      'Access-Control-Allow-Origin': '*',
      'X-Powered-By': 'Cloudflare Workers & Linux Mint',
      'X-Author': 'Dulith Divisekara',
      'X-Status': 'Ready to build awesome things!'
    };

    if (pathname === '/json') {
      const jsonData = {
        name: "Dulith Divisekara",
        title: "Information Technology Undergraduate",
        tagline: "I combine core computer science fundamentals with modern AI tools to build and deploy software fast.",
        skills: {
          code: ["Java", "JavaScript", "Bash", "HTML/CSS"],
          technology: ["Spring Boot", "Cloudflare Workers", "Maven", "Linux"],
          concepts: ["Full-Stack Web", "Networking", "Automation", "Security Operations"]
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

    if (userAgent.includes('curl') || userAgent.includes('wget')) {
      const asciiResume = `
\x1b[1;36m\x1b[0;33;40m    \x1b[0;90;1;40m▄▄▄\x1b[0;37;40m \x1b[0;33;40m       \x1b[0;37;40m \x1b[0;33;40m      \x1b[0;37;40m \x1b[0;90;1;40m▄▄\x1b[0;37;40m \x1b[0;90;1;40m▄\x1b[0;90;1;43m░█\x1b[0;90;1;40m▄\x1b[0;37;40m \x1b[0;90;1;40m▄▄▄\x1b[0;33;40m    \x1b[0;37;40m      \x1b[0;33;40m    \x1b[0;90;1;40m▄▄▄\x1b[0;37;40m \x1b[0;90;1;40m▄▄\x1b[0;37;40m \x1b[0;33;40m     \x1b[0;90;1;40m▄▄\x1b[0;37;40m \x1b[0;90;1;40m▄▄\x1b[0;37;40m \x1b[0;33;40m       \x1b[0;37;40m \x1b[0;33;40m      \x1b[0;37;40m \x1b[0;33;40m    \x1b[0;90;1;40m▄▄\x1b[0;37;40m \x1b[0;33;40m       \x1b[0;37;40m \x1b[0;33;40m      \x1b[0;37;40m \x1b[0;33;40m       \x1b[0m
\x1b[1;36m\x1b[0;90;1;40m▄█▀▀\x1b[0;90;1;43m▒\x1b[0;90;1;40m█\x1b[0;33;40m \x1b[0;37;40m \x1b[0;90;1;40m▀██\x1b[0;33;40m  \x1b[0;90;1;43m▀\x1b[0;90;1;40m█\x1b[0;37;40m \x1b[0;90;1;40m██\x1b[0;33;40m    \x1b[0;37;40m \x1b[0;90;1;40m▄▄\x1b[0;37;40m \x1b[0;33;40m \x1b[0;90;1;43m \x1b[0;90;1;40m█\x1b[0;33;40m \x1b[0;37;40m \x1b[0;33;40m \x1b[0;90;1;43m▒\x1b[0;90;1;40m█▀▀\x1b[0;90;1;43m▓\x1b[0;90;1;40m█\x1b[0;37;40m      \x1b[0;90;1;40m▄█▀▀\x1b[0;90;1;43m▒\x1b[0;90;1;40m█\x1b[0;33;40m \x1b[0;37;40m \x1b[0;90;1;40m▄▄\x1b[0;37;40m \x1b[0;90;1;40m▀██\x1b[0;33;40m  \x1b[0;90;1;43m \x1b[0;90;1;40m█\x1b[0;37;40m \x1b[0;90;1;40m▄▄\x1b[0;37;40m \x1b[0;33;40m \x1b[0;90;1;43m█\x1b[0;90;1;40m█▀▀█▄\x1b[0;37;40m \x1b[0;90;1;40m██▀▀\x1b[0;90;1;43m▀\x1b[0;90;1;40m▄\x1b[0;37;40m \x1b[0;90;1;43m░\x1b[0;90;1;40m█▄▄█▀\x1b[0;37;40m \x1b[0;90;1;40m▀\x1b[0;90;1;43m░\x1b[0;90;1;40m█▀▀█▄\x1b[0;37;40m \x1b[0;90;1;43m░\x1b[0;90;1;40m█▀▀\x1b[0;90;1;43m \x1b[0;90;1;40m▄\x1b[0;37;40m \x1b[0;90;1;40m▀\x1b[0;90;1;43m░\x1b[0;90;1;40m█▀▀█▄\x1b[0m
\x1b[1;36m\x1b[0;90;1;43m \x1b[0;90;1;40m█\x1b[0;33;40m  \x1b[0;90;1;43m░\x1b[0;90;1;40m█\x1b[0;33;40m \x1b[0;37;40m \x1b[0;33;40m \x1b[0;90;1;43m░\x1b[0;90;1;40m█\x1b[0;33;40m  \x1b[0;90;1;43m░▓\x1b[0;37;40m \x1b[0;90;1;43m▒\x1b[0;90;1;40m█\x1b[0;33;40m    \x1b[0;37;40m \x1b[0;90;1;43m░\x1b[0;90;1;40m█\x1b[0;37;40m \x1b[0;33;40m \x1b[0;90;1;43m ▀\x1b[0;33;40m \x1b[0;37;40m \x1b[0;33;40m \x1b[0;90;1;43m \x1b[0;90;1;40m█\x1b[0;33;40m  \x1b[0;90;1;43m \x1b[0;90;1;40m█\x1b[0;37;40m      \x1b[0;90;1;43m \x1b[0;90;1;40m█\x1b[0;33;40m  \x1b[0;90;1;43m░\x1b[0;90;1;40m█\x1b[0;33;40m \x1b[0;37;40m \x1b[0;90;1;43m░\x1b[0;90;1;40m█\x1b[0;37;40m \x1b[0;33;40m \x1b[0;90;1;43m \x1b[0;90;1;40m█\x1b[0;33;40m  \x1b[0;90;1;43m ▒\x1b[0;37;40m \x1b[0;90;1;43m░\x1b[0;90;1;40m█\x1b[0;37;40m \x1b[0;33;40m \x1b[0;90;1;43m░▀\x1b[0;33;40m  \x1b[0;90;1;40m▀▀\x1b[0;37;40m \x1b[0;90;1;43m░\x1b[0;90;1;40m█\x1b[0;33;40m  \x1b[0;90;1;43m░\x1b[0;90;1;40m█\x1b[0;37;40m \x1b[0;90;1;43m ▀\x1b[0;33;40m  \x1b[0;90;1;43m \x1b[0;90;1;40m█\x1b[0;37;40m \x1b[0;33;40m \x1b[0;90;1;43m░▓\x1b[0;33;40m  \x1b[0;90;1;43m▒\x1b[0;90;1;40m█\x1b[0;37;40m \x1b[0;90;1;43m \x1b[0;90;1;40m█\x1b[0;33;40m  \x1b[0;90;1;43m░\x1b[0;90;1;40m█\x1b[0;37;40m \x1b[0;33;40m \x1b[0;90;1;43m░▓\x1b[0;33;40m  \x1b[0;90;1;43m▒\x1b[0;90;1;40m█\x1b[0m
\x1b[1;36m\x1b[0;90;1;43m░▒\x1b[0;33;40m▄▄\x1b[0;90;1;43m  \x1b[0;33;40m \x1b[0;37;40m \x1b[0;33;40m \x1b[0;90;1;43m  \x1b[0;33;40m▄▄\x1b[0;90;1;43m  \x1b[0;37;40m \x1b[0;90;1;43m░▓\x1b[0;33;40m  \x1b[0;90;1;43m ▓\x1b[0;37;40m \x1b[0;93;1;43m▄ \x1b[0;37;40m \x1b[0;33;40m \x1b[0;90;1;43m ▓\x1b[0;33;40m \x1b[0;37;40m \x1b[0;33;40m \x1b[0;90;1;43m \x1b[0;33;40m█  \x1b[0;93;1;43m▄\x1b[0;90;1;43m▒\x1b[0;37;40m      \x1b[0;90;1;43m░▒\x1b[0;33;40m▄▄\x1b[0;90;1;43m  \x1b[0;33;40m \x1b[0;37;40m \x1b[0;93;1;43m▄ \x1b[0;37;40m \x1b[0;33;40m \x1b[0;90;1;43m░▀\x1b[0;33;40m▄▄\x1b[0;90;1;43m░\x1b[0;33;40m▀\x1b[0;37;40m \x1b[0;93;1;43m▄ \x1b[0;37;40m \x1b[0;33;40m ▀▀▀▀\x1b[0;90;1;43m░▓\x1b[0;37;40m \x1b[0;33;40m█\x1b[0;90;1;43m▓\x1b[0;33;40m▀▀▀▀\x1b[0;37;40m \x1b[0;90;1;43m ▓\x1b[0;33;40m  \x1b[0;93;1;43m░\x1b[0;90;1;43m▒\x1b[0;37;40m \x1b[0;33;40m \x1b[0;93;1;43m░\x1b[0;33;40m█▀▀\x1b[0;90;1;43m░\x1b[0;93;1;43m░\x1b[0;37;40m \x1b[0;90;1;43m ▓\x1b[0;33;40m    \x1b[0;37;40m \x1b[0;33;40m \x1b[0;93;1;43m░\x1b[0;33;40m█▀▀\x1b[0;90;1;43m░\x1b[0;93;1;43m░\x1b[0m
\x1b[1;36m\x1b[0;37;40m        \x1b[0;33;40m     ▀▀\x1b[0;37;40m \x1b[0;33;40m ▀▀▀▀▀\x1b[0;37;40m \x1b[0;93;1;40m▀▀\x1b[0;37;40m      \x1b[0;33;40m     \x1b[0;93;1;40m▀▀\x1b[0;37;40m              \x1b[0;93;1;40m▀▀\x1b[0;37;40m         \x1b[0;93;1;40m▀▀\x1b[0;37;40m \x1b[0;33;40m \x1b[0;93;1;40m▀\x1b[0;33;40m▀▀▀▀▀\x1b[0;37;40m \x1b[0;33;40m ▀▀▀▀▀\x1b[0;37;40m \x1b[0;33;40m    \x1b[0;93;1;40m▀▀\x1b[0;37;40m \x1b[0;33;40m     ▀▀\x1b[0;37;40m        \x1b[0;33;40m     ▀▀\x1b[0m
\x1b[1;90m                                                               v2.0.0 | \x1b[1;32mIT Undergraduate\x1b[0m

\x1b[1;36m╭── \x1b[1;37mABOUT ME\x1b[1;36m ────────────────────────────────────────────────────────────────────────╮\x1b[0m
  I am an Information Technology undergraduate who builds systems.
  I combine core computer science fundamentals with modern AI tools to design, 
  build, and deploy functional software fast. 

\x1b[1;36m╭── \x1b[1;37mCORE SKILLS\x1b[1;36m ─────────────────────────────────────────────────────────────────────╮\x1b[0m
  \x1b[1;33m■ Code       :\x1b[0m Java, JavaScript, Bash, HTML/CSS
  \x1b[1;33m■ Technology :\x1b[0m Spring Boot, Cloudflare Workers, Maven, Linux
  \x1b[1;33m■ Concepts   :\x1b[0m Full-Stack Web, Networking, Automation, Security Operations

\x1b[1;36m╭── \x1b[1;37mFEATURED PROJECTS\x1b[1;36m ───────────────────────────────────────────────────────────────╮\x1b[0m
  \x1b[1;32m★ TixCore Event Booking System\x1b[0m
    A dependency-light event ticketing platform with custom databases.
  
  \x1b[1;32m★ OpenClaw Backup\x1b[0m
    An autonomous disaster-recovery pipeline for AI agents.

  \x1b[1;32m★ SLIIT Y2S1 Vault\x1b[0m
    A version-controlled, AI-augmented technical knowledge base.

  \x1b[1;32m★ Terminal CV (This Script)\x1b[0m
    A CLI-first resume hosted on global edge networks.

\x1b[1;36m╭── \x1b[1;37mCONTACT & LINKS\x1b[1;36m ─────────────────────────────────────────────────────────────────╮\x1b[0m
  \x1b[1;35m✉ Email    :\x1b[0m dulithmdivisekara@gmail.com
  \x1b[1;35m⑂ GitHub   :\x1b[0m github.com/dulithdivisekara
  \x1b[1;35m@ LinkedIn :\x1b[0m linkedin.com/in/dulithdivisekara

\x1b[1;90m───────────────────────────────────────────────────────────────────────────────────────\x1b[0m
\x1b[1;90mTip: curl cv.dulithdivisekara.workers.dev/json   \x1b[1;36m(View data as JSON)\x1b[0m
\x1b[1;90mTip: curl cv.dulithdivisekara.workers.dev/secret \x1b[1;36m(Execute hidden protocol)\x1b[0m
\x1b[1;90m───────────────────────────────────────────────────────────────────────────────────────\x1b[0m
`;

      return new Response(asciiResume, {
        headers: { ...customHeaders, 'content-type': 'text/plain; charset=utf-8' },
      });
    }

    return Response.redirect('https://linkedin.com/in/dulithdivisekara', 301);
  }
}
