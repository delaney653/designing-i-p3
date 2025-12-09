document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("workoutVideo");
    if (!video) return;

    // Here's how I structured our videos:
    // 0-15 s:  exercise 1
    // 15-25 s:  break
    // 25-40 s:  exercise 2
    // 40-50 s:  break
    // 50-65 s:  exercise 3
    const segments = [0, 15, 25, 40, 50, 65];

    function getCurrentSegmentIndex() {
        const t = video.currentTime;
        let index = segments.length - 2;
        for (let i = 0; i < segments.length - 1; i++) {
            if (t >= segments[i] && t < segments[i + 1]) {
                index = i;
                break;
            }
        }
        return index;
    }

    function jumpSegment(direction) {
        const currentIndex = getCurrentSegmentIndex();
        const lastIndex = segments.length - 2;

        let targetIndex = currentIndex;

        if (direction === "next") {
            targetIndex = Math.min(currentIndex + 1, lastIndex);
        } else if (direction === "prev") {
            targetIndex = Math.max(currentIndex - 1, 0);
        }

        const wasPaused = video.paused;
        video.currentTime = segments[targetIndex] + 0.01;

        if (wasPaused) video.pause();
        else video.play();
    }

    window.addEventListener("keydown", (e) => {
        const key = e.key;

        if (!["w", "a", "s", "d", "ArrowUp", "ArrowLeft", "ArrowDown", "ArrowRight"].includes(key)) {
            return;
        }

        const activeElement = document.activeElement;
        const tagName = activeElement.tagName ? activeElement.tagName.toLowerCase() : "";
        if (
            tagName === "input" ||
            tagName === "textarea" ||
            activeElement.isContentEditable
        ) {
            return;
        }

        e.preventDefault();


        if (key === "d") {
            jumpSegment("next");
        } else if (key === "a") {
            jumpSegment("prev");
        }

        // speed toggle logic
        else if (key === "w") {
            if (video.playbackRate == 0.75) {
                video.playbackRate = 1;
                document.getElementById('speed').innerText = "Current Speed: 1.0"
            } else if (video.playbackRate == 1) {
                video.playbackRate = 1.25;
                document.getElementById('speed').innerText = "Current Speed: 1.25"
            }
        } else if (key === "s") {
            if (video.playbackRate === 1.25) {
                video.playbackRate = 1.0;
                document.getElementById('speed').innerText = "Current Speed: 1.0"
            } else if (video.playbackRate === 1.0) {
                video.playbackRate = 0.75;
                document.getElementById('speed').innerText = "Current Speed: 0.75"
            }
        }

        else if (key === "ArrowRight") {
            document.getElementById("back-button").click();
        }
        else if (key === "ArrowUp") {
            document.getElementById("banana").click();
        }
        if (key === "ArrowLeft") {
            document.getElementById("orange").click();
        }
        if (key === "ArrowDown") {
            document.getElementById("strawberry").click();
        }
    });
});
