export class GrantDTO {
  constructor(grantId, owner, title, description) {
    this.grantId = grantId;
    this.owner = owner;
    this.title = title;
    this.description = description;
    this.grantStart = Date.now() + this.getGrantDelay();
    this.grantDeadline = this.grantStart + this.getGrantPeriod();
    this.sponsors = [];
    this.totalDonationAmount = 0;
    this.matchingPoolAmount = 0;
    this.status = '';
    this.setStatus();
  }
  setMatchingPoolAmount(matchingPoolAmount) {
    this.matchingPoolAmount = matchingPoolAmount;
  }
  getGrantId() {
    return this.grantId;
  }
  getGrantDeadline() {
    return this.grantDeadline;
  }
  getOwner() {
    return this.owner;
  }
  getTotalDonationAmount() {
    return this.totalDonationAmount;
  }
  setTotalDonationAmount(totalDonationAmount) {
    this.totalDonationAmount = totalDonationAmount;
  }
  getGrantStart() {
    return this.grantStart;
  }
  setGrantStatus(status) {
    this.status = status;
  }
  getGrantTitle() {
    return this.title;
  }

  getGrantDelay() {
    return 604800000; // ms초
  }

  getGrantPeriod() {
    return 2419200000;
  }

  getTotalAmount() {
    return this.totalAmount;
  }

  getTotalSponsors() {
    return this.sponsors.length;
  }

  getStatus() {
    return this.status;
  }

  setStatus() {
    const currentTime = Date.now();
    if (currentTime > this.grantDeadline) {
      this.status = 'Distributed';
    } else if (currentTime >= this.grantStart) {
      this.status = 'Active';
    } else {
      this.status = 'Pending';
    }
  }
}
