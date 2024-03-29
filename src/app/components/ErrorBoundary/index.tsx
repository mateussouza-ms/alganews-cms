import { transparentize } from "polished";
import { Component } from "react";
import { ErrorDisplay } from "../ErrorDisplay";

interface Props {
  component?: string;
}

interface State {
  hasError: boolean;
  error?: {
    message: string;
  };
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error: {
        message: error.message,
      },
    };
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            padding: 24,
            border: `1px solid ${transparentize(0.8, "#274060")}`,
          }}
        >
          <ErrorDisplay
            title={
              this.props.component
                ? `Erro ao renderizar ${this.props.component}`
                : undefined
            }
            message={this.state.error?.message}
          />
        </div>
      );
    }

    return this.props.children;
  }
}
