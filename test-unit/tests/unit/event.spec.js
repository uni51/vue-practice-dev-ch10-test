import { shallowMount } from '@vue/test-utils'
import MyEvent from '@/components/MyEvent.vue'

describe('MyEvent.vue', () => {
  it('Event Test', () => {
    const email = 'hoge@example.com'
    const wrapper = shallowMount(MyEvent)

    // テキストボックスへの入力&サブミット
    wrapper.find("#email").setValue(email)
    wrapper.find("form").trigger('submit.prevent')
  
    // 結果の確認
    expect(wrapper.find('#result').text())
      .toContain('登録完了：' + email)
  })
})