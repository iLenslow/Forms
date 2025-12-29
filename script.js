document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  const translations = {
    de: {
      nav_home: 'Home',
      nav_about: 'Über mich',
      nav_socials: 'Socials',
      nav_contact: 'Kontakt',

      home_title: 'Willkommen',
      home_p1: 'Ich bin Merrick.',
      home_p2: 'Ich arbeite in der IT, beschäftige mich leidenschaftlich mit Technik und mag Projekte, bei denen man sich vollständig in ein Problem vertiefen kann.',
      home_p3: 'Diese Website gibt einen Einblick in meine beruflichen Schwerpunkte, meine privaten IT-Projekte und ein paar Dinge, die mich abseits des Codes interessieren.',

      about_title: 'Über mich',
      about_p1: 'Ich bin ein eher zurückhaltender Mensch und brauche etwas Zeit, um aufzutauen. Wenn das Eis aber gebrochen ist, arbeite ich fokussiert, strukturiert und mit viel Freude an komplexen Aufgaben.',
      about_p2: 'Besonders schätze ich ruhige Arbeitsumgebungen – im Homeoffice bin ich deutlich produktiver als im Büro. Mit lauter Musik auf den Kopfhörern kann ich mich voll auf ein Projekt konzentrieren und alles andere ausblenden. Genau das macht für mich den Reiz von Problemlösung und Projektarbeit aus – sie sind für mich fast schon eine Form von Entspannung.',

      work_title: 'Berufliches',
      work_p1: 'Beruflich bin ich in der IT tätig, mit Schwerpunkt im EDI-Bereich. Ich entwickle und betreue Schnittstellen für eine Spedition, hauptsächlich mit der Middleware Lobster Data. Dabei geht es um den zuverlässigen Austausch von Daten zwischen unterschiedlichen Systemen – ein Bereich, der sowohl technisches Verständnis als auch Prozessdenken erfordert.',
      work_p2: 'Mein Weg in die IT war nicht ganz geradlinig:<br />Nach einem begonnenen, aber nicht abgeschlossenen Studium der Anglistik und Geschichte habe ich eine Ausbildung zum Kaufmann für Spedition und Logistikdienstleistungen abgeschlossen. Bereits während der Ausbildung habe ich mich intensiv mit EDI-Themen weitergebildet, was schließlich auch meinen heutigen beruflichen Schwerpunkt geprägt hat.',

      it_title: 'IT & Projekte',
      it_p1: 'Mein technisches Interesse geht weit über den Job hinaus.',
      it_p2: 'In meiner Freizeit beschäftige ich mich unter anderem mit:',
      it_list_1: 'Homeservern',
      it_list_2: 'Front-End Development',
      it_list_3: 'AI Image Generation mit Stable Diffusion',
      it_p3: 'Mich reizen vor allem Projekte, die einen echten Nutzen haben oder ein konkretes Problem lösen. Reines „Lernen um des Lernens willen“ motiviert mich weniger – nachhaltige Motivation entsteht für mich erst dann, wenn ein Projekt sinnvoll einsetzbar ist.',
      it_p4: 'Zukünftig möchte ich mich gerne intensiver mit C# und Backend-Development beschäftigen. <br />Aktuell fehlt mir noch das passende Projekt, das sowohl technisch spannend ist als auch langfristigen Mehrwert bietet. <br />Außerdem möchte ich ein Kubernetes-Cluster aufsetzen, auch wenn ich noch nicht genau weiß, wofür ich es nutzen werde.',

      music_title: 'Musik',
      music_p1: 'Neben der Technik spielt Musik eine große Rolle in meinem Alltag. Mein Geschmack ist breit gefächert, mit einem klaren Hang zu intensiveren Genres:',
      music_list_1: 'Metalcore',
      music_list_2: 'Hard Techno',
      music_list_3: 'Psytrance',
      music_p2: 'Gleichzeitig höre ich aber genauso gern klassische Musik oder japanischen City Pop. Musik hilft mir, mich zu konzentrieren, abzuschalten und in den richtigen Flow zu kommen – besonders beim Arbeiten.',

      socials_title: 'Socials',
      socials_p1: 'Folg mir hier!',

      contact_title: 'Kontakt',
      form_name_label: 'Name',
      form_email_label: 'E-Mail',
      form_message_label: 'Nachricht',
      form_send_button: 'Senden',

      theme_label: 'Theme',
      language_label: 'Sprache',
    },
    en: {
      nav_home: 'Home',
      nav_about: 'About me',
      nav_socials: 'Socials',
      nav_contact: 'Contact',

      home_title: 'Welcome',
      home_p1: 'I am Merrick.',
      home_p2: 'I work in IT, am passionate about technology, and enjoy projects where you can fully dive into a problem.',
      home_p3: 'This website gives an overview of my professional focus areas, my private IT projects, and a few things that interest me beyond code.',

      about_title: 'About me',
      about_p1: 'I am a rather reserved person and need a bit of time to warm up. But once the ice is broken, I work in a focused, structured way and really enjoy tackling complex tasks.',
      about_p2: 'I especially value quiet working environments – I am significantly more productive in the home office than in the office. With loud music in my headphones I can fully focus on a project and block out everything else. For me, problem solving and project work are almost a form of relaxation.',

      work_title: 'Professional',
      work_p1: 'Professionally, I work in IT with a focus on EDI. I develop and maintain interfaces for a freight forwarding company, mainly using the middleware Lobster Data. The goal is the reliable exchange of data between different systems – an area that requires both technical understanding and process thinking.',
      work_p2: 'My path into IT was not entirely straightforward:<br />After starting but not completing a degree in English Studies and History, I completed training as a Management Assistant for Freight Forwarding and Logistics Services. Already during my training I studied EDI topics in depth, which ultimately shaped my current professional focus.',

      it_title: 'IT & Projects',
      it_p1: 'My technical interests go far beyond my job.',
      it_p2: 'In my free time I work on things like:',
      it_list_1: 'Home servers',
      it_list_2: 'Front-end development',
      it_list_3: 'AI image generation with Stable Diffusion',
      it_p3: 'I am especially drawn to projects that provide real value or solve a concrete problem. Pure “learning for the sake of learning” motivates me less – lasting motivation only really appears for me when a project can be used meaningfully.',
      it_p4: 'In the future, I would like to focus more on C# and back-end development. <br />Right now I am still missing the right project that is both technically exciting and offers long-term value. <br />I would also like to set up a Kubernetes cluster, even though I do not yet know exactly what I will use it for.',

      music_title: 'Music',
      music_p1: 'Besides technology, music plays a big role in my everyday life. My taste is quite broad, with a clear preference for more intense genres:',
      music_list_1: 'Metalcore',
      music_list_2: 'Hard techno',
      music_list_3: 'Psytrance',
      music_p2: 'At the same time I also enjoy classical music or Japanese city pop. Music helps me to concentrate, switch off, and get into the right flow – especially when I am working.',

      socials_title: 'Socials',
      socials_p1: 'Follow me here!',

      contact_title: 'Contact',
      form_name_label: 'Name',
      form_email_label: 'Email',
      form_message_label: 'Message',
      form_send_button: 'Send',

      theme_label: 'Theme',
      language_label: 'Language',
    }
  };

  let currentLang = localStorage.getItem('lang') || 'en';

  const applyLanguage = (lang) => {
    if (!translations[lang]) return;
    currentLang = lang;
    document.documentElement.lang = lang;

    const elements = document.querySelectorAll('[data-i18n-key]');
    elements.forEach((el) => {
      const key = el.getAttribute('data-i18n-key');
      const value = translations[lang][key];
      if (value !== undefined) {
        el.innerHTML = value;
      }
    });

    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect && languageSelect.value !== lang) {
      languageSelect.value = lang;
    }

    localStorage.setItem('lang', lang);
  };

  applyLanguage(currentLang);

  const languageSelect = document.getElementById('languageSelect');
  if (languageSelect) {
    languageSelect.addEventListener('change', (event) => {
      applyLanguage(event.target.value);
    });
  }

  const themeToggle = document.getElementById('themeToggle');

  let vantaEffect = null;

  const updateVantaBackground = () => {
    const isLight = body.classList.contains('light');

    if (vantaEffect && typeof vantaEffect.destroy === 'function') {
      vantaEffect.destroy();
      vantaEffect = null;
    }

    if (isLight) {
      if (window.VANTA && window.VANTA.FOG) {
        vantaEffect = window.VANTA.FOG({
          el: '#vanta-bg',
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          highlightColor: 0xffffff,
          midtoneColor: 0x8e8e8e,
          lowlightColor: 0xff0000
        });
      }
    } else {
      if (window.VANTA && window.VANTA.NET) {
        vantaEffect = window.VANTA.NET({
          el: '#vanta-bg',
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x3fc6ff,
          points: 15.00,
          maxDistance: 29.00,
          spacing: 18.00
        });
      }
    }
  };

  // Check for saved theme preference or default to dark
  const currentTheme = localStorage.getItem('theme') || 'dark';
  if (currentTheme === 'light') {
    body.classList.add('light');
    if (themeToggle) {
      themeToggle.checked = true;
    }
  }

  updateVantaBackground();

  // Toggle theme on checkbox change
  if (themeToggle) {
    themeToggle.addEventListener('change', () => {
      if (themeToggle.checked) {
        body.classList.add('light');
        localStorage.setItem('theme', 'light');
      } else {
        body.classList.remove('light');
        localStorage.setItem('theme', 'dark');
      }
      updateVantaBackground();
    });
  }

  // Fly-in/out on scroll for anileft/aniright and animated dotlotties
  const animatedBlocks = document.querySelectorAll('.anileft, .aniright, .anidot');
  if ('IntersectionObserver' in window && animatedBlocks.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        } else {
          entry.target.classList.remove('is-visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -5% 0px' });

    animatedBlocks.forEach((el) => observer.observe(el));
  } else {
    animatedBlocks.forEach((el) => el.classList.add('is-visible'));
  }
});