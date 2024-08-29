import { xrpl } from 'xrpl';

export class XRPLService {
  constructor() {
    this.client = new xrpl.Client('wss://s.altnet.rippletest.net:51233');
  }
  async AccountSetTx(wallet, grant) {
    const prepared = await this.client.autofill({
      TransactionType: 'AccountSet',
      Account: wallet.address,
      Memos: [
        {
          Memo: {
            MemoType: Buffer.from(grant.getGrantTitle()).toString('hex'),
            MemoData: Buffer.from(JSON.stringify(grant)).toString('hex'),
          },
        },
      ],
    });
    const signed = wallet.sign(prepared);
    const result = await this.client.submitAndWait(signed.tx_blob);
    return result;
  }

  async EscrowCreateTs(wallet, grant, amount) {
    const prepared = await this.client.autofill({
      TransactionType: 'EscrowCreate',
      acount: wallet.address,
      amount: xrpl.xrpToDrops(amount),
      destination: grant.getOwner(),
      finishAfter: grant.getGrantDeadline(),
    });
    const signed = wallet.sign(prepared);
    const result = await this.client.submitAndWait(signed.tx_blob);
    return result;
  }

  async PaymentTx(wallet, grant) {
    const prepared = await this.client.autofill({
      TransactionType: 'Payment',
      acount: wallet.address,
      amount: xrpl.xrpToDrops(),
      destination: grant.getOwner(),
    });
    const signed = wallet.sign(prepared);
    const result = await this.client.submitAndWait(signed.tx_blob);
    return result;
  }

  async EscrowFinishTx(wallet, donation) {
    const prepared = await this.client.autofill({
      TransactionType: 'EscrowFinish',
      acount: wallet.address,
      owner: donation.getSponsor(),
      offerSequence: donation.getEscrowCreateTxSequence(),
    });
    const signed = wallet.sign(prepared);
    const result = await this.client.submitAndWait(signed.tx_blob);
    return result;
  }
}
