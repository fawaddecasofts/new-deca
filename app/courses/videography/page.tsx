// 'use client'

// import Image from 'next/image'
// import Link from 'next/link'
// import { useRef, useState } from 'react'

// const relatedCourses = [
//   {
//     title: 'Graphic Designing',
//     desc: 'Learn the art of visual storytelling with Photoshop, Illustrator and InDesign to create stunning designs.',
//     href: '/courses/graphic-designing',
//     img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80',
//   },
//   {
//     title: 'UI/UX Design',
//     desc: 'Learn user interface and experience design using Figma and modern design principles.',
//     href: '/courses/uiux',
//     img: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=400&q=80',
//   },
//   {
//     title: 'Digital Marketing',
//     desc: 'Master digital marketing strategies including social media, email, and paid ads.',
//     href: '/courses/digital-marketing',
//     img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80',
//   },
//   {
//     title: 'Freelancing',
//     desc: 'This freelancing course is designed for individuals who want to start their online career.',
//     href: '/courses/freelancing',
//     img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80',
//   },
//   {
//     title: 'SEO (Search Engine Optimization)',
//     desc: 'Learn to rank websites on Google and drive organic traffic with proven SEO strategies.',
//     href: '/courses/seo',
//     img: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&q=80',
//   },
//   {
//     title: 'Business Development',
//     desc: 'This Business Development Course is perfect for anyone who wants to grow their business.',
//     href: '/courses/business',
//     img: 'https://images.unsplash.com/photo-1664575602807-e002fc20892c?w=400&q=80',
//   },
// ]

// type FormData = {
//   firstName: string
//   lastName: string
//   email: string
//   phone: string
//   course: string
//   batch: string
//   message: string
// }

// type FormStatus = 'idle' | 'loading' | 'success' | 'error'

// export default function VideographyCoursePage() {
//   const scrollRef = useRef<HTMLDivElement>(null)

//   const [formData, setFormData] = useState<FormData>({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     course: '',
//     batch: '',
//     message: '',
//   })

//   const [status, setStatus] = useState<FormStatus>('idle')

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
//   ) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
//   }

//   const handleSubmit = async () => {
//     const { firstName, lastName, email, phone, course, batch, message } = formData

//     if (!firstName || !lastName || !email || !phone || !course || !batch || !message) {
//       alert('Please fill in all fields.')
//       return
//     }

//     setStatus('loading')

//     try {
//       const res = await fetch('/api/contact', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       })

//       if (res.ok) {
//         setStatus('success')
//         setFormData({ firstName: '', lastName: '', email: '', phone: '', course: '', batch: '', message: '' })
//       } else {
//         setStatus('error')
//       }
//     } catch {
//       setStatus('error')
//     }
//   }

//   const scroll = (dir: 'left' | 'right') => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: dir === 'right' ? 320 : -320, behavior: 'smooth' })
//     }
//   }

//   const inputClass = "w-full border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary"

//   return (
//     <main className="bg-white text-gray-800">

//       {/* Hero */}
//       <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-12">
//         <div className="flex-1">
//           <h1 className="text-4xl lg:text-5xl font-extrabold text-primary mb-5 leading-tight">
//             Videography
//           </h1>
//           <p className="text-gray-600 text-sm leading-relaxed mb-8 max-w-lg">
//             Master the art of video production with our hands-on Videography course. Learn
//             camera operation, lighting techniques, professional shooting skills, and video
//             editing using industry-standard software. From concept to final cut, this course
//             equips you with everything needed to create compelling videos for brands, social
//             media, films, and beyond — no prior experience required!
//           </p>
//           <Link
//             href="#enroll"
//             className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold px-8 py-3 rounded transition-colors text-sm"
//           >
//             ENROLL NOW
//           </Link>
//         </div>

