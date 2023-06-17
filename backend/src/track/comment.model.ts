import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Track } from './track.model';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export type CommentDocument = Comment & Document;

@Schema()
export class Comment {
    @Prop()
    username: string;

    @Prop()
    text: string;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Track'})
    track: Track;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
