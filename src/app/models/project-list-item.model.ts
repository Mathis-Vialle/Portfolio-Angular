import { Techs } from './techs.model';

export class ProjectListItem {
  id!: number;
  title!: string;
  summary!: string;
  imgsUrl!: string[];
  techUsed!: string[];
  websiteUrl!: string;
}
