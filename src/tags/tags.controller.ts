import { Controller } from '@nestjs/common';

@Controller('tags')
export class TagsController {
  /**
   *
   */
  constructor(private tagsService: TagsService) {}
}
