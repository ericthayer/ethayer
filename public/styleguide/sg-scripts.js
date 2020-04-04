// **************** Styleguide **************** //

// main menu toggle button and sidebar
const mainToggle = document.querySelector('#menu-toggle');
const sideBar = document.querySelector('#sg-sidebar');

// menu toggle
(function() {

  // https://css-tricks.com/snippets/javascript/loop-queryselectorall-matches/
  const forEachSideNav = function(array, callback, scope) {
    for (var i = 0; i < array.length; i++) {
      callback.call(scope, i, array[i]);
    }
  };

  // set initial (closed menu) states
  mainToggle.setAttribute('aria-expanded', 'false')
  mainToggle.hidden = false
  sideBar.hidden = true
  //subMenu.hidden = true;

  // main menu toggle
  mainToggle.addEventListener('click', function() {
    // toggle menu visibility
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!expanded))

    // swap text
    if (mainToggle.getAttribute('data-text-swap') == mainToggle.innerHTML) {
      mainToggle.innerHTML = mainToggle.getAttribute('data-text-original')

    } else {
      mainToggle.setAttribute('data-text-original', mainToggle.innerHTML)
      mainToggle.innerHTML = mainToggle.getAttribute('data-text-swap')
    }

    sideBar.hidden = expanded

  }, false)

})();

// open sidebar past 800px
(function() {

  // media query event handler
  if (matchMedia) {
    const mqMD = window.matchMedia('(min-width: 56.25em)')
    mqMD.addListener(WidthChange)
    WidthChange(mqMD)
  }

  // media query change
  function WidthChange(mqMD) {
    if (mqMD.matches) {
      // open sidebar if window width is at least 900px
      mainToggle.setAttribute('aria-expanded', 'true')
      mainToggle.innerHTML = mainToggle.getAttribute('data-text-swap')
      sideBar.hidden = false

    } else {
      // set initial states
      mainToggle.setAttribute('aria-expanded', 'false')
      mainToggle.innerHTML = mainToggle.getAttribute('data-text-original')
      sideBar.hidden = true
    }
  }

})();

// content resize
(function() {

  // screen resize button and list
  const screenToggle = document.querySelector('#resize-toggle')

  // screen resize buttons
  const resizeButton = Array.from(document.querySelectorAll('.toggle-list button'))

  const forEachResizeButton = function(array, callback, scope) {
    for (var i = 0; i < array.length; i++) {
      callback.call(scope, i, array[i]);
    }
  }

  const screenSM = document.querySelector('#toggle-sm')
  const screenMD = document.querySelector('#toggle-md')
  const screenLG = document.querySelector('#toggle-lg')
  const screenFull = document.querySelector('#toggle-full')
  const screenSizeMenu = document.querySelector('.toggle-list')
  const resizedClasses = ['resized-sm', 'resized-md', 'resized-lg']
  const screens = ['screenSM', 'screenMD', 'screenLG']

  // content wrap
  const contentWrap = document.querySelector('.sg-content-wrap');


  // set initial (closed menu) states
  screenToggle.setAttribute('aria-expanded', 'false')
  screenToggle.hidden = false
  screenSizeMenu.hidden = true


  // open screen resizer
  screenToggle.addEventListener('click', function() {
    // toggle menu visibility
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!expanded))
    this.classList.toggle('is-active')

    // show screen size list
    screenSizeMenu.hidden = expanded

  }, false)

  // open sub menus
  forEachResizeButton(resizeButton, function(i, el) {
    el.addEventListener('click', function() {
      screenToggle.setAttribute('aria-expanded', 'false')
      screenSizeMenu.hidden = true
      document.querySelector(".toggle-list button.is-active").classList.remove("is-active")
      this.classList.add('is-active')
    })

  }, false)

  // screen small
  screenSM.addEventListener('click', function() {
    // set screen size
    //contentWrap.removeAttribute('style')
    contentWrap.setAttribute('style', 'max-width: 23.438rem; min-width: 15rem;')
    contentWrap.classList.add('resized-sm')
    contentWrap.classList.remove('resized-md', 'resized-lg')

  }, false)

  // screen medium
  screenMD.addEventListener('click', function() {
    // set screen size
    contentWrap.setAttribute('style', 'max-width: 48rem;')
    contentWrap.classList.add('resized-md')
    contentWrap.classList.remove('resized-sm', 'resized-lg')
  }, false)

  // screen large
  screenLG.addEventListener('click', function() {
    // set screen size
    contentWrap.setAttribute('style', 'max-width: 71.25rem;')
    contentWrap.classList.add('resized-lg')
    contentWrap.classList.remove('resized-sm', 'resized-md')

  }, false)

  // screen full
  screenFull.addEventListener('click', function() {
    // set screen size
    contentWrap.setAttribute('style', 'max-width: 100%;')
    contentWrap.classList.remove(...resizedClasses)

  }, false)

  // if screen less than 480px
  if (matchMedia) {
    const mqSM = window.matchMedia('(max-width: 23.438em)')
    mqSM.addListener(WidthChangeSM)
    WidthChangeSM(mqSM)
  }

  // media query change
  function WidthChangeSM(mqSM) {
    if (mqSM.matches) {
      contentWrap.removeAttribute('style')
      contentWrap.classList.remove('resized-sm', 'resized-md', 'resized-lg')
      document.querySelector(".toggle-list button.is-active").classList.remove("is-active")
      screenToggle.setAttribute('aria-expanded', 'false')
      screenSizeMenu.hidden = true

    } else {

    }
  }

})();

