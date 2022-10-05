import { defineComponent } from 'vue'
import s from './First.module.scss'
import icon from '../../assets/icons/welcome_4.svg'
import { RouterLink } from 'vue-router'

export const Forth = defineComponent({
  setup: () => {
    return () => (
      <div class={s.wrapper}>
        <div class={s.card}>
          <img src={icon} />
          <h2>
            别看我只是一头猪
            <br />
            我可是一头会省钱的猪
          </h2>
        </div>
        <div class={s.actions}>
          <span class={s.fake}>占位</span>
          <RouterLink to='/start'>完成</RouterLink>
          <span class={s.fake}>占位</span>
        </div>
      </div>
    )
  }
})
