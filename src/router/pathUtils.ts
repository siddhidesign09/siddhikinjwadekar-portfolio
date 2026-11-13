export function normalizeBasePath(baseUrl: string = "/"): string {
  if (!baseUrl || baseUrl === "/") return "";
  const trimmed = baseUrl.replace(/\/+$/, "");
  return trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
}

export function stripBasePath(pathname: string, baseUrl: string = "/"): string {
  const base = normalizeBasePath(baseUrl);
  let route = pathname || "/";

  if (base) {
    if (route === base || route === `${base}/`) {
      route = "/";
    } else if (route.startsWith(`${base}/`)) {
      route = route.slice(base.length);
    }
  }

  if (route === "/index.html" || route === "") {
    return "/";
  }

  if (route.length > 1 && route.endsWith("/")) {
    route = route.replace(/\/+$/, "");
  }

  return route.startsWith("/") ? route : `/${route}`;
}

export function withBasePath(targetPath: string, baseUrl: string = "/"): string {
  if (!targetPath) return normalizeBasePath(baseUrl) || "/";
  if (/^(https?:|mailto:|tel:|#)/i.test(targetPath)) {
    return targetPath;
  }

  const base = normalizeBasePath(baseUrl);
  const normalizedTarget = targetPath.startsWith("/") ? targetPath : `/${targetPath}`;

  if (!base) {
    return normalizedTarget;
  }

  if (normalizedTarget === base || normalizedTarget.startsWith(`${base}/`)) {
    return normalizedTarget;
  }

  return normalizedTarget === "/" ? `${base}/` : `${base}${normalizedTarget}`;
}
