
/* 현재 연도 자동 표시 */
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

function playYouTube(button, videoId) {
    const container = button.closest(".youtube-thumbnail");
    const player = container?.querySelector(".youtube-player");

    if (!container || !player) return;

    player.src =
        `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;

    container.classList.add("is-playing");
}

function playLocalVideo(button) {
    const container = button.closest(".local-video-thumbnail");
    const video = container?.querySelector(".local-video-player");

    if (!container || !video) return;

    // 썸네일과 재생 버튼을 숨기고 영상 표시
    container.classList.add("is-playing");

    // 영상 재생
    const playPromise = video.play();

    if (playPromise !== undefined) {
        playPromise.catch((error) => {
            console.error("동영상 재생에 실패했습니다:", error);
        });
    }
}