//         <div className="flex-1 relative">
//           <Image
//             src="https://images.unsplash.com/photo-1540655037529-dec987208707?w=700&q=80"
//             alt="Videography Course"
//             width={600}
//             height={420}
//             className="rounded-xl object-cover w-full h-auto shadow-md"
//           />
//           <div className="absolute top-4 right-4 flex gap-2 flex-wrap justify-end">
//             {['Camera', 'Lighting', 'Editing', 'Color'].map((t) => (
//               <span key={t} className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow">
//                 {t}
//               </span>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Course Detail */}
//       <section className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-14">
//         <div className="flex-1 text-sm leading-relaxed text-gray-700 space-y-5">
//           <p>
//             Turn your passion for storytelling into a professional skill with our{' '}
//             <strong className="text-primary">Videography Course</strong>. Whether you want to
//             shoot YouTube videos, brand commercials, wedding films, or social media content,
//             this course covers everything from camera settings and composition to advanced
//             editing and color grading — all taught by industry professionals.
//           </p>

//           <div>
//             <p className="font-bold text-gray-800 mb-2">What You&apos;ll Learn:</p>
//             <ul className="list-disc pl-5 space-y-1 text-gray-600">
//               <li>Camera types, settings, and manual controls (ISO, aperture, shutter speed)</li>
//               <li>Composition rules and cinematic framing techniques</li>
//               <li>Indoor and outdoor lighting setups for professional results</li>
//               <li>Audio recording and sound design basics</li>
//               <li>Video editing using Adobe Premiere Pro and DaVinci Resolve</li>
//               <li>Color grading and cinematic look development</li>
//               <li>Creating reels, YouTube videos, and brand content</li>
//               <li>Exporting and delivering final videos for different platforms</li>
//             </ul>
//           </div>

//           <div>
//             <p className="font-bold text-gray-800 mb-2">Course Modules:</p>
//             <ul className="list-disc pl-5 space-y-1 text-gray-600">
//               <li>Camera Fundamentals &amp; Equipment</li>
//               <li>Cinematography &amp; Composition</li>
//               <li>Lighting &amp; Audio Production</li>
//               <li>Video Editing with Premiere Pro &amp; DaVinci Resolve</li>
//               <li>Color Grading &amp; Visual Storytelling</li>
//             </ul>
//           </div>

//           <div>
//             <p className="font-bold text-gray-800 mb-2">Who This Course Is For:</p>
//             <ul className="list-disc pl-5 space-y-1 text-gray-600">
//               <li>Beginners with zero videography experience</li>
//               <li>Content creators and YouTubers</li>
//               <li>Social media marketers and brand managers</li>
//               <li>Freelancers looking to offer video production services</li>
//               <li>Anyone passionate about visual storytelling</li>
//             </ul>
//           </div>

//           <div>
//             <p className="font-bold text-gray-800 mb-2">What You&apos;ll Get:</p>
//             <ul className="list-disc pl-5 space-y-1 text-gray-600">
//               <li>Step-by-step video tutorials</li>
//               <li>Real shoot and editing projects</li>
//               <li>Certificate of Completion</li>
//               <li>Lifetime access to course materials</li>
//             </ul>
//           </div>

//           <p className="font-bold text-gray-900">
//             From behind the lens to the final edit — become a professional videographer
//             and bring your creative vision to life!
//           </p>
//         </div>

//         <div className="flex-1">
//           <Image
//             src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=700&q=80"
//             alt="Video editing and production"
//             width={580}
//             height={420}
//             className="rounded-xl object-cover w-full h-auto shadow-md"
//           />
//         </div>
//       </section>

//       {/* Related Courses */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-6">
//           <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-10">
//             Related Course
//           </h2>

//           <div className="relative">
//             <button
//               onClick={() => scroll('left')}
//               className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 shadow rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors"
//               aria-label="Scroll left"
//             >
//               ‹
//             </button>

