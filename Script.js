document.addEventListener("mousemove", (e) => {
    const trail = document.createElement("div");
    trail.classList.add("cursor-trail");
    document.body.appendChild(trail);

    trail.style.left = `${e.clientX}px`;
    trail.style.top = `${e.clientY}px`;

    setTimeout(() => {
        trail.remove();
    }, 1000);
});
