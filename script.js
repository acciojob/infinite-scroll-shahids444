const list = document.getElementById('infinite-list');

let count = 1;

// Function to add list items
function addItems(num) {
  for (let i = 0; i < num; i++) {
    const item = document.createElement('li');
    item.textContent = `Item ${count++}`;
    list.appendChild(item);
  }
}

// Initial 10 items
addItems(10);

// Add 2 items when user scrolls to bottom
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
    addItems(2);
  }
});
