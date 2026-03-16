import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground p-6">
      <div className="text-center max-w-md">
        <h1 className="text-8xl font-display font-bold gradient-text mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-4">You've reached a digital dead end</h2>
        <p className="text-white/50 mb-10 leading-relaxed">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track to scaling your startup.
        </p>
        <a 
          href="/" 
          className="btn-primary inline-flex items-center gap-3"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Safety
        </a>
      </div>
    </div>
  );
};

export default NotFound;
