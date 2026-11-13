import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { stripBasePath, withBasePath as resolveWithBase } from "./pathUtils";

const BASE_URL = import.meta.env.BASE_URL || "/";

export const withBasePath = (path: string): string => resolveWithBase(path, BASE_URL);

interface RouterContextType {
  currentPath: string;
  navigate: (to: string) => void;
}

const RouterContext = createContext<RouterContextType>({
  currentPath: "/",
  navigate: () => {}
});

export const useRouter = () => useContext(RouterContext);

export const RouterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return stripBasePath(window.location.pathname || "/", BASE_URL);
    }
    return "/";
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(stripBasePath(window.location.pathname || "/", BASE_URL));
      window.scrollTo({ top: 0, behavior: "instant" });
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (to: string) => {
    const targetRoute = stripBasePath(to, BASE_URL);
    if (targetRoute === currentPath) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    window.history.pushState({}, "", withBasePath(targetRoute));
    setCurrentPath(targetRoute);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  className?: string;
}

export const Link: React.FC<LinkProps> = ({ href, children, className, onClick, ...props }) => {
  const { navigate } = useRouter();
  const resolvedHref = href.startsWith("/") ? withBasePath(href) : href;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);
    // Let browser handle special clicks (Cmd/Ctrl click, right click, etc.)
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) {
      return;
    }
    // Only handle internal routes
    if (href.startsWith("/")) {
      e.preventDefault();
      navigate(href);
    }
  };

  return (
    <a href={resolvedHref} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
};
