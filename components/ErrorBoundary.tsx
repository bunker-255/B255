import React, { ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-bunker-950 flex flex-col items-center justify-center p-4 text-center font-mono">
          <div className="bg-bunker-900 border border-red-500/30 p-8 rounded-lg max-w-md w-full relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-red-500 animate-pulse"></div>
            <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-6" />
            <h1 className="text-2xl text-white font-bold mb-2">SYSTEM FAILURE</h1>
            <p className="text-slate-400 text-sm mb-6">
              Critical rendering error detected. The interface module failed to load.
            </p>
            <div className="bg-black/50 p-3 rounded text-left mb-6 overflow-auto max-h-32 border border-white/5">
                <code className="text-red-400 text-xs">
                    {this.state.error?.message || "Unknown Error"}
                </code>
            </div>
            <button 
              onClick={() => window.location.reload()}
              className="w-full py-3 bg-red-500/10 border border-red-500/50 text-red-500 hover:bg-red-500 hover:text-white transition-all uppercase tracking-widest text-xs font-bold flex items-center justify-center gap-2"
            >
              <RefreshCw size={14} />
              Reboot System
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}