/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Ec2InstanceWhereUniqueInput } from "../../ec2Instance/base/Ec2InstanceWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsNumber,
  IsString,
} from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CostOptimizationCreateInput {
  @ApiProperty({
    required: false,
    type: () => Ec2InstanceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => Ec2InstanceWhereUniqueInput)
  @IsOptional()
  @Field(() => Ec2InstanceWhereUniqueInput, {
    nullable: true,
  })
  ec2Instance?: Ec2InstanceWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  estimatedCostSaving?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  recommendedPricingModel?: string | null;
}

export { CostOptimizationCreateInput as CostOptimizationCreateInput };
