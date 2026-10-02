/**
 * Web Audio API Vintage Music Box
 * Generates an authentic, soft, nostalgic music box / celesta tone
 * Zero external audio files required, zero copyright issues, instant loading.
 */

class MusicBoxPlayer {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private timer: number | null = null;
  private noteIndex = 0;

  // Romantic music box melody (frequencies in Hz: vintage melody in F major / D minor)
  // Inspired by gentle music box lullabies (Gymnopédie / Clair de Lune vibes)
  private melody: { freq: number; dur: number; delay: number }[] = [
    { freq: 523.25, dur: 1.2, delay: 0 },    // C5
    { freq: 659.25, dur: 1.2, delay: 600 },  // E5
    { freq: 783.99, dur: 1.6, delay: 1200 }, // G5
    { freq: 1046.5, dur: 2.0, delay: 1800 }, // C6
    { freq: 880.0, dur: 1.5, delay: 2600 },  // A5
    { freq: 783.99, dur: 1.5, delay: 3200 }, // G5
    { freq: 659.25, dur: 2.0, delay: 3800 }, // E5
    { freq: 587.33, dur: 1.2, delay: 4600 }, // D5
    { freq: 523.25, dur: 1.8, delay: 5200 }, // C5
    { freq: 659.25, dur: 1.5, delay: 5800 }, // E5
    { freq: 587.33, dur: 2.2, delay: 6400 }, // D5
    // phrase 2
    { freq: 440.0, dur: 1.2, delay: 7200 },  // A4
    { freq: 523.25, dur: 1.2, delay: 7800 }, // C5
    { freq: 659.25, dur: 1.6, delay: 8400 }, // E5
    { freq: 783.99, dur: 2.0, delay: 9000 }, // G5
    { freq: 698.46, dur: 1.5, delay: 9800 }, // F5
    { freq: 659.25, dur: 1.5, delay: 10400 },// E5
    { freq: 587.33, dur: 2.0, delay: 11000 },// D5
    { freq: 523.25, dur: 3.0, delay: 11800 },// C5
  ];

  private totalCycleMs = 13500;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  private playTone(freq: number, duration: number) {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    // Dual oscillator: primary sine + metallic music box tine harmonic
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gainNode = this.ctx.createGain();

    osc1.type = "sine";
    osc1.frequency.setValueAtTime(freq, now);

    // Subtle overtone of physical music box steel tine
    osc2.type = "triangle";
    osc2.frequency.setValueAtTime(freq * 2.76, now);

    // Volume envelope: fast attack, bell-like exponential decay
    gainNode.gain.setValueAtTime(0.0001, now);
    gainNode.gain.linearRampToValueAtTime(0.09, now + 0.015);
    gainNode.gain.exponentialRampToValueAtTime(0.00001, now + duration);

    osc1.connect(gainNode);
    osc2.connect(gainNode);
    gainNode.connect(this.ctx.destination);

    osc1.start(now);
    osc2.start(now);

    osc1.stop(now + duration + 0.1);
    osc2.stop(now + duration + 0.1);
  }

  public play() {
    this.initContext();
    this.isPlaying = true;

    const playSequence = () => {
      if (!this.isPlaying) return;

      this.melody.forEach((note) => {
        window.setTimeout(() => {
          if (this.isPlaying) {
            this.playTone(note.freq, note.dur);
          }
        }, note.delay);
      });

      this.timer = window.setTimeout(() => {
        if (this.isPlaying) {
          playSequence();
        }
      }, this.totalCycleMs);
    };

    playSequence();
  }

  public stop() {
    this.isPlaying = false;
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }
}

let playerInstance: MusicBoxPlayer | null = null;

export function getMusicBox(): MusicBoxPlayer {
  if (typeof window === "undefined") {
    return new MusicBoxPlayer();
  }
  if (!playerInstance) {
    playerInstance = new MusicBoxPlayer();
  }
  return playerInstance;
}
