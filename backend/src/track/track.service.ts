import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Track, TrackDocument } from './track.model';
import { Model, ObjectId } from 'mongoose';
import { Comment, CommentDocument } from './comment.model';
import { CreateTrackDto } from './dto/create-track.dto';
import { CreateCommentDto } from './dto/create-comment-dto';
import { FilesService, FileType } from '../files/files.service';

@Injectable()
export class TrackService {

    constructor(
        @InjectModel(Track.name) private trackModel: Model<TrackDocument>,
        @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
        private filesService: FilesService,
    ) {
    }

    async create(dto: CreateTrackDto, picture, audio): Promise<Track> {
        const picturePath = this.filesService.createFile(FileType.PICTURE, picture);
        const audioPath = this.filesService.createFile(FileType.AUDIO, audio);
        return await this.trackModel.create({ ...dto, listens: 0, picture: picturePath, audio: audioPath });
    }

    async getAll(count: number = 10, offset: number = 0): Promise<Track[]> {
        return this.trackModel.find().skip(offset).limit(count);
    }

    async getOne(id: ObjectId): Promise<Track> {
        return this.trackModel.findById(id).populate('comments');
    }

    async delete(id: ObjectId): Promise<ObjectId> {
        const track = await this.trackModel.findByIdAndDelete(id);
        return track._id;
    }

    async addComment(dto: CreateCommentDto): Promise<Comment> {
        const track = await this.trackModel.findById(dto.trackId);
        const comment = await this.commentModel.create({ ...dto });
        track.comments.push(comment.id);
        await track.save();
        return comment;
    }

    async addListen(id: ObjectId) {
        const track = await this.trackModel.findById(id);
        track.listens += 1;
        track.save();
    }

    async search(query: string): Promise<Track[]> {
        return this.trackModel.find({
            name: { $regex: new RegExp(query, 'i') },
        });
    }

}
