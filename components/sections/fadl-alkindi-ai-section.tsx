"use client";

import { CursorLight } from "@/components/ui/cursor-light";
import { SplineScene } from "@/components/ui/splite";

export function FadlAlkindiAiSection() {
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
