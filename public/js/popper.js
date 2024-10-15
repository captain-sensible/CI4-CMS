





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://github.githubassets.com">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <link crossorigin="anonymous" media="all" integrity="sha512-FG+rXqMOivrAjdEQE7tO4BwM1poGmg70hJFTlNSxjX87grtrZ6UnPR8NkzwUHlQEGviu9XuRYeO8zH9YwvZhdg==" rel="stylesheet" href="https://github.githubassets.com/assets/frameworks-146fab5ea30e8afac08dd11013bb4ee0.css" />
  <link crossorigin="anonymous" media="all" integrity="sha512-iWnTv9+yroeJbeFxGrsLbQNyLU/CekmNFPy852i4fVdKwSREPyjuKg00bvqC+xOAUxCYRXL6ylFxe7HyiLnCCw==" rel="stylesheet" href="https://github.githubassets.com/assets/site-8969d3bfdfb2ae87896de1711abb0b6d.css" />
    <link crossorigin="anonymous" media="all" integrity="sha512-YyJIppvPmWRnRj6PbhRfUMmoqtdUzDz+RrFs8k/HLdMUw3GDFgW34/5tHlVRLA4gocKiiJ6SzFP/BRcL1XH67Q==" rel="stylesheet" href="https://github.githubassets.com/assets/github-632248a69bcf996467463e8f6e145f50.css" />
    
    
    
    


  <meta name="viewport" content="width=device-width">
  
  <title>popper-core/popper.js at v1.12.5 · popperjs/popper-core · GitHub</title>
    <meta name="description" content="🍿Positioning tooltips and popovers is difficult. Popper is here to help! - popperjs/popper-core">
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    <meta name="twitter:image:src" content="https://repository-images.githubusercontent.com/54994103/bca5ec80-3622-11ea-83b1-157bc40dc5c0" /><meta name="twitter:site" content="@github" /><meta name="twitter:card" content="summary_large_image" /><meta name="twitter:title" content="popperjs/popper-core" /><meta name="twitter:description" content="🍿Positioning tooltips and popovers is difficult. Popper is here to help! - popperjs/popper-core" />
    <meta property="og:image" content="https://repository-images.githubusercontent.com/54994103/bca5ec80-3622-11ea-83b1-157bc40dc5c0" /><meta property="og:site_name" content="GitHub" /><meta property="og:type" content="object" /><meta property="og:title" content="popperjs/popper-core" /><meta property="og:url" content="https://github.com/popperjs/popper-core" /><meta property="og:description" content="🍿Positioning tooltips and popovers is difficult. Popper is here to help! - popperjs/popper-core" />

  <link rel="assets" href="https://github.githubassets.com/">
  
  

  <meta name="request-id" content="4D06:2D621:44F4F5:639DB5:5EBBB641" data-pjax-transient="true"/><meta name="html-safe-nonce" content="ca778883da8589328efa445b6f986a4fa8d5363e" data-pjax-transient="true"/><meta name="visitor-payload" content="eyJyZWZlcnJlciI6Imh0dHBzOi8vZ2l0aHViLmNvbS9wb3BwZXJqcy9wb3BwZXItY29yZS90cmVlL3YxLjEyLjUvZGlzdC91bWQiLCJyZXF1ZXN0X2lkIjoiNEQwNjoyRDYyMTo0NEY0RjU6NjM5REI1OjVFQkJCNjQxIiwidmlzaXRvcl9pZCI6Ijc4NjEwMjc4ODEyMzc5NjI2MDIiLCJyZWdpb25fZWRnZSI6ImFtcyIsInJlZ2lvbl9yZW5kZXIiOiJhbXMifQ==" data-pjax-transient="true"/><meta name="visitor-hmac" content="5a6fb3efe2f64d21453037427ecde49537c5c1cbc26064ca116514398147e0cb" data-pjax-transient="true"/>



  <meta name="github-keyboard-shortcuts" content="repository,source-code" data-pjax-transient="true" />

  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
  <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
  <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">

<meta name="octolytics-host" content="collector.githubapp.com" /><meta name="octolytics-app-id" content="github" /><meta name="octolytics-event-url" content="https://collector.githubapp.com/github-external/browser_event" /><meta name="octolytics-dimension-ga_id" content="" class="js-octo-ga-id" />
<meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" />


<meta name="optimizely-sdk-key" content="cowimJNste4j7QnBNCjaw" />



<meta class="js-ga-set" name="dimension1" content="Logged Out">



  

      <meta name="hostname" content="github.com">
    <meta name="user-login" content="">

      <meta name="expected-hostname" content="github.com">


    <meta name="enabled-features" content="MARKETPLACE_PENDING_INSTALLATIONS">

  <meta http-equiv="x-pjax-version" content="fd95c7e8a8dfb226b5c1affb9d7bbb80">
  

      <link href="https://github.com/popperjs/popper-core/commits/v1.12.5.atom" rel="alternate" title="Recent Commits to popper-core:v1.12.5" type="application/atom+xml">

  <meta name="go-import" content="github.com/popperjs/popper-core git https://github.com/popperjs/popper-core.git">

  <meta name="octolytics-dimension-user_id" content="58035617" /><meta name="octolytics-dimension-user_login" content="popperjs" /><meta name="octolytics-dimension-repository_id" content="54994103" /><meta name="octolytics-dimension-repository_nwo" content="popperjs/popper-core" /><meta name="octolytics-dimension-repository_public" content="true" /><meta name="octolytics-dimension-repository_is_fork" content="false" /><meta name="octolytics-dimension-repository_network_root_id" content="54994103" /><meta name="octolytics-dimension-repository_network_root_nwo" content="popperjs/popper-core" /><meta name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" content="false" />


    <link rel="canonical" href="https://github.com/popperjs/popper-core/blob/v1.12.5/dist/umd/popper.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://github.githubassets.com/pinned-octocat.svg" color="#000000">
  <link rel="alternate icon" class="js-site-favicon" type="image/png" href="https://github.githubassets.com/favicons/favicon.png">
  <link rel="icon" class="js-site-favicon" type="image/svg+xml" href="https://github.githubassets.com/favicons/favicon.svg">

<meta name="theme-color" content="#1e2327">


  <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials">

  </head>

  <body class="logged-out env-production page-responsive page-blob">
    

    <div class="position-relative js-header-wrapper ">
      <a href="#start-of-content" class="px-2 py-4 bg-blue text-white show-on-focus js-skip-to-content">Skip to content</a>
      <span class="Progress progress-pjax-loader position-fixed width-full js-pjax-loader-bar">
        <span class="progress-pjax-loader-bar top-0 left-0" style="width: 0%;"></span>
      </span>

      
      



          <header class="Header-old header-logged-out js-details-container Details position-relative f4 py-2" role="banner">
  <div class="container-lg d-lg-flex flex-items-center p-responsive">
    <div class="d-flex flex-justify-between flex-items-center">
        <a class="mr-4" href="https://github.com/" aria-label="Homepage" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
          <svg height="32" class="octicon octicon-mark-github text-white" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
        </a>

          <div class="d-lg-none css-truncate css-truncate-target width-fit p-2">
            
                <svg class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
    <a class="Header-link" href="/popperjs">popperjs</a>
    /
    <a class="Header-link" href="/popperjs/popper-core">popper-core</a>


          </div>

        <div class="d-flex flex-items-center">
            <a href="/join?ref_cta=Sign+up&amp;ref_loc=header+logged+out&amp;ref_page=%2F%3Cuser-name%3E%2F%3Crepo-name%3E%2Fblob%2Fshow&amp;source=header-repo"
              class="d-inline-block d-lg-none f5 text-white no-underline border border-gray-dark rounded-2 px-2 py-1 mr-3 mr-sm-5"
              data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;site header&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;SIGN_UP&quot;,&quot;originating_url&quot;:&quot;https://github.com/popperjs/popper-core/blob/v1.12.5/dist/umd/popper.js&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="0ad3f728d9d063b72a2b43b792e4774306835b4ab55f466769e2a9d9230d83fe"
              data-ga-click="Sign up, click to sign up for account, ref_page:/popperjs/popper-core/blob/v1.12.5/dist/umd/popper.js;ref_cta:Sign up;ref_loc:header logged out">
              Sign&nbsp;up
            </a>

          <button class="btn-link d-lg-none mt-1 js-details-target" type="button" aria-label="Toggle navigation" aria-expanded="false">
            <svg height="24" class="octicon octicon-three-bars text-white" viewBox="0 0 12 16" version="1.1" width="18" aria-hidden="true"><path fill-rule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"></path></svg>
          </button>
        </div>
    </div>

    <div class="HeaderMenu HeaderMenu--logged-out position-fixed top-0 right-0 bottom-0 height-fit position-lg-relative d-lg-flex flex-justify-between flex-items-center flex-auto">
      <div class="d-flex d-lg-none flex-justify-end border-bottom bg-gray-light p-3">
        <button class="btn-link js-details-target" type="button" aria-label="Toggle navigation" aria-expanded="false">
          <svg height="24" class="octicon octicon-x text-gray" viewBox="0 0 12 16" version="1.1" width="18" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"></path></svg>
        </button>
      </div>

        <nav class="mt-0 px-3 px-lg-0 mb-5 mb-lg-0" aria-label="Global">
          <ul class="d-lg-flex list-style-none">
              <li class="d-block d-lg-flex flex-lg-nowrap flex-lg-items-center border-bottom border-lg-bottom-0 mr-0 mr-lg-3 edge-item-fix position-relative flex-wrap flex-justify-between d-flex flex-items-center ">
                <details class="HeaderMenu-details details-overlay details-reset width-full">
                  <summary class="HeaderMenu-summary HeaderMenu-link px-0 py-3 border-0 no-wrap d-block d-lg-inline-block">
                    Why GitHub?
                    <svg x="0px" y="0px" viewBox="0 0 14 8" xml:space="preserve" fill="none" class="icon-chevon-down-mktg position-absolute position-lg-relative">
                      <path d="M1,1l6.2,6L13,1"></path>
                    </svg>
                  </summary>
                  <div class="dropdown-menu flex-auto rounded-1 bg-white px-0 mt-0 pb-4 p-lg-4 position-relative position-lg-absolute left-0 left-lg-n4">
                    <a href="/features" class="py-2 lh-condensed-ultra d-block link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Features">Features <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a>
                    <ul class="list-style-none f5 pb-3">
                      <li class="edge-item-fix"><a href="/features/code-review/" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Code review">Code review</a></li>
                      <li class="edge-item-fix"><a href="/features/project-management/" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Project management">Project management</a></li>
                      <li class="edge-item-fix"><a href="/features/integrations" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Integrations">Integrations</a></li>
                      <li class="edge-item-fix"><a href="/features/actions" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Actions">Actions</a></li>
                      <li class="edge-item-fix"><a href="/features/packages" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to GitHub Packages">Packages</a></li>
                      <li class="edge-item-fix"><a href="/features/security" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Security">Security</a></li>
                      <li class="edge-item-fix"><a href="/features#team-management" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Team management">Team management</a></li>
                      <li class="edge-item-fix"><a href="/features#hosting" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Code hosting">Hosting</a></li>
                    </ul>

                    <ul class="list-style-none mb-0 border-lg-top pt-lg-3">
                      <li class="edge-item-fix"><a href="/customer-stories" class="py-2 lh-condensed-ultra d-block no-underline link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Customer stories">Customer stories <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a></li>
                      <li class="edge-item-fix"><a href="/security" class="py-2 lh-condensed-ultra d-block no-underline link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Security">Security <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a></li>
                    </ul>
                  </div>
                </details>
              </li>
                <li class="border-bottom border-lg-bottom-0 mr-0 mr-lg-3">
                  <a href="/team" class="HeaderMenu-link no-underline py-3 d-block d-lg-inline-block" data-ga-click="(Logged out) Header, go to Team">Team</a>
                </li>
              <li class="border-bottom border-lg-bottom-0 mr-0 mr-lg-3">
                <a href="/enterprise" class="HeaderMenu-link no-underline py-3 d-block d-lg-inline-block" data-ga-click="(Logged out) Header, go to Enterprise">Enterprise</a>
              </li>

              <li class="d-block d-lg-flex flex-lg-nowrap flex-lg-items-center border-bottom border-lg-bottom-0 mr-0 mr-lg-3 edge-item-fix position-relative flex-wrap flex-justify-between d-flex flex-items-center ">
                <details class="HeaderMenu-details details-overlay details-reset width-full">
                  <summary class="HeaderMenu-summary HeaderMenu-link px-0 py-3 border-0 no-wrap d-block d-lg-inline-block">
                    Explore
                    <svg x="0px" y="0px" viewBox="0 0 14 8" xml:space="preserve" fill="none" class="icon-chevon-down-mktg position-absolute position-lg-relative">
                      <path d="M1,1l6.2,6L13,1"></path>
                    </svg>
                  </summary>

                  <div class="dropdown-menu flex-auto rounded-1 bg-white px-0 pt-2 pb-0 mt-0 pb-4 p-lg-4 position-relative position-lg-absolute left-0 left-lg-n4">
                    <ul class="list-style-none mb-3">
                      <li class="edge-item-fix"><a href="/explore" class="py-2 lh-condensed-ultra d-block link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Explore">Explore GitHub <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a></li>
                    </ul>

                    <h4 class="text-gray-light text-normal text-mono f5 mb-2 border-lg-top pt-lg-3">Learn &amp; contribute</h4>
                    <ul class="list-style-none mb-3">
                      <li class="edge-item-fix"><a href="/topics" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Topics">Topics</a></li>
                        <li class="edge-item-fix"><a href="/collections" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Collections">Collections</a></li>
                      <li class="edge-item-fix"><a href="/trending" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Trending">Trending</a></li>
                      <li class="edge-item-fix"><a href="https://lab.github.com/" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Learning lab">Learning Lab</a></li>
                      <li class="edge-item-fix"><a href="https://opensource.guide" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Open source guides">Open source guides</a></li>
                    </ul>

                    <h4 class="text-gray-light text-normal text-mono f5 mb-2 border-lg-top pt-lg-3">Connect with others</h4>
                    <ul class="list-style-none mb-0">
                      <li class="edge-item-fix"><a href="https://github.com/events" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Events">Events</a></li>
                      <li class="edge-item-fix"><a href="https://github.community" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Community forum">Community forum</a></li>
                      <li class="edge-item-fix"><a href="https://education.github.com" class="py-2 pb-0 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to GitHub Education">GitHub Education</a></li>
                    </ul>
                  </div>
                </details>
              </li>

              <li class="border-bottom border-lg-bottom-0 mr-0 mr-lg-3">
                <a href="/marketplace" class="HeaderMenu-link no-underline py-3 d-block d-lg-inline-block" data-ga-click="(Logged out) Header, go to Marketplace">Marketplace</a>
              </li>

              <li class="d-block d-lg-flex flex-lg-nowrap flex-lg-items-center border-bottom border-lg-bottom-0 mr-0 mr-lg-3 edge-item-fix position-relative flex-wrap flex-justify-between d-flex flex-items-center ">
                <details class="HeaderMenu-details details-overlay details-reset width-full">
                  <summary class="HeaderMenu-summary HeaderMenu-link px-0 py-3 border-0 no-wrap d-block d-lg-inline-block">
                    Pricing
                    <svg x="0px" y="0px" viewBox="0 0 14 8" xml:space="preserve" fill="none" class="icon-chevon-down-mktg position-absolute position-lg-relative">
                       <path d="M1,1l6.2,6L13,1"></path>
                    </svg>
                  </summary>

                  <div class="dropdown-menu flex-auto rounded-1 bg-white px-0 pt-2 pb-4 mt-0 p-lg-4 position-relative position-lg-absolute left-0 left-lg-n4">
                    <a href="/pricing" class="pb-2 lh-condensed-ultra d-block link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Pricing">Plans <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a>

                    <ul class="list-style-none mb-3">
                      <li class="edge-item-fix"><a href="/pricing#feature-comparison" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Compare plans">Compare plans</a></li>
                      <li class="edge-item-fix"><a href="https://enterprise.github.com/contact" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Contact Sales">Contact Sales</a></li>
                    </ul>

                    <ul class="list-style-none mb-0 border-lg-top pt-lg-3">
                      <li class="edge-item-fix"><a href="/nonprofit" class="py-2 lh-condensed-ultra d-block no-underline link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Nonprofits">Nonprofit <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a></li>
                      <li class="edge-item-fix"><a href="https://education.github.com" class="py-2 pb-0 lh-condensed-ultra d-block no-underline link-gray-dark no-underline h5 Bump-link--hover"  data-ga-click="(Logged out) Header, go to Education">Education <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a></li>
                    </ul>
                  </div>
                </details>
              </li>
          </ul>
        </nav>

      <div class="d-lg-flex flex-items-center px-3 px-lg-0 text-center text-lg-left">
          <div class="d-lg-flex mb-3 mb-lg-0">
            <div class="header-search flex-self-stretch flex-lg-self-auto mr-0 mr-lg-3 mb-3 mb-lg-0 scoped-search site-scoped-search js-site-search position-relative js-jump-to"
  role="combobox"
  aria-owns="jump-to-results"
  aria-label="Search or jump to"
  aria-haspopup="listbox"
  aria-expanded="false"
>
  <div class="position-relative">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-site-search-form" role="search" aria-label="Site" data-scope-type="Repository" data-scope-id="54994103" data-scoped-search-url="/popperjs/popper-core/search" data-unscoped-search-url="/search" action="/popperjs/popper-core/search" accept-charset="UTF-8" method="get">
      <label class="form-control input-sm header-search-wrapper p-0 header-search-wrapper-jump-to position-relative d-flex flex-justify-between flex-items-center js-chromeless-input-container">
        <input type="text"
          class="form-control input-sm header-search-input jump-to-field js-jump-to-field js-site-search-focus js-site-search-field is-clearable"
          data-hotkey="s,/"
          name="q"
          value=""
          placeholder="Search"
          data-unscoped-placeholder="Search GitHub"
          data-scoped-placeholder="Search"
          autocapitalize="off"
          aria-autocomplete="list"
          aria-controls="jump-to-results"
          aria-label="Search"
          data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations"
          spellcheck="false"
          autocomplete="off"
          >
          <input type="hidden" data-csrf="true" class="js-data-jump-to-suggestions-path-csrf" value="wAjSxGtdktlxjxyj6UN96wnG4iRuI0CE1+nmqNWknmn/0EQ8H3fzOOiDhuD4gWi4MR2L3xeSzsHdC6GWkd0MTw==" />
          <input type="hidden" class="js-site-search-type-field" name="type" >
            <img src="https://github.githubassets.com/images/search-key-slash.svg" alt="" class="mr-2 header-search-key-slash">

            <div class="Box position-absolute overflow-hidden d-none jump-to-suggestions js-jump-to-suggestions-container">
              
<ul class="d-none js-jump-to-suggestions-template-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-suggestion" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"></path></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0013 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 000-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"></path></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

</ul>

<ul class="d-none js-jump-to-no-results-template-container">
  <li class="d-flex flex-justify-center flex-items-center f5 d-none js-jump-to-suggestion p-2">
    <span class="text-gray">No suggested jump to results</span>
  </li>
</ul>

<ul id="jump-to-results" role="listbox" class="p-0 m-0 js-navigation-container jump-to-suggestions-results-container js-jump-to-suggestions-results-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-scoped-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"></path></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0013 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 000-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"></path></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-global-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"></path></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0013 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 000-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"></path></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>


</ul>

            </div>
      </label>
</form>  </div>
</div>

          </div>

        <a href="/login?return_to=%2Fpopperjs%2Fpopper-core%2Fblob%2Fv1.12.5%2Fdist%2Fumd%2Fpopper.js"
          class="HeaderMenu-link no-underline mr-3"
          data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;site header menu&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;SIGN_UP&quot;,&quot;originating_url&quot;:&quot;https://github.com/popperjs/popper-core/blob/v1.12.5/dist/umd/popper.js&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="926d1839e55a839e6b15fcd47a0d4ac42eb4a6c46f4a0fd5198ba635ac1d1365"
          data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">
          Sign&nbsp;in
        </a>
          <a href="/join?ref_cta=Sign+up&amp;ref_loc=header+logged+out&amp;ref_page=%2F%3Cuser-name%3E%2F%3Crepo-name%3E%2Fblob%2Fshow&amp;source=header-repo&amp;source_repo=popperjs%2Fpopper-core"
            class="HeaderMenu-link d-inline-block no-underline border border-gray-dark rounded-1 px-2 py-1"
            data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;site header menu&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;SIGN_UP&quot;,&quot;originating_url&quot;:&quot;https://github.com/popperjs/popper-core/blob/v1.12.5/dist/umd/popper.js&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="926d1839e55a839e6b15fcd47a0d4ac42eb4a6c46f4a0fd5198ba635ac1d1365"
            data-ga-click="Sign up, click to sign up for account, ref_page:/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show;ref_cta:Sign up;ref_loc:header logged out">
            Sign&nbsp;up
          </a>
      </div>
    </div>
  </div>
</header>

    </div>

  <div id="start-of-content" class="show-on-focus"></div>




    <div id="js-flash-container">


  <template class="js-flash-template">
    <div class="flash flash-full  js-flash-template-container">
  <div class="container-lg px-2" >
    <button class="flash-close js-flash-close" type="button" aria-label="Dismiss this message">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"></path></svg>
    </button>
    
      <div class="js-flash-template-message"></div>

  </div>
</div>
  </template>
</div>


      

  <include-fragment class="js-notification-shelf-include-fragment" data-base-src="https://github.com/notifications/beta/shelf"></include-fragment>




  <div class="application-main " data-commit-hovercards-enabled>
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode" class="">
    <main  >
      

  




  









  <div class="pagehead repohead hx_repohead readability-menu bg-gray-light pb-0 pt-0 pt-lg-3">

    <div class="d-flex container-lg mb-4 p-responsive d-none d-lg-flex">

      <div class="flex-auto min-width-0 width-fit mr-3">
        <h1 class="public  d-flex flex-wrap flex-items-center break-word float-none ">
  <span class="flex-self-stretch" style="margin-top: -2px;">
      <svg class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
  </span>
  <span class="author ml-2 flex-self-stretch" itemprop="author">
    <a class="url fn" rel="author" data-hovercard-type="organization" data-hovercard-url="/orgs/popperjs/hovercard" href="/popperjs">popperjs</a>
  </span>
  <span class="path-divider flex-self-stretch">/</span>
  <strong itemprop="name" class="mr-2 flex-self-stretch">
    <a data-pjax="#js-repo-pjax-container" href="/popperjs/popper-core">popper-core</a>
  </strong>
  
</h1>


      </div>

      <ul class="pagehead-actions flex-shrink-0 " >

    <li>
      <details id="funding-links-modal" class="details-reset details-overlay details-overlay-dark d-inline-block float-left" >
        <summary id="sponsor-button-repo" class="btn btn-sm"
          title="Sponsor popperjs/popper-core"
          data-ga-click="Repository, show sponsor modal, action:blob#show; text:Sponsor"
          >
          <svg class="octicon octicon-heart text-pink v-align-text-bottom" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.727 3C7.091 3 6.001 4.65 6.001 4.65S4.909 3 3.273 3C1.636 3 0 4.1 0 6.3 0 9.6 6 14 6 14s6-4.4 6-7.7C12 4.1 10.364 3 8.727 3z"></path></svg>
          Sponsor
        </summary>
        <details-dialog
          class="anim-fade-in fast Box Box--overlay d-flex flex-column"
            src="/popperjs/popper-core/funding_links?fragment=1"
            preload
          >
          <div class="Box-header">
            <button class="Box-btn-octicon btn-octicon float-right" type="button" aria-label="Close dialog" data-close-dialog>
              <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"></path></svg>
            </button>
            <h3 class="Box-title">
              Sponsor popperjs/popper-core
            </h3>
          </div>
          <div class="overflow-auto">
            <include-fragment
              >
              <div class="octocat-spinner my-3" aria-label="Loading..."></div>
            </include-fragment>
          </div>
        </details-dialog>
      </details>
    </li>



  <li>
    
  <a class="tooltipped tooltipped-s btn btn-sm btn-with-count" aria-label="You must be signed in to watch a repository" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;notification subscription menu watch&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;originating_url&quot;:&quot;https://github.com/popperjs/popper-core/blob/v1.12.5/dist/umd/popper.js&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="4e1dc1cdd6a22d5b69de153effab40d291ad05304ca1b46210030151cf255773" href="/login?return_to=%2Fpopperjs%2Fpopper-core">
    <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
    Watch
</a>    <a class="social-count" href="/popperjs/popper-core/watchers"
       aria-label="235 users are watching this repository">
      235
    </a>

  </li>

  <li>
        <a class="btn btn-sm btn-with-count tooltipped tooltipped-s" aria-label="You must be signed in to star a repository" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;star button&quot;,&quot;repository_id&quot;:54994103,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;originating_url&quot;:&quot;https://github.com/popperjs/popper-core/blob/v1.12.5/dist/umd/popper.js&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="70adf65d595257f12d767cb0bc9444d2892b3c2a8e560fcb7f11a694c6c954b0" href="/login?return_to=%2Fpopperjs%2Fpopper-core">
      <svg height="16" class="octicon octicon-star v-align-text-bottom" vertical_align="text_bottom" viewBox="0 0 14 16" version="1.1" width="14" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path></svg>

      Star
</a>
    <a class="social-count js-social-count" href="/popperjs/popper-core/stargazers"
      aria-label="14868 users starred this repository">
      14.9k
    </a>

  </li>

  <li>
      <a class="btn btn-sm btn-with-count tooltipped tooltipped-s" aria-label="You must be signed in to fork a repository" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;repo details fork button&quot;,&quot;repository_id&quot;:54994103,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;originating_url&quot;:&quot;https://github.com/popperjs/popper-core/blob/v1.12.5/dist/umd/popper.js&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="9e216dbf72b5eec3f86fe4a556f8da2f50dfba443e51501c01e96d65767c0203" href="/login?return_to=%2Fpopperjs%2Fpopper-core">
        <svg class="octicon octicon-repo-forked v-align-text-bottom" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
        Fork
</a>
    <a href="/popperjs/popper-core/network/members" class="social-count"
       aria-label="1024 users forked this repository">
      1k
    </a>
  </li>
</ul>

    </div>
      <nav class="js-repo-nav js-sidenav-container-pjax clearfix hx_reponav reponav p-responsive d-none d-lg-block container-lg"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
    aria-label="Repository"
     data-pjax="#js-repo-pjax-container">
  <ul class="list-style-none">
    <li  itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a class="js-selected-navigation-item selected reponav-item" itemprop="url" data-hotkey="g c" aria-current="page" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /popperjs/popper-core/tree/v1.12.5" href="/popperjs/popper-core/tree/v1.12.5">
        <div class="d-inline"><svg class="octicon octicon-code" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"></path></svg></div>
        <span itemprop="name">Code</span>
        <meta itemprop="position" content="1">
</a>    </li>

      <li  itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" data-hotkey="g i" class="js-selected-navigation-item reponav-item" data-selected-links="repo_issues repo_labels repo_milestones /popperjs/popper-core/issues" href="/popperjs/popper-core/issues">
          <div class="d-inline"><svg class="octicon octicon-issue-opened" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 011.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path></svg></div>
          <span itemprop="name">Issues</span>
          <span class="Counter">1</span>
          <meta itemprop="position" content="2">
</a>      </li>

    <li  itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a data-hotkey="g p" data-skip-pjax="true" itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /popperjs/popper-core/pulls" href="/popperjs/popper-core/pulls">
        <div class="d-inline"><svg class="octicon octicon-git-pull-request" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0010 15a1.993 1.993 0 001-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 00-1 3.72v6.56A1.993 1.993 0 002 15a1.993 1.993 0 001-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg></div>
        <span itemprop="name">Pull requests</span>
        <span class="Counter">2</span>
        <meta itemprop="position" content="4">
</a>    </li>


      <li itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement" class="position-relative float-left ">
        <a data-hotkey="g w" data-skip-pjax="true" class="js-selected-navigation-item reponav-item" data-selected-links="repo_actions /popperjs/popper-core/actions" href="/popperjs/popper-core/actions">
          <div class="d-inline"><svg class="octicon octicon-play" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 8A7 7 0 110 8a7 7 0 0114 0zm-8.223 3.482l4.599-3.066a.5.5 0 000-.832L5.777 4.518A.5.5 0 005 4.934v6.132a.5.5 0 00.777.416z"></path></svg></div>
          Actions
</a>
      </li>

      <li >
        <a data-hotkey="g b" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /popperjs/popper-core/projects" href="/popperjs/popper-core/projects">
          <div class="d-inline"><svg class="octicon octicon-project" viewBox="0 0 15 16" version="1.1" width="15" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"></path></svg></div>
          Projects
          <span class="Counter">0</span>
</a>      </li>


      <li >
        <a data-skip-pjax="true" class="js-selected-navigation-item reponav-item" data-selected-links="security overview alerts policy token_scanning code_scanning /popperjs/popper-core/security" href="/popperjs/popper-core/security">
          <div class="d-inline"><svg class="octicon octicon-shield" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 2l7-2 7 2v6.02C14 12.69 8.69 16 7 16c-1.69 0-7-3.31-7-7.98V2zm1 .75L7 1l6 1.75v5.268C13 12.104 8.449 15 7 15c-1.449 0-6-2.896-6-6.982V2.75zm1 .75L7 2v12c-1.207 0-5-2.482-5-5.985V3.5z"></path></svg></div>
          Security
              <span class="Counter js-security-tab-count" data-url="/popperjs/popper-core/security/overall-count" hidden></span>
</a>      </li>

      <li >
        <a class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph dependabot_updates pulse people /popperjs/popper-core/pulse" href="/popperjs/popper-core/pulse">
          <div class="d-inline"><svg class="octicon octicon-graph" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"></path></svg></div>
          Insights
</a>      </li>


  </ul>
</nav>

  <div class="reponav-wrapper reponav-small d-lg-none">
  <nav class="reponav js-reponav text-center no-wrap"
       itemscope
       itemtype="http://schema.org/BreadcrumbList">

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a class="js-selected-navigation-item selected reponav-item" itemprop="url" aria-current="page" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /popperjs/popper-core/tree/v1.12.5" href="/popperjs/popper-core/tree/v1.12.5">
        <span itemprop="name">Code</span>
        <meta itemprop="position" content="1">
</a>    </span>

      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_issues repo_labels repo_milestones /popperjs/popper-core/issues" href="/popperjs/popper-core/issues">
          <span itemprop="name">Issues</span>
          <span class="Counter">1</span>
          <meta itemprop="position" content="2">
</a>      </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /popperjs/popper-core/pulls" href="/popperjs/popper-core/pulls">
        <span itemprop="name">Pull requests</span>
        <span class="Counter">2</span>
        <meta itemprop="position" content="4">
</a>    </span>


      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /popperjs/popper-core/projects" href="/popperjs/popper-core/projects">
          <span itemprop="name">Projects</span>
          <span class="Counter">0</span>
          <meta itemprop="position" content="5">
</a>      </span>

      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_actions /popperjs/popper-core/actions" href="/popperjs/popper-core/actions">
          <span itemprop="name">Actions</span>
          <meta itemprop="position" content="6">
</a>      </span>


      <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="security overview alerts policy token_scanning code_scanning /popperjs/popper-core/security" href="/popperjs/popper-core/security">
        <span itemprop="name">Security</span>
            <span class="Counter js-security-deferred-tab-count" hidden></span>
        <meta itemprop="position" content="8">
</a>
      <a class="js-selected-navigation-item reponav-item" data-selected-links="pulse /popperjs/popper-core/pulse" href="/popperjs/popper-core/pulse">
        Pulse
</a>

  </nav>
</div>


  </div>

  

  <include-fragment class="js-notification-shelf-include-fragment" data-base-src="https://github.com/notifications/beta/shelf"></include-fragment>


<div class="container-lg clearfix new-discussion-timeline  p-responsive">
  <div class="repository-content ">

    
    

  


    <a class="d-none js-permalink-shortcut" data-hotkey="y" href="/popperjs/popper-core/blob/8a4f6e8936618ffcac1c1bd837ab4e5ab1de6726/dist/umd/popper.js">Permalink</a>

    <!-- blob contrib key: blob_contributors:v22:4545a0f3ebed311ad10cae83b2653c34 -->
      <signup-prompt-controller class="signup-prompt-bg rounded-1" data-prompt="signup" hidden>
    <div class="signup-prompt p-4 text-center mb-4 rounded-1">
      <div class="position-relative">
        <button
          type="button"
          class="position-absolute top-0 right-0 btn-link link-gray"
          data-action="click:signup-prompt-controller#dismiss"
          data-ga-click="(Logged out) Sign up prompt, clicked Dismiss, text:dismiss"
        >
          Dismiss
        </button>
        <h3 class="pt-2">Join GitHub today</h3>
        <p class="col-6 mx-auto">GitHub is home to over 50 million developers working together to host and review code, manage projects, and build software together.</p>
        <a class="btn btn-primary" data-ga-click="(Logged out) Sign up prompt, clicked Sign up, text:sign-up" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;files signup prompt&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;SIGN_UP&quot;,&quot;originating_url&quot;:&quot;https://github.com/popperjs/popper-core/blob/v1.12.5/dist/umd/popper.js&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="f1ef9bdf64f28b4f0ea0065356f0b1ebc200e94af340dcc169ee84539f0c59b9" href="/join?source=prompt-blob-show&amp;source_repo=popperjs%2Fpopper-core">Sign up</a>
      </div>
    </div>
  </signup-prompt-controller>


    <div class="d-flex flex-items-start flex-shrink-0 flex-column flex-md-row pb-3">
      <span class="d-flex flex-justify-between width-full width-md-auto">
        
<details class="details-reset details-overlay branch-select-menu " id="branch-select-menu">
  <summary class="btn css-truncate btn-sm"
           data-hotkey="w"
           title="Switch branches or tags">
    <i>Tag:</i>
    <span class="css-truncate-target" data-menu-button>v1.12.5</span>
    <span class="dropdown-caret"></span>
  </summary>

  <details-menu class="SelectMenu SelectMenu--hasFilter" src="/popperjs/popper-core/refs/v1.12.5/dist/umd/popper.js?source_action=show&amp;source_controller=blob" preload>
    <div class="SelectMenu-modal">
      <include-fragment class="SelectMenu-loading" aria-label="Menu is loading">
        <svg class="octicon octicon-octoface anim-pulse" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z"></path></svg>
      </include-fragment>
    </div>
  </details-menu>
</details>

        <div class="BtnGroup flex-shrink-0 d-md-none">
          <a href="/popperjs/popper-core/find/v1.12.5"
                class="js-pjax-capture-input btn btn-sm BtnGroup-item"
                data-pjax
                data-hotkey="t">
            Find file
          </a>
          <clipboard-copy value="dist/umd/popper.js" class="btn btn-sm BtnGroup-item">
            Copy path
          </clipboard-copy>
        </div>
      </span>
      <h2 id="blob-path" class="breadcrumb flex-auto min-width-0 text-normal flex-md-self-center ml-md-2 mr-md-3 my-2 my-md-0">
        <span class="js-repo-root text-bold"><span class="js-path-segment d-inline-block wb-break-all"><a data-pjax="true" href="/popperjs/popper-core/tree/v1.12.5"><span>popper-core</span></a></span></span><span class="separator">/</span><span class="js-path-segment d-inline-block wb-break-all"><a data-pjax="true" href="/popperjs/popper-core/tree/v1.12.5/dist"><span>dist</span></a></span><span class="separator">/</span><span class="js-path-segment d-inline-block wb-break-all"><a data-pjax="true" href="/popperjs/popper-core/tree/v1.12.5/dist/umd"><span>umd</span></a></span><span class="separator">/</span><strong class="final-path">popper.js</strong>
          <span class="separator">/</span><details class="details-reset details-overlay d-inline" id="jumpto-symbol-select-menu">
  <summary class="btn-link link-gray css-truncate" aria-haspopup="true" data-hotkey="r" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.click_on_blob_definitions&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;click_on_blob_definitions&quot;,&quot;repository_id&quot;:54994103,&quot;ref&quot;:&quot;v1.12.5&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/popperjs/popper-core/blob/v1.12.5/dist/umd/popper.js&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="d8fd35c596532f6b5f74a6828b5e33296086c920adf68147302ee8e2a424c733">
      <svg class="octicon octicon-code" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"></path></svg>
    <span data-menu-button>Jump to</span>
    <span class="dropdown-caret"></span>
  </summary>
  <details-menu class="SelectMenu SelectMenu--hasFilter" role="menu">
    <div class="SelectMenu-modal">
      <header class="SelectMenu-header">
        <span class="SelectMenu-title">Code definitions</span>
        <button class="SelectMenu-closeButton" type="button" data-toggle-for="jumpto-symbol-select-menu">
          <svg aria-label="Close menu" class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"></path></svg>
        </button>
      </header>
      <div class="SelectMenu-list">
          <div class="SelectMenu-blankslate">
            <p class="mb-0 text-gray">
              No definitions found in this file.
            </p>
          </div>
        <div data-filterable-for="jumpto-symbols-filter-field" data-filterable-type="substring">
        </div>
      </div>
      <footer class="SelectMenu-footer">
        <div class="d-flex flex-justify-between">
          Code navigation not available for this commit
          <svg class="octicon octicon-primitive-dot text-light-gray" viewBox="0 0 8 16" version="1.1" width="8" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"></path></svg>
        </div>
      </footer>
    </div>
  </details-menu>
</details>

      </h2>

      <div class="BtnGroup flex-shrink-0 d-none d-md-inline-block">
        <a href="/popperjs/popper-core/find/v1.12.5"
              class="js-pjax-capture-input btn btn-sm BtnGroup-item"
              data-pjax
              data-hotkey="t">
          Find file
        </a>
        <clipboard-copy value="dist/umd/popper.js" class="btn btn-sm BtnGroup-item">
          Copy path
        </clipboard-copy>
      </div>
    </div>



    <include-fragment src="/popperjs/popper-core/contributors/v1.12.5/dist/umd/popper.js" class="Box Box--condensed commit-loader">
      <div class="Box-body bg-blue-light f6">
        Fetching contributors&hellip;
      </div>

      <div class="Box-body d-flex flex-items-center" >
        <img alt="" class="loader-loading mr-2" src="https://github.githubassets.com/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" height="16" />
        <span class="text-red h6 loader-error">Cannot retrieve contributors at this time</span>
      </div>
</include-fragment>





    <div class="Box mt-3 position-relative
      ">
      
<div class="Box-header py-2 d-flex flex-column flex-shrink-0 flex-md-row flex-md-items-center">
  <div class="text-mono f6 flex-auto pr-3 flex-order-2 flex-md-order-1 mt-2 mt-md-0">

      2448 lines (2149 sloc)
      <span class="file-info-divider"></span>
    79.8 KB
  </div>

  <div class="d-flex py-1 py-md-0 flex-auto flex-order-1 flex-md-order-2 flex-sm-grow-0 flex-justify-between">

    <div class="BtnGroup">
      <a id="raw-url" class="btn btn-sm BtnGroup-item" href="/popperjs/popper-core/raw/v1.12.5/dist/umd/popper.js">Raw</a>
        <a class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b" href="/popperjs/popper-core/blame/v1.12.5/dist/umd/popper.js">Blame</a>
      <a rel="nofollow" class="btn btn-sm BtnGroup-item" href="/popperjs/popper-core/commits/v1.12.5/dist/umd/popper.js">History</a>
    </div>


    <div>
          <button class="btn-octicon disabled tooltipped tooltipped-nw js-remove-unless-platform"
             data-platforms="windows,mac" type="button"  disabled
             aria-label="You must be on a branch to open this file in GitHub Desktop">
              <svg class="octicon octicon-device-desktop" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"></path></svg>
          </button>

          <button type="button" class="btn-octicon disabled tooltipped tooltipped-nw"
            aria-label="You must be signed in to make or propose changes">
            <svg class="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 011.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"></path></svg>
          </button>
          <button type="button" class="btn-octicon btn-octicon-danger disabled tooltipped tooltipped-nw"
            aria-label="You must be signed in to make or propose changes">
            <svg class="octicon octicon-trashcan" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"></path></svg>
          </button>
    </div>
  </div>
</div>



      

  <div itemprop="text" class="Box-body p-0 blob-wrapper data type-javascript ">
      
<table class="highlight tab-size js-file-line-container" data-tab-size="2" data-paste-markdown-skip>
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/**!</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@fileOverview</span> Kickass library to create and place poppers near their reference elements.</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@version</span> 1.12.5</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@license</span></span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * Copyright (c) 2016 Federico Zivolo and contributors</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line"><span class=pl-c> *</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * Permission is hereby granted, free of charge, to any person obtaining a copy</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * of this software and associated documentation files (the &quot;Software&quot;), to deal</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * in the Software without restriction, including without limitation the rights</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell</span></td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * copies of the Software, and to permit persons to whom the Software is</span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * furnished to do so, subject to the following conditions:</span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line"><span class=pl-c> *</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * The above copyright notice and this permission notice shall be included in all</span></td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * copies or substantial portions of the Software.</span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line"><span class=pl-c> *</span></td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR</span></td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,</span></td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE</span></td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER</span></td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,</span></td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE</span></td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * SOFTWARE.</span></td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line"><span class=pl-c> */</span></td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>(</span><span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>global</span><span class=pl-kos>,</span> <span class=pl-s1>factory</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>typeof</span> <span class=pl-s1>exports</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;object&#39;</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-k>typeof</span> <span class=pl-smi>module</span> !== <span class=pl-s>&#39;undefined&#39;</span> ? <span class=pl-smi>module</span><span class=pl-kos>.</span><span class=pl-c1>exports</span> <span class=pl-c1>=</span> <span class=pl-s1>factory</span><span class=pl-kos>(</span><span class=pl-kos>)</span> :</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>typeof</span> <span class=pl-s1>define</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;function&#39;</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>define</span><span class=pl-kos>.</span><span class=pl-c1>amd</span> ? <span class=pl-en>define</span><span class=pl-kos>(</span><span class=pl-s1>factory</span><span class=pl-kos>)</span> :</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>(</span><span class=pl-s1>global</span><span class=pl-kos>.</span><span class=pl-c1>Popper</span> <span class=pl-c1>=</span> <span class=pl-s1>factory</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>,</span> <span class=pl-kos>(</span><span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span> <span class=pl-s>&#39;use strict&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line"><span class=pl-k>var</span> <span class=pl-s1>nativeHints</span> <span class=pl-c1>=</span> <span class=pl-kos>[</span><span class=pl-s>&#39;native code&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;[object MutationObserverConstructor]&#39;</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * Determine if a function is implemented natively (as opposed to a polyfill).</span></td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@method</span></span></td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@memberof</span> Popper.Utils</span></td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@argument</span> {Function | undefined} fn the function to check</span></td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@returns</span> {<span class=pl-smi>Boolean</span>}</span></td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line"><span class=pl-c> */</span></td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line"><span class=pl-k>var</span> <span class=pl-s1>isNative</span> <span class=pl-c1>=</span> <span class=pl-kos>(</span><span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>fn</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>return</span> <span class=pl-s1>nativeHints</span><span class=pl-kos>.</span><span class=pl-en>some</span><span class=pl-kos>(</span><span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>hint</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>return</span> <span class=pl-kos>(</span><span class=pl-s1>fn</span> <span class=pl-c1>||</span> <span class=pl-s>&#39;&#39;</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>toString</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>indexOf</span><span class=pl-kos>(</span><span class=pl-s1>hint</span><span class=pl-kos>)</span> <span class=pl-c1>&gt;</span> <span class=pl-c1>-</span><span class=pl-c1>1</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line"><span class=pl-k>var</span> <span class=pl-s1>isBrowser</span> <span class=pl-c1>=</span> <span class=pl-k>typeof</span> <span class=pl-smi>window</span> !== <span class=pl-s>&#39;undefined&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line"><span class=pl-k>var</span> <span class=pl-s1>longerTimeoutBrowsers</span> <span class=pl-c1>=</span> <span class=pl-kos>[</span><span class=pl-s>&#39;Edge&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;Trident&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;Firefox&#39;</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line"><span class=pl-k>var</span> <span class=pl-s1>timeoutDuration</span> <span class=pl-c1>=</span> <span class=pl-c1>0</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line"><span class=pl-k>for</span> <span class=pl-kos>(</span><span class=pl-k>var</span> <span class=pl-s1>i</span> <span class=pl-c1>=</span> <span class=pl-c1>0</span><span class=pl-kos>;</span> <span class=pl-s1>i</span> <span class=pl-c1>&lt;</span> <span class=pl-s1>longerTimeoutBrowsers</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>;</span> <span class=pl-s1>i</span> <span class=pl-c1>+=</span> <span class=pl-c1>1</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>isBrowser</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>navigator</span><span class=pl-kos>.</span><span class=pl-c1>userAgent</span><span class=pl-kos>.</span><span class=pl-en>indexOf</span><span class=pl-kos>(</span><span class=pl-s1>longerTimeoutBrowsers</span><span class=pl-kos>[</span><span class=pl-s1>i</span><span class=pl-kos>]</span><span class=pl-kos>)</span> &gt;= <span class=pl-c1>0</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">    <span class=pl-s1>timeoutDuration</span> <span class=pl-c1>=</span> <span class=pl-c1>1</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>break</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line"><span class=pl-k>function</span> <span class=pl-en>microtaskDebounce</span><span class=pl-kos>(</span><span class=pl-s1>fn</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>scheduled</span> <span class=pl-c1>=</span> <span class=pl-c1>false</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>i</span> <span class=pl-c1>=</span> <span class=pl-c1>0</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>elem</span> <span class=pl-c1>=</span> <span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>createElement</span><span class=pl-kos>(</span><span class=pl-s>&#39;span&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// MutationObserver provides a mechanism for scheduling microtasks, which</span></td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// are scheduled *before* the next task. This gives us a way to debounce</span></td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// a function but ensure it&#39;s called *before* the next paint.</span></td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>observer</span> <span class=pl-c1>=</span> <span class=pl-k>new</span> <span class=pl-v>MutationObserver</span><span class=pl-kos>(</span><span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">    <span class=pl-s1>fn</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">    <span class=pl-s1>scheduled</span> <span class=pl-c1>=</span> <span class=pl-c1>false</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">  <span class=pl-s1>observer</span><span class=pl-kos>.</span><span class=pl-en>observe</span><span class=pl-kos>(</span><span class=pl-s1>elem</span><span class=pl-kos>,</span> <span class=pl-kos>{</span> <span class=pl-c1>attributes</span>: <span class=pl-c1>true</span> <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>return</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-s1>scheduled</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line">      <span class=pl-s1>scheduled</span> <span class=pl-c1>=</span> <span class=pl-c1>true</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">      <span class=pl-s1>elem</span><span class=pl-kos>.</span><span class=pl-en>setAttribute</span><span class=pl-kos>(</span><span class=pl-s>&#39;x-index&#39;</span><span class=pl-kos>,</span> <span class=pl-s1>i</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line">      <span class=pl-s1>i</span> <span class=pl-c1>=</span> <span class=pl-s1>i</span> <span class=pl-c1>+</span> <span class=pl-c1>1</span><span class=pl-kos>;</span> <span class=pl-c>// don&#39;t use compund (+=) because it doesn&#39;t get optimized in V8</span></td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line"><span class=pl-k>function</span> <span class=pl-en>taskDebounce</span><span class=pl-kos>(</span><span class=pl-s1>fn</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>scheduled</span> <span class=pl-c1>=</span> <span class=pl-c1>false</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>return</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-s1>scheduled</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">      <span class=pl-s1>scheduled</span> <span class=pl-c1>=</span> <span class=pl-c1>true</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">      <span class=pl-en>setTimeout</span><span class=pl-kos>(</span><span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>scheduled</span> <span class=pl-c1>=</span> <span class=pl-c1>false</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>fn</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">      <span class=pl-kos>}</span><span class=pl-kos>,</span> <span class=pl-s1>timeoutDuration</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line"><span class=pl-c>// It&#39;s common for MutationObserver polyfills to be seen in the wild, however</span></td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line"><span class=pl-c>// these rely on Mutation Events which only occur when an element is connected</span></td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line"><span class=pl-c>// to the DOM. The algorithm used in this module does not use a connected element,</span></td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line"><span class=pl-c>// and so we must ensure that a *native* MutationObserver is available.</span></td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line"><span class=pl-k>var</span> <span class=pl-s1>supportsNativeMutationObserver</span> <span class=pl-c1>=</span> <span class=pl-s1>isBrowser</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>isNative</span><span class=pl-kos>(</span><span class=pl-smi>window</span><span class=pl-kos>.</span><span class=pl-c1>MutationObserver</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line"><span class=pl-c>* Create a debounced version of a method, that&#39;s asynchronously deferred</span></td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line"><span class=pl-c>* but called in the minimum time possible.</span></td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line"><span class=pl-c>*</span></td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line"><span class=pl-c>* <span class=pl-k>@method</span></span></td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line"><span class=pl-c>* <span class=pl-k>@memberof</span> Popper.Utils</span></td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line"><span class=pl-c>* <span class=pl-k>@argument</span> {Function} fn</span></td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line"><span class=pl-c>* <span class=pl-k>@returns</span> {<span class=pl-smi>Function</span>}</span></td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line"><span class=pl-c>*/</span></td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line"><span class=pl-k>var</span> <span class=pl-s1>debounce</span> <span class=pl-c1>=</span> <span class=pl-s1>supportsNativeMutationObserver</span> ? <span class=pl-s1>microtaskDebounce</span> : <span class=pl-s1>taskDebounce</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * Check if the given variable is a function</span></td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@method</span></span></td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@memberof</span> Popper.Utils</span></td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@argument</span> {Any} functionToCheck - variable to check</span></td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@returns</span> {<span class=pl-smi>Boolean</span>} answer to: is a function?</span></td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line"><span class=pl-c> */</span></td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line"><span class=pl-k>function</span> <span class=pl-en>isFunction</span><span class=pl-kos>(</span><span class=pl-s1>functionToCheck</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>getType</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>return</span> <span class=pl-s1>functionToCheck</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>getType</span><span class=pl-kos>.</span><span class=pl-c1>toString</span><span class=pl-kos>.</span><span class=pl-en>call</span><span class=pl-kos>(</span><span class=pl-s1>functionToCheck</span><span class=pl-kos>)</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;[object Function]&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * Get CSS computed property of the given element</span></td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@method</span></span></td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@memberof</span> Popper.Utils</span></td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@argument</span> {Eement} element</span></td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@argument</span> {String} property</span></td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line"><span class=pl-c> */</span></td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line"><span class=pl-k>function</span> <span class=pl-en>getStyleComputedProperty</span><span class=pl-kos>(</span><span class=pl-s1>element</span><span class=pl-kos>,</span> <span class=pl-s1>property</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>element</span><span class=pl-kos>.</span><span class=pl-c1>nodeType</span> !== <span class=pl-c1>1</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>return</span> <span class=pl-kos>[</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// NOTE: 1 DOM access here</span></td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>css</span> <span class=pl-c1>=</span> <span class=pl-smi>window</span><span class=pl-kos>.</span><span class=pl-en>getComputedStyle</span><span class=pl-kos>(</span><span class=pl-s1>element</span><span class=pl-kos>,</span> null<span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>return</span> <span class=pl-s1>property</span> ? <span class=pl-s1>css</span><span class=pl-kos>[</span><span class=pl-s1>property</span><span class=pl-kos>]</span> : <span class=pl-s1>css</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * Returns the parentNode or the host of the element</span></td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@method</span></span></td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@memberof</span> Popper.Utils</span></td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@argument</span> {Element} element</span></td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@returns</span> {<span class=pl-smi>Element</span>} parent</span></td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line"><span class=pl-c> */</span></td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line"><span class=pl-k>function</span> <span class=pl-en>getParentNode</span><span class=pl-kos>(</span><span class=pl-s1>element</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>element</span><span class=pl-kos>.</span><span class=pl-c1>nodeName</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;HTML&#39;</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>return</span> <span class=pl-s1>element</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>return</span> <span class=pl-s1>element</span><span class=pl-kos>.</span><span class=pl-c1>parentNode</span> <span class=pl-c1>||</span> <span class=pl-s1>element</span><span class=pl-kos>.</span><span class=pl-c1>host</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * Returns the scrolling parent of the given element</span></td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@method</span></span></td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@memberof</span> Popper.Utils</span></td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@argument</span> {Element} element</span></td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@returns</span> {<span class=pl-smi>Element</span>} scroll parent</span></td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line"><span class=pl-c> */</span></td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code blob-code-inner js-file-line"><span class=pl-k>function</span> <span class=pl-en>getScrollParent</span><span class=pl-kos>(</span><span class=pl-s1>element</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// Return body, `getScroll` will take care to get the correct `scrollTop` from it</span></td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-s1>element</span> <span class=pl-c1>||</span> <span class=pl-kos>[</span><span class=pl-s>&#39;HTML&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;BODY&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;#document&#39;</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-en>indexOf</span><span class=pl-kos>(</span><span class=pl-s1>element</span><span class=pl-kos>.</span><span class=pl-c1>nodeName</span><span class=pl-kos>)</span> !== <span class=pl-c1>-</span><span class=pl-c1>1</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>return</span> <span class=pl-smi>window</span><span class=pl-kos>.</span><span class=pl-c1>document</span><span class=pl-kos>.</span><span class=pl-c1>body</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// Firefox want us to check `-x` and `-y` variations as well</span></td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>_getStyleComputedProp</span> <span class=pl-c1>=</span> <span class=pl-en>getStyleComputedProperty</span><span class=pl-kos>(</span><span class=pl-s1>element</span><span class=pl-kos>)</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code blob-code-inner js-file-line">      <span class=pl-s1>overflow</span> <span class=pl-c1>=</span> <span class=pl-s1>_getStyleComputedProp</span><span class=pl-kos>.</span><span class=pl-c1>overflow</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code blob-code-inner js-file-line">      <span class=pl-s1>overflowX</span> <span class=pl-c1>=</span> <span class=pl-s1>_getStyleComputedProp</span><span class=pl-kos>.</span><span class=pl-c1>overflowX</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code blob-code-inner js-file-line">      <span class=pl-s1>overflowY</span> <span class=pl-c1>=</span> <span class=pl-s1>_getStyleComputedProp</span><span class=pl-kos>.</span><span class=pl-c1>overflowY</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-pds>/<span class=pl-kos>(</span>auto<span class=pl-c1>|</span>scroll<span class=pl-kos>)</span>/</span><span class=pl-kos>.</span><span class=pl-en>test</span><span class=pl-kos>(</span><span class=pl-s1>overflow</span> <span class=pl-c1>+</span> <span class=pl-s1>overflowY</span> <span class=pl-c1>+</span> <span class=pl-s1>overflowX</span><span class=pl-kos>)</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>return</span> <span class=pl-s1>element</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>return</span> <span class=pl-en>getScrollParent</span><span class=pl-kos>(</span><span class=pl-en>getParentNode</span><span class=pl-kos>(</span><span class=pl-s1>element</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * Returns the offset parent of the given element</span></td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@method</span></span></td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@memberof</span> Popper.Utils</span></td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@argument</span> {Element} element</span></td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@returns</span> {<span class=pl-smi>Element</span>} offset parent</span></td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code blob-code-inner js-file-line"><span class=pl-c> */</span></td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code blob-code-inner js-file-line"><span class=pl-k>function</span> <span class=pl-en>getOffsetParent</span><span class=pl-kos>(</span><span class=pl-s1>element</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// NOTE: 1 DOM access here</span></td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>offsetParent</span> <span class=pl-c1>=</span> <span class=pl-s1>element</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>element</span><span class=pl-kos>.</span><span class=pl-c1>offsetParent</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>nodeName</span> <span class=pl-c1>=</span> <span class=pl-s1>offsetParent</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>offsetParent</span><span class=pl-kos>.</span><span class=pl-c1>nodeName</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-s1>nodeName</span> <span class=pl-c1>||</span> <span class=pl-s1>nodeName</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;BODY&#39;</span> <span class=pl-c1>||</span> <span class=pl-s1>nodeName</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;HTML&#39;</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>return</span> <span class=pl-smi>window</span><span class=pl-kos>.</span><span class=pl-c1>document</span><span class=pl-kos>.</span><span class=pl-c1>documentElement</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// .offsetParent will return the closest TD or TABLE in case</span></td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// no offsetParent is present, I hate this job...</span></td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-kos>[</span><span class=pl-s>&#39;TD&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;TABLE&#39;</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-en>indexOf</span><span class=pl-kos>(</span><span class=pl-s1>offsetParent</span><span class=pl-kos>.</span><span class=pl-c1>nodeName</span><span class=pl-kos>)</span> !== <span class=pl-c1>-</span><span class=pl-c1>1</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-en>getStyleComputedProperty</span><span class=pl-kos>(</span><span class=pl-s1>offsetParent</span><span class=pl-kos>,</span> <span class=pl-s>&#39;position&#39;</span><span class=pl-kos>)</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;static&#39;</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>return</span> <span class=pl-en>getOffsetParent</span><span class=pl-kos>(</span><span class=pl-s1>offsetParent</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>return</span> <span class=pl-s1>offsetParent</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code blob-code-inner js-file-line"><span class=pl-k>function</span> <span class=pl-en>isOffsetContainer</span><span class=pl-kos>(</span><span class=pl-s1>element</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>nodeName</span> <span class=pl-c1>=</span> <span class=pl-s1>element</span><span class=pl-kos>.</span><span class=pl-c1>nodeName</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>nodeName</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;BODY&#39;</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>return</span> <span class=pl-c1>false</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>return</span> <span class=pl-s1>nodeName</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;HTML&#39;</span> <span class=pl-c1>||</span> <span class=pl-en>getOffsetParent</span><span class=pl-kos>(</span><span class=pl-s1>element</span><span class=pl-kos>.</span><span class=pl-c1>firstElementChild</span><span class=pl-kos>)</span> <span class=pl-c1>===</span> <span class=pl-s1>element</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * Finds the root node (document, shadowDOM root) of the given element</span></td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@method</span></span></td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@memberof</span> Popper.Utils</span></td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@argument</span> {Element} node</span></td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@returns</span> {<span class=pl-smi>Element</span>} root node</span></td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code blob-code-inner js-file-line"><span class=pl-c> */</span></td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code blob-code-inner js-file-line"><span class=pl-k>function</span> <span class=pl-en>getRoot</span><span class=pl-kos>(</span><span class=pl-s1>node</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>node</span><span class=pl-kos>.</span><span class=pl-c1>parentNode</span> !== null<span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>return</span> <span class=pl-en>getRoot</span><span class=pl-kos>(</span><span class=pl-s1>node</span><span class=pl-kos>.</span><span class=pl-c1>parentNode</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>return</span> <span class=pl-s1>node</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * Finds the offset parent common to the two provided nodes</span></td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@method</span></span></td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@memberof</span> Popper.Utils</span></td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@argument</span> {Element} element1</span></td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@argument</span> {Element} element2</span></td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@returns</span> {<span class=pl-smi>Element</span>} common offset parent</span></td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code blob-code-inner js-file-line"><span class=pl-c> */</span></td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code blob-code-inner js-file-line"><span class=pl-k>function</span> <span class=pl-en>findCommonOffsetParent</span><span class=pl-kos>(</span><span class=pl-s1>element1</span><span class=pl-kos>,</span> <span class=pl-s1>element2</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// This check is needed to avoid errors in case one of the elements isn&#39;t defined for any reason</span></td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-s1>element1</span> <span class=pl-c1>||</span> !<span class=pl-s1>element1</span><span class=pl-kos>.</span><span class=pl-c1>nodeType</span> <span class=pl-c1>||</span> !<span class=pl-s1>element2</span> <span class=pl-c1>||</span> !<span class=pl-s1>element2</span><span class=pl-kos>.</span><span class=pl-c1>nodeType</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>return</span> <span class=pl-smi>window</span><span class=pl-kos>.</span><span class=pl-c1>document</span><span class=pl-kos>.</span><span class=pl-c1>documentElement</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// Here we make sure to give as &quot;start&quot; the element that comes first in the DOM</span></td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>order</span> <span class=pl-c1>=</span> <span class=pl-s1>element1</span><span class=pl-kos>.</span><span class=pl-en>compareDocumentPosition</span><span class=pl-kos>(</span><span class=pl-s1>element2</span><span class=pl-kos>)</span> &amp; <span class=pl-v>Node</span><span class=pl-kos>.</span><span class=pl-c1>DOCUMENT_POSITION_FOLLOWING</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>start</span> <span class=pl-c1>=</span> <span class=pl-s1>order</span> ? <span class=pl-s1>element1</span> : <span class=pl-s1>element2</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>end</span> <span class=pl-c1>=</span> <span class=pl-s1>order</span> ? <span class=pl-s1>element2</span> : <span class=pl-s1>element1</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// Get common ancestor container</span></td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>range</span> <span class=pl-c1>=</span> <span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>createRange</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code blob-code-inner js-file-line">  <span class=pl-s1>range</span><span class=pl-kos>.</span><span class=pl-en>setStart</span><span class=pl-kos>(</span><span class=pl-s1>start</span><span class=pl-kos>,</span> <span class=pl-c1>0</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code blob-code-inner js-file-line">  <span class=pl-s1>range</span><span class=pl-kos>.</span><span class=pl-en>setEnd</span><span class=pl-kos>(</span><span class=pl-s1>end</span><span class=pl-kos>,</span> <span class=pl-c1>0</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>commonAncestorContainer</span> <span class=pl-c1>=</span> <span class=pl-s1>range</span><span class=pl-kos>.</span><span class=pl-c1>commonAncestorContainer</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// Both nodes are inside #document</span></td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>element1</span> !== <span class=pl-s1>commonAncestorContainer</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>element2</span> !== <span class=pl-s1>commonAncestorContainer</span> <span class=pl-c1>||</span> <span class=pl-s1>start</span><span class=pl-kos>.</span><span class=pl-en>contains</span><span class=pl-kos>(</span><span class=pl-s1>end</span><span class=pl-kos>)</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-en>isOffsetContainer</span><span class=pl-kos>(</span><span class=pl-s1>commonAncestorContainer</span><span class=pl-kos>)</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code blob-code-inner js-file-line">      <span class=pl-k>return</span> <span class=pl-s1>commonAncestorContainer</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>return</span> <span class=pl-en>getOffsetParent</span><span class=pl-kos>(</span><span class=pl-s1>commonAncestorContainer</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// one of the nodes is inside shadowDOM, find which one</span></td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>element1root</span> <span class=pl-c1>=</span> <span class=pl-en>getRoot</span><span class=pl-kos>(</span><span class=pl-s1>element1</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>element1root</span><span class=pl-kos>.</span><span class=pl-c1>host</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>return</span> <span class=pl-en>findCommonOffsetParent</span><span class=pl-kos>(</span><span class=pl-s1>element1root</span><span class=pl-kos>.</span><span class=pl-c1>host</span><span class=pl-kos>,</span> <span class=pl-s1>element2</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>return</span> <span class=pl-en>findCommonOffsetParent</span><span class=pl-kos>(</span><span class=pl-s1>element1</span><span class=pl-kos>,</span> <span class=pl-en>getRoot</span><span class=pl-kos>(</span><span class=pl-s1>element2</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>host</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * Gets the scroll value of the given element in the given side (top and left)</span></td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@method</span></span></td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@memberof</span> Popper.Utils</span></td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@argument</span> {Element} element</span></td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@argument</span> {String} side `top` or `left`</span></td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@returns</span> {<span class=pl-smi>number</span>} amount of scrolled pixels</span></td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code blob-code-inner js-file-line"><span class=pl-c> */</span></td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code blob-code-inner js-file-line"><span class=pl-k>function</span> <span class=pl-en>getScroll</span><span class=pl-kos>(</span><span class=pl-s1>element</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>side</span> <span class=pl-c1>=</span> <span class=pl-smi>arguments</span><span class=pl-kos>.</span><span class=pl-c1>length</span> <span class=pl-c1>&gt;</span> <span class=pl-c1>1</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-smi>arguments</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span> !== undefined ? <span class=pl-smi>arguments</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span> : <span class=pl-s>&#39;top&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>upperSide</span> <span class=pl-c1>=</span> <span class=pl-s1>side</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;top&#39;</span> ? <span class=pl-s>&#39;scrollTop&#39;</span> : <span class=pl-s>&#39;scrollLeft&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>nodeName</span> <span class=pl-c1>=</span> <span class=pl-s1>element</span><span class=pl-kos>.</span><span class=pl-c1>nodeName</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>nodeName</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;BODY&#39;</span> <span class=pl-c1>||</span> <span class=pl-s1>nodeName</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;HTML&#39;</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>var</span> <span class=pl-s1>html</span> <span class=pl-c1>=</span> <span class=pl-smi>window</span><span class=pl-kos>.</span><span class=pl-c1>document</span><span class=pl-kos>.</span><span class=pl-c1>documentElement</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>var</span> <span class=pl-s1>scrollingElement</span> <span class=pl-c1>=</span> <span class=pl-smi>window</span><span class=pl-kos>.</span><span class=pl-c1>document</span><span class=pl-kos>.</span><span class=pl-c1>scrollingElement</span> <span class=pl-c1>||</span> <span class=pl-s1>html</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>return</span> <span class=pl-s1>scrollingElement</span><span class=pl-kos>[</span><span class=pl-s1>upperSide</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>return</span> <span class=pl-s1>element</span><span class=pl-kos>[</span><span class=pl-s1>upperSide</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/*</span></td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * Sum or subtract the element scroll values (left and top) from a given rect object</span></td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@method</span></span></td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@memberof</span> Popper.Utils</span></td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@param</span> {<span class=pl-smi>Object</span>} rect - Rect object you want to change</span></td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@param</span> {<span class=pl-smi>HTMLElement</span>} element - The element from the function reads the scroll values</span></td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@param</span> {<span class=pl-smi>Boolean</span>} subtract - set to true if you want to subtract the scroll values</span></td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@return</span> {<span class=pl-smi>Object</span>} rect - The modifier rect object</span></td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code blob-code-inner js-file-line"><span class=pl-c> */</span></td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code blob-code-inner js-file-line"><span class=pl-k>function</span> <span class=pl-en>includeScroll</span><span class=pl-kos>(</span><span class=pl-s1>rect</span><span class=pl-kos>,</span> <span class=pl-s1>element</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>subtract</span> <span class=pl-c1>=</span> <span class=pl-smi>arguments</span><span class=pl-kos>.</span><span class=pl-c1>length</span> <span class=pl-c1>&gt;</span> <span class=pl-c1>2</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-smi>arguments</span><span class=pl-kos>[</span><span class=pl-c1>2</span><span class=pl-kos>]</span> !== undefined ? <span class=pl-smi>arguments</span><span class=pl-kos>[</span><span class=pl-c1>2</span><span class=pl-kos>]</span> : <span class=pl-c1>false</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L307" class="blob-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>scrollTop</span> <span class=pl-c1>=</span> <span class=pl-en>getScroll</span><span class=pl-kos>(</span><span class=pl-s1>element</span><span class=pl-kos>,</span> <span class=pl-s>&#39;top&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L308" class="blob-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>scrollLeft</span> <span class=pl-c1>=</span> <span class=pl-en>getScroll</span><span class=pl-kos>(</span><span class=pl-s1>element</span><span class=pl-kos>,</span> <span class=pl-s>&#39;left&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L309" class="blob-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>modifier</span> <span class=pl-c1>=</span> <span class=pl-s1>subtract</span> ? <span class=pl-c1>-</span><span class=pl-c1>1</span> : <span class=pl-c1>1</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L310" class="blob-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-code blob-code-inner js-file-line">  <span class=pl-s1>rect</span><span class=pl-kos>.</span><span class=pl-c1>top</span> <span class=pl-c1>+=</span> <span class=pl-s1>scrollTop</span> * <span class=pl-s1>modifier</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L311" class="blob-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-code blob-code-inner js-file-line">  <span class=pl-s1>rect</span><span class=pl-kos>.</span><span class=pl-c1>bottom</span> <span class=pl-c1>+=</span> <span class=pl-s1>scrollTop</span> * <span class=pl-s1>modifier</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L312" class="blob-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-code blob-code-inner js-file-line">  <span class=pl-s1>rect</span><span class=pl-kos>.</span><span class=pl-c1>left</span> <span class=pl-c1>+=</span> <span class=pl-s1>scrollLeft</span> * <span class=pl-s1>modifier</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L313" class="blob-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-code blob-code-inner js-file-line">  <span class=pl-s1>rect</span><span class=pl-kos>.</span><span class=pl-c1>right</span> <span class=pl-c1>+=</span> <span class=pl-s1>scrollLeft</span> * <span class=pl-s1>modifier</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L314" class="blob-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>return</span> <span class=pl-s1>rect</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L315" class="blob-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L316" class="blob-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L317" class="blob-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/*</span></td>
      </tr>
      <tr>
        <td id="L318" class="blob-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * Helper to detect borders of a given element</span></td>
      </tr>
      <tr>
        <td id="L319" class="blob-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@method</span></span></td>
      </tr>
      <tr>
        <td id="L320" class="blob-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@memberof</span> Popper.Utils</span></td>
      </tr>
      <tr>
        <td id="L321" class="blob-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@param</span> {<span class=pl-smi>CSSStyleDeclaration</span>} styles</span></td>
      </tr>
      <tr>
        <td id="L322" class="blob-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * Result of `getStyleComputedProperty` on the given element</span></td>
      </tr>
      <tr>
        <td id="L323" class="blob-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@param</span> {<span class=pl-smi>String</span>} axis - `x` or `y`</span></td>
      </tr>
      <tr>
        <td id="L324" class="blob-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@return</span> {<span class=pl-smi>number</span>} borders - The borders size of the given axis</span></td>
      </tr>
      <tr>
        <td id="L325" class="blob-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-code blob-code-inner js-file-line"><span class=pl-c> */</span></td>
      </tr>
      <tr>
        <td id="L326" class="blob-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L327" class="blob-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-code blob-code-inner js-file-line"><span class=pl-k>function</span> <span class=pl-en>getBordersSize</span><span class=pl-kos>(</span><span class=pl-s1>styles</span><span class=pl-kos>,</span> <span class=pl-s1>axis</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L328" class="blob-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>sideA</span> <span class=pl-c1>=</span> <span class=pl-s1>axis</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;x&#39;</span> ? <span class=pl-s>&#39;Left&#39;</span> : <span class=pl-s>&#39;Top&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L329" class="blob-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>sideB</span> <span class=pl-c1>=</span> <span class=pl-s1>sideA</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;Left&#39;</span> ? <span class=pl-s>&#39;Right&#39;</span> : <span class=pl-s>&#39;Bottom&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L330" class="blob-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L331" class="blob-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>return</span> <span class=pl-c1>+</span><span class=pl-s1>styles</span><span class=pl-kos>[</span><span class=pl-s>&#39;border&#39;</span> <span class=pl-c1>+</span> <span class=pl-s1>sideA</span> <span class=pl-c1>+</span> <span class=pl-s>&#39;Width&#39;</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-en>split</span><span class=pl-kos>(</span><span class=pl-s>&#39;px&#39;</span><span class=pl-kos>)</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span> <span class=pl-c1>+</span> <span class=pl-c1>+</span><span class=pl-s1>styles</span><span class=pl-kos>[</span><span class=pl-s>&#39;border&#39;</span> <span class=pl-c1>+</span> <span class=pl-s1>sideB</span> <span class=pl-c1>+</span> <span class=pl-s>&#39;Width&#39;</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-en>split</span><span class=pl-kos>(</span><span class=pl-s>&#39;px&#39;</span><span class=pl-kos>)</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L332" class="blob-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L333" class="blob-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L334" class="blob-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L335" class="blob-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * Tells if you are running Internet Explorer 10</span></td>
      </tr>
      <tr>
        <td id="L336" class="blob-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@method</span></span></td>
      </tr>
      <tr>
        <td id="L337" class="blob-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@memberof</span> Popper.Utils</span></td>
      </tr>
      <tr>
        <td id="L338" class="blob-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@returns</span> {<span class=pl-smi>Boolean</span>} isIE10</span></td>
      </tr>
      <tr>
        <td id="L339" class="blob-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-code blob-code-inner js-file-line"><span class=pl-c> */</span></td>
      </tr>
      <tr>
        <td id="L340" class="blob-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-code blob-code-inner js-file-line"><span class=pl-k>var</span> <span class=pl-s1>isIE10</span> <span class=pl-c1>=</span> undefined<span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L341" class="blob-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L342" class="blob-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-code blob-code-inner js-file-line"><span class=pl-k>var</span> <span class=pl-en>isIE10$1</span> <span class=pl-c1>=</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L343" class="blob-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>isIE10</span> <span class=pl-c1>===</span> undefined<span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L344" class="blob-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-code blob-code-inner js-file-line">    <span class=pl-s1>isIE10</span> <span class=pl-c1>=</span> <span class=pl-s1>navigator</span><span class=pl-kos>.</span><span class=pl-c1>appVersion</span><span class=pl-kos>.</span><span class=pl-en>indexOf</span><span class=pl-kos>(</span><span class=pl-s>&#39;MSIE 10&#39;</span><span class=pl-kos>)</span> !== <span class=pl-c1>-</span><span class=pl-c1>1</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L345" class="blob-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L346" class="blob-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>return</span> <span class=pl-s1>isIE10</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L347" class="blob-num js-line-number" data-line-number="347"></td>
        <td id="LC347" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L348" class="blob-num js-line-number" data-line-number="348"></td>
        <td id="LC348" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L349" class="blob-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-code blob-code-inner js-file-line"><span class=pl-k>function</span> <span class=pl-en>getSize</span><span class=pl-kos>(</span><span class=pl-s1>axis</span><span class=pl-kos>,</span> <span class=pl-s1>body</span><span class=pl-kos>,</span> <span class=pl-s1>html</span><span class=pl-kos>,</span> <span class=pl-s1>computedStyle</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L350" class="blob-num js-line-number" data-line-number="350"></td>
        <td id="LC350" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>return</span> <span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>max</span><span class=pl-kos>(</span><span class=pl-s1>body</span><span class=pl-kos>[</span><span class=pl-s>&#39;offset&#39;</span> <span class=pl-c1>+</span> <span class=pl-s1>axis</span><span class=pl-kos>]</span><span class=pl-kos>,</span> <span class=pl-s1>body</span><span class=pl-kos>[</span><span class=pl-s>&#39;scroll&#39;</span> <span class=pl-c1>+</span> <span class=pl-s1>axis</span><span class=pl-kos>]</span><span class=pl-kos>,</span> <span class=pl-s1>html</span><span class=pl-kos>[</span><span class=pl-s>&#39;client&#39;</span> <span class=pl-c1>+</span> <span class=pl-s1>axis</span><span class=pl-kos>]</span><span class=pl-kos>,</span> <span class=pl-s1>html</span><span class=pl-kos>[</span><span class=pl-s>&#39;offset&#39;</span> <span class=pl-c1>+</span> <span class=pl-s1>axis</span><span class=pl-kos>]</span><span class=pl-kos>,</span> <span class=pl-s1>html</span><span class=pl-kos>[</span><span class=pl-s>&#39;scroll&#39;</span> <span class=pl-c1>+</span> <span class=pl-s1>axis</span><span class=pl-kos>]</span><span class=pl-kos>,</span> <span class=pl-en>isIE10$1</span><span class=pl-kos>(</span><span class=pl-kos>)</span> ? <span class=pl-s1>html</span><span class=pl-kos>[</span><span class=pl-s>&#39;offset&#39;</span> <span class=pl-c1>+</span> <span class=pl-s1>axis</span><span class=pl-kos>]</span> <span class=pl-c1>+</span> <span class=pl-s1>computedStyle</span><span class=pl-kos>[</span><span class=pl-s>&#39;margin&#39;</span> <span class=pl-c1>+</span> <span class=pl-kos>(</span><span class=pl-s1>axis</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;Height&#39;</span> ? <span class=pl-s>&#39;Top&#39;</span> : <span class=pl-s>&#39;Left&#39;</span><span class=pl-kos>)</span><span class=pl-kos>]</span> <span class=pl-c1>+</span> <span class=pl-s1>computedStyle</span><span class=pl-kos>[</span><span class=pl-s>&#39;margin&#39;</span> <span class=pl-c1>+</span> <span class=pl-kos>(</span><span class=pl-s1>axis</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;Height&#39;</span> ? <span class=pl-s>&#39;Bottom&#39;</span> : <span class=pl-s>&#39;Right&#39;</span><span class=pl-kos>)</span><span class=pl-kos>]</span> : <span class=pl-c1>0</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L351" class="blob-num js-line-number" data-line-number="351"></td>
        <td id="LC351" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L352" class="blob-num js-line-number" data-line-number="352"></td>
        <td id="LC352" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L353" class="blob-num js-line-number" data-line-number="353"></td>
        <td id="LC353" class="blob-code blob-code-inner js-file-line"><span class=pl-k>function</span> <span class=pl-en>getWindowSizes</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L354" class="blob-num js-line-number" data-line-number="354"></td>
        <td id="LC354" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>body</span> <span class=pl-c1>=</span> <span class=pl-smi>window</span><span class=pl-kos>.</span><span class=pl-c1>document</span><span class=pl-kos>.</span><span class=pl-c1>body</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L355" class="blob-num js-line-number" data-line-number="355"></td>
        <td id="LC355" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>html</span> <span class=pl-c1>=</span> <span class=pl-smi>window</span><span class=pl-kos>.</span><span class=pl-c1>document</span><span class=pl-kos>.</span><span class=pl-c1>documentElement</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L356" class="blob-num js-line-number" data-line-number="356"></td>
        <td id="LC356" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>computedStyle</span> <span class=pl-c1>=</span> <span class=pl-en>isIE10$1</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-smi>window</span><span class=pl-kos>.</span><span class=pl-en>getComputedStyle</span><span class=pl-kos>(</span><span class=pl-s1>html</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L357" class="blob-num js-line-number" data-line-number="357"></td>
        <td id="LC357" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L358" class="blob-num js-line-number" data-line-number="358"></td>
        <td id="LC358" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>return</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L359" class="blob-num js-line-number" data-line-number="359"></td>
        <td id="LC359" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>height</span>: <span class=pl-en>getSize</span><span class=pl-kos>(</span><span class=pl-s>&#39;Height&#39;</span><span class=pl-kos>,</span> <span class=pl-s1>body</span><span class=pl-kos>,</span> <span class=pl-s1>html</span><span class=pl-kos>,</span> <span class=pl-s1>computedStyle</span><span class=pl-kos>)</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L360" class="blob-num js-line-number" data-line-number="360"></td>
        <td id="LC360" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>width</span>: <span class=pl-en>getSize</span><span class=pl-kos>(</span><span class=pl-s>&#39;Width&#39;</span><span class=pl-kos>,</span> <span class=pl-s1>body</span><span class=pl-kos>,</span> <span class=pl-s1>html</span><span class=pl-kos>,</span> <span class=pl-s1>computedStyle</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L361" class="blob-num js-line-number" data-line-number="361"></td>
        <td id="LC361" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L362" class="blob-num js-line-number" data-line-number="362"></td>
        <td id="LC362" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L363" class="blob-num js-line-number" data-line-number="363"></td>
        <td id="LC363" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L364" class="blob-num js-line-number" data-line-number="364"></td>
        <td id="LC364" class="blob-code blob-code-inner js-file-line"><span class=pl-k>var</span> <span class=pl-en>classCallCheck</span> <span class=pl-c1>=</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>instance</span><span class=pl-kos>,</span> <span class=pl-v>Constructor</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L365" class="blob-num js-line-number" data-line-number="365"></td>
        <td id="LC365" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-kos>(</span><span class=pl-s1>instance</span> <span class=pl-k>instanceof</span> <span class=pl-v>Constructor</span><span class=pl-kos>)</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L366" class="blob-num js-line-number" data-line-number="366"></td>
        <td id="LC366" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>throw</span> <span class=pl-k>new</span> <span class=pl-v>TypeError</span><span class=pl-kos>(</span><span class=pl-s>&quot;Cannot call a class as a function&quot;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L367" class="blob-num js-line-number" data-line-number="367"></td>
        <td id="LC367" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L368" class="blob-num js-line-number" data-line-number="368"></td>
        <td id="LC368" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L369" class="blob-num js-line-number" data-line-number="369"></td>
        <td id="LC369" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L370" class="blob-num js-line-number" data-line-number="370"></td>
        <td id="LC370" class="blob-code blob-code-inner js-file-line"><span class=pl-k>var</span> <span class=pl-s1>createClass</span> <span class=pl-c1>=</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L371" class="blob-num js-line-number" data-line-number="371"></td>
        <td id="LC371" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>function</span> <span class=pl-en>defineProperties</span><span class=pl-kos>(</span><span class=pl-s1>target</span><span class=pl-kos>,</span> <span class=pl-s1>props</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L372" class="blob-num js-line-number" data-line-number="372"></td>
        <td id="LC372" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>for</span> <span class=pl-kos>(</span><span class=pl-k>var</span> <span class=pl-s1>i</span> <span class=pl-c1>=</span> <span class=pl-c1>0</span><span class=pl-kos>;</span> <span class=pl-s1>i</span> <span class=pl-c1>&lt;</span> <span class=pl-s1>props</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>;</span> <span class=pl-s1>i</span><span class=pl-c1>++</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L373" class="blob-num js-line-number" data-line-number="373"></td>
        <td id="LC373" class="blob-code blob-code-inner js-file-line">      <span class=pl-k>var</span> <span class=pl-s1>descriptor</span> <span class=pl-c1>=</span> <span class=pl-s1>props</span><span class=pl-kos>[</span><span class=pl-s1>i</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L374" class="blob-num js-line-number" data-line-number="374"></td>
        <td id="LC374" class="blob-code blob-code-inner js-file-line">      <span class=pl-s1>descriptor</span><span class=pl-kos>.</span><span class=pl-c1>enumerable</span> <span class=pl-c1>=</span> <span class=pl-s1>descriptor</span><span class=pl-kos>.</span><span class=pl-c1>enumerable</span> <span class=pl-c1>||</span> <span class=pl-c1>false</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L375" class="blob-num js-line-number" data-line-number="375"></td>
        <td id="LC375" class="blob-code blob-code-inner js-file-line">      <span class=pl-s1>descriptor</span><span class=pl-kos>.</span><span class=pl-c1>configurable</span> <span class=pl-c1>=</span> <span class=pl-c1>true</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L376" class="blob-num js-line-number" data-line-number="376"></td>
        <td id="LC376" class="blob-code blob-code-inner js-file-line">      <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s>&quot;value&quot;</span> <span class=pl-k>in</span> <span class=pl-s1>descriptor</span><span class=pl-kos>)</span> <span class=pl-s1>descriptor</span><span class=pl-kos>.</span><span class=pl-c1>writable</span> <span class=pl-c1>=</span> <span class=pl-c1>true</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L377" class="blob-num js-line-number" data-line-number="377"></td>
        <td id="LC377" class="blob-code blob-code-inner js-file-line">      <span class=pl-v>Object</span><span class=pl-kos>.</span><span class=pl-en>defineProperty</span><span class=pl-kos>(</span><span class=pl-s1>target</span><span class=pl-kos>,</span> <span class=pl-s1>descriptor</span><span class=pl-kos>.</span><span class=pl-c1>key</span><span class=pl-kos>,</span> <span class=pl-s1>descriptor</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L378" class="blob-num js-line-number" data-line-number="378"></td>
        <td id="LC378" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L379" class="blob-num js-line-number" data-line-number="379"></td>
        <td id="LC379" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L380" class="blob-num js-line-number" data-line-number="380"></td>
        <td id="LC380" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L381" class="blob-num js-line-number" data-line-number="381"></td>
        <td id="LC381" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>return</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-v>Constructor</span><span class=pl-kos>,</span> <span class=pl-s1>protoProps</span><span class=pl-kos>,</span> <span class=pl-s1>staticProps</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L382" class="blob-num js-line-number" data-line-number="382"></td>
        <td id="LC382" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>protoProps</span><span class=pl-kos>)</span> <span class=pl-en>defineProperties</span><span class=pl-kos>(</span><span class=pl-v>Constructor</span><span class=pl-kos>.</span><span class=pl-c1>prototype</span><span class=pl-kos>,</span> <span class=pl-s1>protoProps</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L383" class="blob-num js-line-number" data-line-number="383"></td>
        <td id="LC383" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>staticProps</span><span class=pl-kos>)</span> <span class=pl-en>defineProperties</span><span class=pl-kos>(</span><span class=pl-v>Constructor</span><span class=pl-kos>,</span> <span class=pl-s1>staticProps</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L384" class="blob-num js-line-number" data-line-number="384"></td>
        <td id="LC384" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>return</span> <span class=pl-v>Constructor</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L385" class="blob-num js-line-number" data-line-number="385"></td>
        <td id="LC385" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L386" class="blob-num js-line-number" data-line-number="386"></td>
        <td id="LC386" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L387" class="blob-num js-line-number" data-line-number="387"></td>
        <td id="LC387" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L388" class="blob-num js-line-number" data-line-number="388"></td>
        <td id="LC388" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L389" class="blob-num js-line-number" data-line-number="389"></td>
        <td id="LC389" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L390" class="blob-num js-line-number" data-line-number="390"></td>
        <td id="LC390" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L391" class="blob-num js-line-number" data-line-number="391"></td>
        <td id="LC391" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L392" class="blob-num js-line-number" data-line-number="392"></td>
        <td id="LC392" class="blob-code blob-code-inner js-file-line"><span class=pl-k>var</span> <span class=pl-en>defineProperty</span> <span class=pl-c1>=</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>obj</span><span class=pl-kos>,</span> <span class=pl-s1>key</span><span class=pl-kos>,</span> <span class=pl-s1>value</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L393" class="blob-num js-line-number" data-line-number="393"></td>
        <td id="LC393" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>key</span> <span class=pl-k>in</span> <span class=pl-s1>obj</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L394" class="blob-num js-line-number" data-line-number="394"></td>
        <td id="LC394" class="blob-code blob-code-inner js-file-line">    <span class=pl-v>Object</span><span class=pl-kos>.</span><span class=pl-en>defineProperty</span><span class=pl-kos>(</span><span class=pl-s1>obj</span><span class=pl-kos>,</span> <span class=pl-s1>key</span><span class=pl-kos>,</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L395" class="blob-num js-line-number" data-line-number="395"></td>
        <td id="LC395" class="blob-code blob-code-inner js-file-line">      <span class=pl-c1>value</span>: <span class=pl-s1>value</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L396" class="blob-num js-line-number" data-line-number="396"></td>
        <td id="LC396" class="blob-code blob-code-inner js-file-line">      <span class=pl-c1>enumerable</span>: <span class=pl-c1>true</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L397" class="blob-num js-line-number" data-line-number="397"></td>
        <td id="LC397" class="blob-code blob-code-inner js-file-line">      <span class=pl-c1>configurable</span>: <span class=pl-c1>true</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L398" class="blob-num js-line-number" data-line-number="398"></td>
        <td id="LC398" class="blob-code blob-code-inner js-file-line">      <span class=pl-c1>writable</span>: <span class=pl-c1>true</span></td>
      </tr>
      <tr>
        <td id="L399" class="blob-num js-line-number" data-line-number="399"></td>
        <td id="LC399" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L400" class="blob-num js-line-number" data-line-number="400"></td>
        <td id="LC400" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L401" class="blob-num js-line-number" data-line-number="401"></td>
        <td id="LC401" class="blob-code blob-code-inner js-file-line">    <span class=pl-s1>obj</span><span class=pl-kos>[</span><span class=pl-s1>key</span><span class=pl-kos>]</span> <span class=pl-c1>=</span> <span class=pl-s1>value</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L402" class="blob-num js-line-number" data-line-number="402"></td>
        <td id="LC402" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L403" class="blob-num js-line-number" data-line-number="403"></td>
        <td id="LC403" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L404" class="blob-num js-line-number" data-line-number="404"></td>
        <td id="LC404" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>return</span> <span class=pl-s1>obj</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L405" class="blob-num js-line-number" data-line-number="405"></td>
        <td id="LC405" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L406" class="blob-num js-line-number" data-line-number="406"></td>
        <td id="LC406" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L407" class="blob-num js-line-number" data-line-number="407"></td>
        <td id="LC407" class="blob-code blob-code-inner js-file-line"><span class=pl-k>var</span> <span class=pl-s1>_extends</span> <span class=pl-c1>=</span> <span class=pl-v>Object</span><span class=pl-kos>.</span><span class=pl-c1>assign</span> <span class=pl-c1>||</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>target</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L408" class="blob-num js-line-number" data-line-number="408"></td>
        <td id="LC408" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>for</span> <span class=pl-kos>(</span><span class=pl-k>var</span> <span class=pl-s1>i</span> <span class=pl-c1>=</span> <span class=pl-c1>1</span><span class=pl-kos>;</span> <span class=pl-s1>i</span> <span class=pl-c1>&lt;</span> <span class=pl-smi>arguments</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>;</span> <span class=pl-s1>i</span><span class=pl-c1>++</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L409" class="blob-num js-line-number" data-line-number="409"></td>
        <td id="LC409" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>var</span> <span class=pl-s1>source</span> <span class=pl-c1>=</span> <span class=pl-smi>arguments</span><span class=pl-kos>[</span><span class=pl-s1>i</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L410" class="blob-num js-line-number" data-line-number="410"></td>
        <td id="LC410" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L411" class="blob-num js-line-number" data-line-number="411"></td>
        <td id="LC411" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>for</span> <span class=pl-kos>(</span><span class=pl-k>var</span> <span class=pl-s1>key</span> <span class=pl-k>in</span> <span class=pl-s1>source</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L412" class="blob-num js-line-number" data-line-number="412"></td>
        <td id="LC412" class="blob-code blob-code-inner js-file-line">      <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-v>Object</span><span class=pl-kos>.</span><span class=pl-c1>prototype</span><span class=pl-kos>.</span><span class=pl-c1>hasOwnProperty</span><span class=pl-kos>.</span><span class=pl-en>call</span><span class=pl-kos>(</span><span class=pl-s1>source</span><span class=pl-kos>,</span> <span class=pl-s1>key</span><span class=pl-kos>)</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L413" class="blob-num js-line-number" data-line-number="413"></td>
        <td id="LC413" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>target</span><span class=pl-kos>[</span><span class=pl-s1>key</span><span class=pl-kos>]</span> <span class=pl-c1>=</span> <span class=pl-s1>source</span><span class=pl-kos>[</span><span class=pl-s1>key</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L414" class="blob-num js-line-number" data-line-number="414"></td>
        <td id="LC414" class="blob-code blob-code-inner js-file-line">      <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L415" class="blob-num js-line-number" data-line-number="415"></td>
        <td id="LC415" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L416" class="blob-num js-line-number" data-line-number="416"></td>
        <td id="LC416" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L417" class="blob-num js-line-number" data-line-number="417"></td>
        <td id="LC417" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L418" class="blob-num js-line-number" data-line-number="418"></td>
        <td id="LC418" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>return</span> <span class=pl-s1>target</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L419" class="blob-num js-line-number" data-line-number="419"></td>
        <td id="LC419" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L420" class="blob-num js-line-number" data-line-number="420"></td>
        <td id="LC420" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L421" class="blob-num js-line-number" data-line-number="421"></td>
        <td id="LC421" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L422" class="blob-num js-line-number" data-line-number="422"></td>
        <td id="LC422" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * Given element offsets, generate an output similar to getBoundingClientRect</span></td>
      </tr>
      <tr>
        <td id="L423" class="blob-num js-line-number" data-line-number="423"></td>
        <td id="LC423" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@method</span></span></td>
      </tr>
      <tr>
        <td id="L424" class="blob-num js-line-number" data-line-number="424"></td>
        <td id="LC424" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@memberof</span> Popper.Utils</span></td>
      </tr>
      <tr>
        <td id="L425" class="blob-num js-line-number" data-line-number="425"></td>
        <td id="LC425" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@argument</span> {Object} offsets</span></td>
      </tr>
      <tr>
        <td id="L426" class="blob-num js-line-number" data-line-number="426"></td>
        <td id="LC426" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@returns</span> {<span class=pl-smi>Object</span>} ClientRect like output</span></td>
      </tr>
      <tr>
        <td id="L427" class="blob-num js-line-number" data-line-number="427"></td>
        <td id="LC427" class="blob-code blob-code-inner js-file-line"><span class=pl-c> */</span></td>
      </tr>
      <tr>
        <td id="L428" class="blob-num js-line-number" data-line-number="428"></td>
        <td id="LC428" class="blob-code blob-code-inner js-file-line"><span class=pl-k>function</span> <span class=pl-en>getClientRect</span><span class=pl-kos>(</span><span class=pl-s1>offsets</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L429" class="blob-num js-line-number" data-line-number="429"></td>
        <td id="LC429" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>return</span> <span class=pl-s1>_extends</span><span class=pl-kos>(</span><span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>,</span> <span class=pl-s1>offsets</span><span class=pl-kos>,</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L430" class="blob-num js-line-number" data-line-number="430"></td>
        <td id="LC430" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>right</span>: <span class=pl-s1>offsets</span><span class=pl-kos>.</span><span class=pl-c1>left</span> <span class=pl-c1>+</span> <span class=pl-s1>offsets</span><span class=pl-kos>.</span><span class=pl-c1>width</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L431" class="blob-num js-line-number" data-line-number="431"></td>
        <td id="LC431" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>bottom</span>: <span class=pl-s1>offsets</span><span class=pl-kos>.</span><span class=pl-c1>top</span> <span class=pl-c1>+</span> <span class=pl-s1>offsets</span><span class=pl-kos>.</span><span class=pl-c1>height</span></td>
      </tr>
      <tr>
        <td id="L432" class="blob-num js-line-number" data-line-number="432"></td>
        <td id="LC432" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L433" class="blob-num js-line-number" data-line-number="433"></td>
        <td id="LC433" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L434" class="blob-num js-line-number" data-line-number="434"></td>
        <td id="LC434" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L435" class="blob-num js-line-number" data-line-number="435"></td>
        <td id="LC435" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L436" class="blob-num js-line-number" data-line-number="436"></td>
        <td id="LC436" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * Get bounding client rect of given element</span></td>
      </tr>
      <tr>
        <td id="L437" class="blob-num js-line-number" data-line-number="437"></td>
        <td id="LC437" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@method</span></span></td>
      </tr>
      <tr>
        <td id="L438" class="blob-num js-line-number" data-line-number="438"></td>
        <td id="LC438" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@memberof</span> Popper.Utils</span></td>
      </tr>
      <tr>
        <td id="L439" class="blob-num js-line-number" data-line-number="439"></td>
        <td id="LC439" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@param</span> {<span class=pl-smi>HTMLElement</span>} element</span></td>
      </tr>
      <tr>
        <td id="L440" class="blob-num js-line-number" data-line-number="440"></td>
        <td id="LC440" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@return</span> {<span class=pl-smi>Object</span>} client rect</span></td>
      </tr>
      <tr>
        <td id="L441" class="blob-num js-line-number" data-line-number="441"></td>
        <td id="LC441" class="blob-code blob-code-inner js-file-line"><span class=pl-c> */</span></td>
      </tr>
      <tr>
        <td id="L442" class="blob-num js-line-number" data-line-number="442"></td>
        <td id="LC442" class="blob-code blob-code-inner js-file-line"><span class=pl-k>function</span> <span class=pl-en>getBoundingClientRect</span><span class=pl-kos>(</span><span class=pl-s1>element</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L443" class="blob-num js-line-number" data-line-number="443"></td>
        <td id="LC443" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>rect</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L444" class="blob-num js-line-number" data-line-number="444"></td>
        <td id="LC444" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L445" class="blob-num js-line-number" data-line-number="445"></td>
        <td id="LC445" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// IE10 10 FIX: Please, don&#39;t ask, the element isn&#39;t</span></td>
      </tr>
      <tr>
        <td id="L446" class="blob-num js-line-number" data-line-number="446"></td>
        <td id="LC446" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// considered in DOM in some circumstances...</span></td>
      </tr>
      <tr>
        <td id="L447" class="blob-num js-line-number" data-line-number="447"></td>
        <td id="LC447" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// This isn&#39;t reproducible in IE10 compatibility mode of IE11</span></td>
      </tr>
      <tr>
        <td id="L448" class="blob-num js-line-number" data-line-number="448"></td>
        <td id="LC448" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-en>isIE10$1</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L449" class="blob-num js-line-number" data-line-number="449"></td>
        <td id="LC449" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>try</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L450" class="blob-num js-line-number" data-line-number="450"></td>
        <td id="LC450" class="blob-code blob-code-inner js-file-line">      <span class=pl-s1>rect</span> <span class=pl-c1>=</span> <span class=pl-s1>element</span><span class=pl-kos>.</span><span class=pl-en>getBoundingClientRect</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L451" class="blob-num js-line-number" data-line-number="451"></td>
        <td id="LC451" class="blob-code blob-code-inner js-file-line">      <span class=pl-k>var</span> <span class=pl-s1>scrollTop</span> <span class=pl-c1>=</span> <span class=pl-en>getScroll</span><span class=pl-kos>(</span><span class=pl-s1>element</span><span class=pl-kos>,</span> <span class=pl-s>&#39;top&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L452" class="blob-num js-line-number" data-line-number="452"></td>
        <td id="LC452" class="blob-code blob-code-inner js-file-line">      <span class=pl-k>var</span> <span class=pl-s1>scrollLeft</span> <span class=pl-c1>=</span> <span class=pl-en>getScroll</span><span class=pl-kos>(</span><span class=pl-s1>element</span><span class=pl-kos>,</span> <span class=pl-s>&#39;left&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L453" class="blob-num js-line-number" data-line-number="453"></td>
        <td id="LC453" class="blob-code blob-code-inner js-file-line">      <span class=pl-s1>rect</span><span class=pl-kos>.</span><span class=pl-c1>top</span> <span class=pl-c1>+=</span> <span class=pl-s1>scrollTop</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L454" class="blob-num js-line-number" data-line-number="454"></td>
        <td id="LC454" class="blob-code blob-code-inner js-file-line">      <span class=pl-s1>rect</span><span class=pl-kos>.</span><span class=pl-c1>left</span> <span class=pl-c1>+=</span> <span class=pl-s1>scrollLeft</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L455" class="blob-num js-line-number" data-line-number="455"></td>
        <td id="LC455" class="blob-code blob-code-inner js-file-line">      <span class=pl-s1>rect</span><span class=pl-kos>.</span><span class=pl-c1>bottom</span> <span class=pl-c1>+=</span> <span class=pl-s1>scrollTop</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L456" class="blob-num js-line-number" data-line-number="456"></td>
        <td id="LC456" class="blob-code blob-code-inner js-file-line">      <span class=pl-s1>rect</span><span class=pl-kos>.</span><span class=pl-c1>right</span> <span class=pl-c1>+=</span> <span class=pl-s1>scrollLeft</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L457" class="blob-num js-line-number" data-line-number="457"></td>
        <td id="LC457" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span> <span class=pl-k>catch</span> <span class=pl-kos>(</span><span class=pl-s1>err</span><span class=pl-kos>)</span> <span class=pl-kos>{</span><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L458" class="blob-num js-line-number" data-line-number="458"></td>
        <td id="LC458" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L459" class="blob-num js-line-number" data-line-number="459"></td>
        <td id="LC459" class="blob-code blob-code-inner js-file-line">    <span class=pl-s1>rect</span> <span class=pl-c1>=</span> <span class=pl-s1>element</span><span class=pl-kos>.</span><span class=pl-en>getBoundingClientRect</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L460" class="blob-num js-line-number" data-line-number="460"></td>
        <td id="LC460" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L461" class="blob-num js-line-number" data-line-number="461"></td>
        <td id="LC461" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L462" class="blob-num js-line-number" data-line-number="462"></td>
        <td id="LC462" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>result</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L463" class="blob-num js-line-number" data-line-number="463"></td>
        <td id="LC463" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>left</span>: <span class=pl-s1>rect</span><span class=pl-kos>.</span><span class=pl-c1>left</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L464" class="blob-num js-line-number" data-line-number="464"></td>
        <td id="LC464" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>top</span>: <span class=pl-s1>rect</span><span class=pl-kos>.</span><span class=pl-c1>top</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L465" class="blob-num js-line-number" data-line-number="465"></td>
        <td id="LC465" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>width</span>: <span class=pl-s1>rect</span><span class=pl-kos>.</span><span class=pl-c1>right</span> <span class=pl-c1>-</span> <span class=pl-s1>rect</span><span class=pl-kos>.</span><span class=pl-c1>left</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L466" class="blob-num js-line-number" data-line-number="466"></td>
        <td id="LC466" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>height</span>: <span class=pl-s1>rect</span><span class=pl-kos>.</span><span class=pl-c1>bottom</span> <span class=pl-c1>-</span> <span class=pl-s1>rect</span><span class=pl-kos>.</span><span class=pl-c1>top</span></td>
      </tr>
      <tr>
        <td id="L467" class="blob-num js-line-number" data-line-number="467"></td>
        <td id="LC467" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L468" class="blob-num js-line-number" data-line-number="468"></td>
        <td id="LC468" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L469" class="blob-num js-line-number" data-line-number="469"></td>
        <td id="LC469" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// subtract scrollbar size from sizes</span></td>
      </tr>
      <tr>
        <td id="L470" class="blob-num js-line-number" data-line-number="470"></td>
        <td id="LC470" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>sizes</span> <span class=pl-c1>=</span> <span class=pl-s1>element</span><span class=pl-kos>.</span><span class=pl-c1>nodeName</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;HTML&#39;</span> ? <span class=pl-en>getWindowSizes</span><span class=pl-kos>(</span><span class=pl-kos>)</span> : <span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L471" class="blob-num js-line-number" data-line-number="471"></td>
        <td id="LC471" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>width</span> <span class=pl-c1>=</span> <span class=pl-s1>sizes</span><span class=pl-kos>.</span><span class=pl-c1>width</span> <span class=pl-c1>||</span> <span class=pl-s1>element</span><span class=pl-kos>.</span><span class=pl-c1>clientWidth</span> <span class=pl-c1>||</span> <span class=pl-s1>result</span><span class=pl-kos>.</span><span class=pl-c1>right</span> <span class=pl-c1>-</span> <span class=pl-s1>result</span><span class=pl-kos>.</span><span class=pl-c1>left</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L472" class="blob-num js-line-number" data-line-number="472"></td>
        <td id="LC472" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>height</span> <span class=pl-c1>=</span> <span class=pl-s1>sizes</span><span class=pl-kos>.</span><span class=pl-c1>height</span> <span class=pl-c1>||</span> <span class=pl-s1>element</span><span class=pl-kos>.</span><span class=pl-c1>clientHeight</span> <span class=pl-c1>||</span> <span class=pl-s1>result</span><span class=pl-kos>.</span><span class=pl-c1>bottom</span> <span class=pl-c1>-</span> <span class=pl-s1>result</span><span class=pl-kos>.</span><span class=pl-c1>top</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L473" class="blob-num js-line-number" data-line-number="473"></td>
        <td id="LC473" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L474" class="blob-num js-line-number" data-line-number="474"></td>
        <td id="LC474" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>horizScrollbar</span> <span class=pl-c1>=</span> <span class=pl-s1>element</span><span class=pl-kos>.</span><span class=pl-c1>offsetWidth</span> <span class=pl-c1>-</span> <span class=pl-s1>width</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L475" class="blob-num js-line-number" data-line-number="475"></td>
        <td id="LC475" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>vertScrollbar</span> <span class=pl-c1>=</span> <span class=pl-s1>element</span><span class=pl-kos>.</span><span class=pl-c1>offsetHeight</span> <span class=pl-c1>-</span> <span class=pl-s1>height</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L476" class="blob-num js-line-number" data-line-number="476"></td>
        <td id="LC476" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L477" class="blob-num js-line-number" data-line-number="477"></td>
        <td id="LC477" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// if an hypothetical scrollbar is detected, we must be sure it&#39;s not a `border`</span></td>
      </tr>
      <tr>
        <td id="L478" class="blob-num js-line-number" data-line-number="478"></td>
        <td id="LC478" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// we make this check conditional for performance reasons</span></td>
      </tr>
      <tr>
        <td id="L479" class="blob-num js-line-number" data-line-number="479"></td>
        <td id="LC479" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>horizScrollbar</span> <span class=pl-c1>||</span> <span class=pl-s1>vertScrollbar</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L480" class="blob-num js-line-number" data-line-number="480"></td>
        <td id="LC480" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>var</span> <span class=pl-s1>styles</span> <span class=pl-c1>=</span> <span class=pl-en>getStyleComputedProperty</span><span class=pl-kos>(</span><span class=pl-s1>element</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L481" class="blob-num js-line-number" data-line-number="481"></td>
        <td id="LC481" class="blob-code blob-code-inner js-file-line">    <span class=pl-s1>horizScrollbar</span> <span class=pl-c1>-=</span> <span class=pl-en>getBordersSize</span><span class=pl-kos>(</span><span class=pl-s1>styles</span><span class=pl-kos>,</span> <span class=pl-s>&#39;x&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L482" class="blob-num js-line-number" data-line-number="482"></td>
        <td id="LC482" class="blob-code blob-code-inner js-file-line">    <span class=pl-s1>vertScrollbar</span> <span class=pl-c1>-=</span> <span class=pl-en>getBordersSize</span><span class=pl-kos>(</span><span class=pl-s1>styles</span><span class=pl-kos>,</span> <span class=pl-s>&#39;y&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L483" class="blob-num js-line-number" data-line-number="483"></td>
        <td id="LC483" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L484" class="blob-num js-line-number" data-line-number="484"></td>
        <td id="LC484" class="blob-code blob-code-inner js-file-line">    <span class=pl-s1>result</span><span class=pl-kos>.</span><span class=pl-c1>width</span> <span class=pl-c1>-=</span> <span class=pl-s1>horizScrollbar</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L485" class="blob-num js-line-number" data-line-number="485"></td>
        <td id="LC485" class="blob-code blob-code-inner js-file-line">    <span class=pl-s1>result</span><span class=pl-kos>.</span><span class=pl-c1>height</span> <span class=pl-c1>-=</span> <span class=pl-s1>vertScrollbar</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L486" class="blob-num js-line-number" data-line-number="486"></td>
        <td id="LC486" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L487" class="blob-num js-line-number" data-line-number="487"></td>
        <td id="LC487" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L488" class="blob-num js-line-number" data-line-number="488"></td>
        <td id="LC488" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>return</span> <span class=pl-en>getClientRect</span><span class=pl-kos>(</span><span class=pl-s1>result</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L489" class="blob-num js-line-number" data-line-number="489"></td>
        <td id="LC489" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L490" class="blob-num js-line-number" data-line-number="490"></td>
        <td id="LC490" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L491" class="blob-num js-line-number" data-line-number="491"></td>
        <td id="LC491" class="blob-code blob-code-inner js-file-line"><span class=pl-k>function</span> <span class=pl-en>getOffsetRectRelativeToArbitraryNode</span><span class=pl-kos>(</span><span class=pl-s1>children</span><span class=pl-kos>,</span> <span class=pl-s1>parent</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L492" class="blob-num js-line-number" data-line-number="492"></td>
        <td id="LC492" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>isIE10</span> <span class=pl-c1>=</span> <span class=pl-en>isIE10$1</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L493" class="blob-num js-line-number" data-line-number="493"></td>
        <td id="LC493" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>isHTML</span> <span class=pl-c1>=</span> <span class=pl-s1>parent</span><span class=pl-kos>.</span><span class=pl-c1>nodeName</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;HTML&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L494" class="blob-num js-line-number" data-line-number="494"></td>
        <td id="LC494" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>childrenRect</span> <span class=pl-c1>=</span> <span class=pl-en>getBoundingClientRect</span><span class=pl-kos>(</span><span class=pl-s1>children</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L495" class="blob-num js-line-number" data-line-number="495"></td>
        <td id="LC495" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>parentRect</span> <span class=pl-c1>=</span> <span class=pl-en>getBoundingClientRect</span><span class=pl-kos>(</span><span class=pl-s1>parent</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L496" class="blob-num js-line-number" data-line-number="496"></td>
        <td id="LC496" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>scrollParent</span> <span class=pl-c1>=</span> <span class=pl-en>getScrollParent</span><span class=pl-kos>(</span><span class=pl-s1>children</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L497" class="blob-num js-line-number" data-line-number="497"></td>
        <td id="LC497" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L498" class="blob-num js-line-number" data-line-number="498"></td>
        <td id="LC498" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>styles</span> <span class=pl-c1>=</span> <span class=pl-en>getStyleComputedProperty</span><span class=pl-kos>(</span><span class=pl-s1>parent</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L499" class="blob-num js-line-number" data-line-number="499"></td>
        <td id="LC499" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>borderTopWidth</span> <span class=pl-c1>=</span> <span class=pl-c1>+</span><span class=pl-s1>styles</span><span class=pl-kos>.</span><span class=pl-c1>borderTopWidth</span><span class=pl-kos>.</span><span class=pl-en>split</span><span class=pl-kos>(</span><span class=pl-s>&#39;px&#39;</span><span class=pl-kos>)</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L500" class="blob-num js-line-number" data-line-number="500"></td>
        <td id="LC500" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>borderLeftWidth</span> <span class=pl-c1>=</span> <span class=pl-c1>+</span><span class=pl-s1>styles</span><span class=pl-kos>.</span><span class=pl-c1>borderLeftWidth</span><span class=pl-kos>.</span><span class=pl-en>split</span><span class=pl-kos>(</span><span class=pl-s>&#39;px&#39;</span><span class=pl-kos>)</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L501" class="blob-num js-line-number" data-line-number="501"></td>
        <td id="LC501" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L502" class="blob-num js-line-number" data-line-number="502"></td>
        <td id="LC502" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>offsets</span> <span class=pl-c1>=</span> <span class=pl-en>getClientRect</span><span class=pl-kos>(</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L503" class="blob-num js-line-number" data-line-number="503"></td>
        <td id="LC503" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>top</span>: <span class=pl-s1>childrenRect</span><span class=pl-kos>.</span><span class=pl-c1>top</span> <span class=pl-c1>-</span> <span class=pl-s1>parentRect</span><span class=pl-kos>.</span><span class=pl-c1>top</span> <span class=pl-c1>-</span> <span class=pl-s1>borderTopWidth</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L504" class="blob-num js-line-number" data-line-number="504"></td>
        <td id="LC504" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>left</span>: <span class=pl-s1>childrenRect</span><span class=pl-kos>.</span><span class=pl-c1>left</span> <span class=pl-c1>-</span> <span class=pl-s1>parentRect</span><span class=pl-kos>.</span><span class=pl-c1>left</span> <span class=pl-c1>-</span> <span class=pl-s1>borderLeftWidth</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L505" class="blob-num js-line-number" data-line-number="505"></td>
        <td id="LC505" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>width</span>: <span class=pl-s1>childrenRect</span><span class=pl-kos>.</span><span class=pl-c1>width</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L506" class="blob-num js-line-number" data-line-number="506"></td>
        <td id="LC506" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>height</span>: <span class=pl-s1>childrenRect</span><span class=pl-kos>.</span><span class=pl-c1>height</span></td>
      </tr>
      <tr>
        <td id="L507" class="blob-num js-line-number" data-line-number="507"></td>
        <td id="LC507" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L508" class="blob-num js-line-number" data-line-number="508"></td>
        <td id="LC508" class="blob-code blob-code-inner js-file-line">  <span class=pl-s1>offsets</span><span class=pl-kos>.</span><span class=pl-c1>marginTop</span> <span class=pl-c1>=</span> <span class=pl-c1>0</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L509" class="blob-num js-line-number" data-line-number="509"></td>
        <td id="LC509" class="blob-code blob-code-inner js-file-line">  <span class=pl-s1>offsets</span><span class=pl-kos>.</span><span class=pl-c1>marginLeft</span> <span class=pl-c1>=</span> <span class=pl-c1>0</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L510" class="blob-num js-line-number" data-line-number="510"></td>
        <td id="LC510" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L511" class="blob-num js-line-number" data-line-number="511"></td>
        <td id="LC511" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// Subtract margins of documentElement in case it&#39;s being used as parent</span></td>
      </tr>
      <tr>
        <td id="L512" class="blob-num js-line-number" data-line-number="512"></td>
        <td id="LC512" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// we do this only on HTML because it&#39;s the only element that behaves</span></td>
      </tr>
      <tr>
        <td id="L513" class="blob-num js-line-number" data-line-number="513"></td>
        <td id="LC513" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// differently when margins are applied to it. The margins are included in</span></td>
      </tr>
      <tr>
        <td id="L514" class="blob-num js-line-number" data-line-number="514"></td>
        <td id="LC514" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// the box of the documentElement, in the other cases not.</span></td>
      </tr>
      <tr>
        <td id="L515" class="blob-num js-line-number" data-line-number="515"></td>
        <td id="LC515" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-s1>isIE10</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>isHTML</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L516" class="blob-num js-line-number" data-line-number="516"></td>
        <td id="LC516" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>var</span> <span class=pl-s1>marginTop</span> <span class=pl-c1>=</span> <span class=pl-c1>+</span><span class=pl-s1>styles</span><span class=pl-kos>.</span><span class=pl-c1>marginTop</span><span class=pl-kos>.</span><span class=pl-en>split</span><span class=pl-kos>(</span><span class=pl-s>&#39;px&#39;</span><span class=pl-kos>)</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L517" class="blob-num js-line-number" data-line-number="517"></td>
        <td id="LC517" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>var</span> <span class=pl-s1>marginLeft</span> <span class=pl-c1>=</span> <span class=pl-c1>+</span><span class=pl-s1>styles</span><span class=pl-kos>.</span><span class=pl-c1>marginLeft</span><span class=pl-kos>.</span><span class=pl-en>split</span><span class=pl-kos>(</span><span class=pl-s>&#39;px&#39;</span><span class=pl-kos>)</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L518" class="blob-num js-line-number" data-line-number="518"></td>
        <td id="LC518" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L519" class="blob-num js-line-number" data-line-number="519"></td>
        <td id="LC519" class="blob-code blob-code-inner js-file-line">    <span class=pl-s1>offsets</span><span class=pl-kos>.</span><span class=pl-c1>top</span> <span class=pl-c1>-=</span> <span class=pl-s1>borderTopWidth</span> <span class=pl-c1>-</span> <span class=pl-s1>marginTop</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L520" class="blob-num js-line-number" data-line-number="520"></td>
        <td id="LC520" class="blob-code blob-code-inner js-file-line">    <span class=pl-s1>offsets</span><span class=pl-kos>.</span><span class=pl-c1>bottom</span> <span class=pl-c1>-=</span> <span class=pl-s1>borderTopWidth</span> <span class=pl-c1>-</span> <span class=pl-s1>marginTop</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L521" class="blob-num js-line-number" data-line-number="521"></td>
        <td id="LC521" class="blob-code blob-code-inner js-file-line">    <span class=pl-s1>offsets</span><span class=pl-kos>.</span><span class=pl-c1>left</span> <span class=pl-c1>-=</span> <span class=pl-s1>borderLeftWidth</span> <span class=pl-c1>-</span> <span class=pl-s1>marginLeft</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L522" class="blob-num js-line-number" data-line-number="522"></td>
        <td id="LC522" class="blob-code blob-code-inner js-file-line">    <span class=pl-s1>offsets</span><span class=pl-kos>.</span><span class=pl-c1>right</span> <span class=pl-c1>-=</span> <span class=pl-s1>borderLeftWidth</span> <span class=pl-c1>-</span> <span class=pl-s1>marginLeft</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L523" class="blob-num js-line-number" data-line-number="523"></td>
        <td id="LC523" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L524" class="blob-num js-line-number" data-line-number="524"></td>
        <td id="LC524" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>// Attach marginTop and marginLeft because in some circumstances we may need them</span></td>
      </tr>
      <tr>
        <td id="L525" class="blob-num js-line-number" data-line-number="525"></td>
        <td id="LC525" class="blob-code blob-code-inner js-file-line">    <span class=pl-s1>offsets</span><span class=pl-kos>.</span><span class=pl-c1>marginTop</span> <span class=pl-c1>=</span> <span class=pl-s1>marginTop</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L526" class="blob-num js-line-number" data-line-number="526"></td>
        <td id="LC526" class="blob-code blob-code-inner js-file-line">    <span class=pl-s1>offsets</span><span class=pl-kos>.</span><span class=pl-c1>marginLeft</span> <span class=pl-c1>=</span> <span class=pl-s1>marginLeft</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L527" class="blob-num js-line-number" data-line-number="527"></td>
        <td id="LC527" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L528" class="blob-num js-line-number" data-line-number="528"></td>
        <td id="LC528" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L529" class="blob-num js-line-number" data-line-number="529"></td>
        <td id="LC529" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>isIE10</span> ? <span class=pl-s1>parent</span><span class=pl-kos>.</span><span class=pl-en>contains</span><span class=pl-kos>(</span><span class=pl-s1>scrollParent</span><span class=pl-kos>)</span> : <span class=pl-s1>parent</span> <span class=pl-c1>===</span> <span class=pl-s1>scrollParent</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>scrollParent</span><span class=pl-kos>.</span><span class=pl-c1>nodeName</span> !== <span class=pl-s>&#39;BODY&#39;</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L530" class="blob-num js-line-number" data-line-number="530"></td>
        <td id="LC530" class="blob-code blob-code-inner js-file-line">    <span class=pl-s1>offsets</span> <span class=pl-c1>=</span> <span class=pl-en>includeScroll</span><span class=pl-kos>(</span><span class=pl-s1>offsets</span><span class=pl-kos>,</span> <span class=pl-s1>parent</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L531" class="blob-num js-line-number" data-line-number="531"></td>
        <td id="LC531" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L532" class="blob-num js-line-number" data-line-number="532"></td>
        <td id="LC532" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L533" class="blob-num js-line-number" data-line-number="533"></td>
        <td id="LC533" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>return</span> <span class=pl-s1>offsets</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L534" class="blob-num js-line-number" data-line-number="534"></td>
        <td id="LC534" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L535" class="blob-num js-line-number" data-line-number="535"></td>
        <td id="LC535" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L536" class="blob-num js-line-number" data-line-number="536"></td>
        <td id="LC536" class="blob-code blob-code-inner js-file-line"><span class=pl-k>function</span> <span class=pl-en>getViewportOffsetRectRelativeToArtbitraryNode</span><span class=pl-kos>(</span><span class=pl-s1>element</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L537" class="blob-num js-line-number" data-line-number="537"></td>
        <td id="LC537" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>html</span> <span class=pl-c1>=</span> <span class=pl-smi>window</span><span class=pl-kos>.</span><span class=pl-c1>document</span><span class=pl-kos>.</span><span class=pl-c1>documentElement</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L538" class="blob-num js-line-number" data-line-number="538"></td>
        <td id="LC538" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>relativeOffset</span> <span class=pl-c1>=</span> <span class=pl-en>getOffsetRectRelativeToArbitraryNode</span><span class=pl-kos>(</span><span class=pl-s1>element</span><span class=pl-kos>,</span> <span class=pl-s1>html</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L539" class="blob-num js-line-number" data-line-number="539"></td>
        <td id="LC539" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>width</span> <span class=pl-c1>=</span> <span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>max</span><span class=pl-kos>(</span><span class=pl-s1>html</span><span class=pl-kos>.</span><span class=pl-c1>clientWidth</span><span class=pl-kos>,</span> <span class=pl-smi>window</span><span class=pl-kos>.</span><span class=pl-c1>innerWidth</span> <span class=pl-c1>||</span> <span class=pl-c1>0</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L540" class="blob-num js-line-number" data-line-number="540"></td>
        <td id="LC540" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>height</span> <span class=pl-c1>=</span> <span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>max</span><span class=pl-kos>(</span><span class=pl-s1>html</span><span class=pl-kos>.</span><span class=pl-c1>clientHeight</span><span class=pl-kos>,</span> <span class=pl-smi>window</span><span class=pl-kos>.</span><span class=pl-c1>innerHeight</span> <span class=pl-c1>||</span> <span class=pl-c1>0</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L541" class="blob-num js-line-number" data-line-number="541"></td>
        <td id="LC541" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L542" class="blob-num js-line-number" data-line-number="542"></td>
        <td id="LC542" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>scrollTop</span> <span class=pl-c1>=</span> <span class=pl-en>getScroll</span><span class=pl-kos>(</span><span class=pl-s1>html</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L543" class="blob-num js-line-number" data-line-number="543"></td>
        <td id="LC543" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>scrollLeft</span> <span class=pl-c1>=</span> <span class=pl-en>getScroll</span><span class=pl-kos>(</span><span class=pl-s1>html</span><span class=pl-kos>,</span> <span class=pl-s>&#39;left&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L544" class="blob-num js-line-number" data-line-number="544"></td>
        <td id="LC544" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L545" class="blob-num js-line-number" data-line-number="545"></td>
        <td id="LC545" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>offset</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L546" class="blob-num js-line-number" data-line-number="546"></td>
        <td id="LC546" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>top</span>: <span class=pl-s1>scrollTop</span> <span class=pl-c1>-</span> <span class=pl-s1>relativeOffset</span><span class=pl-kos>.</span><span class=pl-c1>top</span> <span class=pl-c1>+</span> <span class=pl-s1>relativeOffset</span><span class=pl-kos>.</span><span class=pl-c1>marginTop</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L547" class="blob-num js-line-number" data-line-number="547"></td>
        <td id="LC547" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>left</span>: <span class=pl-s1>scrollLeft</span> <span class=pl-c1>-</span> <span class=pl-s1>relativeOffset</span><span class=pl-kos>.</span><span class=pl-c1>left</span> <span class=pl-c1>+</span> <span class=pl-s1>relativeOffset</span><span class=pl-kos>.</span><span class=pl-c1>marginLeft</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L548" class="blob-num js-line-number" data-line-number="548"></td>
        <td id="LC548" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>width</span>: <span class=pl-s1>width</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L549" class="blob-num js-line-number" data-line-number="549"></td>
        <td id="LC549" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>height</span>: <span class=pl-s1>height</span></td>
      </tr>
      <tr>
        <td id="L550" class="blob-num js-line-number" data-line-number="550"></td>
        <td id="LC550" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L551" class="blob-num js-line-number" data-line-number="551"></td>
        <td id="LC551" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L552" class="blob-num js-line-number" data-line-number="552"></td>
        <td id="LC552" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>return</span> <span class=pl-en>getClientRect</span><span class=pl-kos>(</span><span class=pl-s1>offset</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L553" class="blob-num js-line-number" data-line-number="553"></td>
        <td id="LC553" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L554" class="blob-num js-line-number" data-line-number="554"></td>
        <td id="LC554" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L555" class="blob-num js-line-number" data-line-number="555"></td>
        <td id="LC555" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L556" class="blob-num js-line-number" data-line-number="556"></td>
        <td id="LC556" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * Check if the given element is fixed or is inside a fixed parent</span></td>
      </tr>
      <tr>
        <td id="L557" class="blob-num js-line-number" data-line-number="557"></td>
        <td id="LC557" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@method</span></span></td>
      </tr>
      <tr>
        <td id="L558" class="blob-num js-line-number" data-line-number="558"></td>
        <td id="LC558" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@memberof</span> Popper.Utils</span></td>
      </tr>
      <tr>
        <td id="L559" class="blob-num js-line-number" data-line-number="559"></td>
        <td id="LC559" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@argument</span> {Element} element</span></td>
      </tr>
      <tr>
        <td id="L560" class="blob-num js-line-number" data-line-number="560"></td>
        <td id="LC560" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@argument</span> {Element} customContainer</span></td>
      </tr>
      <tr>
        <td id="L561" class="blob-num js-line-number" data-line-number="561"></td>
        <td id="LC561" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@returns</span> {<span class=pl-smi>Boolean</span>} answer to &quot;isFixed?&quot;</span></td>
      </tr>
      <tr>
        <td id="L562" class="blob-num js-line-number" data-line-number="562"></td>
        <td id="LC562" class="blob-code blob-code-inner js-file-line"><span class=pl-c> */</span></td>
      </tr>
      <tr>
        <td id="L563" class="blob-num js-line-number" data-line-number="563"></td>
        <td id="LC563" class="blob-code blob-code-inner js-file-line"><span class=pl-k>function</span> <span class=pl-en>isFixed</span><span class=pl-kos>(</span><span class=pl-s1>element</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L564" class="blob-num js-line-number" data-line-number="564"></td>
        <td id="LC564" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>nodeName</span> <span class=pl-c1>=</span> <span class=pl-s1>element</span><span class=pl-kos>.</span><span class=pl-c1>nodeName</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L565" class="blob-num js-line-number" data-line-number="565"></td>
        <td id="LC565" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>nodeName</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;BODY&#39;</span> <span class=pl-c1>||</span> <span class=pl-s1>nodeName</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;HTML&#39;</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L566" class="blob-num js-line-number" data-line-number="566"></td>
        <td id="LC566" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>return</span> <span class=pl-c1>false</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L567" class="blob-num js-line-number" data-line-number="567"></td>
        <td id="LC567" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L568" class="blob-num js-line-number" data-line-number="568"></td>
        <td id="LC568" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-en>getStyleComputedProperty</span><span class=pl-kos>(</span><span class=pl-s1>element</span><span class=pl-kos>,</span> <span class=pl-s>&#39;position&#39;</span><span class=pl-kos>)</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;fixed&#39;</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L569" class="blob-num js-line-number" data-line-number="569"></td>
        <td id="LC569" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>return</span> <span class=pl-c1>true</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L570" class="blob-num js-line-number" data-line-number="570"></td>
        <td id="LC570" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L571" class="blob-num js-line-number" data-line-number="571"></td>
        <td id="LC571" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>return</span> <span class=pl-en>isFixed</span><span class=pl-kos>(</span><span class=pl-en>getParentNode</span><span class=pl-kos>(</span><span class=pl-s1>element</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L572" class="blob-num js-line-number" data-line-number="572"></td>
        <td id="LC572" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L573" class="blob-num js-line-number" data-line-number="573"></td>
        <td id="LC573" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L574" class="blob-num js-line-number" data-line-number="574"></td>
        <td id="LC574" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L575" class="blob-num js-line-number" data-line-number="575"></td>
        <td id="LC575" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * Computed the boundaries limits and return them</span></td>
      </tr>
      <tr>
        <td id="L576" class="blob-num js-line-number" data-line-number="576"></td>
        <td id="LC576" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@method</span></span></td>
      </tr>
      <tr>
        <td id="L577" class="blob-num js-line-number" data-line-number="577"></td>
        <td id="LC577" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@memberof</span> Popper.Utils</span></td>
      </tr>
      <tr>
        <td id="L578" class="blob-num js-line-number" data-line-number="578"></td>
        <td id="LC578" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@param</span> {<span class=pl-smi>HTMLElement</span>} popper</span></td>
      </tr>
      <tr>
        <td id="L579" class="blob-num js-line-number" data-line-number="579"></td>
        <td id="LC579" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@param</span> {<span class=pl-smi>HTMLElement</span>} reference</span></td>
      </tr>
      <tr>
        <td id="L580" class="blob-num js-line-number" data-line-number="580"></td>
        <td id="LC580" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@param</span> {<span class=pl-smi>number</span>} padding</span></td>
      </tr>
      <tr>
        <td id="L581" class="blob-num js-line-number" data-line-number="581"></td>
        <td id="LC581" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@param</span> {<span class=pl-smi>HTMLElement</span>} boundariesElement - Element used to define the boundaries</span></td>
      </tr>
      <tr>
        <td id="L582" class="blob-num js-line-number" data-line-number="582"></td>
        <td id="LC582" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@returns</span> {<span class=pl-smi>Object</span>} Coordinates of the boundaries</span></td>
      </tr>
      <tr>
        <td id="L583" class="blob-num js-line-number" data-line-number="583"></td>
        <td id="LC583" class="blob-code blob-code-inner js-file-line"><span class=pl-c> */</span></td>
      </tr>
      <tr>
        <td id="L584" class="blob-num js-line-number" data-line-number="584"></td>
        <td id="LC584" class="blob-code blob-code-inner js-file-line"><span class=pl-k>function</span> <span class=pl-en>getBoundaries</span><span class=pl-kos>(</span><span class=pl-s1>popper</span><span class=pl-kos>,</span> <span class=pl-s1>reference</span><span class=pl-kos>,</span> <span class=pl-s1>padding</span><span class=pl-kos>,</span> <span class=pl-s1>boundariesElement</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L585" class="blob-num js-line-number" data-line-number="585"></td>
        <td id="LC585" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// NOTE: 1 DOM access here</span></td>
      </tr>
      <tr>
        <td id="L586" class="blob-num js-line-number" data-line-number="586"></td>
        <td id="LC586" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>boundaries</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span> <span class=pl-c1>top</span>: <span class=pl-c1>0</span><span class=pl-kos>,</span> <span class=pl-c1>left</span>: <span class=pl-c1>0</span> <span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L587" class="blob-num js-line-number" data-line-number="587"></td>
        <td id="LC587" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>offsetParent</span> <span class=pl-c1>=</span> <span class=pl-en>findCommonOffsetParent</span><span class=pl-kos>(</span><span class=pl-s1>popper</span><span class=pl-kos>,</span> <span class=pl-s1>reference</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L588" class="blob-num js-line-number" data-line-number="588"></td>
        <td id="LC588" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L589" class="blob-num js-line-number" data-line-number="589"></td>
        <td id="LC589" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// Handle viewport case</span></td>
      </tr>
      <tr>
        <td id="L590" class="blob-num js-line-number" data-line-number="590"></td>
        <td id="LC590" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>boundariesElement</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;viewport&#39;</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L591" class="blob-num js-line-number" data-line-number="591"></td>
        <td id="LC591" class="blob-code blob-code-inner js-file-line">    <span class=pl-s1>boundaries</span> <span class=pl-c1>=</span> <span class=pl-en>getViewportOffsetRectRelativeToArtbitraryNode</span><span class=pl-kos>(</span><span class=pl-s1>offsetParent</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L592" class="blob-num js-line-number" data-line-number="592"></td>
        <td id="LC592" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L593" class="blob-num js-line-number" data-line-number="593"></td>
        <td id="LC593" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>// Handle other cases based on DOM element used as boundaries</span></td>
      </tr>
      <tr>
        <td id="L594" class="blob-num js-line-number" data-line-number="594"></td>
        <td id="LC594" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>var</span> <span class=pl-s1>boundariesNode</span> <span class=pl-c1>=</span> <span class=pl-k>void</span> <span class=pl-c1>0</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L595" class="blob-num js-line-number" data-line-number="595"></td>
        <td id="LC595" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>boundariesElement</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;scrollParent&#39;</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L596" class="blob-num js-line-number" data-line-number="596"></td>
        <td id="LC596" class="blob-code blob-code-inner js-file-line">      <span class=pl-s1>boundariesNode</span> <span class=pl-c1>=</span> <span class=pl-en>getScrollParent</span><span class=pl-kos>(</span><span class=pl-en>getParentNode</span><span class=pl-kos>(</span><span class=pl-s1>popper</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L597" class="blob-num js-line-number" data-line-number="597"></td>
        <td id="LC597" class="blob-code blob-code-inner js-file-line">      <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>boundariesNode</span><span class=pl-kos>.</span><span class=pl-c1>nodeName</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;BODY&#39;</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L598" class="blob-num js-line-number" data-line-number="598"></td>
        <td id="LC598" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>boundariesNode</span> <span class=pl-c1>=</span> <span class=pl-smi>window</span><span class=pl-kos>.</span><span class=pl-c1>document</span><span class=pl-kos>.</span><span class=pl-c1>documentElement</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L599" class="blob-num js-line-number" data-line-number="599"></td>
        <td id="LC599" class="blob-code blob-code-inner js-file-line">      <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L600" class="blob-num js-line-number" data-line-number="600"></td>
        <td id="LC600" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>boundariesElement</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;window&#39;</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L601" class="blob-num js-line-number" data-line-number="601"></td>
        <td id="LC601" class="blob-code blob-code-inner js-file-line">      <span class=pl-s1>boundariesNode</span> <span class=pl-c1>=</span> <span class=pl-smi>window</span><span class=pl-kos>.</span><span class=pl-c1>document</span><span class=pl-kos>.</span><span class=pl-c1>documentElement</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L602" class="blob-num js-line-number" data-line-number="602"></td>
        <td id="LC602" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L603" class="blob-num js-line-number" data-line-number="603"></td>
        <td id="LC603" class="blob-code blob-code-inner js-file-line">      <span class=pl-s1>boundariesNode</span> <span class=pl-c1>=</span> <span class=pl-s1>boundariesElement</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L604" class="blob-num js-line-number" data-line-number="604"></td>
        <td id="LC604" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L605" class="blob-num js-line-number" data-line-number="605"></td>
        <td id="LC605" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L606" class="blob-num js-line-number" data-line-number="606"></td>
        <td id="LC606" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>var</span> <span class=pl-s1>offsets</span> <span class=pl-c1>=</span> <span class=pl-en>getOffsetRectRelativeToArbitraryNode</span><span class=pl-kos>(</span><span class=pl-s1>boundariesNode</span><span class=pl-kos>,</span> <span class=pl-s1>offsetParent</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L607" class="blob-num js-line-number" data-line-number="607"></td>
        <td id="LC607" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L608" class="blob-num js-line-number" data-line-number="608"></td>
        <td id="LC608" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>// In case of HTML, we need a different computation</span></td>
      </tr>
      <tr>
        <td id="L609" class="blob-num js-line-number" data-line-number="609"></td>
        <td id="LC609" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>boundariesNode</span><span class=pl-kos>.</span><span class=pl-c1>nodeName</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;HTML&#39;</span> <span class=pl-c1>&amp;&amp;</span> !<span class=pl-en>isFixed</span><span class=pl-kos>(</span><span class=pl-s1>offsetParent</span><span class=pl-kos>)</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L610" class="blob-num js-line-number" data-line-number="610"></td>
        <td id="LC610" class="blob-code blob-code-inner js-file-line">      <span class=pl-k>var</span> <span class=pl-s1>_getWindowSizes</span> <span class=pl-c1>=</span> <span class=pl-en>getWindowSizes</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L611" class="blob-num js-line-number" data-line-number="611"></td>
        <td id="LC611" class="blob-code blob-code-inner js-file-line">          <span class=pl-s1>height</span> <span class=pl-c1>=</span> <span class=pl-s1>_getWindowSizes</span><span class=pl-kos>.</span><span class=pl-c1>height</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L612" class="blob-num js-line-number" data-line-number="612"></td>
        <td id="LC612" class="blob-code blob-code-inner js-file-line">          <span class=pl-s1>width</span> <span class=pl-c1>=</span> <span class=pl-s1>_getWindowSizes</span><span class=pl-kos>.</span><span class=pl-c1>width</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L613" class="blob-num js-line-number" data-line-number="613"></td>
        <td id="LC613" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L614" class="blob-num js-line-number" data-line-number="614"></td>
        <td id="LC614" class="blob-code blob-code-inner js-file-line">      <span class=pl-s1>boundaries</span><span class=pl-kos>.</span><span class=pl-c1>top</span> <span class=pl-c1>+=</span> <span class=pl-s1>offsets</span><span class=pl-kos>.</span><span class=pl-c1>top</span> <span class=pl-c1>-</span> <span class=pl-s1>offsets</span><span class=pl-kos>.</span><span class=pl-c1>marginTop</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L615" class="blob-num js-line-number" data-line-number="615"></td>
        <td id="LC615" class="blob-code blob-code-inner js-file-line">      <span class=pl-s1>boundaries</span><span class=pl-kos>.</span><span class=pl-c1>bottom</span> <span class=pl-c1>=</span> <span class=pl-s1>height</span> <span class=pl-c1>+</span> <span class=pl-s1>offsets</span><span class=pl-kos>.</span><span class=pl-c1>top</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L616" class="blob-num js-line-number" data-line-number="616"></td>
        <td id="LC616" class="blob-code blob-code-inner js-file-line">      <span class=pl-s1>boundaries</span><span class=pl-kos>.</span><span class=pl-c1>left</span> <span class=pl-c1>+=</span> <span class=pl-s1>offsets</span><span class=pl-kos>.</span><span class=pl-c1>left</span> <span class=pl-c1>-</span> <span class=pl-s1>offsets</span><span class=pl-kos>.</span><span class=pl-c1>marginLeft</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L617" class="blob-num js-line-number" data-line-number="617"></td>
        <td id="LC617" class="blob-code blob-code-inner js-file-line">      <span class=pl-s1>boundaries</span><span class=pl-kos>.</span><span class=pl-c1>right</span> <span class=pl-c1>=</span> <span class=pl-s1>width</span> <span class=pl-c1>+</span> <span class=pl-s1>offsets</span><span class=pl-kos>.</span><span class=pl-c1>left</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L618" class="blob-num js-line-number" data-line-number="618"></td>
        <td id="LC618" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L619" class="blob-num js-line-number" data-line-number="619"></td>
        <td id="LC619" class="blob-code blob-code-inner js-file-line">      <span class=pl-c>// for all the other DOM elements, this one is good</span></td>
      </tr>
      <tr>
        <td id="L620" class="blob-num js-line-number" data-line-number="620"></td>
        <td id="LC620" class="blob-code blob-code-inner js-file-line">      <span class=pl-s1>boundaries</span> <span class=pl-c1>=</span> <span class=pl-s1>offsets</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L621" class="blob-num js-line-number" data-line-number="621"></td>
        <td id="LC621" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L622" class="blob-num js-line-number" data-line-number="622"></td>
        <td id="LC622" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L623" class="blob-num js-line-number" data-line-number="623"></td>
        <td id="LC623" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L624" class="blob-num js-line-number" data-line-number="624"></td>
        <td id="LC624" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// Add paddings</span></td>
      </tr>
      <tr>
        <td id="L625" class="blob-num js-line-number" data-line-number="625"></td>
        <td id="LC625" class="blob-code blob-code-inner js-file-line">  <span class=pl-s1>boundaries</span><span class=pl-kos>.</span><span class=pl-c1>left</span> <span class=pl-c1>+=</span> <span class=pl-s1>padding</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L626" class="blob-num js-line-number" data-line-number="626"></td>
        <td id="LC626" class="blob-code blob-code-inner js-file-line">  <span class=pl-s1>boundaries</span><span class=pl-kos>.</span><span class=pl-c1>top</span> <span class=pl-c1>+=</span> <span class=pl-s1>padding</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L627" class="blob-num js-line-number" data-line-number="627"></td>
        <td id="LC627" class="blob-code blob-code-inner js-file-line">  <span class=pl-s1>boundaries</span><span class=pl-kos>.</span><span class=pl-c1>right</span> <span class=pl-c1>-=</span> <span class=pl-s1>padding</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L628" class="blob-num js-line-number" data-line-number="628"></td>
        <td id="LC628" class="blob-code blob-code-inner js-file-line">  <span class=pl-s1>boundaries</span><span class=pl-kos>.</span><span class=pl-c1>bottom</span> <span class=pl-c1>-=</span> <span class=pl-s1>padding</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L629" class="blob-num js-line-number" data-line-number="629"></td>
        <td id="LC629" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L630" class="blob-num js-line-number" data-line-number="630"></td>
        <td id="LC630" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>return</span> <span class=pl-s1>boundaries</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L631" class="blob-num js-line-number" data-line-number="631"></td>
        <td id="LC631" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L632" class="blob-num js-line-number" data-line-number="632"></td>
        <td id="LC632" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L633" class="blob-num js-line-number" data-line-number="633"></td>
        <td id="LC633" class="blob-code blob-code-inner js-file-line"><span class=pl-k>function</span> <span class=pl-en>getArea</span><span class=pl-kos>(</span><span class=pl-s1>_ref</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L634" class="blob-num js-line-number" data-line-number="634"></td>
        <td id="LC634" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>width</span> <span class=pl-c1>=</span> <span class=pl-s1>_ref</span><span class=pl-kos>.</span><span class=pl-c1>width</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L635" class="blob-num js-line-number" data-line-number="635"></td>
        <td id="LC635" class="blob-code blob-code-inner js-file-line">      <span class=pl-s1>height</span> <span class=pl-c1>=</span> <span class=pl-s1>_ref</span><span class=pl-kos>.</span><span class=pl-c1>height</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L636" class="blob-num js-line-number" data-line-number="636"></td>
        <td id="LC636" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L637" class="blob-num js-line-number" data-line-number="637"></td>
        <td id="LC637" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>return</span> <span class=pl-s1>width</span> * <span class=pl-s1>height</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L638" class="blob-num js-line-number" data-line-number="638"></td>
        <td id="LC638" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L639" class="blob-num js-line-number" data-line-number="639"></td>
        <td id="LC639" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L640" class="blob-num js-line-number" data-line-number="640"></td>
        <td id="LC640" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L641" class="blob-num js-line-number" data-line-number="641"></td>
        <td id="LC641" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * Utility used to transform the `auto` placement to the placement with more</span></td>
      </tr>
      <tr>
        <td id="L642" class="blob-num js-line-number" data-line-number="642"></td>
        <td id="LC642" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * available space.</span></td>
      </tr>
      <tr>
        <td id="L643" class="blob-num js-line-number" data-line-number="643"></td>
        <td id="LC643" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@method</span></span></td>
      </tr>
      <tr>
        <td id="L644" class="blob-num js-line-number" data-line-number="644"></td>
        <td id="LC644" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@memberof</span> Popper.Utils</span></td>
      </tr>
      <tr>
        <td id="L645" class="blob-num js-line-number" data-line-number="645"></td>
        <td id="LC645" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@argument</span> {Object} data - The data object generated by update method</span></td>
      </tr>
      <tr>
        <td id="L646" class="blob-num js-line-number" data-line-number="646"></td>
        <td id="LC646" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@argument</span> {Object} options - Modifiers configuration and options</span></td>
      </tr>
      <tr>
        <td id="L647" class="blob-num js-line-number" data-line-number="647"></td>
        <td id="LC647" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@returns</span> {<span class=pl-smi>Object</span>} The data object, properly modified</span></td>
      </tr>
      <tr>
        <td id="L648" class="blob-num js-line-number" data-line-number="648"></td>
        <td id="LC648" class="blob-code blob-code-inner js-file-line"><span class=pl-c> */</span></td>
      </tr>
      <tr>
        <td id="L649" class="blob-num js-line-number" data-line-number="649"></td>
        <td id="LC649" class="blob-code blob-code-inner js-file-line"><span class=pl-k>function</span> <span class=pl-en>computeAutoPlacement</span><span class=pl-kos>(</span><span class=pl-s1>placement</span><span class=pl-kos>,</span> <span class=pl-s1>refRect</span><span class=pl-kos>,</span> <span class=pl-s1>popper</span><span class=pl-kos>,</span> <span class=pl-s1>reference</span><span class=pl-kos>,</span> <span class=pl-s1>boundariesElement</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L650" class="blob-num js-line-number" data-line-number="650"></td>
        <td id="LC650" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>padding</span> <span class=pl-c1>=</span> <span class=pl-smi>arguments</span><span class=pl-kos>.</span><span class=pl-c1>length</span> <span class=pl-c1>&gt;</span> <span class=pl-c1>5</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-smi>arguments</span><span class=pl-kos>[</span><span class=pl-c1>5</span><span class=pl-kos>]</span> !== undefined ? <span class=pl-smi>arguments</span><span class=pl-kos>[</span><span class=pl-c1>5</span><span class=pl-kos>]</span> : <span class=pl-c1>0</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L651" class="blob-num js-line-number" data-line-number="651"></td>
        <td id="LC651" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L652" class="blob-num js-line-number" data-line-number="652"></td>
        <td id="LC652" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>placement</span><span class=pl-kos>.</span><span class=pl-en>indexOf</span><span class=pl-kos>(</span><span class=pl-s>&#39;auto&#39;</span><span class=pl-kos>)</span> <span class=pl-c1>===</span> <span class=pl-c1>-</span><span class=pl-c1>1</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L653" class="blob-num js-line-number" data-line-number="653"></td>
        <td id="LC653" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>return</span> <span class=pl-s1>placement</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L654" class="blob-num js-line-number" data-line-number="654"></td>
        <td id="LC654" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L655" class="blob-num js-line-number" data-line-number="655"></td>
        <td id="LC655" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L656" class="blob-num js-line-number" data-line-number="656"></td>
        <td id="LC656" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>boundaries</span> <span class=pl-c1>=</span> <span class=pl-en>getBoundaries</span><span class=pl-kos>(</span><span class=pl-s1>popper</span><span class=pl-kos>,</span> <span class=pl-s1>reference</span><span class=pl-kos>,</span> <span class=pl-s1>padding</span><span class=pl-kos>,</span> <span class=pl-s1>boundariesElement</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L657" class="blob-num js-line-number" data-line-number="657"></td>
        <td id="LC657" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L658" class="blob-num js-line-number" data-line-number="658"></td>
        <td id="LC658" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>rects</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L659" class="blob-num js-line-number" data-line-number="659"></td>
        <td id="LC659" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>top</span>: <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L660" class="blob-num js-line-number" data-line-number="660"></td>
        <td id="LC660" class="blob-code blob-code-inner js-file-line">      <span class=pl-c1>width</span>: <span class=pl-s1>boundaries</span><span class=pl-kos>.</span><span class=pl-c1>width</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L661" class="blob-num js-line-number" data-line-number="661"></td>
        <td id="LC661" class="blob-code blob-code-inner js-file-line">      <span class=pl-c1>height</span>: <span class=pl-s1>refRect</span><span class=pl-kos>.</span><span class=pl-c1>top</span> <span class=pl-c1>-</span> <span class=pl-s1>boundaries</span><span class=pl-kos>.</span><span class=pl-c1>top</span></td>
      </tr>
      <tr>
        <td id="L662" class="blob-num js-line-number" data-line-number="662"></td>
        <td id="LC662" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L663" class="blob-num js-line-number" data-line-number="663"></td>
        <td id="LC663" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>right</span>: <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L664" class="blob-num js-line-number" data-line-number="664"></td>
        <td id="LC664" class="blob-code blob-code-inner js-file-line">      <span class=pl-c1>width</span>: <span class=pl-s1>boundaries</span><span class=pl-kos>.</span><span class=pl-c1>right</span> <span class=pl-c1>-</span> <span class=pl-s1>refRect</span><span class=pl-kos>.</span><span class=pl-c1>right</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L665" class="blob-num js-line-number" data-line-number="665"></td>
        <td id="LC665" class="blob-code blob-code-inner js-file-line">      <span class=pl-c1>height</span>: <span class=pl-s1>boundaries</span><span class=pl-kos>.</span><span class=pl-c1>height</span></td>
      </tr>
      <tr>
        <td id="L666" class="blob-num js-line-number" data-line-number="666"></td>
        <td id="LC666" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L667" class="blob-num js-line-number" data-line-number="667"></td>
        <td id="LC667" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>bottom</span>: <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L668" class="blob-num js-line-number" data-line-number="668"></td>
        <td id="LC668" class="blob-code blob-code-inner js-file-line">      <span class=pl-c1>width</span>: <span class=pl-s1>boundaries</span><span class=pl-kos>.</span><span class=pl-c1>width</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L669" class="blob-num js-line-number" data-line-number="669"></td>
        <td id="LC669" class="blob-code blob-code-inner js-file-line">      <span class=pl-c1>height</span>: <span class=pl-s1>boundaries</span><span class=pl-kos>.</span><span class=pl-c1>bottom</span> <span class=pl-c1>-</span> <span class=pl-s1>refRect</span><span class=pl-kos>.</span><span class=pl-c1>bottom</span></td>
      </tr>
      <tr>
        <td id="L670" class="blob-num js-line-number" data-line-number="670"></td>
        <td id="LC670" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L671" class="blob-num js-line-number" data-line-number="671"></td>
        <td id="LC671" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>left</span>: <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L672" class="blob-num js-line-number" data-line-number="672"></td>
        <td id="LC672" class="blob-code blob-code-inner js-file-line">      <span class=pl-c1>width</span>: <span class=pl-s1>refRect</span><span class=pl-kos>.</span><span class=pl-c1>left</span> <span class=pl-c1>-</span> <span class=pl-s1>boundaries</span><span class=pl-kos>.</span><span class=pl-c1>left</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L673" class="blob-num js-line-number" data-line-number="673"></td>
        <td id="LC673" class="blob-code blob-code-inner js-file-line">      <span class=pl-c1>height</span>: <span class=pl-s1>boundaries</span><span class=pl-kos>.</span><span class=pl-c1>height</span></td>
      </tr>
      <tr>
        <td id="L674" class="blob-num js-line-number" data-line-number="674"></td>
        <td id="LC674" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L675" class="blob-num js-line-number" data-line-number="675"></td>
        <td id="LC675" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L676" class="blob-num js-line-number" data-line-number="676"></td>
        <td id="LC676" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L677" class="blob-num js-line-number" data-line-number="677"></td>
        <td id="LC677" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>sortedAreas</span> <span class=pl-c1>=</span> <span class=pl-v>Object</span><span class=pl-kos>.</span><span class=pl-en>keys</span><span class=pl-kos>(</span><span class=pl-s1>rects</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>map</span><span class=pl-kos>(</span><span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>key</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L678" class="blob-num js-line-number" data-line-number="678"></td>
        <td id="LC678" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>return</span> <span class=pl-s1>_extends</span><span class=pl-kos>(</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L679" class="blob-num js-line-number" data-line-number="679"></td>
        <td id="LC679" class="blob-code blob-code-inner js-file-line">      <span class=pl-c1>key</span>: <span class=pl-s1>key</span></td>
      </tr>
      <tr>
        <td id="L680" class="blob-num js-line-number" data-line-number="680"></td>
        <td id="LC680" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>,</span> <span class=pl-s1>rects</span><span class=pl-kos>[</span><span class=pl-s1>key</span><span class=pl-kos>]</span><span class=pl-kos>,</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L681" class="blob-num js-line-number" data-line-number="681"></td>
        <td id="LC681" class="blob-code blob-code-inner js-file-line">      <span class=pl-c1>area</span>: <span class=pl-en>getArea</span><span class=pl-kos>(</span><span class=pl-s1>rects</span><span class=pl-kos>[</span><span class=pl-s1>key</span><span class=pl-kos>]</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L682" class="blob-num js-line-number" data-line-number="682"></td>
        <td id="LC682" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L683" class="blob-num js-line-number" data-line-number="683"></td>
        <td id="LC683" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>sort</span><span class=pl-kos>(</span><span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>a</span><span class=pl-kos>,</span> <span class=pl-s1>b</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L684" class="blob-num js-line-number" data-line-number="684"></td>
        <td id="LC684" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>return</span> <span class=pl-s1>b</span><span class=pl-kos>.</span><span class=pl-c1>area</span> <span class=pl-c1>-</span> <span class=pl-s1>a</span><span class=pl-kos>.</span><span class=pl-c1>area</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L685" class="blob-num js-line-number" data-line-number="685"></td>
        <td id="LC685" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L686" class="blob-num js-line-number" data-line-number="686"></td>
        <td id="LC686" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L687" class="blob-num js-line-number" data-line-number="687"></td>
        <td id="LC687" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>filteredAreas</span> <span class=pl-c1>=</span> <span class=pl-s1>sortedAreas</span><span class=pl-kos>.</span><span class=pl-en>filter</span><span class=pl-kos>(</span><span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>_ref2</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L688" class="blob-num js-line-number" data-line-number="688"></td>
        <td id="LC688" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>var</span> <span class=pl-s1>width</span> <span class=pl-c1>=</span> <span class=pl-s1>_ref2</span><span class=pl-kos>.</span><span class=pl-c1>width</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L689" class="blob-num js-line-number" data-line-number="689"></td>
        <td id="LC689" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>height</span> <span class=pl-c1>=</span> <span class=pl-s1>_ref2</span><span class=pl-kos>.</span><span class=pl-c1>height</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L690" class="blob-num js-line-number" data-line-number="690"></td>
        <td id="LC690" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>return</span> <span class=pl-s1>width</span> &gt;= <span class=pl-s1>popper</span><span class=pl-kos>.</span><span class=pl-c1>clientWidth</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>height</span> &gt;= <span class=pl-s1>popper</span><span class=pl-kos>.</span><span class=pl-c1>clientHeight</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L691" class="blob-num js-line-number" data-line-number="691"></td>
        <td id="LC691" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L692" class="blob-num js-line-number" data-line-number="692"></td>
        <td id="LC692" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L693" class="blob-num js-line-number" data-line-number="693"></td>
        <td id="LC693" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>computedPlacement</span> <span class=pl-c1>=</span> <span class=pl-s1>filteredAreas</span><span class=pl-kos>.</span><span class=pl-c1>length</span> <span class=pl-c1>&gt;</span> <span class=pl-c1>0</span> ? <span class=pl-s1>filteredAreas</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>key</span> : <span class=pl-s1>sortedAreas</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>key</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L694" class="blob-num js-line-number" data-line-number="694"></td>
        <td id="LC694" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L695" class="blob-num js-line-number" data-line-number="695"></td>
        <td id="LC695" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>variation</span> <span class=pl-c1>=</span> <span class=pl-s1>placement</span><span class=pl-kos>.</span><span class=pl-en>split</span><span class=pl-kos>(</span><span class=pl-s>&#39;-&#39;</span><span class=pl-kos>)</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L696" class="blob-num js-line-number" data-line-number="696"></td>
        <td id="LC696" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L697" class="blob-num js-line-number" data-line-number="697"></td>
        <td id="LC697" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>return</span> <span class=pl-s1>computedPlacement</span> <span class=pl-c1>+</span> <span class=pl-kos>(</span><span class=pl-s1>variation</span> ? <span class=pl-s>&#39;-&#39;</span> <span class=pl-c1>+</span> <span class=pl-s1>variation</span> : <span class=pl-s>&#39;&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L698" class="blob-num js-line-number" data-line-number="698"></td>
        <td id="LC698" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L699" class="blob-num js-line-number" data-line-number="699"></td>
        <td id="LC699" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L700" class="blob-num js-line-number" data-line-number="700"></td>
        <td id="LC700" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L701" class="blob-num js-line-number" data-line-number="701"></td>
        <td id="LC701" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * Get offsets to the reference element</span></td>
      </tr>
      <tr>
        <td id="L702" class="blob-num js-line-number" data-line-number="702"></td>
        <td id="LC702" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@method</span></span></td>
      </tr>
      <tr>
        <td id="L703" class="blob-num js-line-number" data-line-number="703"></td>
        <td id="LC703" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@memberof</span> Popper.Utils</span></td>
      </tr>
      <tr>
        <td id="L704" class="blob-num js-line-number" data-line-number="704"></td>
        <td id="LC704" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@param</span> {<span class=pl-smi>Object</span>} state</span></td>
      </tr>
      <tr>
        <td id="L705" class="blob-num js-line-number" data-line-number="705"></td>
        <td id="LC705" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@param</span> {<span class=pl-smi>Element</span>} popper - the popper element</span></td>
      </tr>
      <tr>
        <td id="L706" class="blob-num js-line-number" data-line-number="706"></td>
        <td id="LC706" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@param</span> {<span class=pl-smi>Element</span>} reference - the reference element (the popper will be relative to this)</span></td>
      </tr>
      <tr>
        <td id="L707" class="blob-num js-line-number" data-line-number="707"></td>
        <td id="LC707" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@returns</span> {<span class=pl-smi>Object</span>} An object containing the offsets which will be applied to the popper</span></td>
      </tr>
      <tr>
        <td id="L708" class="blob-num js-line-number" data-line-number="708"></td>
        <td id="LC708" class="blob-code blob-code-inner js-file-line"><span class=pl-c> */</span></td>
      </tr>
      <tr>
        <td id="L709" class="blob-num js-line-number" data-line-number="709"></td>
        <td id="LC709" class="blob-code blob-code-inner js-file-line"><span class=pl-k>function</span> <span class=pl-en>getReferenceOffsets</span><span class=pl-kos>(</span><span class=pl-s1>state</span><span class=pl-kos>,</span> <span class=pl-s1>popper</span><span class=pl-kos>,</span> <span class=pl-s1>reference</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L710" class="blob-num js-line-number" data-line-number="710"></td>
        <td id="LC710" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>commonOffsetParent</span> <span class=pl-c1>=</span> <span class=pl-en>findCommonOffsetParent</span><span class=pl-kos>(</span><span class=pl-s1>popper</span><span class=pl-kos>,</span> <span class=pl-s1>reference</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L711" class="blob-num js-line-number" data-line-number="711"></td>
        <td id="LC711" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>return</span> <span class=pl-en>getOffsetRectRelativeToArbitraryNode</span><span class=pl-kos>(</span><span class=pl-s1>reference</span><span class=pl-kos>,</span> <span class=pl-s1>commonOffsetParent</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L712" class="blob-num js-line-number" data-line-number="712"></td>
        <td id="LC712" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L713" class="blob-num js-line-number" data-line-number="713"></td>
        <td id="LC713" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L714" class="blob-num js-line-number" data-line-number="714"></td>
        <td id="LC714" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L715" class="blob-num js-line-number" data-line-number="715"></td>
        <td id="LC715" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * Get the outer sizes of the given element (offset size + margins)</span></td>
      </tr>
      <tr>
        <td id="L716" class="blob-num js-line-number" data-line-number="716"></td>
        <td id="LC716" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@method</span></span></td>
      </tr>
      <tr>
        <td id="L717" class="blob-num js-line-number" data-line-number="717"></td>
        <td id="LC717" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@memberof</span> Popper.Utils</span></td>
      </tr>
      <tr>
        <td id="L718" class="blob-num js-line-number" data-line-number="718"></td>
        <td id="LC718" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@argument</span> {Element} element</span></td>
      </tr>
      <tr>
        <td id="L719" class="blob-num js-line-number" data-line-number="719"></td>
        <td id="LC719" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@returns</span> {<span class=pl-smi>Object</span>} object containing width and height properties</span></td>
      </tr>
      <tr>
        <td id="L720" class="blob-num js-line-number" data-line-number="720"></td>
        <td id="LC720" class="blob-code blob-code-inner js-file-line"><span class=pl-c> */</span></td>
      </tr>
      <tr>
        <td id="L721" class="blob-num js-line-number" data-line-number="721"></td>
        <td id="LC721" class="blob-code blob-code-inner js-file-line"><span class=pl-k>function</span> <span class=pl-en>getOuterSizes</span><span class=pl-kos>(</span><span class=pl-s1>element</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L722" class="blob-num js-line-number" data-line-number="722"></td>
        <td id="LC722" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>styles</span> <span class=pl-c1>=</span> <span class=pl-smi>window</span><span class=pl-kos>.</span><span class=pl-en>getComputedStyle</span><span class=pl-kos>(</span><span class=pl-s1>element</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L723" class="blob-num js-line-number" data-line-number="723"></td>
        <td id="LC723" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>x</span> <span class=pl-c1>=</span> <span class=pl-en>parseFloat</span><span class=pl-kos>(</span><span class=pl-s1>styles</span><span class=pl-kos>.</span><span class=pl-c1>marginTop</span><span class=pl-kos>)</span> <span class=pl-c1>+</span> <span class=pl-en>parseFloat</span><span class=pl-kos>(</span><span class=pl-s1>styles</span><span class=pl-kos>.</span><span class=pl-c1>marginBottom</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L724" class="blob-num js-line-number" data-line-number="724"></td>
        <td id="LC724" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>y</span> <span class=pl-c1>=</span> <span class=pl-en>parseFloat</span><span class=pl-kos>(</span><span class=pl-s1>styles</span><span class=pl-kos>.</span><span class=pl-c1>marginLeft</span><span class=pl-kos>)</span> <span class=pl-c1>+</span> <span class=pl-en>parseFloat</span><span class=pl-kos>(</span><span class=pl-s1>styles</span><span class=pl-kos>.</span><span class=pl-c1>marginRight</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L725" class="blob-num js-line-number" data-line-number="725"></td>
        <td id="LC725" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>result</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L726" class="blob-num js-line-number" data-line-number="726"></td>
        <td id="LC726" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>width</span>: <span class=pl-s1>element</span><span class=pl-kos>.</span><span class=pl-c1>offsetWidth</span> <span class=pl-c1>+</span> <span class=pl-s1>y</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L727" class="blob-num js-line-number" data-line-number="727"></td>
        <td id="LC727" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>height</span>: <span class=pl-s1>element</span><span class=pl-kos>.</span><span class=pl-c1>offsetHeight</span> <span class=pl-c1>+</span> <span class=pl-s1>x</span></td>
      </tr>
      <tr>
        <td id="L728" class="blob-num js-line-number" data-line-number="728"></td>
        <td id="LC728" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L729" class="blob-num js-line-number" data-line-number="729"></td>
        <td id="LC729" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>return</span> <span class=pl-s1>result</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L730" class="blob-num js-line-number" data-line-number="730"></td>
        <td id="LC730" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L731" class="blob-num js-line-number" data-line-number="731"></td>
        <td id="LC731" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L732" class="blob-num js-line-number" data-line-number="732"></td>
        <td id="LC732" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L733" class="blob-num js-line-number" data-line-number="733"></td>
        <td id="LC733" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * Get the opposite placement of the given one</span></td>
      </tr>
      <tr>
        <td id="L734" class="blob-num js-line-number" data-line-number="734"></td>
        <td id="LC734" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@method</span></span></td>
      </tr>
      <tr>
        <td id="L735" class="blob-num js-line-number" data-line-number="735"></td>
        <td id="LC735" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@memberof</span> Popper.Utils</span></td>
      </tr>
      <tr>
        <td id="L736" class="blob-num js-line-number" data-line-number="736"></td>
        <td id="LC736" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@argument</span> {String} placement</span></td>
      </tr>
      <tr>
        <td id="L737" class="blob-num js-line-number" data-line-number="737"></td>
        <td id="LC737" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@returns</span> {<span class=pl-smi>String</span>} flipped placement</span></td>
      </tr>
      <tr>
        <td id="L738" class="blob-num js-line-number" data-line-number="738"></td>
        <td id="LC738" class="blob-code blob-code-inner js-file-line"><span class=pl-c> */</span></td>
      </tr>
      <tr>
        <td id="L739" class="blob-num js-line-number" data-line-number="739"></td>
        <td id="LC739" class="blob-code blob-code-inner js-file-line"><span class=pl-k>function</span> <span class=pl-en>getOppositePlacement</span><span class=pl-kos>(</span><span class=pl-s1>placement</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L740" class="blob-num js-line-number" data-line-number="740"></td>
        <td id="LC740" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>hash</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span> <span class=pl-c1>left</span>: <span class=pl-s>&#39;right&#39;</span><span class=pl-kos>,</span> <span class=pl-c1>right</span>: <span class=pl-s>&#39;left&#39;</span><span class=pl-kos>,</span> <span class=pl-c1>bottom</span>: <span class=pl-s>&#39;top&#39;</span><span class=pl-kos>,</span> <span class=pl-c1>top</span>: <span class=pl-s>&#39;bottom&#39;</span> <span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L741" class="blob-num js-line-number" data-line-number="741"></td>
        <td id="LC741" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>return</span> <span class=pl-s1>placement</span><span class=pl-kos>.</span><span class=pl-en>replace</span><span class=pl-kos>(</span><span class=pl-pds>/left<span class=pl-c1>|</span>right<span class=pl-c1>|</span>bottom<span class=pl-c1>|</span>top/g</span><span class=pl-kos>,</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>matched</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L742" class="blob-num js-line-number" data-line-number="742"></td>
        <td id="LC742" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>return</span> <span class=pl-s1>hash</span><span class=pl-kos>[</span><span class=pl-s1>matched</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L743" class="blob-num js-line-number" data-line-number="743"></td>
        <td id="LC743" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L744" class="blob-num js-line-number" data-line-number="744"></td>
        <td id="LC744" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L745" class="blob-num js-line-number" data-line-number="745"></td>
        <td id="LC745" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L746" class="blob-num js-line-number" data-line-number="746"></td>
        <td id="LC746" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L747" class="blob-num js-line-number" data-line-number="747"></td>
        <td id="LC747" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * Get offsets to the popper</span></td>
      </tr>
      <tr>
        <td id="L748" class="blob-num js-line-number" data-line-number="748"></td>
        <td id="LC748" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@method</span></span></td>
      </tr>
      <tr>
        <td id="L749" class="blob-num js-line-number" data-line-number="749"></td>
        <td id="LC749" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@memberof</span> Popper.Utils</span></td>
      </tr>
      <tr>
        <td id="L750" class="blob-num js-line-number" data-line-number="750"></td>
        <td id="LC750" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@param</span> {<span class=pl-smi>Object</span>} position - CSS position the Popper will get applied</span></td>
      </tr>
      <tr>
        <td id="L751" class="blob-num js-line-number" data-line-number="751"></td>
        <td id="LC751" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@param</span> {<span class=pl-smi>HTMLElement</span>} popper - the popper element</span></td>
      </tr>
      <tr>
        <td id="L752" class="blob-num js-line-number" data-line-number="752"></td>
        <td id="LC752" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@param</span> {<span class=pl-smi>Object</span>} referenceOffsets - the reference offsets (the popper will be relative to this)</span></td>
      </tr>
      <tr>
        <td id="L753" class="blob-num js-line-number" data-line-number="753"></td>
        <td id="LC753" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@param</span> {<span class=pl-smi>String</span>} placement - one of the valid placement options</span></td>
      </tr>
      <tr>
        <td id="L754" class="blob-num js-line-number" data-line-number="754"></td>
        <td id="LC754" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@returns</span> {<span class=pl-smi>Object</span>} popperOffsets - An object containing the offsets which will be applied to the popper</span></td>
      </tr>
      <tr>
        <td id="L755" class="blob-num js-line-number" data-line-number="755"></td>
        <td id="LC755" class="blob-code blob-code-inner js-file-line"><span class=pl-c> */</span></td>
      </tr>
      <tr>
        <td id="L756" class="blob-num js-line-number" data-line-number="756"></td>
        <td id="LC756" class="blob-code blob-code-inner js-file-line"><span class=pl-k>function</span> <span class=pl-en>getPopperOffsets</span><span class=pl-kos>(</span><span class=pl-s1>popper</span><span class=pl-kos>,</span> <span class=pl-s1>referenceOffsets</span><span class=pl-kos>,</span> <span class=pl-s1>placement</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L757" class="blob-num js-line-number" data-line-number="757"></td>
        <td id="LC757" class="blob-code blob-code-inner js-file-line">  <span class=pl-s1>placement</span> <span class=pl-c1>=</span> <span class=pl-s1>placement</span><span class=pl-kos>.</span><span class=pl-en>split</span><span class=pl-kos>(</span><span class=pl-s>&#39;-&#39;</span><span class=pl-kos>)</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L758" class="blob-num js-line-number" data-line-number="758"></td>
        <td id="LC758" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L759" class="blob-num js-line-number" data-line-number="759"></td>
        <td id="LC759" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// Get popper node sizes</span></td>
      </tr>
      <tr>
        <td id="L760" class="blob-num js-line-number" data-line-number="760"></td>
        <td id="LC760" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>popperRect</span> <span class=pl-c1>=</span> <span class=pl-en>getOuterSizes</span><span class=pl-kos>(</span><span class=pl-s1>popper</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L761" class="blob-num js-line-number" data-line-number="761"></td>
        <td id="LC761" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L762" class="blob-num js-line-number" data-line-number="762"></td>
        <td id="LC762" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// Add position, width and height to our offsets object</span></td>
      </tr>
      <tr>
        <td id="L763" class="blob-num js-line-number" data-line-number="763"></td>
        <td id="LC763" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>popperOffsets</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L764" class="blob-num js-line-number" data-line-number="764"></td>
        <td id="LC764" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>width</span>: <span class=pl-s1>popperRect</span><span class=pl-kos>.</span><span class=pl-c1>width</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L765" class="blob-num js-line-number" data-line-number="765"></td>
        <td id="LC765" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>height</span>: <span class=pl-s1>popperRect</span><span class=pl-kos>.</span><span class=pl-c1>height</span></td>
      </tr>
      <tr>
        <td id="L766" class="blob-num js-line-number" data-line-number="766"></td>
        <td id="LC766" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L767" class="blob-num js-line-number" data-line-number="767"></td>
        <td id="LC767" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L768" class="blob-num js-line-number" data-line-number="768"></td>
        <td id="LC768" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// depending by the popper placement we have to compute its offsets slightly differently</span></td>
      </tr>
      <tr>
        <td id="L769" class="blob-num js-line-number" data-line-number="769"></td>
        <td id="LC769" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>isHoriz</span> <span class=pl-c1>=</span> <span class=pl-kos>[</span><span class=pl-s>&#39;right&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;left&#39;</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-en>indexOf</span><span class=pl-kos>(</span><span class=pl-s1>placement</span><span class=pl-kos>)</span> !== <span class=pl-c1>-</span><span class=pl-c1>1</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L770" class="blob-num js-line-number" data-line-number="770"></td>
        <td id="LC770" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>mainSide</span> <span class=pl-c1>=</span> <span class=pl-s1>isHoriz</span> ? <span class=pl-s>&#39;top&#39;</span> : <span class=pl-s>&#39;left&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L771" class="blob-num js-line-number" data-line-number="771"></td>
        <td id="LC771" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>secondarySide</span> <span class=pl-c1>=</span> <span class=pl-s1>isHoriz</span> ? <span class=pl-s>&#39;left&#39;</span> : <span class=pl-s>&#39;top&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L772" class="blob-num js-line-number" data-line-number="772"></td>
        <td id="LC772" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>measurement</span> <span class=pl-c1>=</span> <span class=pl-s1>isHoriz</span> ? <span class=pl-s>&#39;height&#39;</span> : <span class=pl-s>&#39;width&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L773" class="blob-num js-line-number" data-line-number="773"></td>
        <td id="LC773" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>secondaryMeasurement</span> <span class=pl-c1>=</span> !<span class=pl-s1>isHoriz</span> ? <span class=pl-s>&#39;height&#39;</span> : <span class=pl-s>&#39;width&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L774" class="blob-num js-line-number" data-line-number="774"></td>
        <td id="LC774" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L775" class="blob-num js-line-number" data-line-number="775"></td>
        <td id="LC775" class="blob-code blob-code-inner js-file-line">  <span class=pl-s1>popperOffsets</span><span class=pl-kos>[</span><span class=pl-s1>mainSide</span><span class=pl-kos>]</span> <span class=pl-c1>=</span> <span class=pl-s1>referenceOffsets</span><span class=pl-kos>[</span><span class=pl-s1>mainSide</span><span class=pl-kos>]</span> <span class=pl-c1>+</span> <span class=pl-s1>referenceOffsets</span><span class=pl-kos>[</span><span class=pl-s1>measurement</span><span class=pl-kos>]</span> / <span class=pl-c1>2</span> <span class=pl-c1>-</span> <span class=pl-s1>popperRect</span><span class=pl-kos>[</span><span class=pl-s1>measurement</span><span class=pl-kos>]</span> / <span class=pl-c1>2</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L776" class="blob-num js-line-number" data-line-number="776"></td>
        <td id="LC776" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>placement</span> <span class=pl-c1>===</span> <span class=pl-s1>secondarySide</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L777" class="blob-num js-line-number" data-line-number="777"></td>
        <td id="LC777" class="blob-code blob-code-inner js-file-line">    <span class=pl-s1>popperOffsets</span><span class=pl-kos>[</span><span class=pl-s1>secondarySide</span><span class=pl-kos>]</span> <span class=pl-c1>=</span> <span class=pl-s1>referenceOffsets</span><span class=pl-kos>[</span><span class=pl-s1>secondarySide</span><span class=pl-kos>]</span> <span class=pl-c1>-</span> <span class=pl-s1>popperRect</span><span class=pl-kos>[</span><span class=pl-s1>secondaryMeasurement</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L778" class="blob-num js-line-number" data-line-number="778"></td>
        <td id="LC778" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L779" class="blob-num js-line-number" data-line-number="779"></td>
        <td id="LC779" class="blob-code blob-code-inner js-file-line">    <span class=pl-s1>popperOffsets</span><span class=pl-kos>[</span><span class=pl-s1>secondarySide</span><span class=pl-kos>]</span> <span class=pl-c1>=</span> <span class=pl-s1>referenceOffsets</span><span class=pl-kos>[</span><span class=pl-en>getOppositePlacement</span><span class=pl-kos>(</span><span class=pl-s1>secondarySide</span><span class=pl-kos>)</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L780" class="blob-num js-line-number" data-line-number="780"></td>
        <td id="LC780" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L781" class="blob-num js-line-number" data-line-number="781"></td>
        <td id="LC781" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L782" class="blob-num js-line-number" data-line-number="782"></td>
        <td id="LC782" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>return</span> <span class=pl-s1>popperOffsets</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L783" class="blob-num js-line-number" data-line-number="783"></td>
        <td id="LC783" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L784" class="blob-num js-line-number" data-line-number="784"></td>
        <td id="LC784" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L785" class="blob-num js-line-number" data-line-number="785"></td>
        <td id="LC785" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L786" class="blob-num js-line-number" data-line-number="786"></td>
        <td id="LC786" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * Mimics the `find` method of Array</span></td>
      </tr>
      <tr>
        <td id="L787" class="blob-num js-line-number" data-line-number="787"></td>
        <td id="LC787" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@method</span></span></td>
      </tr>
      <tr>
        <td id="L788" class="blob-num js-line-number" data-line-number="788"></td>
        <td id="LC788" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@memberof</span> Popper.Utils</span></td>
      </tr>
      <tr>
        <td id="L789" class="blob-num js-line-number" data-line-number="789"></td>
        <td id="LC789" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@argument</span> {Array} arr</span></td>
      </tr>
      <tr>
        <td id="L790" class="blob-num js-line-number" data-line-number="790"></td>
        <td id="LC790" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@argument</span> prop</span></td>
      </tr>
      <tr>
        <td id="L791" class="blob-num js-line-number" data-line-number="791"></td>
        <td id="LC791" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@argument</span> value</span></td>
      </tr>
      <tr>
        <td id="L792" class="blob-num js-line-number" data-line-number="792"></td>
        <td id="LC792" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@returns</span> index or -1</span></td>
      </tr>
      <tr>
        <td id="L793" class="blob-num js-line-number" data-line-number="793"></td>
        <td id="LC793" class="blob-code blob-code-inner js-file-line"><span class=pl-c> */</span></td>
      </tr>
      <tr>
        <td id="L794" class="blob-num js-line-number" data-line-number="794"></td>
        <td id="LC794" class="blob-code blob-code-inner js-file-line"><span class=pl-k>function</span> <span class=pl-en>find</span><span class=pl-kos>(</span><span class=pl-s1>arr</span><span class=pl-kos>,</span> <span class=pl-s1>check</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L795" class="blob-num js-line-number" data-line-number="795"></td>
        <td id="LC795" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// use native find if supported</span></td>
      </tr>
      <tr>
        <td id="L796" class="blob-num js-line-number" data-line-number="796"></td>
        <td id="LC796" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-v>Array</span><span class=pl-kos>.</span><span class=pl-c1>prototype</span><span class=pl-kos>.</span><span class=pl-c1>find</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L797" class="blob-num js-line-number" data-line-number="797"></td>
        <td id="LC797" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>return</span> <span class=pl-s1>arr</span><span class=pl-kos>.</span><span class=pl-en>find</span><span class=pl-kos>(</span><span class=pl-s1>check</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L798" class="blob-num js-line-number" data-line-number="798"></td>
        <td id="LC798" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L799" class="blob-num js-line-number" data-line-number="799"></td>
        <td id="LC799" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L800" class="blob-num js-line-number" data-line-number="800"></td>
        <td id="LC800" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// use `filter` to obtain the same behavior of `find`</span></td>
      </tr>
      <tr>
        <td id="L801" class="blob-num js-line-number" data-line-number="801"></td>
        <td id="LC801" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>return</span> <span class=pl-s1>arr</span><span class=pl-kos>.</span><span class=pl-en>filter</span><span class=pl-kos>(</span><span class=pl-s1>check</span><span class=pl-kos>)</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L802" class="blob-num js-line-number" data-line-number="802"></td>
        <td id="LC802" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L803" class="blob-num js-line-number" data-line-number="803"></td>
        <td id="LC803" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L804" class="blob-num js-line-number" data-line-number="804"></td>
        <td id="LC804" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L805" class="blob-num js-line-number" data-line-number="805"></td>
        <td id="LC805" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * Return the index of the matching object</span></td>
      </tr>
      <tr>
        <td id="L806" class="blob-num js-line-number" data-line-number="806"></td>
        <td id="LC806" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@method</span></span></td>
      </tr>
      <tr>
        <td id="L807" class="blob-num js-line-number" data-line-number="807"></td>
        <td id="LC807" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@memberof</span> Popper.Utils</span></td>
      </tr>
      <tr>
        <td id="L808" class="blob-num js-line-number" data-line-number="808"></td>
        <td id="LC808" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@argument</span> {Array} arr</span></td>
      </tr>
      <tr>
        <td id="L809" class="blob-num js-line-number" data-line-number="809"></td>
        <td id="LC809" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@argument</span> prop</span></td>
      </tr>
      <tr>
        <td id="L810" class="blob-num js-line-number" data-line-number="810"></td>
        <td id="LC810" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@argument</span> value</span></td>
      </tr>
      <tr>
        <td id="L811" class="blob-num js-line-number" data-line-number="811"></td>
        <td id="LC811" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@returns</span> index or -1</span></td>
      </tr>
      <tr>
        <td id="L812" class="blob-num js-line-number" data-line-number="812"></td>
        <td id="LC812" class="blob-code blob-code-inner js-file-line"><span class=pl-c> */</span></td>
      </tr>
      <tr>
        <td id="L813" class="blob-num js-line-number" data-line-number="813"></td>
        <td id="LC813" class="blob-code blob-code-inner js-file-line"><span class=pl-k>function</span> <span class=pl-en>findIndex</span><span class=pl-kos>(</span><span class=pl-s1>arr</span><span class=pl-kos>,</span> <span class=pl-s1>prop</span><span class=pl-kos>,</span> <span class=pl-s1>value</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L814" class="blob-num js-line-number" data-line-number="814"></td>
        <td id="LC814" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// use native findIndex if supported</span></td>
      </tr>
      <tr>
        <td id="L815" class="blob-num js-line-number" data-line-number="815"></td>
        <td id="LC815" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-v>Array</span><span class=pl-kos>.</span><span class=pl-c1>prototype</span><span class=pl-kos>.</span><span class=pl-c1>findIndex</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L816" class="blob-num js-line-number" data-line-number="816"></td>
        <td id="LC816" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>return</span> <span class=pl-s1>arr</span><span class=pl-kos>.</span><span class=pl-en>findIndex</span><span class=pl-kos>(</span><span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>cur</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L817" class="blob-num js-line-number" data-line-number="817"></td>
        <td id="LC817" class="blob-code blob-code-inner js-file-line">      <span class=pl-k>return</span> <span class=pl-s1>cur</span><span class=pl-kos>[</span><span class=pl-s1>prop</span><span class=pl-kos>]</span> <span class=pl-c1>===</span> <span class=pl-s1>value</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L818" class="blob-num js-line-number" data-line-number="818"></td>
        <td id="LC818" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L819" class="blob-num js-line-number" data-line-number="819"></td>
        <td id="LC819" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L820" class="blob-num js-line-number" data-line-number="820"></td>
        <td id="LC820" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L821" class="blob-num js-line-number" data-line-number="821"></td>
        <td id="LC821" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// use `find` + `indexOf` if `findIndex` isn&#39;t supported</span></td>
      </tr>
      <tr>
        <td id="L822" class="blob-num js-line-number" data-line-number="822"></td>
        <td id="LC822" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>match</span> <span class=pl-c1>=</span> <span class=pl-en>find</span><span class=pl-kos>(</span><span class=pl-s1>arr</span><span class=pl-kos>,</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>obj</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L823" class="blob-num js-line-number" data-line-number="823"></td>
        <td id="LC823" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>return</span> <span class=pl-s1>obj</span><span class=pl-kos>[</span><span class=pl-s1>prop</span><span class=pl-kos>]</span> <span class=pl-c1>===</span> <span class=pl-s1>value</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L824" class="blob-num js-line-number" data-line-number="824"></td>
        <td id="LC824" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L825" class="blob-num js-line-number" data-line-number="825"></td>
        <td id="LC825" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>return</span> <span class=pl-s1>arr</span><span class=pl-kos>.</span><span class=pl-en>indexOf</span><span class=pl-kos>(</span><span class=pl-s1>match</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L826" class="blob-num js-line-number" data-line-number="826"></td>
        <td id="LC826" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L827" class="blob-num js-line-number" data-line-number="827"></td>
        <td id="LC827" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L828" class="blob-num js-line-number" data-line-number="828"></td>
        <td id="LC828" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L829" class="blob-num js-line-number" data-line-number="829"></td>
        <td id="LC829" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * Loop trough the list of modifiers and run them in order,</span></td>
      </tr>
      <tr>
        <td id="L830" class="blob-num js-line-number" data-line-number="830"></td>
        <td id="LC830" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * each of them will then edit the data object.</span></td>
      </tr>
      <tr>
        <td id="L831" class="blob-num js-line-number" data-line-number="831"></td>
        <td id="LC831" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@method</span></span></td>
      </tr>
      <tr>
        <td id="L832" class="blob-num js-line-number" data-line-number="832"></td>
        <td id="LC832" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@memberof</span> Popper.Utils</span></td>
      </tr>
      <tr>
        <td id="L833" class="blob-num js-line-number" data-line-number="833"></td>
        <td id="LC833" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@param</span> {<span class=pl-smi>dataObject</span>} data</span></td>
      </tr>
      <tr>
        <td id="L834" class="blob-num js-line-number" data-line-number="834"></td>
        <td id="LC834" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@param</span> {<span class=pl-smi>Array</span>} modifiers</span></td>
      </tr>
      <tr>
        <td id="L835" class="blob-num js-line-number" data-line-number="835"></td>
        <td id="LC835" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@param</span> {<span class=pl-smi>String</span>} ends - Optional modifier name used as stopper</span></td>
      </tr>
      <tr>
        <td id="L836" class="blob-num js-line-number" data-line-number="836"></td>
        <td id="LC836" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@returns</span> {<span class=pl-smi>dataObject</span>}</span></td>
      </tr>
      <tr>
        <td id="L837" class="blob-num js-line-number" data-line-number="837"></td>
        <td id="LC837" class="blob-code blob-code-inner js-file-line"><span class=pl-c> */</span></td>
      </tr>
      <tr>
        <td id="L838" class="blob-num js-line-number" data-line-number="838"></td>
        <td id="LC838" class="blob-code blob-code-inner js-file-line"><span class=pl-k>function</span> <span class=pl-en>runModifiers</span><span class=pl-kos>(</span><span class=pl-s1>modifiers</span><span class=pl-kos>,</span> <span class=pl-s1>data</span><span class=pl-kos>,</span> <span class=pl-s1>ends</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L839" class="blob-num js-line-number" data-line-number="839"></td>
        <td id="LC839" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>modifiersToRun</span> <span class=pl-c1>=</span> <span class=pl-s1>ends</span> <span class=pl-c1>===</span> undefined ? <span class=pl-s1>modifiers</span> : <span class=pl-s1>modifiers</span><span class=pl-kos>.</span><span class=pl-en>slice</span><span class=pl-kos>(</span><span class=pl-c1>0</span><span class=pl-kos>,</span> <span class=pl-en>findIndex</span><span class=pl-kos>(</span><span class=pl-s1>modifiers</span><span class=pl-kos>,</span> <span class=pl-s>&#39;name&#39;</span><span class=pl-kos>,</span> <span class=pl-s1>ends</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L840" class="blob-num js-line-number" data-line-number="840"></td>
        <td id="LC840" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L841" class="blob-num js-line-number" data-line-number="841"></td>
        <td id="LC841" class="blob-code blob-code-inner js-file-line">  <span class=pl-s1>modifiersToRun</span><span class=pl-kos>.</span><span class=pl-en>forEach</span><span class=pl-kos>(</span><span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>modifier</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L842" class="blob-num js-line-number" data-line-number="842"></td>
        <td id="LC842" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>modifier</span><span class=pl-kos>.</span><span class=pl-c1>function</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L843" class="blob-num js-line-number" data-line-number="843"></td>
        <td id="LC843" class="blob-code blob-code-inner js-file-line">      <span class=pl-smi>console</span><span class=pl-kos>.</span><span class=pl-en>warn</span><span class=pl-kos>(</span><span class=pl-s>&#39;`modifier.function` is deprecated, use `modifier.fn`!&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L844" class="blob-num js-line-number" data-line-number="844"></td>
        <td id="LC844" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L845" class="blob-num js-line-number" data-line-number="845"></td>
        <td id="LC845" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>var</span> <span class=pl-s1>fn</span> <span class=pl-c1>=</span> <span class=pl-s1>modifier</span><span class=pl-kos>.</span><span class=pl-c1>function</span> <span class=pl-c1>||</span> <span class=pl-s1>modifier</span><span class=pl-kos>.</span><span class=pl-c1>fn</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L846" class="blob-num js-line-number" data-line-number="846"></td>
        <td id="LC846" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>modifier</span><span class=pl-kos>.</span><span class=pl-c1>enabled</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-en>isFunction</span><span class=pl-kos>(</span><span class=pl-s1>fn</span><span class=pl-kos>)</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L847" class="blob-num js-line-number" data-line-number="847"></td>
        <td id="LC847" class="blob-code blob-code-inner js-file-line">      <span class=pl-c>// Add properties to offsets to make them a complete clientRect object</span></td>
      </tr>
      <tr>
        <td id="L848" class="blob-num js-line-number" data-line-number="848"></td>
        <td id="LC848" class="blob-code blob-code-inner js-file-line">      <span class=pl-c>// we do this before each modifier to make sure the previous one doesn&#39;t</span></td>
      </tr>
      <tr>
        <td id="L849" class="blob-num js-line-number" data-line-number="849"></td>
        <td id="LC849" class="blob-code blob-code-inner js-file-line">      <span class=pl-c>// mess with these values</span></td>
      </tr>
      <tr>
        <td id="L850" class="blob-num js-line-number" data-line-number="850"></td>
        <td id="LC850" class="blob-code blob-code-inner js-file-line">      <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>offsets</span><span class=pl-kos>.</span><span class=pl-c1>popper</span> <span class=pl-c1>=</span> <span class=pl-en>getClientRect</span><span class=pl-kos>(</span><span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>offsets</span><span class=pl-kos>.</span><span class=pl-c1>popper</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L851" class="blob-num js-line-number" data-line-number="851"></td>
        <td id="LC851" class="blob-code blob-code-inner js-file-line">      <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>offsets</span><span class=pl-kos>.</span><span class=pl-c1>reference</span> <span class=pl-c1>=</span> <span class=pl-en>getClientRect</span><span class=pl-kos>(</span><span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>offsets</span><span class=pl-kos>.</span><span class=pl-c1>reference</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L852" class="blob-num js-line-number" data-line-number="852"></td>
        <td id="LC852" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L853" class="blob-num js-line-number" data-line-number="853"></td>
        <td id="LC853" class="blob-code blob-code-inner js-file-line">      <span class=pl-s1>data</span> <span class=pl-c1>=</span> <span class=pl-s1>fn</span><span class=pl-kos>(</span><span class=pl-s1>data</span><span class=pl-kos>,</span> <span class=pl-s1>modifier</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L854" class="blob-num js-line-number" data-line-number="854"></td>
        <td id="LC854" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L855" class="blob-num js-line-number" data-line-number="855"></td>
        <td id="LC855" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L856" class="blob-num js-line-number" data-line-number="856"></td>
        <td id="LC856" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L857" class="blob-num js-line-number" data-line-number="857"></td>
        <td id="LC857" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>return</span> <span class=pl-s1>data</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L858" class="blob-num js-line-number" data-line-number="858"></td>
        <td id="LC858" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L859" class="blob-num js-line-number" data-line-number="859"></td>
        <td id="LC859" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L860" class="blob-num js-line-number" data-line-number="860"></td>
        <td id="LC860" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L861" class="blob-num js-line-number" data-line-number="861"></td>
        <td id="LC861" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * Updates the position of the popper, computing the new offsets and applying</span></td>
      </tr>
      <tr>
        <td id="L862" class="blob-num js-line-number" data-line-number="862"></td>
        <td id="LC862" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * the new style.&lt;br /&gt;</span></td>
      </tr>
      <tr>
        <td id="L863" class="blob-num js-line-number" data-line-number="863"></td>
        <td id="LC863" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * Prefer `scheduleUpdate` over `update` because of performance reasons.</span></td>
      </tr>
      <tr>
        <td id="L864" class="blob-num js-line-number" data-line-number="864"></td>
        <td id="LC864" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@method</span></span></td>
      </tr>
      <tr>
        <td id="L865" class="blob-num js-line-number" data-line-number="865"></td>
        <td id="LC865" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@memberof</span> Popper</span></td>
      </tr>
      <tr>
        <td id="L866" class="blob-num js-line-number" data-line-number="866"></td>
        <td id="LC866" class="blob-code blob-code-inner js-file-line"><span class=pl-c> */</span></td>
      </tr>
      <tr>
        <td id="L867" class="blob-num js-line-number" data-line-number="867"></td>
        <td id="LC867" class="blob-code blob-code-inner js-file-line"><span class=pl-k>function</span> <span class=pl-en>update</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L868" class="blob-num js-line-number" data-line-number="868"></td>
        <td id="LC868" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// if popper is destroyed, don&#39;t perform any further update</span></td>
      </tr>
      <tr>
        <td id="L869" class="blob-num js-line-number" data-line-number="869"></td>
        <td id="LC869" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>state</span><span class=pl-kos>.</span><span class=pl-c1>isDestroyed</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L870" class="blob-num js-line-number" data-line-number="870"></td>
        <td id="LC870" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>return</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L871" class="blob-num js-line-number" data-line-number="871"></td>
        <td id="LC871" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L872" class="blob-num js-line-number" data-line-number="872"></td>
        <td id="LC872" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L873" class="blob-num js-line-number" data-line-number="873"></td>
        <td id="LC873" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>data</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L874" class="blob-num js-line-number" data-line-number="874"></td>
        <td id="LC874" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>instance</span>: <span class=pl-smi>this</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L875" class="blob-num js-line-number" data-line-number="875"></td>
        <td id="LC875" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>styles</span>: <span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L876" class="blob-num js-line-number" data-line-number="876"></td>
        <td id="LC876" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>arrowStyles</span>: <span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L877" class="blob-num js-line-number" data-line-number="877"></td>
        <td id="LC877" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>attributes</span>: <span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L878" class="blob-num js-line-number" data-line-number="878"></td>
        <td id="LC878" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>flipped</span>: <span class=pl-c1>false</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L879" class="blob-num js-line-number" data-line-number="879"></td>
        <td id="LC879" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>offsets</span>: <span class=pl-kos>{</span><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L880" class="blob-num js-line-number" data-line-number="880"></td>
        <td id="LC880" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L881" class="blob-num js-line-number" data-line-number="881"></td>
        <td id="LC881" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L882" class="blob-num js-line-number" data-line-number="882"></td>
        <td id="LC882" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// compute reference element offsets</span></td>
      </tr>
      <tr>
        <td id="L883" class="blob-num js-line-number" data-line-number="883"></td>
        <td id="LC883" class="blob-code blob-code-inner js-file-line">  <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>offsets</span><span class=pl-kos>.</span><span class=pl-c1>reference</span> <span class=pl-c1>=</span> <span class=pl-en>getReferenceOffsets</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>state</span><span class=pl-kos>,</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>popper</span><span class=pl-kos>,</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>reference</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L884" class="blob-num js-line-number" data-line-number="884"></td>
        <td id="LC884" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L885" class="blob-num js-line-number" data-line-number="885"></td>
        <td id="LC885" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// compute auto placement, store placement inside the data object,</span></td>
      </tr>
      <tr>
        <td id="L886" class="blob-num js-line-number" data-line-number="886"></td>
        <td id="LC886" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// modifiers will be able to edit `placement` if needed</span></td>
      </tr>
      <tr>
        <td id="L887" class="blob-num js-line-number" data-line-number="887"></td>
        <td id="LC887" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// and refer to originalPlacement to know the original value</span></td>
      </tr>
      <tr>
        <td id="L888" class="blob-num js-line-number" data-line-number="888"></td>
        <td id="LC888" class="blob-code blob-code-inner js-file-line">  <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>placement</span> <span class=pl-c1>=</span> <span class=pl-en>computeAutoPlacement</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>options</span><span class=pl-kos>.</span><span class=pl-c1>placement</span><span class=pl-kos>,</span> <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>offsets</span><span class=pl-kos>.</span><span class=pl-c1>reference</span><span class=pl-kos>,</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>popper</span><span class=pl-kos>,</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>reference</span><span class=pl-kos>,</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>options</span><span class=pl-kos>.</span><span class=pl-c1>modifiers</span><span class=pl-kos>.</span><span class=pl-c1>flip</span><span class=pl-kos>.</span><span class=pl-c1>boundariesElement</span><span class=pl-kos>,</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>options</span><span class=pl-kos>.</span><span class=pl-c1>modifiers</span><span class=pl-kos>.</span><span class=pl-c1>flip</span><span class=pl-kos>.</span><span class=pl-c1>padding</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L889" class="blob-num js-line-number" data-line-number="889"></td>
        <td id="LC889" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L890" class="blob-num js-line-number" data-line-number="890"></td>
        <td id="LC890" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// store the computed placement inside `originalPlacement`</span></td>
      </tr>
      <tr>
        <td id="L891" class="blob-num js-line-number" data-line-number="891"></td>
        <td id="LC891" class="blob-code blob-code-inner js-file-line">  <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>originalPlacement</span> <span class=pl-c1>=</span> <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>placement</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L892" class="blob-num js-line-number" data-line-number="892"></td>
        <td id="LC892" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L893" class="blob-num js-line-number" data-line-number="893"></td>
        <td id="LC893" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// compute the popper offsets</span></td>
      </tr>
      <tr>
        <td id="L894" class="blob-num js-line-number" data-line-number="894"></td>
        <td id="LC894" class="blob-code blob-code-inner js-file-line">  <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>offsets</span><span class=pl-kos>.</span><span class=pl-c1>popper</span> <span class=pl-c1>=</span> <span class=pl-en>getPopperOffsets</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>popper</span><span class=pl-kos>,</span> <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>offsets</span><span class=pl-kos>.</span><span class=pl-c1>reference</span><span class=pl-kos>,</span> <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>placement</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L895" class="blob-num js-line-number" data-line-number="895"></td>
        <td id="LC895" class="blob-code blob-code-inner js-file-line">  <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>offsets</span><span class=pl-kos>.</span><span class=pl-c1>popper</span><span class=pl-kos>.</span><span class=pl-c1>position</span> <span class=pl-c1>=</span> <span class=pl-s>&#39;absolute&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L896" class="blob-num js-line-number" data-line-number="896"></td>
        <td id="LC896" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L897" class="blob-num js-line-number" data-line-number="897"></td>
        <td id="LC897" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// run the modifiers</span></td>
      </tr>
      <tr>
        <td id="L898" class="blob-num js-line-number" data-line-number="898"></td>
        <td id="LC898" class="blob-code blob-code-inner js-file-line">  <span class=pl-s1>data</span> <span class=pl-c1>=</span> <span class=pl-en>runModifiers</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>modifiers</span><span class=pl-kos>,</span> <span class=pl-s1>data</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L899" class="blob-num js-line-number" data-line-number="899"></td>
        <td id="LC899" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L900" class="blob-num js-line-number" data-line-number="900"></td>
        <td id="LC900" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// the first `update` will call `onCreate` callback</span></td>
      </tr>
      <tr>
        <td id="L901" class="blob-num js-line-number" data-line-number="901"></td>
        <td id="LC901" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// the other ones will call `onUpdate` callback</span></td>
      </tr>
      <tr>
        <td id="L902" class="blob-num js-line-number" data-line-number="902"></td>
        <td id="LC902" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>state</span><span class=pl-kos>.</span><span class=pl-c1>isCreated</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L903" class="blob-num js-line-number" data-line-number="903"></td>
        <td id="LC903" class="blob-code blob-code-inner js-file-line">    <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>state</span><span class=pl-kos>.</span><span class=pl-c1>isCreated</span> <span class=pl-c1>=</span> <span class=pl-c1>true</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L904" class="blob-num js-line-number" data-line-number="904"></td>
        <td id="LC904" class="blob-code blob-code-inner js-file-line">    <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>options</span><span class=pl-kos>.</span><span class=pl-en>onCreate</span><span class=pl-kos>(</span><span class=pl-s1>data</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L905" class="blob-num js-line-number" data-line-number="905"></td>
        <td id="LC905" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L906" class="blob-num js-line-number" data-line-number="906"></td>
        <td id="LC906" class="blob-code blob-code-inner js-file-line">    <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>options</span><span class=pl-kos>.</span><span class=pl-en>onUpdate</span><span class=pl-kos>(</span><span class=pl-s1>data</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L907" class="blob-num js-line-number" data-line-number="907"></td>
        <td id="LC907" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L908" class="blob-num js-line-number" data-line-number="908"></td>
        <td id="LC908" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L909" class="blob-num js-line-number" data-line-number="909"></td>
        <td id="LC909" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L910" class="blob-num js-line-number" data-line-number="910"></td>
        <td id="LC910" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L911" class="blob-num js-line-number" data-line-number="911"></td>
        <td id="LC911" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * Helper used to know if the given modifier is enabled.</span></td>
      </tr>
      <tr>
        <td id="L912" class="blob-num js-line-number" data-line-number="912"></td>
        <td id="LC912" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@method</span></span></td>
      </tr>
      <tr>
        <td id="L913" class="blob-num js-line-number" data-line-number="913"></td>
        <td id="LC913" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@memberof</span> Popper.Utils</span></td>
      </tr>
      <tr>
        <td id="L914" class="blob-num js-line-number" data-line-number="914"></td>
        <td id="LC914" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@returns</span> {<span class=pl-smi>Boolean</span>}</span></td>
      </tr>
      <tr>
        <td id="L915" class="blob-num js-line-number" data-line-number="915"></td>
        <td id="LC915" class="blob-code blob-code-inner js-file-line"><span class=pl-c> */</span></td>
      </tr>
      <tr>
        <td id="L916" class="blob-num js-line-number" data-line-number="916"></td>
        <td id="LC916" class="blob-code blob-code-inner js-file-line"><span class=pl-k>function</span> <span class=pl-en>isModifierEnabled</span><span class=pl-kos>(</span><span class=pl-s1>modifiers</span><span class=pl-kos>,</span> <span class=pl-s1>modifierName</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L917" class="blob-num js-line-number" data-line-number="917"></td>
        <td id="LC917" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>return</span> <span class=pl-s1>modifiers</span><span class=pl-kos>.</span><span class=pl-en>some</span><span class=pl-kos>(</span><span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>_ref</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L918" class="blob-num js-line-number" data-line-number="918"></td>
        <td id="LC918" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>var</span> <span class=pl-s1>name</span> <span class=pl-c1>=</span> <span class=pl-s1>_ref</span><span class=pl-kos>.</span><span class=pl-c1>name</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L919" class="blob-num js-line-number" data-line-number="919"></td>
        <td id="LC919" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>enabled</span> <span class=pl-c1>=</span> <span class=pl-s1>_ref</span><span class=pl-kos>.</span><span class=pl-c1>enabled</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L920" class="blob-num js-line-number" data-line-number="920"></td>
        <td id="LC920" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>return</span> <span class=pl-s1>enabled</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>name</span> <span class=pl-c1>===</span> <span class=pl-s1>modifierName</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L921" class="blob-num js-line-number" data-line-number="921"></td>
        <td id="LC921" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L922" class="blob-num js-line-number" data-line-number="922"></td>
        <td id="LC922" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L923" class="blob-num js-line-number" data-line-number="923"></td>
        <td id="LC923" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L924" class="blob-num js-line-number" data-line-number="924"></td>
        <td id="LC924" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L925" class="blob-num js-line-number" data-line-number="925"></td>
        <td id="LC925" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * Get the prefixed supported property name</span></td>
      </tr>
      <tr>
        <td id="L926" class="blob-num js-line-number" data-line-number="926"></td>
        <td id="LC926" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@method</span></span></td>
      </tr>
      <tr>
        <td id="L927" class="blob-num js-line-number" data-line-number="927"></td>
        <td id="LC927" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@memberof</span> Popper.Utils</span></td>
      </tr>
      <tr>
        <td id="L928" class="blob-num js-line-number" data-line-number="928"></td>
        <td id="LC928" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@argument</span> {String} property (camelCase)</span></td>
      </tr>
      <tr>
        <td id="L929" class="blob-num js-line-number" data-line-number="929"></td>
        <td id="LC929" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@returns</span> {<span class=pl-smi>String</span>} prefixed property (camelCase or PascalCase, depending on the vendor prefix)</span></td>
      </tr>
      <tr>
        <td id="L930" class="blob-num js-line-number" data-line-number="930"></td>
        <td id="LC930" class="blob-code blob-code-inner js-file-line"><span class=pl-c> */</span></td>
      </tr>
      <tr>
        <td id="L931" class="blob-num js-line-number" data-line-number="931"></td>
        <td id="LC931" class="blob-code blob-code-inner js-file-line"><span class=pl-k>function</span> <span class=pl-en>getSupportedPropertyName</span><span class=pl-kos>(</span><span class=pl-s1>property</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L932" class="blob-num js-line-number" data-line-number="932"></td>
        <td id="LC932" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>prefixes</span> <span class=pl-c1>=</span> <span class=pl-kos>[</span><span class=pl-c1>false</span><span class=pl-kos>,</span> <span class=pl-s>&#39;ms&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;Webkit&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;Moz&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;O&#39;</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L933" class="blob-num js-line-number" data-line-number="933"></td>
        <td id="LC933" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>upperProp</span> <span class=pl-c1>=</span> <span class=pl-s1>property</span><span class=pl-kos>.</span><span class=pl-en>charAt</span><span class=pl-kos>(</span><span class=pl-c1>0</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>toUpperCase</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c1>+</span> <span class=pl-s1>property</span><span class=pl-kos>.</span><span class=pl-en>slice</span><span class=pl-kos>(</span><span class=pl-c1>1</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L934" class="blob-num js-line-number" data-line-number="934"></td>
        <td id="LC934" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L935" class="blob-num js-line-number" data-line-number="935"></td>
        <td id="LC935" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>for</span> <span class=pl-kos>(</span><span class=pl-k>var</span> <span class=pl-s1>i</span> <span class=pl-c1>=</span> <span class=pl-c1>0</span><span class=pl-kos>;</span> <span class=pl-s1>i</span> <span class=pl-c1>&lt;</span> <span class=pl-s1>prefixes</span><span class=pl-kos>.</span><span class=pl-c1>length</span> <span class=pl-c1>-</span> <span class=pl-c1>1</span><span class=pl-kos>;</span> <span class=pl-s1>i</span><span class=pl-c1>++</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L936" class="blob-num js-line-number" data-line-number="936"></td>
        <td id="LC936" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>var</span> <span class=pl-s1>prefix</span> <span class=pl-c1>=</span> <span class=pl-s1>prefixes</span><span class=pl-kos>[</span><span class=pl-s1>i</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L937" class="blob-num js-line-number" data-line-number="937"></td>
        <td id="LC937" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>var</span> <span class=pl-s1>toCheck</span> <span class=pl-c1>=</span> <span class=pl-s1>prefix</span> ? <span class=pl-s>&#39;&#39;</span> <span class=pl-c1>+</span> <span class=pl-s1>prefix</span> <span class=pl-c1>+</span> <span class=pl-s1>upperProp</span> : <span class=pl-s1>property</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L938" class="blob-num js-line-number" data-line-number="938"></td>
        <td id="LC938" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-k>typeof</span> <span class=pl-smi>window</span><span class=pl-kos>.</span><span class=pl-c1>document</span><span class=pl-kos>.</span><span class=pl-c1>body</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>[</span><span class=pl-s1>toCheck</span><span class=pl-kos>]</span> !== <span class=pl-s>&#39;undefined&#39;</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L939" class="blob-num js-line-number" data-line-number="939"></td>
        <td id="LC939" class="blob-code blob-code-inner js-file-line">      <span class=pl-k>return</span> <span class=pl-s1>toCheck</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L940" class="blob-num js-line-number" data-line-number="940"></td>
        <td id="LC940" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L941" class="blob-num js-line-number" data-line-number="941"></td>
        <td id="LC941" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L942" class="blob-num js-line-number" data-line-number="942"></td>
        <td id="LC942" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>return</span> null<span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L943" class="blob-num js-line-number" data-line-number="943"></td>
        <td id="LC943" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L944" class="blob-num js-line-number" data-line-number="944"></td>
        <td id="LC944" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L945" class="blob-num js-line-number" data-line-number="945"></td>
        <td id="LC945" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L946" class="blob-num js-line-number" data-line-number="946"></td>
        <td id="LC946" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * Destroy the popper</span></td>
      </tr>
      <tr>
        <td id="L947" class="blob-num js-line-number" data-line-number="947"></td>
        <td id="LC947" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@method</span></span></td>
      </tr>
      <tr>
        <td id="L948" class="blob-num js-line-number" data-line-number="948"></td>
        <td id="LC948" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@memberof</span> Popper</span></td>
      </tr>
      <tr>
        <td id="L949" class="blob-num js-line-number" data-line-number="949"></td>
        <td id="LC949" class="blob-code blob-code-inner js-file-line"><span class=pl-c> */</span></td>
      </tr>
      <tr>
        <td id="L950" class="blob-num js-line-number" data-line-number="950"></td>
        <td id="LC950" class="blob-code blob-code-inner js-file-line"><span class=pl-k>function</span> <span class=pl-en>destroy</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L951" class="blob-num js-line-number" data-line-number="951"></td>
        <td id="LC951" class="blob-code blob-code-inner js-file-line">  <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>state</span><span class=pl-kos>.</span><span class=pl-c1>isDestroyed</span> <span class=pl-c1>=</span> <span class=pl-c1>true</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L952" class="blob-num js-line-number" data-line-number="952"></td>
        <td id="LC952" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L953" class="blob-num js-line-number" data-line-number="953"></td>
        <td id="LC953" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// touch DOM only if `applyStyle` modifier is enabled</span></td>
      </tr>
      <tr>
        <td id="L954" class="blob-num js-line-number" data-line-number="954"></td>
        <td id="LC954" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-en>isModifierEnabled</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>modifiers</span><span class=pl-kos>,</span> <span class=pl-s>&#39;applyStyle&#39;</span><span class=pl-kos>)</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L955" class="blob-num js-line-number" data-line-number="955"></td>
        <td id="LC955" class="blob-code blob-code-inner js-file-line">    <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>popper</span><span class=pl-kos>.</span><span class=pl-en>removeAttribute</span><span class=pl-kos>(</span><span class=pl-s>&#39;x-placement&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L956" class="blob-num js-line-number" data-line-number="956"></td>
        <td id="LC956" class="blob-code blob-code-inner js-file-line">    <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>popper</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>left</span> <span class=pl-c1>=</span> <span class=pl-s>&#39;&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L957" class="blob-num js-line-number" data-line-number="957"></td>
        <td id="LC957" class="blob-code blob-code-inner js-file-line">    <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>popper</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>position</span> <span class=pl-c1>=</span> <span class=pl-s>&#39;&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L958" class="blob-num js-line-number" data-line-number="958"></td>
        <td id="LC958" class="blob-code blob-code-inner js-file-line">    <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>popper</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>top</span> <span class=pl-c1>=</span> <span class=pl-s>&#39;&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L959" class="blob-num js-line-number" data-line-number="959"></td>
        <td id="LC959" class="blob-code blob-code-inner js-file-line">    <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>popper</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>[</span><span class=pl-en>getSupportedPropertyName</span><span class=pl-kos>(</span><span class=pl-s>&#39;transform&#39;</span><span class=pl-kos>)</span><span class=pl-kos>]</span> <span class=pl-c1>=</span> <span class=pl-s>&#39;&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L960" class="blob-num js-line-number" data-line-number="960"></td>
        <td id="LC960" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L961" class="blob-num js-line-number" data-line-number="961"></td>
        <td id="LC961" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L962" class="blob-num js-line-number" data-line-number="962"></td>
        <td id="LC962" class="blob-code blob-code-inner js-file-line">  <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>disableEventListeners</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L963" class="blob-num js-line-number" data-line-number="963"></td>
        <td id="LC963" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L964" class="blob-num js-line-number" data-line-number="964"></td>
        <td id="LC964" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// remove the popper if user explicity asked for the deletion on destroy</span></td>
      </tr>
      <tr>
        <td id="L965" class="blob-num js-line-number" data-line-number="965"></td>
        <td id="LC965" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// do not use `remove` because IE11 doesn&#39;t support it</span></td>
      </tr>
      <tr>
        <td id="L966" class="blob-num js-line-number" data-line-number="966"></td>
        <td id="LC966" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>options</span><span class=pl-kos>.</span><span class=pl-c1>removeOnDestroy</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L967" class="blob-num js-line-number" data-line-number="967"></td>
        <td id="LC967" class="blob-code blob-code-inner js-file-line">    <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>popper</span><span class=pl-kos>.</span><span class=pl-c1>parentNode</span><span class=pl-kos>.</span><span class=pl-en>removeChild</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>popper</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L968" class="blob-num js-line-number" data-line-number="968"></td>
        <td id="LC968" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L969" class="blob-num js-line-number" data-line-number="969"></td>
        <td id="LC969" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>return</span> <span class=pl-smi>this</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L970" class="blob-num js-line-number" data-line-number="970"></td>
        <td id="LC970" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L971" class="blob-num js-line-number" data-line-number="971"></td>
        <td id="LC971" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L972" class="blob-num js-line-number" data-line-number="972"></td>
        <td id="LC972" class="blob-code blob-code-inner js-file-line"><span class=pl-k>function</span> <span class=pl-en>attachToScrollParents</span><span class=pl-kos>(</span><span class=pl-s1>scrollParent</span><span class=pl-kos>,</span> <span class=pl-s1>event</span><span class=pl-kos>,</span> <span class=pl-s1>callback</span><span class=pl-kos>,</span> <span class=pl-s1>scrollParents</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L973" class="blob-num js-line-number" data-line-number="973"></td>
        <td id="LC973" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>isBody</span> <span class=pl-c1>=</span> <span class=pl-s1>scrollParent</span><span class=pl-kos>.</span><span class=pl-c1>nodeName</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;BODY&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L974" class="blob-num js-line-number" data-line-number="974"></td>
        <td id="LC974" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>target</span> <span class=pl-c1>=</span> <span class=pl-s1>isBody</span> ? <span class=pl-smi>window</span> : <span class=pl-s1>scrollParent</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L975" class="blob-num js-line-number" data-line-number="975"></td>
        <td id="LC975" class="blob-code blob-code-inner js-file-line">  <span class=pl-s1>target</span><span class=pl-kos>.</span><span class=pl-en>addEventListener</span><span class=pl-kos>(</span><span class=pl-s1>event</span><span class=pl-kos>,</span> <span class=pl-s1>callback</span><span class=pl-kos>,</span> <span class=pl-kos>{</span> <span class=pl-c1>passive</span>: <span class=pl-c1>true</span> <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L976" class="blob-num js-line-number" data-line-number="976"></td>
        <td id="LC976" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L977" class="blob-num js-line-number" data-line-number="977"></td>
        <td id="LC977" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-s1>isBody</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L978" class="blob-num js-line-number" data-line-number="978"></td>
        <td id="LC978" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>attachToScrollParents</span><span class=pl-kos>(</span><span class=pl-en>getScrollParent</span><span class=pl-kos>(</span><span class=pl-s1>target</span><span class=pl-kos>.</span><span class=pl-c1>parentNode</span><span class=pl-kos>)</span><span class=pl-kos>,</span> <span class=pl-s1>event</span><span class=pl-kos>,</span> <span class=pl-s1>callback</span><span class=pl-kos>,</span> <span class=pl-s1>scrollParents</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L979" class="blob-num js-line-number" data-line-number="979"></td>
        <td id="LC979" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L980" class="blob-num js-line-number" data-line-number="980"></td>
        <td id="LC980" class="blob-code blob-code-inner js-file-line">  <span class=pl-s1>scrollParents</span><span class=pl-kos>.</span><span class=pl-en>push</span><span class=pl-kos>(</span><span class=pl-s1>target</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L981" class="blob-num js-line-number" data-line-number="981"></td>
        <td id="LC981" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L982" class="blob-num js-line-number" data-line-number="982"></td>
        <td id="LC982" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L983" class="blob-num js-line-number" data-line-number="983"></td>
        <td id="LC983" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L984" class="blob-num js-line-number" data-line-number="984"></td>
        <td id="LC984" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * Setup needed event listeners used to update the popper position</span></td>
      </tr>
      <tr>
        <td id="L985" class="blob-num js-line-number" data-line-number="985"></td>
        <td id="LC985" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@method</span></span></td>
      </tr>
      <tr>
        <td id="L986" class="blob-num js-line-number" data-line-number="986"></td>
        <td id="LC986" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@memberof</span> Popper.Utils</span></td>
      </tr>
      <tr>
        <td id="L987" class="blob-num js-line-number" data-line-number="987"></td>
        <td id="LC987" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@private</span></span></td>
      </tr>
      <tr>
        <td id="L988" class="blob-num js-line-number" data-line-number="988"></td>
        <td id="LC988" class="blob-code blob-code-inner js-file-line"><span class=pl-c> */</span></td>
      </tr>
      <tr>
        <td id="L989" class="blob-num js-line-number" data-line-number="989"></td>
        <td id="LC989" class="blob-code blob-code-inner js-file-line"><span class=pl-k>function</span> <span class=pl-en>setupEventListeners</span><span class=pl-kos>(</span><span class=pl-s1>reference</span><span class=pl-kos>,</span> <span class=pl-s1>options</span><span class=pl-kos>,</span> <span class=pl-s1>state</span><span class=pl-kos>,</span> <span class=pl-s1>updateBound</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L990" class="blob-num js-line-number" data-line-number="990"></td>
        <td id="LC990" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// Resize event listener on window</span></td>
      </tr>
      <tr>
        <td id="L991" class="blob-num js-line-number" data-line-number="991"></td>
        <td id="LC991" class="blob-code blob-code-inner js-file-line">  <span class=pl-s1>state</span><span class=pl-kos>.</span><span class=pl-c1>updateBound</span> <span class=pl-c1>=</span> <span class=pl-s1>updateBound</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L992" class="blob-num js-line-number" data-line-number="992"></td>
        <td id="LC992" class="blob-code blob-code-inner js-file-line">  <span class=pl-smi>window</span><span class=pl-kos>.</span><span class=pl-en>addEventListener</span><span class=pl-kos>(</span><span class=pl-s>&#39;resize&#39;</span><span class=pl-kos>,</span> <span class=pl-s1>state</span><span class=pl-kos>.</span><span class=pl-c1>updateBound</span><span class=pl-kos>,</span> <span class=pl-kos>{</span> <span class=pl-c1>passive</span>: <span class=pl-c1>true</span> <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L993" class="blob-num js-line-number" data-line-number="993"></td>
        <td id="LC993" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L994" class="blob-num js-line-number" data-line-number="994"></td>
        <td id="LC994" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// Scroll event listener on scroll parents</span></td>
      </tr>
      <tr>
        <td id="L995" class="blob-num js-line-number" data-line-number="995"></td>
        <td id="LC995" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>scrollElement</span> <span class=pl-c1>=</span> <span class=pl-en>getScrollParent</span><span class=pl-kos>(</span><span class=pl-s1>reference</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L996" class="blob-num js-line-number" data-line-number="996"></td>
        <td id="LC996" class="blob-code blob-code-inner js-file-line">  <span class=pl-en>attachToScrollParents</span><span class=pl-kos>(</span><span class=pl-s1>scrollElement</span><span class=pl-kos>,</span> <span class=pl-s>&#39;scroll&#39;</span><span class=pl-kos>,</span> <span class=pl-s1>state</span><span class=pl-kos>.</span><span class=pl-c1>updateBound</span><span class=pl-kos>,</span> <span class=pl-s1>state</span><span class=pl-kos>.</span><span class=pl-c1>scrollParents</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L997" class="blob-num js-line-number" data-line-number="997"></td>
        <td id="LC997" class="blob-code blob-code-inner js-file-line">  <span class=pl-s1>state</span><span class=pl-kos>.</span><span class=pl-c1>scrollElement</span> <span class=pl-c1>=</span> <span class=pl-s1>scrollElement</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L998" class="blob-num js-line-number" data-line-number="998"></td>
        <td id="LC998" class="blob-code blob-code-inner js-file-line">  <span class=pl-s1>state</span><span class=pl-kos>.</span><span class=pl-c1>eventsEnabled</span> <span class=pl-c1>=</span> <span class=pl-c1>true</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L999" class="blob-num js-line-number" data-line-number="999"></td>
        <td id="LC999" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1000" class="blob-num js-line-number" data-line-number="1000"></td>
        <td id="LC1000" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>return</span> <span class=pl-s1>state</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1001" class="blob-num js-line-number" data-line-number="1001"></td>
        <td id="LC1001" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1002" class="blob-num js-line-number" data-line-number="1002"></td>
        <td id="LC1002" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1003" class="blob-num js-line-number" data-line-number="1003"></td>
        <td id="LC1003" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L1004" class="blob-num js-line-number" data-line-number="1004"></td>
        <td id="LC1004" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * It will add resize/scroll events and start recalculating</span></td>
      </tr>
      <tr>
        <td id="L1005" class="blob-num js-line-number" data-line-number="1005"></td>
        <td id="LC1005" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * position of the popper element when they are triggered.</span></td>
      </tr>
      <tr>
        <td id="L1006" class="blob-num js-line-number" data-line-number="1006"></td>
        <td id="LC1006" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@method</span></span></td>
      </tr>
      <tr>
        <td id="L1007" class="blob-num js-line-number" data-line-number="1007"></td>
        <td id="LC1007" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@memberof</span> Popper</span></td>
      </tr>
      <tr>
        <td id="L1008" class="blob-num js-line-number" data-line-number="1008"></td>
        <td id="LC1008" class="blob-code blob-code-inner js-file-line"><span class=pl-c> */</span></td>
      </tr>
      <tr>
        <td id="L1009" class="blob-num js-line-number" data-line-number="1009"></td>
        <td id="LC1009" class="blob-code blob-code-inner js-file-line"><span class=pl-k>function</span> <span class=pl-en>enableEventListeners</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1010" class="blob-num js-line-number" data-line-number="1010"></td>
        <td id="LC1010" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>state</span><span class=pl-kos>.</span><span class=pl-c1>eventsEnabled</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1011" class="blob-num js-line-number" data-line-number="1011"></td>
        <td id="LC1011" class="blob-code blob-code-inner js-file-line">    <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>state</span> <span class=pl-c1>=</span> <span class=pl-en>setupEventListeners</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>reference</span><span class=pl-kos>,</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>options</span><span class=pl-kos>,</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>state</span><span class=pl-kos>,</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>scheduleUpdate</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1012" class="blob-num js-line-number" data-line-number="1012"></td>
        <td id="LC1012" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1013" class="blob-num js-line-number" data-line-number="1013"></td>
        <td id="LC1013" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1014" class="blob-num js-line-number" data-line-number="1014"></td>
        <td id="LC1014" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1015" class="blob-num js-line-number" data-line-number="1015"></td>
        <td id="LC1015" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L1016" class="blob-num js-line-number" data-line-number="1016"></td>
        <td id="LC1016" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * Remove event listeners used to update the popper position</span></td>
      </tr>
      <tr>
        <td id="L1017" class="blob-num js-line-number" data-line-number="1017"></td>
        <td id="LC1017" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@method</span></span></td>
      </tr>
      <tr>
        <td id="L1018" class="blob-num js-line-number" data-line-number="1018"></td>
        <td id="LC1018" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@memberof</span> Popper.Utils</span></td>
      </tr>
      <tr>
        <td id="L1019" class="blob-num js-line-number" data-line-number="1019"></td>
        <td id="LC1019" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@private</span></span></td>
      </tr>
      <tr>
        <td id="L1020" class="blob-num js-line-number" data-line-number="1020"></td>
        <td id="LC1020" class="blob-code blob-code-inner js-file-line"><span class=pl-c> */</span></td>
      </tr>
      <tr>
        <td id="L1021" class="blob-num js-line-number" data-line-number="1021"></td>
        <td id="LC1021" class="blob-code blob-code-inner js-file-line"><span class=pl-k>function</span> <span class=pl-en>removeEventListeners</span><span class=pl-kos>(</span><span class=pl-s1>reference</span><span class=pl-kos>,</span> <span class=pl-s1>state</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1022" class="blob-num js-line-number" data-line-number="1022"></td>
        <td id="LC1022" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// Remove resize event listener on window</span></td>
      </tr>
      <tr>
        <td id="L1023" class="blob-num js-line-number" data-line-number="1023"></td>
        <td id="LC1023" class="blob-code blob-code-inner js-file-line">  <span class=pl-smi>window</span><span class=pl-kos>.</span><span class=pl-en>removeEventListener</span><span class=pl-kos>(</span><span class=pl-s>&#39;resize&#39;</span><span class=pl-kos>,</span> <span class=pl-s1>state</span><span class=pl-kos>.</span><span class=pl-c1>updateBound</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1024" class="blob-num js-line-number" data-line-number="1024"></td>
        <td id="LC1024" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1025" class="blob-num js-line-number" data-line-number="1025"></td>
        <td id="LC1025" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// Remove scroll event listener on scroll parents</span></td>
      </tr>
      <tr>
        <td id="L1026" class="blob-num js-line-number" data-line-number="1026"></td>
        <td id="LC1026" class="blob-code blob-code-inner js-file-line">  <span class=pl-s1>state</span><span class=pl-kos>.</span><span class=pl-c1>scrollParents</span><span class=pl-kos>.</span><span class=pl-en>forEach</span><span class=pl-kos>(</span><span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>target</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1027" class="blob-num js-line-number" data-line-number="1027"></td>
        <td id="LC1027" class="blob-code blob-code-inner js-file-line">    <span class=pl-s1>target</span><span class=pl-kos>.</span><span class=pl-en>removeEventListener</span><span class=pl-kos>(</span><span class=pl-s>&#39;scroll&#39;</span><span class=pl-kos>,</span> <span class=pl-s1>state</span><span class=pl-kos>.</span><span class=pl-c1>updateBound</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1028" class="blob-num js-line-number" data-line-number="1028"></td>
        <td id="LC1028" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1029" class="blob-num js-line-number" data-line-number="1029"></td>
        <td id="LC1029" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1030" class="blob-num js-line-number" data-line-number="1030"></td>
        <td id="LC1030" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// Reset state</span></td>
      </tr>
      <tr>
        <td id="L1031" class="blob-num js-line-number" data-line-number="1031"></td>
        <td id="LC1031" class="blob-code blob-code-inner js-file-line">  <span class=pl-s1>state</span><span class=pl-kos>.</span><span class=pl-c1>updateBound</span> <span class=pl-c1>=</span> null<span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1032" class="blob-num js-line-number" data-line-number="1032"></td>
        <td id="LC1032" class="blob-code blob-code-inner js-file-line">  <span class=pl-s1>state</span><span class=pl-kos>.</span><span class=pl-c1>scrollParents</span> <span class=pl-c1>=</span> <span class=pl-kos>[</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1033" class="blob-num js-line-number" data-line-number="1033"></td>
        <td id="LC1033" class="blob-code blob-code-inner js-file-line">  <span class=pl-s1>state</span><span class=pl-kos>.</span><span class=pl-c1>scrollElement</span> <span class=pl-c1>=</span> null<span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1034" class="blob-num js-line-number" data-line-number="1034"></td>
        <td id="LC1034" class="blob-code blob-code-inner js-file-line">  <span class=pl-s1>state</span><span class=pl-kos>.</span><span class=pl-c1>eventsEnabled</span> <span class=pl-c1>=</span> <span class=pl-c1>false</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1035" class="blob-num js-line-number" data-line-number="1035"></td>
        <td id="LC1035" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>return</span> <span class=pl-s1>state</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1036" class="blob-num js-line-number" data-line-number="1036"></td>
        <td id="LC1036" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1037" class="blob-num js-line-number" data-line-number="1037"></td>
        <td id="LC1037" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1038" class="blob-num js-line-number" data-line-number="1038"></td>
        <td id="LC1038" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L1039" class="blob-num js-line-number" data-line-number="1039"></td>
        <td id="LC1039" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * It will remove resize/scroll events and won&#39;t recalculate popper position</span></td>
      </tr>
      <tr>
        <td id="L1040" class="blob-num js-line-number" data-line-number="1040"></td>
        <td id="LC1040" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * when they are triggered. It also won&#39;t trigger onUpdate callback anymore,</span></td>
      </tr>
      <tr>
        <td id="L1041" class="blob-num js-line-number" data-line-number="1041"></td>
        <td id="LC1041" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * unless you call `update` method manually.</span></td>
      </tr>
      <tr>
        <td id="L1042" class="blob-num js-line-number" data-line-number="1042"></td>
        <td id="LC1042" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@method</span></span></td>
      </tr>
      <tr>
        <td id="L1043" class="blob-num js-line-number" data-line-number="1043"></td>
        <td id="LC1043" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@memberof</span> Popper</span></td>
      </tr>
      <tr>
        <td id="L1044" class="blob-num js-line-number" data-line-number="1044"></td>
        <td id="LC1044" class="blob-code blob-code-inner js-file-line"><span class=pl-c> */</span></td>
      </tr>
      <tr>
        <td id="L1045" class="blob-num js-line-number" data-line-number="1045"></td>
        <td id="LC1045" class="blob-code blob-code-inner js-file-line"><span class=pl-k>function</span> <span class=pl-en>disableEventListeners</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1046" class="blob-num js-line-number" data-line-number="1046"></td>
        <td id="LC1046" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>state</span><span class=pl-kos>.</span><span class=pl-c1>eventsEnabled</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1047" class="blob-num js-line-number" data-line-number="1047"></td>
        <td id="LC1047" class="blob-code blob-code-inner js-file-line">    <span class=pl-smi>window</span><span class=pl-kos>.</span><span class=pl-en>cancelAnimationFrame</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>scheduleUpdate</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1048" class="blob-num js-line-number" data-line-number="1048"></td>
        <td id="LC1048" class="blob-code blob-code-inner js-file-line">    <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>state</span> <span class=pl-c1>=</span> <span class=pl-en>removeEventListeners</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>reference</span><span class=pl-kos>,</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>state</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1049" class="blob-num js-line-number" data-line-number="1049"></td>
        <td id="LC1049" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1050" class="blob-num js-line-number" data-line-number="1050"></td>
        <td id="LC1050" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1051" class="blob-num js-line-number" data-line-number="1051"></td>
        <td id="LC1051" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1052" class="blob-num js-line-number" data-line-number="1052"></td>
        <td id="LC1052" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L1053" class="blob-num js-line-number" data-line-number="1053"></td>
        <td id="LC1053" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * Tells if a given input is a number</span></td>
      </tr>
      <tr>
        <td id="L1054" class="blob-num js-line-number" data-line-number="1054"></td>
        <td id="LC1054" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@method</span></span></td>
      </tr>
      <tr>
        <td id="L1055" class="blob-num js-line-number" data-line-number="1055"></td>
        <td id="LC1055" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@memberof</span> Popper.Utils</span></td>
      </tr>
      <tr>
        <td id="L1056" class="blob-num js-line-number" data-line-number="1056"></td>
        <td id="LC1056" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@param</span> {<span class=pl-smi>*</span>} input to check</span></td>
      </tr>
      <tr>
        <td id="L1057" class="blob-num js-line-number" data-line-number="1057"></td>
        <td id="LC1057" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@return</span> {<span class=pl-smi>Boolean</span>}</span></td>
      </tr>
      <tr>
        <td id="L1058" class="blob-num js-line-number" data-line-number="1058"></td>
        <td id="LC1058" class="blob-code blob-code-inner js-file-line"><span class=pl-c> */</span></td>
      </tr>
      <tr>
        <td id="L1059" class="blob-num js-line-number" data-line-number="1059"></td>
        <td id="LC1059" class="blob-code blob-code-inner js-file-line"><span class=pl-k>function</span> <span class=pl-en>isNumeric</span><span class=pl-kos>(</span><span class=pl-s1>n</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1060" class="blob-num js-line-number" data-line-number="1060"></td>
        <td id="LC1060" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>return</span> <span class=pl-s1>n</span> !== <span class=pl-s>&#39;&#39;</span> <span class=pl-c1>&amp;&amp;</span> !<span class=pl-en>isNaN</span><span class=pl-kos>(</span><span class=pl-en>parseFloat</span><span class=pl-kos>(</span><span class=pl-s1>n</span><span class=pl-kos>)</span><span class=pl-kos>)</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-en>isFinite</span><span class=pl-kos>(</span><span class=pl-s1>n</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1061" class="blob-num js-line-number" data-line-number="1061"></td>
        <td id="LC1061" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1062" class="blob-num js-line-number" data-line-number="1062"></td>
        <td id="LC1062" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1063" class="blob-num js-line-number" data-line-number="1063"></td>
        <td id="LC1063" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L1064" class="blob-num js-line-number" data-line-number="1064"></td>
        <td id="LC1064" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * Set the style to the given popper</span></td>
      </tr>
      <tr>
        <td id="L1065" class="blob-num js-line-number" data-line-number="1065"></td>
        <td id="LC1065" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@method</span></span></td>
      </tr>
      <tr>
        <td id="L1066" class="blob-num js-line-number" data-line-number="1066"></td>
        <td id="LC1066" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@memberof</span> Popper.Utils</span></td>
      </tr>
      <tr>
        <td id="L1067" class="blob-num js-line-number" data-line-number="1067"></td>
        <td id="LC1067" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@argument</span> {Element} element - Element to apply the style to</span></td>
      </tr>
      <tr>
        <td id="L1068" class="blob-num js-line-number" data-line-number="1068"></td>
        <td id="LC1068" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@argument</span> {Object} styles</span></td>
      </tr>
      <tr>
        <td id="L1069" class="blob-num js-line-number" data-line-number="1069"></td>
        <td id="LC1069" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * Object with a list of properties and values which will be applied to the element</span></td>
      </tr>
      <tr>
        <td id="L1070" class="blob-num js-line-number" data-line-number="1070"></td>
        <td id="LC1070" class="blob-code blob-code-inner js-file-line"><span class=pl-c> */</span></td>
      </tr>
      <tr>
        <td id="L1071" class="blob-num js-line-number" data-line-number="1071"></td>
        <td id="LC1071" class="blob-code blob-code-inner js-file-line"><span class=pl-k>function</span> <span class=pl-en>setStyles</span><span class=pl-kos>(</span><span class=pl-s1>element</span><span class=pl-kos>,</span> <span class=pl-s1>styles</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1072" class="blob-num js-line-number" data-line-number="1072"></td>
        <td id="LC1072" class="blob-code blob-code-inner js-file-line">  <span class=pl-v>Object</span><span class=pl-kos>.</span><span class=pl-en>keys</span><span class=pl-kos>(</span><span class=pl-s1>styles</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>forEach</span><span class=pl-kos>(</span><span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>prop</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1073" class="blob-num js-line-number" data-line-number="1073"></td>
        <td id="LC1073" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>var</span> <span class=pl-s1>unit</span> <span class=pl-c1>=</span> <span class=pl-s>&#39;&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1074" class="blob-num js-line-number" data-line-number="1074"></td>
        <td id="LC1074" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>// add unit if the value is numeric and is one of the following</span></td>
      </tr>
      <tr>
        <td id="L1075" class="blob-num js-line-number" data-line-number="1075"></td>
        <td id="LC1075" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-kos>[</span><span class=pl-s>&#39;width&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;height&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;top&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;right&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;bottom&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;left&#39;</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-en>indexOf</span><span class=pl-kos>(</span><span class=pl-s1>prop</span><span class=pl-kos>)</span> !== <span class=pl-c1>-</span><span class=pl-c1>1</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-en>isNumeric</span><span class=pl-kos>(</span><span class=pl-s1>styles</span><span class=pl-kos>[</span><span class=pl-s1>prop</span><span class=pl-kos>]</span><span class=pl-kos>)</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1076" class="blob-num js-line-number" data-line-number="1076"></td>
        <td id="LC1076" class="blob-code blob-code-inner js-file-line">      <span class=pl-s1>unit</span> <span class=pl-c1>=</span> <span class=pl-s>&#39;px&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1077" class="blob-num js-line-number" data-line-number="1077"></td>
        <td id="LC1077" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1078" class="blob-num js-line-number" data-line-number="1078"></td>
        <td id="LC1078" class="blob-code blob-code-inner js-file-line">    <span class=pl-s1>element</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>[</span><span class=pl-s1>prop</span><span class=pl-kos>]</span> <span class=pl-c1>=</span> <span class=pl-s1>styles</span><span class=pl-kos>[</span><span class=pl-s1>prop</span><span class=pl-kos>]</span> <span class=pl-c1>+</span> <span class=pl-s1>unit</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1079" class="blob-num js-line-number" data-line-number="1079"></td>
        <td id="LC1079" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1080" class="blob-num js-line-number" data-line-number="1080"></td>
        <td id="LC1080" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1081" class="blob-num js-line-number" data-line-number="1081"></td>
        <td id="LC1081" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1082" class="blob-num js-line-number" data-line-number="1082"></td>
        <td id="LC1082" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L1083" class="blob-num js-line-number" data-line-number="1083"></td>
        <td id="LC1083" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * Set the attributes to the given popper</span></td>
      </tr>
      <tr>
        <td id="L1084" class="blob-num js-line-number" data-line-number="1084"></td>
        <td id="LC1084" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@method</span></span></td>
      </tr>
      <tr>
        <td id="L1085" class="blob-num js-line-number" data-line-number="1085"></td>
        <td id="LC1085" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@memberof</span> Popper.Utils</span></td>
      </tr>
      <tr>
        <td id="L1086" class="blob-num js-line-number" data-line-number="1086"></td>
        <td id="LC1086" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@argument</span> {Element} element - Element to apply the attributes to</span></td>
      </tr>
      <tr>
        <td id="L1087" class="blob-num js-line-number" data-line-number="1087"></td>
        <td id="LC1087" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@argument</span> {Object} styles</span></td>
      </tr>
      <tr>
        <td id="L1088" class="blob-num js-line-number" data-line-number="1088"></td>
        <td id="LC1088" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * Object with a list of properties and values which will be applied to the element</span></td>
      </tr>
      <tr>
        <td id="L1089" class="blob-num js-line-number" data-line-number="1089"></td>
        <td id="LC1089" class="blob-code blob-code-inner js-file-line"><span class=pl-c> */</span></td>
      </tr>
      <tr>
        <td id="L1090" class="blob-num js-line-number" data-line-number="1090"></td>
        <td id="LC1090" class="blob-code blob-code-inner js-file-line"><span class=pl-k>function</span> <span class=pl-en>setAttributes</span><span class=pl-kos>(</span><span class=pl-s1>element</span><span class=pl-kos>,</span> <span class=pl-s1>attributes</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1091" class="blob-num js-line-number" data-line-number="1091"></td>
        <td id="LC1091" class="blob-code blob-code-inner js-file-line">  <span class=pl-v>Object</span><span class=pl-kos>.</span><span class=pl-en>keys</span><span class=pl-kos>(</span><span class=pl-s1>attributes</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>forEach</span><span class=pl-kos>(</span><span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>prop</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1092" class="blob-num js-line-number" data-line-number="1092"></td>
        <td id="LC1092" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>var</span> <span class=pl-s1>value</span> <span class=pl-c1>=</span> <span class=pl-s1>attributes</span><span class=pl-kos>[</span><span class=pl-s1>prop</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1093" class="blob-num js-line-number" data-line-number="1093"></td>
        <td id="LC1093" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>value</span> !== <span class=pl-c1>false</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1094" class="blob-num js-line-number" data-line-number="1094"></td>
        <td id="LC1094" class="blob-code blob-code-inner js-file-line">      <span class=pl-s1>element</span><span class=pl-kos>.</span><span class=pl-en>setAttribute</span><span class=pl-kos>(</span><span class=pl-s1>prop</span><span class=pl-kos>,</span> <span class=pl-s1>attributes</span><span class=pl-kos>[</span><span class=pl-s1>prop</span><span class=pl-kos>]</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1095" class="blob-num js-line-number" data-line-number="1095"></td>
        <td id="LC1095" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1096" class="blob-num js-line-number" data-line-number="1096"></td>
        <td id="LC1096" class="blob-code blob-code-inner js-file-line">      <span class=pl-s1>element</span><span class=pl-kos>.</span><span class=pl-en>removeAttribute</span><span class=pl-kos>(</span><span class=pl-s1>prop</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1097" class="blob-num js-line-number" data-line-number="1097"></td>
        <td id="LC1097" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1098" class="blob-num js-line-number" data-line-number="1098"></td>
        <td id="LC1098" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1099" class="blob-num js-line-number" data-line-number="1099"></td>
        <td id="LC1099" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1100" class="blob-num js-line-number" data-line-number="1100"></td>
        <td id="LC1100" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1101" class="blob-num js-line-number" data-line-number="1101"></td>
        <td id="LC1101" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L1102" class="blob-num js-line-number" data-line-number="1102"></td>
        <td id="LC1102" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@function</span></span></td>
      </tr>
      <tr>
        <td id="L1103" class="blob-num js-line-number" data-line-number="1103"></td>
        <td id="LC1103" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@memberof</span> Modifiers</span></td>
      </tr>
      <tr>
        <td id="L1104" class="blob-num js-line-number" data-line-number="1104"></td>
        <td id="LC1104" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@argument</span> {Object} data - The data object generated by `update` method</span></td>
      </tr>
      <tr>
        <td id="L1105" class="blob-num js-line-number" data-line-number="1105"></td>
        <td id="LC1105" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@argument</span> {Object} data.styles - List of style properties - values to apply to popper element</span></td>
      </tr>
      <tr>
        <td id="L1106" class="blob-num js-line-number" data-line-number="1106"></td>
        <td id="LC1106" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@argument</span> {Object} data.attributes - List of attribute properties - values to apply to popper element</span></td>
      </tr>
      <tr>
        <td id="L1107" class="blob-num js-line-number" data-line-number="1107"></td>
        <td id="LC1107" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@argument</span> {Object} options - Modifiers configuration and options</span></td>
      </tr>
      <tr>
        <td id="L1108" class="blob-num js-line-number" data-line-number="1108"></td>
        <td id="LC1108" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@returns</span> {<span class=pl-smi>Object</span>} The same data object</span></td>
      </tr>
      <tr>
        <td id="L1109" class="blob-num js-line-number" data-line-number="1109"></td>
        <td id="LC1109" class="blob-code blob-code-inner js-file-line"><span class=pl-c> */</span></td>
      </tr>
      <tr>
        <td id="L1110" class="blob-num js-line-number" data-line-number="1110"></td>
        <td id="LC1110" class="blob-code blob-code-inner js-file-line"><span class=pl-k>function</span> <span class=pl-en>applyStyle</span><span class=pl-kos>(</span><span class=pl-s1>data</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1111" class="blob-num js-line-number" data-line-number="1111"></td>
        <td id="LC1111" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// any property present in `data.styles` will be applied to the popper,</span></td>
      </tr>
      <tr>
        <td id="L1112" class="blob-num js-line-number" data-line-number="1112"></td>
        <td id="LC1112" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// in this way we can make the 3rd party modifiers add custom styles to it</span></td>
      </tr>
      <tr>
        <td id="L1113" class="blob-num js-line-number" data-line-number="1113"></td>
        <td id="LC1113" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// Be aware, modifiers could override the properties defined in the previous</span></td>
      </tr>
      <tr>
        <td id="L1114" class="blob-num js-line-number" data-line-number="1114"></td>
        <td id="LC1114" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// lines of this modifier!</span></td>
      </tr>
      <tr>
        <td id="L1115" class="blob-num js-line-number" data-line-number="1115"></td>
        <td id="LC1115" class="blob-code blob-code-inner js-file-line">  <span class=pl-en>setStyles</span><span class=pl-kos>(</span><span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>instance</span><span class=pl-kos>.</span><span class=pl-c1>popper</span><span class=pl-kos>,</span> <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>styles</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1116" class="blob-num js-line-number" data-line-number="1116"></td>
        <td id="LC1116" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1117" class="blob-num js-line-number" data-line-number="1117"></td>
        <td id="LC1117" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// any property present in `data.attributes` will be applied to the popper,</span></td>
      </tr>
      <tr>
        <td id="L1118" class="blob-num js-line-number" data-line-number="1118"></td>
        <td id="LC1118" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// they will be set as HTML attributes of the element</span></td>
      </tr>
      <tr>
        <td id="L1119" class="blob-num js-line-number" data-line-number="1119"></td>
        <td id="LC1119" class="blob-code blob-code-inner js-file-line">  <span class=pl-en>setAttributes</span><span class=pl-kos>(</span><span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>instance</span><span class=pl-kos>.</span><span class=pl-c1>popper</span><span class=pl-kos>,</span> <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>attributes</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1120" class="blob-num js-line-number" data-line-number="1120"></td>
        <td id="LC1120" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1121" class="blob-num js-line-number" data-line-number="1121"></td>
        <td id="LC1121" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// if arrowElement is defined and arrowStyles has some properties</span></td>
      </tr>
      <tr>
        <td id="L1122" class="blob-num js-line-number" data-line-number="1122"></td>
        <td id="LC1122" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>arrowElement</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-v>Object</span><span class=pl-kos>.</span><span class=pl-en>keys</span><span class=pl-kos>(</span><span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>arrowStyles</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1123" class="blob-num js-line-number" data-line-number="1123"></td>
        <td id="LC1123" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>setStyles</span><span class=pl-kos>(</span><span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>arrowElement</span><span class=pl-kos>,</span> <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>arrowStyles</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1124" class="blob-num js-line-number" data-line-number="1124"></td>
        <td id="LC1124" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1125" class="blob-num js-line-number" data-line-number="1125"></td>
        <td id="LC1125" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1126" class="blob-num js-line-number" data-line-number="1126"></td>
        <td id="LC1126" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>return</span> <span class=pl-s1>data</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1127" class="blob-num js-line-number" data-line-number="1127"></td>
        <td id="LC1127" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1128" class="blob-num js-line-number" data-line-number="1128"></td>
        <td id="LC1128" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1129" class="blob-num js-line-number" data-line-number="1129"></td>
        <td id="LC1129" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L1130" class="blob-num js-line-number" data-line-number="1130"></td>
        <td id="LC1130" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * Set the x-placement attribute before everything else because it could be used</span></td>
      </tr>
      <tr>
        <td id="L1131" class="blob-num js-line-number" data-line-number="1131"></td>
        <td id="LC1131" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * to add margins to the popper margins needs to be calculated to get the</span></td>
      </tr>
      <tr>
        <td id="L1132" class="blob-num js-line-number" data-line-number="1132"></td>
        <td id="LC1132" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * correct popper offsets.</span></td>
      </tr>
      <tr>
        <td id="L1133" class="blob-num js-line-number" data-line-number="1133"></td>
        <td id="LC1133" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@method</span></span></td>
      </tr>
      <tr>
        <td id="L1134" class="blob-num js-line-number" data-line-number="1134"></td>
        <td id="LC1134" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@memberof</span> Popper.modifiers</span></td>
      </tr>
      <tr>
        <td id="L1135" class="blob-num js-line-number" data-line-number="1135"></td>
        <td id="LC1135" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@param</span> {<span class=pl-smi>HTMLElement</span>} reference - The reference element used to position the popper</span></td>
      </tr>
      <tr>
        <td id="L1136" class="blob-num js-line-number" data-line-number="1136"></td>
        <td id="LC1136" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@param</span> {<span class=pl-smi>HTMLElement</span>} popper - The HTML element used as popper.</span></td>
      </tr>
      <tr>
        <td id="L1137" class="blob-num js-line-number" data-line-number="1137"></td>
        <td id="LC1137" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@param</span> {<span class=pl-smi>Object</span>} options - Popper.js options</span></td>
      </tr>
      <tr>
        <td id="L1138" class="blob-num js-line-number" data-line-number="1138"></td>
        <td id="LC1138" class="blob-code blob-code-inner js-file-line"><span class=pl-c> */</span></td>
      </tr>
      <tr>
        <td id="L1139" class="blob-num js-line-number" data-line-number="1139"></td>
        <td id="LC1139" class="blob-code blob-code-inner js-file-line"><span class=pl-k>function</span> <span class=pl-en>applyStyleOnLoad</span><span class=pl-kos>(</span><span class=pl-s1>reference</span><span class=pl-kos>,</span> <span class=pl-s1>popper</span><span class=pl-kos>,</span> <span class=pl-s1>options</span><span class=pl-kos>,</span> <span class=pl-s1>modifierOptions</span><span class=pl-kos>,</span> <span class=pl-s1>state</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1140" class="blob-num js-line-number" data-line-number="1140"></td>
        <td id="LC1140" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// compute reference element offsets</span></td>
      </tr>
      <tr>
        <td id="L1141" class="blob-num js-line-number" data-line-number="1141"></td>
        <td id="LC1141" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>referenceOffsets</span> <span class=pl-c1>=</span> <span class=pl-en>getReferenceOffsets</span><span class=pl-kos>(</span><span class=pl-s1>state</span><span class=pl-kos>,</span> <span class=pl-s1>popper</span><span class=pl-kos>,</span> <span class=pl-s1>reference</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1142" class="blob-num js-line-number" data-line-number="1142"></td>
        <td id="LC1142" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1143" class="blob-num js-line-number" data-line-number="1143"></td>
        <td id="LC1143" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// compute auto placement, store placement inside the data object,</span></td>
      </tr>
      <tr>
        <td id="L1144" class="blob-num js-line-number" data-line-number="1144"></td>
        <td id="LC1144" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// modifiers will be able to edit `placement` if needed</span></td>
      </tr>
      <tr>
        <td id="L1145" class="blob-num js-line-number" data-line-number="1145"></td>
        <td id="LC1145" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// and refer to originalPlacement to know the original value</span></td>
      </tr>
      <tr>
        <td id="L1146" class="blob-num js-line-number" data-line-number="1146"></td>
        <td id="LC1146" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>placement</span> <span class=pl-c1>=</span> <span class=pl-en>computeAutoPlacement</span><span class=pl-kos>(</span><span class=pl-s1>options</span><span class=pl-kos>.</span><span class=pl-c1>placement</span><span class=pl-kos>,</span> <span class=pl-s1>referenceOffsets</span><span class=pl-kos>,</span> <span class=pl-s1>popper</span><span class=pl-kos>,</span> <span class=pl-s1>reference</span><span class=pl-kos>,</span> <span class=pl-s1>options</span><span class=pl-kos>.</span><span class=pl-c1>modifiers</span><span class=pl-kos>.</span><span class=pl-c1>flip</span><span class=pl-kos>.</span><span class=pl-c1>boundariesElement</span><span class=pl-kos>,</span> <span class=pl-s1>options</span><span class=pl-kos>.</span><span class=pl-c1>modifiers</span><span class=pl-kos>.</span><span class=pl-c1>flip</span><span class=pl-kos>.</span><span class=pl-c1>padding</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1147" class="blob-num js-line-number" data-line-number="1147"></td>
        <td id="LC1147" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1148" class="blob-num js-line-number" data-line-number="1148"></td>
        <td id="LC1148" class="blob-code blob-code-inner js-file-line">  <span class=pl-s1>popper</span><span class=pl-kos>.</span><span class=pl-en>setAttribute</span><span class=pl-kos>(</span><span class=pl-s>&#39;x-placement&#39;</span><span class=pl-kos>,</span> <span class=pl-s1>placement</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1149" class="blob-num js-line-number" data-line-number="1149"></td>
        <td id="LC1149" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1150" class="blob-num js-line-number" data-line-number="1150"></td>
        <td id="LC1150" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// Apply `position` to popper before anything else because</span></td>
      </tr>
      <tr>
        <td id="L1151" class="blob-num js-line-number" data-line-number="1151"></td>
        <td id="LC1151" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// without the position applied we can&#39;t guarantee correct computations</span></td>
      </tr>
      <tr>
        <td id="L1152" class="blob-num js-line-number" data-line-number="1152"></td>
        <td id="LC1152" class="blob-code blob-code-inner js-file-line">  <span class=pl-en>setStyles</span><span class=pl-kos>(</span><span class=pl-s1>popper</span><span class=pl-kos>,</span> <span class=pl-kos>{</span> <span class=pl-c1>position</span>: <span class=pl-s>&#39;absolute&#39;</span> <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1153" class="blob-num js-line-number" data-line-number="1153"></td>
        <td id="LC1153" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1154" class="blob-num js-line-number" data-line-number="1154"></td>
        <td id="LC1154" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>return</span> <span class=pl-s1>options</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1155" class="blob-num js-line-number" data-line-number="1155"></td>
        <td id="LC1155" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1156" class="blob-num js-line-number" data-line-number="1156"></td>
        <td id="LC1156" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1157" class="blob-num js-line-number" data-line-number="1157"></td>
        <td id="LC1157" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L1158" class="blob-num js-line-number" data-line-number="1158"></td>
        <td id="LC1158" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@function</span></span></td>
      </tr>
      <tr>
        <td id="L1159" class="blob-num js-line-number" data-line-number="1159"></td>
        <td id="LC1159" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@memberof</span> Modifiers</span></td>
      </tr>
      <tr>
        <td id="L1160" class="blob-num js-line-number" data-line-number="1160"></td>
        <td id="LC1160" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@argument</span> {Object} data - The data object generated by `update` method</span></td>
      </tr>
      <tr>
        <td id="L1161" class="blob-num js-line-number" data-line-number="1161"></td>
        <td id="LC1161" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@argument</span> {Object} options - Modifiers configuration and options</span></td>
      </tr>
      <tr>
        <td id="L1162" class="blob-num js-line-number" data-line-number="1162"></td>
        <td id="LC1162" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@returns</span> {<span class=pl-smi>Object</span>} The data object, properly modified</span></td>
      </tr>
      <tr>
        <td id="L1163" class="blob-num js-line-number" data-line-number="1163"></td>
        <td id="LC1163" class="blob-code blob-code-inner js-file-line"><span class=pl-c> */</span></td>
      </tr>
      <tr>
        <td id="L1164" class="blob-num js-line-number" data-line-number="1164"></td>
        <td id="LC1164" class="blob-code blob-code-inner js-file-line"><span class=pl-k>function</span> <span class=pl-en>computeStyle</span><span class=pl-kos>(</span><span class=pl-s1>data</span><span class=pl-kos>,</span> <span class=pl-s1>options</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1165" class="blob-num js-line-number" data-line-number="1165"></td>
        <td id="LC1165" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>x</span> <span class=pl-c1>=</span> <span class=pl-s1>options</span><span class=pl-kos>.</span><span class=pl-c1>x</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1166" class="blob-num js-line-number" data-line-number="1166"></td>
        <td id="LC1166" class="blob-code blob-code-inner js-file-line">      <span class=pl-s1>y</span> <span class=pl-c1>=</span> <span class=pl-s1>options</span><span class=pl-kos>.</span><span class=pl-c1>y</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1167" class="blob-num js-line-number" data-line-number="1167"></td>
        <td id="LC1167" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>popper</span> <span class=pl-c1>=</span> <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>offsets</span><span class=pl-kos>.</span><span class=pl-c1>popper</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1168" class="blob-num js-line-number" data-line-number="1168"></td>
        <td id="LC1168" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1169" class="blob-num js-line-number" data-line-number="1169"></td>
        <td id="LC1169" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// Remove this legacy support in Popper.js v2</span></td>
      </tr>
      <tr>
        <td id="L1170" class="blob-num js-line-number" data-line-number="1170"></td>
        <td id="LC1170" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1171" class="blob-num js-line-number" data-line-number="1171"></td>
        <td id="LC1171" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>legacyGpuAccelerationOption</span> <span class=pl-c1>=</span> <span class=pl-en>find</span><span class=pl-kos>(</span><span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>instance</span><span class=pl-kos>.</span><span class=pl-c1>modifiers</span><span class=pl-kos>,</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>modifier</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1172" class="blob-num js-line-number" data-line-number="1172"></td>
        <td id="LC1172" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>return</span> <span class=pl-s1>modifier</span><span class=pl-kos>.</span><span class=pl-c1>name</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;applyStyle&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1173" class="blob-num js-line-number" data-line-number="1173"></td>
        <td id="LC1173" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>gpuAcceleration</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1174" class="blob-num js-line-number" data-line-number="1174"></td>
        <td id="LC1174" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>legacyGpuAccelerationOption</span> !== undefined<span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1175" class="blob-num js-line-number" data-line-number="1175"></td>
        <td id="LC1175" class="blob-code blob-code-inner js-file-line">    <span class=pl-smi>console</span><span class=pl-kos>.</span><span class=pl-en>warn</span><span class=pl-kos>(</span><span class=pl-s>&#39;WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1176" class="blob-num js-line-number" data-line-number="1176"></td>
        <td id="LC1176" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1177" class="blob-num js-line-number" data-line-number="1177"></td>
        <td id="LC1177" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>gpuAcceleration</span> <span class=pl-c1>=</span> <span class=pl-s1>legacyGpuAccelerationOption</span> !== undefined ? <span class=pl-s1>legacyGpuAccelerationOption</span> : <span class=pl-s1>options</span><span class=pl-kos>.</span><span class=pl-c1>gpuAcceleration</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1178" class="blob-num js-line-number" data-line-number="1178"></td>
        <td id="LC1178" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1179" class="blob-num js-line-number" data-line-number="1179"></td>
        <td id="LC1179" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>offsetParent</span> <span class=pl-c1>=</span> <span class=pl-en>getOffsetParent</span><span class=pl-kos>(</span><span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>instance</span><span class=pl-kos>.</span><span class=pl-c1>popper</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1180" class="blob-num js-line-number" data-line-number="1180"></td>
        <td id="LC1180" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>offsetParentRect</span> <span class=pl-c1>=</span> <span class=pl-en>getBoundingClientRect</span><span class=pl-kos>(</span><span class=pl-s1>offsetParent</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1181" class="blob-num js-line-number" data-line-number="1181"></td>
        <td id="LC1181" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1182" class="blob-num js-line-number" data-line-number="1182"></td>
        <td id="LC1182" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// Styles</span></td>
      </tr>
      <tr>
        <td id="L1183" class="blob-num js-line-number" data-line-number="1183"></td>
        <td id="LC1183" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>styles</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1184" class="blob-num js-line-number" data-line-number="1184"></td>
        <td id="LC1184" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>position</span>: <span class=pl-s1>popper</span><span class=pl-kos>.</span><span class=pl-c1>position</span></td>
      </tr>
      <tr>
        <td id="L1185" class="blob-num js-line-number" data-line-number="1185"></td>
        <td id="LC1185" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1186" class="blob-num js-line-number" data-line-number="1186"></td>
        <td id="LC1186" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1187" class="blob-num js-line-number" data-line-number="1187"></td>
        <td id="LC1187" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// floor sides to avoid blurry text</span></td>
      </tr>
      <tr>
        <td id="L1188" class="blob-num js-line-number" data-line-number="1188"></td>
        <td id="LC1188" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>offsets</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1189" class="blob-num js-line-number" data-line-number="1189"></td>
        <td id="LC1189" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>left</span>: <span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>floor</span><span class=pl-kos>(</span><span class=pl-s1>popper</span><span class=pl-kos>.</span><span class=pl-c1>left</span><span class=pl-kos>)</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1190" class="blob-num js-line-number" data-line-number="1190"></td>
        <td id="LC1190" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>top</span>: <span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>floor</span><span class=pl-kos>(</span><span class=pl-s1>popper</span><span class=pl-kos>.</span><span class=pl-c1>top</span><span class=pl-kos>)</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1191" class="blob-num js-line-number" data-line-number="1191"></td>
        <td id="LC1191" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>bottom</span>: <span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>floor</span><span class=pl-kos>(</span><span class=pl-s1>popper</span><span class=pl-kos>.</span><span class=pl-c1>bottom</span><span class=pl-kos>)</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1192" class="blob-num js-line-number" data-line-number="1192"></td>
        <td id="LC1192" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>right</span>: <span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>floor</span><span class=pl-kos>(</span><span class=pl-s1>popper</span><span class=pl-kos>.</span><span class=pl-c1>right</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1193" class="blob-num js-line-number" data-line-number="1193"></td>
        <td id="LC1193" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1194" class="blob-num js-line-number" data-line-number="1194"></td>
        <td id="LC1194" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1195" class="blob-num js-line-number" data-line-number="1195"></td>
        <td id="LC1195" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>sideA</span> <span class=pl-c1>=</span> <span class=pl-s1>x</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;bottom&#39;</span> ? <span class=pl-s>&#39;top&#39;</span> : <span class=pl-s>&#39;bottom&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1196" class="blob-num js-line-number" data-line-number="1196"></td>
        <td id="LC1196" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>sideB</span> <span class=pl-c1>=</span> <span class=pl-s1>y</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;right&#39;</span> ? <span class=pl-s>&#39;left&#39;</span> : <span class=pl-s>&#39;right&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1197" class="blob-num js-line-number" data-line-number="1197"></td>
        <td id="LC1197" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1198" class="blob-num js-line-number" data-line-number="1198"></td>
        <td id="LC1198" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// if gpuAcceleration is set to `true` and transform is supported,</span></td>
      </tr>
      <tr>
        <td id="L1199" class="blob-num js-line-number" data-line-number="1199"></td>
        <td id="LC1199" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>//  we use `translate3d` to apply the position to the popper we</span></td>
      </tr>
      <tr>
        <td id="L1200" class="blob-num js-line-number" data-line-number="1200"></td>
        <td id="LC1200" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// automatically use the supported prefixed version if needed</span></td>
      </tr>
      <tr>
        <td id="L1201" class="blob-num js-line-number" data-line-number="1201"></td>
        <td id="LC1201" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>prefixedProperty</span> <span class=pl-c1>=</span> <span class=pl-en>getSupportedPropertyName</span><span class=pl-kos>(</span><span class=pl-s>&#39;transform&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1202" class="blob-num js-line-number" data-line-number="1202"></td>
        <td id="LC1202" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1203" class="blob-num js-line-number" data-line-number="1203"></td>
        <td id="LC1203" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// now, let&#39;s make a step back and look at this code closely (wtf?)</span></td>
      </tr>
      <tr>
        <td id="L1204" class="blob-num js-line-number" data-line-number="1204"></td>
        <td id="LC1204" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// If the content of the popper grows once it&#39;s been positioned, it</span></td>
      </tr>
      <tr>
        <td id="L1205" class="blob-num js-line-number" data-line-number="1205"></td>
        <td id="LC1205" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// may happen that the popper gets misplaced because of the new content</span></td>
      </tr>
      <tr>
        <td id="L1206" class="blob-num js-line-number" data-line-number="1206"></td>
        <td id="LC1206" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// overflowing its reference element</span></td>
      </tr>
      <tr>
        <td id="L1207" class="blob-num js-line-number" data-line-number="1207"></td>
        <td id="LC1207" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// To avoid this problem, we provide two options (x and y), which allow</span></td>
      </tr>
      <tr>
        <td id="L1208" class="blob-num js-line-number" data-line-number="1208"></td>
        <td id="LC1208" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// the consumer to define the offset origin.</span></td>
      </tr>
      <tr>
        <td id="L1209" class="blob-num js-line-number" data-line-number="1209"></td>
        <td id="LC1209" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// If we position a popper on top of a reference element, we can set</span></td>
      </tr>
      <tr>
        <td id="L1210" class="blob-num js-line-number" data-line-number="1210"></td>
        <td id="LC1210" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// `x` to `top` to make the popper grow towards its top instead of</span></td>
      </tr>
      <tr>
        <td id="L1211" class="blob-num js-line-number" data-line-number="1211"></td>
        <td id="LC1211" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// its bottom.</span></td>
      </tr>
      <tr>
        <td id="L1212" class="blob-num js-line-number" data-line-number="1212"></td>
        <td id="LC1212" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>left</span> <span class=pl-c1>=</span> <span class=pl-k>void</span> <span class=pl-c1>0</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1213" class="blob-num js-line-number" data-line-number="1213"></td>
        <td id="LC1213" class="blob-code blob-code-inner js-file-line">      <span class=pl-s1>top</span> <span class=pl-c1>=</span> <span class=pl-k>void</span> <span class=pl-c1>0</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1214" class="blob-num js-line-number" data-line-number="1214"></td>
        <td id="LC1214" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>sideA</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;bottom&#39;</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1215" class="blob-num js-line-number" data-line-number="1215"></td>
        <td id="LC1215" class="blob-code blob-code-inner js-file-line">    <span class=pl-s1>top</span> <span class=pl-c1>=</span> <span class=pl-c1>-</span><span class=pl-s1>offsetParentRect</span><span class=pl-kos>.</span><span class=pl-c1>height</span> <span class=pl-c1>+</span> <span class=pl-s1>offsets</span><span class=pl-kos>.</span><span class=pl-c1>bottom</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1216" class="blob-num js-line-number" data-line-number="1216"></td>
        <td id="LC1216" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1217" class="blob-num js-line-number" data-line-number="1217"></td>
        <td id="LC1217" class="blob-code blob-code-inner js-file-line">    <span class=pl-s1>top</span> <span class=pl-c1>=</span> <span class=pl-s1>offsets</span><span class=pl-kos>.</span><span class=pl-c1>top</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1218" class="blob-num js-line-number" data-line-number="1218"></td>
        <td id="LC1218" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1219" class="blob-num js-line-number" data-line-number="1219"></td>
        <td id="LC1219" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>sideB</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;right&#39;</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1220" class="blob-num js-line-number" data-line-number="1220"></td>
        <td id="LC1220" class="blob-code blob-code-inner js-file-line">    <span class=pl-s1>left</span> <span class=pl-c1>=</span> <span class=pl-c1>-</span><span class=pl-s1>offsetParentRect</span><span class=pl-kos>.</span><span class=pl-c1>width</span> <span class=pl-c1>+</span> <span class=pl-s1>offsets</span><span class=pl-kos>.</span><span class=pl-c1>right</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1221" class="blob-num js-line-number" data-line-number="1221"></td>
        <td id="LC1221" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1222" class="blob-num js-line-number" data-line-number="1222"></td>
        <td id="LC1222" class="blob-code blob-code-inner js-file-line">    <span class=pl-s1>left</span> <span class=pl-c1>=</span> <span class=pl-s1>offsets</span><span class=pl-kos>.</span><span class=pl-c1>left</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1223" class="blob-num js-line-number" data-line-number="1223"></td>
        <td id="LC1223" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1224" class="blob-num js-line-number" data-line-number="1224"></td>
        <td id="LC1224" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>gpuAcceleration</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>prefixedProperty</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1225" class="blob-num js-line-number" data-line-number="1225"></td>
        <td id="LC1225" class="blob-code blob-code-inner js-file-line">    <span class=pl-s1>styles</span><span class=pl-kos>[</span><span class=pl-s1>prefixedProperty</span><span class=pl-kos>]</span> <span class=pl-c1>=</span> <span class=pl-s>&#39;translate3d(&#39;</span> <span class=pl-c1>+</span> <span class=pl-s1>left</span> <span class=pl-c1>+</span> <span class=pl-s>&#39;px, &#39;</span> <span class=pl-c1>+</span> <span class=pl-s1>top</span> <span class=pl-c1>+</span> <span class=pl-s>&#39;px, 0)&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1226" class="blob-num js-line-number" data-line-number="1226"></td>
        <td id="LC1226" class="blob-code blob-code-inner js-file-line">    <span class=pl-s1>styles</span><span class=pl-kos>[</span><span class=pl-s1>sideA</span><span class=pl-kos>]</span> <span class=pl-c1>=</span> <span class=pl-c1>0</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1227" class="blob-num js-line-number" data-line-number="1227"></td>
        <td id="LC1227" class="blob-code blob-code-inner js-file-line">    <span class=pl-s1>styles</span><span class=pl-kos>[</span><span class=pl-s1>sideB</span><span class=pl-kos>]</span> <span class=pl-c1>=</span> <span class=pl-c1>0</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1228" class="blob-num js-line-number" data-line-number="1228"></td>
        <td id="LC1228" class="blob-code blob-code-inner js-file-line">    <span class=pl-s1>styles</span><span class=pl-kos>.</span><span class=pl-c1>willChange</span> <span class=pl-c1>=</span> <span class=pl-s>&#39;transform&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1229" class="blob-num js-line-number" data-line-number="1229"></td>
        <td id="LC1229" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1230" class="blob-num js-line-number" data-line-number="1230"></td>
        <td id="LC1230" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>// othwerise, we use the standard `top`, `left`, `bottom` and `right` properties</span></td>
      </tr>
      <tr>
        <td id="L1231" class="blob-num js-line-number" data-line-number="1231"></td>
        <td id="LC1231" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>var</span> <span class=pl-s1>invertTop</span> <span class=pl-c1>=</span> <span class=pl-s1>sideA</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;bottom&#39;</span> ? <span class=pl-c1>-</span><span class=pl-c1>1</span> : <span class=pl-c1>1</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1232" class="blob-num js-line-number" data-line-number="1232"></td>
        <td id="LC1232" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>var</span> <span class=pl-s1>invertLeft</span> <span class=pl-c1>=</span> <span class=pl-s1>sideB</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;right&#39;</span> ? <span class=pl-c1>-</span><span class=pl-c1>1</span> : <span class=pl-c1>1</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1233" class="blob-num js-line-number" data-line-number="1233"></td>
        <td id="LC1233" class="blob-code blob-code-inner js-file-line">    <span class=pl-s1>styles</span><span class=pl-kos>[</span><span class=pl-s1>sideA</span><span class=pl-kos>]</span> <span class=pl-c1>=</span> <span class=pl-s1>top</span> * <span class=pl-s1>invertTop</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1234" class="blob-num js-line-number" data-line-number="1234"></td>
        <td id="LC1234" class="blob-code blob-code-inner js-file-line">    <span class=pl-s1>styles</span><span class=pl-kos>[</span><span class=pl-s1>sideB</span><span class=pl-kos>]</span> <span class=pl-c1>=</span> <span class=pl-s1>left</span> * <span class=pl-s1>invertLeft</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1235" class="blob-num js-line-number" data-line-number="1235"></td>
        <td id="LC1235" class="blob-code blob-code-inner js-file-line">    <span class=pl-s1>styles</span><span class=pl-kos>.</span><span class=pl-c1>willChange</span> <span class=pl-c1>=</span> <span class=pl-s1>sideA</span> <span class=pl-c1>+</span> <span class=pl-s>&#39;, &#39;</span> <span class=pl-c1>+</span> <span class=pl-s1>sideB</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1236" class="blob-num js-line-number" data-line-number="1236"></td>
        <td id="LC1236" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1237" class="blob-num js-line-number" data-line-number="1237"></td>
        <td id="LC1237" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1238" class="blob-num js-line-number" data-line-number="1238"></td>
        <td id="LC1238" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// Attributes</span></td>
      </tr>
      <tr>
        <td id="L1239" class="blob-num js-line-number" data-line-number="1239"></td>
        <td id="LC1239" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>attributes</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1240" class="blob-num js-line-number" data-line-number="1240"></td>
        <td id="LC1240" class="blob-code blob-code-inner js-file-line">    <span class=pl-s>&#39;x-placement&#39;</span>: <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>placement</span></td>
      </tr>
      <tr>
        <td id="L1241" class="blob-num js-line-number" data-line-number="1241"></td>
        <td id="LC1241" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1242" class="blob-num js-line-number" data-line-number="1242"></td>
        <td id="LC1242" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1243" class="blob-num js-line-number" data-line-number="1243"></td>
        <td id="LC1243" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// Update `data` attributes, styles and arrowStyles</span></td>
      </tr>
      <tr>
        <td id="L1244" class="blob-num js-line-number" data-line-number="1244"></td>
        <td id="LC1244" class="blob-code blob-code-inner js-file-line">  <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>attributes</span> <span class=pl-c1>=</span> <span class=pl-s1>_extends</span><span class=pl-kos>(</span><span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>,</span> <span class=pl-s1>attributes</span><span class=pl-kos>,</span> <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>attributes</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1245" class="blob-num js-line-number" data-line-number="1245"></td>
        <td id="LC1245" class="blob-code blob-code-inner js-file-line">  <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>styles</span> <span class=pl-c1>=</span> <span class=pl-s1>_extends</span><span class=pl-kos>(</span><span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>,</span> <span class=pl-s1>styles</span><span class=pl-kos>,</span> <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>styles</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1246" class="blob-num js-line-number" data-line-number="1246"></td>
        <td id="LC1246" class="blob-code blob-code-inner js-file-line">  <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>arrowStyles</span> <span class=pl-c1>=</span> <span class=pl-s1>_extends</span><span class=pl-kos>(</span><span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>,</span> <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>offsets</span><span class=pl-kos>.</span><span class=pl-c1>arrow</span><span class=pl-kos>,</span> <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>arrowStyles</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1247" class="blob-num js-line-number" data-line-number="1247"></td>
        <td id="LC1247" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1248" class="blob-num js-line-number" data-line-number="1248"></td>
        <td id="LC1248" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>return</span> <span class=pl-s1>data</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1249" class="blob-num js-line-number" data-line-number="1249"></td>
        <td id="LC1249" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1250" class="blob-num js-line-number" data-line-number="1250"></td>
        <td id="LC1250" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1251" class="blob-num js-line-number" data-line-number="1251"></td>
        <td id="LC1251" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L1252" class="blob-num js-line-number" data-line-number="1252"></td>
        <td id="LC1252" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * Helper used to know if the given modifier depends from another one.&lt;br /&gt;</span></td>
      </tr>
      <tr>
        <td id="L1253" class="blob-num js-line-number" data-line-number="1253"></td>
        <td id="LC1253" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * It checks if the needed modifier is listed and enabled.</span></td>
      </tr>
      <tr>
        <td id="L1254" class="blob-num js-line-number" data-line-number="1254"></td>
        <td id="LC1254" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@method</span></span></td>
      </tr>
      <tr>
        <td id="L1255" class="blob-num js-line-number" data-line-number="1255"></td>
        <td id="LC1255" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@memberof</span> Popper.Utils</span></td>
      </tr>
      <tr>
        <td id="L1256" class="blob-num js-line-number" data-line-number="1256"></td>
        <td id="LC1256" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@param</span> {<span class=pl-smi>Array</span>} modifiers - list of modifiers</span></td>
      </tr>
      <tr>
        <td id="L1257" class="blob-num js-line-number" data-line-number="1257"></td>
        <td id="LC1257" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@param</span> {<span class=pl-smi>String</span>} requestingName - name of requesting modifier</span></td>
      </tr>
      <tr>
        <td id="L1258" class="blob-num js-line-number" data-line-number="1258"></td>
        <td id="LC1258" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@param</span> {<span class=pl-smi>String</span>} requestedName - name of requested modifier</span></td>
      </tr>
      <tr>
        <td id="L1259" class="blob-num js-line-number" data-line-number="1259"></td>
        <td id="LC1259" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@returns</span> {<span class=pl-smi>Boolean</span>}</span></td>
      </tr>
      <tr>
        <td id="L1260" class="blob-num js-line-number" data-line-number="1260"></td>
        <td id="LC1260" class="blob-code blob-code-inner js-file-line"><span class=pl-c> */</span></td>
      </tr>
      <tr>
        <td id="L1261" class="blob-num js-line-number" data-line-number="1261"></td>
        <td id="LC1261" class="blob-code blob-code-inner js-file-line"><span class=pl-k>function</span> <span class=pl-en>isModifierRequired</span><span class=pl-kos>(</span><span class=pl-s1>modifiers</span><span class=pl-kos>,</span> <span class=pl-s1>requestingName</span><span class=pl-kos>,</span> <span class=pl-s1>requestedName</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1262" class="blob-num js-line-number" data-line-number="1262"></td>
        <td id="LC1262" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>requesting</span> <span class=pl-c1>=</span> <span class=pl-en>find</span><span class=pl-kos>(</span><span class=pl-s1>modifiers</span><span class=pl-kos>,</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>_ref</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1263" class="blob-num js-line-number" data-line-number="1263"></td>
        <td id="LC1263" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>var</span> <span class=pl-s1>name</span> <span class=pl-c1>=</span> <span class=pl-s1>_ref</span><span class=pl-kos>.</span><span class=pl-c1>name</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1264" class="blob-num js-line-number" data-line-number="1264"></td>
        <td id="LC1264" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>return</span> <span class=pl-s1>name</span> <span class=pl-c1>===</span> <span class=pl-s1>requestingName</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1265" class="blob-num js-line-number" data-line-number="1265"></td>
        <td id="LC1265" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1266" class="blob-num js-line-number" data-line-number="1266"></td>
        <td id="LC1266" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1267" class="blob-num js-line-number" data-line-number="1267"></td>
        <td id="LC1267" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>isRequired</span> <span class=pl-c1>=</span> !!<span class=pl-s1>requesting</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>modifiers</span><span class=pl-kos>.</span><span class=pl-en>some</span><span class=pl-kos>(</span><span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>modifier</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1268" class="blob-num js-line-number" data-line-number="1268"></td>
        <td id="LC1268" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>return</span> <span class=pl-s1>modifier</span><span class=pl-kos>.</span><span class=pl-c1>name</span> <span class=pl-c1>===</span> <span class=pl-s1>requestedName</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>modifier</span><span class=pl-kos>.</span><span class=pl-c1>enabled</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>modifier</span><span class=pl-kos>.</span><span class=pl-c1>order</span> <span class=pl-c1>&lt;</span> <span class=pl-s1>requesting</span><span class=pl-kos>.</span><span class=pl-c1>order</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1269" class="blob-num js-line-number" data-line-number="1269"></td>
        <td id="LC1269" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1270" class="blob-num js-line-number" data-line-number="1270"></td>
        <td id="LC1270" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1271" class="blob-num js-line-number" data-line-number="1271"></td>
        <td id="LC1271" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-s1>isRequired</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1272" class="blob-num js-line-number" data-line-number="1272"></td>
        <td id="LC1272" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>var</span> <span class=pl-s1>_requesting</span> <span class=pl-c1>=</span> <span class=pl-s>&#39;`&#39;</span> <span class=pl-c1>+</span> <span class=pl-s1>requestingName</span> <span class=pl-c1>+</span> <span class=pl-s>&#39;`&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1273" class="blob-num js-line-number" data-line-number="1273"></td>
        <td id="LC1273" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>var</span> <span class=pl-s1>requested</span> <span class=pl-c1>=</span> <span class=pl-s>&#39;`&#39;</span> <span class=pl-c1>+</span> <span class=pl-s1>requestedName</span> <span class=pl-c1>+</span> <span class=pl-s>&#39;`&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1274" class="blob-num js-line-number" data-line-number="1274"></td>
        <td id="LC1274" class="blob-code blob-code-inner js-file-line">    <span class=pl-smi>console</span><span class=pl-kos>.</span><span class=pl-en>warn</span><span class=pl-kos>(</span><span class=pl-s1>requested</span> <span class=pl-c1>+</span> <span class=pl-s>&#39; modifier is required by &#39;</span> <span class=pl-c1>+</span> <span class=pl-s1>_requesting</span> <span class=pl-c1>+</span> <span class=pl-s>&#39; modifier in order to work, be sure to include it before &#39;</span> <span class=pl-c1>+</span> <span class=pl-s1>_requesting</span> <span class=pl-c1>+</span> <span class=pl-s>&#39;!&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1275" class="blob-num js-line-number" data-line-number="1275"></td>
        <td id="LC1275" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1276" class="blob-num js-line-number" data-line-number="1276"></td>
        <td id="LC1276" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>return</span> <span class=pl-s1>isRequired</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1277" class="blob-num js-line-number" data-line-number="1277"></td>
        <td id="LC1277" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1278" class="blob-num js-line-number" data-line-number="1278"></td>
        <td id="LC1278" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1279" class="blob-num js-line-number" data-line-number="1279"></td>
        <td id="LC1279" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L1280" class="blob-num js-line-number" data-line-number="1280"></td>
        <td id="LC1280" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@function</span></span></td>
      </tr>
      <tr>
        <td id="L1281" class="blob-num js-line-number" data-line-number="1281"></td>
        <td id="LC1281" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@memberof</span> Modifiers</span></td>
      </tr>
      <tr>
        <td id="L1282" class="blob-num js-line-number" data-line-number="1282"></td>
        <td id="LC1282" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@argument</span> {Object} data - The data object generated by update method</span></td>
      </tr>
      <tr>
        <td id="L1283" class="blob-num js-line-number" data-line-number="1283"></td>
        <td id="LC1283" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@argument</span> {Object} options - Modifiers configuration and options</span></td>
      </tr>
      <tr>
        <td id="L1284" class="blob-num js-line-number" data-line-number="1284"></td>
        <td id="LC1284" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@returns</span> {<span class=pl-smi>Object</span>} The data object, properly modified</span></td>
      </tr>
      <tr>
        <td id="L1285" class="blob-num js-line-number" data-line-number="1285"></td>
        <td id="LC1285" class="blob-code blob-code-inner js-file-line"><span class=pl-c> */</span></td>
      </tr>
      <tr>
        <td id="L1286" class="blob-num js-line-number" data-line-number="1286"></td>
        <td id="LC1286" class="blob-code blob-code-inner js-file-line"><span class=pl-k>function</span> <span class=pl-en>arrow</span><span class=pl-kos>(</span><span class=pl-s1>data</span><span class=pl-kos>,</span> <span class=pl-s1>options</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1287" class="blob-num js-line-number" data-line-number="1287"></td>
        <td id="LC1287" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// arrow depends on keepTogether in order to work</span></td>
      </tr>
      <tr>
        <td id="L1288" class="blob-num js-line-number" data-line-number="1288"></td>
        <td id="LC1288" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-en>isModifierRequired</span><span class=pl-kos>(</span><span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>instance</span><span class=pl-kos>.</span><span class=pl-c1>modifiers</span><span class=pl-kos>,</span> <span class=pl-s>&#39;arrow&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;keepTogether&#39;</span><span class=pl-kos>)</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1289" class="blob-num js-line-number" data-line-number="1289"></td>
        <td id="LC1289" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>return</span> <span class=pl-s1>data</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1290" class="blob-num js-line-number" data-line-number="1290"></td>
        <td id="LC1290" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1291" class="blob-num js-line-number" data-line-number="1291"></td>
        <td id="LC1291" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1292" class="blob-num js-line-number" data-line-number="1292"></td>
        <td id="LC1292" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>arrowElement</span> <span class=pl-c1>=</span> <span class=pl-s1>options</span><span class=pl-kos>.</span><span class=pl-c1>element</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1293" class="blob-num js-line-number" data-line-number="1293"></td>
        <td id="LC1293" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1294" class="blob-num js-line-number" data-line-number="1294"></td>
        <td id="LC1294" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// if arrowElement is a string, suppose it&#39;s a CSS selector</span></td>
      </tr>
      <tr>
        <td id="L1295" class="blob-num js-line-number" data-line-number="1295"></td>
        <td id="LC1295" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-k>typeof</span> <span class=pl-s1>arrowElement</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;string&#39;</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1296" class="blob-num js-line-number" data-line-number="1296"></td>
        <td id="LC1296" class="blob-code blob-code-inner js-file-line">    <span class=pl-s1>arrowElement</span> <span class=pl-c1>=</span> <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>instance</span><span class=pl-kos>.</span><span class=pl-c1>popper</span><span class=pl-kos>.</span><span class=pl-en>querySelector</span><span class=pl-kos>(</span><span class=pl-s1>arrowElement</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1297" class="blob-num js-line-number" data-line-number="1297"></td>
        <td id="LC1297" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1298" class="blob-num js-line-number" data-line-number="1298"></td>
        <td id="LC1298" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>// if arrowElement is not found, don&#39;t run the modifier</span></td>
      </tr>
      <tr>
        <td id="L1299" class="blob-num js-line-number" data-line-number="1299"></td>
        <td id="LC1299" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-s1>arrowElement</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1300" class="blob-num js-line-number" data-line-number="1300"></td>
        <td id="LC1300" class="blob-code blob-code-inner js-file-line">      <span class=pl-k>return</span> <span class=pl-s1>data</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1301" class="blob-num js-line-number" data-line-number="1301"></td>
        <td id="LC1301" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1302" class="blob-num js-line-number" data-line-number="1302"></td>
        <td id="LC1302" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1303" class="blob-num js-line-number" data-line-number="1303"></td>
        <td id="LC1303" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>// if the arrowElement isn&#39;t a query selector we must check that the</span></td>
      </tr>
      <tr>
        <td id="L1304" class="blob-num js-line-number" data-line-number="1304"></td>
        <td id="LC1304" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>// provided DOM node is child of its popper node</span></td>
      </tr>
      <tr>
        <td id="L1305" class="blob-num js-line-number" data-line-number="1305"></td>
        <td id="LC1305" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>instance</span><span class=pl-kos>.</span><span class=pl-c1>popper</span><span class=pl-kos>.</span><span class=pl-en>contains</span><span class=pl-kos>(</span><span class=pl-s1>arrowElement</span><span class=pl-kos>)</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1306" class="blob-num js-line-number" data-line-number="1306"></td>
        <td id="LC1306" class="blob-code blob-code-inner js-file-line">      <span class=pl-smi>console</span><span class=pl-kos>.</span><span class=pl-en>warn</span><span class=pl-kos>(</span><span class=pl-s>&#39;WARNING: `arrow.element` must be child of its popper element!&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1307" class="blob-num js-line-number" data-line-number="1307"></td>
        <td id="LC1307" class="blob-code blob-code-inner js-file-line">      <span class=pl-k>return</span> <span class=pl-s1>data</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1308" class="blob-num js-line-number" data-line-number="1308"></td>
        <td id="LC1308" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1309" class="blob-num js-line-number" data-line-number="1309"></td>
        <td id="LC1309" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1310" class="blob-num js-line-number" data-line-number="1310"></td>
        <td id="LC1310" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1311" class="blob-num js-line-number" data-line-number="1311"></td>
        <td id="LC1311" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>placement</span> <span class=pl-c1>=</span> <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>placement</span><span class=pl-kos>.</span><span class=pl-en>split</span><span class=pl-kos>(</span><span class=pl-s>&#39;-&#39;</span><span class=pl-kos>)</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1312" class="blob-num js-line-number" data-line-number="1312"></td>
        <td id="LC1312" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>_data$offsets</span> <span class=pl-c1>=</span> <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>offsets</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1313" class="blob-num js-line-number" data-line-number="1313"></td>
        <td id="LC1313" class="blob-code blob-code-inner js-file-line">      <span class=pl-s1>popper</span> <span class=pl-c1>=</span> <span class=pl-s1>_data$offsets</span><span class=pl-kos>.</span><span class=pl-c1>popper</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1314" class="blob-num js-line-number" data-line-number="1314"></td>
        <td id="LC1314" class="blob-code blob-code-inner js-file-line">      <span class=pl-s1>reference</span> <span class=pl-c1>=</span> <span class=pl-s1>_data$offsets</span><span class=pl-kos>.</span><span class=pl-c1>reference</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1315" class="blob-num js-line-number" data-line-number="1315"></td>
        <td id="LC1315" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1316" class="blob-num js-line-number" data-line-number="1316"></td>
        <td id="LC1316" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>isVertical</span> <span class=pl-c1>=</span> <span class=pl-kos>[</span><span class=pl-s>&#39;left&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;right&#39;</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-en>indexOf</span><span class=pl-kos>(</span><span class=pl-s1>placement</span><span class=pl-kos>)</span> !== <span class=pl-c1>-</span><span class=pl-c1>1</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1317" class="blob-num js-line-number" data-line-number="1317"></td>
        <td id="LC1317" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1318" class="blob-num js-line-number" data-line-number="1318"></td>
        <td id="LC1318" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>len</span> <span class=pl-c1>=</span> <span class=pl-s1>isVertical</span> ? <span class=pl-s>&#39;height&#39;</span> : <span class=pl-s>&#39;width&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1319" class="blob-num js-line-number" data-line-number="1319"></td>
        <td id="LC1319" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>sideCapitalized</span> <span class=pl-c1>=</span> <span class=pl-s1>isVertical</span> ? <span class=pl-s>&#39;Top&#39;</span> : <span class=pl-s>&#39;Left&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1320" class="blob-num js-line-number" data-line-number="1320"></td>
        <td id="LC1320" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>side</span> <span class=pl-c1>=</span> <span class=pl-s1>sideCapitalized</span><span class=pl-kos>.</span><span class=pl-en>toLowerCase</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1321" class="blob-num js-line-number" data-line-number="1321"></td>
        <td id="LC1321" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>altSide</span> <span class=pl-c1>=</span> <span class=pl-s1>isVertical</span> ? <span class=pl-s>&#39;left&#39;</span> : <span class=pl-s>&#39;top&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1322" class="blob-num js-line-number" data-line-number="1322"></td>
        <td id="LC1322" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>opSide</span> <span class=pl-c1>=</span> <span class=pl-s1>isVertical</span> ? <span class=pl-s>&#39;bottom&#39;</span> : <span class=pl-s>&#39;right&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1323" class="blob-num js-line-number" data-line-number="1323"></td>
        <td id="LC1323" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>arrowElementSize</span> <span class=pl-c1>=</span> <span class=pl-en>getOuterSizes</span><span class=pl-kos>(</span><span class=pl-s1>arrowElement</span><span class=pl-kos>)</span><span class=pl-kos>[</span><span class=pl-s1>len</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1324" class="blob-num js-line-number" data-line-number="1324"></td>
        <td id="LC1324" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1325" class="blob-num js-line-number" data-line-number="1325"></td>
        <td id="LC1325" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>//</span></td>
      </tr>
      <tr>
        <td id="L1326" class="blob-num js-line-number" data-line-number="1326"></td>
        <td id="LC1326" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// extends keepTogether behavior making sure the popper and its</span></td>
      </tr>
      <tr>
        <td id="L1327" class="blob-num js-line-number" data-line-number="1327"></td>
        <td id="LC1327" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// reference have enough pixels in conjuction</span></td>
      </tr>
      <tr>
        <td id="L1328" class="blob-num js-line-number" data-line-number="1328"></td>
        <td id="LC1328" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>//</span></td>
      </tr>
      <tr>
        <td id="L1329" class="blob-num js-line-number" data-line-number="1329"></td>
        <td id="LC1329" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1330" class="blob-num js-line-number" data-line-number="1330"></td>
        <td id="LC1330" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// top/left side</span></td>
      </tr>
      <tr>
        <td id="L1331" class="blob-num js-line-number" data-line-number="1331"></td>
        <td id="LC1331" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>reference</span><span class=pl-kos>[</span><span class=pl-s1>opSide</span><span class=pl-kos>]</span> <span class=pl-c1>-</span> <span class=pl-s1>arrowElementSize</span> <span class=pl-c1>&lt;</span> <span class=pl-s1>popper</span><span class=pl-kos>[</span><span class=pl-s1>side</span><span class=pl-kos>]</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1332" class="blob-num js-line-number" data-line-number="1332"></td>
        <td id="LC1332" class="blob-code blob-code-inner js-file-line">    <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>offsets</span><span class=pl-kos>.</span><span class=pl-c1>popper</span><span class=pl-kos>[</span><span class=pl-s1>side</span><span class=pl-kos>]</span> <span class=pl-c1>-=</span> <span class=pl-s1>popper</span><span class=pl-kos>[</span><span class=pl-s1>side</span><span class=pl-kos>]</span> <span class=pl-c1>-</span> <span class=pl-kos>(</span><span class=pl-s1>reference</span><span class=pl-kos>[</span><span class=pl-s1>opSide</span><span class=pl-kos>]</span> <span class=pl-c1>-</span> <span class=pl-s1>arrowElementSize</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1333" class="blob-num js-line-number" data-line-number="1333"></td>
        <td id="LC1333" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1334" class="blob-num js-line-number" data-line-number="1334"></td>
        <td id="LC1334" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// bottom/right side</span></td>
      </tr>
      <tr>
        <td id="L1335" class="blob-num js-line-number" data-line-number="1335"></td>
        <td id="LC1335" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>reference</span><span class=pl-kos>[</span><span class=pl-s1>side</span><span class=pl-kos>]</span> <span class=pl-c1>+</span> <span class=pl-s1>arrowElementSize</span> <span class=pl-c1>&gt;</span> <span class=pl-s1>popper</span><span class=pl-kos>[</span><span class=pl-s1>opSide</span><span class=pl-kos>]</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1336" class="blob-num js-line-number" data-line-number="1336"></td>
        <td id="LC1336" class="blob-code blob-code-inner js-file-line">    <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>offsets</span><span class=pl-kos>.</span><span class=pl-c1>popper</span><span class=pl-kos>[</span><span class=pl-s1>side</span><span class=pl-kos>]</span> <span class=pl-c1>+=</span> <span class=pl-s1>reference</span><span class=pl-kos>[</span><span class=pl-s1>side</span><span class=pl-kos>]</span> <span class=pl-c1>+</span> <span class=pl-s1>arrowElementSize</span> <span class=pl-c1>-</span> <span class=pl-s1>popper</span><span class=pl-kos>[</span><span class=pl-s1>opSide</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1337" class="blob-num js-line-number" data-line-number="1337"></td>
        <td id="LC1337" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1338" class="blob-num js-line-number" data-line-number="1338"></td>
        <td id="LC1338" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1339" class="blob-num js-line-number" data-line-number="1339"></td>
        <td id="LC1339" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// compute center of the popper</span></td>
      </tr>
      <tr>
        <td id="L1340" class="blob-num js-line-number" data-line-number="1340"></td>
        <td id="LC1340" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>center</span> <span class=pl-c1>=</span> <span class=pl-s1>reference</span><span class=pl-kos>[</span><span class=pl-s1>side</span><span class=pl-kos>]</span> <span class=pl-c1>+</span> <span class=pl-s1>reference</span><span class=pl-kos>[</span><span class=pl-s1>len</span><span class=pl-kos>]</span> / <span class=pl-c1>2</span> <span class=pl-c1>-</span> <span class=pl-s1>arrowElementSize</span> / <span class=pl-c1>2</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1341" class="blob-num js-line-number" data-line-number="1341"></td>
        <td id="LC1341" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1342" class="blob-num js-line-number" data-line-number="1342"></td>
        <td id="LC1342" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// Compute the sideValue using the updated popper offsets</span></td>
      </tr>
      <tr>
        <td id="L1343" class="blob-num js-line-number" data-line-number="1343"></td>
        <td id="LC1343" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// take popper margin in account because we don&#39;t have this info available</span></td>
      </tr>
      <tr>
        <td id="L1344" class="blob-num js-line-number" data-line-number="1344"></td>
        <td id="LC1344" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>popperMarginSide</span> <span class=pl-c1>=</span> <span class=pl-en>getStyleComputedProperty</span><span class=pl-kos>(</span><span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>instance</span><span class=pl-kos>.</span><span class=pl-c1>popper</span><span class=pl-kos>,</span> <span class=pl-s>&#39;margin&#39;</span> <span class=pl-c1>+</span> <span class=pl-s1>sideCapitalized</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>replace</span><span class=pl-kos>(</span><span class=pl-s>&#39;px&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1345" class="blob-num js-line-number" data-line-number="1345"></td>
        <td id="LC1345" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>sideValue</span> <span class=pl-c1>=</span> <span class=pl-s1>center</span> <span class=pl-c1>-</span> <span class=pl-en>getClientRect</span><span class=pl-kos>(</span><span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>offsets</span><span class=pl-kos>.</span><span class=pl-c1>popper</span><span class=pl-kos>)</span><span class=pl-kos>[</span><span class=pl-s1>side</span><span class=pl-kos>]</span> <span class=pl-c1>-</span> <span class=pl-s1>popperMarginSide</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1346" class="blob-num js-line-number" data-line-number="1346"></td>
        <td id="LC1346" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1347" class="blob-num js-line-number" data-line-number="1347"></td>
        <td id="LC1347" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// prevent arrowElement from being placed not contiguously to its popper</span></td>
      </tr>
      <tr>
        <td id="L1348" class="blob-num js-line-number" data-line-number="1348"></td>
        <td id="LC1348" class="blob-code blob-code-inner js-file-line">  <span class=pl-s1>sideValue</span> <span class=pl-c1>=</span> <span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>max</span><span class=pl-kos>(</span><span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>min</span><span class=pl-kos>(</span><span class=pl-s1>popper</span><span class=pl-kos>[</span><span class=pl-s1>len</span><span class=pl-kos>]</span> <span class=pl-c1>-</span> <span class=pl-s1>arrowElementSize</span><span class=pl-kos>,</span> <span class=pl-s1>sideValue</span><span class=pl-kos>)</span><span class=pl-kos>,</span> <span class=pl-c1>0</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1349" class="blob-num js-line-number" data-line-number="1349"></td>
        <td id="LC1349" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1350" class="blob-num js-line-number" data-line-number="1350"></td>
        <td id="LC1350" class="blob-code blob-code-inner js-file-line">  <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>arrowElement</span> <span class=pl-c1>=</span> <span class=pl-s1>arrowElement</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1351" class="blob-num js-line-number" data-line-number="1351"></td>
        <td id="LC1351" class="blob-code blob-code-inner js-file-line">  <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>offsets</span><span class=pl-kos>.</span><span class=pl-c1>arrow</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1352" class="blob-num js-line-number" data-line-number="1352"></td>
        <td id="LC1352" class="blob-code blob-code-inner js-file-line">  <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>offsets</span><span class=pl-kos>.</span><span class=pl-c1>arrow</span><span class=pl-kos>[</span><span class=pl-s1>side</span><span class=pl-kos>]</span> <span class=pl-c1>=</span> <span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>round</span><span class=pl-kos>(</span><span class=pl-s1>sideValue</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1353" class="blob-num js-line-number" data-line-number="1353"></td>
        <td id="LC1353" class="blob-code blob-code-inner js-file-line">  <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>offsets</span><span class=pl-kos>.</span><span class=pl-c1>arrow</span><span class=pl-kos>[</span><span class=pl-s1>altSide</span><span class=pl-kos>]</span> <span class=pl-c1>=</span> <span class=pl-s>&#39;&#39;</span><span class=pl-kos>;</span> <span class=pl-c>// make sure to unset any eventual altSide value from the DOM node</span></td>
      </tr>
      <tr>
        <td id="L1354" class="blob-num js-line-number" data-line-number="1354"></td>
        <td id="LC1354" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1355" class="blob-num js-line-number" data-line-number="1355"></td>
        <td id="LC1355" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>return</span> <span class=pl-s1>data</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1356" class="blob-num js-line-number" data-line-number="1356"></td>
        <td id="LC1356" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1357" class="blob-num js-line-number" data-line-number="1357"></td>
        <td id="LC1357" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1358" class="blob-num js-line-number" data-line-number="1358"></td>
        <td id="LC1358" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L1359" class="blob-num js-line-number" data-line-number="1359"></td>
        <td id="LC1359" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * Get the opposite placement variation of the given one</span></td>
      </tr>
      <tr>
        <td id="L1360" class="blob-num js-line-number" data-line-number="1360"></td>
        <td id="LC1360" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@method</span></span></td>
      </tr>
      <tr>
        <td id="L1361" class="blob-num js-line-number" data-line-number="1361"></td>
        <td id="LC1361" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@memberof</span> Popper.Utils</span></td>
      </tr>
      <tr>
        <td id="L1362" class="blob-num js-line-number" data-line-number="1362"></td>
        <td id="LC1362" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@argument</span> {String} placement variation</span></td>
      </tr>
      <tr>
        <td id="L1363" class="blob-num js-line-number" data-line-number="1363"></td>
        <td id="LC1363" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@returns</span> {<span class=pl-smi>String</span>} flipped placement variation</span></td>
      </tr>
      <tr>
        <td id="L1364" class="blob-num js-line-number" data-line-number="1364"></td>
        <td id="LC1364" class="blob-code blob-code-inner js-file-line"><span class=pl-c> */</span></td>
      </tr>
      <tr>
        <td id="L1365" class="blob-num js-line-number" data-line-number="1365"></td>
        <td id="LC1365" class="blob-code blob-code-inner js-file-line"><span class=pl-k>function</span> <span class=pl-en>getOppositeVariation</span><span class=pl-kos>(</span><span class=pl-s1>variation</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1366" class="blob-num js-line-number" data-line-number="1366"></td>
        <td id="LC1366" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>variation</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;end&#39;</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1367" class="blob-num js-line-number" data-line-number="1367"></td>
        <td id="LC1367" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>return</span> <span class=pl-s>&#39;start&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1368" class="blob-num js-line-number" data-line-number="1368"></td>
        <td id="LC1368" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>variation</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;start&#39;</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1369" class="blob-num js-line-number" data-line-number="1369"></td>
        <td id="LC1369" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>return</span> <span class=pl-s>&#39;end&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1370" class="blob-num js-line-number" data-line-number="1370"></td>
        <td id="LC1370" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1371" class="blob-num js-line-number" data-line-number="1371"></td>
        <td id="LC1371" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>return</span> <span class=pl-s1>variation</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1372" class="blob-num js-line-number" data-line-number="1372"></td>
        <td id="LC1372" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1373" class="blob-num js-line-number" data-line-number="1373"></td>
        <td id="LC1373" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1374" class="blob-num js-line-number" data-line-number="1374"></td>
        <td id="LC1374" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L1375" class="blob-num js-line-number" data-line-number="1375"></td>
        <td id="LC1375" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * List of accepted placements to use as values of the `placement` option.&lt;br /&gt;</span></td>
      </tr>
      <tr>
        <td id="L1376" class="blob-num js-line-number" data-line-number="1376"></td>
        <td id="LC1376" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * Valid placements are:</span></td>
      </tr>
      <tr>
        <td id="L1377" class="blob-num js-line-number" data-line-number="1377"></td>
        <td id="LC1377" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * - `auto`</span></td>
      </tr>
      <tr>
        <td id="L1378" class="blob-num js-line-number" data-line-number="1378"></td>
        <td id="LC1378" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * - `top`</span></td>
      </tr>
      <tr>
        <td id="L1379" class="blob-num js-line-number" data-line-number="1379"></td>
        <td id="LC1379" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * - `right`</span></td>
      </tr>
      <tr>
        <td id="L1380" class="blob-num js-line-number" data-line-number="1380"></td>
        <td id="LC1380" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * - `bottom`</span></td>
      </tr>
      <tr>
        <td id="L1381" class="blob-num js-line-number" data-line-number="1381"></td>
        <td id="LC1381" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * - `left`</span></td>
      </tr>
      <tr>
        <td id="L1382" class="blob-num js-line-number" data-line-number="1382"></td>
        <td id="LC1382" class="blob-code blob-code-inner js-file-line"><span class=pl-c> *</span></td>
      </tr>
      <tr>
        <td id="L1383" class="blob-num js-line-number" data-line-number="1383"></td>
        <td id="LC1383" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * Each placement can have a variation from this list:</span></td>
      </tr>
      <tr>
        <td id="L1384" class="blob-num js-line-number" data-line-number="1384"></td>
        <td id="LC1384" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * - `-start`</span></td>
      </tr>
      <tr>
        <td id="L1385" class="blob-num js-line-number" data-line-number="1385"></td>
        <td id="LC1385" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * - `-end`</span></td>
      </tr>
      <tr>
        <td id="L1386" class="blob-num js-line-number" data-line-number="1386"></td>
        <td id="LC1386" class="blob-code blob-code-inner js-file-line"><span class=pl-c> *</span></td>
      </tr>
      <tr>
        <td id="L1387" class="blob-num js-line-number" data-line-number="1387"></td>
        <td id="LC1387" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * Variations are interpreted easily if you think of them as the left to right</span></td>
      </tr>
      <tr>
        <td id="L1388" class="blob-num js-line-number" data-line-number="1388"></td>
        <td id="LC1388" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`</span></td>
      </tr>
      <tr>
        <td id="L1389" class="blob-num js-line-number" data-line-number="1389"></td>
        <td id="LC1389" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * is right.&lt;br /&gt;</span></td>
      </tr>
      <tr>
        <td id="L1390" class="blob-num js-line-number" data-line-number="1390"></td>
        <td id="LC1390" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * Vertically (`left` and `right`), `start` is top and `end` is bottom.</span></td>
      </tr>
      <tr>
        <td id="L1391" class="blob-num js-line-number" data-line-number="1391"></td>
        <td id="LC1391" class="blob-code blob-code-inner js-file-line"><span class=pl-c> *</span></td>
      </tr>
      <tr>
        <td id="L1392" class="blob-num js-line-number" data-line-number="1392"></td>
        <td id="LC1392" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * Some valid examples are:</span></td>
      </tr>
      <tr>
        <td id="L1393" class="blob-num js-line-number" data-line-number="1393"></td>
        <td id="LC1393" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * - `top-end` (on top of reference, right aligned)</span></td>
      </tr>
      <tr>
        <td id="L1394" class="blob-num js-line-number" data-line-number="1394"></td>
        <td id="LC1394" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * - `right-start` (on right of reference, top aligned)</span></td>
      </tr>
      <tr>
        <td id="L1395" class="blob-num js-line-number" data-line-number="1395"></td>
        <td id="LC1395" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * - `bottom` (on bottom, centered)</span></td>
      </tr>
      <tr>
        <td id="L1396" class="blob-num js-line-number" data-line-number="1396"></td>
        <td id="LC1396" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * - `auto-right` (on the side with more space available, alignment depends by placement)</span></td>
      </tr>
      <tr>
        <td id="L1397" class="blob-num js-line-number" data-line-number="1397"></td>
        <td id="LC1397" class="blob-code blob-code-inner js-file-line"><span class=pl-c> *</span></td>
      </tr>
      <tr>
        <td id="L1398" class="blob-num js-line-number" data-line-number="1398"></td>
        <td id="LC1398" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@static</span></span></td>
      </tr>
      <tr>
        <td id="L1399" class="blob-num js-line-number" data-line-number="1399"></td>
        <td id="LC1399" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@type</span> {Array}</span></td>
      </tr>
      <tr>
        <td id="L1400" class="blob-num js-line-number" data-line-number="1400"></td>
        <td id="LC1400" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@enum</span> {String}</span></td>
      </tr>
      <tr>
        <td id="L1401" class="blob-num js-line-number" data-line-number="1401"></td>
        <td id="LC1401" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@readonly</span></span></td>
      </tr>
      <tr>
        <td id="L1402" class="blob-num js-line-number" data-line-number="1402"></td>
        <td id="LC1402" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@method</span> placements</span></td>
      </tr>
      <tr>
        <td id="L1403" class="blob-num js-line-number" data-line-number="1403"></td>
        <td id="LC1403" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@memberof</span> Popper</span></td>
      </tr>
      <tr>
        <td id="L1404" class="blob-num js-line-number" data-line-number="1404"></td>
        <td id="LC1404" class="blob-code blob-code-inner js-file-line"><span class=pl-c> */</span></td>
      </tr>
      <tr>
        <td id="L1405" class="blob-num js-line-number" data-line-number="1405"></td>
        <td id="LC1405" class="blob-code blob-code-inner js-file-line"><span class=pl-k>var</span> <span class=pl-s1>placements</span> <span class=pl-c1>=</span> <span class=pl-kos>[</span><span class=pl-s>&#39;auto-start&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;auto&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;auto-end&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;top-start&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;top&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;top-end&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;right-start&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;right&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;right-end&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;bottom-end&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;bottom&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;bottom-start&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;left-end&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;left&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;left-start&#39;</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1406" class="blob-num js-line-number" data-line-number="1406"></td>
        <td id="LC1406" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1407" class="blob-num js-line-number" data-line-number="1407"></td>
        <td id="LC1407" class="blob-code blob-code-inner js-file-line"><span class=pl-c>// Get rid of `auto` `auto-start` and `auto-end`</span></td>
      </tr>
      <tr>
        <td id="L1408" class="blob-num js-line-number" data-line-number="1408"></td>
        <td id="LC1408" class="blob-code blob-code-inner js-file-line"><span class=pl-k>var</span> <span class=pl-s1>validPlacements</span> <span class=pl-c1>=</span> <span class=pl-s1>placements</span><span class=pl-kos>.</span><span class=pl-en>slice</span><span class=pl-kos>(</span><span class=pl-c1>3</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1409" class="blob-num js-line-number" data-line-number="1409"></td>
        <td id="LC1409" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1410" class="blob-num js-line-number" data-line-number="1410"></td>
        <td id="LC1410" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L1411" class="blob-num js-line-number" data-line-number="1411"></td>
        <td id="LC1411" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * Given an initial placement, returns all the subsequent placements</span></td>
      </tr>
      <tr>
        <td id="L1412" class="blob-num js-line-number" data-line-number="1412"></td>
        <td id="LC1412" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * clockwise (or counter-clockwise).</span></td>
      </tr>
      <tr>
        <td id="L1413" class="blob-num js-line-number" data-line-number="1413"></td>
        <td id="LC1413" class="blob-code blob-code-inner js-file-line"><span class=pl-c> *</span></td>
      </tr>
      <tr>
        <td id="L1414" class="blob-num js-line-number" data-line-number="1414"></td>
        <td id="LC1414" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@method</span></span></td>
      </tr>
      <tr>
        <td id="L1415" class="blob-num js-line-number" data-line-number="1415"></td>
        <td id="LC1415" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@memberof</span> Popper.Utils</span></td>
      </tr>
      <tr>
        <td id="L1416" class="blob-num js-line-number" data-line-number="1416"></td>
        <td id="LC1416" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@argument</span> {String} placement - A valid placement (it accepts variations)</span></td>
      </tr>
      <tr>
        <td id="L1417" class="blob-num js-line-number" data-line-number="1417"></td>
        <td id="LC1417" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@argument</span> {Boolean} counter - Set to true to walk the placements counterclockwise</span></td>
      </tr>
      <tr>
        <td id="L1418" class="blob-num js-line-number" data-line-number="1418"></td>
        <td id="LC1418" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@returns</span> {<span class=pl-smi>Array</span>} placements including their variations</span></td>
      </tr>
      <tr>
        <td id="L1419" class="blob-num js-line-number" data-line-number="1419"></td>
        <td id="LC1419" class="blob-code blob-code-inner js-file-line"><span class=pl-c> */</span></td>
      </tr>
      <tr>
        <td id="L1420" class="blob-num js-line-number" data-line-number="1420"></td>
        <td id="LC1420" class="blob-code blob-code-inner js-file-line"><span class=pl-k>function</span> <span class=pl-en>clockwise</span><span class=pl-kos>(</span><span class=pl-s1>placement</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1421" class="blob-num js-line-number" data-line-number="1421"></td>
        <td id="LC1421" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>counter</span> <span class=pl-c1>=</span> <span class=pl-smi>arguments</span><span class=pl-kos>.</span><span class=pl-c1>length</span> <span class=pl-c1>&gt;</span> <span class=pl-c1>1</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-smi>arguments</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span> !== undefined ? <span class=pl-smi>arguments</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span> : <span class=pl-c1>false</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1422" class="blob-num js-line-number" data-line-number="1422"></td>
        <td id="LC1422" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1423" class="blob-num js-line-number" data-line-number="1423"></td>
        <td id="LC1423" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>index</span> <span class=pl-c1>=</span> <span class=pl-s1>validPlacements</span><span class=pl-kos>.</span><span class=pl-en>indexOf</span><span class=pl-kos>(</span><span class=pl-s1>placement</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1424" class="blob-num js-line-number" data-line-number="1424"></td>
        <td id="LC1424" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>arr</span> <span class=pl-c1>=</span> <span class=pl-s1>validPlacements</span><span class=pl-kos>.</span><span class=pl-en>slice</span><span class=pl-kos>(</span><span class=pl-s1>index</span> <span class=pl-c1>+</span> <span class=pl-c1>1</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>concat</span><span class=pl-kos>(</span><span class=pl-s1>validPlacements</span><span class=pl-kos>.</span><span class=pl-en>slice</span><span class=pl-kos>(</span><span class=pl-c1>0</span><span class=pl-kos>,</span> <span class=pl-s1>index</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1425" class="blob-num js-line-number" data-line-number="1425"></td>
        <td id="LC1425" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>return</span> <span class=pl-s1>counter</span> ? <span class=pl-s1>arr</span><span class=pl-kos>.</span><span class=pl-en>reverse</span><span class=pl-kos>(</span><span class=pl-kos>)</span> : <span class=pl-s1>arr</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1426" class="blob-num js-line-number" data-line-number="1426"></td>
        <td id="LC1426" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1427" class="blob-num js-line-number" data-line-number="1427"></td>
        <td id="LC1427" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1428" class="blob-num js-line-number" data-line-number="1428"></td>
        <td id="LC1428" class="blob-code blob-code-inner js-file-line"><span class=pl-k>var</span> <span class=pl-c1>BEHAVIORS</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1429" class="blob-num js-line-number" data-line-number="1429"></td>
        <td id="LC1429" class="blob-code blob-code-inner js-file-line">  <span class=pl-c1>FLIP</span>: <span class=pl-s>&#39;flip&#39;</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1430" class="blob-num js-line-number" data-line-number="1430"></td>
        <td id="LC1430" class="blob-code blob-code-inner js-file-line">  <span class=pl-c1>CLOCKWISE</span>: <span class=pl-s>&#39;clockwise&#39;</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1431" class="blob-num js-line-number" data-line-number="1431"></td>
        <td id="LC1431" class="blob-code blob-code-inner js-file-line">  <span class=pl-c1>COUNTERCLOCKWISE</span>: <span class=pl-s>&#39;counterclockwise&#39;</span></td>
      </tr>
      <tr>
        <td id="L1432" class="blob-num js-line-number" data-line-number="1432"></td>
        <td id="LC1432" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1433" class="blob-num js-line-number" data-line-number="1433"></td>
        <td id="LC1433" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1434" class="blob-num js-line-number" data-line-number="1434"></td>
        <td id="LC1434" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L1435" class="blob-num js-line-number" data-line-number="1435"></td>
        <td id="LC1435" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@function</span></span></td>
      </tr>
      <tr>
        <td id="L1436" class="blob-num js-line-number" data-line-number="1436"></td>
        <td id="LC1436" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@memberof</span> Modifiers</span></td>
      </tr>
      <tr>
        <td id="L1437" class="blob-num js-line-number" data-line-number="1437"></td>
        <td id="LC1437" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@argument</span> {Object} data - The data object generated by update method</span></td>
      </tr>
      <tr>
        <td id="L1438" class="blob-num js-line-number" data-line-number="1438"></td>
        <td id="LC1438" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@argument</span> {Object} options - Modifiers configuration and options</span></td>
      </tr>
      <tr>
        <td id="L1439" class="blob-num js-line-number" data-line-number="1439"></td>
        <td id="LC1439" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@returns</span> {<span class=pl-smi>Object</span>} The data object, properly modified</span></td>
      </tr>
      <tr>
        <td id="L1440" class="blob-num js-line-number" data-line-number="1440"></td>
        <td id="LC1440" class="blob-code blob-code-inner js-file-line"><span class=pl-c> */</span></td>
      </tr>
      <tr>
        <td id="L1441" class="blob-num js-line-number" data-line-number="1441"></td>
        <td id="LC1441" class="blob-code blob-code-inner js-file-line"><span class=pl-k>function</span> <span class=pl-en>flip</span><span class=pl-kos>(</span><span class=pl-s1>data</span><span class=pl-kos>,</span> <span class=pl-s1>options</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1442" class="blob-num js-line-number" data-line-number="1442"></td>
        <td id="LC1442" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// if `inner` modifier is enabled, we can&#39;t use the `flip` modifier</span></td>
      </tr>
      <tr>
        <td id="L1443" class="blob-num js-line-number" data-line-number="1443"></td>
        <td id="LC1443" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-en>isModifierEnabled</span><span class=pl-kos>(</span><span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>instance</span><span class=pl-kos>.</span><span class=pl-c1>modifiers</span><span class=pl-kos>,</span> <span class=pl-s>&#39;inner&#39;</span><span class=pl-kos>)</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1444" class="blob-num js-line-number" data-line-number="1444"></td>
        <td id="LC1444" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>return</span> <span class=pl-s1>data</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1445" class="blob-num js-line-number" data-line-number="1445"></td>
        <td id="LC1445" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1446" class="blob-num js-line-number" data-line-number="1446"></td>
        <td id="LC1446" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1447" class="blob-num js-line-number" data-line-number="1447"></td>
        <td id="LC1447" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>flipped</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>placement</span> <span class=pl-c1>===</span> <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>originalPlacement</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1448" class="blob-num js-line-number" data-line-number="1448"></td>
        <td id="LC1448" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>// seems like flip is trying to loop, probably there&#39;s not enough space on any of the flippable sides</span></td>
      </tr>
      <tr>
        <td id="L1449" class="blob-num js-line-number" data-line-number="1449"></td>
        <td id="LC1449" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>return</span> <span class=pl-s1>data</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1450" class="blob-num js-line-number" data-line-number="1450"></td>
        <td id="LC1450" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1451" class="blob-num js-line-number" data-line-number="1451"></td>
        <td id="LC1451" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1452" class="blob-num js-line-number" data-line-number="1452"></td>
        <td id="LC1452" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>boundaries</span> <span class=pl-c1>=</span> <span class=pl-en>getBoundaries</span><span class=pl-kos>(</span><span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>instance</span><span class=pl-kos>.</span><span class=pl-c1>popper</span><span class=pl-kos>,</span> <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>instance</span><span class=pl-kos>.</span><span class=pl-c1>reference</span><span class=pl-kos>,</span> <span class=pl-s1>options</span><span class=pl-kos>.</span><span class=pl-c1>padding</span><span class=pl-kos>,</span> <span class=pl-s1>options</span><span class=pl-kos>.</span><span class=pl-c1>boundariesElement</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1453" class="blob-num js-line-number" data-line-number="1453"></td>
        <td id="LC1453" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1454" class="blob-num js-line-number" data-line-number="1454"></td>
        <td id="LC1454" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>placement</span> <span class=pl-c1>=</span> <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>placement</span><span class=pl-kos>.</span><span class=pl-en>split</span><span class=pl-kos>(</span><span class=pl-s>&#39;-&#39;</span><span class=pl-kos>)</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1455" class="blob-num js-line-number" data-line-number="1455"></td>
        <td id="LC1455" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>placementOpposite</span> <span class=pl-c1>=</span> <span class=pl-en>getOppositePlacement</span><span class=pl-kos>(</span><span class=pl-s1>placement</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1456" class="blob-num js-line-number" data-line-number="1456"></td>
        <td id="LC1456" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>variation</span> <span class=pl-c1>=</span> <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>placement</span><span class=pl-kos>.</span><span class=pl-en>split</span><span class=pl-kos>(</span><span class=pl-s>&#39;-&#39;</span><span class=pl-kos>)</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span> <span class=pl-c1>||</span> <span class=pl-s>&#39;&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1457" class="blob-num js-line-number" data-line-number="1457"></td>
        <td id="LC1457" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1458" class="blob-num js-line-number" data-line-number="1458"></td>
        <td id="LC1458" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>flipOrder</span> <span class=pl-c1>=</span> <span class=pl-kos>[</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1459" class="blob-num js-line-number" data-line-number="1459"></td>
        <td id="LC1459" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1460" class="blob-num js-line-number" data-line-number="1460"></td>
        <td id="LC1460" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>switch</span> <span class=pl-kos>(</span><span class=pl-s1>options</span><span class=pl-kos>.</span><span class=pl-c1>behavior</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1461" class="blob-num js-line-number" data-line-number="1461"></td>
        <td id="LC1461" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>case</span> <span class=pl-c1>BEHAVIORS</span><span class=pl-kos>.</span><span class=pl-c1>FLIP</span>:</td>
      </tr>
      <tr>
        <td id="L1462" class="blob-num js-line-number" data-line-number="1462"></td>
        <td id="LC1462" class="blob-code blob-code-inner js-file-line">      <span class=pl-s1>flipOrder</span> <span class=pl-c1>=</span> <span class=pl-kos>[</span><span class=pl-s1>placement</span><span class=pl-kos>,</span> <span class=pl-s1>placementOpposite</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1463" class="blob-num js-line-number" data-line-number="1463"></td>
        <td id="LC1463" class="blob-code blob-code-inner js-file-line">      <span class=pl-k>break</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1464" class="blob-num js-line-number" data-line-number="1464"></td>
        <td id="LC1464" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>case</span> <span class=pl-c1>BEHAVIORS</span><span class=pl-kos>.</span><span class=pl-c1>CLOCKWISE</span>:</td>
      </tr>
      <tr>
        <td id="L1465" class="blob-num js-line-number" data-line-number="1465"></td>
        <td id="LC1465" class="blob-code blob-code-inner js-file-line">      <span class=pl-s1>flipOrder</span> <span class=pl-c1>=</span> <span class=pl-en>clockwise</span><span class=pl-kos>(</span><span class=pl-s1>placement</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1466" class="blob-num js-line-number" data-line-number="1466"></td>
        <td id="LC1466" class="blob-code blob-code-inner js-file-line">      <span class=pl-k>break</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1467" class="blob-num js-line-number" data-line-number="1467"></td>
        <td id="LC1467" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>case</span> <span class=pl-c1>BEHAVIORS</span><span class=pl-kos>.</span><span class=pl-c1>COUNTERCLOCKWISE</span>:</td>
      </tr>
      <tr>
        <td id="L1468" class="blob-num js-line-number" data-line-number="1468"></td>
        <td id="LC1468" class="blob-code blob-code-inner js-file-line">      <span class=pl-s1>flipOrder</span> <span class=pl-c1>=</span> <span class=pl-en>clockwise</span><span class=pl-kos>(</span><span class=pl-s1>placement</span><span class=pl-kos>,</span> <span class=pl-c1>true</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1469" class="blob-num js-line-number" data-line-number="1469"></td>
        <td id="LC1469" class="blob-code blob-code-inner js-file-line">      <span class=pl-k>break</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1470" class="blob-num js-line-number" data-line-number="1470"></td>
        <td id="LC1470" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>default</span>:</td>
      </tr>
      <tr>
        <td id="L1471" class="blob-num js-line-number" data-line-number="1471"></td>
        <td id="LC1471" class="blob-code blob-code-inner js-file-line">      <span class=pl-s1>flipOrder</span> <span class=pl-c1>=</span> <span class=pl-s1>options</span><span class=pl-kos>.</span><span class=pl-c1>behavior</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1472" class="blob-num js-line-number" data-line-number="1472"></td>
        <td id="LC1472" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1473" class="blob-num js-line-number" data-line-number="1473"></td>
        <td id="LC1473" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1474" class="blob-num js-line-number" data-line-number="1474"></td>
        <td id="LC1474" class="blob-code blob-code-inner js-file-line">  <span class=pl-s1>flipOrder</span><span class=pl-kos>.</span><span class=pl-en>forEach</span><span class=pl-kos>(</span><span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>step</span><span class=pl-kos>,</span> <span class=pl-s1>index</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1475" class="blob-num js-line-number" data-line-number="1475"></td>
        <td id="LC1475" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>placement</span> !== <span class=pl-s1>step</span> <span class=pl-c1>||</span> <span class=pl-s1>flipOrder</span><span class=pl-kos>.</span><span class=pl-c1>length</span> <span class=pl-c1>===</span> <span class=pl-s1>index</span> <span class=pl-c1>+</span> <span class=pl-c1>1</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1476" class="blob-num js-line-number" data-line-number="1476"></td>
        <td id="LC1476" class="blob-code blob-code-inner js-file-line">      <span class=pl-k>return</span> <span class=pl-s1>data</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1477" class="blob-num js-line-number" data-line-number="1477"></td>
        <td id="LC1477" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1478" class="blob-num js-line-number" data-line-number="1478"></td>
        <td id="LC1478" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1479" class="blob-num js-line-number" data-line-number="1479"></td>
        <td id="LC1479" class="blob-code blob-code-inner js-file-line">    <span class=pl-s1>placement</span> <span class=pl-c1>=</span> <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>placement</span><span class=pl-kos>.</span><span class=pl-en>split</span><span class=pl-kos>(</span><span class=pl-s>&#39;-&#39;</span><span class=pl-kos>)</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1480" class="blob-num js-line-number" data-line-number="1480"></td>
        <td id="LC1480" class="blob-code blob-code-inner js-file-line">    <span class=pl-s1>placementOpposite</span> <span class=pl-c1>=</span> <span class=pl-en>getOppositePlacement</span><span class=pl-kos>(</span><span class=pl-s1>placement</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1481" class="blob-num js-line-number" data-line-number="1481"></td>
        <td id="LC1481" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1482" class="blob-num js-line-number" data-line-number="1482"></td>
        <td id="LC1482" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>var</span> <span class=pl-s1>popperOffsets</span> <span class=pl-c1>=</span> <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>offsets</span><span class=pl-kos>.</span><span class=pl-c1>popper</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1483" class="blob-num js-line-number" data-line-number="1483"></td>
        <td id="LC1483" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>var</span> <span class=pl-s1>refOffsets</span> <span class=pl-c1>=</span> <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>offsets</span><span class=pl-kos>.</span><span class=pl-c1>reference</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1484" class="blob-num js-line-number" data-line-number="1484"></td>
        <td id="LC1484" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1485" class="blob-num js-line-number" data-line-number="1485"></td>
        <td id="LC1485" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>// using floor because the reference offsets may contain decimals we are not going to consider here</span></td>
      </tr>
      <tr>
        <td id="L1486" class="blob-num js-line-number" data-line-number="1486"></td>
        <td id="LC1486" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>var</span> <span class=pl-s1>floor</span> <span class=pl-c1>=</span> <span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-c1>floor</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1487" class="blob-num js-line-number" data-line-number="1487"></td>
        <td id="LC1487" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>var</span> <span class=pl-s1>overlapsRef</span> <span class=pl-c1>=</span> <span class=pl-s1>placement</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;left&#39;</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>floor</span><span class=pl-kos>(</span><span class=pl-s1>popperOffsets</span><span class=pl-kos>.</span><span class=pl-c1>right</span><span class=pl-kos>)</span> <span class=pl-c1>&gt;</span> <span class=pl-s1>floor</span><span class=pl-kos>(</span><span class=pl-s1>refOffsets</span><span class=pl-kos>.</span><span class=pl-c1>left</span><span class=pl-kos>)</span> <span class=pl-c1>||</span> <span class=pl-s1>placement</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;right&#39;</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>floor</span><span class=pl-kos>(</span><span class=pl-s1>popperOffsets</span><span class=pl-kos>.</span><span class=pl-c1>left</span><span class=pl-kos>)</span> <span class=pl-c1>&lt;</span> <span class=pl-s1>floor</span><span class=pl-kos>(</span><span class=pl-s1>refOffsets</span><span class=pl-kos>.</span><span class=pl-c1>right</span><span class=pl-kos>)</span> <span class=pl-c1>||</span> <span class=pl-s1>placement</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;top&#39;</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>floor</span><span class=pl-kos>(</span><span class=pl-s1>popperOffsets</span><span class=pl-kos>.</span><span class=pl-c1>bottom</span><span class=pl-kos>)</span> <span class=pl-c1>&gt;</span> <span class=pl-s1>floor</span><span class=pl-kos>(</span><span class=pl-s1>refOffsets</span><span class=pl-kos>.</span><span class=pl-c1>top</span><span class=pl-kos>)</span> <span class=pl-c1>||</span> <span class=pl-s1>placement</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;bottom&#39;</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>floor</span><span class=pl-kos>(</span><span class=pl-s1>popperOffsets</span><span class=pl-kos>.</span><span class=pl-c1>top</span><span class=pl-kos>)</span> <span class=pl-c1>&lt;</span> <span class=pl-s1>floor</span><span class=pl-kos>(</span><span class=pl-s1>refOffsets</span><span class=pl-kos>.</span><span class=pl-c1>bottom</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1488" class="blob-num js-line-number" data-line-number="1488"></td>
        <td id="LC1488" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1489" class="blob-num js-line-number" data-line-number="1489"></td>
        <td id="LC1489" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>var</span> <span class=pl-s1>overflowsLeft</span> <span class=pl-c1>=</span> <span class=pl-s1>floor</span><span class=pl-kos>(</span><span class=pl-s1>popperOffsets</span><span class=pl-kos>.</span><span class=pl-c1>left</span><span class=pl-kos>)</span> <span class=pl-c1>&lt;</span> <span class=pl-s1>floor</span><span class=pl-kos>(</span><span class=pl-s1>boundaries</span><span class=pl-kos>.</span><span class=pl-c1>left</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1490" class="blob-num js-line-number" data-line-number="1490"></td>
        <td id="LC1490" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>var</span> <span class=pl-s1>overflowsRight</span> <span class=pl-c1>=</span> <span class=pl-s1>floor</span><span class=pl-kos>(</span><span class=pl-s1>popperOffsets</span><span class=pl-kos>.</span><span class=pl-c1>right</span><span class=pl-kos>)</span> <span class=pl-c1>&gt;</span> <span class=pl-s1>floor</span><span class=pl-kos>(</span><span class=pl-s1>boundaries</span><span class=pl-kos>.</span><span class=pl-c1>right</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1491" class="blob-num js-line-number" data-line-number="1491"></td>
        <td id="LC1491" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>var</span> <span class=pl-s1>overflowsTop</span> <span class=pl-c1>=</span> <span class=pl-s1>floor</span><span class=pl-kos>(</span><span class=pl-s1>popperOffsets</span><span class=pl-kos>.</span><span class=pl-c1>top</span><span class=pl-kos>)</span> <span class=pl-c1>&lt;</span> <span class=pl-s1>floor</span><span class=pl-kos>(</span><span class=pl-s1>boundaries</span><span class=pl-kos>.</span><span class=pl-c1>top</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1492" class="blob-num js-line-number" data-line-number="1492"></td>
        <td id="LC1492" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>var</span> <span class=pl-s1>overflowsBottom</span> <span class=pl-c1>=</span> <span class=pl-s1>floor</span><span class=pl-kos>(</span><span class=pl-s1>popperOffsets</span><span class=pl-kos>.</span><span class=pl-c1>bottom</span><span class=pl-kos>)</span> <span class=pl-c1>&gt;</span> <span class=pl-s1>floor</span><span class=pl-kos>(</span><span class=pl-s1>boundaries</span><span class=pl-kos>.</span><span class=pl-c1>bottom</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1493" class="blob-num js-line-number" data-line-number="1493"></td>
        <td id="LC1493" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1494" class="blob-num js-line-number" data-line-number="1494"></td>
        <td id="LC1494" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>var</span> <span class=pl-s1>overflowsBoundaries</span> <span class=pl-c1>=</span> <span class=pl-s1>placement</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;left&#39;</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>overflowsLeft</span> <span class=pl-c1>||</span> <span class=pl-s1>placement</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;right&#39;</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>overflowsRight</span> <span class=pl-c1>||</span> <span class=pl-s1>placement</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;top&#39;</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>overflowsTop</span> <span class=pl-c1>||</span> <span class=pl-s1>placement</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;bottom&#39;</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>overflowsBottom</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1495" class="blob-num js-line-number" data-line-number="1495"></td>
        <td id="LC1495" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1496" class="blob-num js-line-number" data-line-number="1496"></td>
        <td id="LC1496" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>// flip the variation if required</span></td>
      </tr>
      <tr>
        <td id="L1497" class="blob-num js-line-number" data-line-number="1497"></td>
        <td id="LC1497" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>var</span> <span class=pl-s1>isVertical</span> <span class=pl-c1>=</span> <span class=pl-kos>[</span><span class=pl-s>&#39;top&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;bottom&#39;</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-en>indexOf</span><span class=pl-kos>(</span><span class=pl-s1>placement</span><span class=pl-kos>)</span> !== <span class=pl-c1>-</span><span class=pl-c1>1</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1498" class="blob-num js-line-number" data-line-number="1498"></td>
        <td id="LC1498" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>var</span> <span class=pl-s1>flippedVariation</span> <span class=pl-c1>=</span> !!<span class=pl-s1>options</span><span class=pl-kos>.</span><span class=pl-c1>flipVariations</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-kos>(</span><span class=pl-s1>isVertical</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>variation</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;start&#39;</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>overflowsLeft</span> <span class=pl-c1>||</span> <span class=pl-s1>isVertical</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>variation</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;end&#39;</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>overflowsRight</span> <span class=pl-c1>||</span> !<span class=pl-s1>isVertical</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>variation</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;start&#39;</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>overflowsTop</span> <span class=pl-c1>||</span> !<span class=pl-s1>isVertical</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>variation</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;end&#39;</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>overflowsBottom</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1499" class="blob-num js-line-number" data-line-number="1499"></td>
        <td id="LC1499" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1500" class="blob-num js-line-number" data-line-number="1500"></td>
        <td id="LC1500" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>overlapsRef</span> <span class=pl-c1>||</span> <span class=pl-s1>overflowsBoundaries</span> <span class=pl-c1>||</span> <span class=pl-s1>flippedVariation</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1501" class="blob-num js-line-number" data-line-number="1501"></td>
        <td id="LC1501" class="blob-code blob-code-inner js-file-line">      <span class=pl-c>// this boolean to detect any flip loop</span></td>
      </tr>
      <tr>
        <td id="L1502" class="blob-num js-line-number" data-line-number="1502"></td>
        <td id="LC1502" class="blob-code blob-code-inner js-file-line">      <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>flipped</span> <span class=pl-c1>=</span> <span class=pl-c1>true</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1503" class="blob-num js-line-number" data-line-number="1503"></td>
        <td id="LC1503" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1504" class="blob-num js-line-number" data-line-number="1504"></td>
        <td id="LC1504" class="blob-code blob-code-inner js-file-line">      <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>overlapsRef</span> <span class=pl-c1>||</span> <span class=pl-s1>overflowsBoundaries</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1505" class="blob-num js-line-number" data-line-number="1505"></td>
        <td id="LC1505" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>placement</span> <span class=pl-c1>=</span> <span class=pl-s1>flipOrder</span><span class=pl-kos>[</span><span class=pl-s1>index</span> <span class=pl-c1>+</span> <span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1506" class="blob-num js-line-number" data-line-number="1506"></td>
        <td id="LC1506" class="blob-code blob-code-inner js-file-line">      <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1507" class="blob-num js-line-number" data-line-number="1507"></td>
        <td id="LC1507" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1508" class="blob-num js-line-number" data-line-number="1508"></td>
        <td id="LC1508" class="blob-code blob-code-inner js-file-line">      <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>flippedVariation</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1509" class="blob-num js-line-number" data-line-number="1509"></td>
        <td id="LC1509" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>variation</span> <span class=pl-c1>=</span> <span class=pl-en>getOppositeVariation</span><span class=pl-kos>(</span><span class=pl-s1>variation</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1510" class="blob-num js-line-number" data-line-number="1510"></td>
        <td id="LC1510" class="blob-code blob-code-inner js-file-line">      <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1511" class="blob-num js-line-number" data-line-number="1511"></td>
        <td id="LC1511" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1512" class="blob-num js-line-number" data-line-number="1512"></td>
        <td id="LC1512" class="blob-code blob-code-inner js-file-line">      <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>placement</span> <span class=pl-c1>=</span> <span class=pl-s1>placement</span> <span class=pl-c1>+</span> <span class=pl-kos>(</span><span class=pl-s1>variation</span> ? <span class=pl-s>&#39;-&#39;</span> <span class=pl-c1>+</span> <span class=pl-s1>variation</span> : <span class=pl-s>&#39;&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1513" class="blob-num js-line-number" data-line-number="1513"></td>
        <td id="LC1513" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1514" class="blob-num js-line-number" data-line-number="1514"></td>
        <td id="LC1514" class="blob-code blob-code-inner js-file-line">      <span class=pl-c>// this object contains `position`, we want to preserve it along with</span></td>
      </tr>
      <tr>
        <td id="L1515" class="blob-num js-line-number" data-line-number="1515"></td>
        <td id="LC1515" class="blob-code blob-code-inner js-file-line">      <span class=pl-c>// any additional property we may add in the future</span></td>
      </tr>
      <tr>
        <td id="L1516" class="blob-num js-line-number" data-line-number="1516"></td>
        <td id="LC1516" class="blob-code blob-code-inner js-file-line">      <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>offsets</span><span class=pl-kos>.</span><span class=pl-c1>popper</span> <span class=pl-c1>=</span> <span class=pl-s1>_extends</span><span class=pl-kos>(</span><span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>,</span> <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>offsets</span><span class=pl-kos>.</span><span class=pl-c1>popper</span><span class=pl-kos>,</span> <span class=pl-en>getPopperOffsets</span><span class=pl-kos>(</span><span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>instance</span><span class=pl-kos>.</span><span class=pl-c1>popper</span><span class=pl-kos>,</span> <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>offsets</span><span class=pl-kos>.</span><span class=pl-c1>reference</span><span class=pl-kos>,</span> <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>placement</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1517" class="blob-num js-line-number" data-line-number="1517"></td>
        <td id="LC1517" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1518" class="blob-num js-line-number" data-line-number="1518"></td>
        <td id="LC1518" class="blob-code blob-code-inner js-file-line">      <span class=pl-s1>data</span> <span class=pl-c1>=</span> <span class=pl-en>runModifiers</span><span class=pl-kos>(</span><span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>instance</span><span class=pl-kos>.</span><span class=pl-c1>modifiers</span><span class=pl-kos>,</span> <span class=pl-s1>data</span><span class=pl-kos>,</span> <span class=pl-s>&#39;flip&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1519" class="blob-num js-line-number" data-line-number="1519"></td>
        <td id="LC1519" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1520" class="blob-num js-line-number" data-line-number="1520"></td>
        <td id="LC1520" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1521" class="blob-num js-line-number" data-line-number="1521"></td>
        <td id="LC1521" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>return</span> <span class=pl-s1>data</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1522" class="blob-num js-line-number" data-line-number="1522"></td>
        <td id="LC1522" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1523" class="blob-num js-line-number" data-line-number="1523"></td>
        <td id="LC1523" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1524" class="blob-num js-line-number" data-line-number="1524"></td>
        <td id="LC1524" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L1525" class="blob-num js-line-number" data-line-number="1525"></td>
        <td id="LC1525" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@function</span></span></td>
      </tr>
      <tr>
        <td id="L1526" class="blob-num js-line-number" data-line-number="1526"></td>
        <td id="LC1526" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@memberof</span> Modifiers</span></td>
      </tr>
      <tr>
        <td id="L1527" class="blob-num js-line-number" data-line-number="1527"></td>
        <td id="LC1527" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@argument</span> {Object} data - The data object generated by update method</span></td>
      </tr>
      <tr>
        <td id="L1528" class="blob-num js-line-number" data-line-number="1528"></td>
        <td id="LC1528" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@argument</span> {Object} options - Modifiers configuration and options</span></td>
      </tr>
      <tr>
        <td id="L1529" class="blob-num js-line-number" data-line-number="1529"></td>
        <td id="LC1529" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@returns</span> {<span class=pl-smi>Object</span>} The data object, properly modified</span></td>
      </tr>
      <tr>
        <td id="L1530" class="blob-num js-line-number" data-line-number="1530"></td>
        <td id="LC1530" class="blob-code blob-code-inner js-file-line"><span class=pl-c> */</span></td>
      </tr>
      <tr>
        <td id="L1531" class="blob-num js-line-number" data-line-number="1531"></td>
        <td id="LC1531" class="blob-code blob-code-inner js-file-line"><span class=pl-k>function</span> <span class=pl-en>keepTogether</span><span class=pl-kos>(</span><span class=pl-s1>data</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1532" class="blob-num js-line-number" data-line-number="1532"></td>
        <td id="LC1532" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>_data$offsets</span> <span class=pl-c1>=</span> <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>offsets</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1533" class="blob-num js-line-number" data-line-number="1533"></td>
        <td id="LC1533" class="blob-code blob-code-inner js-file-line">      <span class=pl-s1>popper</span> <span class=pl-c1>=</span> <span class=pl-s1>_data$offsets</span><span class=pl-kos>.</span><span class=pl-c1>popper</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1534" class="blob-num js-line-number" data-line-number="1534"></td>
        <td id="LC1534" class="blob-code blob-code-inner js-file-line">      <span class=pl-s1>reference</span> <span class=pl-c1>=</span> <span class=pl-s1>_data$offsets</span><span class=pl-kos>.</span><span class=pl-c1>reference</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1535" class="blob-num js-line-number" data-line-number="1535"></td>
        <td id="LC1535" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1536" class="blob-num js-line-number" data-line-number="1536"></td>
        <td id="LC1536" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>placement</span> <span class=pl-c1>=</span> <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>placement</span><span class=pl-kos>.</span><span class=pl-en>split</span><span class=pl-kos>(</span><span class=pl-s>&#39;-&#39;</span><span class=pl-kos>)</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1537" class="blob-num js-line-number" data-line-number="1537"></td>
        <td id="LC1537" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>floor</span> <span class=pl-c1>=</span> <span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-c1>floor</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1538" class="blob-num js-line-number" data-line-number="1538"></td>
        <td id="LC1538" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>isVertical</span> <span class=pl-c1>=</span> <span class=pl-kos>[</span><span class=pl-s>&#39;top&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;bottom&#39;</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-en>indexOf</span><span class=pl-kos>(</span><span class=pl-s1>placement</span><span class=pl-kos>)</span> !== <span class=pl-c1>-</span><span class=pl-c1>1</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1539" class="blob-num js-line-number" data-line-number="1539"></td>
        <td id="LC1539" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>side</span> <span class=pl-c1>=</span> <span class=pl-s1>isVertical</span> ? <span class=pl-s>&#39;right&#39;</span> : <span class=pl-s>&#39;bottom&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1540" class="blob-num js-line-number" data-line-number="1540"></td>
        <td id="LC1540" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>opSide</span> <span class=pl-c1>=</span> <span class=pl-s1>isVertical</span> ? <span class=pl-s>&#39;left&#39;</span> : <span class=pl-s>&#39;top&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1541" class="blob-num js-line-number" data-line-number="1541"></td>
        <td id="LC1541" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>measurement</span> <span class=pl-c1>=</span> <span class=pl-s1>isVertical</span> ? <span class=pl-s>&#39;width&#39;</span> : <span class=pl-s>&#39;height&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1542" class="blob-num js-line-number" data-line-number="1542"></td>
        <td id="LC1542" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1543" class="blob-num js-line-number" data-line-number="1543"></td>
        <td id="LC1543" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>popper</span><span class=pl-kos>[</span><span class=pl-s1>side</span><span class=pl-kos>]</span> <span class=pl-c1>&lt;</span> <span class=pl-s1>floor</span><span class=pl-kos>(</span><span class=pl-s1>reference</span><span class=pl-kos>[</span><span class=pl-s1>opSide</span><span class=pl-kos>]</span><span class=pl-kos>)</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1544" class="blob-num js-line-number" data-line-number="1544"></td>
        <td id="LC1544" class="blob-code blob-code-inner js-file-line">    <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>offsets</span><span class=pl-kos>.</span><span class=pl-c1>popper</span><span class=pl-kos>[</span><span class=pl-s1>opSide</span><span class=pl-kos>]</span> <span class=pl-c1>=</span> <span class=pl-s1>floor</span><span class=pl-kos>(</span><span class=pl-s1>reference</span><span class=pl-kos>[</span><span class=pl-s1>opSide</span><span class=pl-kos>]</span><span class=pl-kos>)</span> <span class=pl-c1>-</span> <span class=pl-s1>popper</span><span class=pl-kos>[</span><span class=pl-s1>measurement</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1545" class="blob-num js-line-number" data-line-number="1545"></td>
        <td id="LC1545" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1546" class="blob-num js-line-number" data-line-number="1546"></td>
        <td id="LC1546" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>popper</span><span class=pl-kos>[</span><span class=pl-s1>opSide</span><span class=pl-kos>]</span> <span class=pl-c1>&gt;</span> <span class=pl-s1>floor</span><span class=pl-kos>(</span><span class=pl-s1>reference</span><span class=pl-kos>[</span><span class=pl-s1>side</span><span class=pl-kos>]</span><span class=pl-kos>)</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1547" class="blob-num js-line-number" data-line-number="1547"></td>
        <td id="LC1547" class="blob-code blob-code-inner js-file-line">    <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>offsets</span><span class=pl-kos>.</span><span class=pl-c1>popper</span><span class=pl-kos>[</span><span class=pl-s1>opSide</span><span class=pl-kos>]</span> <span class=pl-c1>=</span> <span class=pl-s1>floor</span><span class=pl-kos>(</span><span class=pl-s1>reference</span><span class=pl-kos>[</span><span class=pl-s1>side</span><span class=pl-kos>]</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1548" class="blob-num js-line-number" data-line-number="1548"></td>
        <td id="LC1548" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1549" class="blob-num js-line-number" data-line-number="1549"></td>
        <td id="LC1549" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1550" class="blob-num js-line-number" data-line-number="1550"></td>
        <td id="LC1550" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>return</span> <span class=pl-s1>data</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1551" class="blob-num js-line-number" data-line-number="1551"></td>
        <td id="LC1551" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1552" class="blob-num js-line-number" data-line-number="1552"></td>
        <td id="LC1552" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1553" class="blob-num js-line-number" data-line-number="1553"></td>
        <td id="LC1553" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L1554" class="blob-num js-line-number" data-line-number="1554"></td>
        <td id="LC1554" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * Converts a string containing value + unit into a px value number</span></td>
      </tr>
      <tr>
        <td id="L1555" class="blob-num js-line-number" data-line-number="1555"></td>
        <td id="LC1555" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@function</span></span></td>
      </tr>
      <tr>
        <td id="L1556" class="blob-num js-line-number" data-line-number="1556"></td>
        <td id="LC1556" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@memberof</span> {modifiers~offset}</span></td>
      </tr>
      <tr>
        <td id="L1557" class="blob-num js-line-number" data-line-number="1557"></td>
        <td id="LC1557" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@private</span></span></td>
      </tr>
      <tr>
        <td id="L1558" class="blob-num js-line-number" data-line-number="1558"></td>
        <td id="LC1558" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@argument</span> {String} str - Value + unit string</span></td>
      </tr>
      <tr>
        <td id="L1559" class="blob-num js-line-number" data-line-number="1559"></td>
        <td id="LC1559" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@argument</span> {String} measurement - `height` or `width`</span></td>
      </tr>
      <tr>
        <td id="L1560" class="blob-num js-line-number" data-line-number="1560"></td>
        <td id="LC1560" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@argument</span> {Object} popperOffsets</span></td>
      </tr>
      <tr>
        <td id="L1561" class="blob-num js-line-number" data-line-number="1561"></td>
        <td id="LC1561" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@argument</span> {Object} referenceOffsets</span></td>
      </tr>
      <tr>
        <td id="L1562" class="blob-num js-line-number" data-line-number="1562"></td>
        <td id="LC1562" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@returns</span> {<span class=pl-smi>Number|String</span>}</span></td>
      </tr>
      <tr>
        <td id="L1563" class="blob-num js-line-number" data-line-number="1563"></td>
        <td id="LC1563" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * Value in pixels, or original string if no values were extracted</span></td>
      </tr>
      <tr>
        <td id="L1564" class="blob-num js-line-number" data-line-number="1564"></td>
        <td id="LC1564" class="blob-code blob-code-inner js-file-line"><span class=pl-c> */</span></td>
      </tr>
      <tr>
        <td id="L1565" class="blob-num js-line-number" data-line-number="1565"></td>
        <td id="LC1565" class="blob-code blob-code-inner js-file-line"><span class=pl-k>function</span> <span class=pl-en>toValue</span><span class=pl-kos>(</span><span class=pl-s1>str</span><span class=pl-kos>,</span> <span class=pl-s1>measurement</span><span class=pl-kos>,</span> <span class=pl-s1>popperOffsets</span><span class=pl-kos>,</span> <span class=pl-s1>referenceOffsets</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1566" class="blob-num js-line-number" data-line-number="1566"></td>
        <td id="LC1566" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// separate value from unit</span></td>
      </tr>
      <tr>
        <td id="L1567" class="blob-num js-line-number" data-line-number="1567"></td>
        <td id="LC1567" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>split</span> <span class=pl-c1>=</span> <span class=pl-s1>str</span><span class=pl-kos>.</span><span class=pl-en>match</span><span class=pl-kos>(</span><span class=pl-pds>/<span class=pl-kos>(</span><span class=pl-kos>(?:</span><span class=pl-cce>\-</span><span class=pl-c1>|</span><span class=pl-cce>\+</span><span class=pl-kos>)</span>?<span class=pl-cce>\d</span><span class=pl-c1>*</span><span class=pl-cce>\.</span>?<span class=pl-cce>\d</span><span class=pl-c1>*</span><span class=pl-kos>)</span><span class=pl-kos>(</span>.<span class=pl-c1>*</span><span class=pl-kos>)</span>/</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1568" class="blob-num js-line-number" data-line-number="1568"></td>
        <td id="LC1568" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>value</span> <span class=pl-c1>=</span> <span class=pl-c1>+</span><span class=pl-s1>split</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1569" class="blob-num js-line-number" data-line-number="1569"></td>
        <td id="LC1569" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>unit</span> <span class=pl-c1>=</span> <span class=pl-s1>split</span><span class=pl-kos>[</span><span class=pl-c1>2</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1570" class="blob-num js-line-number" data-line-number="1570"></td>
        <td id="LC1570" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1571" class="blob-num js-line-number" data-line-number="1571"></td>
        <td id="LC1571" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// If it&#39;s not a number it&#39;s an operator, I guess</span></td>
      </tr>
      <tr>
        <td id="L1572" class="blob-num js-line-number" data-line-number="1572"></td>
        <td id="LC1572" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-s1>value</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1573" class="blob-num js-line-number" data-line-number="1573"></td>
        <td id="LC1573" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>return</span> <span class=pl-s1>str</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1574" class="blob-num js-line-number" data-line-number="1574"></td>
        <td id="LC1574" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1575" class="blob-num js-line-number" data-line-number="1575"></td>
        <td id="LC1575" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1576" class="blob-num js-line-number" data-line-number="1576"></td>
        <td id="LC1576" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>unit</span><span class=pl-kos>.</span><span class=pl-en>indexOf</span><span class=pl-kos>(</span><span class=pl-s>&#39;%&#39;</span><span class=pl-kos>)</span> <span class=pl-c1>===</span> <span class=pl-c1>0</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1577" class="blob-num js-line-number" data-line-number="1577"></td>
        <td id="LC1577" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>var</span> <span class=pl-s1>element</span> <span class=pl-c1>=</span> <span class=pl-k>void</span> <span class=pl-c1>0</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1578" class="blob-num js-line-number" data-line-number="1578"></td>
        <td id="LC1578" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>switch</span> <span class=pl-kos>(</span><span class=pl-s1>unit</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1579" class="blob-num js-line-number" data-line-number="1579"></td>
        <td id="LC1579" class="blob-code blob-code-inner js-file-line">      <span class=pl-k>case</span> <span class=pl-s>&#39;%p&#39;</span>:</td>
      </tr>
      <tr>
        <td id="L1580" class="blob-num js-line-number" data-line-number="1580"></td>
        <td id="LC1580" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>element</span> <span class=pl-c1>=</span> <span class=pl-s1>popperOffsets</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1581" class="blob-num js-line-number" data-line-number="1581"></td>
        <td id="LC1581" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>break</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1582" class="blob-num js-line-number" data-line-number="1582"></td>
        <td id="LC1582" class="blob-code blob-code-inner js-file-line">      <span class=pl-k>case</span> <span class=pl-s>&#39;%&#39;</span>:</td>
      </tr>
      <tr>
        <td id="L1583" class="blob-num js-line-number" data-line-number="1583"></td>
        <td id="LC1583" class="blob-code blob-code-inner js-file-line">      <span class=pl-k>case</span> <span class=pl-s>&#39;%r&#39;</span>:</td>
      </tr>
      <tr>
        <td id="L1584" class="blob-num js-line-number" data-line-number="1584"></td>
        <td id="LC1584" class="blob-code blob-code-inner js-file-line">      <span class=pl-k>default</span>:</td>
      </tr>
      <tr>
        <td id="L1585" class="blob-num js-line-number" data-line-number="1585"></td>
        <td id="LC1585" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>element</span> <span class=pl-c1>=</span> <span class=pl-s1>referenceOffsets</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1586" class="blob-num js-line-number" data-line-number="1586"></td>
        <td id="LC1586" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1587" class="blob-num js-line-number" data-line-number="1587"></td>
        <td id="LC1587" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1588" class="blob-num js-line-number" data-line-number="1588"></td>
        <td id="LC1588" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>var</span> <span class=pl-s1>rect</span> <span class=pl-c1>=</span> <span class=pl-en>getClientRect</span><span class=pl-kos>(</span><span class=pl-s1>element</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1589" class="blob-num js-line-number" data-line-number="1589"></td>
        <td id="LC1589" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>return</span> <span class=pl-s1>rect</span><span class=pl-kos>[</span><span class=pl-s1>measurement</span><span class=pl-kos>]</span> / <span class=pl-c1>100</span> * <span class=pl-s1>value</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1590" class="blob-num js-line-number" data-line-number="1590"></td>
        <td id="LC1590" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>unit</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;vh&#39;</span> <span class=pl-c1>||</span> <span class=pl-s1>unit</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;vw&#39;</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1591" class="blob-num js-line-number" data-line-number="1591"></td>
        <td id="LC1591" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>// if is a vh or vw, we calculate the size based on the viewport</span></td>
      </tr>
      <tr>
        <td id="L1592" class="blob-num js-line-number" data-line-number="1592"></td>
        <td id="LC1592" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>var</span> <span class=pl-s1>size</span> <span class=pl-c1>=</span> <span class=pl-k>void</span> <span class=pl-c1>0</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1593" class="blob-num js-line-number" data-line-number="1593"></td>
        <td id="LC1593" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>unit</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;vh&#39;</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1594" class="blob-num js-line-number" data-line-number="1594"></td>
        <td id="LC1594" class="blob-code blob-code-inner js-file-line">      <span class=pl-s1>size</span> <span class=pl-c1>=</span> <span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>max</span><span class=pl-kos>(</span><span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-c1>documentElement</span><span class=pl-kos>.</span><span class=pl-c1>clientHeight</span><span class=pl-kos>,</span> <span class=pl-smi>window</span><span class=pl-kos>.</span><span class=pl-c1>innerHeight</span> <span class=pl-c1>||</span> <span class=pl-c1>0</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1595" class="blob-num js-line-number" data-line-number="1595"></td>
        <td id="LC1595" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1596" class="blob-num js-line-number" data-line-number="1596"></td>
        <td id="LC1596" class="blob-code blob-code-inner js-file-line">      <span class=pl-s1>size</span> <span class=pl-c1>=</span> <span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>max</span><span class=pl-kos>(</span><span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-c1>documentElement</span><span class=pl-kos>.</span><span class=pl-c1>clientWidth</span><span class=pl-kos>,</span> <span class=pl-smi>window</span><span class=pl-kos>.</span><span class=pl-c1>innerWidth</span> <span class=pl-c1>||</span> <span class=pl-c1>0</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1597" class="blob-num js-line-number" data-line-number="1597"></td>
        <td id="LC1597" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1598" class="blob-num js-line-number" data-line-number="1598"></td>
        <td id="LC1598" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>return</span> <span class=pl-s1>size</span> / <span class=pl-c1>100</span> * <span class=pl-s1>value</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1599" class="blob-num js-line-number" data-line-number="1599"></td>
        <td id="LC1599" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1600" class="blob-num js-line-number" data-line-number="1600"></td>
        <td id="LC1600" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>// if is an explicit pixel unit, we get rid of the unit and keep the value</span></td>
      </tr>
      <tr>
        <td id="L1601" class="blob-num js-line-number" data-line-number="1601"></td>
        <td id="LC1601" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>// if is an implicit unit, it&#39;s px, and we return just the value</span></td>
      </tr>
      <tr>
        <td id="L1602" class="blob-num js-line-number" data-line-number="1602"></td>
        <td id="LC1602" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>return</span> <span class=pl-s1>value</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1603" class="blob-num js-line-number" data-line-number="1603"></td>
        <td id="LC1603" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1604" class="blob-num js-line-number" data-line-number="1604"></td>
        <td id="LC1604" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1605" class="blob-num js-line-number" data-line-number="1605"></td>
        <td id="LC1605" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1606" class="blob-num js-line-number" data-line-number="1606"></td>
        <td id="LC1606" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L1607" class="blob-num js-line-number" data-line-number="1607"></td>
        <td id="LC1607" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.</span></td>
      </tr>
      <tr>
        <td id="L1608" class="blob-num js-line-number" data-line-number="1608"></td>
        <td id="LC1608" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@function</span></span></td>
      </tr>
      <tr>
        <td id="L1609" class="blob-num js-line-number" data-line-number="1609"></td>
        <td id="LC1609" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@memberof</span> {modifiers~offset}</span></td>
      </tr>
      <tr>
        <td id="L1610" class="blob-num js-line-number" data-line-number="1610"></td>
        <td id="LC1610" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@private</span></span></td>
      </tr>
      <tr>
        <td id="L1611" class="blob-num js-line-number" data-line-number="1611"></td>
        <td id="LC1611" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@argument</span> {String} offset</span></td>
      </tr>
      <tr>
        <td id="L1612" class="blob-num js-line-number" data-line-number="1612"></td>
        <td id="LC1612" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@argument</span> {Object} popperOffsets</span></td>
      </tr>
      <tr>
        <td id="L1613" class="blob-num js-line-number" data-line-number="1613"></td>
        <td id="LC1613" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@argument</span> {Object} referenceOffsets</span></td>
      </tr>
      <tr>
        <td id="L1614" class="blob-num js-line-number" data-line-number="1614"></td>
        <td id="LC1614" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@argument</span> {String} basePlacement</span></td>
      </tr>
      <tr>
        <td id="L1615" class="blob-num js-line-number" data-line-number="1615"></td>
        <td id="LC1615" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@returns</span> {<span class=pl-smi>Array</span>} a two cells array with x and y offsets in numbers</span></td>
      </tr>
      <tr>
        <td id="L1616" class="blob-num js-line-number" data-line-number="1616"></td>
        <td id="LC1616" class="blob-code blob-code-inner js-file-line"><span class=pl-c> */</span></td>
      </tr>
      <tr>
        <td id="L1617" class="blob-num js-line-number" data-line-number="1617"></td>
        <td id="LC1617" class="blob-code blob-code-inner js-file-line"><span class=pl-k>function</span> <span class=pl-en>parseOffset</span><span class=pl-kos>(</span><span class=pl-s1>offset</span><span class=pl-kos>,</span> <span class=pl-s1>popperOffsets</span><span class=pl-kos>,</span> <span class=pl-s1>referenceOffsets</span><span class=pl-kos>,</span> <span class=pl-s1>basePlacement</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1618" class="blob-num js-line-number" data-line-number="1618"></td>
        <td id="LC1618" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>offsets</span> <span class=pl-c1>=</span> <span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>,</span> <span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1619" class="blob-num js-line-number" data-line-number="1619"></td>
        <td id="LC1619" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1620" class="blob-num js-line-number" data-line-number="1620"></td>
        <td id="LC1620" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// Use height if placement is left or right and index is 0 otherwise use width</span></td>
      </tr>
      <tr>
        <td id="L1621" class="blob-num js-line-number" data-line-number="1621"></td>
        <td id="LC1621" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// in this way the first offset will use an axis and the second one</span></td>
      </tr>
      <tr>
        <td id="L1622" class="blob-num js-line-number" data-line-number="1622"></td>
        <td id="LC1622" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// will use the other one</span></td>
      </tr>
      <tr>
        <td id="L1623" class="blob-num js-line-number" data-line-number="1623"></td>
        <td id="LC1623" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>useHeight</span> <span class=pl-c1>=</span> <span class=pl-kos>[</span><span class=pl-s>&#39;right&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;left&#39;</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-en>indexOf</span><span class=pl-kos>(</span><span class=pl-s1>basePlacement</span><span class=pl-kos>)</span> !== <span class=pl-c1>-</span><span class=pl-c1>1</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1624" class="blob-num js-line-number" data-line-number="1624"></td>
        <td id="LC1624" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1625" class="blob-num js-line-number" data-line-number="1625"></td>
        <td id="LC1625" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// Split the offset string to obtain a list of values and operands</span></td>
      </tr>
      <tr>
        <td id="L1626" class="blob-num js-line-number" data-line-number="1626"></td>
        <td id="LC1626" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// The regex addresses values with the plus or minus sign in front (+10, -20, etc)</span></td>
      </tr>
      <tr>
        <td id="L1627" class="blob-num js-line-number" data-line-number="1627"></td>
        <td id="LC1627" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>fragments</span> <span class=pl-c1>=</span> <span class=pl-s1>offset</span><span class=pl-kos>.</span><span class=pl-en>split</span><span class=pl-kos>(</span><span class=pl-pds>/<span class=pl-kos>(</span><span class=pl-cce>\+</span><span class=pl-c1>|</span><span class=pl-cce>\-</span><span class=pl-kos>)</span>/</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>map</span><span class=pl-kos>(</span><span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>frag</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1628" class="blob-num js-line-number" data-line-number="1628"></td>
        <td id="LC1628" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>return</span> <span class=pl-s1>frag</span><span class=pl-kos>.</span><span class=pl-en>trim</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1629" class="blob-num js-line-number" data-line-number="1629"></td>
        <td id="LC1629" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1630" class="blob-num js-line-number" data-line-number="1630"></td>
        <td id="LC1630" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1631" class="blob-num js-line-number" data-line-number="1631"></td>
        <td id="LC1631" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// Detect if the offset string contains a pair of values or a single one</span></td>
      </tr>
      <tr>
        <td id="L1632" class="blob-num js-line-number" data-line-number="1632"></td>
        <td id="LC1632" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// they could be separated by comma or space</span></td>
      </tr>
      <tr>
        <td id="L1633" class="blob-num js-line-number" data-line-number="1633"></td>
        <td id="LC1633" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>divider</span> <span class=pl-c1>=</span> <span class=pl-s1>fragments</span><span class=pl-kos>.</span><span class=pl-en>indexOf</span><span class=pl-kos>(</span><span class=pl-en>find</span><span class=pl-kos>(</span><span class=pl-s1>fragments</span><span class=pl-kos>,</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>frag</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1634" class="blob-num js-line-number" data-line-number="1634"></td>
        <td id="LC1634" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>return</span> <span class=pl-s1>frag</span><span class=pl-kos>.</span><span class=pl-en>search</span><span class=pl-kos>(</span><span class=pl-pds>/,<span class=pl-c1>|</span><span class=pl-cce>\s</span>/</span><span class=pl-kos>)</span> !== <span class=pl-c1>-</span><span class=pl-c1>1</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1635" class="blob-num js-line-number" data-line-number="1635"></td>
        <td id="LC1635" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1636" class="blob-num js-line-number" data-line-number="1636"></td>
        <td id="LC1636" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1637" class="blob-num js-line-number" data-line-number="1637"></td>
        <td id="LC1637" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>fragments</span><span class=pl-kos>[</span><span class=pl-s1>divider</span><span class=pl-kos>]</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>fragments</span><span class=pl-kos>[</span><span class=pl-s1>divider</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-en>indexOf</span><span class=pl-kos>(</span><span class=pl-s>&#39;,&#39;</span><span class=pl-kos>)</span> <span class=pl-c1>===</span> <span class=pl-c1>-</span><span class=pl-c1>1</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1638" class="blob-num js-line-number" data-line-number="1638"></td>
        <td id="LC1638" class="blob-code blob-code-inner js-file-line">    <span class=pl-smi>console</span><span class=pl-kos>.</span><span class=pl-en>warn</span><span class=pl-kos>(</span><span class=pl-s>&#39;Offsets separated by white space(s) are deprecated, use a comma (,) instead.&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1639" class="blob-num js-line-number" data-line-number="1639"></td>
        <td id="LC1639" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1640" class="blob-num js-line-number" data-line-number="1640"></td>
        <td id="LC1640" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1641" class="blob-num js-line-number" data-line-number="1641"></td>
        <td id="LC1641" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// If divider is found, we divide the list of values and operands to divide</span></td>
      </tr>
      <tr>
        <td id="L1642" class="blob-num js-line-number" data-line-number="1642"></td>
        <td id="LC1642" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// them by ofset X and Y.</span></td>
      </tr>
      <tr>
        <td id="L1643" class="blob-num js-line-number" data-line-number="1643"></td>
        <td id="LC1643" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>splitRegex</span> <span class=pl-c1>=</span> <span class=pl-pds>/<span class=pl-cce>\s</span><span class=pl-c1>*</span>,<span class=pl-cce>\s</span><span class=pl-c1>*</span><span class=pl-c1>|</span><span class=pl-cce>\s</span><span class=pl-c1>+</span>/</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1644" class="blob-num js-line-number" data-line-number="1644"></td>
        <td id="LC1644" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>ops</span> <span class=pl-c1>=</span> <span class=pl-s1>divider</span> !== <span class=pl-c1>-</span><span class=pl-c1>1</span> ? <span class=pl-kos>[</span><span class=pl-s1>fragments</span><span class=pl-kos>.</span><span class=pl-en>slice</span><span class=pl-kos>(</span><span class=pl-c1>0</span><span class=pl-kos>,</span> <span class=pl-s1>divider</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>concat</span><span class=pl-kos>(</span><span class=pl-kos>[</span><span class=pl-s1>fragments</span><span class=pl-kos>[</span><span class=pl-s1>divider</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-en>split</span><span class=pl-kos>(</span><span class=pl-s1>splitRegex</span><span class=pl-kos>)</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>]</span><span class=pl-kos>)</span><span class=pl-kos>,</span> <span class=pl-kos>[</span><span class=pl-s1>fragments</span><span class=pl-kos>[</span><span class=pl-s1>divider</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-en>split</span><span class=pl-kos>(</span><span class=pl-s1>splitRegex</span><span class=pl-kos>)</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-en>concat</span><span class=pl-kos>(</span><span class=pl-s1>fragments</span><span class=pl-kos>.</span><span class=pl-en>slice</span><span class=pl-kos>(</span><span class=pl-s1>divider</span> <span class=pl-c1>+</span> <span class=pl-c1>1</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>]</span> : <span class=pl-kos>[</span><span class=pl-s1>fragments</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1645" class="blob-num js-line-number" data-line-number="1645"></td>
        <td id="LC1645" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1646" class="blob-num js-line-number" data-line-number="1646"></td>
        <td id="LC1646" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// Convert the values with units to absolute pixels to allow our computations</span></td>
      </tr>
      <tr>
        <td id="L1647" class="blob-num js-line-number" data-line-number="1647"></td>
        <td id="LC1647" class="blob-code blob-code-inner js-file-line">  <span class=pl-s1>ops</span> <span class=pl-c1>=</span> <span class=pl-s1>ops</span><span class=pl-kos>.</span><span class=pl-en>map</span><span class=pl-kos>(</span><span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>op</span><span class=pl-kos>,</span> <span class=pl-s1>index</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1648" class="blob-num js-line-number" data-line-number="1648"></td>
        <td id="LC1648" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>// Most of the units rely on the orientation of the popper</span></td>
      </tr>
      <tr>
        <td id="L1649" class="blob-num js-line-number" data-line-number="1649"></td>
        <td id="LC1649" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>var</span> <span class=pl-s1>measurement</span> <span class=pl-c1>=</span> <span class=pl-kos>(</span><span class=pl-s1>index</span> <span class=pl-c1>===</span> <span class=pl-c1>1</span> ? !<span class=pl-s1>useHeight</span> : <span class=pl-s1>useHeight</span><span class=pl-kos>)</span> ? <span class=pl-s>&#39;height&#39;</span> : <span class=pl-s>&#39;width&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1650" class="blob-num js-line-number" data-line-number="1650"></td>
        <td id="LC1650" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>var</span> <span class=pl-s1>mergeWithPrevious</span> <span class=pl-c1>=</span> <span class=pl-c1>false</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1651" class="blob-num js-line-number" data-line-number="1651"></td>
        <td id="LC1651" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>return</span> <span class=pl-s1>op</span></td>
      </tr>
      <tr>
        <td id="L1652" class="blob-num js-line-number" data-line-number="1652"></td>
        <td id="LC1652" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>// This aggregates any `+` or `-` sign that aren&#39;t considered operators</span></td>
      </tr>
      <tr>
        <td id="L1653" class="blob-num js-line-number" data-line-number="1653"></td>
        <td id="LC1653" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>// e.g.: 10 + +5 =&gt; [10, +, +5]</span></td>
      </tr>
      <tr>
        <td id="L1654" class="blob-num js-line-number" data-line-number="1654"></td>
        <td id="LC1654" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>.</span><span class=pl-en>reduce</span><span class=pl-kos>(</span><span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>a</span><span class=pl-kos>,</span> <span class=pl-s1>b</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1655" class="blob-num js-line-number" data-line-number="1655"></td>
        <td id="LC1655" class="blob-code blob-code-inner js-file-line">      <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>a</span><span class=pl-kos>[</span><span class=pl-s1>a</span><span class=pl-kos>.</span><span class=pl-c1>length</span> <span class=pl-c1>-</span> <span class=pl-c1>1</span><span class=pl-kos>]</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;&#39;</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-kos>[</span><span class=pl-s>&#39;+&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;-&#39;</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-en>indexOf</span><span class=pl-kos>(</span><span class=pl-s1>b</span><span class=pl-kos>)</span> !== <span class=pl-c1>-</span><span class=pl-c1>1</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1656" class="blob-num js-line-number" data-line-number="1656"></td>
        <td id="LC1656" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>a</span><span class=pl-kos>[</span><span class=pl-s1>a</span><span class=pl-kos>.</span><span class=pl-c1>length</span> <span class=pl-c1>-</span> <span class=pl-c1>1</span><span class=pl-kos>]</span> <span class=pl-c1>=</span> <span class=pl-s1>b</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1657" class="blob-num js-line-number" data-line-number="1657"></td>
        <td id="LC1657" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>mergeWithPrevious</span> <span class=pl-c1>=</span> <span class=pl-c1>true</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1658" class="blob-num js-line-number" data-line-number="1658"></td>
        <td id="LC1658" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>return</span> <span class=pl-s1>a</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1659" class="blob-num js-line-number" data-line-number="1659"></td>
        <td id="LC1659" class="blob-code blob-code-inner js-file-line">      <span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>mergeWithPrevious</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1660" class="blob-num js-line-number" data-line-number="1660"></td>
        <td id="LC1660" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>a</span><span class=pl-kos>[</span><span class=pl-s1>a</span><span class=pl-kos>.</span><span class=pl-c1>length</span> <span class=pl-c1>-</span> <span class=pl-c1>1</span><span class=pl-kos>]</span> <span class=pl-c1>+=</span> <span class=pl-s1>b</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1661" class="blob-num js-line-number" data-line-number="1661"></td>
        <td id="LC1661" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>mergeWithPrevious</span> <span class=pl-c1>=</span> <span class=pl-c1>false</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1662" class="blob-num js-line-number" data-line-number="1662"></td>
        <td id="LC1662" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>return</span> <span class=pl-s1>a</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1663" class="blob-num js-line-number" data-line-number="1663"></td>
        <td id="LC1663" class="blob-code blob-code-inner js-file-line">      <span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1664" class="blob-num js-line-number" data-line-number="1664"></td>
        <td id="LC1664" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>return</span> <span class=pl-s1>a</span><span class=pl-kos>.</span><span class=pl-en>concat</span><span class=pl-kos>(</span><span class=pl-s1>b</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1665" class="blob-num js-line-number" data-line-number="1665"></td>
        <td id="LC1665" class="blob-code blob-code-inner js-file-line">      <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1666" class="blob-num js-line-number" data-line-number="1666"></td>
        <td id="LC1666" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>,</span> <span class=pl-kos>[</span><span class=pl-kos>]</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1667" class="blob-num js-line-number" data-line-number="1667"></td>
        <td id="LC1667" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>// Here we convert the string values into number values (in px)</span></td>
      </tr>
      <tr>
        <td id="L1668" class="blob-num js-line-number" data-line-number="1668"></td>
        <td id="LC1668" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>.</span><span class=pl-en>map</span><span class=pl-kos>(</span><span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>str</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1669" class="blob-num js-line-number" data-line-number="1669"></td>
        <td id="LC1669" class="blob-code blob-code-inner js-file-line">      <span class=pl-k>return</span> <span class=pl-en>toValue</span><span class=pl-kos>(</span><span class=pl-s1>str</span><span class=pl-kos>,</span> <span class=pl-s1>measurement</span><span class=pl-kos>,</span> <span class=pl-s1>popperOffsets</span><span class=pl-kos>,</span> <span class=pl-s1>referenceOffsets</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1670" class="blob-num js-line-number" data-line-number="1670"></td>
        <td id="LC1670" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1671" class="blob-num js-line-number" data-line-number="1671"></td>
        <td id="LC1671" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1672" class="blob-num js-line-number" data-line-number="1672"></td>
        <td id="LC1672" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1673" class="blob-num js-line-number" data-line-number="1673"></td>
        <td id="LC1673" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// Loop trough the offsets arrays and execute the operations</span></td>
      </tr>
      <tr>
        <td id="L1674" class="blob-num js-line-number" data-line-number="1674"></td>
        <td id="LC1674" class="blob-code blob-code-inner js-file-line">  <span class=pl-s1>ops</span><span class=pl-kos>.</span><span class=pl-en>forEach</span><span class=pl-kos>(</span><span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>op</span><span class=pl-kos>,</span> <span class=pl-s1>index</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1675" class="blob-num js-line-number" data-line-number="1675"></td>
        <td id="LC1675" class="blob-code blob-code-inner js-file-line">    <span class=pl-s1>op</span><span class=pl-kos>.</span><span class=pl-en>forEach</span><span class=pl-kos>(</span><span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>frag</span><span class=pl-kos>,</span> <span class=pl-s1>index2</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1676" class="blob-num js-line-number" data-line-number="1676"></td>
        <td id="LC1676" class="blob-code blob-code-inner js-file-line">      <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-en>isNumeric</span><span class=pl-kos>(</span><span class=pl-s1>frag</span><span class=pl-kos>)</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1677" class="blob-num js-line-number" data-line-number="1677"></td>
        <td id="LC1677" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>offsets</span><span class=pl-kos>[</span><span class=pl-s1>index</span><span class=pl-kos>]</span> <span class=pl-c1>+=</span> <span class=pl-s1>frag</span> * <span class=pl-kos>(</span><span class=pl-s1>op</span><span class=pl-kos>[</span><span class=pl-s1>index2</span> <span class=pl-c1>-</span> <span class=pl-c1>1</span><span class=pl-kos>]</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;-&#39;</span> ? <span class=pl-c1>-</span><span class=pl-c1>1</span> : <span class=pl-c1>1</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1678" class="blob-num js-line-number" data-line-number="1678"></td>
        <td id="LC1678" class="blob-code blob-code-inner js-file-line">      <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1679" class="blob-num js-line-number" data-line-number="1679"></td>
        <td id="LC1679" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1680" class="blob-num js-line-number" data-line-number="1680"></td>
        <td id="LC1680" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1681" class="blob-num js-line-number" data-line-number="1681"></td>
        <td id="LC1681" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>return</span> <span class=pl-s1>offsets</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1682" class="blob-num js-line-number" data-line-number="1682"></td>
        <td id="LC1682" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1683" class="blob-num js-line-number" data-line-number="1683"></td>
        <td id="LC1683" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1684" class="blob-num js-line-number" data-line-number="1684"></td>
        <td id="LC1684" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L1685" class="blob-num js-line-number" data-line-number="1685"></td>
        <td id="LC1685" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@function</span></span></td>
      </tr>
      <tr>
        <td id="L1686" class="blob-num js-line-number" data-line-number="1686"></td>
        <td id="LC1686" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@memberof</span> Modifiers</span></td>
      </tr>
      <tr>
        <td id="L1687" class="blob-num js-line-number" data-line-number="1687"></td>
        <td id="LC1687" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@argument</span> {Object} data - The data object generated by update method</span></td>
      </tr>
      <tr>
        <td id="L1688" class="blob-num js-line-number" data-line-number="1688"></td>
        <td id="LC1688" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@argument</span> {Object} options - Modifiers configuration and options</span></td>
      </tr>
      <tr>
        <td id="L1689" class="blob-num js-line-number" data-line-number="1689"></td>
        <td id="LC1689" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@argument</span> {Number|String} options.offset=0</span></td>
      </tr>
      <tr>
        <td id="L1690" class="blob-num js-line-number" data-line-number="1690"></td>
        <td id="LC1690" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * The offset value as described in the modifier description</span></td>
      </tr>
      <tr>
        <td id="L1691" class="blob-num js-line-number" data-line-number="1691"></td>
        <td id="LC1691" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@returns</span> {<span class=pl-smi>Object</span>} The data object, properly modified</span></td>
      </tr>
      <tr>
        <td id="L1692" class="blob-num js-line-number" data-line-number="1692"></td>
        <td id="LC1692" class="blob-code blob-code-inner js-file-line"><span class=pl-c> */</span></td>
      </tr>
      <tr>
        <td id="L1693" class="blob-num js-line-number" data-line-number="1693"></td>
        <td id="LC1693" class="blob-code blob-code-inner js-file-line"><span class=pl-k>function</span> <span class=pl-en>offset</span><span class=pl-kos>(</span><span class=pl-s1>data</span><span class=pl-kos>,</span> <span class=pl-s1>_ref</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1694" class="blob-num js-line-number" data-line-number="1694"></td>
        <td id="LC1694" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>offset</span> <span class=pl-c1>=</span> <span class=pl-s1>_ref</span><span class=pl-kos>.</span><span class=pl-c1>offset</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1695" class="blob-num js-line-number" data-line-number="1695"></td>
        <td id="LC1695" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>placement</span> <span class=pl-c1>=</span> <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>placement</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1696" class="blob-num js-line-number" data-line-number="1696"></td>
        <td id="LC1696" class="blob-code blob-code-inner js-file-line">      <span class=pl-s1>_data$offsets</span> <span class=pl-c1>=</span> <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>offsets</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1697" class="blob-num js-line-number" data-line-number="1697"></td>
        <td id="LC1697" class="blob-code blob-code-inner js-file-line">      <span class=pl-s1>popper</span> <span class=pl-c1>=</span> <span class=pl-s1>_data$offsets</span><span class=pl-kos>.</span><span class=pl-c1>popper</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1698" class="blob-num js-line-number" data-line-number="1698"></td>
        <td id="LC1698" class="blob-code blob-code-inner js-file-line">      <span class=pl-s1>reference</span> <span class=pl-c1>=</span> <span class=pl-s1>_data$offsets</span><span class=pl-kos>.</span><span class=pl-c1>reference</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1699" class="blob-num js-line-number" data-line-number="1699"></td>
        <td id="LC1699" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1700" class="blob-num js-line-number" data-line-number="1700"></td>
        <td id="LC1700" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>basePlacement</span> <span class=pl-c1>=</span> <span class=pl-s1>placement</span><span class=pl-kos>.</span><span class=pl-en>split</span><span class=pl-kos>(</span><span class=pl-s>&#39;-&#39;</span><span class=pl-kos>)</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1701" class="blob-num js-line-number" data-line-number="1701"></td>
        <td id="LC1701" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1702" class="blob-num js-line-number" data-line-number="1702"></td>
        <td id="LC1702" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>offsets</span> <span class=pl-c1>=</span> <span class=pl-k>void</span> <span class=pl-c1>0</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1703" class="blob-num js-line-number" data-line-number="1703"></td>
        <td id="LC1703" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-en>isNumeric</span><span class=pl-kos>(</span><span class=pl-c1>+</span><span class=pl-s1>offset</span><span class=pl-kos>)</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1704" class="blob-num js-line-number" data-line-number="1704"></td>
        <td id="LC1704" class="blob-code blob-code-inner js-file-line">    <span class=pl-s1>offsets</span> <span class=pl-c1>=</span> <span class=pl-kos>[</span><span class=pl-c1>+</span><span class=pl-s1>offset</span><span class=pl-kos>,</span> <span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1705" class="blob-num js-line-number" data-line-number="1705"></td>
        <td id="LC1705" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1706" class="blob-num js-line-number" data-line-number="1706"></td>
        <td id="LC1706" class="blob-code blob-code-inner js-file-line">    <span class=pl-s1>offsets</span> <span class=pl-c1>=</span> <span class=pl-en>parseOffset</span><span class=pl-kos>(</span><span class=pl-s1>offset</span><span class=pl-kos>,</span> <span class=pl-s1>popper</span><span class=pl-kos>,</span> <span class=pl-s1>reference</span><span class=pl-kos>,</span> <span class=pl-s1>basePlacement</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1707" class="blob-num js-line-number" data-line-number="1707"></td>
        <td id="LC1707" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1708" class="blob-num js-line-number" data-line-number="1708"></td>
        <td id="LC1708" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1709" class="blob-num js-line-number" data-line-number="1709"></td>
        <td id="LC1709" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>basePlacement</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;left&#39;</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1710" class="blob-num js-line-number" data-line-number="1710"></td>
        <td id="LC1710" class="blob-code blob-code-inner js-file-line">    <span class=pl-s1>popper</span><span class=pl-kos>.</span><span class=pl-c1>top</span> <span class=pl-c1>+=</span> <span class=pl-s1>offsets</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1711" class="blob-num js-line-number" data-line-number="1711"></td>
        <td id="LC1711" class="blob-code blob-code-inner js-file-line">    <span class=pl-s1>popper</span><span class=pl-kos>.</span><span class=pl-c1>left</span> <span class=pl-c1>-=</span> <span class=pl-s1>offsets</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1712" class="blob-num js-line-number" data-line-number="1712"></td>
        <td id="LC1712" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>basePlacement</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;right&#39;</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1713" class="blob-num js-line-number" data-line-number="1713"></td>
        <td id="LC1713" class="blob-code blob-code-inner js-file-line">    <span class=pl-s1>popper</span><span class=pl-kos>.</span><span class=pl-c1>top</span> <span class=pl-c1>+=</span> <span class=pl-s1>offsets</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1714" class="blob-num js-line-number" data-line-number="1714"></td>
        <td id="LC1714" class="blob-code blob-code-inner js-file-line">    <span class=pl-s1>popper</span><span class=pl-kos>.</span><span class=pl-c1>left</span> <span class=pl-c1>+=</span> <span class=pl-s1>offsets</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1715" class="blob-num js-line-number" data-line-number="1715"></td>
        <td id="LC1715" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>basePlacement</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;top&#39;</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1716" class="blob-num js-line-number" data-line-number="1716"></td>
        <td id="LC1716" class="blob-code blob-code-inner js-file-line">    <span class=pl-s1>popper</span><span class=pl-kos>.</span><span class=pl-c1>left</span> <span class=pl-c1>+=</span> <span class=pl-s1>offsets</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1717" class="blob-num js-line-number" data-line-number="1717"></td>
        <td id="LC1717" class="blob-code blob-code-inner js-file-line">    <span class=pl-s1>popper</span><span class=pl-kos>.</span><span class=pl-c1>top</span> <span class=pl-c1>-=</span> <span class=pl-s1>offsets</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1718" class="blob-num js-line-number" data-line-number="1718"></td>
        <td id="LC1718" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>basePlacement</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;bottom&#39;</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1719" class="blob-num js-line-number" data-line-number="1719"></td>
        <td id="LC1719" class="blob-code blob-code-inner js-file-line">    <span class=pl-s1>popper</span><span class=pl-kos>.</span><span class=pl-c1>left</span> <span class=pl-c1>+=</span> <span class=pl-s1>offsets</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1720" class="blob-num js-line-number" data-line-number="1720"></td>
        <td id="LC1720" class="blob-code blob-code-inner js-file-line">    <span class=pl-s1>popper</span><span class=pl-kos>.</span><span class=pl-c1>top</span> <span class=pl-c1>+=</span> <span class=pl-s1>offsets</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1721" class="blob-num js-line-number" data-line-number="1721"></td>
        <td id="LC1721" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1722" class="blob-num js-line-number" data-line-number="1722"></td>
        <td id="LC1722" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1723" class="blob-num js-line-number" data-line-number="1723"></td>
        <td id="LC1723" class="blob-code blob-code-inner js-file-line">  <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>popper</span> <span class=pl-c1>=</span> <span class=pl-s1>popper</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1724" class="blob-num js-line-number" data-line-number="1724"></td>
        <td id="LC1724" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>return</span> <span class=pl-s1>data</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1725" class="blob-num js-line-number" data-line-number="1725"></td>
        <td id="LC1725" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1726" class="blob-num js-line-number" data-line-number="1726"></td>
        <td id="LC1726" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1727" class="blob-num js-line-number" data-line-number="1727"></td>
        <td id="LC1727" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L1728" class="blob-num js-line-number" data-line-number="1728"></td>
        <td id="LC1728" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@function</span></span></td>
      </tr>
      <tr>
        <td id="L1729" class="blob-num js-line-number" data-line-number="1729"></td>
        <td id="LC1729" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@memberof</span> Modifiers</span></td>
      </tr>
      <tr>
        <td id="L1730" class="blob-num js-line-number" data-line-number="1730"></td>
        <td id="LC1730" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@argument</span> {Object} data - The data object generated by `update` method</span></td>
      </tr>
      <tr>
        <td id="L1731" class="blob-num js-line-number" data-line-number="1731"></td>
        <td id="LC1731" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@argument</span> {Object} options - Modifiers configuration and options</span></td>
      </tr>
      <tr>
        <td id="L1732" class="blob-num js-line-number" data-line-number="1732"></td>
        <td id="LC1732" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@returns</span> {<span class=pl-smi>Object</span>} The data object, properly modified</span></td>
      </tr>
      <tr>
        <td id="L1733" class="blob-num js-line-number" data-line-number="1733"></td>
        <td id="LC1733" class="blob-code blob-code-inner js-file-line"><span class=pl-c> */</span></td>
      </tr>
      <tr>
        <td id="L1734" class="blob-num js-line-number" data-line-number="1734"></td>
        <td id="LC1734" class="blob-code blob-code-inner js-file-line"><span class=pl-k>function</span> <span class=pl-en>preventOverflow</span><span class=pl-kos>(</span><span class=pl-s1>data</span><span class=pl-kos>,</span> <span class=pl-s1>options</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1735" class="blob-num js-line-number" data-line-number="1735"></td>
        <td id="LC1735" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>boundariesElement</span> <span class=pl-c1>=</span> <span class=pl-s1>options</span><span class=pl-kos>.</span><span class=pl-c1>boundariesElement</span> <span class=pl-c1>||</span> <span class=pl-en>getOffsetParent</span><span class=pl-kos>(</span><span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>instance</span><span class=pl-kos>.</span><span class=pl-c1>popper</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1736" class="blob-num js-line-number" data-line-number="1736"></td>
        <td id="LC1736" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1737" class="blob-num js-line-number" data-line-number="1737"></td>
        <td id="LC1737" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// If offsetParent is the reference element, we really want to</span></td>
      </tr>
      <tr>
        <td id="L1738" class="blob-num js-line-number" data-line-number="1738"></td>
        <td id="LC1738" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// go one step up and use the next offsetParent as reference to</span></td>
      </tr>
      <tr>
        <td id="L1739" class="blob-num js-line-number" data-line-number="1739"></td>
        <td id="LC1739" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// avoid to make this modifier completely useless and look like broken</span></td>
      </tr>
      <tr>
        <td id="L1740" class="blob-num js-line-number" data-line-number="1740"></td>
        <td id="LC1740" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>instance</span><span class=pl-kos>.</span><span class=pl-c1>reference</span> <span class=pl-c1>===</span> <span class=pl-s1>boundariesElement</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1741" class="blob-num js-line-number" data-line-number="1741"></td>
        <td id="LC1741" class="blob-code blob-code-inner js-file-line">    <span class=pl-s1>boundariesElement</span> <span class=pl-c1>=</span> <span class=pl-en>getOffsetParent</span><span class=pl-kos>(</span><span class=pl-s1>boundariesElement</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1742" class="blob-num js-line-number" data-line-number="1742"></td>
        <td id="LC1742" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1743" class="blob-num js-line-number" data-line-number="1743"></td>
        <td id="LC1743" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1744" class="blob-num js-line-number" data-line-number="1744"></td>
        <td id="LC1744" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>boundaries</span> <span class=pl-c1>=</span> <span class=pl-en>getBoundaries</span><span class=pl-kos>(</span><span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>instance</span><span class=pl-kos>.</span><span class=pl-c1>popper</span><span class=pl-kos>,</span> <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>instance</span><span class=pl-kos>.</span><span class=pl-c1>reference</span><span class=pl-kos>,</span> <span class=pl-s1>options</span><span class=pl-kos>.</span><span class=pl-c1>padding</span><span class=pl-kos>,</span> <span class=pl-s1>boundariesElement</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1745" class="blob-num js-line-number" data-line-number="1745"></td>
        <td id="LC1745" class="blob-code blob-code-inner js-file-line">  <span class=pl-s1>options</span><span class=pl-kos>.</span><span class=pl-c1>boundaries</span> <span class=pl-c1>=</span> <span class=pl-s1>boundaries</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1746" class="blob-num js-line-number" data-line-number="1746"></td>
        <td id="LC1746" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1747" class="blob-num js-line-number" data-line-number="1747"></td>
        <td id="LC1747" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>order</span> <span class=pl-c1>=</span> <span class=pl-s1>options</span><span class=pl-kos>.</span><span class=pl-c1>priority</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1748" class="blob-num js-line-number" data-line-number="1748"></td>
        <td id="LC1748" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>popper</span> <span class=pl-c1>=</span> <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>offsets</span><span class=pl-kos>.</span><span class=pl-c1>popper</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1749" class="blob-num js-line-number" data-line-number="1749"></td>
        <td id="LC1749" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1750" class="blob-num js-line-number" data-line-number="1750"></td>
        <td id="LC1750" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>check</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1751" class="blob-num js-line-number" data-line-number="1751"></td>
        <td id="LC1751" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>primary</span>: <span class=pl-k>function</span> <span class=pl-en>primary</span><span class=pl-kos>(</span><span class=pl-s1>placement</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1752" class="blob-num js-line-number" data-line-number="1752"></td>
        <td id="LC1752" class="blob-code blob-code-inner js-file-line">      <span class=pl-k>var</span> <span class=pl-s1>value</span> <span class=pl-c1>=</span> <span class=pl-s1>popper</span><span class=pl-kos>[</span><span class=pl-s1>placement</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1753" class="blob-num js-line-number" data-line-number="1753"></td>
        <td id="LC1753" class="blob-code blob-code-inner js-file-line">      <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>popper</span><span class=pl-kos>[</span><span class=pl-s1>placement</span><span class=pl-kos>]</span> <span class=pl-c1>&lt;</span> <span class=pl-s1>boundaries</span><span class=pl-kos>[</span><span class=pl-s1>placement</span><span class=pl-kos>]</span> <span class=pl-c1>&amp;&amp;</span> !<span class=pl-s1>options</span><span class=pl-kos>.</span><span class=pl-c1>escapeWithReference</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1754" class="blob-num js-line-number" data-line-number="1754"></td>
        <td id="LC1754" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>value</span> <span class=pl-c1>=</span> <span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>max</span><span class=pl-kos>(</span><span class=pl-s1>popper</span><span class=pl-kos>[</span><span class=pl-s1>placement</span><span class=pl-kos>]</span><span class=pl-kos>,</span> <span class=pl-s1>boundaries</span><span class=pl-kos>[</span><span class=pl-s1>placement</span><span class=pl-kos>]</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1755" class="blob-num js-line-number" data-line-number="1755"></td>
        <td id="LC1755" class="blob-code blob-code-inner js-file-line">      <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1756" class="blob-num js-line-number" data-line-number="1756"></td>
        <td id="LC1756" class="blob-code blob-code-inner js-file-line">      <span class=pl-k>return</span> <span class=pl-en>defineProperty</span><span class=pl-kos>(</span><span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>,</span> <span class=pl-s1>placement</span><span class=pl-kos>,</span> <span class=pl-s1>value</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1757" class="blob-num js-line-number" data-line-number="1757"></td>
        <td id="LC1757" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1758" class="blob-num js-line-number" data-line-number="1758"></td>
        <td id="LC1758" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>secondary</span>: <span class=pl-k>function</span> <span class=pl-en>secondary</span><span class=pl-kos>(</span><span class=pl-s1>placement</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1759" class="blob-num js-line-number" data-line-number="1759"></td>
        <td id="LC1759" class="blob-code blob-code-inner js-file-line">      <span class=pl-k>var</span> <span class=pl-s1>mainSide</span> <span class=pl-c1>=</span> <span class=pl-s1>placement</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;right&#39;</span> ? <span class=pl-s>&#39;left&#39;</span> : <span class=pl-s>&#39;top&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1760" class="blob-num js-line-number" data-line-number="1760"></td>
        <td id="LC1760" class="blob-code blob-code-inner js-file-line">      <span class=pl-k>var</span> <span class=pl-s1>value</span> <span class=pl-c1>=</span> <span class=pl-s1>popper</span><span class=pl-kos>[</span><span class=pl-s1>mainSide</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1761" class="blob-num js-line-number" data-line-number="1761"></td>
        <td id="LC1761" class="blob-code blob-code-inner js-file-line">      <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>popper</span><span class=pl-kos>[</span><span class=pl-s1>placement</span><span class=pl-kos>]</span> <span class=pl-c1>&gt;</span> <span class=pl-s1>boundaries</span><span class=pl-kos>[</span><span class=pl-s1>placement</span><span class=pl-kos>]</span> <span class=pl-c1>&amp;&amp;</span> !<span class=pl-s1>options</span><span class=pl-kos>.</span><span class=pl-c1>escapeWithReference</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1762" class="blob-num js-line-number" data-line-number="1762"></td>
        <td id="LC1762" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>value</span> <span class=pl-c1>=</span> <span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>min</span><span class=pl-kos>(</span><span class=pl-s1>popper</span><span class=pl-kos>[</span><span class=pl-s1>mainSide</span><span class=pl-kos>]</span><span class=pl-kos>,</span> <span class=pl-s1>boundaries</span><span class=pl-kos>[</span><span class=pl-s1>placement</span><span class=pl-kos>]</span> <span class=pl-c1>-</span> <span class=pl-kos>(</span><span class=pl-s1>placement</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;right&#39;</span> ? <span class=pl-s1>popper</span><span class=pl-kos>.</span><span class=pl-c1>width</span> : <span class=pl-s1>popper</span><span class=pl-kos>.</span><span class=pl-c1>height</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1763" class="blob-num js-line-number" data-line-number="1763"></td>
        <td id="LC1763" class="blob-code blob-code-inner js-file-line">      <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1764" class="blob-num js-line-number" data-line-number="1764"></td>
        <td id="LC1764" class="blob-code blob-code-inner js-file-line">      <span class=pl-k>return</span> <span class=pl-en>defineProperty</span><span class=pl-kos>(</span><span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>,</span> <span class=pl-s1>mainSide</span><span class=pl-kos>,</span> <span class=pl-s1>value</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1765" class="blob-num js-line-number" data-line-number="1765"></td>
        <td id="LC1765" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1766" class="blob-num js-line-number" data-line-number="1766"></td>
        <td id="LC1766" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1767" class="blob-num js-line-number" data-line-number="1767"></td>
        <td id="LC1767" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1768" class="blob-num js-line-number" data-line-number="1768"></td>
        <td id="LC1768" class="blob-code blob-code-inner js-file-line">  <span class=pl-s1>order</span><span class=pl-kos>.</span><span class=pl-en>forEach</span><span class=pl-kos>(</span><span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>placement</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1769" class="blob-num js-line-number" data-line-number="1769"></td>
        <td id="LC1769" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>var</span> <span class=pl-s1>side</span> <span class=pl-c1>=</span> <span class=pl-kos>[</span><span class=pl-s>&#39;left&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;top&#39;</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-en>indexOf</span><span class=pl-kos>(</span><span class=pl-s1>placement</span><span class=pl-kos>)</span> !== <span class=pl-c1>-</span><span class=pl-c1>1</span> ? <span class=pl-s>&#39;primary&#39;</span> : <span class=pl-s>&#39;secondary&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1770" class="blob-num js-line-number" data-line-number="1770"></td>
        <td id="LC1770" class="blob-code blob-code-inner js-file-line">    <span class=pl-s1>popper</span> <span class=pl-c1>=</span> <span class=pl-s1>_extends</span><span class=pl-kos>(</span><span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>,</span> <span class=pl-s1>popper</span><span class=pl-kos>,</span> <span class=pl-s1>check</span><span class=pl-kos>[</span><span class=pl-s1>side</span><span class=pl-kos>]</span><span class=pl-kos>(</span><span class=pl-s1>placement</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1771" class="blob-num js-line-number" data-line-number="1771"></td>
        <td id="LC1771" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1772" class="blob-num js-line-number" data-line-number="1772"></td>
        <td id="LC1772" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1773" class="blob-num js-line-number" data-line-number="1773"></td>
        <td id="LC1773" class="blob-code blob-code-inner js-file-line">  <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>offsets</span><span class=pl-kos>.</span><span class=pl-c1>popper</span> <span class=pl-c1>=</span> <span class=pl-s1>popper</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1774" class="blob-num js-line-number" data-line-number="1774"></td>
        <td id="LC1774" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1775" class="blob-num js-line-number" data-line-number="1775"></td>
        <td id="LC1775" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>return</span> <span class=pl-s1>data</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1776" class="blob-num js-line-number" data-line-number="1776"></td>
        <td id="LC1776" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1777" class="blob-num js-line-number" data-line-number="1777"></td>
        <td id="LC1777" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1778" class="blob-num js-line-number" data-line-number="1778"></td>
        <td id="LC1778" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L1779" class="blob-num js-line-number" data-line-number="1779"></td>
        <td id="LC1779" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@function</span></span></td>
      </tr>
      <tr>
        <td id="L1780" class="blob-num js-line-number" data-line-number="1780"></td>
        <td id="LC1780" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@memberof</span> Modifiers</span></td>
      </tr>
      <tr>
        <td id="L1781" class="blob-num js-line-number" data-line-number="1781"></td>
        <td id="LC1781" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@argument</span> {Object} data - The data object generated by `update` method</span></td>
      </tr>
      <tr>
        <td id="L1782" class="blob-num js-line-number" data-line-number="1782"></td>
        <td id="LC1782" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@argument</span> {Object} options - Modifiers configuration and options</span></td>
      </tr>
      <tr>
        <td id="L1783" class="blob-num js-line-number" data-line-number="1783"></td>
        <td id="LC1783" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@returns</span> {<span class=pl-smi>Object</span>} The data object, properly modified</span></td>
      </tr>
      <tr>
        <td id="L1784" class="blob-num js-line-number" data-line-number="1784"></td>
        <td id="LC1784" class="blob-code blob-code-inner js-file-line"><span class=pl-c> */</span></td>
      </tr>
      <tr>
        <td id="L1785" class="blob-num js-line-number" data-line-number="1785"></td>
        <td id="LC1785" class="blob-code blob-code-inner js-file-line"><span class=pl-k>function</span> <span class=pl-en>shift</span><span class=pl-kos>(</span><span class=pl-s1>data</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1786" class="blob-num js-line-number" data-line-number="1786"></td>
        <td id="LC1786" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>placement</span> <span class=pl-c1>=</span> <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>placement</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1787" class="blob-num js-line-number" data-line-number="1787"></td>
        <td id="LC1787" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>basePlacement</span> <span class=pl-c1>=</span> <span class=pl-s1>placement</span><span class=pl-kos>.</span><span class=pl-en>split</span><span class=pl-kos>(</span><span class=pl-s>&#39;-&#39;</span><span class=pl-kos>)</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1788" class="blob-num js-line-number" data-line-number="1788"></td>
        <td id="LC1788" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>shiftvariation</span> <span class=pl-c1>=</span> <span class=pl-s1>placement</span><span class=pl-kos>.</span><span class=pl-en>split</span><span class=pl-kos>(</span><span class=pl-s>&#39;-&#39;</span><span class=pl-kos>)</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1789" class="blob-num js-line-number" data-line-number="1789"></td>
        <td id="LC1789" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1790" class="blob-num js-line-number" data-line-number="1790"></td>
        <td id="LC1790" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// if shift shiftvariation is specified, run the modifier</span></td>
      </tr>
      <tr>
        <td id="L1791" class="blob-num js-line-number" data-line-number="1791"></td>
        <td id="LC1791" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>shiftvariation</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1792" class="blob-num js-line-number" data-line-number="1792"></td>
        <td id="LC1792" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>var</span> <span class=pl-s1>_data$offsets</span> <span class=pl-c1>=</span> <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>offsets</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1793" class="blob-num js-line-number" data-line-number="1793"></td>
        <td id="LC1793" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>reference</span> <span class=pl-c1>=</span> <span class=pl-s1>_data$offsets</span><span class=pl-kos>.</span><span class=pl-c1>reference</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1794" class="blob-num js-line-number" data-line-number="1794"></td>
        <td id="LC1794" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>popper</span> <span class=pl-c1>=</span> <span class=pl-s1>_data$offsets</span><span class=pl-kos>.</span><span class=pl-c1>popper</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1795" class="blob-num js-line-number" data-line-number="1795"></td>
        <td id="LC1795" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1796" class="blob-num js-line-number" data-line-number="1796"></td>
        <td id="LC1796" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>var</span> <span class=pl-s1>isVertical</span> <span class=pl-c1>=</span> <span class=pl-kos>[</span><span class=pl-s>&#39;bottom&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;top&#39;</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-en>indexOf</span><span class=pl-kos>(</span><span class=pl-s1>basePlacement</span><span class=pl-kos>)</span> !== <span class=pl-c1>-</span><span class=pl-c1>1</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1797" class="blob-num js-line-number" data-line-number="1797"></td>
        <td id="LC1797" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>var</span> <span class=pl-s1>side</span> <span class=pl-c1>=</span> <span class=pl-s1>isVertical</span> ? <span class=pl-s>&#39;left&#39;</span> : <span class=pl-s>&#39;top&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1798" class="blob-num js-line-number" data-line-number="1798"></td>
        <td id="LC1798" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>var</span> <span class=pl-s1>measurement</span> <span class=pl-c1>=</span> <span class=pl-s1>isVertical</span> ? <span class=pl-s>&#39;width&#39;</span> : <span class=pl-s>&#39;height&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1799" class="blob-num js-line-number" data-line-number="1799"></td>
        <td id="LC1799" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1800" class="blob-num js-line-number" data-line-number="1800"></td>
        <td id="LC1800" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>var</span> <span class=pl-s1>shiftOffsets</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1801" class="blob-num js-line-number" data-line-number="1801"></td>
        <td id="LC1801" class="blob-code blob-code-inner js-file-line">      <span class=pl-c1>start</span>: <span class=pl-en>defineProperty</span><span class=pl-kos>(</span><span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>,</span> <span class=pl-s1>side</span><span class=pl-kos>,</span> <span class=pl-s1>reference</span><span class=pl-kos>[</span><span class=pl-s1>side</span><span class=pl-kos>]</span><span class=pl-kos>)</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1802" class="blob-num js-line-number" data-line-number="1802"></td>
        <td id="LC1802" class="blob-code blob-code-inner js-file-line">      <span class=pl-c1>end</span>: <span class=pl-en>defineProperty</span><span class=pl-kos>(</span><span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>,</span> <span class=pl-s1>side</span><span class=pl-kos>,</span> <span class=pl-s1>reference</span><span class=pl-kos>[</span><span class=pl-s1>side</span><span class=pl-kos>]</span> <span class=pl-c1>+</span> <span class=pl-s1>reference</span><span class=pl-kos>[</span><span class=pl-s1>measurement</span><span class=pl-kos>]</span> <span class=pl-c1>-</span> <span class=pl-s1>popper</span><span class=pl-kos>[</span><span class=pl-s1>measurement</span><span class=pl-kos>]</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1803" class="blob-num js-line-number" data-line-number="1803"></td>
        <td id="LC1803" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1804" class="blob-num js-line-number" data-line-number="1804"></td>
        <td id="LC1804" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1805" class="blob-num js-line-number" data-line-number="1805"></td>
        <td id="LC1805" class="blob-code blob-code-inner js-file-line">    <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>offsets</span><span class=pl-kos>.</span><span class=pl-c1>popper</span> <span class=pl-c1>=</span> <span class=pl-s1>_extends</span><span class=pl-kos>(</span><span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>,</span> <span class=pl-s1>popper</span><span class=pl-kos>,</span> <span class=pl-s1>shiftOffsets</span><span class=pl-kos>[</span><span class=pl-s1>shiftvariation</span><span class=pl-kos>]</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1806" class="blob-num js-line-number" data-line-number="1806"></td>
        <td id="LC1806" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1807" class="blob-num js-line-number" data-line-number="1807"></td>
        <td id="LC1807" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1808" class="blob-num js-line-number" data-line-number="1808"></td>
        <td id="LC1808" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>return</span> <span class=pl-s1>data</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1809" class="blob-num js-line-number" data-line-number="1809"></td>
        <td id="LC1809" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1810" class="blob-num js-line-number" data-line-number="1810"></td>
        <td id="LC1810" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1811" class="blob-num js-line-number" data-line-number="1811"></td>
        <td id="LC1811" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L1812" class="blob-num js-line-number" data-line-number="1812"></td>
        <td id="LC1812" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@function</span></span></td>
      </tr>
      <tr>
        <td id="L1813" class="blob-num js-line-number" data-line-number="1813"></td>
        <td id="LC1813" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@memberof</span> Modifiers</span></td>
      </tr>
      <tr>
        <td id="L1814" class="blob-num js-line-number" data-line-number="1814"></td>
        <td id="LC1814" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@argument</span> {Object} data - The data object generated by update method</span></td>
      </tr>
      <tr>
        <td id="L1815" class="blob-num js-line-number" data-line-number="1815"></td>
        <td id="LC1815" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@argument</span> {Object} options - Modifiers configuration and options</span></td>
      </tr>
      <tr>
        <td id="L1816" class="blob-num js-line-number" data-line-number="1816"></td>
        <td id="LC1816" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@returns</span> {<span class=pl-smi>Object</span>} The data object, properly modified</span></td>
      </tr>
      <tr>
        <td id="L1817" class="blob-num js-line-number" data-line-number="1817"></td>
        <td id="LC1817" class="blob-code blob-code-inner js-file-line"><span class=pl-c> */</span></td>
      </tr>
      <tr>
        <td id="L1818" class="blob-num js-line-number" data-line-number="1818"></td>
        <td id="LC1818" class="blob-code blob-code-inner js-file-line"><span class=pl-k>function</span> <span class=pl-en>hide</span><span class=pl-kos>(</span><span class=pl-s1>data</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1819" class="blob-num js-line-number" data-line-number="1819"></td>
        <td id="LC1819" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-en>isModifierRequired</span><span class=pl-kos>(</span><span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>instance</span><span class=pl-kos>.</span><span class=pl-c1>modifiers</span><span class=pl-kos>,</span> <span class=pl-s>&#39;hide&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;preventOverflow&#39;</span><span class=pl-kos>)</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1820" class="blob-num js-line-number" data-line-number="1820"></td>
        <td id="LC1820" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>return</span> <span class=pl-s1>data</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1821" class="blob-num js-line-number" data-line-number="1821"></td>
        <td id="LC1821" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1822" class="blob-num js-line-number" data-line-number="1822"></td>
        <td id="LC1822" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1823" class="blob-num js-line-number" data-line-number="1823"></td>
        <td id="LC1823" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>refRect</span> <span class=pl-c1>=</span> <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>offsets</span><span class=pl-kos>.</span><span class=pl-c1>reference</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1824" class="blob-num js-line-number" data-line-number="1824"></td>
        <td id="LC1824" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>bound</span> <span class=pl-c1>=</span> <span class=pl-en>find</span><span class=pl-kos>(</span><span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>instance</span><span class=pl-kos>.</span><span class=pl-c1>modifiers</span><span class=pl-kos>,</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>modifier</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1825" class="blob-num js-line-number" data-line-number="1825"></td>
        <td id="LC1825" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>return</span> <span class=pl-s1>modifier</span><span class=pl-kos>.</span><span class=pl-c1>name</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;preventOverflow&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1826" class="blob-num js-line-number" data-line-number="1826"></td>
        <td id="LC1826" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>boundaries</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1827" class="blob-num js-line-number" data-line-number="1827"></td>
        <td id="LC1827" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1828" class="blob-num js-line-number" data-line-number="1828"></td>
        <td id="LC1828" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>refRect</span><span class=pl-kos>.</span><span class=pl-c1>bottom</span> <span class=pl-c1>&lt;</span> <span class=pl-s1>bound</span><span class=pl-kos>.</span><span class=pl-c1>top</span> <span class=pl-c1>||</span> <span class=pl-s1>refRect</span><span class=pl-kos>.</span><span class=pl-c1>left</span> <span class=pl-c1>&gt;</span> <span class=pl-s1>bound</span><span class=pl-kos>.</span><span class=pl-c1>right</span> <span class=pl-c1>||</span> <span class=pl-s1>refRect</span><span class=pl-kos>.</span><span class=pl-c1>top</span> <span class=pl-c1>&gt;</span> <span class=pl-s1>bound</span><span class=pl-kos>.</span><span class=pl-c1>bottom</span> <span class=pl-c1>||</span> <span class=pl-s1>refRect</span><span class=pl-kos>.</span><span class=pl-c1>right</span> <span class=pl-c1>&lt;</span> <span class=pl-s1>bound</span><span class=pl-kos>.</span><span class=pl-c1>left</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1829" class="blob-num js-line-number" data-line-number="1829"></td>
        <td id="LC1829" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>// Avoid unnecessary DOM access if visibility hasn&#39;t changed</span></td>
      </tr>
      <tr>
        <td id="L1830" class="blob-num js-line-number" data-line-number="1830"></td>
        <td id="LC1830" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>hide</span> <span class=pl-c1>===</span> <span class=pl-c1>true</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1831" class="blob-num js-line-number" data-line-number="1831"></td>
        <td id="LC1831" class="blob-code blob-code-inner js-file-line">      <span class=pl-k>return</span> <span class=pl-s1>data</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1832" class="blob-num js-line-number" data-line-number="1832"></td>
        <td id="LC1832" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1833" class="blob-num js-line-number" data-line-number="1833"></td>
        <td id="LC1833" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1834" class="blob-num js-line-number" data-line-number="1834"></td>
        <td id="LC1834" class="blob-code blob-code-inner js-file-line">    <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>hide</span> <span class=pl-c1>=</span> <span class=pl-c1>true</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1835" class="blob-num js-line-number" data-line-number="1835"></td>
        <td id="LC1835" class="blob-code blob-code-inner js-file-line">    <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>attributes</span><span class=pl-kos>[</span><span class=pl-s>&#39;x-out-of-boundaries&#39;</span><span class=pl-kos>]</span> <span class=pl-c1>=</span> <span class=pl-s>&#39;&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1836" class="blob-num js-line-number" data-line-number="1836"></td>
        <td id="LC1836" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1837" class="blob-num js-line-number" data-line-number="1837"></td>
        <td id="LC1837" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>// Avoid unnecessary DOM access if visibility hasn&#39;t changed</span></td>
      </tr>
      <tr>
        <td id="L1838" class="blob-num js-line-number" data-line-number="1838"></td>
        <td id="LC1838" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>hide</span> <span class=pl-c1>===</span> <span class=pl-c1>false</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1839" class="blob-num js-line-number" data-line-number="1839"></td>
        <td id="LC1839" class="blob-code blob-code-inner js-file-line">      <span class=pl-k>return</span> <span class=pl-s1>data</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1840" class="blob-num js-line-number" data-line-number="1840"></td>
        <td id="LC1840" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1841" class="blob-num js-line-number" data-line-number="1841"></td>
        <td id="LC1841" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1842" class="blob-num js-line-number" data-line-number="1842"></td>
        <td id="LC1842" class="blob-code blob-code-inner js-file-line">    <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>hide</span> <span class=pl-c1>=</span> <span class=pl-c1>false</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1843" class="blob-num js-line-number" data-line-number="1843"></td>
        <td id="LC1843" class="blob-code blob-code-inner js-file-line">    <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>attributes</span><span class=pl-kos>[</span><span class=pl-s>&#39;x-out-of-boundaries&#39;</span><span class=pl-kos>]</span> <span class=pl-c1>=</span> <span class=pl-c1>false</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1844" class="blob-num js-line-number" data-line-number="1844"></td>
        <td id="LC1844" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1845" class="blob-num js-line-number" data-line-number="1845"></td>
        <td id="LC1845" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1846" class="blob-num js-line-number" data-line-number="1846"></td>
        <td id="LC1846" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>return</span> <span class=pl-s1>data</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1847" class="blob-num js-line-number" data-line-number="1847"></td>
        <td id="LC1847" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1848" class="blob-num js-line-number" data-line-number="1848"></td>
        <td id="LC1848" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1849" class="blob-num js-line-number" data-line-number="1849"></td>
        <td id="LC1849" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L1850" class="blob-num js-line-number" data-line-number="1850"></td>
        <td id="LC1850" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@function</span></span></td>
      </tr>
      <tr>
        <td id="L1851" class="blob-num js-line-number" data-line-number="1851"></td>
        <td id="LC1851" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@memberof</span> Modifiers</span></td>
      </tr>
      <tr>
        <td id="L1852" class="blob-num js-line-number" data-line-number="1852"></td>
        <td id="LC1852" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@argument</span> {Object} data - The data object generated by `update` method</span></td>
      </tr>
      <tr>
        <td id="L1853" class="blob-num js-line-number" data-line-number="1853"></td>
        <td id="LC1853" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@argument</span> {Object} options - Modifiers configuration and options</span></td>
      </tr>
      <tr>
        <td id="L1854" class="blob-num js-line-number" data-line-number="1854"></td>
        <td id="LC1854" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@returns</span> {<span class=pl-smi>Object</span>} The data object, properly modified</span></td>
      </tr>
      <tr>
        <td id="L1855" class="blob-num js-line-number" data-line-number="1855"></td>
        <td id="LC1855" class="blob-code blob-code-inner js-file-line"><span class=pl-c> */</span></td>
      </tr>
      <tr>
        <td id="L1856" class="blob-num js-line-number" data-line-number="1856"></td>
        <td id="LC1856" class="blob-code blob-code-inner js-file-line"><span class=pl-k>function</span> <span class=pl-en>inner</span><span class=pl-kos>(</span><span class=pl-s1>data</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1857" class="blob-num js-line-number" data-line-number="1857"></td>
        <td id="LC1857" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>placement</span> <span class=pl-c1>=</span> <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>placement</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1858" class="blob-num js-line-number" data-line-number="1858"></td>
        <td id="LC1858" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>basePlacement</span> <span class=pl-c1>=</span> <span class=pl-s1>placement</span><span class=pl-kos>.</span><span class=pl-en>split</span><span class=pl-kos>(</span><span class=pl-s>&#39;-&#39;</span><span class=pl-kos>)</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1859" class="blob-num js-line-number" data-line-number="1859"></td>
        <td id="LC1859" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>_data$offsets</span> <span class=pl-c1>=</span> <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>offsets</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1860" class="blob-num js-line-number" data-line-number="1860"></td>
        <td id="LC1860" class="blob-code blob-code-inner js-file-line">      <span class=pl-s1>popper</span> <span class=pl-c1>=</span> <span class=pl-s1>_data$offsets</span><span class=pl-kos>.</span><span class=pl-c1>popper</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1861" class="blob-num js-line-number" data-line-number="1861"></td>
        <td id="LC1861" class="blob-code blob-code-inner js-file-line">      <span class=pl-s1>reference</span> <span class=pl-c1>=</span> <span class=pl-s1>_data$offsets</span><span class=pl-kos>.</span><span class=pl-c1>reference</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1862" class="blob-num js-line-number" data-line-number="1862"></td>
        <td id="LC1862" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1863" class="blob-num js-line-number" data-line-number="1863"></td>
        <td id="LC1863" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>isHoriz</span> <span class=pl-c1>=</span> <span class=pl-kos>[</span><span class=pl-s>&#39;left&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;right&#39;</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-en>indexOf</span><span class=pl-kos>(</span><span class=pl-s1>basePlacement</span><span class=pl-kos>)</span> !== <span class=pl-c1>-</span><span class=pl-c1>1</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1864" class="blob-num js-line-number" data-line-number="1864"></td>
        <td id="LC1864" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1865" class="blob-num js-line-number" data-line-number="1865"></td>
        <td id="LC1865" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>var</span> <span class=pl-s1>subtractLength</span> <span class=pl-c1>=</span> <span class=pl-kos>[</span><span class=pl-s>&#39;top&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;left&#39;</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-en>indexOf</span><span class=pl-kos>(</span><span class=pl-s1>basePlacement</span><span class=pl-kos>)</span> <span class=pl-c1>===</span> <span class=pl-c1>-</span><span class=pl-c1>1</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1866" class="blob-num js-line-number" data-line-number="1866"></td>
        <td id="LC1866" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1867" class="blob-num js-line-number" data-line-number="1867"></td>
        <td id="LC1867" class="blob-code blob-code-inner js-file-line">  <span class=pl-s1>popper</span><span class=pl-kos>[</span><span class=pl-s1>isHoriz</span> ? <span class=pl-s>&#39;left&#39;</span> : <span class=pl-s>&#39;top&#39;</span><span class=pl-kos>]</span> <span class=pl-c1>=</span> <span class=pl-s1>reference</span><span class=pl-kos>[</span><span class=pl-s1>basePlacement</span><span class=pl-kos>]</span> <span class=pl-c1>-</span> <span class=pl-kos>(</span><span class=pl-s1>subtractLength</span> ? <span class=pl-s1>popper</span><span class=pl-kos>[</span><span class=pl-s1>isHoriz</span> ? <span class=pl-s>&#39;width&#39;</span> : <span class=pl-s>&#39;height&#39;</span><span class=pl-kos>]</span> : <span class=pl-c1>0</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1868" class="blob-num js-line-number" data-line-number="1868"></td>
        <td id="LC1868" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1869" class="blob-num js-line-number" data-line-number="1869"></td>
        <td id="LC1869" class="blob-code blob-code-inner js-file-line">  <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>placement</span> <span class=pl-c1>=</span> <span class=pl-en>getOppositePlacement</span><span class=pl-kos>(</span><span class=pl-s1>placement</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1870" class="blob-num js-line-number" data-line-number="1870"></td>
        <td id="LC1870" class="blob-code blob-code-inner js-file-line">  <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>offsets</span><span class=pl-kos>.</span><span class=pl-c1>popper</span> <span class=pl-c1>=</span> <span class=pl-en>getClientRect</span><span class=pl-kos>(</span><span class=pl-s1>popper</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1871" class="blob-num js-line-number" data-line-number="1871"></td>
        <td id="LC1871" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1872" class="blob-num js-line-number" data-line-number="1872"></td>
        <td id="LC1872" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>return</span> <span class=pl-s1>data</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1873" class="blob-num js-line-number" data-line-number="1873"></td>
        <td id="LC1873" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1874" class="blob-num js-line-number" data-line-number="1874"></td>
        <td id="LC1874" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1875" class="blob-num js-line-number" data-line-number="1875"></td>
        <td id="LC1875" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L1876" class="blob-num js-line-number" data-line-number="1876"></td>
        <td id="LC1876" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * Modifier function, each modifier can have a function of this type assigned</span></td>
      </tr>
      <tr>
        <td id="L1877" class="blob-num js-line-number" data-line-number="1877"></td>
        <td id="LC1877" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * to its `fn` property.&lt;br /&gt;</span></td>
      </tr>
      <tr>
        <td id="L1878" class="blob-num js-line-number" data-line-number="1878"></td>
        <td id="LC1878" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * These functions will be called on each update, this means that you must</span></td>
      </tr>
      <tr>
        <td id="L1879" class="blob-num js-line-number" data-line-number="1879"></td>
        <td id="LC1879" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * make sure they are performant enough to avoid performance bottlenecks.</span></td>
      </tr>
      <tr>
        <td id="L1880" class="blob-num js-line-number" data-line-number="1880"></td>
        <td id="LC1880" class="blob-code blob-code-inner js-file-line"><span class=pl-c> *</span></td>
      </tr>
      <tr>
        <td id="L1881" class="blob-num js-line-number" data-line-number="1881"></td>
        <td id="LC1881" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@function</span> ModifierFn</span></td>
      </tr>
      <tr>
        <td id="L1882" class="blob-num js-line-number" data-line-number="1882"></td>
        <td id="LC1882" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@argument</span> {dataObject} data - The data object generated by `update` method</span></td>
      </tr>
      <tr>
        <td id="L1883" class="blob-num js-line-number" data-line-number="1883"></td>
        <td id="LC1883" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@argument</span> {Object} options - Modifiers configuration and options</span></td>
      </tr>
      <tr>
        <td id="L1884" class="blob-num js-line-number" data-line-number="1884"></td>
        <td id="LC1884" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@returns</span> {<span class=pl-smi>dataObject</span>} The data object, properly modified</span></td>
      </tr>
      <tr>
        <td id="L1885" class="blob-num js-line-number" data-line-number="1885"></td>
        <td id="LC1885" class="blob-code blob-code-inner js-file-line"><span class=pl-c> */</span></td>
      </tr>
      <tr>
        <td id="L1886" class="blob-num js-line-number" data-line-number="1886"></td>
        <td id="LC1886" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1887" class="blob-num js-line-number" data-line-number="1887"></td>
        <td id="LC1887" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L1888" class="blob-num js-line-number" data-line-number="1888"></td>
        <td id="LC1888" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * Modifiers are plugins used to alter the behavior of your poppers.&lt;br /&gt;</span></td>
      </tr>
      <tr>
        <td id="L1889" class="blob-num js-line-number" data-line-number="1889"></td>
        <td id="LC1889" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * Popper.js uses a set of 9 modifiers to provide all the basic functionalities</span></td>
      </tr>
      <tr>
        <td id="L1890" class="blob-num js-line-number" data-line-number="1890"></td>
        <td id="LC1890" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * needed by the library.</span></td>
      </tr>
      <tr>
        <td id="L1891" class="blob-num js-line-number" data-line-number="1891"></td>
        <td id="LC1891" class="blob-code blob-code-inner js-file-line"><span class=pl-c> *</span></td>
      </tr>
      <tr>
        <td id="L1892" class="blob-num js-line-number" data-line-number="1892"></td>
        <td id="LC1892" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * Usually you don&#39;t want to override the `order`, `fn` and `onLoad` props.</span></td>
      </tr>
      <tr>
        <td id="L1893" class="blob-num js-line-number" data-line-number="1893"></td>
        <td id="LC1893" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * All the other properties are configurations that could be tweaked.</span></td>
      </tr>
      <tr>
        <td id="L1894" class="blob-num js-line-number" data-line-number="1894"></td>
        <td id="LC1894" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@namespace</span> modifiers</span></td>
      </tr>
      <tr>
        <td id="L1895" class="blob-num js-line-number" data-line-number="1895"></td>
        <td id="LC1895" class="blob-code blob-code-inner js-file-line"><span class=pl-c> */</span></td>
      </tr>
      <tr>
        <td id="L1896" class="blob-num js-line-number" data-line-number="1896"></td>
        <td id="LC1896" class="blob-code blob-code-inner js-file-line"><span class=pl-k>var</span> <span class=pl-s1>modifiers</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1897" class="blob-num js-line-number" data-line-number="1897"></td>
        <td id="LC1897" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L1898" class="blob-num js-line-number" data-line-number="1898"></td>
        <td id="LC1898" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * Modifier used to shift the popper on the start or end of its reference</span></td>
      </tr>
      <tr>
        <td id="L1899" class="blob-num js-line-number" data-line-number="1899"></td>
        <td id="LC1899" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * element.&lt;br /&gt;</span></td>
      </tr>
      <tr>
        <td id="L1900" class="blob-num js-line-number" data-line-number="1900"></td>
        <td id="LC1900" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * It will read the variation of the `placement` property.&lt;br /&gt;</span></td>
      </tr>
      <tr>
        <td id="L1901" class="blob-num js-line-number" data-line-number="1901"></td>
        <td id="LC1901" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * It can be one either `-end` or `-start`.</span></td>
      </tr>
      <tr>
        <td id="L1902" class="blob-num js-line-number" data-line-number="1902"></td>
        <td id="LC1902" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * <span class=pl-k>@memberof</span> modifiers</span></td>
      </tr>
      <tr>
        <td id="L1903" class="blob-num js-line-number" data-line-number="1903"></td>
        <td id="LC1903" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * <span class=pl-k>@inner</span></span></td>
      </tr>
      <tr>
        <td id="L1904" class="blob-num js-line-number" data-line-number="1904"></td>
        <td id="LC1904" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   */</span></td>
      </tr>
      <tr>
        <td id="L1905" class="blob-num js-line-number" data-line-number="1905"></td>
        <td id="LC1905" class="blob-code blob-code-inner js-file-line">  <span class=pl-c1>shift</span>: <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1906" class="blob-num js-line-number" data-line-number="1906"></td>
        <td id="LC1906" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>/** <span class=pl-k>@prop</span> {number} order=100 - Index used to define the order of execution */</span></td>
      </tr>
      <tr>
        <td id="L1907" class="blob-num js-line-number" data-line-number="1907"></td>
        <td id="LC1907" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>order</span>: <span class=pl-c1>100</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1908" class="blob-num js-line-number" data-line-number="1908"></td>
        <td id="LC1908" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>/** <span class=pl-k>@prop</span> {Boolean} enabled=true - Whether the modifier is enabled or not */</span></td>
      </tr>
      <tr>
        <td id="L1909" class="blob-num js-line-number" data-line-number="1909"></td>
        <td id="LC1909" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>enabled</span>: <span class=pl-c1>true</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1910" class="blob-num js-line-number" data-line-number="1910"></td>
        <td id="LC1910" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>/** <span class=pl-k>@prop</span> {ModifierFn} */</span></td>
      </tr>
      <tr>
        <td id="L1911" class="blob-num js-line-number" data-line-number="1911"></td>
        <td id="LC1911" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>fn</span>: <span class=pl-s1>shift</span></td>
      </tr>
      <tr>
        <td id="L1912" class="blob-num js-line-number" data-line-number="1912"></td>
        <td id="LC1912" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1913" class="blob-num js-line-number" data-line-number="1913"></td>
        <td id="LC1913" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1914" class="blob-num js-line-number" data-line-number="1914"></td>
        <td id="LC1914" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L1915" class="blob-num js-line-number" data-line-number="1915"></td>
        <td id="LC1915" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * The `offset` modifier can shift your popper on both its axis.</span></td>
      </tr>
      <tr>
        <td id="L1916" class="blob-num js-line-number" data-line-number="1916"></td>
        <td id="LC1916" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   *</span></td>
      </tr>
      <tr>
        <td id="L1917" class="blob-num js-line-number" data-line-number="1917"></td>
        <td id="LC1917" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * It accepts the following units:</span></td>
      </tr>
      <tr>
        <td id="L1918" class="blob-num js-line-number" data-line-number="1918"></td>
        <td id="LC1918" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * - `px` or unitless, interpreted as pixels</span></td>
      </tr>
      <tr>
        <td id="L1919" class="blob-num js-line-number" data-line-number="1919"></td>
        <td id="LC1919" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * - `%` or `%r`, percentage relative to the length of the reference element</span></td>
      </tr>
      <tr>
        <td id="L1920" class="blob-num js-line-number" data-line-number="1920"></td>
        <td id="LC1920" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * - `%p`, percentage relative to the length of the popper element</span></td>
      </tr>
      <tr>
        <td id="L1921" class="blob-num js-line-number" data-line-number="1921"></td>
        <td id="LC1921" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * - `vw`, CSS viewport width unit</span></td>
      </tr>
      <tr>
        <td id="L1922" class="blob-num js-line-number" data-line-number="1922"></td>
        <td id="LC1922" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * - `vh`, CSS viewport height unit</span></td>
      </tr>
      <tr>
        <td id="L1923" class="blob-num js-line-number" data-line-number="1923"></td>
        <td id="LC1923" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   *</span></td>
      </tr>
      <tr>
        <td id="L1924" class="blob-num js-line-number" data-line-number="1924"></td>
        <td id="LC1924" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * For length is intended the main axis relative to the placement of the popper.&lt;br /&gt;</span></td>
      </tr>
      <tr>
        <td id="L1925" class="blob-num js-line-number" data-line-number="1925"></td>
        <td id="LC1925" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * This means that if the placement is `top` or `bottom`, the length will be the</span></td>
      </tr>
      <tr>
        <td id="L1926" class="blob-num js-line-number" data-line-number="1926"></td>
        <td id="LC1926" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * `width`. In case of `left` or `right`, it will be the height.</span></td>
      </tr>
      <tr>
        <td id="L1927" class="blob-num js-line-number" data-line-number="1927"></td>
        <td id="LC1927" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   *</span></td>
      </tr>
      <tr>
        <td id="L1928" class="blob-num js-line-number" data-line-number="1928"></td>
        <td id="LC1928" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * You can provide a single value (as `Number` or `String`), or a pair of values</span></td>
      </tr>
      <tr>
        <td id="L1929" class="blob-num js-line-number" data-line-number="1929"></td>
        <td id="LC1929" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * as `String` divided by a comma or one (or more) white spaces.&lt;br /&gt;</span></td>
      </tr>
      <tr>
        <td id="L1930" class="blob-num js-line-number" data-line-number="1930"></td>
        <td id="LC1930" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * The latter is a deprecated method because it leads to confusion and will be</span></td>
      </tr>
      <tr>
        <td id="L1931" class="blob-num js-line-number" data-line-number="1931"></td>
        <td id="LC1931" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * removed in v2.&lt;br /&gt;</span></td>
      </tr>
      <tr>
        <td id="L1932" class="blob-num js-line-number" data-line-number="1932"></td>
        <td id="LC1932" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * Additionally, it accepts additions and subtractions between different units.</span></td>
      </tr>
      <tr>
        <td id="L1933" class="blob-num js-line-number" data-line-number="1933"></td>
        <td id="LC1933" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * Note that multiplications and divisions aren&#39;t supported.</span></td>
      </tr>
      <tr>
        <td id="L1934" class="blob-num js-line-number" data-line-number="1934"></td>
        <td id="LC1934" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   *</span></td>
      </tr>
      <tr>
        <td id="L1935" class="blob-num js-line-number" data-line-number="1935"></td>
        <td id="LC1935" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * Valid examples are:</span></td>
      </tr>
      <tr>
        <td id="L1936" class="blob-num js-line-number" data-line-number="1936"></td>
        <td id="LC1936" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * ```</span></td>
      </tr>
      <tr>
        <td id="L1937" class="blob-num js-line-number" data-line-number="1937"></td>
        <td id="LC1937" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * 10</span></td>
      </tr>
      <tr>
        <td id="L1938" class="blob-num js-line-number" data-line-number="1938"></td>
        <td id="LC1938" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * &#39;10%&#39;</span></td>
      </tr>
      <tr>
        <td id="L1939" class="blob-num js-line-number" data-line-number="1939"></td>
        <td id="LC1939" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * &#39;10, 10&#39;</span></td>
      </tr>
      <tr>
        <td id="L1940" class="blob-num js-line-number" data-line-number="1940"></td>
        <td id="LC1940" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * &#39;10%, 10&#39;</span></td>
      </tr>
      <tr>
        <td id="L1941" class="blob-num js-line-number" data-line-number="1941"></td>
        <td id="LC1941" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * &#39;10 + 10%&#39;</span></td>
      </tr>
      <tr>
        <td id="L1942" class="blob-num js-line-number" data-line-number="1942"></td>
        <td id="LC1942" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * &#39;10 - 5vh + 3%&#39;</span></td>
      </tr>
      <tr>
        <td id="L1943" class="blob-num js-line-number" data-line-number="1943"></td>
        <td id="LC1943" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * &#39;-10px + 5vh, 5px - 6%&#39;</span></td>
      </tr>
      <tr>
        <td id="L1944" class="blob-num js-line-number" data-line-number="1944"></td>
        <td id="LC1944" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * ```</span></td>
      </tr>
      <tr>
        <td id="L1945" class="blob-num js-line-number" data-line-number="1945"></td>
        <td id="LC1945" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * &gt; **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap</span></td>
      </tr>
      <tr>
        <td id="L1946" class="blob-num js-line-number" data-line-number="1946"></td>
        <td id="LC1946" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * &gt; with their reference element, unfortunately, you will have to disable the `flip` modifier.</span></td>
      </tr>
      <tr>
        <td id="L1947" class="blob-num js-line-number" data-line-number="1947"></td>
        <td id="LC1947" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * &gt; More on this [reading this issue](https://github.com/FezVrasta/popper.js/issues/373)</span></td>
      </tr>
      <tr>
        <td id="L1948" class="blob-num js-line-number" data-line-number="1948"></td>
        <td id="LC1948" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   *</span></td>
      </tr>
      <tr>
        <td id="L1949" class="blob-num js-line-number" data-line-number="1949"></td>
        <td id="LC1949" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * <span class=pl-k>@memberof</span> modifiers</span></td>
      </tr>
      <tr>
        <td id="L1950" class="blob-num js-line-number" data-line-number="1950"></td>
        <td id="LC1950" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * <span class=pl-k>@inner</span></span></td>
      </tr>
      <tr>
        <td id="L1951" class="blob-num js-line-number" data-line-number="1951"></td>
        <td id="LC1951" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   */</span></td>
      </tr>
      <tr>
        <td id="L1952" class="blob-num js-line-number" data-line-number="1952"></td>
        <td id="LC1952" class="blob-code blob-code-inner js-file-line">  <span class=pl-c1>offset</span>: <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1953" class="blob-num js-line-number" data-line-number="1953"></td>
        <td id="LC1953" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>/** <span class=pl-k>@prop</span> {number} order=200 - Index used to define the order of execution */</span></td>
      </tr>
      <tr>
        <td id="L1954" class="blob-num js-line-number" data-line-number="1954"></td>
        <td id="LC1954" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>order</span>: <span class=pl-c1>200</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1955" class="blob-num js-line-number" data-line-number="1955"></td>
        <td id="LC1955" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>/** <span class=pl-k>@prop</span> {Boolean} enabled=true - Whether the modifier is enabled or not */</span></td>
      </tr>
      <tr>
        <td id="L1956" class="blob-num js-line-number" data-line-number="1956"></td>
        <td id="LC1956" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>enabled</span>: <span class=pl-c1>true</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1957" class="blob-num js-line-number" data-line-number="1957"></td>
        <td id="LC1957" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>/** <span class=pl-k>@prop</span> {ModifierFn} */</span></td>
      </tr>
      <tr>
        <td id="L1958" class="blob-num js-line-number" data-line-number="1958"></td>
        <td id="LC1958" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>fn</span>: <span class=pl-s1>offset</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1959" class="blob-num js-line-number" data-line-number="1959"></td>
        <td id="LC1959" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>/** <span class=pl-k>@prop</span> {Number|String} offset=0</span></td>
      </tr>
      <tr>
        <td id="L1960" class="blob-num js-line-number" data-line-number="1960"></td>
        <td id="LC1960" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * The offset value as described in the modifier description</span></td>
      </tr>
      <tr>
        <td id="L1961" class="blob-num js-line-number" data-line-number="1961"></td>
        <td id="LC1961" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     */</span></td>
      </tr>
      <tr>
        <td id="L1962" class="blob-num js-line-number" data-line-number="1962"></td>
        <td id="LC1962" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>offset</span>: <span class=pl-c1>0</span></td>
      </tr>
      <tr>
        <td id="L1963" class="blob-num js-line-number" data-line-number="1963"></td>
        <td id="LC1963" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1964" class="blob-num js-line-number" data-line-number="1964"></td>
        <td id="LC1964" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1965" class="blob-num js-line-number" data-line-number="1965"></td>
        <td id="LC1965" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L1966" class="blob-num js-line-number" data-line-number="1966"></td>
        <td id="LC1966" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * Modifier used to prevent the popper from being positioned outside the boundary.</span></td>
      </tr>
      <tr>
        <td id="L1967" class="blob-num js-line-number" data-line-number="1967"></td>
        <td id="LC1967" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   *</span></td>
      </tr>
      <tr>
        <td id="L1968" class="blob-num js-line-number" data-line-number="1968"></td>
        <td id="LC1968" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * An scenario exists where the reference itself is not within the boundaries.&lt;br /&gt;</span></td>
      </tr>
      <tr>
        <td id="L1969" class="blob-num js-line-number" data-line-number="1969"></td>
        <td id="LC1969" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * We can say it has &quot;escaped the boundaries&quot; — or just &quot;escaped&quot;.&lt;br /&gt;</span></td>
      </tr>
      <tr>
        <td id="L1970" class="blob-num js-line-number" data-line-number="1970"></td>
        <td id="LC1970" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * In this case we need to decide whether the popper should either:</span></td>
      </tr>
      <tr>
        <td id="L1971" class="blob-num js-line-number" data-line-number="1971"></td>
        <td id="LC1971" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   *</span></td>
      </tr>
      <tr>
        <td id="L1972" class="blob-num js-line-number" data-line-number="1972"></td>
        <td id="LC1972" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * - detach from the reference and remain &quot;trapped&quot; in the boundaries, or</span></td>
      </tr>
      <tr>
        <td id="L1973" class="blob-num js-line-number" data-line-number="1973"></td>
        <td id="LC1973" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * - if it should ignore the boundary and &quot;escape with its reference&quot;</span></td>
      </tr>
      <tr>
        <td id="L1974" class="blob-num js-line-number" data-line-number="1974"></td>
        <td id="LC1974" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   *</span></td>
      </tr>
      <tr>
        <td id="L1975" class="blob-num js-line-number" data-line-number="1975"></td>
        <td id="LC1975" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * When `escapeWithReference` is set to`true` and reference is completely</span></td>
      </tr>
      <tr>
        <td id="L1976" class="blob-num js-line-number" data-line-number="1976"></td>
        <td id="LC1976" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * outside its boundaries, the popper will overflow (or completely leave)</span></td>
      </tr>
      <tr>
        <td id="L1977" class="blob-num js-line-number" data-line-number="1977"></td>
        <td id="LC1977" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * the boundaries in order to remain attached to the edge of the reference.</span></td>
      </tr>
      <tr>
        <td id="L1978" class="blob-num js-line-number" data-line-number="1978"></td>
        <td id="LC1978" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   *</span></td>
      </tr>
      <tr>
        <td id="L1979" class="blob-num js-line-number" data-line-number="1979"></td>
        <td id="LC1979" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * <span class=pl-k>@memberof</span> modifiers</span></td>
      </tr>
      <tr>
        <td id="L1980" class="blob-num js-line-number" data-line-number="1980"></td>
        <td id="LC1980" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * <span class=pl-k>@inner</span></span></td>
      </tr>
      <tr>
        <td id="L1981" class="blob-num js-line-number" data-line-number="1981"></td>
        <td id="LC1981" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   */</span></td>
      </tr>
      <tr>
        <td id="L1982" class="blob-num js-line-number" data-line-number="1982"></td>
        <td id="LC1982" class="blob-code blob-code-inner js-file-line">  <span class=pl-c1>preventOverflow</span>: <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1983" class="blob-num js-line-number" data-line-number="1983"></td>
        <td id="LC1983" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>/** <span class=pl-k>@prop</span> {number} order=300 - Index used to define the order of execution */</span></td>
      </tr>
      <tr>
        <td id="L1984" class="blob-num js-line-number" data-line-number="1984"></td>
        <td id="LC1984" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>order</span>: <span class=pl-c1>300</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1985" class="blob-num js-line-number" data-line-number="1985"></td>
        <td id="LC1985" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>/** <span class=pl-k>@prop</span> {Boolean} enabled=true - Whether the modifier is enabled or not */</span></td>
      </tr>
      <tr>
        <td id="L1986" class="blob-num js-line-number" data-line-number="1986"></td>
        <td id="LC1986" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>enabled</span>: <span class=pl-c1>true</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1987" class="blob-num js-line-number" data-line-number="1987"></td>
        <td id="LC1987" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>/** <span class=pl-k>@prop</span> {ModifierFn} */</span></td>
      </tr>
      <tr>
        <td id="L1988" class="blob-num js-line-number" data-line-number="1988"></td>
        <td id="LC1988" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>fn</span>: <span class=pl-s1>preventOverflow</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1989" class="blob-num js-line-number" data-line-number="1989"></td>
        <td id="LC1989" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L1990" class="blob-num js-line-number" data-line-number="1990"></td>
        <td id="LC1990" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@prop</span> {Array} [priority=[&#39;left&#39;,&#39;right&#39;,&#39;top&#39;,&#39;bottom&#39;]]</span></td>
      </tr>
      <tr>
        <td id="L1991" class="blob-num js-line-number" data-line-number="1991"></td>
        <td id="LC1991" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * Popper will try to prevent overflow following these priorities by default,</span></td>
      </tr>
      <tr>
        <td id="L1992" class="blob-num js-line-number" data-line-number="1992"></td>
        <td id="LC1992" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * then, it could overflow on the left and on top of the `boundariesElement`</span></td>
      </tr>
      <tr>
        <td id="L1993" class="blob-num js-line-number" data-line-number="1993"></td>
        <td id="LC1993" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     */</span></td>
      </tr>
      <tr>
        <td id="L1994" class="blob-num js-line-number" data-line-number="1994"></td>
        <td id="LC1994" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>priority</span>: <span class=pl-kos>[</span><span class=pl-s>&#39;left&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;right&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;top&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;bottom&#39;</span><span class=pl-kos>]</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1995" class="blob-num js-line-number" data-line-number="1995"></td>
        <td id="LC1995" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L1996" class="blob-num js-line-number" data-line-number="1996"></td>
        <td id="LC1996" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@prop</span> {number} padding=5</span></td>
      </tr>
      <tr>
        <td id="L1997" class="blob-num js-line-number" data-line-number="1997"></td>
        <td id="LC1997" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * Amount of pixel used to define a minimum distance between the boundaries</span></td>
      </tr>
      <tr>
        <td id="L1998" class="blob-num js-line-number" data-line-number="1998"></td>
        <td id="LC1998" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * and the popper this makes sure the popper has always a little padding</span></td>
      </tr>
      <tr>
        <td id="L1999" class="blob-num js-line-number" data-line-number="1999"></td>
        <td id="LC1999" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * between the edges of its container</span></td>
      </tr>
      <tr>
        <td id="L2000" class="blob-num js-line-number" data-line-number="2000"></td>
        <td id="LC2000" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     */</span></td>
      </tr>
      <tr>
        <td id="L2001" class="blob-num js-line-number" data-line-number="2001"></td>
        <td id="LC2001" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>padding</span>: <span class=pl-c1>5</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L2002" class="blob-num js-line-number" data-line-number="2002"></td>
        <td id="LC2002" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L2003" class="blob-num js-line-number" data-line-number="2003"></td>
        <td id="LC2003" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@prop</span> {String|HTMLElement} boundariesElement=&#39;scrollParent&#39;</span></td>
      </tr>
      <tr>
        <td id="L2004" class="blob-num js-line-number" data-line-number="2004"></td>
        <td id="LC2004" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * Boundaries used by the modifier, can be `scrollParent`, `window`,</span></td>
      </tr>
      <tr>
        <td id="L2005" class="blob-num js-line-number" data-line-number="2005"></td>
        <td id="LC2005" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * `viewport` or any DOM element.</span></td>
      </tr>
      <tr>
        <td id="L2006" class="blob-num js-line-number" data-line-number="2006"></td>
        <td id="LC2006" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     */</span></td>
      </tr>
      <tr>
        <td id="L2007" class="blob-num js-line-number" data-line-number="2007"></td>
        <td id="LC2007" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>boundariesElement</span>: <span class=pl-s>&#39;scrollParent&#39;</span></td>
      </tr>
      <tr>
        <td id="L2008" class="blob-num js-line-number" data-line-number="2008"></td>
        <td id="LC2008" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L2009" class="blob-num js-line-number" data-line-number="2009"></td>
        <td id="LC2009" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2010" class="blob-num js-line-number" data-line-number="2010"></td>
        <td id="LC2010" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L2011" class="blob-num js-line-number" data-line-number="2011"></td>
        <td id="LC2011" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * Modifier used to make sure the reference and its popper stay near eachothers</span></td>
      </tr>
      <tr>
        <td id="L2012" class="blob-num js-line-number" data-line-number="2012"></td>
        <td id="LC2012" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * without leaving any gap between the two. Expecially useful when the arrow is</span></td>
      </tr>
      <tr>
        <td id="L2013" class="blob-num js-line-number" data-line-number="2013"></td>
        <td id="LC2013" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * enabled and you want to assure it to point to its reference element.</span></td>
      </tr>
      <tr>
        <td id="L2014" class="blob-num js-line-number" data-line-number="2014"></td>
        <td id="LC2014" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * It cares only about the first axis, you can still have poppers with margin</span></td>
      </tr>
      <tr>
        <td id="L2015" class="blob-num js-line-number" data-line-number="2015"></td>
        <td id="LC2015" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * between the popper and its reference element.</span></td>
      </tr>
      <tr>
        <td id="L2016" class="blob-num js-line-number" data-line-number="2016"></td>
        <td id="LC2016" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * <span class=pl-k>@memberof</span> modifiers</span></td>
      </tr>
      <tr>
        <td id="L2017" class="blob-num js-line-number" data-line-number="2017"></td>
        <td id="LC2017" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * <span class=pl-k>@inner</span></span></td>
      </tr>
      <tr>
        <td id="L2018" class="blob-num js-line-number" data-line-number="2018"></td>
        <td id="LC2018" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   */</span></td>
      </tr>
      <tr>
        <td id="L2019" class="blob-num js-line-number" data-line-number="2019"></td>
        <td id="LC2019" class="blob-code blob-code-inner js-file-line">  <span class=pl-c1>keepTogether</span>: <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L2020" class="blob-num js-line-number" data-line-number="2020"></td>
        <td id="LC2020" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>/** <span class=pl-k>@prop</span> {number} order=400 - Index used to define the order of execution */</span></td>
      </tr>
      <tr>
        <td id="L2021" class="blob-num js-line-number" data-line-number="2021"></td>
        <td id="LC2021" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>order</span>: <span class=pl-c1>400</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L2022" class="blob-num js-line-number" data-line-number="2022"></td>
        <td id="LC2022" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>/** <span class=pl-k>@prop</span> {Boolean} enabled=true - Whether the modifier is enabled or not */</span></td>
      </tr>
      <tr>
        <td id="L2023" class="blob-num js-line-number" data-line-number="2023"></td>
        <td id="LC2023" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>enabled</span>: <span class=pl-c1>true</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L2024" class="blob-num js-line-number" data-line-number="2024"></td>
        <td id="LC2024" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>/** <span class=pl-k>@prop</span> {ModifierFn} */</span></td>
      </tr>
      <tr>
        <td id="L2025" class="blob-num js-line-number" data-line-number="2025"></td>
        <td id="LC2025" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>fn</span>: <span class=pl-s1>keepTogether</span></td>
      </tr>
      <tr>
        <td id="L2026" class="blob-num js-line-number" data-line-number="2026"></td>
        <td id="LC2026" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L2027" class="blob-num js-line-number" data-line-number="2027"></td>
        <td id="LC2027" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2028" class="blob-num js-line-number" data-line-number="2028"></td>
        <td id="LC2028" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L2029" class="blob-num js-line-number" data-line-number="2029"></td>
        <td id="LC2029" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * This modifier is used to move the `arrowElement` of the popper to make</span></td>
      </tr>
      <tr>
        <td id="L2030" class="blob-num js-line-number" data-line-number="2030"></td>
        <td id="LC2030" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * sure it is positioned between the reference element and its popper element.</span></td>
      </tr>
      <tr>
        <td id="L2031" class="blob-num js-line-number" data-line-number="2031"></td>
        <td id="LC2031" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * It will read the outer size of the `arrowElement` node to detect how many</span></td>
      </tr>
      <tr>
        <td id="L2032" class="blob-num js-line-number" data-line-number="2032"></td>
        <td id="LC2032" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * pixels of conjuction are needed.</span></td>
      </tr>
      <tr>
        <td id="L2033" class="blob-num js-line-number" data-line-number="2033"></td>
        <td id="LC2033" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   *</span></td>
      </tr>
      <tr>
        <td id="L2034" class="blob-num js-line-number" data-line-number="2034"></td>
        <td id="LC2034" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * It has no effect if no `arrowElement` is provided.</span></td>
      </tr>
      <tr>
        <td id="L2035" class="blob-num js-line-number" data-line-number="2035"></td>
        <td id="LC2035" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * <span class=pl-k>@memberof</span> modifiers</span></td>
      </tr>
      <tr>
        <td id="L2036" class="blob-num js-line-number" data-line-number="2036"></td>
        <td id="LC2036" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * <span class=pl-k>@inner</span></span></td>
      </tr>
      <tr>
        <td id="L2037" class="blob-num js-line-number" data-line-number="2037"></td>
        <td id="LC2037" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   */</span></td>
      </tr>
      <tr>
        <td id="L2038" class="blob-num js-line-number" data-line-number="2038"></td>
        <td id="LC2038" class="blob-code blob-code-inner js-file-line">  <span class=pl-c1>arrow</span>: <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L2039" class="blob-num js-line-number" data-line-number="2039"></td>
        <td id="LC2039" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>/** <span class=pl-k>@prop</span> {number} order=500 - Index used to define the order of execution */</span></td>
      </tr>
      <tr>
        <td id="L2040" class="blob-num js-line-number" data-line-number="2040"></td>
        <td id="LC2040" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>order</span>: <span class=pl-c1>500</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L2041" class="blob-num js-line-number" data-line-number="2041"></td>
        <td id="LC2041" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>/** <span class=pl-k>@prop</span> {Boolean} enabled=true - Whether the modifier is enabled or not */</span></td>
      </tr>
      <tr>
        <td id="L2042" class="blob-num js-line-number" data-line-number="2042"></td>
        <td id="LC2042" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>enabled</span>: <span class=pl-c1>true</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L2043" class="blob-num js-line-number" data-line-number="2043"></td>
        <td id="LC2043" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>/** <span class=pl-k>@prop</span> {ModifierFn} */</span></td>
      </tr>
      <tr>
        <td id="L2044" class="blob-num js-line-number" data-line-number="2044"></td>
        <td id="LC2044" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>fn</span>: <span class=pl-s1>arrow</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L2045" class="blob-num js-line-number" data-line-number="2045"></td>
        <td id="LC2045" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>/** <span class=pl-k>@prop</span> {String|HTMLElement} element=&#39;[x-arrow]&#39; - Selector or node used as arrow */</span></td>
      </tr>
      <tr>
        <td id="L2046" class="blob-num js-line-number" data-line-number="2046"></td>
        <td id="LC2046" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>element</span>: <span class=pl-s>&#39;[x-arrow]&#39;</span></td>
      </tr>
      <tr>
        <td id="L2047" class="blob-num js-line-number" data-line-number="2047"></td>
        <td id="LC2047" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L2048" class="blob-num js-line-number" data-line-number="2048"></td>
        <td id="LC2048" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2049" class="blob-num js-line-number" data-line-number="2049"></td>
        <td id="LC2049" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L2050" class="blob-num js-line-number" data-line-number="2050"></td>
        <td id="LC2050" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * Modifier used to flip the popper&#39;s placement when it starts to overlap its</span></td>
      </tr>
      <tr>
        <td id="L2051" class="blob-num js-line-number" data-line-number="2051"></td>
        <td id="LC2051" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * reference element.</span></td>
      </tr>
      <tr>
        <td id="L2052" class="blob-num js-line-number" data-line-number="2052"></td>
        <td id="LC2052" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   *</span></td>
      </tr>
      <tr>
        <td id="L2053" class="blob-num js-line-number" data-line-number="2053"></td>
        <td id="LC2053" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * Requires the `preventOverflow` modifier before it in order to work.</span></td>
      </tr>
      <tr>
        <td id="L2054" class="blob-num js-line-number" data-line-number="2054"></td>
        <td id="LC2054" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   *</span></td>
      </tr>
      <tr>
        <td id="L2055" class="blob-num js-line-number" data-line-number="2055"></td>
        <td id="LC2055" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * **NOTE:** this modifier will interrupt the current update cycle and will</span></td>
      </tr>
      <tr>
        <td id="L2056" class="blob-num js-line-number" data-line-number="2056"></td>
        <td id="LC2056" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * restart it if it detects the need to flip the placement.</span></td>
      </tr>
      <tr>
        <td id="L2057" class="blob-num js-line-number" data-line-number="2057"></td>
        <td id="LC2057" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * <span class=pl-k>@memberof</span> modifiers</span></td>
      </tr>
      <tr>
        <td id="L2058" class="blob-num js-line-number" data-line-number="2058"></td>
        <td id="LC2058" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * <span class=pl-k>@inner</span></span></td>
      </tr>
      <tr>
        <td id="L2059" class="blob-num js-line-number" data-line-number="2059"></td>
        <td id="LC2059" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   */</span></td>
      </tr>
      <tr>
        <td id="L2060" class="blob-num js-line-number" data-line-number="2060"></td>
        <td id="LC2060" class="blob-code blob-code-inner js-file-line">  <span class=pl-c1>flip</span>: <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L2061" class="blob-num js-line-number" data-line-number="2061"></td>
        <td id="LC2061" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>/** <span class=pl-k>@prop</span> {number} order=600 - Index used to define the order of execution */</span></td>
      </tr>
      <tr>
        <td id="L2062" class="blob-num js-line-number" data-line-number="2062"></td>
        <td id="LC2062" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>order</span>: <span class=pl-c1>600</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L2063" class="blob-num js-line-number" data-line-number="2063"></td>
        <td id="LC2063" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>/** <span class=pl-k>@prop</span> {Boolean} enabled=true - Whether the modifier is enabled or not */</span></td>
      </tr>
      <tr>
        <td id="L2064" class="blob-num js-line-number" data-line-number="2064"></td>
        <td id="LC2064" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>enabled</span>: <span class=pl-c1>true</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L2065" class="blob-num js-line-number" data-line-number="2065"></td>
        <td id="LC2065" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>/** <span class=pl-k>@prop</span> {ModifierFn} */</span></td>
      </tr>
      <tr>
        <td id="L2066" class="blob-num js-line-number" data-line-number="2066"></td>
        <td id="LC2066" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>fn</span>: <span class=pl-s1>flip</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L2067" class="blob-num js-line-number" data-line-number="2067"></td>
        <td id="LC2067" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L2068" class="blob-num js-line-number" data-line-number="2068"></td>
        <td id="LC2068" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@prop</span> {String|Array} behavior=&#39;flip&#39;</span></td>
      </tr>
      <tr>
        <td id="L2069" class="blob-num js-line-number" data-line-number="2069"></td>
        <td id="LC2069" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * The behavior used to change the popper&#39;s placement. It can be one of</span></td>
      </tr>
      <tr>
        <td id="L2070" class="blob-num js-line-number" data-line-number="2070"></td>
        <td id="LC2070" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid</span></td>
      </tr>
      <tr>
        <td id="L2071" class="blob-num js-line-number" data-line-number="2071"></td>
        <td id="LC2071" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * placements (with optional variations).</span></td>
      </tr>
      <tr>
        <td id="L2072" class="blob-num js-line-number" data-line-number="2072"></td>
        <td id="LC2072" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     */</span></td>
      </tr>
      <tr>
        <td id="L2073" class="blob-num js-line-number" data-line-number="2073"></td>
        <td id="LC2073" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>behavior</span>: <span class=pl-s>&#39;flip&#39;</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L2074" class="blob-num js-line-number" data-line-number="2074"></td>
        <td id="LC2074" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L2075" class="blob-num js-line-number" data-line-number="2075"></td>
        <td id="LC2075" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@prop</span> {number} padding=5</span></td>
      </tr>
      <tr>
        <td id="L2076" class="blob-num js-line-number" data-line-number="2076"></td>
        <td id="LC2076" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * The popper will flip if it hits the edges of the `boundariesElement`</span></td>
      </tr>
      <tr>
        <td id="L2077" class="blob-num js-line-number" data-line-number="2077"></td>
        <td id="LC2077" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     */</span></td>
      </tr>
      <tr>
        <td id="L2078" class="blob-num js-line-number" data-line-number="2078"></td>
        <td id="LC2078" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>padding</span>: <span class=pl-c1>5</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L2079" class="blob-num js-line-number" data-line-number="2079"></td>
        <td id="LC2079" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L2080" class="blob-num js-line-number" data-line-number="2080"></td>
        <td id="LC2080" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@prop</span> {String|HTMLElement} boundariesElement=&#39;viewport&#39;</span></td>
      </tr>
      <tr>
        <td id="L2081" class="blob-num js-line-number" data-line-number="2081"></td>
        <td id="LC2081" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * The element which will define the boundaries of the popper position,</span></td>
      </tr>
      <tr>
        <td id="L2082" class="blob-num js-line-number" data-line-number="2082"></td>
        <td id="LC2082" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * the popper will never be placed outside of the defined boundaries</span></td>
      </tr>
      <tr>
        <td id="L2083" class="blob-num js-line-number" data-line-number="2083"></td>
        <td id="LC2083" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * (except if keepTogether is enabled)</span></td>
      </tr>
      <tr>
        <td id="L2084" class="blob-num js-line-number" data-line-number="2084"></td>
        <td id="LC2084" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     */</span></td>
      </tr>
      <tr>
        <td id="L2085" class="blob-num js-line-number" data-line-number="2085"></td>
        <td id="LC2085" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>boundariesElement</span>: <span class=pl-s>&#39;viewport&#39;</span></td>
      </tr>
      <tr>
        <td id="L2086" class="blob-num js-line-number" data-line-number="2086"></td>
        <td id="LC2086" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L2087" class="blob-num js-line-number" data-line-number="2087"></td>
        <td id="LC2087" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2088" class="blob-num js-line-number" data-line-number="2088"></td>
        <td id="LC2088" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L2089" class="blob-num js-line-number" data-line-number="2089"></td>
        <td id="LC2089" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * Modifier used to make the popper flow toward the inner of the reference element.</span></td>
      </tr>
      <tr>
        <td id="L2090" class="blob-num js-line-number" data-line-number="2090"></td>
        <td id="LC2090" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * By default, when this modifier is disabled, the popper will be placed outside</span></td>
      </tr>
      <tr>
        <td id="L2091" class="blob-num js-line-number" data-line-number="2091"></td>
        <td id="LC2091" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * the reference element.</span></td>
      </tr>
      <tr>
        <td id="L2092" class="blob-num js-line-number" data-line-number="2092"></td>
        <td id="LC2092" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * <span class=pl-k>@memberof</span> modifiers</span></td>
      </tr>
      <tr>
        <td id="L2093" class="blob-num js-line-number" data-line-number="2093"></td>
        <td id="LC2093" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * <span class=pl-k>@inner</span></span></td>
      </tr>
      <tr>
        <td id="L2094" class="blob-num js-line-number" data-line-number="2094"></td>
        <td id="LC2094" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   */</span></td>
      </tr>
      <tr>
        <td id="L2095" class="blob-num js-line-number" data-line-number="2095"></td>
        <td id="LC2095" class="blob-code blob-code-inner js-file-line">  <span class=pl-c1>inner</span>: <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L2096" class="blob-num js-line-number" data-line-number="2096"></td>
        <td id="LC2096" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>/** <span class=pl-k>@prop</span> {number} order=700 - Index used to define the order of execution */</span></td>
      </tr>
      <tr>
        <td id="L2097" class="blob-num js-line-number" data-line-number="2097"></td>
        <td id="LC2097" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>order</span>: <span class=pl-c1>700</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L2098" class="blob-num js-line-number" data-line-number="2098"></td>
        <td id="LC2098" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>/** <span class=pl-k>@prop</span> {Boolean} enabled=false - Whether the modifier is enabled or not */</span></td>
      </tr>
      <tr>
        <td id="L2099" class="blob-num js-line-number" data-line-number="2099"></td>
        <td id="LC2099" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>enabled</span>: <span class=pl-c1>false</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L2100" class="blob-num js-line-number" data-line-number="2100"></td>
        <td id="LC2100" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>/** <span class=pl-k>@prop</span> {ModifierFn} */</span></td>
      </tr>
      <tr>
        <td id="L2101" class="blob-num js-line-number" data-line-number="2101"></td>
        <td id="LC2101" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>fn</span>: <span class=pl-s1>inner</span></td>
      </tr>
      <tr>
        <td id="L2102" class="blob-num js-line-number" data-line-number="2102"></td>
        <td id="LC2102" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L2103" class="blob-num js-line-number" data-line-number="2103"></td>
        <td id="LC2103" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2104" class="blob-num js-line-number" data-line-number="2104"></td>
        <td id="LC2104" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L2105" class="blob-num js-line-number" data-line-number="2105"></td>
        <td id="LC2105" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * Modifier used to hide the popper when its reference element is outside of the</span></td>
      </tr>
      <tr>
        <td id="L2106" class="blob-num js-line-number" data-line-number="2106"></td>
        <td id="LC2106" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can</span></td>
      </tr>
      <tr>
        <td id="L2107" class="blob-num js-line-number" data-line-number="2107"></td>
        <td id="LC2107" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * be used to hide with a CSS selector the popper when its reference is</span></td>
      </tr>
      <tr>
        <td id="L2108" class="blob-num js-line-number" data-line-number="2108"></td>
        <td id="LC2108" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * out of boundaries.</span></td>
      </tr>
      <tr>
        <td id="L2109" class="blob-num js-line-number" data-line-number="2109"></td>
        <td id="LC2109" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   *</span></td>
      </tr>
      <tr>
        <td id="L2110" class="blob-num js-line-number" data-line-number="2110"></td>
        <td id="LC2110" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * Requires the `preventOverflow` modifier before it in order to work.</span></td>
      </tr>
      <tr>
        <td id="L2111" class="blob-num js-line-number" data-line-number="2111"></td>
        <td id="LC2111" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * <span class=pl-k>@memberof</span> modifiers</span></td>
      </tr>
      <tr>
        <td id="L2112" class="blob-num js-line-number" data-line-number="2112"></td>
        <td id="LC2112" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * <span class=pl-k>@inner</span></span></td>
      </tr>
      <tr>
        <td id="L2113" class="blob-num js-line-number" data-line-number="2113"></td>
        <td id="LC2113" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   */</span></td>
      </tr>
      <tr>
        <td id="L2114" class="blob-num js-line-number" data-line-number="2114"></td>
        <td id="LC2114" class="blob-code blob-code-inner js-file-line">  <span class=pl-c1>hide</span>: <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L2115" class="blob-num js-line-number" data-line-number="2115"></td>
        <td id="LC2115" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>/** <span class=pl-k>@prop</span> {number} order=800 - Index used to define the order of execution */</span></td>
      </tr>
      <tr>
        <td id="L2116" class="blob-num js-line-number" data-line-number="2116"></td>
        <td id="LC2116" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>order</span>: <span class=pl-c1>800</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L2117" class="blob-num js-line-number" data-line-number="2117"></td>
        <td id="LC2117" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>/** <span class=pl-k>@prop</span> {Boolean} enabled=true - Whether the modifier is enabled or not */</span></td>
      </tr>
      <tr>
        <td id="L2118" class="blob-num js-line-number" data-line-number="2118"></td>
        <td id="LC2118" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>enabled</span>: <span class=pl-c1>true</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L2119" class="blob-num js-line-number" data-line-number="2119"></td>
        <td id="LC2119" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>/** <span class=pl-k>@prop</span> {ModifierFn} */</span></td>
      </tr>
      <tr>
        <td id="L2120" class="blob-num js-line-number" data-line-number="2120"></td>
        <td id="LC2120" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>fn</span>: <span class=pl-s1>hide</span></td>
      </tr>
      <tr>
        <td id="L2121" class="blob-num js-line-number" data-line-number="2121"></td>
        <td id="LC2121" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L2122" class="blob-num js-line-number" data-line-number="2122"></td>
        <td id="LC2122" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2123" class="blob-num js-line-number" data-line-number="2123"></td>
        <td id="LC2123" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L2124" class="blob-num js-line-number" data-line-number="2124"></td>
        <td id="LC2124" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * Computes the style that will be applied to the popper element to gets</span></td>
      </tr>
      <tr>
        <td id="L2125" class="blob-num js-line-number" data-line-number="2125"></td>
        <td id="LC2125" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * properly positioned.</span></td>
      </tr>
      <tr>
        <td id="L2126" class="blob-num js-line-number" data-line-number="2126"></td>
        <td id="LC2126" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   *</span></td>
      </tr>
      <tr>
        <td id="L2127" class="blob-num js-line-number" data-line-number="2127"></td>
        <td id="LC2127" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * Note that this modifier will not touch the DOM, it just prepares the styles</span></td>
      </tr>
      <tr>
        <td id="L2128" class="blob-num js-line-number" data-line-number="2128"></td>
        <td id="LC2128" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * so that `applyStyle` modifier can apply it. This separation is useful</span></td>
      </tr>
      <tr>
        <td id="L2129" class="blob-num js-line-number" data-line-number="2129"></td>
        <td id="LC2129" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * in case you need to replace `applyStyle` with a custom implementation.</span></td>
      </tr>
      <tr>
        <td id="L2130" class="blob-num js-line-number" data-line-number="2130"></td>
        <td id="LC2130" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   *</span></td>
      </tr>
      <tr>
        <td id="L2131" class="blob-num js-line-number" data-line-number="2131"></td>
        <td id="LC2131" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * This modifier has `850` as `order` value to maintain backward compatibility</span></td>
      </tr>
      <tr>
        <td id="L2132" class="blob-num js-line-number" data-line-number="2132"></td>
        <td id="LC2132" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * with previous versions of Popper.js. Expect the modifiers ordering method</span></td>
      </tr>
      <tr>
        <td id="L2133" class="blob-num js-line-number" data-line-number="2133"></td>
        <td id="LC2133" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * to change in future major versions of the library.</span></td>
      </tr>
      <tr>
        <td id="L2134" class="blob-num js-line-number" data-line-number="2134"></td>
        <td id="LC2134" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   *</span></td>
      </tr>
      <tr>
        <td id="L2135" class="blob-num js-line-number" data-line-number="2135"></td>
        <td id="LC2135" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * <span class=pl-k>@memberof</span> modifiers</span></td>
      </tr>
      <tr>
        <td id="L2136" class="blob-num js-line-number" data-line-number="2136"></td>
        <td id="LC2136" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * <span class=pl-k>@inner</span></span></td>
      </tr>
      <tr>
        <td id="L2137" class="blob-num js-line-number" data-line-number="2137"></td>
        <td id="LC2137" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   */</span></td>
      </tr>
      <tr>
        <td id="L2138" class="blob-num js-line-number" data-line-number="2138"></td>
        <td id="LC2138" class="blob-code blob-code-inner js-file-line">  <span class=pl-c1>computeStyle</span>: <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L2139" class="blob-num js-line-number" data-line-number="2139"></td>
        <td id="LC2139" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>/** <span class=pl-k>@prop</span> {number} order=850 - Index used to define the order of execution */</span></td>
      </tr>
      <tr>
        <td id="L2140" class="blob-num js-line-number" data-line-number="2140"></td>
        <td id="LC2140" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>order</span>: <span class=pl-c1>850</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L2141" class="blob-num js-line-number" data-line-number="2141"></td>
        <td id="LC2141" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>/** <span class=pl-k>@prop</span> {Boolean} enabled=true - Whether the modifier is enabled or not */</span></td>
      </tr>
      <tr>
        <td id="L2142" class="blob-num js-line-number" data-line-number="2142"></td>
        <td id="LC2142" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>enabled</span>: <span class=pl-c1>true</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L2143" class="blob-num js-line-number" data-line-number="2143"></td>
        <td id="LC2143" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>/** <span class=pl-k>@prop</span> {ModifierFn} */</span></td>
      </tr>
      <tr>
        <td id="L2144" class="blob-num js-line-number" data-line-number="2144"></td>
        <td id="LC2144" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>fn</span>: <span class=pl-s1>computeStyle</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L2145" class="blob-num js-line-number" data-line-number="2145"></td>
        <td id="LC2145" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L2146" class="blob-num js-line-number" data-line-number="2146"></td>
        <td id="LC2146" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@prop</span> {Boolean} gpuAcceleration=true</span></td>
      </tr>
      <tr>
        <td id="L2147" class="blob-num js-line-number" data-line-number="2147"></td>
        <td id="LC2147" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * If true, it uses the CSS 3d transformation to position the popper.</span></td>
      </tr>
      <tr>
        <td id="L2148" class="blob-num js-line-number" data-line-number="2148"></td>
        <td id="LC2148" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * Otherwise, it will use the `top` and `left` properties.</span></td>
      </tr>
      <tr>
        <td id="L2149" class="blob-num js-line-number" data-line-number="2149"></td>
        <td id="LC2149" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     */</span></td>
      </tr>
      <tr>
        <td id="L2150" class="blob-num js-line-number" data-line-number="2150"></td>
        <td id="LC2150" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>gpuAcceleration</span>: <span class=pl-c1>true</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L2151" class="blob-num js-line-number" data-line-number="2151"></td>
        <td id="LC2151" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L2152" class="blob-num js-line-number" data-line-number="2152"></td>
        <td id="LC2152" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@prop</span> {string} [x=&#39;bottom&#39;]</span></td>
      </tr>
      <tr>
        <td id="L2153" class="blob-num js-line-number" data-line-number="2153"></td>
        <td id="LC2153" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.</span></td>
      </tr>
      <tr>
        <td id="L2154" class="blob-num js-line-number" data-line-number="2154"></td>
        <td id="LC2154" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * Change this if your popper should grow in a direction different from `bottom`</span></td>
      </tr>
      <tr>
        <td id="L2155" class="blob-num js-line-number" data-line-number="2155"></td>
        <td id="LC2155" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     */</span></td>
      </tr>
      <tr>
        <td id="L2156" class="blob-num js-line-number" data-line-number="2156"></td>
        <td id="LC2156" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>x</span>: <span class=pl-s>&#39;bottom&#39;</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L2157" class="blob-num js-line-number" data-line-number="2157"></td>
        <td id="LC2157" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L2158" class="blob-num js-line-number" data-line-number="2158"></td>
        <td id="LC2158" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@prop</span> {string} [x=&#39;left&#39;]</span></td>
      </tr>
      <tr>
        <td id="L2159" class="blob-num js-line-number" data-line-number="2159"></td>
        <td id="LC2159" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.</span></td>
      </tr>
      <tr>
        <td id="L2160" class="blob-num js-line-number" data-line-number="2160"></td>
        <td id="LC2160" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * Change this if your popper should grow in a direction different from `right`</span></td>
      </tr>
      <tr>
        <td id="L2161" class="blob-num js-line-number" data-line-number="2161"></td>
        <td id="LC2161" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     */</span></td>
      </tr>
      <tr>
        <td id="L2162" class="blob-num js-line-number" data-line-number="2162"></td>
        <td id="LC2162" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>y</span>: <span class=pl-s>&#39;right&#39;</span></td>
      </tr>
      <tr>
        <td id="L2163" class="blob-num js-line-number" data-line-number="2163"></td>
        <td id="LC2163" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L2164" class="blob-num js-line-number" data-line-number="2164"></td>
        <td id="LC2164" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2165" class="blob-num js-line-number" data-line-number="2165"></td>
        <td id="LC2165" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L2166" class="blob-num js-line-number" data-line-number="2166"></td>
        <td id="LC2166" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * Applies the computed styles to the popper element.</span></td>
      </tr>
      <tr>
        <td id="L2167" class="blob-num js-line-number" data-line-number="2167"></td>
        <td id="LC2167" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   *</span></td>
      </tr>
      <tr>
        <td id="L2168" class="blob-num js-line-number" data-line-number="2168"></td>
        <td id="LC2168" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * All the DOM manipulations are limited to this modifier. This is useful in case</span></td>
      </tr>
      <tr>
        <td id="L2169" class="blob-num js-line-number" data-line-number="2169"></td>
        <td id="LC2169" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * you want to integrate Popper.js inside a framework or view library and you</span></td>
      </tr>
      <tr>
        <td id="L2170" class="blob-num js-line-number" data-line-number="2170"></td>
        <td id="LC2170" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * want to delegate all the DOM manipulations to it.</span></td>
      </tr>
      <tr>
        <td id="L2171" class="blob-num js-line-number" data-line-number="2171"></td>
        <td id="LC2171" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   *</span></td>
      </tr>
      <tr>
        <td id="L2172" class="blob-num js-line-number" data-line-number="2172"></td>
        <td id="LC2172" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * Note that if you disable this modifier, you must make sure the popper element</span></td>
      </tr>
      <tr>
        <td id="L2173" class="blob-num js-line-number" data-line-number="2173"></td>
        <td id="LC2173" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * has its position set to `absolute` before Popper.js can do its work!</span></td>
      </tr>
      <tr>
        <td id="L2174" class="blob-num js-line-number" data-line-number="2174"></td>
        <td id="LC2174" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   *</span></td>
      </tr>
      <tr>
        <td id="L2175" class="blob-num js-line-number" data-line-number="2175"></td>
        <td id="LC2175" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * Just disable this modifier and define you own to achieve the desired effect.</span></td>
      </tr>
      <tr>
        <td id="L2176" class="blob-num js-line-number" data-line-number="2176"></td>
        <td id="LC2176" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   *</span></td>
      </tr>
      <tr>
        <td id="L2177" class="blob-num js-line-number" data-line-number="2177"></td>
        <td id="LC2177" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * <span class=pl-k>@memberof</span> modifiers</span></td>
      </tr>
      <tr>
        <td id="L2178" class="blob-num js-line-number" data-line-number="2178"></td>
        <td id="LC2178" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * <span class=pl-k>@inner</span></span></td>
      </tr>
      <tr>
        <td id="L2179" class="blob-num js-line-number" data-line-number="2179"></td>
        <td id="LC2179" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   */</span></td>
      </tr>
      <tr>
        <td id="L2180" class="blob-num js-line-number" data-line-number="2180"></td>
        <td id="LC2180" class="blob-code blob-code-inner js-file-line">  <span class=pl-c1>applyStyle</span>: <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L2181" class="blob-num js-line-number" data-line-number="2181"></td>
        <td id="LC2181" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>/** <span class=pl-k>@prop</span> {number} order=900 - Index used to define the order of execution */</span></td>
      </tr>
      <tr>
        <td id="L2182" class="blob-num js-line-number" data-line-number="2182"></td>
        <td id="LC2182" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>order</span>: <span class=pl-c1>900</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L2183" class="blob-num js-line-number" data-line-number="2183"></td>
        <td id="LC2183" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>/** <span class=pl-k>@prop</span> {Boolean} enabled=true - Whether the modifier is enabled or not */</span></td>
      </tr>
      <tr>
        <td id="L2184" class="blob-num js-line-number" data-line-number="2184"></td>
        <td id="LC2184" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>enabled</span>: <span class=pl-c1>true</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L2185" class="blob-num js-line-number" data-line-number="2185"></td>
        <td id="LC2185" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>/** <span class=pl-k>@prop</span> {ModifierFn} */</span></td>
      </tr>
      <tr>
        <td id="L2186" class="blob-num js-line-number" data-line-number="2186"></td>
        <td id="LC2186" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>fn</span>: <span class=pl-s1>applyStyle</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L2187" class="blob-num js-line-number" data-line-number="2187"></td>
        <td id="LC2187" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>/** <span class=pl-k>@prop</span> {Function} */</span></td>
      </tr>
      <tr>
        <td id="L2188" class="blob-num js-line-number" data-line-number="2188"></td>
        <td id="LC2188" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>onLoad</span>: <span class=pl-s1>applyStyleOnLoad</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L2189" class="blob-num js-line-number" data-line-number="2189"></td>
        <td id="LC2189" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L2190" class="blob-num js-line-number" data-line-number="2190"></td>
        <td id="LC2190" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@deprecated</span> since version 1.10.0, the property moved to `computeStyle` modifier</span></td>
      </tr>
      <tr>
        <td id="L2191" class="blob-num js-line-number" data-line-number="2191"></td>
        <td id="LC2191" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@prop</span> {Boolean} gpuAcceleration=true</span></td>
      </tr>
      <tr>
        <td id="L2192" class="blob-num js-line-number" data-line-number="2192"></td>
        <td id="LC2192" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * If true, it uses the CSS 3d transformation to position the popper.</span></td>
      </tr>
      <tr>
        <td id="L2193" class="blob-num js-line-number" data-line-number="2193"></td>
        <td id="LC2193" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * Otherwise, it will use the `top` and `left` properties.</span></td>
      </tr>
      <tr>
        <td id="L2194" class="blob-num js-line-number" data-line-number="2194"></td>
        <td id="LC2194" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     */</span></td>
      </tr>
      <tr>
        <td id="L2195" class="blob-num js-line-number" data-line-number="2195"></td>
        <td id="LC2195" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>gpuAcceleration</span>: undefined</td>
      </tr>
      <tr>
        <td id="L2196" class="blob-num js-line-number" data-line-number="2196"></td>
        <td id="LC2196" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L2197" class="blob-num js-line-number" data-line-number="2197"></td>
        <td id="LC2197" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L2198" class="blob-num js-line-number" data-line-number="2198"></td>
        <td id="LC2198" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2199" class="blob-num js-line-number" data-line-number="2199"></td>
        <td id="LC2199" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L2200" class="blob-num js-line-number" data-line-number="2200"></td>
        <td id="LC2200" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * The `dataObject` is an object containing all the informations used by Popper.js</span></td>
      </tr>
      <tr>
        <td id="L2201" class="blob-num js-line-number" data-line-number="2201"></td>
        <td id="LC2201" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * this object get passed to modifiers and to the `onCreate` and `onUpdate` callbacks.</span></td>
      </tr>
      <tr>
        <td id="L2202" class="blob-num js-line-number" data-line-number="2202"></td>
        <td id="LC2202" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@name</span> dataObject</span></td>
      </tr>
      <tr>
        <td id="L2203" class="blob-num js-line-number" data-line-number="2203"></td>
        <td id="LC2203" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@property</span> {<span class=pl-smi>Object</span>} data.instance The Popper.js instance</span></td>
      </tr>
      <tr>
        <td id="L2204" class="blob-num js-line-number" data-line-number="2204"></td>
        <td id="LC2204" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@property</span> {<span class=pl-smi>String</span>} data.placement Placement applied to popper</span></td>
      </tr>
      <tr>
        <td id="L2205" class="blob-num js-line-number" data-line-number="2205"></td>
        <td id="LC2205" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@property</span> {<span class=pl-smi>String</span>} data.originalPlacement Placement originally defined on init</span></td>
      </tr>
      <tr>
        <td id="L2206" class="blob-num js-line-number" data-line-number="2206"></td>
        <td id="LC2206" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@property</span> {<span class=pl-smi>Boolean</span>} data.flipped True if popper has been flipped by flip modifier</span></td>
      </tr>
      <tr>
        <td id="L2207" class="blob-num js-line-number" data-line-number="2207"></td>
        <td id="LC2207" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@property</span> {<span class=pl-smi>Boolean</span>} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper.</span></td>
      </tr>
      <tr>
        <td id="L2208" class="blob-num js-line-number" data-line-number="2208"></td>
        <td id="LC2208" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@property</span> {<span class=pl-smi>HTMLElement</span>} data.arrowElement Node used as arrow by arrow modifier</span></td>
      </tr>
      <tr>
        <td id="L2209" class="blob-num js-line-number" data-line-number="2209"></td>
        <td id="LC2209" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@property</span> {<span class=pl-smi>Object</span>} data.styles Any CSS property defined here will be applied to the popper, it expects the JavaScript nomenclature (eg. `marginBottom`)</span></td>
      </tr>
      <tr>
        <td id="L2210" class="blob-num js-line-number" data-line-number="2210"></td>
        <td id="LC2210" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@property</span> {<span class=pl-smi>Object</span>} data.arrowStyles Any CSS property defined here will be applied to the popper arrow, it expects the JavaScript nomenclature (eg. `marginBottom`)</span></td>
      </tr>
      <tr>
        <td id="L2211" class="blob-num js-line-number" data-line-number="2211"></td>
        <td id="LC2211" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@property</span> {<span class=pl-smi>Object</span>} data.boundaries Offsets of the popper boundaries</span></td>
      </tr>
      <tr>
        <td id="L2212" class="blob-num js-line-number" data-line-number="2212"></td>
        <td id="LC2212" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@property</span> {<span class=pl-smi>Object</span>} data.offsets The measurements of popper, reference and arrow elements.</span></td>
      </tr>
      <tr>
        <td id="L2213" class="blob-num js-line-number" data-line-number="2213"></td>
        <td id="LC2213" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@property</span> {<span class=pl-smi>Object</span>} data.offsets.popper `top`, `left`, `width`, `height` values</span></td>
      </tr>
      <tr>
        <td id="L2214" class="blob-num js-line-number" data-line-number="2214"></td>
        <td id="LC2214" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@property</span> {<span class=pl-smi>Object</span>} data.offsets.reference `top`, `left`, `width`, `height` values</span></td>
      </tr>
      <tr>
        <td id="L2215" class="blob-num js-line-number" data-line-number="2215"></td>
        <td id="LC2215" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@property</span> {<span class=pl-smi>Object</span>} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0</span></td>
      </tr>
      <tr>
        <td id="L2216" class="blob-num js-line-number" data-line-number="2216"></td>
        <td id="LC2216" class="blob-code blob-code-inner js-file-line"><span class=pl-c> */</span></td>
      </tr>
      <tr>
        <td id="L2217" class="blob-num js-line-number" data-line-number="2217"></td>
        <td id="LC2217" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2218" class="blob-num js-line-number" data-line-number="2218"></td>
        <td id="LC2218" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L2219" class="blob-num js-line-number" data-line-number="2219"></td>
        <td id="LC2219" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * Default options provided to Popper.js constructor.&lt;br /&gt;</span></td>
      </tr>
      <tr>
        <td id="L2220" class="blob-num js-line-number" data-line-number="2220"></td>
        <td id="LC2220" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * These can be overriden using the `options` argument of Popper.js.&lt;br /&gt;</span></td>
      </tr>
      <tr>
        <td id="L2221" class="blob-num js-line-number" data-line-number="2221"></td>
        <td id="LC2221" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * To override an option, simply pass as 3rd argument an object with the same</span></td>
      </tr>
      <tr>
        <td id="L2222" class="blob-num js-line-number" data-line-number="2222"></td>
        <td id="LC2222" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * structure of this object, example:</span></td>
      </tr>
      <tr>
        <td id="L2223" class="blob-num js-line-number" data-line-number="2223"></td>
        <td id="LC2223" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * ```</span></td>
      </tr>
      <tr>
        <td id="L2224" class="blob-num js-line-number" data-line-number="2224"></td>
        <td id="LC2224" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * new Popper(ref, pop, {</span></td>
      </tr>
      <tr>
        <td id="L2225" class="blob-num js-line-number" data-line-number="2225"></td>
        <td id="LC2225" class="blob-code blob-code-inner js-file-line"><span class=pl-c> *   modifiers: {</span></td>
      </tr>
      <tr>
        <td id="L2226" class="blob-num js-line-number" data-line-number="2226"></td>
        <td id="LC2226" class="blob-code blob-code-inner js-file-line"><span class=pl-c> *     preventOverflow: { enabled: false }</span></td>
      </tr>
      <tr>
        <td id="L2227" class="blob-num js-line-number" data-line-number="2227"></td>
        <td id="LC2227" class="blob-code blob-code-inner js-file-line"><span class=pl-c> *   }</span></td>
      </tr>
      <tr>
        <td id="L2228" class="blob-num js-line-number" data-line-number="2228"></td>
        <td id="LC2228" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * })</span></td>
      </tr>
      <tr>
        <td id="L2229" class="blob-num js-line-number" data-line-number="2229"></td>
        <td id="LC2229" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * ```</span></td>
      </tr>
      <tr>
        <td id="L2230" class="blob-num js-line-number" data-line-number="2230"></td>
        <td id="LC2230" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@type</span> {Object}</span></td>
      </tr>
      <tr>
        <td id="L2231" class="blob-num js-line-number" data-line-number="2231"></td>
        <td id="LC2231" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@static</span></span></td>
      </tr>
      <tr>
        <td id="L2232" class="blob-num js-line-number" data-line-number="2232"></td>
        <td id="LC2232" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@memberof</span> Popper</span></td>
      </tr>
      <tr>
        <td id="L2233" class="blob-num js-line-number" data-line-number="2233"></td>
        <td id="LC2233" class="blob-code blob-code-inner js-file-line"><span class=pl-c> */</span></td>
      </tr>
      <tr>
        <td id="L2234" class="blob-num js-line-number" data-line-number="2234"></td>
        <td id="LC2234" class="blob-code blob-code-inner js-file-line"><span class=pl-k>var</span> <span class=pl-v>Defaults</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L2235" class="blob-num js-line-number" data-line-number="2235"></td>
        <td id="LC2235" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L2236" class="blob-num js-line-number" data-line-number="2236"></td>
        <td id="LC2236" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * Popper&#39;s placement</span></td>
      </tr>
      <tr>
        <td id="L2237" class="blob-num js-line-number" data-line-number="2237"></td>
        <td id="LC2237" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * <span class=pl-k>@prop</span> {Popper.placements} placement=&#39;bottom&#39;</span></td>
      </tr>
      <tr>
        <td id="L2238" class="blob-num js-line-number" data-line-number="2238"></td>
        <td id="LC2238" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   */</span></td>
      </tr>
      <tr>
        <td id="L2239" class="blob-num js-line-number" data-line-number="2239"></td>
        <td id="LC2239" class="blob-code blob-code-inner js-file-line">  <span class=pl-c1>placement</span>: <span class=pl-s>&#39;bottom&#39;</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L2240" class="blob-num js-line-number" data-line-number="2240"></td>
        <td id="LC2240" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2241" class="blob-num js-line-number" data-line-number="2241"></td>
        <td id="LC2241" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L2242" class="blob-num js-line-number" data-line-number="2242"></td>
        <td id="LC2242" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * Whether events (resize, scroll) are initially enabled</span></td>
      </tr>
      <tr>
        <td id="L2243" class="blob-num js-line-number" data-line-number="2243"></td>
        <td id="LC2243" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * <span class=pl-k>@prop</span> {Boolean} eventsEnabled=true</span></td>
      </tr>
      <tr>
        <td id="L2244" class="blob-num js-line-number" data-line-number="2244"></td>
        <td id="LC2244" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   */</span></td>
      </tr>
      <tr>
        <td id="L2245" class="blob-num js-line-number" data-line-number="2245"></td>
        <td id="LC2245" class="blob-code blob-code-inner js-file-line">  <span class=pl-c1>eventsEnabled</span>: <span class=pl-c1>true</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L2246" class="blob-num js-line-number" data-line-number="2246"></td>
        <td id="LC2246" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2247" class="blob-num js-line-number" data-line-number="2247"></td>
        <td id="LC2247" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L2248" class="blob-num js-line-number" data-line-number="2248"></td>
        <td id="LC2248" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * Set to true if you want to automatically remove the popper when</span></td>
      </tr>
      <tr>
        <td id="L2249" class="blob-num js-line-number" data-line-number="2249"></td>
        <td id="LC2249" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * you call the `destroy` method.</span></td>
      </tr>
      <tr>
        <td id="L2250" class="blob-num js-line-number" data-line-number="2250"></td>
        <td id="LC2250" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * <span class=pl-k>@prop</span> {Boolean} removeOnDestroy=false</span></td>
      </tr>
      <tr>
        <td id="L2251" class="blob-num js-line-number" data-line-number="2251"></td>
        <td id="LC2251" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   */</span></td>
      </tr>
      <tr>
        <td id="L2252" class="blob-num js-line-number" data-line-number="2252"></td>
        <td id="LC2252" class="blob-code blob-code-inner js-file-line">  <span class=pl-c1>removeOnDestroy</span>: <span class=pl-c1>false</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L2253" class="blob-num js-line-number" data-line-number="2253"></td>
        <td id="LC2253" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2254" class="blob-num js-line-number" data-line-number="2254"></td>
        <td id="LC2254" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L2255" class="blob-num js-line-number" data-line-number="2255"></td>
        <td id="LC2255" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * Callback called when the popper is created.&lt;br /&gt;</span></td>
      </tr>
      <tr>
        <td id="L2256" class="blob-num js-line-number" data-line-number="2256"></td>
        <td id="LC2256" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * By default, is set to no-op.&lt;br /&gt;</span></td>
      </tr>
      <tr>
        <td id="L2257" class="blob-num js-line-number" data-line-number="2257"></td>
        <td id="LC2257" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * Access Popper.js instance with `data.instance`.</span></td>
      </tr>
      <tr>
        <td id="L2258" class="blob-num js-line-number" data-line-number="2258"></td>
        <td id="LC2258" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * <span class=pl-k>@prop</span> {onCreate}</span></td>
      </tr>
      <tr>
        <td id="L2259" class="blob-num js-line-number" data-line-number="2259"></td>
        <td id="LC2259" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   */</span></td>
      </tr>
      <tr>
        <td id="L2260" class="blob-num js-line-number" data-line-number="2260"></td>
        <td id="LC2260" class="blob-code blob-code-inner js-file-line">  <span class=pl-en>onCreate</span>: <span class=pl-k>function</span> <span class=pl-en>onCreate</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L2261" class="blob-num js-line-number" data-line-number="2261"></td>
        <td id="LC2261" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2262" class="blob-num js-line-number" data-line-number="2262"></td>
        <td id="LC2262" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L2263" class="blob-num js-line-number" data-line-number="2263"></td>
        <td id="LC2263" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * Callback called when the popper is updated, this callback is not called</span></td>
      </tr>
      <tr>
        <td id="L2264" class="blob-num js-line-number" data-line-number="2264"></td>
        <td id="LC2264" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * on the initialization/creation of the popper, but only on subsequent</span></td>
      </tr>
      <tr>
        <td id="L2265" class="blob-num js-line-number" data-line-number="2265"></td>
        <td id="LC2265" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * updates.&lt;br /&gt;</span></td>
      </tr>
      <tr>
        <td id="L2266" class="blob-num js-line-number" data-line-number="2266"></td>
        <td id="LC2266" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * By default, is set to no-op.&lt;br /&gt;</span></td>
      </tr>
      <tr>
        <td id="L2267" class="blob-num js-line-number" data-line-number="2267"></td>
        <td id="LC2267" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * Access Popper.js instance with `data.instance`.</span></td>
      </tr>
      <tr>
        <td id="L2268" class="blob-num js-line-number" data-line-number="2268"></td>
        <td id="LC2268" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * <span class=pl-k>@prop</span> {onUpdate}</span></td>
      </tr>
      <tr>
        <td id="L2269" class="blob-num js-line-number" data-line-number="2269"></td>
        <td id="LC2269" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   */</span></td>
      </tr>
      <tr>
        <td id="L2270" class="blob-num js-line-number" data-line-number="2270"></td>
        <td id="LC2270" class="blob-code blob-code-inner js-file-line">  <span class=pl-en>onUpdate</span>: <span class=pl-k>function</span> <span class=pl-en>onUpdate</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L2271" class="blob-num js-line-number" data-line-number="2271"></td>
        <td id="LC2271" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2272" class="blob-num js-line-number" data-line-number="2272"></td>
        <td id="LC2272" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L2273" class="blob-num js-line-number" data-line-number="2273"></td>
        <td id="LC2273" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * List of modifiers used to modify the offsets before they are applied to the popper.</span></td>
      </tr>
      <tr>
        <td id="L2274" class="blob-num js-line-number" data-line-number="2274"></td>
        <td id="LC2274" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * They provide most of the functionalities of Popper.js</span></td>
      </tr>
      <tr>
        <td id="L2275" class="blob-num js-line-number" data-line-number="2275"></td>
        <td id="LC2275" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * <span class=pl-k>@prop</span> {modifiers}</span></td>
      </tr>
      <tr>
        <td id="L2276" class="blob-num js-line-number" data-line-number="2276"></td>
        <td id="LC2276" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   */</span></td>
      </tr>
      <tr>
        <td id="L2277" class="blob-num js-line-number" data-line-number="2277"></td>
        <td id="LC2277" class="blob-code blob-code-inner js-file-line">  <span class=pl-c1>modifiers</span>: <span class=pl-s1>modifiers</span></td>
      </tr>
      <tr>
        <td id="L2278" class="blob-num js-line-number" data-line-number="2278"></td>
        <td id="LC2278" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L2279" class="blob-num js-line-number" data-line-number="2279"></td>
        <td id="LC2279" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2280" class="blob-num js-line-number" data-line-number="2280"></td>
        <td id="LC2280" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L2281" class="blob-num js-line-number" data-line-number="2281"></td>
        <td id="LC2281" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@callback</span> onCreate</span></td>
      </tr>
      <tr>
        <td id="L2282" class="blob-num js-line-number" data-line-number="2282"></td>
        <td id="LC2282" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@param</span> {<span class=pl-smi>dataObject</span>} data</span></td>
      </tr>
      <tr>
        <td id="L2283" class="blob-num js-line-number" data-line-number="2283"></td>
        <td id="LC2283" class="blob-code blob-code-inner js-file-line"><span class=pl-c> */</span></td>
      </tr>
      <tr>
        <td id="L2284" class="blob-num js-line-number" data-line-number="2284"></td>
        <td id="LC2284" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2285" class="blob-num js-line-number" data-line-number="2285"></td>
        <td id="LC2285" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L2286" class="blob-num js-line-number" data-line-number="2286"></td>
        <td id="LC2286" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@callback</span> onUpdate</span></td>
      </tr>
      <tr>
        <td id="L2287" class="blob-num js-line-number" data-line-number="2287"></td>
        <td id="LC2287" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@param</span> {<span class=pl-smi>dataObject</span>} data</span></td>
      </tr>
      <tr>
        <td id="L2288" class="blob-num js-line-number" data-line-number="2288"></td>
        <td id="LC2288" class="blob-code blob-code-inner js-file-line"><span class=pl-c> */</span></td>
      </tr>
      <tr>
        <td id="L2289" class="blob-num js-line-number" data-line-number="2289"></td>
        <td id="LC2289" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2290" class="blob-num js-line-number" data-line-number="2290"></td>
        <td id="LC2290" class="blob-code blob-code-inner js-file-line"><span class=pl-c>// Utils</span></td>
      </tr>
      <tr>
        <td id="L2291" class="blob-num js-line-number" data-line-number="2291"></td>
        <td id="LC2291" class="blob-code blob-code-inner js-file-line"><span class=pl-c>// Methods</span></td>
      </tr>
      <tr>
        <td id="L2292" class="blob-num js-line-number" data-line-number="2292"></td>
        <td id="LC2292" class="blob-code blob-code-inner js-file-line"><span class=pl-k>var</span> <span class=pl-v>Popper</span> <span class=pl-c1>=</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L2293" class="blob-num js-line-number" data-line-number="2293"></td>
        <td id="LC2293" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L2294" class="blob-num js-line-number" data-line-number="2294"></td>
        <td id="LC2294" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * Create a new Popper.js instance</span></td>
      </tr>
      <tr>
        <td id="L2295" class="blob-num js-line-number" data-line-number="2295"></td>
        <td id="LC2295" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * <span class=pl-k>@class</span> Popper</span></td>
      </tr>
      <tr>
        <td id="L2296" class="blob-num js-line-number" data-line-number="2296"></td>
        <td id="LC2296" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * <span class=pl-k>@param</span> {<span class=pl-smi>HTMLElement|referenceObject</span>} reference - The reference element used to position the popper</span></td>
      </tr>
      <tr>
        <td id="L2297" class="blob-num js-line-number" data-line-number="2297"></td>
        <td id="LC2297" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * <span class=pl-k>@param</span> {<span class=pl-smi>HTMLElement</span>} popper - The HTML element used as popper.</span></td>
      </tr>
      <tr>
        <td id="L2298" class="blob-num js-line-number" data-line-number="2298"></td>
        <td id="LC2298" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * <span class=pl-k>@param</span> {<span class=pl-smi>Object</span>} options - Your custom options to override the ones defined in [Defaults](#defaults)</span></td>
      </tr>
      <tr>
        <td id="L2299" class="blob-num js-line-number" data-line-number="2299"></td>
        <td id="LC2299" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   * <span class=pl-k>@return</span> {<span class=pl-smi>Object</span>} instance - The generated Popper.js instance</span></td>
      </tr>
      <tr>
        <td id="L2300" class="blob-num js-line-number" data-line-number="2300"></td>
        <td id="LC2300" class="blob-code blob-code-inner js-file-line"><span class=pl-c>   */</span></td>
      </tr>
      <tr>
        <td id="L2301" class="blob-num js-line-number" data-line-number="2301"></td>
        <td id="LC2301" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>function</span> <span class=pl-v>Popper</span><span class=pl-kos>(</span><span class=pl-s1>reference</span><span class=pl-kos>,</span> <span class=pl-s1>popper</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L2302" class="blob-num js-line-number" data-line-number="2302"></td>
        <td id="LC2302" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>var</span> <span class=pl-s1>_this</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L2303" class="blob-num js-line-number" data-line-number="2303"></td>
        <td id="LC2303" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2304" class="blob-num js-line-number" data-line-number="2304"></td>
        <td id="LC2304" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>var</span> <span class=pl-s1>options</span> <span class=pl-c1>=</span> <span class=pl-smi>arguments</span><span class=pl-kos>.</span><span class=pl-c1>length</span> <span class=pl-c1>&gt;</span> <span class=pl-c1>2</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-smi>arguments</span><span class=pl-kos>[</span><span class=pl-c1>2</span><span class=pl-kos>]</span> !== undefined ? <span class=pl-smi>arguments</span><span class=pl-kos>[</span><span class=pl-c1>2</span><span class=pl-kos>]</span> : <span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L2305" class="blob-num js-line-number" data-line-number="2305"></td>
        <td id="LC2305" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>classCallCheck</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>,</span> <span class=pl-v>Popper</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L2306" class="blob-num js-line-number" data-line-number="2306"></td>
        <td id="LC2306" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2307" class="blob-num js-line-number" data-line-number="2307"></td>
        <td id="LC2307" class="blob-code blob-code-inner js-file-line">    <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>scheduleUpdate</span> <span class=pl-c1>=</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L2308" class="blob-num js-line-number" data-line-number="2308"></td>
        <td id="LC2308" class="blob-code blob-code-inner js-file-line">      <span class=pl-k>return</span> <span class=pl-en>requestAnimationFrame</span><span class=pl-kos>(</span><span class=pl-s1>_this</span><span class=pl-kos>.</span><span class=pl-c1>update</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L2309" class="blob-num js-line-number" data-line-number="2309"></td>
        <td id="LC2309" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L2310" class="blob-num js-line-number" data-line-number="2310"></td>
        <td id="LC2310" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2311" class="blob-num js-line-number" data-line-number="2311"></td>
        <td id="LC2311" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>// make update() debounced, so that it only runs at most once-per-tick</span></td>
      </tr>
      <tr>
        <td id="L2312" class="blob-num js-line-number" data-line-number="2312"></td>
        <td id="LC2312" class="blob-code blob-code-inner js-file-line">    <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>update</span> <span class=pl-c1>=</span> <span class=pl-s1>debounce</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>update</span><span class=pl-kos>.</span><span class=pl-en>bind</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L2313" class="blob-num js-line-number" data-line-number="2313"></td>
        <td id="LC2313" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2314" class="blob-num js-line-number" data-line-number="2314"></td>
        <td id="LC2314" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>// with {} we create a new object with the options inside it</span></td>
      </tr>
      <tr>
        <td id="L2315" class="blob-num js-line-number" data-line-number="2315"></td>
        <td id="LC2315" class="blob-code blob-code-inner js-file-line">    <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>options</span> <span class=pl-c1>=</span> <span class=pl-s1>_extends</span><span class=pl-kos>(</span><span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>,</span> <span class=pl-v>Popper</span><span class=pl-kos>.</span><span class=pl-c1>Defaults</span><span class=pl-kos>,</span> <span class=pl-s1>options</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L2316" class="blob-num js-line-number" data-line-number="2316"></td>
        <td id="LC2316" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2317" class="blob-num js-line-number" data-line-number="2317"></td>
        <td id="LC2317" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>// init state</span></td>
      </tr>
      <tr>
        <td id="L2318" class="blob-num js-line-number" data-line-number="2318"></td>
        <td id="LC2318" class="blob-code blob-code-inner js-file-line">    <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>state</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L2319" class="blob-num js-line-number" data-line-number="2319"></td>
        <td id="LC2319" class="blob-code blob-code-inner js-file-line">      <span class=pl-c1>isDestroyed</span>: <span class=pl-c1>false</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L2320" class="blob-num js-line-number" data-line-number="2320"></td>
        <td id="LC2320" class="blob-code blob-code-inner js-file-line">      <span class=pl-c1>isCreated</span>: <span class=pl-c1>false</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L2321" class="blob-num js-line-number" data-line-number="2321"></td>
        <td id="LC2321" class="blob-code blob-code-inner js-file-line">      <span class=pl-c1>scrollParents</span>: <span class=pl-kos>[</span><span class=pl-kos>]</span></td>
      </tr>
      <tr>
        <td id="L2322" class="blob-num js-line-number" data-line-number="2322"></td>
        <td id="LC2322" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L2323" class="blob-num js-line-number" data-line-number="2323"></td>
        <td id="LC2323" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2324" class="blob-num js-line-number" data-line-number="2324"></td>
        <td id="LC2324" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>// get reference and popper elements (allow jQuery wrappers)</span></td>
      </tr>
      <tr>
        <td id="L2325" class="blob-num js-line-number" data-line-number="2325"></td>
        <td id="LC2325" class="blob-code blob-code-inner js-file-line">    <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>reference</span> <span class=pl-c1>=</span> <span class=pl-s1>reference</span><span class=pl-kos>.</span><span class=pl-c1>jquery</span> ? <span class=pl-s1>reference</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span> : <span class=pl-s1>reference</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L2326" class="blob-num js-line-number" data-line-number="2326"></td>
        <td id="LC2326" class="blob-code blob-code-inner js-file-line">    <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>popper</span> <span class=pl-c1>=</span> <span class=pl-s1>popper</span><span class=pl-kos>.</span><span class=pl-c1>jquery</span> ? <span class=pl-s1>popper</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span> : <span class=pl-s1>popper</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L2327" class="blob-num js-line-number" data-line-number="2327"></td>
        <td id="LC2327" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2328" class="blob-num js-line-number" data-line-number="2328"></td>
        <td id="LC2328" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>// Deep merge modifiers options</span></td>
      </tr>
      <tr>
        <td id="L2329" class="blob-num js-line-number" data-line-number="2329"></td>
        <td id="LC2329" class="blob-code blob-code-inner js-file-line">    <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>options</span><span class=pl-kos>.</span><span class=pl-c1>modifiers</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L2330" class="blob-num js-line-number" data-line-number="2330"></td>
        <td id="LC2330" class="blob-code blob-code-inner js-file-line">    <span class=pl-v>Object</span><span class=pl-kos>.</span><span class=pl-en>keys</span><span class=pl-kos>(</span><span class=pl-s1>_extends</span><span class=pl-kos>(</span><span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>,</span> <span class=pl-v>Popper</span><span class=pl-kos>.</span><span class=pl-c1>Defaults</span><span class=pl-kos>.</span><span class=pl-c1>modifiers</span><span class=pl-kos>,</span> <span class=pl-s1>options</span><span class=pl-kos>.</span><span class=pl-c1>modifiers</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>forEach</span><span class=pl-kos>(</span><span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>name</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L2331" class="blob-num js-line-number" data-line-number="2331"></td>
        <td id="LC2331" class="blob-code blob-code-inner js-file-line">      <span class=pl-s1>_this</span><span class=pl-kos>.</span><span class=pl-c1>options</span><span class=pl-kos>.</span><span class=pl-c1>modifiers</span><span class=pl-kos>[</span><span class=pl-s1>name</span><span class=pl-kos>]</span> <span class=pl-c1>=</span> <span class=pl-s1>_extends</span><span class=pl-kos>(</span><span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>,</span> <span class=pl-v>Popper</span><span class=pl-kos>.</span><span class=pl-c1>Defaults</span><span class=pl-kos>.</span><span class=pl-c1>modifiers</span><span class=pl-kos>[</span><span class=pl-s1>name</span><span class=pl-kos>]</span> <span class=pl-c1>||</span> <span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>,</span> <span class=pl-s1>options</span><span class=pl-kos>.</span><span class=pl-c1>modifiers</span> ? <span class=pl-s1>options</span><span class=pl-kos>.</span><span class=pl-c1>modifiers</span><span class=pl-kos>[</span><span class=pl-s1>name</span><span class=pl-kos>]</span> : <span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L2332" class="blob-num js-line-number" data-line-number="2332"></td>
        <td id="LC2332" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L2333" class="blob-num js-line-number" data-line-number="2333"></td>
        <td id="LC2333" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2334" class="blob-num js-line-number" data-line-number="2334"></td>
        <td id="LC2334" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>// Refactoring modifiers&#39; list (Object =&gt; Array)</span></td>
      </tr>
      <tr>
        <td id="L2335" class="blob-num js-line-number" data-line-number="2335"></td>
        <td id="LC2335" class="blob-code blob-code-inner js-file-line">    <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>modifiers</span> <span class=pl-c1>=</span> <span class=pl-v>Object</span><span class=pl-kos>.</span><span class=pl-en>keys</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>options</span><span class=pl-kos>.</span><span class=pl-c1>modifiers</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>map</span><span class=pl-kos>(</span><span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>name</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L2336" class="blob-num js-line-number" data-line-number="2336"></td>
        <td id="LC2336" class="blob-code blob-code-inner js-file-line">      <span class=pl-k>return</span> <span class=pl-s1>_extends</span><span class=pl-kos>(</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L2337" class="blob-num js-line-number" data-line-number="2337"></td>
        <td id="LC2337" class="blob-code blob-code-inner js-file-line">        <span class=pl-c1>name</span>: <span class=pl-s1>name</span></td>
      </tr>
      <tr>
        <td id="L2338" class="blob-num js-line-number" data-line-number="2338"></td>
        <td id="LC2338" class="blob-code blob-code-inner js-file-line">      <span class=pl-kos>}</span><span class=pl-kos>,</span> <span class=pl-s1>_this</span><span class=pl-kos>.</span><span class=pl-c1>options</span><span class=pl-kos>.</span><span class=pl-c1>modifiers</span><span class=pl-kos>[</span><span class=pl-s1>name</span><span class=pl-kos>]</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L2339" class="blob-num js-line-number" data-line-number="2339"></td>
        <td id="LC2339" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L2340" class="blob-num js-line-number" data-line-number="2340"></td>
        <td id="LC2340" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>// sort the modifiers by order</span></td>
      </tr>
      <tr>
        <td id="L2341" class="blob-num js-line-number" data-line-number="2341"></td>
        <td id="LC2341" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>.</span><span class=pl-en>sort</span><span class=pl-kos>(</span><span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>a</span><span class=pl-kos>,</span> <span class=pl-s1>b</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L2342" class="blob-num js-line-number" data-line-number="2342"></td>
        <td id="LC2342" class="blob-code blob-code-inner js-file-line">      <span class=pl-k>return</span> <span class=pl-s1>a</span><span class=pl-kos>.</span><span class=pl-c1>order</span> <span class=pl-c1>-</span> <span class=pl-s1>b</span><span class=pl-kos>.</span><span class=pl-c1>order</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L2343" class="blob-num js-line-number" data-line-number="2343"></td>
        <td id="LC2343" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L2344" class="blob-num js-line-number" data-line-number="2344"></td>
        <td id="LC2344" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2345" class="blob-num js-line-number" data-line-number="2345"></td>
        <td id="LC2345" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>// modifiers have the ability to execute arbitrary code when Popper.js get inited</span></td>
      </tr>
      <tr>
        <td id="L2346" class="blob-num js-line-number" data-line-number="2346"></td>
        <td id="LC2346" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>// such code is executed in the same order of its modifier</span></td>
      </tr>
      <tr>
        <td id="L2347" class="blob-num js-line-number" data-line-number="2347"></td>
        <td id="LC2347" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>// they could add new properties to their options configuration</span></td>
      </tr>
      <tr>
        <td id="L2348" class="blob-num js-line-number" data-line-number="2348"></td>
        <td id="LC2348" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>// BE AWARE: don&#39;t add options to `options.modifiers.name` but to `modifierOptions`!</span></td>
      </tr>
      <tr>
        <td id="L2349" class="blob-num js-line-number" data-line-number="2349"></td>
        <td id="LC2349" class="blob-code blob-code-inner js-file-line">    <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>modifiers</span><span class=pl-kos>.</span><span class=pl-en>forEach</span><span class=pl-kos>(</span><span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>modifierOptions</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L2350" class="blob-num js-line-number" data-line-number="2350"></td>
        <td id="LC2350" class="blob-code blob-code-inner js-file-line">      <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>modifierOptions</span><span class=pl-kos>.</span><span class=pl-c1>enabled</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-en>isFunction</span><span class=pl-kos>(</span><span class=pl-s1>modifierOptions</span><span class=pl-kos>.</span><span class=pl-c1>onLoad</span><span class=pl-kos>)</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L2351" class="blob-num js-line-number" data-line-number="2351"></td>
        <td id="LC2351" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>modifierOptions</span><span class=pl-kos>.</span><span class=pl-en>onLoad</span><span class=pl-kos>(</span><span class=pl-s1>_this</span><span class=pl-kos>.</span><span class=pl-c1>reference</span><span class=pl-kos>,</span> <span class=pl-s1>_this</span><span class=pl-kos>.</span><span class=pl-c1>popper</span><span class=pl-kos>,</span> <span class=pl-s1>_this</span><span class=pl-kos>.</span><span class=pl-c1>options</span><span class=pl-kos>,</span> <span class=pl-s1>modifierOptions</span><span class=pl-kos>,</span> <span class=pl-s1>_this</span><span class=pl-kos>.</span><span class=pl-c1>state</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L2352" class="blob-num js-line-number" data-line-number="2352"></td>
        <td id="LC2352" class="blob-code blob-code-inner js-file-line">      <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L2353" class="blob-num js-line-number" data-line-number="2353"></td>
        <td id="LC2353" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L2354" class="blob-num js-line-number" data-line-number="2354"></td>
        <td id="LC2354" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2355" class="blob-num js-line-number" data-line-number="2355"></td>
        <td id="LC2355" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>// fire the first update to position the popper in the right place</span></td>
      </tr>
      <tr>
        <td id="L2356" class="blob-num js-line-number" data-line-number="2356"></td>
        <td id="LC2356" class="blob-code blob-code-inner js-file-line">    <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>update</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L2357" class="blob-num js-line-number" data-line-number="2357"></td>
        <td id="LC2357" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2358" class="blob-num js-line-number" data-line-number="2358"></td>
        <td id="LC2358" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>var</span> <span class=pl-s1>eventsEnabled</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>options</span><span class=pl-kos>.</span><span class=pl-c1>eventsEnabled</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L2359" class="blob-num js-line-number" data-line-number="2359"></td>
        <td id="LC2359" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>eventsEnabled</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L2360" class="blob-num js-line-number" data-line-number="2360"></td>
        <td id="LC2360" class="blob-code blob-code-inner js-file-line">      <span class=pl-c>// setup event listeners, they will take care of update the position in specific situations</span></td>
      </tr>
      <tr>
        <td id="L2361" class="blob-num js-line-number" data-line-number="2361"></td>
        <td id="LC2361" class="blob-code blob-code-inner js-file-line">      <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>enableEventListeners</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L2362" class="blob-num js-line-number" data-line-number="2362"></td>
        <td id="LC2362" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L2363" class="blob-num js-line-number" data-line-number="2363"></td>
        <td id="LC2363" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2364" class="blob-num js-line-number" data-line-number="2364"></td>
        <td id="LC2364" class="blob-code blob-code-inner js-file-line">    <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>state</span><span class=pl-kos>.</span><span class=pl-c1>eventsEnabled</span> <span class=pl-c1>=</span> <span class=pl-s1>eventsEnabled</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L2365" class="blob-num js-line-number" data-line-number="2365"></td>
        <td id="LC2365" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L2366" class="blob-num js-line-number" data-line-number="2366"></td>
        <td id="LC2366" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2367" class="blob-num js-line-number" data-line-number="2367"></td>
        <td id="LC2367" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// We can&#39;t use class properties because they don&#39;t get listed in the</span></td>
      </tr>
      <tr>
        <td id="L2368" class="blob-num js-line-number" data-line-number="2368"></td>
        <td id="LC2368" class="blob-code blob-code-inner js-file-line">  <span class=pl-c>// class prototype and break stuff like Sinon stubs</span></td>
      </tr>
      <tr>
        <td id="L2369" class="blob-num js-line-number" data-line-number="2369"></td>
        <td id="LC2369" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2370" class="blob-num js-line-number" data-line-number="2370"></td>
        <td id="LC2370" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2371" class="blob-num js-line-number" data-line-number="2371"></td>
        <td id="LC2371" class="blob-code blob-code-inner js-file-line">  <span class=pl-s1>createClass</span><span class=pl-kos>(</span><span class=pl-v>Popper</span><span class=pl-kos>,</span> <span class=pl-kos>[</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L2372" class="blob-num js-line-number" data-line-number="2372"></td>
        <td id="LC2372" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>key</span>: <span class=pl-s>&#39;update&#39;</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L2373" class="blob-num js-line-number" data-line-number="2373"></td>
        <td id="LC2373" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>value</span>: <span class=pl-k>function</span> <span class=pl-en>update$$1</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L2374" class="blob-num js-line-number" data-line-number="2374"></td>
        <td id="LC2374" class="blob-code blob-code-inner js-file-line">      <span class=pl-k>return</span> <span class=pl-s1>update</span><span class=pl-kos>.</span><span class=pl-en>call</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L2375" class="blob-num js-line-number" data-line-number="2375"></td>
        <td id="LC2375" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L2376" class="blob-num js-line-number" data-line-number="2376"></td>
        <td id="LC2376" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span><span class=pl-kos>,</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L2377" class="blob-num js-line-number" data-line-number="2377"></td>
        <td id="LC2377" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>key</span>: <span class=pl-s>&#39;destroy&#39;</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L2378" class="blob-num js-line-number" data-line-number="2378"></td>
        <td id="LC2378" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>value</span>: <span class=pl-k>function</span> <span class=pl-en>destroy$$1</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L2379" class="blob-num js-line-number" data-line-number="2379"></td>
        <td id="LC2379" class="blob-code blob-code-inner js-file-line">      <span class=pl-k>return</span> <span class=pl-s1>destroy</span><span class=pl-kos>.</span><span class=pl-en>call</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L2380" class="blob-num js-line-number" data-line-number="2380"></td>
        <td id="LC2380" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L2381" class="blob-num js-line-number" data-line-number="2381"></td>
        <td id="LC2381" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span><span class=pl-kos>,</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L2382" class="blob-num js-line-number" data-line-number="2382"></td>
        <td id="LC2382" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>key</span>: <span class=pl-s>&#39;enableEventListeners&#39;</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L2383" class="blob-num js-line-number" data-line-number="2383"></td>
        <td id="LC2383" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>value</span>: <span class=pl-k>function</span> <span class=pl-en>enableEventListeners$$1</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L2384" class="blob-num js-line-number" data-line-number="2384"></td>
        <td id="LC2384" class="blob-code blob-code-inner js-file-line">      <span class=pl-k>return</span> <span class=pl-s1>enableEventListeners</span><span class=pl-kos>.</span><span class=pl-en>call</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L2385" class="blob-num js-line-number" data-line-number="2385"></td>
        <td id="LC2385" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L2386" class="blob-num js-line-number" data-line-number="2386"></td>
        <td id="LC2386" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span><span class=pl-kos>,</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L2387" class="blob-num js-line-number" data-line-number="2387"></td>
        <td id="LC2387" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>key</span>: <span class=pl-s>&#39;disableEventListeners&#39;</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L2388" class="blob-num js-line-number" data-line-number="2388"></td>
        <td id="LC2388" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>value</span>: <span class=pl-k>function</span> <span class=pl-en>disableEventListeners$$1</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L2389" class="blob-num js-line-number" data-line-number="2389"></td>
        <td id="LC2389" class="blob-code blob-code-inner js-file-line">      <span class=pl-k>return</span> <span class=pl-s1>disableEventListeners</span><span class=pl-kos>.</span><span class=pl-en>call</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L2390" class="blob-num js-line-number" data-line-number="2390"></td>
        <td id="LC2390" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L2391" class="blob-num js-line-number" data-line-number="2391"></td>
        <td id="LC2391" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2392" class="blob-num js-line-number" data-line-number="2392"></td>
        <td id="LC2392" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L2393" class="blob-num js-line-number" data-line-number="2393"></td>
        <td id="LC2393" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * Schedule an update, it will run on the next UI update available</span></td>
      </tr>
      <tr>
        <td id="L2394" class="blob-num js-line-number" data-line-number="2394"></td>
        <td id="LC2394" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@method</span> scheduleUpdate</span></td>
      </tr>
      <tr>
        <td id="L2395" class="blob-num js-line-number" data-line-number="2395"></td>
        <td id="LC2395" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@memberof</span> Popper</span></td>
      </tr>
      <tr>
        <td id="L2396" class="blob-num js-line-number" data-line-number="2396"></td>
        <td id="LC2396" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     */</span></td>
      </tr>
      <tr>
        <td id="L2397" class="blob-num js-line-number" data-line-number="2397"></td>
        <td id="LC2397" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2398" class="blob-num js-line-number" data-line-number="2398"></td>
        <td id="LC2398" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2399" class="blob-num js-line-number" data-line-number="2399"></td>
        <td id="LC2399" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L2400" class="blob-num js-line-number" data-line-number="2400"></td>
        <td id="LC2400" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * Collection of utilities useful when writing custom modifiers.</span></td>
      </tr>
      <tr>
        <td id="L2401" class="blob-num js-line-number" data-line-number="2401"></td>
        <td id="LC2401" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * Starting from version 1.7, this method is available only if you</span></td>
      </tr>
      <tr>
        <td id="L2402" class="blob-num js-line-number" data-line-number="2402"></td>
        <td id="LC2402" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * include `popper-utils.js` before `popper.js`.</span></td>
      </tr>
      <tr>
        <td id="L2403" class="blob-num js-line-number" data-line-number="2403"></td>
        <td id="LC2403" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     *</span></td>
      </tr>
      <tr>
        <td id="L2404" class="blob-num js-line-number" data-line-number="2404"></td>
        <td id="LC2404" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * **DEPRECATION**: This way to access PopperUtils is deprecated</span></td>
      </tr>
      <tr>
        <td id="L2405" class="blob-num js-line-number" data-line-number="2405"></td>
        <td id="LC2405" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * and will be removed in v2! Use the PopperUtils module directly instead.</span></td>
      </tr>
      <tr>
        <td id="L2406" class="blob-num js-line-number" data-line-number="2406"></td>
        <td id="LC2406" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * Due to the high instability of the methods contained in Utils, we can&#39;t</span></td>
      </tr>
      <tr>
        <td id="L2407" class="blob-num js-line-number" data-line-number="2407"></td>
        <td id="LC2407" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * guarantee them to follow semver. Use them at your own risk!</span></td>
      </tr>
      <tr>
        <td id="L2408" class="blob-num js-line-number" data-line-number="2408"></td>
        <td id="LC2408" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@static</span></span></td>
      </tr>
      <tr>
        <td id="L2409" class="blob-num js-line-number" data-line-number="2409"></td>
        <td id="LC2409" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@private</span></span></td>
      </tr>
      <tr>
        <td id="L2410" class="blob-num js-line-number" data-line-number="2410"></td>
        <td id="LC2410" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@type</span> {Object}</span></td>
      </tr>
      <tr>
        <td id="L2411" class="blob-num js-line-number" data-line-number="2411"></td>
        <td id="LC2411" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@deprecated</span> since version 1.8</span></td>
      </tr>
      <tr>
        <td id="L2412" class="blob-num js-line-number" data-line-number="2412"></td>
        <td id="LC2412" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@member</span> Utils</span></td>
      </tr>
      <tr>
        <td id="L2413" class="blob-num js-line-number" data-line-number="2413"></td>
        <td id="LC2413" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@memberof</span> Popper</span></td>
      </tr>
      <tr>
        <td id="L2414" class="blob-num js-line-number" data-line-number="2414"></td>
        <td id="LC2414" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     */</span></td>
      </tr>
      <tr>
        <td id="L2415" class="blob-num js-line-number" data-line-number="2415"></td>
        <td id="LC2415" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2416" class="blob-num js-line-number" data-line-number="2416"></td>
        <td id="LC2416" class="blob-code blob-code-inner js-file-line">  <span class=pl-kos>}</span><span class=pl-kos>]</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L2417" class="blob-num js-line-number" data-line-number="2417"></td>
        <td id="LC2417" class="blob-code blob-code-inner js-file-line">  <span class=pl-k>return</span> <span class=pl-v>Popper</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L2418" class="blob-num js-line-number" data-line-number="2418"></td>
        <td id="LC2418" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L2419" class="blob-num js-line-number" data-line-number="2419"></td>
        <td id="LC2419" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2420" class="blob-num js-line-number" data-line-number="2420"></td>
        <td id="LC2420" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L2421" class="blob-num js-line-number" data-line-number="2421"></td>
        <td id="LC2421" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * The `referenceObject` is an object that provides an interface compatible with Popper.js</span></td>
      </tr>
      <tr>
        <td id="L2422" class="blob-num js-line-number" data-line-number="2422"></td>
        <td id="LC2422" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * and lets you use it as replacement of a real DOM node.&lt;br /&gt;</span></td>
      </tr>
      <tr>
        <td id="L2423" class="blob-num js-line-number" data-line-number="2423"></td>
        <td id="LC2423" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * You can use this method to position a popper relatively to a set of coordinates</span></td>
      </tr>
      <tr>
        <td id="L2424" class="blob-num js-line-number" data-line-number="2424"></td>
        <td id="LC2424" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * in case you don&#39;t have a DOM node to use as reference.</span></td>
      </tr>
      <tr>
        <td id="L2425" class="blob-num js-line-number" data-line-number="2425"></td>
        <td id="LC2425" class="blob-code blob-code-inner js-file-line"><span class=pl-c> *</span></td>
      </tr>
      <tr>
        <td id="L2426" class="blob-num js-line-number" data-line-number="2426"></td>
        <td id="LC2426" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * ```</span></td>
      </tr>
      <tr>
        <td id="L2427" class="blob-num js-line-number" data-line-number="2427"></td>
        <td id="LC2427" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * new Popper(referenceObject, popperNode);</span></td>
      </tr>
      <tr>
        <td id="L2428" class="blob-num js-line-number" data-line-number="2428"></td>
        <td id="LC2428" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * ```</span></td>
      </tr>
      <tr>
        <td id="L2429" class="blob-num js-line-number" data-line-number="2429"></td>
        <td id="LC2429" class="blob-code blob-code-inner js-file-line"><span class=pl-c> *</span></td>
      </tr>
      <tr>
        <td id="L2430" class="blob-num js-line-number" data-line-number="2430"></td>
        <td id="LC2430" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * NB: This feature isn&#39;t supported in Internet Explorer 10</span></td>
      </tr>
      <tr>
        <td id="L2431" class="blob-num js-line-number" data-line-number="2431"></td>
        <td id="LC2431" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@name</span> referenceObject</span></td>
      </tr>
      <tr>
        <td id="L2432" class="blob-num js-line-number" data-line-number="2432"></td>
        <td id="LC2432" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@property</span> {<span class=pl-smi>Function</span>} data.getBoundingClientRect</span></td>
      </tr>
      <tr>
        <td id="L2433" class="blob-num js-line-number" data-line-number="2433"></td>
        <td id="LC2433" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.</span></td>
      </tr>
      <tr>
        <td id="L2434" class="blob-num js-line-number" data-line-number="2434"></td>
        <td id="LC2434" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@property</span> {<span class=pl-smi>number</span>} data.clientWidth</span></td>
      </tr>
      <tr>
        <td id="L2435" class="blob-num js-line-number" data-line-number="2435"></td>
        <td id="LC2435" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * An ES6 getter that will return the width of the virtual reference element.</span></td>
      </tr>
      <tr>
        <td id="L2436" class="blob-num js-line-number" data-line-number="2436"></td>
        <td id="LC2436" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * <span class=pl-k>@property</span> {<span class=pl-smi>number</span>} data.clientHeight</span></td>
      </tr>
      <tr>
        <td id="L2437" class="blob-num js-line-number" data-line-number="2437"></td>
        <td id="LC2437" class="blob-code blob-code-inner js-file-line"><span class=pl-c> * An ES6 getter that will return the height of the virtual reference element.</span></td>
      </tr>
      <tr>
        <td id="L2438" class="blob-num js-line-number" data-line-number="2438"></td>
        <td id="LC2438" class="blob-code blob-code-inner js-file-line"><span class=pl-c> */</span></td>
      </tr>
      <tr>
        <td id="L2439" class="blob-num js-line-number" data-line-number="2439"></td>
        <td id="LC2439" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2440" class="blob-num js-line-number" data-line-number="2440"></td>
        <td id="LC2440" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2441" class="blob-num js-line-number" data-line-number="2441"></td>
        <td id="LC2441" class="blob-code blob-code-inner js-file-line"><span class=pl-v>Popper</span><span class=pl-kos>.</span><span class=pl-c1>Utils</span> <span class=pl-c1>=</span> <span class=pl-kos>(</span><span class=pl-k>typeof</span> <span class=pl-smi>window</span> !== <span class=pl-s>&#39;undefined&#39;</span> ? <span class=pl-smi>window</span> : <span class=pl-s1>global</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>PopperUtils</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L2442" class="blob-num js-line-number" data-line-number="2442"></td>
        <td id="LC2442" class="blob-code blob-code-inner js-file-line"><span class=pl-v>Popper</span><span class=pl-kos>.</span><span class=pl-c1>placements</span> <span class=pl-c1>=</span> <span class=pl-s1>placements</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L2443" class="blob-num js-line-number" data-line-number="2443"></td>
        <td id="LC2443" class="blob-code blob-code-inner js-file-line"><span class=pl-v>Popper</span><span class=pl-kos>.</span><span class=pl-c1>Defaults</span> <span class=pl-c1>=</span> <span class=pl-v>Defaults</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L2444" class="blob-num js-line-number" data-line-number="2444"></td>
        <td id="LC2444" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2445" class="blob-num js-line-number" data-line-number="2445"></td>
        <td id="LC2445" class="blob-code blob-code-inner js-file-line"><span class=pl-k>return</span> <span class=pl-v>Popper</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L2446" class="blob-num js-line-number" data-line-number="2446"></td>
        <td id="LC2446" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2447" class="blob-num js-line-number" data-line-number="2447"></td>
        <td id="LC2447" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L2448" class="blob-num js-line-number" data-line-number="2448"></td>
        <td id="LC2448" class="blob-code blob-code-inner js-file-line"><span class=pl-c>//# sourceMappingURL=popper.js.map</span></td>
      </tr>
</table>

  <details class="details-reset details-overlay BlobToolbar position-absolute js-file-line-actions dropdown d-none" aria-hidden="true">
    <summary class="btn-octicon ml-0 px-2 p-0 bg-white border border-gray-dark rounded-1" aria-label="Inline file action toolbar">
      <svg class="octicon octicon-kebab-horizontal" viewBox="0 0 13 16" version="1.1" width="13" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm5 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM13 7.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path></svg>
    </summary>
    <details-menu>
      <ul class="BlobToolbar-dropdown dropdown-menu dropdown-menu-se mt-2" style="width:185px">
        <li>
          <clipboard-copy role="menuitem" class="dropdown-item" id="js-copy-lines" style="cursor:pointer;">
            Copy lines
          </clipboard-copy>
        </li>
        <li>
          <clipboard-copy role="menuitem" class="dropdown-item" id="js-copy-permalink" style="cursor:pointer;">
            Copy permalink
          </clipboard-copy>
        </li>
        <li><a class="dropdown-item js-update-url-with-hash" id="js-view-git-blame" role="menuitem" href="/popperjs/popper-core/blame/8a4f6e8936618ffcac1c1bd837ab4e5ab1de6726/dist/umd/popper.js">View git blame</a></li>
          <li><a class="dropdown-item" id="js-new-issue" role="menuitem" href="/popperjs/popper-core/issues/new">Reference in new issue</a></li>
      </ul>
    </details-menu>
  </details>

  </div>

    </div>

  

  <details class="details-reset details-overlay details-overlay-dark">
    <summary data-hotkey="l" aria-label="Jump to line"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast linejump" aria-label="Jump to line">
      <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-jump-to-line-form Box-body d-flex" action="" accept-charset="UTF-8" method="get">
        <input class="form-control flex-auto mr-3 linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
        <button type="submit" class="btn" data-close-dialog>Go</button>
</form>    </details-dialog>
  </details>

    <div class="Popover anim-scale-in js-tagsearch-popover"
     hidden
     data-tagsearch-url="/popperjs/popper-core/find-symbols"
     data-tagsearch-ref="v1.12.5"
     data-tagsearch-path="dist/umd/popper.js"
     data-tagsearch-lang="JavaScript"
     data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.click_on_symbol&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;click_on_symbol&quot;,&quot;repository_id&quot;:54994103,&quot;ref&quot;:&quot;v1.12.5&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/popperjs/popper-core/blob/v1.12.5/dist/umd/popper.js&quot;,&quot;user_id&quot;:null}}"
     data-hydro-click-hmac="403f0d74439bd52cfc5990f30873f40736926e588bcd33c588283eb6a10d7007">
  <div class="Popover-message Popover-message--large Popover-message--top-left TagsearchPopover mt-1 mb-4 mx-auto Box box-shadow-large">
    <div class="TagsearchPopover-content js-tagsearch-popover-content overflow-auto" style="will-change:transform;">
    </div>
  </div>
</div>



  </div>
</div>

    </main>
  </div>
  

  </div>

        
<div class="footer container-lg width-full p-responsive" role="contentinfo">
  <div class="position-relative d-flex flex-row-reverse flex-lg-row flex-wrap flex-lg-nowrap flex-justify-center flex-lg-justify-between pt-6 pb-2 mt-6 f6 text-gray border-top border-gray-light ">
    <ul class="list-style-none d-flex flex-wrap col-12 col-lg-5 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0">
      <li class="mr-3 mr-lg-0">&copy; 2020 GitHub, Inc.</li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to terms, text:terms" href="https://github.com/site/terms">Terms</a></li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to privacy, text:privacy" href="https://github.com/site/privacy">Privacy</a></li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to security, text:security" href="https://github.com/security">Security</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://githubstatus.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a data-ga-click="Footer, go to help, text:help" href="https://help.github.com">Help</a></li>

    </ul>

    <a aria-label="Homepage" title="GitHub" class="footer-octicon d-none d-lg-block mx-lg-4" href="https://github.com">
      <svg height="24" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
</a>
   <ul class="list-style-none d-flex flex-wrap col-12 col-lg-5 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0">
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to contact, text:contact" href="https://github.com/contact">Contact GitHub</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://github.com/pricing" data-ga-click="Footer, go to Pricing, text:Pricing">Pricing</a></li>
      <li class="mr-3 mr-lg-0"><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li class="mr-3 mr-lg-0"><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://github.blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a data-ga-click="Footer, go to about, text:about" href="https://github.com/about">About</a></li>
    </ul>
  </div>
  <div class="d-flex flex-justify-center pb-6">
    <span class="f6 text-gray-light"></span>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 000 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 00.01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"></path></svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"></path></svg>
    </button>
    You can’t perform that action at this time.
  </div>


    <script crossorigin="anonymous" async="async" integrity="sha512-WcQmT2vhcClFVOaaAJV/M+HqsJ2Gq/myvl6F3gCVBxykazXTs+i5fvxncSXwyG1CSfcrqmLFw/R/bmFYzprX2A==" type="application/javascript" id="js-conditional-compat" data-src="https://github.githubassets.com/assets/compat-bootstrap-59c4264f.js"></script>
    <script crossorigin="anonymous" integrity="sha512-Qb7XHcWIafGt8U6FsJrxJqGCgszwjKK1zXv1+fAjIz0HDaYppswlGLxEInNMN2dlMBAZnZNSZL8wAvvhKxYx3A==" type="application/javascript" src="https://github.githubassets.com/assets/environment-bootstrap-41bed71d.js"></script>
    <script crossorigin="anonymous" async="async" integrity="sha512-ASMgX6+DJ9LVZX/3Fj0RzibSpfigU83ubvsxxwriojWmuBM3faUp1108gypkhXpqLHEBQhIhjlzDOejzOFd0gA==" type="application/javascript" src="https://github.githubassets.com/assets/vendor-0123205f.js"></script>
    <script crossorigin="anonymous" async="async" integrity="sha512-s+hYdn5j8dTUG46f+6xCqNNVqozUsiP37y7sMJgIjvf9iQiqG/puLKnTqIxEWJx0OFCT/+fU+kJ9YLH7Njd8vA==" type="application/javascript" src="https://github.githubassets.com/assets/frameworks-b3e85876.js"></script>
    
    <script crossorigin="anonymous" async="async" integrity="sha512-nFwFT8jebtE2Dk78wm9PqEtnxhJ40BTRHEMc0oGtbfC3UZ/4FzHiGDm/3yolq+vmwMQIb41S3yyUBMw/QN8MVw==" type="application/javascript" src="https://github.githubassets.com/assets/github-bootstrap-9c5c054f.js"></script>
    
    
    
  <div class="js-stale-session-flash flash flash-warn flash-banner" hidden
    >
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 000 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 00.01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"></path></svg>
    <span class="js-stale-session-flash-signed-in" hidden>You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="js-stale-session-flash-signed-out" hidden>You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <template id="site-details-dialog">
  <details class="details-reset details-overlay details-overlay-dark lh-default text-gray-dark hx_rsm" open>
    <summary role="button" aria-label="Close dialog"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast hx_rsm-dialog hx_rsm-modal">
      <button class="Box-btn-octicon m-0 btn-octicon position-absolute right-0 top-0" type="button" aria-label="Close dialog" data-close-dialog>
        <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"></path></svg>
      </button>
      <div class="octocat-spinner my-6 js-details-dialog-spinner"></div>
    </details-dialog>
  </details>
</template>

  <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box box-shadow-large" style="width:360px;">
  </div>
</div>


  </body>
</html>

