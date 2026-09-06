(function () {
  // ==============================
  // MEMEFORGE ANALYTICS TRACKING
  // ==============================

  // Capture first traffic source
  const params = new URLSearchParams(window.location.search);

  const hasUTM =
    params.get("utm_source") ||
    params.get("utm_medium") ||
    params.get("utm_campaign");

  if (hasUTM && !localStorage.getItem("mf_attribution")) {
    localStorage.setItem(
      "mf_attribution",
      JSON.stringify({
        source: params.get("utm_source") || "",
        medium: params.get("utm_medium") || "",
        campaign: params.get("utm_campaign") || "",
        first_seen: new Date().toISOString()
      })
    );
  }

  // Track clicks on buttons marked with .track
  document.querySelectorAll(".track").forEach(function (element) {
    element.addEventListener("click", function () {
      if (typeof gtag === "function") {
        gtag("event", "link_click", {
          button_name: element.dataset.event || "unknown",
          link_url: element.href || "",
          page_location: window.location.href
        });
      }
    });
  });

  // Track time spent / engagement
  let engagementSent = false;

  setTimeout(function () {
    if (typeof gtag === "function" && !engagementSent) {
      gtag("event", "engaged_visit", {
        engagement_time_seconds: 30,
        page_location: window.location.href
      });

      engagementSent = true;
    }
  }, 30000);
})();
