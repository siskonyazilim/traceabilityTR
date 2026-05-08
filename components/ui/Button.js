export const Button = ({ 
  children, 
  variant = 'solid', 
  size = 'md',
  className = '',
  ...props 
}) => {
  const baseStyles = 'font-semibold transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-lg hover:shadow-xl';
  
  const variants = {
    solid: 'bg-secondary-blue text-white hover:bg-accent-blue hover:scale-110 hover:shadow-2xl focus:ring-secondary-blue',
    outline: 'border-2 border-secondary-blue text-secondary-blue hover:bg-secondary-blue hover:text-white hover:scale-105 focus:ring-secondary-blue',
    text: 'text-secondary-blue underline hover:text-accent-blue focus:ring-secondary-blue',
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
