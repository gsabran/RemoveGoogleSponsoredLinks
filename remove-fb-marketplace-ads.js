const removeBadContent = () => {
  try {
    if (!window.location.pathname.includes('marketplace')) {
      return;
    }
    const container = document.querySelectorAll('.l9j0dhe7.f9o22wc5.ad2k81qe')[0].children[1];

    for (const item of container.children) {
      if (item.textContent.includes('Sponsored')) {
        // item.remove()
        item.innerHTML = '<div style="background-color: white;"></div>'
      }
    }
  } catch (e) {
    console.log('Error while removing sponsored and non local elements:', e);
  }
}

setInterval(removeBadContent, 100);
