import MyEmit from '@/components/MyEmit.vue'
import { shallowMount } from '@vue/test-utils'


it('$emit Test', () => {
  const wrapper = shallowMount(MyEmit)
  // ボタンをクリック
  wrapper.find('input').trigger('click')
  // カスタムイベントをクリック
  const emit = wrapper.emitted()
  console.log(emit) // 結果：{ update: [ [], [ [Object] ] ] }

  // updateイベントが発生しているか
  expect(emit.update).toBeTruthy()
  // updateイベントが何回発生したか
  expect(emit.update.length).toBe(2)
  // 2回目のupdateイベントのデータを確認
  console.log(emit.update[1][0]) // 結果：{ name: 'Vue.js', version: '2.6.10' }
  expect(emit.update[1][0].version).toBe('2.6.10')
})