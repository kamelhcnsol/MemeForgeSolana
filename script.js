(function () {

  // Capture UTM campaign information
  const params = new URLSearchParams(window.location.search);

  if (
    params.get('utm_source') ||
    params.get('utm_medium') ||
    params.get('utm_campaign')
  ) {
    localStorage.setItem(
      'mf_attribution',
      JSON.stringify({
        source: params.get('utm_source') || '',
        medium: params.get('utm_medium') || '',
        campaign: params.get('utm_campaign') || '',
        first_seen: new Date().toISOString()
      })
    );
  }

  // Track X and Telegram button clicks
  document.querySelectorAll('.track').forEach(function (button) {

    button.addEventListener('click', function () {

      if (typeof gtag === 'function') {

        const eventName = button.dataset.event;

        gtag('event', eventName, {
          link_url: button.href,
          page_location: window.location.href
        });

      }

    });

  });

})();
