import { defineStore } from 'pinia';
import { $t } from '~/modules/i18n';

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      count: 0,
    };
  },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
  },
  actions: {
    countPlus() {
      this.count++;
      console.log($t('count'), 'is', this.count);
    },
  },
});
