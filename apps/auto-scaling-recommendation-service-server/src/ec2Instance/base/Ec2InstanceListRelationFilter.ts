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
import { Ec2InstanceWhereInput } from "./Ec2InstanceWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class Ec2InstanceListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => Ec2InstanceWhereInput,
  })
  @ValidateNested()
  @Type(() => Ec2InstanceWhereInput)
  @IsOptional()
  @Field(() => Ec2InstanceWhereInput, {
    nullable: true,
  })
  every?: Ec2InstanceWhereInput;

  @ApiProperty({
    required: false,
    type: () => Ec2InstanceWhereInput,
  })
  @ValidateNested()
  @Type(() => Ec2InstanceWhereInput)
  @IsOptional()
  @Field(() => Ec2InstanceWhereInput, {
    nullable: true,
  })
  some?: Ec2InstanceWhereInput;

  @ApiProperty({
    required: false,
    type: () => Ec2InstanceWhereInput,
  })
  @ValidateNested()
  @Type(() => Ec2InstanceWhereInput)
  @IsOptional()
  @Field(() => Ec2InstanceWhereInput, {
    nullable: true,
  })
  none?: Ec2InstanceWhereInput;
}
export { Ec2InstanceListRelationFilter as Ec2InstanceListRelationFilter };
