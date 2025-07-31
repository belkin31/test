import { defineComponent } from 'vue'
import { useAuthStore } from '@/entities/auth/model'
import { useRoute } from 'vue-router'
import '@fontsource/montserrat'

export default defineComponent({
  components: {},

  setup() {
    const auth = useAuthStore()
    const route = useRoute()

    return { auth, route }
  },
})
