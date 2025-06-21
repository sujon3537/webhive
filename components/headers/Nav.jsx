"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import Image from "next/image";
import {
   blockItems,
   blogItems,
   demos,
   docsPages,
   otherPages,
   projectPages,
} from "@/data/menu";
import { usePathname } from "next/navigation";
// !text-[var(--current-color)]
export default function Nav({ color = "#fab758" }) {
   useEffect(() => {
      // Dynamically import Bootstrap
      import("bootstrap").then((Bootstrap) => {
         const CLASS_NAME = "has-child-dropdown-show";

         // Save the original toggle function
         const originalToggle = Bootstrap.Dropdown.prototype.toggle;

         // Override the toggle function
         Bootstrap.Dropdown.prototype.toggle = function () {
            // Remove the CLASS_NAME from all dropdowns
            document.querySelectorAll("." + CLASS_NAME).forEach(function (e) {
               e.classList.remove(CLASS_NAME);
            });

            // Traverse up through the closest dropdown parents
            let dd = this._element
               .closest(".dropdown")
               .parentNode.closest(".dropdown");
            for (; dd && dd !== document; dd = dd.parentNode.closest(".dropdown")) {
               dd.classList.add(CLASS_NAME);
            }

            // Call the original toggle function
            return originalToggle.call(this);
         };

         // Add event listeners for hide.bs.dropdown to remove the CLASS_NAME
         document.querySelectorAll(".dropdown").forEach(function (dd) {
            dd.addEventListener("hide.bs.dropdown", function (e) {
               if (this.classList.contains(CLASS_NAME)) {
                  this.classList.remove(CLASS_NAME);
                  e.preventDefault();
               }
               e.stopPropagation();
            });
         });
      });

      // Optional cleanup function for any potential side effects
      return () => {
         // Cleanup code here (if needed)
      };
   }, []);

   const pathname = usePathname();

   const getActiveParent = (menuLinks) => {
      return menuLinks.find((parent) => {
         if (parent.links) {
            return parent.links.some((link) => link.href === pathname);
         }
         return parent.href === pathname;
      });
   };

   return (
      <ul className="navbar-nav" style={{ "--current-color": color }}>
         <Link

            className={` nav-link hover:!text-[var(--current-color)]   ${pathname === "/"
               ? "!text-[var(--current-color)]"
               : ""
               } `}
            href="/"

         >
            Home
         </Link>

         <li className="nav-item dropdown">
            <a
               className={`nav-link dropdown-toggle !text-[.85rem] !tracking-[normal] hover:!text-[var(--current-color)] after:!text-[var(--current-color)] ${getActiveParent(otherPages) ? "!text-[var(--current-color)]" : ""
                  } `}
               href="#"
               data-bs-toggle="dropdown"
               aria-expanded="false"
            >
               Services
            </a>
            <ul className="dropdown-menu">
               {otherPages.map((item) => (
                  <li
                     key={item.id}
                     className={`dropdown ${item.links ? "dropdown-submenu dropend" : "nav-item"
                        }`}
                  >
                     {item.links ? (
                        <>
                           <a
                              className={`dropdown-item hover:!text-[var(--current-color)] dropdown-toggle  ${getActiveParent([item])
                                 ? "!text-[var(--current-color)]"
                                 : ""
                                 } `}
                              href="#"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                           >
                              {item.label}
                           </a>
                           <ul className="dropdown-menu submenu">
                              {item.links.map((subItem) => (
                                 <li key={subItem.id} className="nav-item">
                                    <Link
                                       className={`dropdown-item hover:!text-[var(--current-color)]   ${subItem.href == pathname
                                          ? "!text-[var(--current-color)]"
                                          : ""
                                          } `}
                                       href={subItem.href}
                                    >
                                       {subItem.label}
                                    </Link>
                                 </li>
                              ))}
                           </ul>
                        </>
                     ) : (
                        <Link
                           className={`dropdown-item hover:!text-[var(--current-color)]   ${item.href == pathname ? "!text-[var(--current-color)]" : ""
                              } `}
                           href={item.href}
                        >
                           {item.label}
                        </Link>
                     )}
                  </li>
               ))}
            </ul>
         </li>

         <li className="nav-item dropdown">
            <a
               className={`nav-link dropdown-toggle !text-[.85rem] !tracking-[normal] hover:!text-[var(--current-color)] after:!text-[var(--current-color)] ${getActiveParent(otherPages) ? "!text-[var(--current-color)]" : ""
                  } `}
               href="#"
               data-bs-toggle="dropdown"
               aria-expanded="false"
            >
               Products
            </a>

            <ul className="dropdown-menu">
               {otherPages.map((item) => (
                  <li
                     key={item.id}
                     className={`dropdown ${item.links ? "dropdown-submenu dropend" : "nav-item"
                        }`}
                  >
                     {item.links ? (
                        <>
                           <a
                              className={`dropdown-item hover:!text-[var(--current-color)] dropdown-toggle  ${getActiveParent([item])
                                 ? "!text-[var(--current-color)]"
                                 : ""
                                 } `}
                              href="#"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                           >
                              {item.label}
                           </a>
                           <ul className="dropdown-menu submenu">
                              {item.links.map((subItem) => (
                                 <li key={subItem.id} className="nav-item">
                                    <Link
                                       className={`dropdown-item hover:!text-[var(--current-color)]   ${subItem.href == pathname
                                          ? "!text-[var(--current-color)]"
                                          : ""
                                          } `}
                                       href={subItem.href}
                                    >
                                       {subItem.label}
                                    </Link>
                                 </li>
                              ))}
                           </ul>
                        </>
                     ) : (
                        <Link
                           className={`dropdown-item hover:!text-[var(--current-color)]   ${item.href == pathname ? "!text-[var(--current-color)]" : ""
                              } `}
                           href={item.href}
                        >
                           {item.label}
                        </Link>
                     )}
                  </li>
               ))}
            </ul>
         </li>
         <li className="nav-item dropdown">
            <a
               className={`nav-link dropdown-toggle !text-[.85rem] !tracking-[normal] hover:!text-[var(--current-color)] after:!text-[var(--current-color)]  ${getActiveParent(projectPages) ? "!text-[var(--current-color)]" : ""
                  } `}
               href="#"
               data-bs-toggle="dropdown"
            >
               Projects
            </a>
            <div className="dropdown-menu dropdown-lg">
               <div className="dropdown-lg-content">
                  {projectPages.map((section) => (
                     <div key={section.id}>
                        <h6 className="dropdown-header !text-[var(--current-color)]">
                           {section.title}
                        </h6>
                        <ul className="pl-0 list-none">
                           {section.links.map((link) => (
                              <li key={link.id}>
                                 <Link
                                    className={`dropdown-item hover:!text-[var(--current-color)]   ${link.href == pathname
                                       ? "!text-[var(--current-color)]"
                                       : ""
                                       }  `}
                                    href={link.href}
                                 >
                                    {link.label}
                                 </Link>
                              </li>
                           ))}
                        </ul>
                     </div>
                  ))}
               </div>
               {/* /auto-column */}
            </div>
         </li>
         <Link

            className={` nav-link hover:!text-[var(--current-color)]   ${pathname === "/company"
               ? "!text-[var(--current-color)]"
               : ""
               } `}
            href="/portfolio"

         >
            Portfolio
         </Link>
         <Link

            className={` nav-link hover:!text-[var(--current-color)]   ${pathname === "/company"
               ? "!text-[var(--current-color)]"
               : ""
               } `}
            href="/company"

         >
            Company
         </Link>
         <Link

            className={` nav-link hover:!text-[var(--current-color)]   ${pathname === "/blog"
               ? "!text-[var(--current-color)]"
               : ""
               } `}
            href="/blog"

         >
            Blog
         </Link>


      </ul>
   );
}