//             <div
//               ref={scrollRef}
//               className="flex gap-5 overflow-x-auto scroll-smooth pb-4"
//               style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//             >
//               {relatedCourses.map((course) => (
//                 <div
//                   key={course.title}
//                   className="min-w-[240px] max-w-[240px] bg-white border border-gray-100 rounded-xl shadow-sm flex-shrink-0 overflow-hidden"
//                 >
//                   <div className="relative h-36">
//                     <Image
//                       src={course.img}
//                       alt={course.title}
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                   <div className="p-4">
//                     <h3 className="text-sm font-bold text-gray-800 mb-1 leading-snug">
//                       {course.title}
//                     </h3>
//                     <p className="text-xs text-gray-500 leading-relaxed line-clamp-3 mb-3">
//                       {course.desc}
//                     </p>
//                     <Link
//                       href={course.href}
//                       className="text-xs font-semibold text-primary hover:underline flex items-center gap-1"
//                     >
//                       Read More →
//                     </Link>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <button
//               onClick={() => scroll('right')}
//               className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 shadow rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors"
//               aria-label="Scroll right"
//             >
//               ›
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Why Decasofts + Form */}
//       <section id="enroll" className="max-w-7xl mx-auto px-6 py-16">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gray-900 rounded-2xl overflow-hidden">

//           {/* Left - Why */}
//           <div className="p-10 text-white">
//             <h3 className="text-xl font-extrabold mb-6">Why Decasofts?</h3>
//             <ul className="space-y-3 text-sm text-gray-300">
//               {[
//                 '10+ years of industry experience',
//                 'ISO 27001-certified for quality service',
//                 'Over 50+ certified developers',
//                 '500+ Successful Projects',
//                 'Multiple award-winning agency',
//                 'Result-oriented approach',
//                 'Certified by Clutch.co & G2.com',
//                 'AWS Certified Engineers',
//               ].map((item) => (
//                 <li key={item} className="flex items-center gap-3">
//                   <span className="text-primary text-base">✓</span>
//                   {item}
//                 </li>
//               ))}
//             </ul>
//             <button className="mt-8 border border-white text-white text-xs font-bold px-6 py-2.5 rounded hover:bg-white hover:text-gray-900 transition-colors">
//               BOOK A FREE CONSULTATION
//             </button>
//           </div>

//           {/* Right - Form */}
//           <div className="bg-white p-10">
//             {status === 'success' ? (
//               <div className="flex flex-col items-center justify-center h-full text-center py-10">
//                 <div className="text-green-500 text-5xl mb-4">✓</div>
//                 <h3 className="text-lg font-bold text-gray-800 mb-2">Message Sent!</h3>
//                 <p className="text-sm text-gray-500">We&apos;ll get back to you shortly.</p>
//                 <button
//                   onClick={() => setStatus('idle')}
//                   className="mt-6 text-xs text-primary underline"
//                 >
//                   Send another message
//                 </button>
//               </div>
//             ) : (
//               <>
//                 <div className="grid grid-cols-2 gap-4 mb-4">
//                   <div>
//                     <label className="block text-xs font-semibold text-gray-600 mb-1">First Name</label>
//                     <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" className={inputClass} />
//                   </div>
//                   <div>
//                     <label className="block text-xs font-semibold text-gray-600 mb-1">Last Name</label>
//                     <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" className={inputClass} />
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-2 gap-4 mb-4">
//                   <div>
//                     <label className="block text-xs font-semibold text-gray-600 mb-1">Email</label>
//                     <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className={inputClass} />
//                   </div>
//                   <div>
//                     <label className="block text-xs font-semibold text-gray-600 mb-1">Phone Number</label>
//                     <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className={inputClass} />
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-2 gap-4 mb-4">
//                   <div>
//                     <label className="block text-xs font-semibold text-gray-600 mb-1">Course</label>
//                     <select name="course" value={formData.course} onChange={handleChange} className={inputClass}>
//                       <option value="">Select Course</option>
//                       <option value="Web Development">Web Development</option>
//                       <option value="Digital Marketing">Digital Marketing</option>
//                       <option value="Search Engine Optimization">Search Engine Optimization</option>
//                       <option value="Graphic Designing">Graphic Designing</option>
//                       <option value="UI/UX Design">UI/UX Design</option>
//                       <option value="Videography">Videography</option>
//                       <option value="E-Commerce">E-Commerce</option>
//                       <option value="Freelancing">Freelancing</option>
//                       <option value="Shopify Store Development">Shopify Store Development</option>
//                       <option value="Business Development">Business Development</option>
//                     </select>
//                   </div>
//                   <div>
//                     <label className="block text-xs font-semibold text-gray-600 mb-1">Batch</label>
//                     <select name="batch" value={formData.batch} onChange={handleChange} className={inputClass}>
//                       <option value="">Select Batch</option>
//                       <option value="Morning Batch">Morning Batch</option>
//                       <option value="Evening Batch">Evening Batch</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div className="mb-6">
//                   <label className="block text-xs font-semibold text-gray-600 mb-1">Message</label>
//                   <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" rows={3} className={`${inputClass} resize-none`} />
//                 </div>

