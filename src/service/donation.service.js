import { DonationDTO } from '../models/donation.model';

export class DonationService {
  createDonation(grantId, amount, wallet) {
    const donation = new DonationDTO(
      grantId,
      wallet.address,
      amount,
      Date.now(),
    );
    return donation;
  }
}
