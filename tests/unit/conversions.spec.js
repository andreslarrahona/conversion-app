import { mount } from '@vue/test-utils'
import ConversionApp from '@/components/ConversionApp.vue'

const pressureCases = [
   // Conversiones desde MPa
   { inputVal: 1, inputUnit: 'MPa', outputUnit: 'kPa', expected: 1000, presicion: 0 },
   { inputVal: 1, inputUnit: 'MPa', outputUnit: 'psi', expected: 145.0377, presicion: 4 },
   { inputVal: 1, inputUnit: 'MPa', outputUnit: 'bar', expected: 10, presicion: 0 },
   
   // Conversiones desde psi
   { inputVal: 1, inputUnit: 'psi', outputUnit: 'kPa', expected: 6.8948, presicion: 4 },
   { inputVal: 1, inputUnit: 'psi', outputUnit: 'bar', expected: 0.0689, presicion: 4 },
   { inputVal: 1, inputUnit: 'psi', outputUnit: 'kgf/cm2', expected: 0.0703, presicion: 4 },
   
   // Conversiones desde bar
   { inputVal: 1, inputUnit: 'bar', outputUnit: 'MPa', expected: 0.1, presicion: 1 },
   { inputVal: 1, inputUnit: 'bar', outputUnit: 'psi', expected: 14.5038, presicion: 4 },
   { inputVal: 1, inputUnit: 'bar', outputUnit: 'atm', expected: 0.9869, presicion: 4 },
   
   // Conversiones especiales
   { 
      inputVal: 1, inputUnit: 'atm', outputUnit: 'torr', expected: 760, precision: 0},
   { inputVal: 1, inputUnit: 'kgf/cm2', outputUnit: 'psi', expected: 14.2233, presicion: 4 },
   { inputVal: 1, inputUnit: 'mH2O', outputUnit: 'kPa', expected: 9.8064, presicion: 4 },
   
   // Valores diferentes a 1
   { inputVal: 10, inputUnit: 'kPa', outputUnit: 'hPa', expected: 100, presicion: 0 },
   { inputVal: 5, inputUnit: 'bar', outputUnit: 'mbar', expected: 5000, presicion: 0 }
 ];



describe('Unit conversions', () => {
   const wrapper = mount(ConversionApp);

   test.each(pressureCases)(
      'Converts $inputVal $inputUnit into $outputUnit → $expected',
      async ({ inputVal, inputUnit, outputUnit, expected, precision }) => {
         let magnitudeButton = wrapper.find('[data-dropdown-toggle="dropdown"]')
        await magnitudeButton.trigger('click')
        let dropdownItems = wrapper.findAll('#dropdown li a')
        let temperatureOption = dropdownItems.find(item => item.text() === 'Presión')
        await temperatureOption.trigger('click')
        await wrapper.vm.$nextTick()

         const input = wrapper.find('#numin')
         await input.setValue(inputVal)
         await wrapper.vm.$nextTick()
         
         const inputU = wrapper.find('#unidadFrom')
         await inputU.setValue(inputUnit);
         await wrapper.vm.$nextTick()

         const outputU = wrapper.find('#unidadTo')
         await outputU.setValue(outputUnit)
         await wrapper.vm.$nextTick() 
         const actual = wrapper.vm.outputValue;
    
         if (precision === 0) {
           // Para valores enteros exactos (como 760 torr)
           expect(Math.round(actual)).toBe(expected);
         } else {
           // Para valores decimales
           expect(actual).toBeCloseTo(expected, precision);
         }
      }
    );






   //it('make temperature conversions correctly', async () =>{
      //From °C to °F (default)
      // let number = 10;
      // await wrapper.find('#numin').setValue(number)
      // let numin = wrapper.vm.inputValue;
      // let numout = wrapper.vm.outputValue;
      // let unidadIn = wrapper.vm.unidadFrom;
      // let unidadOut = wrapper.vm.unidadTo;
      // console.log("From ",numin,unidadIn," to ",numout,unidadOut)
      // expect(numout).toBe(numin* 9/5 + 32)

      // //From °K to °C
      // number = 324;
      // await wrapper.find('#numin').setValue(number)
      // await wrapper.find('#unidadFrom').setValue('°K');
      // await wrapper.find('#unidadTo').setValue('°C');
      // numin = wrapper.vm.inputValue;
      // numout = wrapper.vm.outputValue;
      // unidadIn = wrapper.vm.unidadFrom;
      // unidadOut = wrapper.vm.unidadTo;
      // console.log("From ",numin,unidadIn," to ",numout,unidadOut)
      // expect(numout).toBe(numin-273.15)

      // //From °F to °K
      // number = 272.93
      // await wrapper.find('#numin').setValue(number)
      // await wrapper.find('#unidadFrom').setValue('°F')
      // await wrapper.find('#unidadTo').setValue('°K')
      // numin = wrapper.vm.inputValue;
      // numout = wrapper.vm.outputValue;
      // unidadIn = wrapper.vm.unidadFrom;
      // unidadOut = wrapper.vm.unidadTo;
      // console.log("From ",numin,unidadIn," to ",numout,unidadOut)
      // expect(numout).toBe((numin - 32) * 5/9 + 273.15)
   //})
})
