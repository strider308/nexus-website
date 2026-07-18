/**
 * Nexus brand standard GSAP easing configurations.
 * No elastic or bounce curves to align with a precise, high-trust visual language.
 */
export const GSAP_EASES = {
  reveal: "power3.out",        // Standard elements reveal
  spatial: "power2.inOut",     // Large movement or container transforms
  responsive: "power4.out",    // Hover or quick button interactions
};

export default GSAP_EASES;
