import React, { useState, useRef } from "react";
import {
  Wifi,
  Bluetooth,
  Moon,
  Volume2,
  SunMedium,
  Sparkles,
  Music,
  Play,
  Pause,
  Radio,
  Share2,
  Laptop,
} from "lucide-react";
import { useMacOs } from "../../context/MacOsContext";
import { useSoundEffects } from "../../hooks/useSoundEffects";

export const ControlCenter = () => {
  const {
    isControlCenterOpen,
    setIsControlCenterOpen,
    soundEnabled,
    setSoundEnabled,
    wallpapers,
    currentWallpaperId,
    setWallpaperId,
    brightness,
    setBrightness,
    showToast,
    viewMode,
    setViewMode,
  } = useMacOs();
  const { playClick, playOpen } = useSoundEffects();

  const [wifiEnabled, setWifiEnabled] = useState(true);
  const [bluetoothEnabled, setBluetoothEnabled] = useState(true);
  const [airdropEnabled, setAirdropEnabled] = useState(true);
  const [focusEnabled, setFocusEnabled] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [volume, setVolume] = useState(75);

  const audioContextRef = useRef(null);
  const synthNodesRef = useRef([]);

  const toggleDevMusic = () => {
    playClick();
    if (isPlayingMusic) {
      synthNodesRef.current.forEach((node) => {
        try {
          node.stop();
          node.disconnect();
        } catch {}
      });
      synthNodesRef.current = [];
      setIsPlayingMusic(false);
      showToast("Ambient Dev Music paused");
    } else {
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        const ctx = new AudioCtx();
        audioContextRef.current = ctx;

        const chordFreqs = [130.81, 155.56, 196.0, 233.08, 293.66];
        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.04 * (volume / 100), ctx.currentTime);
        masterGain.connect(ctx.destination);

        const nodes = chordFreqs.map((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          const filter = ctx.createBiquadFilter();

          osc.type = "sine";
          osc.frequency.setValueAtTime(freq, ctx.currentTime);
          filter.type = "lowpass";
          filter.frequency.setValueAtTime(400 + idx * 80, ctx.currentTime);

          gain.gain.setValueAtTime(0.15, ctx.currentTime);
          osc.connect(filter);
          filter.connect(gain);
          gain.connect(masterGain);

          osc.start();
          return osc;
        });

        synthNodesRef.current = nodes;
        setIsPlayingMusic(true);
        showToast("Playing Ambient Dev Beats 🎧");
      } catch {
        showToast("Audio active");
      }
    }
  };

  if (!isControlCenterOpen) return null;

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="fixed right-3 top-9 w-[320px] rounded-[20px] bg-[#1e1e24]/85 backdrop-blur-[36px] backdrop-saturate-[210%] border border-white/20 p-3 text-slate-100 shadow-[0_30px_70px_rgba(0,0,0,0.7),inset_0_0.5px_0.5px_rgba(255,255,255,0.4)] z-[9999] animate-in slide-in-from-top-2 duration-100 select-none space-y-2.5 font-sans"
    >
      {/* Top 2-col Apple Connectivity Module */}
      <div className="grid grid-cols-2 gap-2">
        {/* Left Column: Wi-Fi & Bluetooth capsule */}
        <div className="rounded-2xl bg-white/[0.08] border border-white/[0.08] p-2.5 space-y-2.5 shadow-sm">
          {/* Wi-Fi */}
          <div
            onClick={() => {
              setWifiEnabled(!wifiEnabled);
              playClick();
              showToast(wifiEnabled ? "Wi-Fi Disabled" : "Wi-Fi: Antigravity 5G");
            }}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div
              className={`grid h-7 w-7 place-items-center rounded-full transition-colors ${
                wifiEnabled ? "bg-blue-500 text-white shadow" : "bg-white/10 text-slate-400"
              }`}
            >
              <Wifi size={14} />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold leading-none text-white">Wi-Fi</p>
              <p className="text-[10px] text-slate-400 truncate mt-0.5">
                {wifiEnabled ? "Antigravity 5G" : "Off"}
              </p>
            </div>
          </div>

          {/* Bluetooth */}
          <div
            onClick={() => {
              setBluetoothEnabled(!bluetoothEnabled);
              playClick();
              showToast(bluetoothEnabled ? "Bluetooth Disabled" : "Bluetooth: AirPods Max");
            }}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div
              className={`grid h-7 w-7 place-items-center rounded-full transition-colors ${
                bluetoothEnabled ? "bg-blue-500 text-white shadow" : "bg-white/10 text-slate-400"
              }`}
            >
              <Bluetooth size={14} />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold leading-none text-white">Bluetooth</p>
              <p className="text-[10px] text-slate-400 truncate mt-0.5">
                {bluetoothEnabled ? "AirPods Max" : "Off"}
              </p>
            </div>
          </div>

          {/* AirDrop */}
          <div
            onClick={() => {
              setAirdropEnabled(!airdropEnabled);
              playClick();
              showToast(airdropEnabled ? "AirDrop: Off" : "AirDrop: Contacts Only");
            }}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div
              className={`grid h-7 w-7 place-items-center rounded-full transition-colors ${
                airdropEnabled ? "bg-blue-500 text-white shadow" : "bg-white/10 text-slate-400"
              }`}
            >
              <Share2 size={13} />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold leading-none text-white">AirDrop</p>
              <p className="text-[10px] text-slate-400 truncate mt-0.5">
                {airdropEnabled ? "Contacts Only" : "Off"}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Focus & Classic View */}
        <div className="flex flex-col gap-2">
          {/* Focus mode */}
          <div
            onClick={() => {
              setFocusEnabled(!focusEnabled);
              playClick();
              showToast(focusEnabled ? "Focus Disabled" : "Focus: Deep Work Active");
            }}
            className={`flex-1 rounded-2xl p-2.5 flex items-center gap-2.5 cursor-pointer border transition-colors shadow-sm ${
              focusEnabled
                ? "bg-purple-600/30 border-purple-500/40 text-purple-200"
                : "bg-white/[0.08] border-white/[0.08] text-slate-300 hover:bg-white/[0.12]"
            }`}
          >
            <div
              className={`grid h-7 w-7 place-items-center rounded-full ${
                focusEnabled ? "bg-purple-500 text-white" : "bg-white/10 text-slate-400"
              }`}
            >
              <Moon size={14} />
            </div>
            <div>
              <p className="text-xs font-semibold leading-none text-white">Focus</p>
              <p className="text-[10px] text-slate-400 mt-0.5">{focusEnabled ? "On" : "Off"}</p>
            </div>
          </div>

          {/* Switch View Mode */}
          <div
            onClick={() => {
              setViewMode(viewMode === "macos" ? "classic" : "macos");
              setIsControlCenterOpen(false);
              showToast(viewMode === "macos" ? "Switched to Classic Portfolio" : "Switched to macOS Desktop");
            }}
            className="flex-1 rounded-2xl p-2.5 flex items-center gap-2.5 cursor-pointer bg-white/[0.08] border border-white/[0.08] hover:border-amber-400/40 text-amber-300 transition-colors shadow-sm"
          >
            <div className="grid h-7 w-7 place-items-center rounded-full bg-amber-500/20 text-amber-300">
              <Laptop size={14} />
            </div>
            <div>
              <p className="text-xs font-semibold leading-none text-white">Portfolio</p>
              <p className="text-[10px] text-amber-300/80 mt-0.5">Classic View</p>
            </div>
          </div>
        </div>
      </div>

      {/* Apple Display Brightness Slider Card */}
      <div className="rounded-2xl bg-white/[0.08] border border-white/[0.08] p-3 space-y-1.5 shadow-sm">
        <div className="flex items-center justify-between text-xs text-slate-200">
          <span className="flex items-center gap-1.5 font-semibold text-white">
            <SunMedium size={14} className="text-amber-400" />
            Display
          </span>
          <span className="font-mono text-[10px] text-slate-400">{brightness}%</span>
        </div>
        <input
          type="range"
          min="40"
          max="120"
          value={brightness}
          onChange={(e) => setBrightness(Number(e.target.value))}
          className="w-full h-3 rounded-full bg-slate-800 accent-blue-500 cursor-pointer"
        />
      </div>

      {/* Apple Sound Volume Slider Card */}
      <div className="rounded-2xl bg-white/[0.08] border border-white/[0.08] p-3 space-y-1.5 shadow-sm">
        <div className="flex items-center justify-between text-xs text-slate-200">
          <span className="flex items-center gap-1.5 font-semibold text-white">
            <Volume2 size={14} className="text-blue-400" />
            Sound
          </span>
          <span className="font-mono text-[10px] text-slate-400">{volume}%</span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          className="w-full h-3 rounded-full bg-slate-800 accent-blue-500 cursor-pointer"
        />
      </div>

      {/* Now Playing Music Module */}
      <div className="rounded-2xl bg-white/[0.08] border border-white/[0.08] p-3 flex items-center justify-between gap-3 shadow-sm">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white shadow-md shrink-0">
            <Music size={18} />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-bold text-white truncate">Antigravity Synthwave</p>
            <p className="text-[10px] text-slate-400 truncate mt-0.5">Deep Focus Space Ambient</p>
          </div>
        </div>

        <button
          onClick={toggleDevMusic}
          className="grid h-9 w-9 place-items-center rounded-full bg-white text-slate-950 font-bold transition-transform hover:scale-105 active:scale-95 shrink-0 shadow-lg"
        >
          {isPlayingMusic ? <Pause size={15} /> : <Play size={15} className="ml-0.5" />}
        </button>
      </div>

      {/* Wallpaper Themes */}
      <div className="rounded-2xl bg-white/[0.08] border border-white/[0.08] p-2.5 space-y-1.5 shadow-sm">
        <div className="flex items-center justify-between text-xs text-slate-300 px-0.5">
          <span className="flex items-center gap-1.5 font-semibold text-white">
            <Sparkles size={13} className="text-cyan-400" />
            Wallpaper
          </span>
        </div>
        <div className="grid grid-cols-5 gap-1.5 pt-0.5">
          {wallpapers.map((wp) => (
            <button
              key={wp.id}
              onClick={() => {
                setWallpaperId(wp.id);
                playClick();
                showToast(`Wallpaper: ${wp.name}`);
              }}
              title={wp.name}
              className={`h-8 rounded-xl border bg-gradient-to-br ${wp.previewGradient} transition-transform hover:scale-105 ${
                currentWallpaperId === wp.id
                  ? "border-blue-400 ring-2 ring-blue-400/60 scale-105 shadow-md"
                  : "border-white/15 opacity-75 hover:opacity-100"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
