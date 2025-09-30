import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <section className="container mx-auto px-4 py-24">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold tracking-tight">404</h1>
        <p className="mt-2 text-foreground/70">This page doesn't exist.</p>
        <a href="/" className="mt-6 inline-block text-primary hover:underline">Return home</a>
      </div>
    </section>
  );
};

export default NotFound;
