import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';
import { CommandeStatus } from 'src/enum/commande-status.enum';
import { Commercial } from './commercial.entity';

@Entity()
export class Commande {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @ManyToOne(() => User, (user) => user.commandes)
  user: User;

  @Column()
  dateCommande: Date;

  @Column('decimal', { precision: 6, scale: 2 })
  prixTotal: number;

  @Column()
  tauxRemise: number;

  @Column()
  tauxTva: number;

  @Column()
  status: CommandeStatus;

  @ManyToOne(() => Commercial, (commercial) => commercial.commandes)
  commercial: Commercial;
}
