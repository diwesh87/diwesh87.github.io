import { ReactNode } from 'react';
import { CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';

interface CalloutProps {
  intent?: 'success' | 'warning' | 'error' | 'info';
  children: ReactNode;
}

export function Callout({ intent = 'info', children }: CalloutProps) {
  const icons = {
    success: CheckCircle,
    warning: AlertTriangle,
    error: AlertCircle,
    info: Info,
  };

  const styles = {
    success: 'bg-green-50 border-green-200 text-green-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    error: 'bg-red-50 border-red-200 text-red-800',
    info: 'bg-blue-50 border-blue-200 text-blue-800',
  };

  const Icon = icons[intent];

  return (
    <div className={`border-l-4 p-4 my-6 rounded-r-md ${styles[intent]}`}>
      <div className="flex items-start">
        <Icon className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
        <div className="prose prose-sm max-w-none">
          {children}
        </div>
      </div>
    </div>
  );
}