// toggle code snippet
(function() {

  const codeToggle = Array.from(document.querySelectorAll('.toggle-code'))
  const codeSnippet = Array.from(document.querySelectorAll('.code-snippet'))

  const forEachCodePreview = function(array, callback, scope) {
    for (var i = 0; i < array.length; i++) {
      callback.call(scope, i, array[i])
    }
  }

  codeSnippet.hidden = true

  // open code snippet
  forEachCodePreview(codeToggle, function(i, el) {
    el.addEventListener('click', function() {
      var expanded = this.getAttribute('aria-expanded') === 'true'
      this.setAttribute('aria-expanded', String(!expanded))
      this.nextElementSibling.hidden = expanded
      this.nextElementSibling.classList.toggle('resized')
      this.classList.toggle('resized')
    })

  }, false)

})();

// smooth scrolling
(function() {

  var scroll = new SmoothScroll('[data-scroll], a.view-all-tabs', {
    header: '[data-scroll-header]',
    speed: 1500,
    easing: 'easeInOutCubic',

    offset: function(anchor, toggle) {

      // hiding the sidebar after click at the layout breakpoint
      if (toggle) {

        const mqSidebar = window.matchMedia('(max-width: 38.688em)');
        mqSidebar.addListener(WidthChange)
        WidthChange(mqSidebar)

        // media query change
        function WidthChange(mqSidebar) {
          if (mqSidebar.matches) {

            mainToggle.setAttribute('aria-expanded', 'false')
            mainToggle.innerHTML = mainToggle.getAttribute('data-text-original')
            sideBar.hidden = true

          } else {

            mainToggle.setAttribute('aria-expanded', 'true')
            mainToggle.innerHTML = mainToggle.getAttribute('data-text-swap')
            sideBar.hidden = false
          }
        }

        return 0

      } else {

        return 0
      }
    },

  });

})();

// show all module tabs
(function () {

  const viewAll = document.querySelector('.view-all-tabs')

  $('.view-all-tabs').on('click', function (e) {
    e.preventDefault()
    //$('.nav-link:not(.view-all-tabs)').toggleClass('active show')
    $('.sg-content .tab-pane').toggleClass('show-all')

    // swap text
    if (viewAll.getAttribute('data-text-swap') == viewAll.innerHTML) {
      viewAll.innerHTML = viewAll.getAttribute('data-text-original')

    } else {
      viewAll.setAttribute('data-text-original', viewAll.innerHTML)
      viewAll.innerHTML = viewAll.getAttribute('data-text-swap')
    }
  })

  $('.sg-sidebar-nav .nav-link:not(.view-all-tabs)').on('click', function (e) {
    e.preventDefault()
    $('.sg-sidebar-nav .nav-link.show').removeClass('active show')
    $('.sg-content .tab-pane').removeClass('show-all')
    viewAll.innerHTML = viewAll.getAttribute('data-text-original')
  })

})();

// set active class on dropdown item

(function() {

  const dropdownItem = Array.from(document.querySelectorAll('.sg-sidebar-nav .dropdown-item, .nav-link'))

  const forEachDropdownItem = function(array, callback, scope) {
    for (var i = 0; i < array.length; i++) {
      callback.call(scope, i, array[i])
    }
  }

  // open code snippet
  forEachDropdownItem(dropdownItem, function(i, el) {
    el.addEventListener('click', function() {
      document.querySelector(".is-active").classList.remove("is-active")
      this.classList.add('is-active')
    })

  }, false)

})();
