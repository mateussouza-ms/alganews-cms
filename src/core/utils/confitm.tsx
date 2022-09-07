import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { Confirm } from "../../app/components/Confirm";

type ConfirmOptions = {
  title: string;
  onConfirm?: () => void;
  onCancel?: () => void;
};

export function confirm({ title, onConfirm, onCancel }: ConfirmOptions) {
  setTimeout(() => {
    confirmAlert({
      overlayClassName: "confirm-overlay",
      customUI: ({ onClose }) => {
        return (
          <Confirm
            title={title}
            onConfirm={() => {
              onConfirm && onConfirm();
              onClose();
            }}
            onCancel={() => {
              onCancel && onCancel();
              onClose();
            }}
          />
        );
      },
    });
  }, 0);
}
