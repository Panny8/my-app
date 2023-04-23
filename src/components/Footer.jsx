import React from "react";

function Footer() {
    const year = new Date().getFullYear();
    return <footer>
        <h3>PETER-PANNY</h3>
        <p>Copyright © {year}</p>
    </footer>
}
export default Footer;