import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { GrantInfo } from './grantInfo.entity';

@Entity
export class DonationInfo {
  @PrimaryGeneratedColumn('uuid')
  sponsor;

  @Column('decimal', { precision: 10, scale: 2 })
  donationAmount;

  @Column('timestamp with local time zone')
  grantTime;

  @Column()
  escrowCreateTxSequence;

  @ManyToOne(() => GrantInfo, (grantinfo) => grantinfo.donationInfos)
  @JoinColumn({ name: 'grantId' })
  grantInfo;

  @Column()
  grantId;
}
