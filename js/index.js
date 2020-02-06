window.onload = e => {
    let position = "top"
    for (let i = 1; i <= 12; i++) {
        for (let j = 1; j <= 12; j++) {
            let mobile = "?(1030)h:50px ?(1030)w:50px ?(650)h:30px ?(650)w:30px ?(380)h:25px ?(380)w:25px";
            let hover = `@b:#00fa9a40 @br:2px_solid_mediumspringgreen`;
            let cell = `<span id="${position}${i * j}" value="${i}-${j}" class="cell d:inline-flex w:55px h:55px b:aliceblue +round +pointer +flex ${hover} ${mobile}"><i>${i * j}</i></span>`
            $("#table").innerHTML += cell;
        }
        position = "left";
        $("#table").innerHTML += `<br/>`;
    }

    $$(".cell").forEach(e => {
        e.onmouseenter = e => {
            let cells = e.target.getAttribute("value").split("-");
            let left = ($$(`#left${cells[0]}`).length != 0) ? $$(`#left${cells[0]}`) : [$("#top1")];
            left[left.length - 1].classList.add("active");
            $(`#top${cells[1]}`).classList.add("active");
        }
        e.onmouseleave = e => {
            let cells = e.target.getAttribute("value").split("-");
            let left = ($$(`#left${cells[0]}`).length != 0) ? $$(`#left${cells[0]}`) : [$("#top1")];
            left[left.length - 1].classList.remove("active");
            $(`#top${cells[1]}`).classList.remove("active");
        }
    })

}

