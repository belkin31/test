import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import '@fontsource/roboto'
import './normalize.scss'

export default defineComponent({
  components: {},

  setup() {
    const route = useRoute()

    return { route }
  },
})
