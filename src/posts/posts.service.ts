import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {

    findAll() {
        return 'This is itemservice'
    }
}
