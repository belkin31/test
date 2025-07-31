import { defineComponent } from 'vue'
import videoSrc from '@/shared/assets/hero.mp4'
import posterSrc from '@/shared/assets/hero.avif'
export default defineComponent({
  components: {},

  setup() {
    return { videoSrc, posterSrc }
  },
})
