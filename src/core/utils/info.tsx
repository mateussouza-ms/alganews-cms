import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { Info } from "../../app/components/Info";

type InfoOptions = {
  title: string;
  content: string;
};

export function info({ title, content }: InfoOptions) {
  setTimeout(() => {
    confirmAlert({
      overlayClassName: "info-overlay",
      customUI: () => {
        return <Info title={title} content={content} />;
      },
    });
  }, 0);
}
