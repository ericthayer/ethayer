+++
type = "page"
page = "styleguide/"
title = "Styleguide"
description = "The front-end design elements that make up this site"
+++

<!-- header-->
<header class="sg-header" role="banner" data-scroll-header>
  <button class="toggle-button" id="menu-toggle" data-text-original="☰" data-text-swap="✕" role="button" aria-label="open-main-menu" aria-expanded="false">☰</button>
  <div class="option-select">
    <p class="title"><a class="home-link" href="/">DMNS</a> - <a href="//github.com/dmnscreativetech/DMNS-Website-2018-2019/">v0.26.1</a></p>
    <div class="dropdown">
      <button class="screen-size-toggle" id="resize-toggle" aria-label="resize-content-window" aria-expanded="false"><svg class="icon icon-resize"><use xlink:href="#icon-resize"></use></svg></button>
      <ul class="toggle-list" hidden>
        <li><button id="toggle-sm" aria-label="view-content-in-small-screen-mode"><svg class="icon icon-mobile"><use xlink:href="#icon-mobile"></use></svg><span aria-hidden="true">SM</span></button></li>
        <li class="md"><button id="toggle-md" aria-label="view-content-in-medium-screen-mode"><svg class="icon icon-tablet"><use xlink:href="#icon-tablet"></use></svg><span aria-hidden="true">MD</span></button></li>
        <li class="lg"><button id="toggle-lg" aria-label="view-content-in-large-screen-mode"><svg class="icon icon-display"><use xlink:href="#icon-display"></use></svg><span aria-hidden="true">LG</span></button></li>
        <li><button class="no-caps jc-center pr-1 is-active" id="toggle-full" aria-label="view-content-in-fullscreen-mode"><svg class="icon icon-resize-full-screen"><use xlink:href="#icon-resize-full-screen"></use></svg><span aria-hidden="true">Full</span></button></li>
      </ul>
    </div>
  </div>
</header>

<!-- nav-->
<nav class="sg-sidebar" id="sg-sidebar" aria-label="sidebar" hidden>
  <ul class="sg-sidebar-nav nav flex-column" id="pattern-library-sidenav" role="tablist" aria-orientation="vertical">
    <li class="nav-item dropdown">
      <a class="nav-link active show" id="elements-tab" data-toggle="pill" href="#elements-tab-content" role="tab" aria-controls="elements-tab-content" aria-selected="false">Elements</a>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#elements-overview" data-scroll>Overview</a>
        <a class="dropdown-item" href="#colors" data-scroll>Colors</a>
        <a class="dropdown-item" href="#typography" data-scroll>Typography</a>
        <a class="dropdown-item" href="#buttons" data-scroll>Buttons</a>
        <a class="dropdown-item" href="#actions" data-scroll>Actions</a>
      </div>
    </li>
    <li class="nav-item">
      <a class="nav-link" id="components-tab" data-toggle="pill" href="#components-tab-content" role="tab" aria-controls="components-tab-content" aria-selected="false">Components</a>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#components-overview" data-scroll>Overview</a>
        <a class="dropdown-item" href="#components-actions" data-scroll>Actions</a>
        <a class="dropdown-item" href="#banners" data-scroll>Banners</a>
        <a class="dropdown-item" href="#bars" data-scroll>Bars</a>
        <a class="dropdown-item" href="#cards" data-scroll>Cards</a>
        <a class="dropdown-item" href="#carousels" data-scroll>Carousels</a>
        <a class="dropdown-item" href="#features" data-scroll>Features</a>
        <a class="dropdown-item" href="#calendar-filter" data-scroll>Filter</a>
        <a class="dropdown-item" href="#components-media" data-scroll>Media</a>
        <a class="dropdown-item" href="#menus" data-scroll>Menus</a>
        <a class="dropdown-item" href="#comparison-table" data-scroll>Tables</a>
        <a class="dropdown-item" href="#tabs" data-scroll>Tabs</a>
        <a class="dropdown-item" href="#text" data-scroll>Text</a>
      </div>
    </li>
    <!-- <li class="nav-item">
      <a class="nav-link" id="modules-tab" data-toggle="pill" href="#modules-tab-content" role="tab" aria-controls="modules-tab-content" aria-selected="false">Modules</a>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#modules-overview" data-scroll>Overview</a>
        <a class="dropdown-item" href="#modules-actions" data-scroll>Calendar Filter</a>
        <a class="dropdown-item" href="#main-menu" data-scroll>Main Menu</a>
        <a class="dropdown-item" href="#site-header" data-scroll>Site Header</a>
        <a class="dropdown-item" href="#site-footer" data-scroll>Site Footer</a>
      </div>
    </li> -->
    <!-- <li class="nav-item"><a class="nav-link" id="templates-tab" data-toggle="pill" href="#templates-tab-content" role="tab" aria-controls="templates-tab-content" aria-selected="false">Templates</a></li>
    <li class="nav-item"><a class="nav-link" id="pages-tab" data-toggle="pill" href="#pages-tab-content" role="tab" aria-controls="pages-tab-content" aria-selected="false">Pages</a></li> -->
    <li class="nav-item">
      <a class="nav-link view-all-tabs" id="welcome-tab" data-toggle="pill" href="#0" role="tab" aria-controls="welcome-tab-content" aria-selected="true" data-text-original="View All" data-text-swap="Hide All">View All</a>
    </li>
    <li class="nav-item sg-brand">
      {{ partial "1_elements/site-title.html" . }}
    </li>
  </ul>
