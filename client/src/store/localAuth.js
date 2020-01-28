import router from 'vue-router';

const actions = {
  async login({ dispatch }, { valid, user }) {
    if (valid) {
      dispatch('auth/authenticate', {
        strategy: 'local',
        ...user,
      }, { root: true }).then(async () => {
        router.push('/boards');
      }).catch((e) => {
        // eslint-disable-next-line no-console
        console.error('Authentication error', e);
      });
    }
  },
};

export default {
  namespaced: true,
  actions,
};
