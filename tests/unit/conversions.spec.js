import { mount } from '@vue/test-utils'
import ConversionApp from '@/components/ConversionApp.vue'

describe('Unit conversions', () => {
   const wrapper = mount(ConversionApp);
   it('make temperature conversions correctly', async () =>{
      //From °C to °F (default)
      let number = 10;
      await wrapper.find('#numin').setValue(number)
      let numin = wrapper.vm.inputValue;
      let numout = wrapper.vm.outputValue;
      let unidadIn = wrapper.vm.unidadFrom;
      let unidadOut = wrapper.vm.unidadTo;
      console.log("From ",numin,unidadIn," to ",numout,unidadOut)
      expect(numout).toBe(numin* 9/5 + 32)

      //From °K to °C
      number = 324;
      await wrapper.find('#numin').setValue(number)
      await wrapper.find('#unidadFrom').setValue('°K');
      await wrapper.find('#unidadTo').setValue('°C');
      numin = wrapper.vm.inputValue;
      numout = wrapper.vm.outputValue;
      unidadIn = wrapper.vm.unidadFrom;
      unidadOut = wrapper.vm.unidadTo;
      console.log("From ",numin,unidadIn," to ",numout,unidadOut)
      expect(numout).toBe(numin-273.15)

      //From °F to °K
      number = 272.93
      await wrapper.find('#numin').setValue(number)
      await wrapper.find('#unidadFrom').setValue('°F')
      await wrapper.find('#unidadTo').setValue('°K')
      numin = wrapper.vm.inputValue;
      numout = wrapper.vm.outputValue;
      unidadIn = wrapper.vm.unidadFrom;
      unidadOut = wrapper.vm.unidadTo;
      console.log("From ",numin,unidadIn," to ",numout,unidadOut)
      expect(numout).toBe((numin - 32) * 5/9 + 273.15)
   })
})
