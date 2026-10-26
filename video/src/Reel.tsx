import type { CSSProperties } from 'react';
import { AbsoluteFill, Easing, Freeze, Img, OffthreadVideo, Sequence, interpolate, staticFile, useCurrentFrame } from 'remotion';
import { loadFont } from '@remotion/google-fonts/InterTight';

const { fontFamily } = loadFont('normal', { weights: ['400', '500'], subsets: ['latin'] });

// 10s seamless loop for the site's video band. Footage: Pexels (free licence, no credit
// required) 17402697 tollway, 40304907 container truck, 34646588 car carrier.
export const REEL_FRAMES = 300;
const FADE = 12;
const clamp = { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' } as const;

const SHOTS = [
  { src: 'clips/tollway.mp4', from: 0, dur: 110 },
  { src: 'clips/container.mp4', from: 98, dur: 104 },
  { src: 'clips/car-carrier.mp4', from: 190, dur: 110 },
];

// Route bar: Sabang (west) to Merauke (east), with Bekasi where the group is based.
const X0 = 140;
const X1 = 1780;
const Y = 930;
const STOPS = [
  { name: 'Sabang', at: 0 },
  { name: 'Bekasi', at: 0.34 },
  { name: 'Merauke', at: 1 },
];

const Shot = ({ src, dur, fadeIn }: { src: string; dur: number; fadeIn: boolean }) => {
  const f = useCurrentFrame();
  const opacity = fadeIn ? interpolate(f, [0, FADE], [0, 1], clamp) : 1;
  const scale = interpolate(f, [0, dur], [1, 1.04]); // slow push-in keeps every shot moving
  return (
    <AbsoluteFill style={{ opacity }}>
      <OffthreadVideo src={staticFile(src)} muted style={{ width: '100%', height: '100%', objectFit: 'cover', transform: `scale(${scale})` }} />
    </AbsoluteFill>
  );
};

export const Reel = () => {
  const frame = useCurrentFrame();
  const p = interpolate(frame, [20, 270], [0, 1], { ...clamp, easing: Easing.inOut(Easing.cubic) });
  // Route fades in at the start and out at the end, so frame 299 flows into frame 0.
  const routeOpacity = interpolate(frame, [0, FADE, REEL_FRAMES - 20, REEL_FRAMES - 1], [0, 1, 1, 0], clamp);
  const headX = X0 + p * (X1 - X0);

  const text: CSSProperties = { fontFamily, color: '#FFFFFF', letterSpacing: '-0.02em', position: 'absolute' };

  return (
    <AbsoluteFill style={{ backgroundColor: '#1E1E1E' }}>
      {SHOTS.map((s, i) => (
        <Sequence key={s.src} from={s.from} durationInFrames={s.dur}>
          <Shot src={s.src} dur={s.dur} fadeIn={i > 0} />
        </Sequence>
      ))}
      {/* tail: the first shot's opening frame fades back in for a seamless loop */}
      <Sequence from={REEL_FRAMES - FADE} durationInFrames={FADE}>
        <AbsoluteFill style={{ opacity: interpolate(frame, [REEL_FRAMES - FADE, REEL_FRAMES - 1], [0, 1], clamp) }}>
          <Freeze frame={0}>
            <OffthreadVideo src={staticFile(SHOTS[0].src)} muted style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </Freeze>
        </AbsoluteFill>
      </Sequence>

      {/* legibility scrims for the brand and the route bar */}
      <AbsoluteFill style={{ background: 'linear-gradient(to top, rgba(10,20,40,.72) 0%, rgba(10,20,40,0) 42%), linear-gradient(to bottom, rgba(10,20,40,.45) 0%, rgba(10,20,40,0) 22%)' }} />

      <div style={{ position: 'absolute', left: 120, top: 84, display: 'flex', alignItems: 'center', gap: 22 }}>
        <Img src={staticFile('tachi-mark-white.png')} style={{ height: 76 }} />
        <span style={{ ...text, position: 'static', fontSize: 44, fontWeight: 500 }}>Tachi Logistics</span>
      </div>

      <div style={{ position: 'absolute', inset: 0, opacity: routeOpacity }}>
        <div style={{ position: 'absolute', left: X0, top: Y - 1, width: X1 - X0, height: 2, background: 'rgba(255,255,255,.35)' }} />
        <div style={{ position: 'absolute', left: X0, top: Y - 2, width: X1 - X0, height: 4, background: '#FFFFFF', transform: `scaleX(${p})`, transformOrigin: 'left' }} />
        {STOPS.map((s) => {
          const x = X0 + s.at * (X1 - X0);
          const lit = interpolate(p, [s.at - 0.03, s.at + 0.02], [0.4, 1], clamp);
          const align = s.at === 0 ? 'left' : s.at === 1 ? 'right' : 'center';
          const shift = align === 'left' ? 0 : align === 'right' ? -100 : -50;
          return (
            <div key={s.name}>
              <div style={{ position: 'absolute', left: x - 9, top: Y - 9, width: 18, height: 18, borderRadius: 9, background: '#FFFFFF', opacity: lit }} />
              <span style={{ ...text, left: x, top: Y + 30, fontSize: 36, opacity: lit, transform: `translateX(${shift}%)`, whiteSpace: 'nowrap' }}>{s.name}</span>
            </div>
          );
        })}
        <div style={{ position: 'absolute', left: headX - 15, top: Y - 15, width: 30, height: 30, borderRadius: 15, background: '#1466C8', border: '5px solid #FFFFFF', boxSizing: 'border-box', opacity: p > 0 ? 1 : 0 }} />
      </div>
    </AbsoluteFill>
  );
};
