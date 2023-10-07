export default async function uploadImgToImgBB(imageFile: File) {
    const formData = new FormData();
    formData.append('image', imageFile);
    const response = await fetch(`https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY || ''}`, {
        method: 'POST',
        body: formData
    });

    const data = await response.json();


    if (data.success) {
        return data.data.url;
    } else {
        throw new Error('Failed to upload image');
    }
}