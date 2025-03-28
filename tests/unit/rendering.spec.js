import { mount } from '@vue/test-utils'
import ConversionApp from '@/components/ConversionApp.vue'

describe('Rendering ConversionApp.vue elements', () => {
   const wrapper = mount(ConversionApp);
   it('renders initial units correctly',()=>{
    const listUnitsFrom = wrapper.find('#unidadFrom').findAll('option');
    expect(listUnitsFrom[0].text()).toBe('°C')
    expect(listUnitsFrom[1].text()).toBe('°F')
    expect(listUnitsFrom[2].text()).toBe('°K')
    const listUnitsTo = wrapper.find('#unidadTo').findAll('option');
    expect(listUnitsTo[0].text()).toBe('°C')
    expect(listUnitsTo[1].text()).toBe('°F')
    expect(listUnitsTo[2].text()).toBe('°K')
   })
   it('renders inputs',()=>{
    //exists()
   })
   it('renders conversion button',()=>{
    //exists()
   })
})
