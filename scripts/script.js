function showSidebar() {
    document.getElementById('sidebar').style.display = 'block'; 
}

function hideSidebar() {
    document.getElementById('sidebar').style.display = 'none'; 
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

const debouncedShowSidebar = debounce(showSidebar, 300);
const debouncedHideSidebar = debounce(hideSidebar, 300);

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active'); 
}

document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.box');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    boxes.forEach(box => {
        observer.observe(box);
    });
});

