import { z } from "zod";

export const franchiseFormSchema = z.object({
    fullName: z.string().min(2, "Name must be at least 2 characters").max(100),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 digits").max(15, "Phone number is too long"),
    city: z.string().min(2, "Please enter your city/location"),
    investmentCapacity: z.string().min(1, "Please select an investment capacity"),
    message: z.string().max(500, "Message cannot exceed 500 characters").optional(),
});

export type FranchiseFormValues = z.infer<typeof franchiseFormSchema>;

export const defaultFranchiseFormValues: FranchiseFormValues = {
    fullName: "",
    email: "",
    phone: "",
    city: "",
    investmentCapacity: "",
    message: "",
};
