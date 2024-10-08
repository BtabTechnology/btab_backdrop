import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm"
  
@Entity()
export class Vendor {
    @PrimaryGeneratedColumn()
    id: string

    @Column({ type: "varchar" })
    name: string

    @Column({ type: "text", nullable: true })
    description: string

    @Column({ type: "varchar", nullable: true })
    contact_email: string

    @Column({ type: "varchar", nullable: true })
    phone_number: string

    @Column({ type: "varchar", nullable: true })
    website_url: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}
  