interface ButtonLoadingProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'outline';
}

export default function ButtonLoading({ size = 'md', variant = 'primary' }: ButtonLoadingProps) {
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-base',
    lg: 'px-6 py-4 text-lg'
  };

  const variantClasses = {
    primary: 'bg-blue-600 text-white',
    secondary: 'bg-gray-600 text-white',
    outline: 'border-2 border-blue-600 text-blue-600 bg-transparent'
  };

  return (
    <button 
      disabled
      className={`${sizeClasses[size]} ${variantClasses[variant]} rounded-lg font-medium flex items-center justify-center space-x-2 space-x-reverse`}
    >
      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
      <span>جاري التحميل...</span>
    </button>
  );
} 