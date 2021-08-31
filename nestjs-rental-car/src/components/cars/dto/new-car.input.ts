import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class NewCarInput {
  @Field()
  name: string;

  @Field((type) => Int)
  dailyPrice: number;

  @Field((type) => Int)
  monthlyPrice: string;

  @Field()
  mileage: string;

  @Field()
  gas: string;

  @Field()
  gearType: string;

  @Field()
  thumbnailURL: string;
}
