// mods/adblock.js - Instantly neutralizes and removes game advertisements
(function () {
    'use strict';
    const LOG_PREFIX = '[AdBlocker]';

    const badIds = ['adBanner', 'pw-respawn-ad', 'pw-spawn-ad'];

    // 1. Force hide via CSS (prevents visual flickering before the JS catches it)
    const style = document.createElement('style');
    style.textContent = badIds.map(id => `#${id}`).join(', ') + ` {
        display: none !important;
        opacity: 0 !important;
        pointer-events: none !important;
        width: 0 !important;
        height: 0 !important;
        position: absolute !important;
        z-index: -9999 !important;
    }`;
    document.head.appendChild(style);

    // 2. Initial Sweep (remove any that already loaded)
    function sweep() {
        badIds.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.remove();
                console.log(LOG_PREFIX, `Purged existing ad element: #${id}`);
            }
        });

        // initial Admiral check
        checkAndDestroyAdmiral(document.body);
    }
    sweep();
    
    // 3. MutationObserver (ruthlessly destroy them the millisecond the game tries to add them)
    const observer = new MutationObserver((mutations) => {
        let removedSomething = false;
        for (const mutation of mutations) {
            for (const node of mutation.addedNodes) {
                if (node.nodeType === 1) { // Is it an Element?
                    // --- Standard Ad ID Check ---
                    if (badIds.includes(node.id)) {
                        node.remove();
                        removedSomething = true;
                    } else {
                        // Check if the ad was injected INSIDE the node
                        badIds.forEach(id => {
                            const el = node.querySelector(`#${id}`);
                            if (el) {
                                el.remove();
                                removedSomething = true;
                            }
                        });
                    }

                    // --- Admiral Anti-Adblock Bypass ---
                    if (checkAndDestroyAdmiral(node)) {
                        removedSomething = true;
                    }
                }
            }
        }
        if (removedSomething) {
            console.log(LOG_PREFIX, 'Intercepted and destroyed ad elements.');
        }
    });

    // 4. Admiral Anti-Adblock Logic
    function checkAndDestroyAdmiral(node) {
        if (!node || node.nodeType !== 1) return false;
        
        let destroyed = false;
        const buttons = node.tagName === 'BUTTON' ? [node] : node.querySelectorAll('button');
        
        buttons.forEach(btn => {
            const text = btn.innerText || btn.textContent || "";
            if (text.includes('Continue without supporting us')) {
                // Click it so the game resumes and Admiral thinks we accepted
                btn.click();
                
                // Then nuke the entire modal overlay container to be safe
                let root = btn;
                while (root.parentElement && root.parentElement !== document.body) {
                    root = root.parentElement;
                }
                if (root && root !== document.body) {
                    root.remove();
                }
                
                console.log(LOG_PREFIX, 'Bypassed Admiral Anti-Adblock popup.');
                destroyed = true;
            }
        });
        
        return destroyed;
    }

    // Start watching the entire document body for changes
    window.addEventListener('DOMContentLoaded', () => {
        sweep(); // Run sweep again when DOM is ready
        observer.observe(document.body, { childList: true, subtree: true });
        console.log(LOG_PREFIX, 'Adblock Observer Active.');
    });
    
    // If the window is already loaded, kickstart it immediately
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        observer.observe(document.body, { childList: true, subtree: true });
        console.log(LOG_PREFIX, 'Adblock Observer Active.');
    }

})();
