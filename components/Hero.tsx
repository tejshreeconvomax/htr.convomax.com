// Homepage background-video hero.
// Desktop: YouTube video 0_jWOViW5W8 (16:9 landscape); Mobile: Vimeo video 1074860253 (2:3 portrait).
// Both autoplay, loop, muted — matching the live site's Elementor background-video containers.

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* Desktop video (hidden on mobile) */}
      <div className="hidden md:block">
        <div className="relative w-full" style={{ paddingTop: "38.4%" /* matches live-site hero aspect */ }}>
          <iframe
            title="HTR India"
            src="https://www.youtube-nocookie.com/embed/0_jWOViW5W8?controls=0&rel=0&playsinline=1&cc_load_policy=0&autoplay=1&mute=1&loop=1&playlist=0_jWOViW5W8"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            className="pointer-events-none absolute inset-0 h-full w-full"
            style={{ border: 0 }}
          />
        </div>
      </div>

      {/* Mobile video (hidden on desktop) */}
      <div className="block md:hidden">
        <div className="relative w-full" style={{ paddingTop: "150%" /* portrait video for mobile */ }}>
          <iframe
            title="HTR India (mobile)"
            src="https://player.vimeo.com/video/1074860253?muted=1&autoplay=1&dnt=1&loop=1&background=1&app_id=122963"
            frameBorder={0}
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            className="pointer-events-none absolute inset-0 h-full w-full"
            style={{ border: 0 }}
          />
        </div>
      </div>
    </section>
  );
}
