import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '7003ks3q',
    dataset: 'production',
  },
  deployment: {
    autoUpdates: true,
    studioHost: 'roksped',
    appId: 'n1fvr4nll7i3h4b9hxb7uflz',
  },
})
