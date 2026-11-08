const filters = document.querySelectorAll('[data-filter]');
const items = document.querySelectorAll('[data-category]');
const status = document.getElementById('filter-status');
filters.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.filter;
    filters.forEach(filter => filter.setAttribute('aria-pressed', String(filter === button)));
    items.forEach(item => { item.hidden = category !== 'all' && item.dataset.category !== category; });
    const count = Array.from(items).filter(item => !item.hidden).length;
    status.textContent = `Showing ${count} menu items: ${button.textContent}.`;
  });
});
