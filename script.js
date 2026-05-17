/* 📐 script.js — Interactive Terminal & Portfolio Logic */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Interactive Terminal Emulation
    const terminalLines = [
        { text: 'COGNOS Systems Initialization...', type: 'prompt' },
        { text: 'Loading core_rules.md [Level 0] ... Done', type: 'output success' },
        { text: 'Synthesizing spatial constraints & grid layouts...', type: 'output' },
        { text: 'Verifying anti-drift harness protection... OK', type: 'output success' },
        { text: 'Establishing secure symlink bridge...', type: 'output' },
        { text: 'COGNOS ARCHITECT TIER: ACTIVE', type: 'output success' },
        { text: 'COGNOS WORKER TIER: LISTENING...', type: 'output success' },
        { text: 'Running local audit on active assets:', type: 'prompt' },
        { text: '- VBA algorithmic engine: Calibrated', type: 'output' },
        { text: '- Financial model GP-1: Dec 2025 compliant', type: 'output' },
        { text: '- Legal migration SIRIPRT: Completed', type: 'output' },
        { text: 'Ready for client integration.', type: 'prompt' }
    ];

    const terminalBody = document.querySelector('.terminal-body');
    if (terminalBody) {
        // Clear default loading content
        terminalBody.innerHTML = '';
        
        let lineIndex = 0;
        
        function typeLine() {
            if (lineIndex < terminalLines.length) {
                const line = terminalLines[lineIndex];
                const lineDiv = document.createElement('div');
                lineDiv.className = 'cli-line';
                
                if (line.type === 'prompt') {
                    lineDiv.innerHTML = `<span class="cli-prompt">></span> <span class="cli-command">${line.text}</span>`;
                } else {
                    lineDiv.innerHTML = `<span class="cli-output ${line.type}">${line.text}</span>`;
                }
                
                terminalBody.appendChild(lineDiv);
                terminalBody.scrollTop = terminalBody.scrollHeight;
                
                lineIndex++;
                // Speed adjustment for terminal printing: fast but readable
                setTimeout(typeLine, line.type === 'prompt' ? 800 : 400);
            } else {
                // Blinking cursor active state at the end
                const cursorDiv = document.createElement('div');
                cursorDiv.className = 'cli-line';
                cursorDiv.innerHTML = `<span class="cli-prompt">></span> <span class="cli-command blink">_</span>`;
                terminalBody.appendChild(cursorDiv);
                
                // Add blinking style keyframe dynamically
                if (!document.getElementById('cursor-blink-style')) {
                    const style = document.createElement('style');
                    style.id = 'cursor-blink-style';
                    style.innerHTML = `
                        .blink { animation: cursor-blink 1s steps(2, start) infinite; }
                        @keyframes cursor-blink { to { visibility: hidden; } }
                    `;
                    document.head.appendChild(style);
                }
            }
        }
        
        // Start terminal printing sequences with a subtle delay
        setTimeout(typeLine, 1000);
    }

    // 2. Interactive Navigation Scroll Spy
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 150)) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });

    // 3. Simple Dynamic HUD Stat Updates (Mock real-time agent monitoring)
    const activeSessionsElement = document.getElementById('hud-active-sessions');
    const efficiencyElement = document.getElementById('hud-efficiency');
    
    if (activeSessionsElement && efficiencyElement) {
        setInterval(() => {
            // Randomly update active agent load and token savings slightly to look "alive"
            const loadVal = (1 + Math.random() * 3).toFixed(0);
            const efficiencyVal = (98.3 + Math.random() * 0.4).toFixed(1);
            
            activeSessionsElement.textContent = `${loadVal} ACTIVE`;
            efficiencyElement.textContent = `${efficiencyVal}%`;
        }, 8000);
    }
});
