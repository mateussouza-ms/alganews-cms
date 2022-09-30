import React from "react";
import { ErrorBoundary } from "../../app/components/ErrorBoundary";

export function withBoundary<T extends object>(
  Component: React.ComponentType<T>,
  componentName?: string
) {
  return function (props: T) {
    return (
      <ErrorBoundary component={componentName}>
        <Component {...props} />
      </ErrorBoundary>
    );
  };
}
