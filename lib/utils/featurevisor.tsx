import { createInstance, FeaturevisorInstance } from '@featurevisor/sdk';

//const DATAFILE_URL = process.env.NEXT_PUBLIC_FF_BUILD;

//let instance: FeaturevisorInstance;

export async function getInstance(): Promise<FeaturevisorInstance> { 
  // if (instance) {
  //   return instance;
  // };

  const f = createInstance({
    datafileUrl: process.env.NEXT_PUBLIC_FF_BUILD,
    // stickyFeatures: {
    //   exampleDarkLaunch: {
    //       enabled: true
    //   }
    // },
    onReady: () => console.log('Featurevisor SDK is ready (used in builds)'),
  });

  const instance = await f.onReady();

  return instance;
}
