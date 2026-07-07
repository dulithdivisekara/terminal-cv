export default {
  async fetch(request) {
    const url = new URL(request.url);
    const pathname = url.pathname.toLowerCase();
    const userAgent = (request.headers.get('user-agent') || '').toLowerCase();
    
    // Custom HTTP Headers to impress engineers who inspect your request
    const customHeaders = {
      'Access-Control-Allow-Origin': '*',
      'X-Powered-By': 'Cloudflare Workers & Linux Mint',
      'X-Author': 'Dulith Divisekara',
      'X-Status': 'Ready to build awesome things!'
    };

    // ------------------------------------------------------------------
    // FEATURE 1: THE JSON ENDPOINT (/json)
    // ------------------------------------------------------------------
    if (pathname === '/json') {
      const jsonData = {
        name: "Dulith Divisekara",
        title: "Information Technology Undergraduate",
        education: "B.Sc (Hons) in Information Technology - SLIIT",
        skills: ["Java", "JavaScript", "SQL", "TCP/IP", "Linux Mint", "Arduino"],
        contact: {
          email: "dulithmdivisekara@gmail.com",
          github: "https://github.com/dulithdivisekara",
          linkedin: "https://linkedin.com/in/dulithdivisekara"
        }
      };
      return new Response(JSON.stringify(jsonData, null, 2), {
        headers: { ...customHeaders, 'content-type': 'application/json; charset=utf-8' }
      });
    }

    // ------------------------------------------------------------------
    // FEATURE 2: THE EASTER EGG (/secret)
    // ------------------------------------------------------------------
    if (pathname === '/secret') {
      const secretMessage = `
\x1b[1;32m🎉 You found the hidden endpoint! 🎉\x1b[0m
\x1b[1;36mHere is my networking philosophy:\x1b[0m "There is no place like 127.0.0.1"
Feel free to reach out on LinkedIn—I'd love to chat about tech, IoT, or music!
`;
    return new Response(JSON.stringify(jsonData, null, 2) + '\n', {
    headers: { ...customHeaders, 'content-type': 'application/json; charset=utf-8' }
    });
    }

    // ------------------------------------------------------------------
    // MAIN ROUTING: CLI (curl/wget) vs BROWSER
    // ------------------------------------------------------------------
    if (userAgent.includes('curl') || userAgent.includes('wget')) {
      const asciiResume = `
\x1b[1;36m======================================================================\x1b[0m
\x1b[1;32m   DULITH DIVISEKARA | INFORMATION TECHNOLOGY UNDERGRADUATE\x1b[0m
\x1b[1;36m======================================================================\x1b[0m

\x1b[1;33m[ ABOUT ME ]\x1b[0m
  • IT Undergraduate specializing in networking, serverless tech, & IoT.
  • Actively seeking collaborative roles to build scalable, practical systems.

\x1b[1;33m[ EDUCATION ]\x1b[0m
  • B.Sc (Hons) in Information Technology 
    Sri Lanka Institute of Information Technology (SLIIT)

\x1b[1;33m[ TECHNICAL SKILLS ]\x1b[0m
  • Core Languages : Java, JavaScript, SQL
  • Networking     : TCP/IP, DHCP, Routing & Band Configuration, VoLTE
  • Platforms & OS : Linux (Mint), Git/GitHub, Cloudflare Serverless
  • Hardware/IoT   : Arduino Development, Sensor Systems & Automation

\x1b[1;33m[ EXPERIENCES & PROJECTS ]\x1b[0m
  • Technatia Technology Exhibition
    - Assisted with technical committee management and event coordination.
  • Arduino Smart Home / Sensor Automation
    - Designed and engineered embedded hardware logic and hardware wiring layouts.
  • Serverless CLI CV (This Script)
    - Built a smart-routing worker to handle conditional HTTP request headers.

\x1b[1;33m[ HOBBIES & INTERESTS ]\x1b[0m
  • Music production & acoustic guitar
  • Classic motorcycles & mechanical restoration
  • Customizing Linux environments & exploring edge computing

\x1b[1;33m[ CONTACT ]\x1b[0m
  • Email    : dulithmdivisekara@gmail.com
  • GitHub   : https://github.com/dulithdivisekara
  • LinkedIn : https://linkedin.com/in/dulithdivisekara

\x1b[1;35mTip: Try running: curl https://cv.dulithdivisekara.workers.dev/json\x1b[0m
\x1b[1;35mOr search for hidden easter eggs: curl https://cv.dulithdivisekara.workers.dev/secret\x1b[0m
`;

      return new Response(asciiResume, {
        headers: { ...customHeaders, 'content-type': 'text/plain; charset=utf-8' },
      });
    }

    // WEB BROWSER: Safe redirect to LinkedIn
    return Response.redirect('https://linkedin.com/in/dulithdivisekara', 301);
  }
}
