import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <header className="py-12 text-center bg-violet-600 text-white">
        <h1 className="text-4xl font-bold">Welcome to EduForge</h1>
        <p className="mt-4 text-lg">Empower your learning journey by creating your own courses!</p>
      </header>

      <main className="max-w-7xl mx-auto py-12 px-4">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src='https://instructor-academy.onlinecoursehost.com/content/images/2023/05/101_-What-Online-Courses-Are-Most-In-Demand-In-2023_.jpg' alt="Create Course" className="w-full h-48 object-cover rounded-md" />
            <h2 className="mt-4 text-2xl font-semibold">Create Your Own Courses</h2>
            <p className="mt-2 text-gray-600">
              EduForge provides a user-friendly platform to design and create personalized courses. 
              You can choose your subjects, add content, and customize your learning path.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src='https://media.assettype.com/analyticsinsight%2F2024-07%2Ff5a4ddea-ddea-4b18-8ff8-f2ebf2fc21d0%2FAI_4.jpg' alt="Suggested Videos" className="w-full h-48 object-cover rounded-md" />
            <h2 className="mt-4 text-2xl font-semibold">Video Suggestions</h2>
            <p className="mt-2 text-gray-600">
              Discover relevant YouTube videos to enhance your learning experience. 
              EduForge intelligently suggests videos based on the courses you create, 
              making it easier for you to study and grasp new concepts.
            </p>
          </div>
        </section>

        <section className="mt-12 text-center">
          <h2 className="text-3xl font-semibold">Why Choose EduForge?</h2>
          <p className="mt-4 text-lg text-gray-600">
            Our platform is designed to cater to your learning needs. 
            With EduForge, you have the flexibility to curate content that suits your style and pace. 
            Start creating today and take control of your education!
          </p>
        </section>
      </main>

      <footer className="bg-violet-600 text-white py-4 text-center">
        <p>&copy; 2024 EduForge. All rights reserved.</p>
      </footer>
    </div>
  );
}
