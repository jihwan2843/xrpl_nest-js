import { GrantDTO } from '../models/grant.model';

export class GrantService {
  createGrant(title, description) {
    const grantId = Math.random().toString(36).substring(2, 12);
    const newGrant = new GrantDTO(grantId, title, description);
    return newGrant;
  }
  cancelGrant(grant) {
    grant.setStatus('Canceled');
    return grant;
  }
  donateGrant(grant, amount) {
    const currentAmount = grant.getTotalDonationAmount();
    grant.setTotalDonationAmount(currentAmount + amount);
    grant.setStatus();
    return grant;
  }
  getGrantIdList(grants) {
    const grantIds = [];

    for (const grant of grants) {
      // Grant의 상태가 'COMPLETED'일 때 자금을 분배 가능
      if (grant.getStatus() === 'COMPLETED') {
        grantIds.push(grant.getGrantId());
      } else {
        // 상태가 'COMPLETED'가 아닐 경우 에러 발생
        throw new Error(
          `Grant with ID ${grant.getGrantId()} is not in COMPLETED status. Status: ${grant.getStatus()}`,
        );
      }
    }
    return grantIds;
  }

  distributeFunding() {}
}
