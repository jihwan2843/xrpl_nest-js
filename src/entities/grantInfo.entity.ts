import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { DonationInfo } from './donationInfo.entity';

@Entity
export class GrantInfo {
  @PrimaryGeneratedColumn('uuid')
  grantId: string;

  @Column()
  owner: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column('timestamp with local time zone')
  grantStart;

  @Column('timestamp with local time zone')
  grantDeadline;

  @Column('decimal', { precision: 10, scale: 1, default: 0 })
  matchingPoolAmount;

  @Column()
  status;

  @OneToMany(() => DonationInfo, (donationInfo) => donationInfo.grantInfo)
  donationInfos;
}
