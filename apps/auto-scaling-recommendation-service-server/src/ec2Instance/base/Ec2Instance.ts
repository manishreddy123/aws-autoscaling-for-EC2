/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested, IsDate } from "class-validator";
import { CostOptimization } from "../../costOptimization/base/CostOptimization";
import { Type } from "class-transformer";
import { ScalingRecommendation } from "../../scalingRecommendation/base/ScalingRecommendation";
import { UtilizationMetrics } from "../../utilizationMetrics/base/UtilizationMetrics";

@ObjectType()
class Ec2Instance {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  availabilityZone!: string | null;

  @ApiProperty({
    required: false,
    type: () => [CostOptimization],
  })
  @ValidateNested()
  @Type(() => CostOptimization)
  @IsOptional()
  costOptimizations?: Array<CostOptimization>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  instanceId!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  instanceType!: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  launchTime!: Date | null;

  @ApiProperty({
    required: false,
    type: () => [ScalingRecommendation],
  })
  @ValidateNested()
  @Type(() => ScalingRecommendation)
  @IsOptional()
  scalingRecommendations?: Array<ScalingRecommendation>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: () => [UtilizationMetrics],
  })
  @ValidateNested()
  @Type(() => UtilizationMetrics)
  @IsOptional()
  utilizationMetricsItems?: Array<UtilizationMetrics>;
}

export { Ec2Instance as Ec2Instance };