//                 {status === 'error' && (
//                   <p className="text-xs text-red-500 mb-3">Something went wrong. Please try again.</p>
//                 )}

//                 <button
//                   onClick={handleSubmit}
//                   disabled={status === 'loading'}
//                   className="w-full bg-[#bf2227] hover:bg-[#a51d21] disabled:opacity-60 text-white font-semibold py-3 rounded text-sm transition-colors"
//                 >
//                   {status === 'loading' ? 'Sending...' : 'Send'}
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* Collaboration Banner */}
//       <section className="bg-primary mx-6 lg:mx-auto max-w-7xl rounded-2xl mb-16 overflow-hidden">
//         <div className="flex flex-col lg:flex-row items-center justify-between px-10 py-12 gap-8">
//           <div className="text-white flex-1">
//             <p className="text-sm font-semibold uppercase tracking-widest mb-2 opacity-80">
//               Collaboration
//             </p>
//             <h2 className="text-2xl lg:text-3xl font-extrabold leading-tight mb-4">
//               Did you get stuck in something?
//               <br />
//               Lets Collaborate &amp; Conquer :
//             </h2>
//             <p className="text-sm text-red-100 leading-relaxed max-w-md">
//               Our creative team specializes in solving all your digital challenges. With the expertise
//               of our UI/UX consultants, we&apos;re here to elevate your business and enhance user
//               experiences.
//             </p>
//           </div>
//           <div className="flex flex-col items-center gap-6 flex-shrink-0">
//             <Image
//               src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80"
//               alt="Collaboration"
//               width={220}
//               height={220}
//               className="rounded-full object-cover w-40 h-40 border-4 border-white/30"
//             />
//             <Link
//               href="/contact"
//               className="bg-white text-primary font-bold px-8 py-3 rounded-full text-sm hover:bg-red-50 transition-colors"
//             >
//               CONTACT US
//             </Link>
//           </div>
//         </div>
//       </section>

//     </main>
//   )
// }
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'
import {
  Camera,
  Lightbulb,
  Mic2,
  Film,
  Palette,
  Share2,
  GraduationCap,
  Briefcase,
  Sparkles,
  Globe2,
  ListChecks,
  FolderGit2,
  Award,
  Infinity as InfinityIcon,
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
} from 'lucide-react'

const relatedCourses = [
  {
    title: 'Graphic Designing',
    desc: 'Learn the art of visual storytelling with Photoshop, Illustrator and InDesign to create stunning designs.',
    href: '/courses/graphic-designing',
    img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80',
    tag: 'Design',
  },
  {
    title: 'UI/UX Design',
    desc: 'Learn user interface and experience design using Figma and modern design principles.',
    href: '/courses/uiux',
    img: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=400&q=80',
    tag: 'Design',
  },
  {
    title: 'Digital Marketing',
    desc: 'Master digital marketing strategies including social media, email, and paid ads.',
    href: '/courses/digital-marketing',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80',
    tag: 'Growth',
  },
  {
    title: 'Freelancing',
    desc: 'This freelancing course is designed for individuals who want to start their online career.',
    href: '/courses/freelancing',
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80',
    tag: 'Career',
  },
  {
    title: 'SEO (Search Engine Optimization)',
    desc: 'Learn to rank websites on Google and drive organic traffic with proven SEO strategies.',
    href: '/courses/seo',
    img: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&q=80',
    tag: 'Beginner',
  },
  {
    title: 'Business Development',
    desc: 'This Business Development Course is perfect for anyone who wants to grow their business.',
    href: '/courses/business',
    img: 'https://images.unsplash.com/photo-1664575602807-e002fc20892c?w=400&q=80',
    tag: 'Growth',
  },
]

