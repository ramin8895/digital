"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const MOTION_OK = "(prefers-reduced-motion: no-preference)";
export const POINTER_OK = "(hover: hover) and (prefers-reduced-motion: no-preference)";

export { gsap, ScrollTrigger, useGSAP };
