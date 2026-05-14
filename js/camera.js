const video =
  document.getElementById("video");

const canvas =
  document.getElementById("canvas");

const captureBtn =
  document.getElementById("capture-btn");

async function startCamera(){

  try{

    const stream =
      await navigator.mediaDevices.getUserMedia({
        video:{
          facingMode:"environment"
        }
      });

    video.srcObject = stream;

  }catch(err){

    console.error(err);

  }

}

captureBtn.addEventListener(
  "click",
  captureImage
);

function captureImage(){

  const ctx =
    canvas.getContext("2d");

  canvas.width = video.videoWidth;

  canvas.height = video.videoHeight;

  ctx.drawImage(
    video,
    0,
    0
  );

  const image =
    canvas.toDataURL("image/jpeg",0.7);

  saveStoolEvent(image);

}

startCamera();
