// TODO: fix import from @sage-bionetworks/sage-angular
import { Section } from '@sage-bionetworks/sage-angular/src/lib/navbar/section';

export const SECTIONS: { [key: string]: Section } = {
  explore: {
    name: 'Explore',
    summary: 'Explore things.'
  },
  organizations: {
    name: 'Organizations',
    summary: 'The organizations you belong to.'
  }
};