const learnItems = [
  { icon: Camera, title: 'Camera Fundamentals', desc: 'Master ISO, aperture, and shutter speed' },
  { icon: Lightbulb, title: 'Lighting Techniques', desc: 'Indoor & outdoor setups for pro results' },
  { icon: Mic2, title: 'Audio & Sound Design', desc: 'Record clean audio and mix for video' },
  { icon: Film, title: 'Video Editing', desc: 'Cut with Premiere Pro & DaVinci Resolve' },
  { icon: Palette, title: 'Color Grading', desc: 'Develop a cinematic, consistent look' },
  { icon: Share2, title: 'Export & Delivery', desc: 'Deliver final videos for every platform' },
]

const modules = [
  { num: '01', title: 'Camera Fundamentals & Equipment', desc: 'Get comfortable behind the lens with the gear that matters.' },
  { num: '02', title: 'Cinematography & Composition', desc: 'Frame shots with intention using proven cinematic rules.' },
  { num: '03', title: 'Lighting & Audio Production', desc: 'Light scenes and capture sound like a professional crew.' },
  { num: '04', title: 'Editing, Color Grading & Storytelling', desc: 'Cut, grade, and deliver a final video that tells a story.' },
]

const forWhom = [
  { icon: Sparkles, label: 'Beginners with zero videography experience' },
  { icon: Briefcase, label: 'Content creators and YouTubers' },
  { icon: GraduationCap, label: 'Social media marketers and brand managers' },
  { icon: Globe2, label: 'Freelancers offering video production services' },
]

const getItems = [
  { icon: ListChecks, label: 'Step-by-step video tutorials' },
  { icon: FolderGit2, label: 'Real shoot & editing projects' },
  { icon: Award, label: 'Certificate of completion' },
  { icon: InfinityIcon, label: 'Lifetime access to materials' },
]

const tickerMetrics = [
  'CAMERA SETUPS DSLR · MIRRORLESS · GIMBAL',
  'EDITING SOFTWARE PREMIERE · RESOLVE',
  'STUDENT PROJECTS DELIVERED 300+',
  '4K EXPORT READY',
  'SHOOT-TO-EDIT TIME -50%',
  'STUDENT SHORTS PUBLISHED 150+',
]

const whyDecasofts = [
  '10+ years of industry experience',
  'ISO 27001-certified for quality service',
  'Over 50+ certified developers',
  '500+ Successful Projects',
  'Multiple award-winning agency',
  'Result-oriented approach',
  'Certified by Clutch.co & G2.com',
  'AWS Certified Engineers',
]

