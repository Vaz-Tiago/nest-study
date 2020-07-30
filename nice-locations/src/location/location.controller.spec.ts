import { LocationController } from './location.controller';
import { LocationService } from './location.service';

describe('LocationController', () => {
  let locationController: LocationController;

  beforeEach(async () => {
    const locationService = {
      list: () =>  ['Returned from list']
    } as LocationService;

    locationController = new LocationController(locationService)
  });

  describe('root', () => {
    it('should return location list', () => {
      expect(locationController.listLocations()).toMatchObject({
        locations: ['Returned from list']
      });
    });
  });
});
