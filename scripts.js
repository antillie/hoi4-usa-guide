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

function toggle_fcolor(id) {
    
    if (id.classList.contains("focus")) {
        id.classList.remove("focus")
        id.classList.add("focus_blue")
    }
    else {
        id.classList.remove("focus_blue")
        id.classList.add("focus")
    };
};
