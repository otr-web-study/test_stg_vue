import { createStore } from 'vuex';
import { controlsModule } from './controls/controlsModule';
import { charactersModule } from './characters/charactersModule';

export default createStore({
  modules: {
    controls: controlsModule,
    characters: charactersModule,
  }
})
