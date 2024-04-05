const scrollToAnchor = (id) => {
    const anchor = document.getElementById(id);
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  