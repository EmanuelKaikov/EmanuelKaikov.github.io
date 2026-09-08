// PromIT Interactive Logic

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initStickyHeader();
    initGalleryFilter();
});

/* Media Gallery Filter & Modal Lightbox */
function initGalleryFilter() {
    const tabs = document.querySelectorAll('.gallery-tab');
    const items = document.querySelectorAll('.gallery-item');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => {
                t.classList.remove('bg-brand-gold', 'text-black', 'font-extrabold');
                t.classList.add('bg-brand-gray', 'text-gray-300', 'border', 'border-gray-800');
            });
            tab.classList.remove('bg-brand-gray', 'text-gray-300', 'border', 'border-gray-800');
            tab.classList.add('bg-brand-gold', 'text-black', 'font-extrabold');

            const filter = tab.dataset.filter;
            items.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

/* Open Media Lightbox Modal */
function openMediaModal(type, src) {
    const modal = document.getElementById('mediaModal');
    const content = document.getElementById('modalContent');
    if (!modal || !content) return;

    if (type === 'picture') {
        content.innerHTML = `<img src="${src}" class="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl">`;
    } else if (type === 'video') {
        content.innerHTML = `<video src="${src}" controls autoplay class="max-w-full max-h-[85vh] rounded-xl shadow-2xl"></video>`;
    }

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

/* Close Media Modal */
function closeMediaModal(e) {
    const modal = document.getElementById('mediaModal');
    if (!modal) return;
    
    // Close if clicked backdrop or explicit close button
    if (e === true || e.target.id === 'mediaModal') {
        modal.classList.add('hidden');
        document.getElementById('modalContent').innerHTML = '';
        document.body.style.overflow = 'auto';
    }
}
