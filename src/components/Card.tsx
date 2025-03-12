interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`${className} rounded-lg border bg-card text-card-foreground shadow-sm`}
    >
      {children}
    </div>
  );
};

const CardHeader: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div className={`${className} flex flex-col space-y-1.5 p-6`}>
      {children}
    </div>
  );
};

const CardTitle: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`${className} text-2xl font-semibold leading-none tracking-tight`}
    >
      {children}
    </div>
  );
};

const CardContent: React.FC<CardProps> = ({ children, className = "" }) => {
  return <div className={`${className} p-6 pt-0`}>{children}</div>;
};
export { Card, CardHeader, CardTitle, CardContent };
