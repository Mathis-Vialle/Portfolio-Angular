import { Techs } from './techs.model';

export class ProjectListItem {
  id!: number;
  title!: string;
  summary!: string;
  imgsUrl!: string | string[];
  techUsed!: Techs | Techs[];
  websiteUrl!: string;
}
