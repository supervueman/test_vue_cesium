<template>
  <div>
    <div class="viewer">
      <vc-viewer
        fullscreen-button
      >
        <vc-layer-imagery>
          <vc-provider-imagery-tianditu
            mapStyle="img_c"
            token="436ce7e50d27eede2f2929307e6b33c0"
          />
        </vc-layer-imagery>
      </vc-viewer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style lang="scss">
.viewer {
  width: 100%;
  height: calc(100vh - 40px);
}
</style>
