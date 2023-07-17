import { Column, Table, DataType } from 'sequelize-typescript';

@Table({ tableName: 'stops' })
export class Stop {
  @Column({ primaryKey: true, type: DataType.INTEGER })
  id: number;

  @Column({ type: DataType.INTEGER })
  station_id: number;

  @Column({ type: DataType.STRING })
  city_code: string;

  @Column({ type: DataType.STRING })
  city_name: string;

  @Column({ type: DataType.STRING })
  metropolin_code: string;

  @Column({ type: DataType.STRING })
  metropolin_name: string;

  @Column({ type: DataType.STRING })
  station_type_code: string;

  @Column({ type: DataType.STRING })
  station_type_name: string;

  @Column({ type: DataType.STRING })
  latitude: string;

  @Column({ type: DataType.STRING })
  longitude: string;

  @Column({ type: DataType.STRING })
  neighborhood: string;
}
