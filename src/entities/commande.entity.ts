import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';
import { CommandeStatus } from 'src/enum/commande-status.enum';
import { Commercial } from './commercial.entity';
import { LigneCommande } from './ligne-commande.entity';

@Entity()
export class Commande {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userId: string;

  @Column()
  dateCommande: Date;

  @Column('decimal', { precision: 6, scale: 2 })
  prixTotal: number;

  @Column()
  tauxTva: number;

  @Column()
  status: CommandeStatus;

  @OneToMany(() => LigneCommande, (ligneCommande) => ligneCommande.commande, {
    cascade: true,
  })
  lignesCommande: LigneCommande[];

  @ManyToOne(() => Commercial, (commercial) => commercial.commandes, {
    nullable: true,
  })
  commercial: Commercial;

  @ManyToOne(() => User, (user) => user.commandes, { cascade: true })
  user: User;
}
