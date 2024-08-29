export class DonationDTO {
  constructor(grantId, sponsor, donationAmount, grantTime) {
    this.grantId = grantId;
    this.sponsor = sponsor;
    this.donationAmount = donationAmount;
    this.grantTime = grantTime;
    this.escrowCreateTxSequence = 0;
  }
  setEscrowCreateTxSequence(escrowCreateTxSequence) {
    this.escrowCreateTxSequence = escrowCreateTxSequence;
  }
  getEscrowCreateTxSequence() {
    return this.escrowCreateTxSequence;
  }
  getSponsor() {
    return this.sponsor;
  }

  getDonationAmount() {
    return this.donationAmount;
  }
}
