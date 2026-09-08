(function(){
  const C = window.ECOM_CONTENT || {};

  /* =========================================================
     SAFE CONTENT LOADING
  ========================================================= */

  C.images = C.images || {};

  C.brand = C.brand || {};

  C.brand.name =
    C.brand.name || 'Ecom Bazzar';

  C.brand.tagline =
    C.brand.tagline || 'Commerce, engineered.';

  C.brand.location =
    C.brand.location || 'India';

  C.brand.email =
    C.brand.email || 'hello@ecombazzar.com';

  C.brand.phone =
    C.brand.phone || '+91 00000 00000';


  C.brand.social =
    C.brand.social || {};

  C.brand.social.instagram =
    C.brand.social.instagram || '#';

  C.brand.social.linkedin =
    C.brand.social.linkedin || '#';

  C.brand.social.facebook =
    C.brand.social.facebook || '#';



  /* =========================================================
     FALLBACK HOME CONTENT
  ========================================================= */

  C.home = C.home || {

    eyebrow:
      'Ecommerce growth studio',

    heroTitle:
      'We build ecommerce brands that scale.',

    heroCopy:
      'Strategy, creative, technology and performance — connected around growth.',

    heroPrimary:
      'Start a project',

    heroSecondary:
      'View our work',

    statStrip:[
      [
        'Growth',
        'Built to scale'
      ],

      [
        'Creative',
        'Built to convert'
      ],

      [
        'Commerce',
        'Built to perform'
      ]
    ],

    introTitle:
      'One connected commerce system.',

    introCopy:
      'We connect store, creative, media and operations into one growth model.',

    metrics:[
      [
        '01',
        'Strategy'
      ],

      [
        '02',
        'Execution'
      ],

      [
        '03',
        'Scale'
      ]
    ],

    quote:
      'Great ecommerce growth is rarely one tactic. It is a connected system.'

  };



  /* =========================================================
     FALLBACK ABOUT
  ========================================================= */

  C.about = C.about || {

    eyebrow:
      'About Ecom Bazzar',

    title:
      'Built around ecommerce growth.',

    copy:
      'We combine strategy, creative, technology and performance to help commerce brands move faster.',

    mission:
      'Build better commerce systems, not disconnected marketing activities.',

    values:[

      [
        'Commercial clarity',
        'We connect every activity to a business outcome.'
      ],

      [
        'Connected execution',
        'Creative, media, store and operations work together.'
      ]

    ]

  };



  C.services =
    Array.isArray(C.services)
      ? C.services
      : [];


  C.caseStudies =
    Array.isArray(C.caseStudies)
      ? C.caseStudies
      : [];


  C.team =
    Array.isArray(C.team)
      ? C.team
      : [];


  C.process =
    Array.isArray(C.process)
      ? C.process
      : [];



  C.contact = C.contact || {

    eyebrow:
      'Start a conversation',

    title:
      'Tell us what you want to grow.',

    copy:
      'Share your ecommerce challenge and we will help you find the right next move.',

    formEndpoint:''

  };



  const I = C.images;


  const page =
    document.body.dataset.page || 'home';


  const file = p =>
    p === 'home'
      ? 'index.html'
      : `${p}.html`;



  /* =========================================================
     NAVIGATION
  ========================================================= */

  const nav = [

    [
      'Home',
      'home'
    ],

    [
      'About',
      'about'
    ],

    [
      'Services',
      'services'
    ],

    [
      'Portfolio',
      'portfolio'
    ],

    [
      'Case Studies',
      'case-studies'
    ],

    [
      'Process',
      'process'
    ],

    [
      'Contact',
      'contact'
    ]

  ];



  /* =========================================================
     HELPERS
  ========================================================= */

  const esc = s =>

    String(
      s == null
        ? ''
        : s
    )

    .replace(

      /[&<>"']/g,

      c => ({

        '&':'&amp;',

        '<':'&lt;',

        '>':'&gt;',

        '"':'&quot;',

        "'":'&#039;'

      }[c])

    );



  const img = key =>
    I[key] || key || '';



  const chips = arr => `

    <div class="deliverables">

      ${
        (
          Array.isArray(arr)
            ? arr
            : []
        )

        .map(
          x =>
            `<span>${esc(x)}</span>`
        )

        .join('')
      }

    </div>

  `;



  /* =========================================================
     REQUIRED HTML ELEMENT CHECK
  ========================================================= */

  const header =
    document.getElementById(
      'site-header'
    );


  const footer =
    document.getElementById(
      'site-footer'
    );


  const root =
    document.getElementById(
      'page-root'
    );


  if(
    !header ||
    !footer ||
    !root
  ){

    console.error(
      'Ecom Bazzar: missing #site-header, #site-footer or #page-root'
    );

    return;

  }



  /* =========================================================
     HEADER
  ========================================================= */

  header.innerHTML = `

    <header class="site-header">

      <a
        class="brand-mark"
        href="index.html"
      >

        <img
          src="assets/images/logo.png"
          alt="Ecom Bazzar"
          class="brand-logo"
          onerror="this.style.display='none'"
        >

      </a>


      <button
        class="menu-button"
        aria-label="Toggle menu"
      >

        <span></span>

        <span></span>

      </button>


      <nav class="main-nav">

        ${
          nav

          .map(

            ([label,p]) => `

              <a

                class="${
                  page === p
                    ? 'active'
                    : ''
                }"

                href="${file(p)}"

              >

                ${label}

              </a>

            `

          )

          .join('')
        }


        <a
          class="nav-cta"
          href="contact.html"
        >
          Start a project ↗
        </a>

      </nav>

    </header>

  `;



  /* =========================================================
     FOOTER
  ========================================================= */

  footer.innerHTML = `

    <footer class="site-footer">


      <div class="footer-top">


        <div>

          <p class="kicker">
            Ready when you are.
          </p>

          <h2>
            Build a better commerce system.
          </h2>

        </div>


        <a
          class="button button-light"
          href="contact.html"
        >
          Start a conversation ↗
        </a>


      </div>



      <div class="footer-grid">


        <div>


          <div class="footer-brand">

            <img
              src="assets/images/logow.png"
              alt="Ecom Bazzar"
              class="footer-logo"
              onerror="this.style.display='none'"
            >

          </div>


          <p>

            ${esc(C.brand.tagline)}

            <br>

            ${esc(C.brand.location)}

          </p>


        </div>



        <div>


          <span class="footer-label">
            Navigate
          </span>


          ${
            nav

            .map(

              ([label,p]) => `

                <a href="${file(p)}">
                  ${label}
                </a>

              `

            )

            .join('')
          }


        </div>



        <div>


          <span class="footer-label">
            Contact
          </span>


          <a
            href="mailto:${esc(C.brand.email)}"
          >
            ${esc(C.brand.email)}
          </a>


          <a
            href="tel:${
              esc(C.brand.phone)
              .replace(/\s/g,'')
            }"
          >
            ${esc(C.brand.phone)}
          </a>


          <a
            href="${esc(C.brand.social.instagram)}"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>


          <a
            href="${esc(C.brand.social.linkedin)}"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>


          <a
            href="${esc(C.brand.social.facebook)}"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>


        </div>


      </div>



      <div class="footer-bottom">

        © ${new Date().getFullYear()}
        Ecom Bazzar.
        Built for growth.

      </div>


    </footer>

  `;



  /* =========================================================
     REUSABLE PAGE HERO
  ========================================================= */

  const pageHero = (

    eyebrow,

    title,

    copy,

    imageKey

  ) => `

    <section class="page-hero">


      <div class="page-hero-copy">


        <p class="eyebrow">
          ${esc(eyebrow)}
        </p>


        <h1>
          ${esc(title)}
        </h1>


        <p>
          ${esc(copy)}
        </p>


      </div>



      <div class="page-hero-image">

        <img
          src="${esc(img(imageKey))}"
          alt="${esc(title)}"
        >

      </div>


    </section>

  `;



  /* =========================================================
     SERVICE CARD
  ========================================================= */

  const serviceCard = s => `

    <article
      class="
        service-card
        accent-${esc(
          s.accent || 'blue'
        )}
      "
    >


      <div class="service-image">

        <img
          src="${esc(img(s.imageKey))}"
          alt="${esc(s.title)}"
        >

      </div>



      <div class="service-content">


        <div class="service-number">
          ${esc(s.number)}
        </div>


        <h3>
          ${esc(s.title)}
        </h3>


        <p>
          ${esc(s.short)}
        </p>


        <a href="services.html">
          Explore service ↗
        </a>


      </div>


    </article>

  `;



  /* =========================================================
     CASE STUDY CARD
  ========================================================= */

  const caseCard = (

    x,

    large = false

  ) => `

    <article
      class="
        case-card
        ${large ? 'large' : ''}
      "
    >


      <div class="case-image">

        <img
          src="${esc(img(x.imageKey))}"
          alt="${esc(x.title)}"
        >

      </div>



      <div class="case-overlay">


        <span>
          ${esc(x.tag)}
        </span>


        <h3>
          ${esc(x.title)}
        </h3>


        <div class="case-metric">


          <strong>
            ${esc(x.metric)}
          </strong>


          <small>
            ${esc(x.metricLabel)}
          </small>


        </div>


      </div>


    </article>

  `;



  let html = '';



  /* =========================================================
     HOME PAGE
  ========================================================= */

  if(page === 'home'){

    const H = C.home;


    html = `


      <section class="home-hero">


        <div class="hero-copy">


          <p class="eyebrow">
            ${esc(H.eyebrow)}
          </p>


          <h1>
            ${esc(H.heroTitle)}
          </h1>


          <p class="hero-lead">
            ${esc(H.heroCopy)}
          </p>



          <div class="hero-actions">


            <a
              class="button button-dark"
              href="contact.html"
            >
              ${esc(H.heroPrimary)} ↗
            </a>


            <a
              class="text-link"
              href="portfolio.html"
            >
              ${esc(H.heroSecondary)} →
            </a>


          </div>


        </div>



        <div class="hero-visual">


          <img
            src="${esc(I.hero || '')}"
            alt="Ecommerce strategy team at work"
          >


          <div
            class="
              floating-card
              floating-card-a
            "
          >

            <span>
              Growth system
            </span>

            <strong>
              Store · Creative · Media · Ops
            </strong>

          </div>



          <div
            class="
              floating-card
              floating-card-b
            "
          >

            <span>
              Commerce signal
            </span>

            <strong>
              Measure → Learn → Scale
            </strong>

          </div>


        </div>


      </section>



      <section class="ticker">


        <div class="ticker-track">


          ${
            [
              ...H.statStrip,
              ...H.statStrip
            ]

            .map(

              ([a,b]) => `

                <div class="ticker-item">

                  <strong>
                    ${esc(a)}
                  </strong>

                  <span>
                    ${esc(b)}
                  </span>

                </div>

              `

            )

            .join('')
          }


        </div>


      </section>



      <section
        class="
          intro-grid
          section-pad
        "
      >


        <div>


          <p class="eyebrow">
            The model
          </p>


          <h2>
            ${esc(H.introTitle)}
          </h2>


        </div>



        <div>


          <p class="big-copy">
            ${esc(H.introCopy)}
          </p>



          <div class="metric-grid">


            ${
              H.metrics

              .map(

                ([n,l]) => `

                  <div class="metric">

                    <strong>
                      ${esc(n)}
                    </strong>

                    <span>
                      ${esc(l)}
                    </span>

                  </div>

                `

              )

              .join('')
            }


          </div>


        </div>


      </section>



      <section class="image-band">


        <div class="image-band-main">

          <img
            src="${esc(I.team || '')}"
            alt="Team collaboration"
          >

        </div>



        <div
          class="
            image-band-copy
            pastel-blue-panel
          "
        >


          <p class="eyebrow">
            Connected execution
          </p>


          <h2>
            One team around the entire customer journey.
          </h2>


          <p>

            Instead of handing strategy from one vendor
            to another, we connect what your customer sees
            with what your numbers are saying.

          </p>


          <a
            class="text-link"
            href="about.html"
          >
            How we work →
          </a>


        </div>


      </section>



      <section class="section-pad">


        <div class="section-heading">


          <p class="eyebrow">
            The growth stack
          </p>


          <h2>
            Specialists that work like one system.
          </h2>


          <p class="section-copy">

            Every discipline is useful alone.
            The real advantage appears when
            they are connected.

          </p>


        </div>



        <div class="service-grid">


          ${
            C.services
            .slice(0,4)
            .map(serviceCard)
            .join('')
          }


        </div>



        <div class="section-end">


          <a
            class="button button-outline"
            href="services.html"
          >
            View all services →
          </a>


        </div>


      </section>



      <section
        class="
          split-feature
          section-pad-soft
        "
      >


        <div class="split-image">


          <img
            src="${esc(I.analytics || '')}"
            alt="Analytics dashboard"
          >


        </div>



        <div class="split-copy">


          <p class="eyebrow">
            Performance intelligence
          </p>


          <h2>
            Strategy gets better when every decision has context.
          </h2>


          <p>

            We bring commercial data,
            campaign performance,
            creative learnings and store behaviour
            into the same conversation.

          </p>



          <div class="mini-list">

            <span>
              Revenue quality
            </span>

            <span>
              Conversion
            </span>

            <span>
              Creative signals
            </span>

            <span>
              Customer economics
            </span>

          </div>


        </div>


      </section>



      <section
        class="
          section-pad
          cases-home
        "
      >


        <div class="section-heading">


          <p class="eyebrow">
            Proof, not promises
          </p>


          <h2>
            Selected growth stories.
          </h2>


        </div>



        <div class="cases-grid">


          ${
            C.caseStudies

            .map(
              (x,i) =>
                caseCard(
                  x,
                  i === 0
                )
            )

            .join('')
          }


        </div>


      </section>



      <section class="quote-section">


        <blockquote>
          “${esc(H.quote)}”
        </blockquote>


        <p>
          The Ecom Bazzar philosophy
        </p>


      </section>



      <section class="cta-panel">


        <div>


          <p class="eyebrow">
            Your next chapter
          </p>


          <h2>
            Have a growth problem worth solving?
          </h2>


        </div>



        <a
          class="button button-dark"
          href="contact.html"
        >
          Talk to Ecom Bazzar ↗
        </a>


      </section>


    `;

  }



  /* =========================================================
     ABOUT PAGE
  ========================================================= */

  else if(page === 'about'){

    const A = C.about;


    html =

      pageHero(
        A.eyebrow,
        A.title,
        A.copy,
        'office'
      )

      +

      `


      <section
        class="
          statement
          section-pad
        "
      >


        <p class="eyebrow">
          Our mission
        </p>


        <h2>
          ${esc(A.mission)}
        </h2>


      </section>



      <section
        class="
          two-photo-grid
          section-pad-soft
        "
      >


        <img
          src="${esc(I.team || '')}"
          alt="Team"
        >


        <img
          src="${esc(I.strategy || '')}"
          alt="Strategy"
        >


      </section>



      <section class="section-pad">


        <div class="section-heading">


          <p class="eyebrow">
            How we think
          </p>


          <h2>
            Principles behind the work.
          </h2>


        </div>



        <div class="values-grid">


          ${
            A.values

            .map(

              ([t,c],i) => `

                <article
                  class="
                    value-card
                    ${
                      i % 2
                        ? 'pastel-green-panel'
                        : 'pastel-blue-panel'
                    }
                  "
                >

                  <span>
                    0${i+1}
                  </span>

                  <h3>
                    ${esc(t)}
                  </h3>

                  <p>
                    ${esc(c)}
                  </p>

                </article>

              `

            )

            .join('')
          }


        </div>


      </section>



      <section
        class="
          section-pad
          team-section
        "
      >


        <div class="section-heading">


          <p class="eyebrow">
            Inside Ecom Bazzar
          </p>


          <h2>
            A small, connected team with specialist depth.
          </h2>


        </div>



        <div class="team-grid">


          ${
            C.team

            .map(

              p => `

                <article class="team-card">

                  <img
                    src="${esc(img(p.imageKey))}"
                    alt="${esc(p.name)}"
                  >

                  <h3>
                    ${esc(p.name)}
                  </h3>

                  <p>
                    ${esc(p.role)}
                  </p>

                </article>

              `

            )

            .join('')
          }


        </div>


      </section>


    `;

  }



  /* =========================================================
     SERVICES PAGE
  ========================================================= */

  else if(page === 'services'){


    html =

      pageHero(

        'The growth stack',

        'Everything your commerce engine needs to move.',

        'Choose one specialist capability or connect multiple disciplines into a single growth programme.',

        'laptop'

      )

      +

      `


      <section
        class="
          service-detail-list
          section-pad
        "
      >


        ${
          C.services

          .map(

            s => `


              <article class="service-detail">


                <div class="service-detail-image">


                  <img
                    src="${esc(img(s.imageKey))}"
                    alt="${esc(s.title)}"
                  >


                </div>



                <div class="service-detail-copy">


                  <span class="service-number">
                    ${esc(s.number)}
                  </span>


                  <h2>
                    ${esc(s.title)}
                  </h2>


                  <p class="big-copy">
                    ${esc(s.description)}
                  </p>


                  ${chips(s.deliverables)}


                  <a
                    class="text-link"
                    href="contact.html"
                  >
                    Discuss this service →
                  </a>


                </div>


              </article>


            `

          )

          .join('')
        }


      </section>


    `;

  }



  /* =========================================================
     PREMIUM PORTFOLIO PAGE
  ========================================================= */

  else if(page === 'portfolio'){


    const P = C.portfolio || {

      eyebrow:
        'Selected Portfolio',

      title:
        'Work built for commerce.',

      copy:
        'A selection of ecommerce, performance, creative and marketplace projects created by Ecom Bazzar.',

      items:[]

    };



    const items =

      Array.isArray(P.items)
        ? P.items
        : [];



    const featured =

      items[0]

      ||

      {

        category:
          'Ecommerce',

        client:
          'Sample Brand',

        title:
          'Premium ecommerce experience',

        description:
          'A complete ecommerce transformation covering store design, conversion, creative and growth.',

        imageKey:
          I.portfolio1
            ? 'portfolio1'
            : 'hero',

        link:'#'

      };



    const remaining =
      items.slice(1);



    html =

      pageHero(

        P.eyebrow ||
        'Selected Portfolio',

        P.title ||
        'Work built for commerce.',

        P.copy ||
        'A selection of ecommerce, performance, creative and marketplace projects created by Ecom Bazzar.',

        I.portfolio6

          ? 'portfolio6'

          : (
              I.hero

                ? 'hero'

                : featured.imageKey
            )

      )

      +

      `


      <!-- ===============================================
           FEATURED PROJECT
      ================================================ -->


      <section
        class="
          portfolio-feature
          section-pad
        "
      >


        <div class="portfolio-feature-image">


          <img
            src="${esc(img(featured.imageKey))}"
            alt="${esc(featured.title)}"
          >


        </div>



        <div
          class="
            portfolio-feature-copy
            pastel-blue-panel
          "
        >


          <p class="eyebrow">
            Featured project
          </p>



          <div class="portfolio-feature-meta">


            <span>
              ${esc(featured.category)}
            </span>


            <span>
              ${esc(featured.client)}
            </span>


          </div>



          <h2>
            ${esc(featured.title)}
          </h2>



          <p>
            ${esc(featured.description)}
          </p>



          ${
            featured.link &&
            featured.link !== '#'

              ?

              `

                <a
                  class="text-link"
                  href="${esc(featured.link)}"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View project ↗
                </a>

              `

              :

              ''
          }


        </div>


      </section>



      <!-- ===============================================
           SELECTED WORK
      ================================================ -->


      <section class="section-pad">


        <div class="section-heading">


          <p class="eyebrow">
            Selected work
          </p>


          <h2>
            A closer look at what we build.
          </h2>


          <p class="section-copy">

            Ecommerce, marketing, creative and marketplace work —
            connected around business growth.

          </p>


        </div>



        <div class="portfolio-editorial-grid">


          ${
            remaining.length

              ?

              remaining

              .map(

                (x,i) => `


                  <article
                    class="
                      portfolio-editorial-card
                      ${
                        i % 3 === 0
                          ? 'portfolio-editorial-large'
                          : ''
                      }
                    "
                  >


                    <a

                      class="portfolio-editorial-image"

                      href="${esc(x.link || '#')}"

                      ${
                        x.link &&
                        x.link !== '#'

                          ? 'target="_blank" rel="noopener noreferrer"'

                          : ''
                      }

                    >


                      <img
                        src="${esc(img(x.imageKey))}"
                        alt="${esc(x.title)}"
                      >


                      <span class="portfolio-arrow">
                        ↗
                      </span>


                    </a>



                    <div class="portfolio-editorial-copy">


                      <div class="portfolio-editorial-meta">


                        <span>
                          ${esc(x.category)}
                        </span>


                        <span>
                          ${esc(x.client)}
                        </span>


                      </div>



                      <h3>
                        ${esc(x.title)}
                      </h3>


                      <p>
                        ${esc(x.description)}
                      </p>


                    </div>


                  </article>


                `

              )

              .join('')


              :


              `


                <article
                  class="
                    portfolio-editorial-card
                    portfolio-editorial-large
                  "
                >


                  <div class="portfolio-editorial-image">


                    <img

                      src="${
                        esc(
                          img(

                            I.analytics

                              ? 'analytics'

                              : (
                                  I.hero

                                    ? 'hero'

                                    : featured.imageKey
                                )

                          )
                        )
                      }"

                      alt="Ecom Bazzar portfolio"

                    >


                  </div>



                  <div class="portfolio-editorial-copy">


                    <div class="portfolio-editorial-meta">


                      <span>
                        Ecommerce
                      </span>


                      <span>
                        Ecom Bazzar
                      </span>


                    </div>



                    <h3>
                      Your next project belongs here.
                    </h3>


                    <p>

                      Add portfolio items inside
                      assets/js/content.js and they
                      will appear automatically in
                      this editorial layout.

                    </p>


                  </div>


                </article>


              `
          }


        </div>


      </section>



      <!-- ===============================================
           CAPABILITIES
      ================================================ -->


      <section
        class="
          portfolio-capability
          section-pad-soft
        "
      >


        <div>


          <p class="eyebrow">
            What the work includes
          </p>


          <h2>
            Different disciplines.
            One commercial outcome.
          </h2>


        </div>



        <div class="portfolio-capability-list">


          <span>
            Shopify Development
          </span>


          <span>
            Ecommerce Management
          </span>


          <span>
            Meta Ads
          </span>


          <span>
            Google Ads
          </span>


          <span>
            Creative Production
          </span>


          <span>
            Marketplace Management
          </span>


          <span>
            SEO
          </span>


          <span>
            Conversion Optimisation
          </span>


        </div>


      </section>



      <!-- ===============================================
           CTA
      ================================================ -->


      <section class="cta-panel">


        <div>


          <p class="eyebrow">
            Your brand could be next
          </p>


          <h2>
            Let’s build something worth showing here.
          </h2>


        </div>



        <a
          class="button button-dark"
          href="contact.html"
        >
          Start a project ↗
        </a>


      </section>


    `;

  }



  /* =========================================================
     CASE STUDIES PAGE
  ========================================================= */

  else if(page === 'case-studies'){


    html =

      pageHero(

        'Selected work',

        'The work should explain itself in the numbers.',

        'This page is ready for your real client stories.',

        'analytics'

      )

      +

      `


      <section
        class="
          case-study-list
          section-pad
        "
      >


        ${
          C.caseStudies

          .map(

            x => `


              <article class="case-study-row">


                <div class="case-study-image">


                  <img
                    src="${esc(img(x.imageKey))}"
                    alt="${esc(x.title)}"
                  >


                </div>



                <div class="case-study-copy">


                  <div class="case-topline">


                    <span>
                      ${esc(x.tag)}
                    </span>


                    <span>
                      ${esc(x.client)}
                    </span>


                  </div>



                  <h2>
                    ${esc(x.title)}
                  </h2>



                  <p>
                    ${esc(x.summary)}
                  </p>



                  <div class="case-big-metric">


                    <strong>
                      ${esc(x.metric)}
                    </strong>


                    <span>
                      ${esc(x.metricLabel)}
                    </span>


                  </div>


                </div>


              </article>


            `

          )

          .join('')
        }


      </section>


    `;

  }



  /* =========================================================
     PROCESS PAGE
  ========================================================= */

  else if(page === 'process'){


    html =

      pageHero(

        'How we work',

        'A clear rhythm from ambiguity to scale.',

        'The process is designed to create momentum without losing the commercial context behind the work.',

        'strategy'

      )

      +

      `


      <section
        class="
          process-list
          section-pad
        "
      >


        ${
          C.process

          .map(

            ([n,t,c]) => `


              <article class="process-row">


                <span>
                  ${esc(n)}
                </span>


                <h2>
                  ${esc(t)}
                </h2>


                <p>
                  ${esc(c)}
                </p>


              </article>


            `

          )

          .join('')
        }


      </section>


    `;

  }



  /* =========================================================
     CONTACT PAGE
  ========================================================= */

  else if(page === 'contact'){


    const X = C.contact;


    html =

      pageHero(

        X.eyebrow,

        X.title,

        X.copy,

        'workspace'

      )

      +

      `


      <section
        class="
          contact-grid
          section-pad
        "
      >


        <div class="contact-sidebar">


          <p class="eyebrow">
            Direct contact
          </p>



          <a
            href="mailto:${esc(C.brand.email)}"
          >
            ${esc(C.brand.email)}
          </a>



          <a
            href="tel:${
              esc(C.brand.phone)
              .replace(/\s/g,'')
            }"
          >
            ${esc(C.brand.phone)}
          </a>



          <p>
            ${esc(C.brand.location)}
          </p>



          <div class="contact-photo">


            <img
              src="${esc(I.office || '')}"
              alt="Workspace"
            >


          </div>


        </div>



        <form

  class="contact-form"

  id="contact-form"

  action="${esc(X.formEndpoint || '#')}"

  method="POST"

  target="google-sheet-frame"

>



          <div class="field-row">


            <label>

              Name

              <input
                name="name"
                required
                placeholder="Your name"
              >

            </label>



            <label>

              Company

              <input
                name="company"
                placeholder="Brand / company"
              >

            </label>


          </div>



          <div class="field-row">


            <label>

              Email

              <input
                name="email"
                type="email"
                required
                placeholder="you@company.com"
              >

            </label>



            <label>

              Phone

              <input
                name="phone"
                placeholder="+91 ..."
              >

            </label>


          </div>



          <label>

            What do you need?


            <select name="service">


              <option>
                Ecommerce Account Management
              </option>


              <option>
                Shopify & Ecommerce Development
              </option>


              <option>
                Performance Marketing
              </option>


              <option>
                Creative & Content Studio
              </option>


              <option>
                Marketplace Management
              </option>


              <option>
                SEO & Organic Growth
              </option>


              <option>
                Multiple services
              </option>


            </select>


          </label>



          <label>

            Tell us about the challenge


            <textarea

              name="message"

              rows="7"

              required

              placeholder="What are you trying to grow, improve or fix?"

            ></textarea>


          </label>



          <button
            class="button button-dark"
            type="submit"
          >
            Send enquiry ↗
          </button>



         <p
  class="form-note"
  id="form-note"
  hidden
>
  Thank you for contacting Ecom Bazzar. We have received your enquiry and will get back to you shortly.
</p>

            

          </p>


        </form>
<iframe
  name="google-sheet-frame"
  id="google-sheet-frame"
  style="display:none;"
></iframe>

      </section>


    `;

  }



  /* =========================================================
     404 PAGE
  ========================================================= */

  else {


    html = `


      <section class="not-found">


        <span>
          404
        </span>


        <h1>
          Page not found.
        </h1>


        <a
          class="button button-dark"
          href="index.html"
        >
          Back home →
        </a>


      </section>


    `;

  }



  /* =========================================================
     RENDER PAGE
  ========================================================= */

  root.innerHTML = html;



  /* =========================================================
     MOBILE MENU
  ========================================================= */

  const menu =
    document.querySelector(
      '.menu-button'
    );


  const mainNav =
    document.querySelector(
      '.main-nav'
    );


  if(
    menu &&
    mainNav
  ){

    menu.addEventListener(

      'click',

      () => {

        mainNav.classList.toggle(
          'open'
        );

      }

    );

  }



 /* =========================================================
   GOOGLE SHEET CONTACT FORM
========================================================= */

const form =
  document.getElementById(
    'contact-form'
  );


if(form){

  const submitButton =
    form.querySelector(
      'button[type="submit"]'
    );

  const note =
    document.getElementById(
      'form-note'
    );


  form.addEventListener(
    'submit',
    function(e){

      if(
        !C.contact.formEndpoint ||
        C.contact.formEndpoint === '#'
      ){

        e.preventDefault();

        console.error(
          'Google Apps Script URL is missing in content.js'
        );

        alert(
          'Contact form configuration is missing.'
        );

        return;

      }


      if(submitButton){

        submitButton.disabled = true;

        submitButton.textContent =
          'Sending...';

      }


      setTimeout(
        function(){

          if(note){

            note.hidden = false;

          }


          form.reset();


          if(submitButton){

            submitButton.disabled = false;

            submitButton.textContent =
              'Send enquiry ↗';

          }

        },

        1500
      );

    }
  );

}


})();