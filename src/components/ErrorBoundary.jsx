import React from 'react';
import { AlertCircle, RotateCcw, Home } from 'lucide-react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Unhandled Application Error caught by ErrorBoundary:', error, errorInfo);
    this.setState({ errorInfo });
  }

  handleResetAndReload = () => {
    try {
      localStorage.removeItem('naveen_completed_tasks');
      localStorage.removeItem('naveen_hub_theme');
    } catch (e) {}
    window.location.href = import.meta.env.BASE_URL;
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-4 font-sans">
          <div className="bg-slate-800 border border-slate-700 rounded-2xl max-w-lg w-full p-8 shadow-2xl text-center space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-rose-500/20 text-rose-400 flex items-center justify-center mx-auto">
              <AlertCircle className="w-8 h-8" />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Application Rendering Notice
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed">
                An unexpected component state error occurred. You can reload the page or reset the local session to return to the dashboard.
              </p>
            </div>

            {this.state.error && (
              <div className="bg-slate-950 p-4 rounded-xl text-left font-mono text-xs text-rose-300 overflow-auto max-h-40 border border-slate-800">
                {this.state.error.toString()}
              </div>
            )}

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <Home className="w-4 h-4" />
                <span>Reload Page</span>
              </button>

              <button
                type="button"
                onClick={this.handleResetAndReload}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-sm font-bold bg-slate-700 hover:bg-slate-600 text-slate-200 transition-colors flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reset Cache &amp; Home</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
