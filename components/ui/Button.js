export const Button = ({ 
  children, 
  variant = 'solid', 
  size = 'md',
  className = '',
  ...props 
}) => {
  const baseStyles = 'font-semibold transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-lg hover:shadow-xl';
  
  const variants = {
    solid: 'bg-accent-blue text-white hover:bg-opacity-90 hover:scale-110 hover:shadow-2xl focus:ring-accent-blue',
    outline: 'border-2 border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white hover:scale-105 focus:ring-accent-blue',
    text: 'text-accent-blue underline hover:text-opacity-80 focus:ring-accent-blue',
    secondary: 'bg-accent-green text-white hover:bg-opacity-90 hover:scale-110 hover:shadow-2xl focus:ring-accent-green',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-10 py-5 text-lg font-bold',
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
