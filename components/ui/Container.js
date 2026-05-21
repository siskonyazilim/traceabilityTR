export const Container = ({ children, className = '', size = 'xl' }) => {
  const sizes = {
    sm: 'max-w-4xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    xl: 'max-w-[1600px]', // Wider container matching header width
    full: 'max-w-full',
  };

  return (
    <div className={`${sizes[size]} mx-auto px-6 sm:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
