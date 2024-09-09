


export async function fetchVacationFormAsPdf(payload){
  try {
    const response = await fetch(
      '/vacation/?resultType=pdf',
      {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
        responseType: "arraybuffer",
      }
    );

    const blob = await response.blob();
    const fileURL = window.URL.createObjectURL(blob);
    const a = document.createElement('a');

    a.href = fileURL;
    a.download = 'cybernet-vacation-form.pdf';
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(fileURL);
  }catch (error) {
    return new Error(error);
  }
}