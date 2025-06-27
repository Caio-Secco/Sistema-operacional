    
    
    const searchInput = document.getElementById('search');
    const rows = document.querySelectorAll('#client-list tr');

    searchInput.addEventListener('input', () => {
      const value = searchInput.value.toLowerCase();
      rows.forEach(row => {
        const name = row.querySelector('td').textContent.toLowerCase();
        row.style.display = name.includes(value) ? '' : 'none';
      });
    });