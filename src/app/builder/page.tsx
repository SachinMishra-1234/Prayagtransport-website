"use client";
import { useEffect, useMemo, useRef, useState } from 'react';

export default function BuilderPage() {
  const [text, setText] = useState('https://example.com');
  const [fg, setFg] = useState('#111827');
  const [bg, setBg] = useState('#ffffff');
  const [size, setSize] = useState(256);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Lazy-load qrcode lib in the client only
  const QR = useMemo(() => {
    return import('qrcode');
  }, []);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const qrcode = await QR;
      if (cancelled) return;
      const canvas = canvasRef.current;
      if (!canvas) return;
      await qrcode.toCanvas(canvas, text || ' ', {
        width: size,
        margin: 2,
        color: { dark: fg, light: bg },
      });
    })();
    return () => { cancelled = true; };
  }, [QR, text, fg, bg, size]);

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-4">
        <div>
          <label className="block text-sm">Content</label>
          <input className="w-full rounded border px-3 py-2" value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm">Foreground</label>
            <input className="h-10 w-full cursor-pointer" type="color" value={fg} onChange={(e) => setFg(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm">Background</label>
            <input className="h-10 w-full cursor-pointer" type="color" value={bg} onChange={(e) => setBg(e.target.value)} />
          </div>
        </div>
        <div>
          <label className="block text-sm">Size: {size}px</label>
          <input type="range" min={128} max={512} value={size} onChange={(e) => setSize(Number(e.target.value))} />
        </div>
        <button
          className="rounded border px-3 py-2"
          onClick={() => {
            const url = canvasRef.current?.toDataURL('image/png');
            if (!url) return;
            const a = document.createElement('a');
            a.href = url;
            a.download = 'qr.png';
            a.click();
          }}
        >
          Download PNG
        </button>
      </div>
      <div className="flex items-center justify-center">
        <canvas ref={canvasRef} width={size} height={size} className="rounded border bg-white p-2" />
      </div>
    </div>
  );
}
