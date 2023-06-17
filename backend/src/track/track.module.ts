import { Module } from '@nestjs/common';
import { TrackController } from './track.controller';
import { TrackService } from './track.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Track, TrackSchema } from './track.model';
import { Comment, CommentSchema } from './comment.model';
import { FilesService } from '../files/files.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Track.name, schema: TrackSchema }]),
        MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }]),
    ],
    controllers: [TrackController],
    providers: [TrackService, FilesService],
})
export class TrackModule {
}
