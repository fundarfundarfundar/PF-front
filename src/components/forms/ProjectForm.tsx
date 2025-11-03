import { IProject } from "@/interfaces/IProject";
import { addProject } from "@/services/project.services";
import {
  editProjectValidationSchema,
  IProjectFormValues,
  projectFormInitialValues,
  projectValidationSchema,
} from "@/validators/addProjectSchema";
import { useFormik } from "formik";
import { toast } from "sonner";

interface ProjectFormProps {
  project?: IProject | null;
  onSave: (values: IProjectFormValues) => void;
  onClose: () => void;
}

export default function ProjectForm({
  project,
  onSave,
  onClose,
}: ProjectFormProps) {
  const formik = useFormik<IProjectFormValues>({
    initialValues: projectFormInitialValues,
    validationSchema: project
      ? editProjectValidationSchema
      : projectValidationSchema,

    onSubmit: async (values, { resetForm }) => {
      try {
        if (project) {
          await onSave(values);
          toast.success("Project updated successfully!");
        } else {
          console.log("📤 Enviando datos al backend:", values);
          const res = await addProject(values);
          console.log("✅ Respuesta del backend:", res);
          toast.success("Project created successfully!");
        }
        resetForm();
        onClose();
      } catch (error) {
        console.error("❌ Error creating project:", error);
        toast.error("Error while saving project. Please try again.");
      }
    },
  });

  return (
    <div className="bg-white-smoke rounded-xl p-6 w-[50vw] shadow-lg">
      <form onSubmit={formik.handleSubmit}>
        <h3 className="text-xl font-semibold mb-4">
          {project ? "Edit Project" : "Add Project"}
        </h3>
        <div className="flex gap-7">
          <div className="w-1/2 flex flex-col gap-1.5">
            <label htmlFor="title" className="form-label-sec">
              Tittle
            </label>
            <input
              id="title"
              type="text"
              name="title"
              placeholder="Max 50 characters"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-input-sec"
            />
            {formik.errors.title && formik.touched.title ? (
              <p id="email-errors" className="text-red-500">
                {formik.errors.title}
              </p>
            ) : null}

            <label htmlFor="resume" className="form-label-sec">
              Resume
            </label>
            <input
              id="resume"
              type="text"
              name="resume"
              placeholder="Max 180 characters"
              value={formik.values.resume}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-input-sec"
            />
            {formik.errors.resume && formik.touched.resume ? (
              <p id="email-errors" className="text-red-500">
                {formik.errors.resume}
              </p>
            ) : null}

            <label htmlFor="description" className="form-label-sec">
              Description
            </label>
            <input
              id="description"
              type="text"
              name="description"
              placeholder="Max 600 characters"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-input-sec"
            />
            {formik.errors.description && formik.touched.description ? (
              <p id="email-errors" className="text-red-500">
                {formik.errors.description}
              </p>
            ) : null}

            <label htmlFor="country" className="form-label-sec">
              Country
            </label>
            <select
              id="country"
              name="country"
              value={formik.values.country}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-input-sec"
            >
              <option value="">Select a country</option>
              <option value="Argentina">Argentina</option>
              <option value="Bolivia">Bolivia</option>
              <option value="Brazil">Brazil</option>
              <option value="Chile">Chile</option>
              <option value="Colombia">Colombia</option>
              <option value="Costa Rica">Costa Rica</option>
              <option value="Cuba">Cuba</option>
              <option value="Dominican Republic">Dominican Republic</option>
              <option value="Ecuador">Ecuador</option>
              <option value="El Salvador">El Salvador</option>
              <option value="Guatemala">Guatemala</option>
              <option value="Honduras">Honduras</option>
              <option value="Mexico">Mexico</option>
              <option value="Nicaragua">Nicaragua</option>
              <option value="Panama">Panama</option>
              <option value="Paraguay">Paraguay</option>
              <option value="Peru">Peru</option>
              <option value="Uruguay">Uruguay</option>
              <option value="Venezuela">Venezuela</option>
            </select>

            {formik.errors.country && formik.touched.country ? (
              <p id="email-errors" className="text-red-500">
                {formik.errors.country}
              </p>
            ) : null}

            <label htmlFor="goalAmount" className="form-label-sec">
              Goal Amount
            </label>
            <input
              id="goalAmount"
              type="number"
              name="goalAmount"
              value={formik.values.goalAmount}
              onChange={formik.handleChange}
              className="form-input-sec"
            />
            {formik.errors.goalAmount && formik.touched.goalAmount ? (
              <p id="goalAmount-errors" className="text-red-500">
                {formik.errors.goalAmount}
              </p>
            ) : null}
          </div>

          <div className="w-1/2 flex flex-col">
            <label></label>
            <div className="flex flex-col">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index}>
                  <label
                    htmlFor={`imageUrl${index}`}
                    className="form-label-sec mb-1.5"
                  >
                    Image {index + 1}
                  </label>
                  <input
                    id={`imageUrl${index}`}
                    type="file"
                    accept="image/*"
                    name={`imageUrls[${index}]`}
                    value={formik.values.imageUrls[index] || ""}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="https://example.com/image.jpg"
                    className="form-input-sec mb-1.5"
                  />
                  {formik.errors.imageUrls && formik.touched.imageUrls ? (
                    <p id="email-errors" className="text-red-500 mb-1.5">
                      {formik.errors.imageUrls}
                    </p>
                  ) : null}
                </div>
              ))}
            </div>

            {/* <label htmlFor="categoryId" className="form-label-sec mb-1.5">
              Category
            </label>
            <select
              id="categoryId"
              name="categoryId"
              value={formik.values.categoryId}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-input-sec"
            >
              <option value="">Select a category</option>
              <option value={"1"}>Education</option>
              <option value={"2"}>Nutrition</option>
              <option value={"3"}>Community Infrastructure</option>
              <option value={"4"}>Environment</option>
              <option value={"5"}>Health</option>
            </select>

            {formik.errors.categoryId && formik.touched.categoryId && (
              <p className="text-red-500 mt-1.5">{formik.errors.categoryId}</p>
            )} */}
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="px-4 py-2 rounded-lg bg-blue-strong text-white hover:bg-blue-medium cursor-pointer"
          >
            {project
              ? formik.isSubmitting
                ? "Saving..."
                : "Save Changes"
              : formik.isSubmitting
              ? "Creating..."
              : "Create Project"}
          </button>
        </div>
      </form>
    </div>
  );
}
