document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-input');
  const searchBtn = document.getElementById('search-button');

  const creatureName = document.getElementById('creature-name');
  const creatureId = document.getElementById('creature-id');
  const weight = document.getElementById('weight');
  const height = document.getElementById('height');
  const types = document.getElementById('types');

  const hp = document.getElementById('hp');
  const attack = document.getElementById('attack');
  const defense = document.getElementById('defense');
  const specialAttack = document.getElementById('special-attack');
  const specialDefense = document.getElementById('special-defense');
  const speed = document.getElementById('speed');

  async function getCreatures(query) {
    const q = String(query ?? '').trim();
    if (!q) return;

    // Build endpoint: lowercase names, leave numeric IDs as-is
    const url = `https://rpg-creature-api.freecodecamp.rocks/api/creature/${encodeURIComponent(q.toLowerCase())}`;

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error('Creature not found');

      const data = await res.json();

      // Populate basic info
      creatureName.textContent = (data.name ?? '').toUpperCase();
      creatureId.textContent = '#' + (data.id ?? '');
      weight.textContent = `Weight: ${data.weight ?? ''}`;
      height.textContent = `Height: ${data.height ?? ''}`;

      // Populate types
      types.innerHTML = '';
      if (Array.isArray(data.types)) {
        data.types.forEach(t => {
          const typeName = t?.type?.name ?? t?.name ?? '';
          if (typeName) {
            const span = document.createElement('span');
            span.textContent = typeName.toUpperCase();
            types.appendChild(span);
          }
        });
      }

      // Helper to get stats
      function getStat(name) {
        const stat = data.stats?.find(s => ((s.stat?.name ?? s.name ?? '').toLowerCase() === name.toLowerCase()));
        return stat?.base_stat ?? 0;
      }

      // Populate stats
      hp.textContent = getStat('hp');
      attack.textContent = getStat('attack');
      defense.textContent = getStat('defense');
      specialAttack.textContent = getStat('special-attack');
      specialDefense.textContent = getStat('special-defense');
      speed.textContent = getStat('speed');

    } catch (err) {
      alert('Creature not found');
      console.error('Error fetching creatures:', err);

      // Clear previous values
      creatureName.textContent = '';
      creatureId.textContent = '';
      weight.textContent = '';
      height.textContent = '';
      types.innerHTML = '';
      hp.textContent = '';
      attack.textContent = '';
      defense.textContent = '';
      specialAttack.textContent = '';
      specialDefense.textContent = '';
      speed.textContent = '';
    }
  }

  // Search button click
  searchBtn.addEventListener('click', () => getCreatures(searchInput.value));

  // Enter key support
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      getCreatures(searchInput.value);
    }
  });
});
