export function findCurrentRouteParams(navState) {
  if (navState.index !== undefined) {
    return findCurrentRouteParams(navState.routes[navState.index])
  }
  return navState.params;
};

export function findCurrentRoute (navState) {
  if (navState.index !== undefined) {
    return findCurrentRoute(navState.routes[navState.index])
  }
  return navState.routeName;
};
