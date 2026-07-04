/**
 * Fixed full-screen paper-grain texture. Ported from the original
 * `applyTheme()` SVG-noise generator — now a static overlay, no JS.
 */
const NOISE_SVG =
  "<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='140' height='140' filter='url(#n)'/></svg>";

export const GrainOverlay = () => {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-40 opacity-[0.06] mix-blend-multiply"
      style={{
        backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(NOISE_SVG)}")`,
      }}
    />
  );
}
