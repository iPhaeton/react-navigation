export default function findCurrentRouteParams(navState) {
  if (navState.index !== undefined) {
    return findCurrentRouteParams(navState.routes[navState.index])
  }
  return navState.params;
};
