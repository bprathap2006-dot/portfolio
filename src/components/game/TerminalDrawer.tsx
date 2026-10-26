import React, { useState, useRef, useEffect } from 'react';
import { useGame } from '../../context/GameContext';
import { soundEngine } from '../../utils/soundEngine';
import { profileData } from '../../data/profileData';
import { Terminal as TerminalIcon, X, CornerDownLeft } from 'lucide-react';

interface OutputLine {
  text: string;
  type?: 'command' | 'output' | 'error' | 'success' | 'system';
}

export const TerminalDrawer: React.FC = () => {
  const { isTerminalOpen, toggleTerminal, navigateTo } = useGame();
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<OutputLine[]>([
    { text: 'NEXUS CLI v2.0 // COMMAND SHELL INITIALIZED', type: 'system' },
    { text: 'Type "help" for a list of available subroutines.', type: 'output' },
  ]);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isTerminalOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isTerminalOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isTerminalOpen) return null;

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    soundEngine.playKey();
    const newHistory: OutputLine[] = [...history, { text: `> ${trimmed}`, type: 'command' }];
    const parts = trimmed.toLowerCase().split(' ');
    const main = parts[0];
    const arg = parts[1];

    switch (main) {
      case 'help':
        newHistory.push(
          { text: 'AVAILABLE SUBROUTINES:', type: 'system' },
          { text: '  whoami    - Developer identification and standing', type: 'output' },
          { text: '  skills    - List core competencies across the toolchain', type: 'output' },
          { text: '  projects  - Show active engineering research missions', type: 'output' },
          { text: '  resume    - Download verified PDF curriculum vitae', type: 'output' },
          { text: '  contact   - Display communication channels and direct lines', type: 'output' },
          { text: '  warp <id> - Teleport to sector (e.g. "warp skills", "warp map")', type: 'output' },
          { text: '  clear     - Wipe command terminal history', type: 'output' },
          { text: '  exit      - Close this terminal drawer', type: 'output' }
        );
        break;

      case 'whoami':
        newHistory.push(
          { text: `IDENTITY: ${profileData.name} // ${profileData.professionalTitle}`, type: 'success' },
          { text: `DEGREE: ${profileData.degree} (2023 - 2027), CGPA: ${profileData.cgpa}`, type: 'output' },
          { text: `COLLEGE: ${profileData.college}, ${profileData.location}`, type: 'output' },
          { text: `HEADLINE: "${profileData.headline}"`, type: 'output' }
        );
        break;

      case 'skills':
        newHistory.push(
          { text: 'TOOLCHAIN CLUSTER:', type: 'system' },
          { text: '  [Programming] Java, Python, SQL', type: 'output' },
          { text: '  [Core CS]     OOP, Data Structures, DBMS', type: 'output' },
          { text: '  [Dev Tools]   VS Code, Git, GitHub', type: 'output' },
          { text: '  [AI / ML]     TensorFlow, Librosa, NumPy, Scikit-learn, Deep Learning', type: 'output' },
          { text: '  [Cybersec]    Scapy, Reinforcement Learning, Network Traffic Analysis', type: 'output' }
        );
        break;

      case 'projects':
        newHistory.push(
          { text: 'ACTIVE MISSIONS:', type: 'system' },
          { text: '  01. DeepShield - AI Fake Voice Detection via Librosa MFCC & DNN', type: 'output' },
          { text: '  02. RL Zero-Day Mitigation - Autonomous Defense for Academic LANs', type: 'output' }
        );
        break;

      case 'resume':
        soundEngine.playScan();
        newHistory.push({ text: 'DISPATCHING /Prathap-B-Resume.pdf TO CLIENT...', type: 'success' });
        const link = document.createElement('a');
        link.href = '/Prathap-B-Resume.pdf';
        link.download = 'Prathap-B-Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        break;

      case 'contact':
        newHistory.push(
          { text: `EMAIL:    ${profileData.email}`, type: 'output' },
          { text: `PHONE:    ${profileData.phone}`, type: 'output' },
          { text: `GITHUB:   ${profileData.githubUrl}`, type: 'output' },
          { text: `LINKEDIN: ${profileData.linkedinUrl}`, type: 'output' }
        );
        break;

      case 'warp':
        if (!arg || arg === 'map' || arg === 'world') {
          navigateTo('/');
          newHistory.push({ text: 'WARPING TO THE NEXUS WORLD MAP...', type: 'success' });
        } else if (arg === 'about' || arg === 'identity') {
          navigateTo('/about');
          newHistory.push({ text: 'WARPING TO IDENTITY CORE...', type: 'success' });
        } else if (arg === 'skills' || arg === 'tech') {
          navigateTo('/skills');
          newHistory.push({ text: 'WARPING TO TECH LAB...', type: 'success' });
        } else if (arg === 'projects' || arg === 'labs') {
          navigateTo('/projects');
          newHistory.push({ text: 'WARPING TO PROJECT DIMENSION...', type: 'success' });
        } else if (arg === 'deepshield') {
          navigateTo('/projects/deepshield');
          newHistory.push({ text: 'WARPING TO DEEPSHIELD MISSION...', type: 'success' });
        } else if (arg === 'zeroday' || arg === 'mitigation') {
          navigateTo('/projects/zero-day-mitigation');
          newHistory.push({ text: 'WARPING TO RL MITIGATION MISSION...', type: 'success' });
        } else if (arg === 'experience' || arg === 'hanon') {
          navigateTo('/experience');
          newHistory.push({ text: 'WARPING TO EXPERIENCE ARCHIVE...', type: 'success' });
        } else if (arg === 'education' || arg === 'academic') {
          navigateTo('/education');
          newHistory.push({ text: 'WARPING TO ACADEMIC VAULT...', type: 'success' });
        } else if (arg === 'research') {
          navigateTo('/research');
          newHistory.push({ text: 'WARPING TO RESEARCH TERMINAL...', type: 'success' });
        } else if (arg === 'achievements') {
          navigateTo('/achievements');
          newHistory.push({ text: 'WARPING TO ACHIEVEMENT MODULE...', type: 'success' });
        } else if (arg === 'contact') {
          navigateTo('/contact');
          newHistory.push({ text: 'WARPING TO CONTACT PORTAL...', type: 'success' });
        } else {
          newHistory.push({ text: `Unknown warp destination: "${arg}". Try "warp skills", "warp projects", "warp contact".`, type: 'error' });
        }
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'exit':
        toggleTerminal();
        return;

      default:
        newHistory.push({ text: `Command not recognized: "${trimmed}". Type "help" for subroutines.`, type: 'error' });
        break;
    }

    setHistory(newHistory);
    setInputVal('');
  };

  return (
    <div 
      className="fixed inset-y-0 right-0 z-50 w-full max-w-lg bg-[#050813]/95 border-l border-cyan-500/40 shadow-2xl backdrop-blur-2xl flex flex-col font-mono text-xs animate-fade-in"
      role="dialog"
      aria-label="Nexus Command Terminal"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-3.5 border-b border-slate-800 bg-[#080d1e]">
        <div className="flex items-center space-x-2 text-cyan-400">
          <TerminalIcon className="w-4 h-4 text-cyan-400" />
          <span className="font-bold tracking-wider">PRATHAP.NEXUS // CLI TERMINAL</span>
        </div>
        <button
          onClick={toggleTerminal}
          className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          title="Close Terminal [ESC or ~]"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Terminal Output Stream */}
      <div className="flex-1 p-4 overflow-y-auto space-y-1.5 text-slate-300">
        {history.map((line, idx) => (
          <div
            key={idx}
            className={`${
              line.type === 'command'
                ? 'text-cyan-300 font-semibold pt-1'
                : line.type === 'system'
                ? 'text-cyan-400 font-bold'
                : line.type === 'success'
                ? 'text-emerald-400'
                : line.type === 'error'
                ? 'text-rose-400'
                : 'text-slate-300'
            }`}
          >
            {line.text}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Command Input Prompt */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCommand(inputVal);
        }}
        className="p-3 border-t border-slate-800 bg-[#080d1e] flex items-center space-x-2"
      >
        <span className="text-cyan-400 font-bold">&gt;</span>
        <input
          ref={inputRef}
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Type command (e.g. help, whoami, warp projects)..."
          className="flex-1 bg-transparent text-slate-100 placeholder-slate-600 focus:outline-none text-xs"
        />
        <button
          type="submit"
          className="p-1 rounded text-cyan-400 hover:text-white"
          title="Execute"
        >
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
};
