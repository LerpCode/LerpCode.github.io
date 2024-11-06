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
    sidebar.classList.toggle('active'); // Toggle the 'active' class to show/hide the sidebar
}

