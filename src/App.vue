<template>
  <video id="testVideo" ref="video" width="640" height="480" autoplay></video>
</template>

<script setup>
  import { onMounted, ref } from 'vue'

  const video = ref(null);
  const sdk = new window.tsvb('8acdc08bbc7a08b90e481e9c6a7d6450b479356c', window.inferer);

  sdk.onReady = () => {
    sdk.run();
    sdk.setSegmentationPreset('quality');
    sdk.showFps();
    sdk.enableFrameSkipping();
    console.log('sdk', sdk)
    sdk.setBackground('./assets/image-background.jpg');
  };

  onMounted(() => {
    sdk.clear();
    navigator.mediaDevices.getUserMedia({
        video: {
          width: 640,
          height: 480
        }
      })
      .then(stream => {
        sdk.useStream(stream);
        if (video.value) {
          video.value.srcObject = sdk.getStream();
        }
      })
      .catch(e => console.error(e));
  });
</script>
