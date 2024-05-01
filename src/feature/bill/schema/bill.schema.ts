import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { StatusBillEnum } from "../enum/status-bill.enum";
import { PayMethodEnum } from "../enum/pay-method.enum";


@Schema({ timestamps: true, collection: "bills" })
export class Bill {

    @Prop({ type: String, ref: "User" })
    userId: string;

    @Prop({ type: String, default: "" })
    address: string;

    @Prop({ type: String, default: StatusBillEnum.WAIT })
    status: StatusBillEnum;

    @Prop({ type: String, default: PayMethodEnum.DIRECT })
    payMethod: PayMethodEnum;

    @Prop({ type: String, default: "" })
    totalPrice: string;

}
export type BillDocument = HydratedDocument<Bill>;
export const BillSchema = SchemaFactory.createForClass(Bill);
