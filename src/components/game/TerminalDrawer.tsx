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
    { text: 'DEVELOPER CLI // COMMAND SHELL INITIALIZED', type: 'system' },
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
          { text: 'AVAILABLE COMMANDS:', type: 'system' },
          { text: '  whoami    - Developer identification and credentials', type: 'output' },
          { text: '  skills    - List core competencies across the stack', type: 'output' },
          { text: '  projects  - Show active software & research projects', type: 'output' },
          { text: '  resume    - Download verified PDF curriculum vitae', type: 'output' },
          { text: '  contact   - Display communication channels and direct lines', type: 'output' },
          { text: '  goto <id> - Navigate to section (e.g. "goto skills", "goto projects")', type: 'output' },
          { text: '  clear     - Wipe command terminal history', type: 'output' },
          { text: '  exit      - Close this terminal drawer', type: 'output' }
        );
        break;

      case 'whoami':
        newHistory.push(
          { text: `IDENTITY: ${profileData.name} // ${profileData.professionalTitle}`, type: 'success' },
          { text: `DEGREE: ${profileData.degree} (2023 - 2027), CGPA: ${profileData.cgpa}`, type: 'output' },
          { text: `COLLEGE: ${profileData.college}, ${profileData.location}`, type: 'output' },
          { text: `FOCUS: "Building Software. Exploring AI. Advancing Technology."`, type: 'output' }
        );
        break;

      case 'skills':
        newHistory.push(
          { text: 'TECHNOLOGY STACK:', type: 'system' },
          { text: '  [Programming] Java, Python, SQL', type: 'output' },
          { text: '  [Core CS]     OOP, Data Structures, DBMS', type: 'output' },
          { text: '  [Dev Tools]   VS Code, Git, GitHub', type: 'output' },
          { text: '  [AI / ML]     TensorFlow, Librosa, NumPy, Scikit-learn, Deep Learning', type: 'output' },
          { text: '  [Cybersec]    Scapy, Reinforcement Learning, Network Traffic Analysis', type: 'output' }
        );
        break;

      case 'projects':
        newHistory.push(
          { text: 'FEATURED PROJECTS:', type: 'system' },
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

      case 'goto':
      case 'warp':
        if (!arg || arg === 'map' || arg === 'home' || arg === 'overview') {
          navigateTo('/');
          newHistory.push({ text: 'NAVIGATING TO OVERVIEW...', type: 'success' });
        } else if (arg === 'about' || arg === 'profile') {
          navigateTo('/about');
          newHistory.push({ text: 'NAVIGATING TO DEVELOPER PROFILE...', type: 'success' });
        } else if (arg === 'skills' || arg === 'tech') {
          navigateTo('/skills');
          newHistory.push({ text: 'NAVIGATING TO TECHNOLOGY STACK...', type: 'success' });
        } else if (arg === 'projects' || arg === 'showcase') {
          navigateTo('/projects');
          newHistory.push({ text: 'NAVIGATING TO PROJECT SHOWCASE...', type: 'success' });
        } else if (arg === 'deepshield') {
          navigateTo('/projects/deepshield');
          newHistory.push({ text: 'NAVIGATING TO DEEPSHIELD...', type: 'success' });
        } else if (arg === 'zeroday' || arg === 'mitigation') {
          navigateTo('/projects/zero-day-mitigation');
          newHistory.push({ text: 'NAVIGATING TO ZERO-DAY MITIGATION...', type: 'success' });
        } else if (arg === 'experience' || arg === 'hanon') {
          navigateTo('/experience');
          newHistory.push({ text: 'NAVIGATING TO EXPERIENCE...', type: 'success' });
        } else if (arg === 'education' || arg === 'academic') {
          navigateTo('/education');
          newHistory.push({ text: 'NAVIGATING TO ACADEMIC QUALIFICATIONS...', type: 'success' });
        } else if (arg === 'research') {
          navigateTo('/research');
          newHistory.push({ text: 'NAVIGATING TO RESEARCH & INNOVATION...', type: 'success' });
        } else if (arg === 'achievements' || arg === 'credentials') {
          navigateTo('/achievements');
          newHistory.push({ text: 'NAVIGATING TO CREDENTIALS...', type: 'success' });
        } else if (arg === 'contact' || arg === 'connect') {
          navigateTo('/contact');
          newHistory.push({ text: "NAVIGATING TO LET'S CONNECT...", type: 'success' });
        } else {
          newHistory.push({ text: `Unknown destination: "${arg}". Try "goto skills", "goto projects", "goto contact".`, type: 'error' });
        }
        break;

      case 'clear':
        setHistory([]);
        return;

      case 'exit':
        toggleTerminal();
        return;

      default:
        newHistory.push(
          { text: `command not found: "${trimmed}". Type "help" for available commands.`, type: 'error' }
        );
        break;
    }

    setHistory(newHistory);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
      setInputVal('');
    } else if (e.key === 'Escape') {
      toggleTerminal();
    }
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex flex-col justify-end pointer-events-none">
      <div 
        className="pointer-events-auto mx-auto w-full max-w-4xl bg-[#03060f]/95 border-t border-x border-cyan-500/40 rounded-t-2xl shadow-[0_-10px_40px_rgba(0,240,255,0.2)] backdrop-blur-2xl overflow-hidden font-mono text-xs animate-fade-up"
        style={{ maxHeight: '42vh' }}
      >
        
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-cyan-900/40 text-cyan-300">
          <div className="flex items-center space-x-2">
            <TerminalIcon className="w-4 h-4 text-cyan-400" />
            <span className="font-bold tracking-widest text-[11px]">DEVELOPER TERMINAL // SHELL</span>
          </div>

          <div className="flex items-center space-x-3 text-slate-400">
            <span className="text-[10px] hidden sm:inline">PRESS ESC OR ~ TO CLOSE</span>
            <button
              onClick={toggleTerminal}
              className="p-1 hover:text-white hover:bg-slate-800 rounded transition-colors"
              aria-label="Close Terminal Drawer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Output Stream */}
        <div className="p-4 overflow-y-auto space-y-1.5 h-48 sm:h-56 text-left selection:bg-cyan-500/30 selection:text-white">
          {history.map((line, idx) => (
            <div
              key={idx}
              className={`leading-relaxed break-words ${
                line.type === 'command'
                  ? 'text-cyan-400 font-semibold'
                  : line.type === 'system'
                  ? 'text-violet-300 font-bold'
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
        <div className="flex items-center px-4 py-2.5 bg-slate-950 border-t border-slate-800/80">
          <span className="text-cyan-400 font-bold mr-2">&gt;</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type command (e.g. help, whoami, goto projects)..."
            className="flex-1 bg-transparent text-slate-100 placeholder-slate-600 focus:outline-none font-mono text-xs"
            autoFocus
          />
          <button
            onClick={() => {
              handleCommand(inputVal);
              setInputVal('');
            }}
            className="text-cyan-400 hover:text-cyan-300 ml-2"
            title="Execute Command"
          >
            <CornerDownLeft className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
