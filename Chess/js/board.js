    // Dark Mode Toggle
    (function() {
      const toggle = document.querySelector('[data-theme-toggle]');
      const html = document.documentElement;
      const icon = document.getElementById('theme-icon');
      const sunSVG = `<circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>`;
      const moonSVG = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>`;
      let theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      html.setAttribute('data-theme', theme);
      icon.innerHTML = theme === 'dark' ? sunSVG : moonSVG;
      toggle.setAttribute('aria-label', 'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' mode');
      toggle.addEventListener('click', () => {
        theme = theme === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', theme);
        icon.innerHTML = theme === 'dark' ? sunSVG : moonSVG;
        toggle.setAttribute('aria-label', 'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' mode');
      });
    })();

    // Piece image data (base64 embedded)
    const PIECES = {
      'bP': 'images/black/pawn.png',
      'bR': 'images/black/rook.png',
      'bN': 'images/black/knight.png',
      'bB': 'images/black/bishop.png',
      'bQ': 'images/black/queen.png',
      'bK': 'images/black/king.png',
      'wP': 'images/white/pawn.png',
      'wR': 'images/white/rook.png',
      'wN': 'images/white/knight.png',
      'wB': 'images/white/bishop.png',
      'wQ': 'images/white/queen.png',
      'wK': 'images/white/king.png'
    };

    // Starting position
    const startPos = [
      ['bR','bN','bB','bQ','bK','bB','bN','bR'],
      ['bP','bP','bP','bP','bP','bP','bP','bP'],
      [null,null,null,null,null,null,null,null],
      [null,null,null,null,null,null,null,null],
      [null,null,null,null,null,null,null,null],
      [null,null,null,null,null,null,null,null],
      ['wP','wP','wP','wP','wP','wP','wP','wP'],
      ['wR','wN','wB','wQ','wK','wB','wN','wR'],
    ];

    const board = document.getElementById('chessBoard');
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const isLight = (row + col) % 2 === 0;
        const square = document.createElement('div');
        square.className = 'square ' + (isLight ? 'light' : 'dark');
        square.setAttribute('role', 'gridcell');
        const file = String.fromCharCode(97 + col);
        const rank = 8 - row;
        square.setAttribute('aria-label', file + rank);

        const piece = startPos[row][col];
        if (piece && PIECES[piece]) {
          const img = document.createElement('img');
          img.className = 'piece';
          img.src = PIECES[piece];
          img.alt = piece;
          img.width = 70;
          img.height = 70;
          square.appendChild(img);
        }
        board.appendChild(square);
      }
    }
