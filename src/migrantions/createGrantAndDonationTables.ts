import { Query } from 'typeorm/driver/Query.js';
export class CreateGrantAndDonationTables {
  async up(Query) {
    await Query.query(`
        CREATE TABLE grant_info (
            grantId VARCHAR(36) PRIMARY KEY,
            owner VARCHAR(255) NOT NULL,
            title VARCHAR(255) NOT NULL,
            description TEXT,
            grantStart TIMESTAMP NOT NULL,
            grantDeadline TIMESTAMP NOT NULL,
            matchingPoolAmount DECIMAL(10,2) DEFAULT 0,
            status VARCHAR(50) NOT NULL
        )
    `);

    await queryRunner.query(`
        CREATE TABLE donation_info (
            id VARCHAR(36) PRIMARY KEY,
            sponsor VARCHAR(255) NOT NULL,
            donationAmount DECIMAL(10,2) NOT NULL,
            grantTime TIMESTAMP NOT NULL,
            escrowCreateTxSequence BigINT,
            grantId VARCHAR(36),
            FOREIGN KEY (grantId) REFERENCES grant_info(grantId)
        )
    `);
  }
}