</nav>

<main class="sg-main" id="main" role="main">
  <div class="sg-content">
    <!-- Patterns -->
    <div class="sg-content-wrap tab-content">
      <!-- Elements -->
      <div class="tab-pane fade active show" id="elements-tab-content" role="tabpanel" aria-labelledby="elements-tab">
      
        <!-- Introduction -->
        <section class="sg-module sg-module-intro" id="elements-overview">
          <h2 class="sg-module-title">Elements</h2>
          <p class="sg-module-description mb-0">The <strong>Elements</strong> of our interfaces serve as the foundational building blocks that comprise all our user interfaces. These elements include basic HTML elements like form labels, inputs, buttons, and others that can’t be broken down any further without ceasing to be functional.</p>
        </section>

        <!-- Typography -->
        <section class="sg-module" id="typography">
          <h2 class="sg-module-title">Typography</h2>
          <p class="sg-module-description"></p>

          <!-- Fonts Stack -->
          <div class="sg-sample sg-sub-module flex flex-d-col">
            <h3 class="title-sm" id="headings">Font Stack</h3>
            <h2 class="polaris-book mb-3">Galaxie Polaris Book <span class="flex text-tiny">1234567890!@#$%^&*()</span></h2>
            <h2 class="polaris-bold mb-3">Galaxie Polaris Bold <span class="flex text-tiny">1234567890!@#$%^&*()</span></h2>
            <h2 class="futura-bold mb-3">Futura Bold <span class="flex text-tiny">1234567890!@#$%^&*()</span></h2>
          </div>

          <!-- Headings -->
          <div class="sg-sample sg-sub-module flex flex-d-col">
            <h3 class="title-sm" id="headings">Headings</h3>
            <div>
              <h1>heading h1</h1>
              <h2>heading h2</h2>
              <h3>heading h3</h3>
              <h4>heading h4</h4>
              <h5>heading h5</h5>
              <h6>heading h6</h6>
              <br/>
              <p class="h1">.h1</p>
              <p class="h2">.h2</p>
              <p class="h3">.h3</p>
              <p class="h4">.h4</p>
              <p class="h5">.h5</p>
              <p class="h6">.h6</p>
            </div>
          </div>

          <!-- Titles -->
          <div class="sg-sample sg-sub-module flex flex-d-col">
            <h3 class="title-sm" id="titles">Titles</h3>

            <!-- Title Styles -->
            <div class="flex flex-d-col">
              <p class="title-lg">Title Large</p>
              <p class="title-highlight">Title Highlight</p>
              <p class="title-md">Title Medium</p>
              <p class="title-sm">Title Small</p>
              <p class="title-tiny">Title Tiny</p>
              <br />
              <p class="title-lg title-bold">Title Large</p>
              <p class="title-md title-bold">Title Medium</p>
              <p class="title-sm title-bold">Title Small</p>
              <p class="title-tiny title-bold">Title Tiny</p>
              <br />
              <p class="title-base title-caps">Title Caps</p>
              <p class="title-base title-underline">Title Underline</p>
              <p class="title-base title-bold">Title Bold</p>
              <span class="main-menu bg-trans p-0" style="min-height: initial;">
                <span class="title">Menu Title</span>
              </span>
              <br />
            </div>
          </div>

          <!-- Labels -->
          <div class="sg-sample sg-sub-module">
            <h3 class="title-sm" id="labels">Labels</h3>

            <div class="flex flex-d-col">
              <p class="label-sm">Label Small</p>
              <p class="label-bold">Label Bold</p>
            </div>
          </div>


          <!-- Blockquote -->
          <div class="sg-sample sg-sub-module">
            <h3 class="title-sm" id="blockquote">Blockquote</h3>
            <blockquote class="blockquote">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
            </blockquote>
          </div>

          <!-- Address -->
          <div class="sg-sample sg-sub-module">
            <h3 class="title-sm" id="address">Address</h3>
            <address>
              <strong>Denver Museum of Nature & Science</strong>
              <p>2001 Colorado Blvd.</p>
              <p>Denver, CO 80205</p>
              <p><a href="tel:3033706000">303.370.6000</a><p>
            </address>
          </div>

          <!-- Copy -->
          <div class="sg-sample sg-sub-module">
            <h3 class="title-sm" id="copy">Copy</h3>

            <article class="content-post">
            <h2 id="what-to-expect" class="title-sm">What to Expect</h2>

              <p class="title-highlight">The Dead Sea Scrolls are one of the greatest archaeological discoveries of all time.</p>

              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quasi culpa ipsam cupiditate non, mollitia dolorum, eligendi earum nam eum voluptatibus commodi repudiandae, placeat aliquid rem natus cum nemo atque quisquam in aliquam obcaecati saepe minima dolor. Ea excepturi velit cumque nisi nulla deleniti magni esse, molestias laborum ipsum voluptatum non eveniet sed</p>

              <p class="title-underline">Here is a subtitle</p>

              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quasi culpa ipsam cupiditate non, mollitia dolorum, eligendi earum nam eum voluptatibus commodi repudiandae, placeat aliquid rem natus cum nemo atque quisquam in aliquam obcaecati saepe minima dolor. Ea excepturi velit cumque nisi nulla deleniti magni esse, molestias laborum ipsum voluptatum non eveniet sed</p>

              <ul>
                <li>	Peek into the darkness of a New Zealand cave and look up to see twinkling over your head—not from stars but from simulated glowworms.</li>
                <li>	Stroll across an interactive Puerto Rican lagoon as you light up a trail of flashes from tiny “pyrotechnic” plankton.</li>
                <li>	Explore a North American meadow filled with flashing fireflies and try your hand at re-creating their dazzling mating signals.</li>
                <li>	Marvel at gigantic models of bioluminescent mushrooms, fireflies and jellyfish.</li>
                </ul>
              <ol>
                <li>	Peek into the darkness of a New Zealand cave and look up to see twinkling over your head—not from stars but from simulated glowworms.</li>
        <li>	Stroll across an interactive Puerto Rican lagoon as you light up a trail of flashes from tiny “pyrotechnic” plankton.</li>
        <li>	Explore a North American meadow filled with flashing fireflies and try your hand at re-creating their dazzling mating signals.</li>
        <li>	Marvel at gigantic models of bioluminescent mushrooms, fireflies and jellyfish.</li>
              </ol>

              <p>Doloribus magni inventore, necessitatibus aut assumenda illum iusto consequuntur officia ratione quod, harum nostrum obcaecati! Sunt minima deserunt, dolor <a href="#0">beatae ipsam aut et consectetur praesentium</a> musto, porro eligendi est repellendus tempora nihil veritatis excepturi incidunt placeat saepe optio autem! Consequatur ipsam quos voluptates delectus, saepe magni. Nesciunt ullam ipsa voluptatum, a porro, asperiores aspernatur atque.</p>

              <p>You can use the mark tag to <mark>highlight</mark> text.</p>
              <p><del>This line of text is meant to be treated as deleted text.</del></p>
              <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
              <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
              <p><u>This line of text will render as underlined</u></p>
              <p><small>This line of text is meant to be treated as fine print.</small></p>
              <p><strong>This line rendered as bold text.</strong></p>
              <p><em>This line rendered as italicized text.</em></p>
            </article>
          </div>

        </section>

        <!-- Colors -->
        <section class="sg-module" id="colors">
          <h2 class="sg-module-title">Colors</h2>
          <p class="sg-module-description"></p>


          <div class="sg-color-swatches">

            <div class="bg-blue">#00a3f2</div>
            <div class="bg-blue-light">#80d1f9</div>
            <div class="bg-blue-dark">#0070d1</div>

            <div class="bg-green">#a4c824</div>
            <div class="bg-green-bright">#69d200</div>
            <div class="bg-green-dark">#719e0d</div>

            <div class="bg-orange">#f4911e</div>
            <div class="bg-orange-light">#f8b86d</div>
            <div class="bg-orange-dark">#b76d17</div>

            <div class="bg-light">#f1f1f1</div>
            <div class="bg-dark">#343a40</div>
            <div class="bg-grey">#dfe2e3</div>

          </div>

        </section>

        <!-- Buttons -->
        <section class="sg-module" id="buttons">
          <h2 class="sg-module-title">Buttons</h2>
          <p class="sg-module-description"></p>

          <!-- Bootstrap -->
          <div class="sg-sample sg-sub-module grid">
            <div><button type="button" class="btn btn-primary">Primary</button></div>
            <div><button type="button" class="btn btn-secondary">Secondary</button></div>
            <div><button type="button" class="btn btn-success">Success</button></div>
            <div><button type="button" class="btn btn-danger">Danger</button></div>
            <div><button type="button" class="btn btn-warning">Warning</button></div>
            <div><button type="button" class="btn btn-info">Info</button></div>
            <div><button type="button" class="btn btn-light">Light</button></div>
            <div><button type="button" class="btn btn-dark">Dark</button></div>
            <div><button type="button" class="btn btn-text">Text</button></div>

            <!-- Text -->
            <div>
              <button type="button" class="btn btn-link">
                <span class="btn-label">Link</span>
              </button>
            </div>

            <!-- w/ inline SVG symbol -->
            <div>
              <button type="button" class="btn btn-link btn-flex">
                <span class="btn-label">Media Right</span>
                <div class="media-item">
                  <svg class="icon icon-arrow-custom">
                    <use xlink:href="#icon-arrow-custom" />
                  </svg>
                </div>
              </button>
            </div>

            <!--  w/ inline media left -->
            <div>
              <button type="button" class="btn btn-link btn-flex">
                <span class="btn-label">Media Left</span>
                <div class="media-item media-left">
                  <img class="icon icon-arrow-custom" src="{{ .Site.BaseURL }}images/icons/svg/icon-arrow-blue.svg" data-fallback="{{ .Site.BaseURL }}images/icons/png/icon-arrow-blue.png" alt="" role="presentation">
                </div>
              </button>
            </div>

          </div>

          <!-- Functional -->
          <div class="sg-sample sg-sub-module">

            <div class="grid">

              <div>
              </div>

              <div>
              </div>

              <div>
              </div>

              <div>
              </div>

            </div>

          </div>
        </section>

        <!-- Media -->
        <section class="sg-module" id="elements-media" hidden>
          <h2 class="sg-module-title">Media</h2>
          <p class="sg-module-description"></p>

          <!-- Icons -->
          <div class="sg-sample sg-sub-module">
            <h3 class="title-sm" id="icons">Icons</h3>
            <div class="grid p-2" style="background: #DDD;">
              <img src="{{ .Site.BaseURL }}images/icons/svg/icon-arrow-blue.svg" alt="">
              <img src="{{ .Site.BaseURL }}images/icons/svg/icon-arrow-green.svg" alt="">
              <img src="{{ .Site.BaseURL }}images/icons/svg/icon-arrow-white.svg" alt="">
              <img src="{{ .Site.BaseURL }}images/icons/svg/icon-brain-white.svg" alt="">
              <img src="{{ .Site.BaseURL }}images/icons/svg/icon-calendar.svg" alt="">
              <img src="{{ .Site.BaseURL }}images/icons/svg/icon-check-mark-blue.svg" alt="">
            </div>
          </div>

          <!-- Images -->
          <div class="sg-sample sg-sub-module">
            <h3 class="title-sm" id="icons">Icons</h3>
            <div class="l-media-layout bg-blue-dark p-2">
              <img src="{{ .Site.BaseURL }}images/icons/svg/icon-anchor-link.svg" alt="">
            </div>
          </div>

        </section>
      </div>

      <!-- Components -->
      <div class="tab-pane fade" id="components-tab-content" role="tabpanel" aria-labelledby="components-tab">

        <!-- Introduction -->
        <section class="sg-module sg-module-intro" id="components-overview">
          <h2 class="sg-module-title">Components</h2>
          <p class="sg-module-description mb-0">In interfaces, <strong>Components</strong> are relatively simple groups of UI elements functioning together as a unit. For example, a form label, search input, and button can join together to create a search form molecule</p>
        </section>

        <!-- Callouts -->
        <section class="sg-module" id="callouts">
          <h2 class="sg-module-title">Callouts</h2>
          <p class="sg-module-description"></p>

          <!-- Callouts: Default & Buy -->
          <div class="sg-sample sg-sub-module grid">

            <!-- CTA default -->
            <div>
            </div>

            <!-- CTA Buy -->
            <div>
            </div>

          </div>

        <!-- Carousel -->
        <section class="sg-module" id="carousels">
          <h2 class="sg-module-title">Carousels</h2>
          <p class="sg-module-description"></p>
          <div class="sg-sample">
          </div>
        </section>

        <!-- Features -->
        <section class="sg-module" id="features">
          <h2 class="sg-module-title">Features</h2>
          <p class="sg-module-description"></p>

          <!-- Media Grid -->
          <div class="sg-sample sg-sub-module">
            <h3 class="title-sm" id="sg-media-grid">Media Grid</h3>
          </div>

          <!-- Media Grid -->
          <div class="sg-sample sg-sub-module">
            <h3 class="title-sm" id="media-grid">Media Grid (features)</h3>
          </div>

          <!-- Media Video -->
          <div class="sg-sample sg-sub-module">
            <h3 class="title-sm" id="components-media">Media Video</h3>
          </div>
        </section>

        <!-- Filter -->
        <section class="sg-module" id="calendar-filter">
          <h2 class="sg-module-title">Calendar Filter</h2>
          <p class="sg-module-description"></p>
          <div class="sg-sample">
          </div>
        </section>

        <!-- Tables -->
        <section class="sg-module" id="comparison-table">
          <h2 class="sg-module-title">Comparison Table</h2>
          <p class="sg-module-description"></p>
          <div class="sg-sample sg-sub-module">
          </div>
        </section>

        <!-- Tabs -->
        <section class="sg-module" id="tabs">
          <h2 class="sg-module-title">Tabs</h2>
          <p class="sg-module-description"></p>

          <!-- Panel Tabs -->
          <div class="sg-sample sg-sub-module">
            <h3 class="title-sm" id="hero">Panel Tabs</h3>
            <p class="sg-module-description"></p>


            <div class="sg-frame">
              <iframe class="lazyload" data-src="../panel-tabs/index.html" width="100%" frameborder="0"></iframe>
            </div>

          </div>

          <!-- Panel Tabs: slim -->
          <div class="sg-sample sg-sub-module">
            <h3 class="title-sm" id="hero">Panel Tabs Slim</h3>
            <p class="sg-module-description"></p>
          </div>
        </section>

        <!-- Text -->
        <section class="sg-module" id="text">
          <h2 class="sg-module-title">Text Blocks</h2>
          <p class="sg-module-description"></p>

          <!-- Social Media Post -->
          <div class="sg-sample sg-sub-module">
            <h3 class="title-sm" id="social-media-post">Social Media Post</h3>
          </div>

          <!-- Info List Group -->
          <div class="sg-sample sg-sub-module">
            <h3 class="title-sm" id="info-list-group">Info List Group</h3>
          </div>

          <!-- Copyrights -->
          <div class="sg-sample sg-sub-module">
            <h3 class="title-sm" id="copyrights">Copyrights</h3>
          </div>

        </section>

      </div>
    <!-- END / SG Content Wrap-->
    </div>
  </div>
</main>