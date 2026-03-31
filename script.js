function showPage(pageName) {
    const feed = document.getElementById('feed-page');
    const profile = document.getElementById('profile-page');

    if (pageName === 'feed') {
        feed.style.display = 'block';
        profile.style.display = 'none';
    } else {
        feed.style.display = 'none';
        profile.style.display = 'block';
    }
    
    // Rola para o topo ao trocar de aba
    window.scrollTo(0, 0);
}
