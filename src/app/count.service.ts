export class CountService {

  clickCounts = {
    active: {
      clicks: 0
    },
    inactive: {
      clicks: 0
    }
  };

  addActiveClicks() {
    this.clickCounts.active.clicks++;
  }

  addInactiveClicks() {
    this.clickCounts.inactive.clicks++;
  }
}