type FormData = {
  firstName: string
  lastName: string
  email: string
  phone: string
  course: string
  batch: string
  message: string
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export default function VideographyCoursePage() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    course: '',
    batch: '',
    message: '',
  })

  const [status, setStatus] = useState<FormStatus>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async () => {
    const { firstName, lastName, email, phone, course, batch, message } = formData

    if (!firstName || !lastName || !email || !phone || !course || !batch || !message) {
      alert('Please fill in all fields.')
      return
    }

    setStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setStatus('success')
        setFormData({ firstName: '', lastName: '', email: '', phone: '', course: '', batch: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === 'right' ? 320 : -320, behavior: 'smooth' })
    }
  }

  const inputClass =
    'w-full border border-[#E4DFD4] bg-white rounded-lg px-4 py-3 text-sm text-[#1A1B23] placeholder:text-[#A6A29A] focus:outline-none focus:ring-2 focus:ring-[#bf2227]/30 focus:border-[#bf2227] transition-all'

  return (
    <main className="bg-[#FAF8F3] text-[#1A1B23]" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        .font-display {
          font-family: 'Inter', sans-serif;
        }
        @keyframes ticker-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-track {
          animation: ticker-scroll 28s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .ticker-track { animation: none; }
        }
      `}</style>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-[#bf2227] bg-[#bf2227]/10 px-3 py-1.5 rounded-full mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Beginner&nbsp;Friendly&nbsp;Course
          </span>

          <h1 className="font-display text-5xl lg:text-6xl font-bold leading-[1.05] mb-6 text-[#13141C]">
            Videography<span className="text-[#bf2227]">.</span>
          </h1>

          <p className="text-[#5B5A66] text-base leading-relaxed mb-9 max-w-md">
            Master the art of video production with our hands-on Videography course. Learn
            camera operation, lighting, professional shooting skills, and editing using
            industry-standard software — everything you need to create compelling videos for
            brands, social media, and film.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="#enroll"
              className="inline-flex items-center gap-2 bg-[#bf2227] hover:bg-[#E63A2F] text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-sm shadow-[0_8px_24px_-8px_rgba(255,68,56,0.6)]"
            >
              Enroll Now
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#curriculum"
              className="inline-flex items-center gap-2 text-[#13141C] font-semibold px-2 py-3.5 text-sm hover:text-[#bf2227] transition-colors"
            >
              View Curriculum
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-br from-[#bf2227]/10 via-transparent to-[#129E8F]/10 rounded-[2rem] -z-10" />
          <Image
            src="https://images.unsplash.com/photo-1540655037529-dec987208707?w=700&q=80"
            alt="Videography Course"
            width={600}
            height={420}
            className="rounded-2xl object-cover w-full h-auto shadow-xl"
          />
          <div className="absolute -bottom-6 left-6 right-6 bg-[#13141C] rounded-xl px-5 py-4 flex items-center gap-3 shadow-xl flex-wrap">
            {['Camera', 'Lighting', 'Editing', 'Color'].map((t, i) => (
              <span key={t} className="flex items-center gap-2 text-white text-xs font-semibold">
                {i > 0 && <span className="w-1 h-1 rounded-full bg-white/30" />}
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Signature ticker strip */}
      <section className="bg-[#13141C] py-4 overflow-hidden mt-10">
        <div className="flex whitespace-nowrap ticker-track w-max">
          {[...tickerMetrics, ...tickerMetrics, ...tickerMetrics].map((m, i) => (
            <span
              key={i}
              className="font-display text-sm font-semibold text-white/80 px-8 flex items-center gap-8"
            >
              {m}
              <span className="w-1.5 h-1.5 rounded-full bg-[#bf2227]" />
            </span>
          ))}
        </div>
      </section>

      {/* What You'll Learn */}
      <section id="curriculum" className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12 max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#129E8F] mb-3">
            What You&apos;ll Learn
          </p>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#13141C]">
            From behind the lens to the final edit
          </h2>
          <p className="text-[#5B5A66] text-sm leading-relaxed mt-4">
            Built around the <strong className="text-[#13141C]">Videography Course</strong> —
            whether you want to shoot YouTube videos, brand commercials, or social content, this
            course covers everything from camera settings to advanced editing and color grading,
            taught by industry professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {learnItems.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group bg-white border border-[#ECE7DB] rounded-2xl p-6 hover:border-[#bf2227]/40 hover:shadow-[0_12px_30px_-12px_rgba(0,0,0,0.12)] transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-[#bf2227]/10 flex items-center justify-center mb-4 group-hover:bg-[#bf2227] transition-colors">
                <Icon className="w-5 h-5 text-[#bf2227] group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-display font-semibold text-[#13141C] mb-1">{title}</h3>
              <p className="text-xs text-[#7A7872] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Modules + image */}
      <section className="max-w-7xl mx-auto px-6 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#129E8F] mb-3">
            Course Modules
          </p>
          <div className="divide-y divide-[#ECE7DB] border-y border-[#ECE7DB]">
            {modules.map((m) => (
              <div key={m.num} className="flex gap-5 py-6">
                <span className="font-display text-2xl font-bold text-[#bf2227]/30 leading-none w-10 shrink-0">
                  {m.num}
                </span>
                <div>
                  <h4 className="font-display font-semibold text-[#13141C] mb-1">{m.title}</h4>
                  <p className="text-xs text-[#7A7872] leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <Image
            src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=700&q=80"
            alt="Video editing and production"
            width={580}
            height={420}
            className="rounded-2xl object-cover w-full h-auto shadow-lg"
          />
        </div>
      </section>

      {/* Who it's for + What you'll get */}
      <section className="max-w-7xl mx-auto px-6 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white border border-[#ECE7DB] rounded-2xl p-8">
          <h3 className="font-display font-bold text-lg text-[#13141C] mb-5">Who This Course Is For</h3>
          <div className="space-y-4">
            {forWhom.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 text-sm text-[#5B5A66]">
                <span className="w-8 h-8 rounded-lg bg-[#129E8F]/10 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-[#129E8F]" />
                </span>
                {label}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#13141C] rounded-2xl p-8">
          <h3 className="font-display font-bold text-lg text-white mb-5">What You&apos;ll Get</h3>
          <div className="space-y-4">
            {getItems.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 text-sm text-white/80">
                <span className="w-8 h-8 rounded-lg bg-[#bf2227]/15 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-[#bf2227]" />
                </span>
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <p className="font-display text-xl lg:text-2xl font-semibold text-center text-[#13141C]">
          Become a professional videographer and bring your creative vision to life.
        </p>
      </section>

      {/* Related Courses */}
      <section className="py-20 bg-white border-y border-[#ECE7DB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#129E8F] mb-3">
                Keep Going
              </p>
              <h2 className="font-display text-3xl font-bold text-[#13141C]">Related Courses</h2>
            </div>
            <div className="hidden sm:flex gap-2">
              <button
                onClick={() => scroll('left')}
                className="bg-[#FAF8F3] border border-[#ECE7DB] rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#13141C] hover:text-white transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="bg-[#FAF8F3] border border-[#ECE7DB] rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#13141C] hover:text-white transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {relatedCourses.map((course) => (
              <Link
                href={course.href}
                key={course.title}
                className="group min-w-[260px] max-w-[260px] bg-white border border-[#ECE7DB] rounded-2xl flex-shrink-0 overflow-hidden hover:shadow-[0_16px_36px_-16px_rgba(0,0,0,0.18)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-36 overflow-hidden">
                  <Image
                    src={course.img}
                    alt={course.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur text-[10px] font-semibold tracking-wide uppercase text-[#13141C] px-2.5 py-1 rounded-full">
                    {course.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-sm font-semibold text-[#13141C] mb-1.5 leading-snug">
                    {course.title}
                  </h3>
                  <p className="text-xs text-[#7A7872] leading-relaxed line-clamp-2 mb-4">
                    {course.desc}
                  </p>
                  <span className="text-xs font-semibold text-[#bf2227] flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read More <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Decasofts + Form */}
      <section id="enroll" className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-[#13141C] rounded-2xl overflow-hidden shadow-2xl">
          {/* Left - Why */}
          <div className="p-10 lg:p-12 text-white relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#bf2227]/10 rounded-full blur-3xl" />
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#bf2227] mb-3 relative">
              Trusted Partner
            </p>
            <h3 className="font-display text-2xl font-bold mb-7 relative">Why Decasofts?</h3>
            <ul className="space-y-3.5 text-sm text-white/80 relative">
              {whyDecasofts.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#bf2227] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <button className="mt-9 border border-white/30 text-white text-xs font-bold px-6 py-3 rounded-lg hover:bg-white hover:text-[#13141C] transition-colors relative">
              BOOK A FREE CONSULTATION
            </button>
          </div>

          {/* Right - Form */}
          <div className="bg-[#FAF8F3] p-10 lg:p-12">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-10">
                <div className="w-16 h-16 rounded-full bg-[#129E8F]/10 flex items-center justify-center mb-5">
                  <CheckCircle2 className="w-8 h-8 text-[#129E8F]" />
                </div>
                <h3 className="font-display text-lg font-bold text-[#13141C] mb-2">Message Sent!</h3>
                <p className="text-sm text-[#7A7872]">We&apos;ll get back to you shortly.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-xs text-[#bf2227] font-semibold underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-display text-lg font-bold text-[#13141C] mb-6">Get in touch</h3>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#5B5A66] mb-1.5">First Name</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#5B5A66] mb-1.5">Last Name</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" className={inputClass} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#5B5A66] mb-1.5">Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#5B5A66] mb-1.5">Phone Number</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className={inputClass} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#5B5A66] mb-1.5">Course</label>
                    <select name="course" value={formData.course} onChange={handleChange} className={inputClass}>
                      <option value="">Select Course</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="Search Engine Optimization">Search Engine Optimization</option>
                      <option value="Graphic Designing">Graphic Designing</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="Videography">Videography</option>
                      <option value="E-Commerce">E-Commerce</option>
                      <option value="Freelancing">Freelancing</option>
                      <option value="Shopify Store Development">Shopify Store Development</option>
                      <option value="Business Development">Business Development</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#5B5A66] mb-1.5">Batch</label>
                    <select name="batch" value={formData.batch} onChange={handleChange} className={inputClass}>
                      <option value="">Select Batch</option>
                      <option value="Morning Batch">Morning Batch</option>
                      <option value="Evening Batch">Evening Batch</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-xs font-semibold text-[#5B5A66] mb-1.5">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" rows={3} className={`${inputClass} resize-none`} />
                </div>

                {status === 'error' && (
                  <p className="text-xs text-red-500 mb-3">Something went wrong. Please try again.</p>
                )}

                <button
                  onClick={handleSubmit}
                  disabled={status === 'loading'}
                  className="w-full bg-[#bf2227] hover:bg-[#E63A2F] disabled:opacity-60 text-white font-semibold py-3.5 rounded-lg text-sm transition-colors shadow-[0_8px_24px_-8px_rgba(255,68,56,0.5)]"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Collaboration Banner */}
      <section className="bg-[#bf2227] mx-6 lg:mx-auto max-w-7xl rounded-2xl mb-20 overflow-hidden relative">
        <div className="absolute -bottom-24 -left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="flex flex-col lg:flex-row items-center justify-between px-10 py-14 gap-8 relative">
          <div className="text-white flex-1">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] mb-3 text-white/80">
              Collaboration
            </p>
            <h2 className="font-display text-2xl lg:text-3xl font-bold leading-tight mb-4">
              Did you get stuck in something?
              <br />
              Let&apos;s collaborate &amp; conquer.
            </h2>
            <p className="text-sm text-white/85 leading-relaxed max-w-md">
              Our creative team specializes in solving all your digital challenges. With the
              expertise of our UI/UX consultants, we&apos;re here to elevate your business and
              enhance user experiences.
            </p>
          </div>
          <div className="flex flex-col items-center gap-6 flex-shrink-0 relative">
            <Image
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80"
              alt="Collaboration"
              width={220}
              height={220}
              className="rounded-full object-cover w-40 h-40 border-4 border-white/30"
            />
            <Link
              href="/contact"
              className="bg-white text-[#bf2227] font-bold px-8 py-3 rounded-full text-sm hover:bg-[#FAF8F3] transition-colors inline-flex items-center gap-2"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}