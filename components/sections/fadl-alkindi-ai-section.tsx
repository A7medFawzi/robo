"use client";

import { CursorLight } from "@/components/ui/cursor-light";
import { SplineScene } from "@/components/ui/splite";

export function FadlAlkindiAiSection() {
  const whatsappNumber = "966500406029";
  const whatsappMessage = encodeURIComponent("مرحبًا، أريد التواصل بخصوص حلول الذكاء الاصطناعي");

  return (
    <section className="w-full bg-[#080808] px-4 py-14 sm:px-6 lg:px-8">
      <div className="relative mx-auto h-[620px] max-w-[1480px] overflow-hidden rounded-[18px] border border-white/10 bg-black shadow-[0_24px_90px_rgba(0,0,0,0.55)]">
        {/* Shared background, so the robot and text feel integrated */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,1)_0%,rgba(0,0,0,0.96)_38%,rgba(0,9,36,0.9)_62%,rgba(0,18,70,0.98)_100%)]" />
          <div className="absolute right-[4%] top-[-18%] h-[95%] w-[72%] rounded-full bg-blue-700/24 blur-[145px]" />
          <div className="absolute left-[-18%] top-[12%] h-[70%] w-[48%] rounded-full bg-cyan-400/8 blur-[130px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_45%,rgba(29,78,216,0.28),transparent_36%)]" />
        </div>

        {/* Cursor-following light effect */}
        <CursorLight size={430} />

        <div className="relative z-10 grid h-full grid-cols-1 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Text */}
          <div className="flex h-full items-center px-7 text-right sm:px-10 lg:px-14 xl:px-16" dir="rtl">
            <div className="max-w-[620px]">
              <h2 className="bg-gradient-to-b from-white via-white to-white/55 bg-clip-text text-5xl font-semibold leading-tight tracking-tight text-transparent sm:text-6xl lg:text-7xl xl:text-8xl">
                فضل الكندى
              </h2>

              <p className="mt-6 max-w-[580px] text-2xl font-medium leading-relaxed text-white sm:text-3xl lg:text-4xl">
                لحلول الذكاء الاصطناعى
              </p>

              <div className="mt-10 flex justify-start lg:justify-start">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full border border-emerald-400/30 bg-emerald-400 px-7 py-4 text-base font-semibold text-black shadow-[0_0_30px_rgba(52,211,153,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_0_42px_rgba(255,255,255,0.22)] sm:text-lg"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/10 transition group-hover:bg-black/5">
                    <svg
                      viewBox="0 0 32 32"
                      className="h-5 w-5"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M16.04 3.2C9.01 3.2 3.3 8.88 3.3 15.86c0 2.42.69 4.68 1.88 6.6L3.2 28.8l6.54-1.92a12.72 12.72 0 0 0 6.3 1.66c7.03 0 12.74-5.68 12.74-12.68S23.07 3.2 16.04 3.2Zm0 22.97c-2.05 0-3.96-.6-5.57-1.64l-.4-.25-3.88 1.14 1.18-3.76-.26-.42a10.1 10.1 0 0 1-1.54-5.38c0-5.7 4.7-10.33 10.47-10.33s10.47 4.64 10.47 10.33-4.7 10.31-10.47 10.31Zm5.74-7.72c-.31-.15-1.86-.91-2.15-1.02-.29-.1-.5-.15-.71.15-.21.31-.81 1.02-.99 1.22-.18.21-.36.23-.67.08-.31-.15-1.32-.48-2.52-1.54-.93-.82-1.56-1.84-1.74-2.15-.18-.31-.02-.48.13-.63.13-.13.31-.36.47-.54.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.54-.08-.15-.71-1.7-.97-2.33-.26-.61-.52-.53-.71-.54h-.61c-.21 0-.54.08-.82.39-.29.31-1.08 1.06-1.08 2.58s1.11 2.99 1.27 3.2c.16.21 2.19 3.32 5.3 4.65.74.32 1.31.51 1.76.65.74.23 1.41.2 1.94.12.59-.09 1.86-.76 2.13-1.49.26-.73.26-1.36.18-1.49-.08-.13-.29-.21-.6-.36Z" />
                    </svg>
                  </span>
                  تواصل عبر الواتساب
                </a>
              </div>
            </div>
          </div>

          {/* Robot visual - no separate card */}
          <div className="relative min-h-[330px] lg:min-h-full">
            <div className="pointer-events-none absolute inset-y-0 left-[-14%] z-[1] hidden w-[28%] bg-[linear-gradient(90deg,rgba(0,0,0,0.92),rgba(0,0,0,0.48),transparent)] lg:block" />
            <div className="absolute inset-0 z-[2]">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="h-full w-full scale-[1.04] lg:scale-[1.1] xl:scale-[1.14]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
