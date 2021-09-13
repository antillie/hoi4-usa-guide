"use strict";

function toggle_color(id) {
    
    if (id.classList.contains("tech_p")) {
        id.classList.remove("tech_p")
        id.classList.add("tech_p_blue")
    }
    else {
        id.classList.remove("tech_p_blue")
        id.classList.add("tech_p")
    };
};
