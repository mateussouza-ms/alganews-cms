import { mdiDelete, mdiUpload } from "@mdi/js";
import Icon from "@mdi/react";
import { ChangeEvent, useEffect, useState } from "react";
import { FileService } from "../../../sdk/services/FileService";
import { Button } from "../Button";
import { Loading } from "../Loading";
import * as StyledImageUpload from "./styles";

interface ImageUploadProps {
  label: string;
  onUpload: (imageUrl: string) => void;
  preview?: string;
}

export function ImageUpload({ label, onUpload, preview }: ImageUploadProps) {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isUploadingImage, setIsUploadingImage] = useState(false);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files![0];

    if (file) {
      const reader = new FileReader();

      reader.addEventListener("load", async (ev) => {
        setIsUploadingImage(true);
        try {
          setImagePreview(String(ev.target?.result));

          const imageUrl = await FileService.upload(file);
          onUpload(imageUrl);
        } finally {
          setIsUploadingImage(false);
        }
      });

      reader.readAsDataURL(file);
    }
  }

  useEffect(() => {
    if (preview) {
      setImagePreview(preview);
    }
  }, [preview]);

  if (imagePreview) {
    return (
      <StyledImageUpload.ImagePreviewWrapper>
        <Loading show={isUploadingImage} />

        <StyledImageUpload.ImagePreview preview={imagePreview}>
          <Button
            variant="primary"
            label="Remover imagem"
            onClick={() => setImagePreview(null)}
            icon={{
              path: mdiDelete,
            }}
          ></Button>
        </StyledImageUpload.ImagePreview>
      </StyledImageUpload.ImagePreviewWrapper>
    );
  }

  return (
    <StyledImageUpload.Wrapper>
      <StyledImageUpload.Label>
        <Icon size="24px" path={mdiUpload} />
        {label}
        <StyledImageUpload.Input type="file" onChange={handleChange} />
      </StyledImageUpload.Label>
    </StyledImageUpload.Wrapper>
  );
}
