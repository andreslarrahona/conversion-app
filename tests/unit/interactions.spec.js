import { mount } from '@vue/test-utils'
import ConversionApp from '@/components/ConversionApp.vue'

describe('Interactions in ConversionApp.vue', () => {
   const wrapper = mount(ConversionApp);
      it('Renders magnitudes when button pressed', async () => {
         const button = wrapper.find('button')
         await button.trigger('click');
         const listItems = wrapper.findAll('li');
         expect(listItems[0].text()).toBe('Temperatura')
         expect(listItems[1].text()).toBe('Presión')
         expect(listItems[2].text()).toBe('Torque')
      })
      it('Switch units when "swap" button is pressed', async ()=>{
        // const inputUnit = wrapper.find('#unidadFrom');
        // const outputUnit = wrapper.find('#unidadTo');
        expect(wrapper.vm.unidadFrom).toBe('°C')
        expect(wrapper.vm.unidadTo).toBe('°F')
        const switchBtn = wrapper.find('#swapUnits')
        await switchBtn.trigger('click');
        expect(wrapper.vm.unidadFrom).toBe('°F')
        expect(wrapper.vm.unidadTo).toBe('°C')
      })
      it('Load units when selected magnitude',async ()=>{
        // Presión
        let magnitudeButton = wrapper.find('[data-dropdown-toggle="dropdown"]')
        await magnitudeButton.trigger('click')
        let dropdownItems = wrapper.findAll('#dropdown li a')
        let temperatureOption = dropdownItems.find(item => item.text() === 'Presión')
        await temperatureOption.trigger('click')
        await wrapper.vm.$nextTick()
        let unitSelect = wrapper.find('#unidadFrom')
        let unitOptions = unitSelect.findAll('option')
        expect(unitOptions.length).toBe(16)
        expect(unitOptions[0].text()).toBe('MPa')
        expect(unitOptions[1].text()).toBe('kPa')
        expect(unitOptions[2].text()).toBe('hPa')
        expect(unitOptions[3].text()).toBe('Pa')
        expect(unitOptions[4].text()).toBe('bar')
        expect(unitOptions[5].text()).toBe('mbar')
        expect(unitOptions[6].text()).toBe('kgf/cm2')
        expect(unitOptions[7].text()).toBe('psi')
        expect(unitOptions[8].text()).toBe('ksi')
        expect(unitOptions[9].text()).toBe('psf')
        expect(unitOptions[10].text()).toBe('mH2O')
        expect(unitOptions[11].text()).toBe('cmH2O')
        expect(unitOptions[12].text()).toBe('ftH2O')
        expect(unitOptions[13].text()).toBe('inH2O')
        expect(unitOptions[14].text()).toBe('atm')
        expect(unitOptions[15].text()).toBe('torr')
        // Temperatura
        await magnitudeButton.trigger('click')
        dropdownItems = wrapper.findAll('#dropdown li a')
        temperatureOption = dropdownItems.find(item => item.text() === 'Temperatura')
        await temperatureOption.trigger('click')
        await wrapper.vm.$nextTick()
        unitSelect = wrapper.find('#unidadFrom')
        unitOptions = unitSelect.findAll('option')
        expect(unitOptions.length).toBe(3)
        expect(unitOptions[0].text()).toBe('°C')
        expect(unitOptions[1].text()).toBe('°F')
        expect(unitOptions[2].text()).toBe('°K')
        // Torque
        await magnitudeButton.trigger('click')
        dropdownItems = wrapper.findAll('#dropdown li a')
        temperatureOption = dropdownItems.find(item => item.text() === 'Torque')
        await temperatureOption.trigger('click')
        await wrapper.vm.$nextTick()
        unitSelect = wrapper.find('#unidadFrom')
        unitOptions = unitSelect.findAll('option')
        expect(unitOptions.length).toBe(4)
        expect(unitOptions[0].text()).toBe('Nm')
        expect(unitOptions[1].text()).toBe('ft/lb')
        expect(unitOptions[2].text()).toBe('in/lb')
        expect(unitOptions[3].text()).toBe('kgm')
      })
      it('Update output automatically when input is being filled', async ()=>{
        const output = wrapper.find('#numout')
        expect(output).toBeNull
        const input = wrapper.find('#numin')
        await input.setValue('1')
        expect(output).not.toBeNull;
      })
      


})
