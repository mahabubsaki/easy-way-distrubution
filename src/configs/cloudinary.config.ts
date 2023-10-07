
export default async function uploadImgToCloudinary(imageFile: File) {
    const formData = new FormData();
    formData.append('file', imageFile);
    formData.append('upload_preset', 'Shophouse-Ecommerce');
    const response = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUDNAME}/image/upload?folder=shophouseProject`, {
        method: 'POST',
        body: formData,
    });

    if (!response.ok) {
        throw new Error('Failed to upload image');
    }

    const result = await response.json();
    if (result && result.url) {
        return result.url;
    } else {
        throw new Error('Failed to upload image');
    }

}