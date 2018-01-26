import {config} from '../../config';

export const environment = {
  production: true,
  apiKey: config.apiKey,
  authDomain: config.authDomain,
  databaseURL: config.projectId,
  projectId: config.projectId,
  storageBucket: config.storageBucket,
  messagingSenderId: config.messagingSenderId
};
