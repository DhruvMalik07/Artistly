"use client";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useArtistContext } from "@/context/ArtistContext";

const categories = [
  "Pop Singer",
  "Classical Singer",
  "Dancer",
  "Speaker",
  "Techno DJ",
  "Bollywood DJ",
];
const languages = ["English", "Hindi", "Punjabi", "Tamil", "Bengali", "Gujarati"];
const feeRanges = [
  "Below 15,000",
  "15,000 - 20,000",
  "20,001 - 25,000",
  "Above 25,000",
];

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  bio: yup.string().required("Bio is required"),
  categories: yup.array().min(1, "Select at least one category"),
  languages: yup.array().min(1, "Select at least one language"),
  fee: yup.string().required("Fee range is required"),
  location: yup.string().required("Location is required"),
  profileImage: yup.mixed().notRequired(),
});

type FormData = {
  name: string;
  bio: string;
  categories: string[];
  languages: string[];
  fee: string;
  location: string;
};

export default function OnboardPage() {
  const { addArtist, artists } = useArtistContext() as { artists: Artist[] };
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      bio: "",
      categories: [],
      languages: [],
      fee: "",
      location: "",
      profileImage: null,
    },
  });

  const onSubmit = (data: FormData) => {
    const formData = { ...data };
    addArtist({
      name: data.name,
      category: data.categories?.[0] || '',
      price: data.fee,
      location: data.location,
    });
    console.log("Artist Onboarding Data:", formData);
    alert("Form submitted! Check console for data.");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-8">
      <h1 className="text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-center">Artist Onboarding Form</h1>
      <form
        className="bg-white/90 p-8 rounded-2xl shadow-xl max-w-xl mx-auto space-y-8 border border-gray-300"
        onSubmit={handleSubmit(onSubmit)}
        encType="multipart/form-data"
      >
        <div>
          <label className="block font-bold mb-2 text-blue-700">Name *</label>
          <input {...register("name")}
            className="border border-gray-400 p-2 rounded w-full focus:ring-2 focus:ring-blue-400 bg-gray-100 text-gray-900 font-semibold" placeholder="Artist Name" />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block font-bold mb-2 text-purple-700">Bio *</label>
          <textarea {...register("bio")}
            className="border border-gray-400 p-2 rounded w-full focus:ring-2 focus:ring-purple-400 bg-gray-100 text-gray-900 font-semibold" placeholder="Short bio" rows={3} />
          {errors.bio && <p className="text-red-500 text-sm mt-1">{errors.bio.message}</p>}
        </div>
        <div>
          <label className="block font-bold mb-2 text-pink-700">Category *</label>
          <Controller
            control={control}
            name="categories"
            render={({ field }) => (
              <div className="flex flex-wrap gap-4">
                {categories.map((cat) => (
                  <label key={cat} className="flex items-center gap-2 text-gray-800 font-semibold">
                    <input
                      type="checkbox"
                      value={cat}
                      checked={(field.value ?? []).includes(cat)}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        if (e.target.checked) {
                          field.onChange([...(field.value ?? []), cat]);
                        } else {
                          field.onChange((field.value ?? []).filter((v: string) => v !== cat));
                        }
                      }}
                    />
                    {cat}
                  </label>
                ))}
              </div>
            )}
          />
          {errors.categories && <p className="text-red-500 text-sm mt-1">{errors.categories.message}</p>}
        </div>
        <div>
          <label className="block font-bold mb-2 text-green-700">Languages Spoken *</label>
          <Controller
            control={control}
            name="languages"
            render={({ field }) => (
              <div className="flex flex-wrap gap-4">
                {languages.map((lang) => (
                  <label key={lang} className="flex items-center gap-2 text-gray-800 font-semibold">
                    <input
                      type="checkbox"
                      value={lang}
                      checked={(field.value ?? []).includes(lang)}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        if (e.target.checked) {
                          field.onChange([...(field.value ?? []), lang]);
                        } else {
                          field.onChange((field.value ?? []).filter((v: string) => v !== lang));
                        }
                      }}
                    />
                    {lang}
                  </label>
                ))}
              </div>
            )}
          />
          {errors.languages && <p className="text-red-500 text-sm mt-1">{errors.languages.message}</p>}
        </div>
        <div>
          <label className="block font-bold mb-2 text-yellow-700">Fee Range *</label>
          <select {...register("fee")} className="border border-gray-400 p-2 rounded w-full focus:ring-2 focus:ring-yellow-400 bg-gray-100 text-gray-800 font-semibold">
            <option value="" className="text-gray-500 font-normal">Select Fee Range</option>
            {feeRanges.map((fee) => (
              <option key={fee} value={fee} className="text-gray-800 font-semibold">{fee}</option>
            ))}
          </select>
          {errors.fee && <p className="text-red-500 text-sm mt-1">{errors.fee.message}</p>}
        </div>
        <div>
          <label className="block font-bold mb-2 text-pink-700">Location *</label>
          <input {...register("location")}
            className="border border-gray-400 p-2 rounded w-full focus:ring-2 focus:ring-pink-400 bg-gray-100 text-gray-800 font-semibold" placeholder="City/Location" />
          {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>}
        </div>
        <button type="submit" className="w-full py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-full font-bold text-lg shadow hover:from-pink-500 hover:to-blue-500 transition">Submit</button>
      </form>
    </main>
  );
}
