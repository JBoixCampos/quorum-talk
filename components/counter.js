// An example component: a big counter the presenter clicks.
// Used in talk.md as:
//
//   ::: component counter
//   label: Claps
//   :::
//
// The count is shared state, so the shared window and the presenter's
// preview always show the same number.

export default {
  mount(el, ctx) {
    el.innerHTML = `
      <button type="button" class="counter" data-no-advance
        style="font: 700 160px/1 var(--font-display); color: var(--accent-text); background: none; border: 0; cursor: pointer;">0</button>
      <p class="q-small">${ctx.params.label || 'Count'} · click to add one</p>`;
    const button = el.querySelector('button');
    let current = ctx;

    button.addEventListener('click', (event) => {
      event.stopPropagation();
      const count = (current.state && current.state.count) || 0;
      current.setState({ count: count + 1 });
    });

    const paint = () => {
      button.textContent = (current.state && current.state.count) || 0;
    };
    paint();

    return {
      update(next) {
        current = next;
        paint();
      },
    };
  },
};
