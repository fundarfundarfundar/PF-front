const apiURL = process.env.NEXT_PUBLIC_API_URL;

export interface IUploadImageProps {
  file: File;
  uuid: string;
}

export const uploadImage = async ({
  file,
  uuid,
}: IUploadImageProps): Promise<string> => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("uuid", uuid);

  const response = await fetch(`${apiURL}/files/uploadImage`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`Error uploading image: ${err}`);
  }

  const data = await response.json();
  console.log("Upload response:", data);

  // ⚠️ Ajusta esto según lo que devuelva tu back
  // Si devuelve el usuario actualizado, podrías tomar la propiedad donde venga la URL.
  // Por ejemplo: data.user.imageUrl o data.image
  return data.imageUrl || data.url || "";
};
