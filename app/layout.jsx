"use client";
import { useEffect, useRef } from "react";
import "../public/assets/style.css";
import "photoswipe/dist/photoswipe.css";
import iTooltip from "itooltip";
import { usePathname } from "next/navigation";
import scrollQue from "../utlis/scrollCue.min.js";
import Context from "@/context/Context";
import ProgressWrap from "@/components/common/ProgressWrap";
import initPlayer from "@/utlis/initPlayer";
import SearchModal from "@/components/modals/SearchModal";
import InfoModal from "@/components/modals/InfoModal";
import Header3 from "@/components/headers/Header3";
import Footer2 from "@/components/footers/Footer2";

export default function RootLayout({ children }) {
   const pathname = usePathname();
   useEffect(() => {
      if (typeof window !== "undefined") {
         import("bootstrap/dist/js/bootstrap.esm").then((module) => {
            // Module is imported, you can access any exported functionality if
         });
      }
   }, []);
   // const rellaxRef = useRef(null);
   useEffect(() => {
      if (typeof window !== "undefined") {
         scrollQue().init();
         window.dispatchEvent(new Event("scroll"));
      }

      return () => {
         // rellaxRef.current?.destroy();
      };
   }, [pathname]);
   useEffect(() => {
      initPlayer();
      const overlayElements = document.querySelectorAll(
         ".overlay > a, .overlay > span"
      );
      overlayElements.forEach((element) => {
         const overlayBg = document.createElement("span");
         overlayBg.className = "bg";
         element.appendChild(overlayBg);
      });
   }, [pathname]);
   useEffect(() => {
      const tooltipTriggerList = document.querySelectorAll(
         '[data-bs-toggle="tooltip"]'
      );
      const popoverTriggerList = document.querySelectorAll(
         '[data-bs-toggle="popover"]'
      );

      if (tooltipTriggerList.length > 0 || popoverTriggerList.length > 0) {
         import("bootstrap/dist/js/bootstrap.bundle.min.js").then((bootstrap) => {
            // Initialize tooltips
            const tooltipList = Array.from(tooltipTriggerList).map(
               (tooltipTriggerEl) => {
                  return new bootstrap.Tooltip(tooltipTriggerEl, {
                     trigger: "hover",
                  });
               }
            );

            // Initialize popovers
            const popoverList = Array.from(popoverTriggerList).map(
               (popoverTriggerEl) => {
                  return new bootstrap.Popover(popoverTriggerEl);
               }
            );

            // Cleanup tooltips and popovers on component unmount
            return () => {
               tooltipList.forEach((tooltip) => tooltip.dispose());
               popoverList.forEach((popover) => popover.dispose());
            };
         });
      }
   }, [pathname]);

   useEffect(() => {
      const handleSticky = () => {
         const navbar = document.querySelector(".navbar");
         if (navbar) {
            if (window.scrollY > 120) {
               navbar.classList.add("fixed");
               navbar.classList.add("navbar-clone");
               if (
                  navbar.classList.contains("transparent") &&
                  navbar.classList.contains("navbar-dark")
               ) {
                  navbar.classList.remove("navbar-dark");
                  navbar.classList.add("navbar-light");
                  navbar.classList.add("navbar-dark-removed");
               }
            } else {
               navbar.classList.remove("fixed");
               navbar.classList.remove("navbar-clone");
               if (
                  navbar.classList.contains("transparent") &&
                  navbar.classList.contains("navbar-dark-removed")
               ) {
                  navbar.classList.add("navbar-dark");
                  navbar.classList.remove("navbar-light");
                  navbar.classList.remove("navbar-dark-removed");
               }
            }
            if (window.scrollY > 300) {
               navbar.classList.add("navbar-stick");
            } else {
               navbar.classList.remove("navbar-stick");
            }
         }
      };

      window.addEventListener("scroll", handleSticky);
   }, []);
   useEffect(() => {
      // Close any open modal
      const bootstrap = require("bootstrap"); // dynamically import bootstrap
      const modalElements = document.querySelectorAll(".modal.show");
      modalElements.forEach((modal) => {
         const modalInstance = bootstrap.Modal.getInstance(modal);
         if (modalInstance) {
            modalInstance.hide();
         }
      });

      // Close any open offcanvas
      const offcanvasElements = document.querySelectorAll(".offcanvas.show");
      offcanvasElements.forEach((offcanvas) => {
         const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvas);
         if (offcanvasInstance) {
            offcanvasInstance.hide();
         }
      });
      // Select all elements with the class 'offcanvas-backdrop'
      const backdrops = document.querySelectorAll(".offcanvas-backdrop");

      // Check if any backdrop elements exist and remove them
      backdrops?.forEach((backdrop) => {
         backdrop?.remove();
      });
   }, [pathname]); // Runs every time the route changes

   useEffect(() => {
      // Assuming iTooltip is globally available
      var tooltip = new iTooltip(".itooltip");
      tooltip.init({
         className: "itooltip-inner",
         indentX: 15,
         indentY: 15,
         positionX: "right",
         positionY: "bottom",
      });
   }, [pathname]);
   useEffect(() => {
      setTimeout(() => {
         import("bootstrap").then(({ Offcanvas }) => {
            const navbar = document.querySelector(".navbar");
            if (!navbar) return;

            const navOffCanvasBtn = document.querySelectorAll(".offcanvas-nav-btn");
            const navOffCanvas = document.querySelector(
               ".navbar:not(.navbar-clone) .offcanvas-nav"
            );
            if (!navOffCanvas) return;

            const bsOffCanvas = new Offcanvas(navOffCanvas, { scroll: true });
            const scrollLink = document.querySelectorAll(
               ".onepage .navbar li a.scroll"
            );
            const searchOffcanvas = document.getElementById("offcanvas-search");

            const handleNavClick = () => bsOffCanvas.show();
            const handleScrollClick = () => bsOffCanvas.hide();

            navOffCanvasBtn.forEach((e) =>
               e.addEventListener("click", handleNavClick)
            );
            scrollLink.forEach((e) =>
               e.addEventListener("click", handleScrollClick)
            );

            if (searchOffcanvas) {
               searchOffcanvas.addEventListener("shown.bs.offcanvas", () => {
                  document.getElementById("search-form")?.focus();
               });
            }

            return () => {
               navOffCanvasBtn.forEach((e) =>
                  e.removeEventListener("click", handleNavClick)
               );
               scrollLink.forEach((e) =>
                  e.removeEventListener("click", handleScrollClick)
               );
            };
         });
      });
   }, [pathname]);
   return (
      <html lang="en">
         <head>
            <link
               href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Manrope:wght@400;500;700"
               rel="stylesheet"
            />
            <link
               href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@1,300;1,400;1,500;1,600;1,700&display=swap"
               rel="stylesheet"
            />
         </head>

         <body>
            <Context>
               <Header3 />
               {children}
               <Footer2 />
               <SearchModal />
               <InfoModal />
               <ProgressWrap />
            </Context>
         </body>
      </html>
   );
}
