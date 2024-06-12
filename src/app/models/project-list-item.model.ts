import { Techs } from './techs.model';

export class ProjectListItem {
  _id!: string;
  title!: string;
  summary!: string;
  imgs!: {}[];
  techsUsed!: {
    tech: {};
    techUsage: string;
  }[];
  projectUrl!: string;
  techsRef!: Techs[];
}
