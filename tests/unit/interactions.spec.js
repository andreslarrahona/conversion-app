import { mount } from '@vue/test-utils'
import ConversionApp from '@/components/ConversionApp.vue'

describe('Interactions in ConversionApp.vue', () => {
   const wrapper = mount(ConversionApp);
      it('renders magnitudes when button pressed', async () => {
         
         const button = wrapper.find('button')
         await button.trigger('click');
   
         const listItems = wrapper.findAll('li');
         expect(listItems[0].text()).toBe('Temperatura')
         expect(listItems[1].text()).toBe('Presión')
         expect(listItems[2].text()).toBe('Torque')
      })
      it('load units when selected magnitude',()=>{
        //elijo presión, me trae valores de presión en las options
        //elijo temperatura, me trae valores de temperatura en las options
        //etc...
      })
      it('update output automatically when input is being filled', ()=>{

        //...
      })
      it('switch units when "swap" button is pressed', ()=>{
        //...
      })


})
