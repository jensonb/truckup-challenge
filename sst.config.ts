import { SSTConfig } from 'sst';

export default {
  config() {
    return {
      name: 'appbase',
      region: 'us-west-2',
    };
  },
  stacks() {},
} satisfies SSTConfig;
