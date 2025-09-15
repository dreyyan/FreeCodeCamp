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

    // Build endpoint using the exact user input (encoded)
    const url = 'https://rpg-creature-api.freecodecamp.rocks/api/creatures/' + encodeURIComponent(q);

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error('Creature not found');

      const data = await res.json();

      // Name & basic properties (uppercase name)
      creatureName.textContent = (data.name || '').toUpperCase();
      creatureId.textContent = '#' + (data.id ?? '');
      weight.textContent = `Weight: ${data.weight ?? ''}`;
      height.textContent = `Height: ${data.height ?? ''}`;

      // Types: clear first, then add child elements (spans) with UPPERCASE text
      types.innerHTML = '';
      if (Array.isArray(data.types)) {
        data.types.forEach(t => {
          const span = document.createElement('span');
          if (typeof t === 'string') {
            span.textContent = t.toUpperCase();
          } else if (t && typeof t === 'object') {
            // handle a few possible schemas
            const name = (t.type && t.type.name) || t.name || '';
            span.textContent = String(name).toUpperCase();
          } else {
            span.textContent = String(t).toUpperCase();
          }
          types.appendChild(span);
        });
      }

      // Helper: find stat by name or fallback to index
      function findStatByName(name) {
        if (!Array.isArray(data.stats)) return undefined;
        const found = data.stats.find(s => {
          // possible shapes: { stat: { name: "hp" }, base_stat: 45 } or { name: 'hp', base_stat: ...}
          const statName =
            (s.stat && s.stat.name) ||
            s.name ||
            '';
          return String(statName).toLowerCase() === String(name).toLowerCase();
        });
        return found ? (found.base_stat ?? found.baseStat ?? found.value ?? undefined) : undefined;
      }

      // Assign stats (tests expect numeric values only)
      hp.textContent = findStatByName('hp') ?? (data.stats && data.stats[0] && (data.stats[0].base_stat ?? '')) ?? '';
      attack.textContent = findStatByName('attack') ?? (data.stats && data.stats[1] && (data.stats[1].base_stat ?? '')) ?? '';
      defense.textContent = findStatByName('defense') ?? (data.stats && data.stats[2] && (data.stats[2].base_stat ?? '')) ?? '';
      specialAttack.textContent = findStatByName('special-attack') ?? (data.stats && data.stats[3] && (data.stats[3].base_stat ?? '')) ?? '';
      specialDefense.textContent = findStatByName('special-defense') ?? (data.stats && data.stats[4] && (data.stats[4].base_stat ?? '')) ?? '';
      speed.textContent = findStatByName('speed') ?? (data.stats && data.stats[5] && (data.stats[5].base_stat ?? '')) ?? '';

    } catch (err) {
      // Tests expect this exact alert
      alert('Creature not found');
      console.error('Error fetching creatures:', err);
    }
  }

  // Click handler
  searchBtn.addEventListener('click', () => {
    getCreatures(searchInput.value);
  });

  // Support Enter key inside input (prevents form submit if placed in form)
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      getCreatures(searchInput.value);
    }
  });
});