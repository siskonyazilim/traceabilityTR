/* eslint-disable react/prop-types */

export const Button = ({
  children,
  variant = 'solid',
  size = 'md',
  className = '',
  as: Component = 'button',
  type,
  ...props
}) => {
  const isNativeButton = Component === 'button';
  const resolvedType = isNativeButton ? (type || 'button') : undefined;

  const baseStyles = 'inline-flex items-center justify-center rounded-full font-semibold transition-[background-color,color,border-color,box-shadow,transform] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60';
  const stateStyles = 'shadow-[var(--shadow-btn-rest)] hover:shadow-[var(--shadow-btn-hover)] active:shadow-[var(--shadow-btn-active)]';

  // UI state matrix: default -> hover -> focus-visible -> active -> disabled.
  const variants = {
    solid: 'bg-secondary-blue text-white hover:bg-accent-blue focus-visible:ring-[var(--ring-focus)]',
    outline: 'border-2 border-secondary-blue text-secondary-blue bg-white hover:bg-secondary-blue hover:text-white focus-visible:ring-[var(--ring-focus)]',
    text: 'text-secondary-blue underline underline-offset-4 shadow-none hover:text-accent-blue hover:shadow-none active:shadow-none',
    secondary: 'bg-accent-green text-white hover:bg-[#0b7f3d] focus-visible:ring-[var(--ring-focus)]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-10 py-4 text-base font-bold min-w-[160px] sm:min-w-[200px]',
  };

  return (
    <Component
      type={resolvedType}
      className={`${baseStyles} ${stateStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;
