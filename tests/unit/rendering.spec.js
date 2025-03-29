import { mount } from '@vue/test-utils'
import ConversionApp from '@/components/ConversionApp.vue'

describe('Rendering ConversionApp.vue elements', () => {
   const wrapper = mount(ConversionApp);
   it('Renders main button corretly',()=>{
      const ddbtn = wrapper.find('#ddbtn')
      expect(ddbtn.exists()).toBe(true)
   })
   it('Renders "swap" button correctly',()=>{
      const btn = wrapper.find('#swapUnits')
      expect(btn.exists()).toBe(true);
   })
   it('Renders inputs correctly',()=>{
      const inputs = wrapper.findAll('input[type="number"]')
      expect(inputs.length).toBe(2);
      const numin = wrapper.find('#numin')
      const numout = wrapper.find('#numout')
      expect(numin.exists()).toBe(true)
      expect(numout.exists()).toBe(true)
   })
   it('Renders initial units correctly',()=>{
      const listUnitsFrom = wrapper.find('#unidadFrom').findAll('option');
      expect(listUnitsFrom[0].text()).toBe('°C')
      expect(listUnitsFrom[1].text()).toBe('°F')
      expect(listUnitsFrom[2].text()).toBe('°K')
      const listUnitsTo = wrapper.find('#unidadTo').findAll('option');
      expect(listUnitsTo[0].text()).toBe('°C')
      expect(listUnitsTo[1].text()).toBe('°F')
      expect(listUnitsTo[2].text()).toBe('°K')
   })
   
   
})
