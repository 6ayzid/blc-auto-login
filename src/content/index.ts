import("../components/Overlay.svelte").then(({ default: Overlay }) => {
  new Overlay({ target: document.body });
});
