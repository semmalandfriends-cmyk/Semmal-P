export interface Course {
  id: string;
  name: string;
  department: string;
  degree: 'B.Tech' | 'M.Tech' | 'MBA' | 'MCA' | 'BCA';
  duration: string;
  eligibility: string;
  seats: number;
  annualFee: string;
  shortDescription: string;
  fullDescription: string;
  curriculum: string[];
  careerProspects: string[];
  intakeSeason: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  department: string;
  qualification: string;
  experience: string;
  specialization: string[];
  email: string;
  publicationsCount: number;
  avatarSeed: string;
}

export interface CampusFacility {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  features: string[];
  timings: string;
  capacity?: string;
  image?: string;
}

export interface EventItem {
  id: string;
  title: string;
  type: 'symposium' | 'workshop' | 'cultural' | 'sports' | 'seminar';
  date: string;
  time: string;
  venue: string;
  speakerOrOrganizer: string;
  description: string;
  seatsAvailable: number;
  fee: string;
  registrationOpen: boolean;
}

export interface NoticeItem {
  id: string;
  title: string;
  date: string;
  category: 'Examination' | 'Admissions' | 'Scholarships' | 'General' | 'Placement';
  pdfRef: string;
  fileSize: string;
  isUrgent?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  batch: string;
  companyOrPursuit: string;
  quote: string;
  avatarSeed: string;
}

export interface StudentClub {
  id: string;
  name: string;
  category: string;
  lead: string;
  membersCount: number;
  description: string;
  annualFlagshipEvent: string;
}

export interface AdmissionEnquiry {
  id: string;
  studentName: string;
  email: string;
  phone: string;
  preferredCourse: string;
  previousQualification: string;
  percentageOrCgpa: string;
  city: string;
  notes?: string;
  submittedAt: string;
  status: 'Received' | 'Under Review' | 'Counseling Scheduled' | 'Provisionally Approved';
}
