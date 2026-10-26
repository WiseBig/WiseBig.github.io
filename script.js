/* 현재 연도 자동 표시 */
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

/* YouTube 영상은 사용자가 재생 버튼을 눌렀을 때 로드합니다. */
function playYouTube(button, videoId) {
    const container = button.closest(".youtube-thumbnail");
    const player = container?.querySelector(".youtube-player");

    if (!container || !player || !videoId) return;

    player.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?autoplay=1&rel=0`;
    container.classList.add("is-playing");
}

/* 로컬 영상 재생 */
function playLocalVideo(button) {
    const container = button.closest(".local-video-thumbnail");
    const video = container?.querySelector(".local-video-player");

    if (!container || !video) return;

    container.classList.add("is-playing");

    const playPromise = video.play();

    if (playPromise !== undefined) {
        playPromise.catch((error) => {
            console.error("동영상 재생에 실패했습니다:", error);
            container.classList.remove("is-playing");
        });
    }
}

/* 페이지 내 링크로 이동할 때 sticky 헤더를 고려해 부드럽게 이동합니다. */
document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
        const targetId = link.getAttribute("href");
        if (!targetId || targetId === "#") return;

        const target = document.querySelector(targetId);
        if (!target) return;

        event.preventDefault();
        target.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
        history.replaceState(null, "", targetId);
    });
});
