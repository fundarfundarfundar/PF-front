export interface IProject {
  id: number;
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  status: "active" | "inactive";
  categoryId: number;
}
