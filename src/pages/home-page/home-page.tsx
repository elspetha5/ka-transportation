import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import "./home-page.scss";

function HomePage() {
  const [isZelleOpen, setIsZelleOpen] = useState(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "none",
    boxShadow: 24,
    p: 4,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div className="home-container">
      <div className="hero-container">
        <div className="hero-inner-container">
          <div className="hero-tagline">The Future of Getting There</div>
        </div>
      </div>

      <div className="contact-container">
        <div className="contact-pic-info-container">
          <div className="contact-profile-pic" />
          <div className="contact-info-container">
            <div>Dhulfiqar Kamoona</div>
            <a href="tel:+14802576590" className="button">
              480-257-6590
            </a>
            <div className="contact-payment">
              Cash |{" "}
              <a
                href="https://cash.app/$DHULFIQARK"
                target="_blank"
                rel="noopener noreferrer"
                className="cash button"
              >
                Cash App
              </a>{" "}
              |{" "}
              <a
                href="https://venmo.com/u/dhulfiqark"
                target="_blank"
                rel="noopener noreferrer"
                className="venmo button"
              >
                Venmo
              </a>{" "}
              |{" "}
              <span
                className="zelle button"
                onClick={() => setIsZelleOpen(!isZelleOpen)}
              >
                Zelle
              </span>
            </div>
          </div>
        </div>
        <Modal open={isZelleOpen} onClose={() => setIsZelleOpen(false)}>
          <Box sx={style}>
            <img
              src={`${import.meta.env.BASE_URL}images/zelle.jpg`}
              alt="zelle QR code"
              className="zelle-pic"
            />
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default HomePage;
