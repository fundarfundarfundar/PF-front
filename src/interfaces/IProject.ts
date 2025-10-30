export interface IProject {
  id: number;
  title: string;
  resume: string;
  description: string;
  country: string;
  goalAmount: number;
  currentAmount: number;
  images: string[];
  categoryId: number;
}
