import React, { createContext, useContext, useState, useEffect } from 'react';
import { Course, EventItem, AdmissionEnquiry } from '../types';
import { COURSES_DATA, INITIAL_DEMO_ENQUIRIES } from '../data/mockData';

export interface PortalUser {
  id: string;
  name: string;
  role: 'student' | 'faculty';
  email: string;
  department: string;
  batchOrDesignation: string;
}

interface PortalContextType {
  enquiries: AdmissionEnquiry[];
  submitEnquiry: (enquiry: Omit<AdmissionEnquiry, 'id' | 'submittedAt' | 'status'>) => string;
  currentUser: PortalUser | null;
  loginUser: (role: 'student' | 'faculty') => void;
  logoutUser: () => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  isPortalOpen: boolean;
  setIsPortalOpen: (open: boolean) => void;
  portalTab: 'student' | 'faculty';
  setPortalTab: (tab: 'student' | 'faculty') => void;
  selectedCourse: Course | null;
  setSelectedCourse: (course: Course | null) => void;
  openCourseModal: (courseId: string) => void;
  selectedEvent: EventItem | null;
  setSelectedEvent: (event: EventItem | null) => void;
  downloadBrochure: (course?: Course) => void;
  notificationMessage: string | null;
  clearNotification: () => void;
}

const PortalContext = createContext<PortalContextType | undefined>(undefined);

const STORAGE_KEY_ENQUIRIES = 'abc_tech_admissions_v1';
const STORAGE_KEY_USER = 'abc_tech_user_v1';

export const PortalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [enquiries, setEnquiries] = useState<AdmissionEnquiry[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_ENQUIRIES);
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return INITIAL_DEMO_ENQUIRIES;
  });

  const [currentUser, setCurrentUser] = useState<PortalUser | null>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_USER);
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return null;
  });

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [portalTab, setPortalTab] = useState<'student' | 'faculty'>('student');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [notificationMessage, setNotificationMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_ENQUIRIES, JSON.stringify(enquiries));
    } catch {
      // ignore
    }
  }, [enquiries]);

  useEffect(() => {
    try {
      if (currentUser) {
        localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(currentUser));
      } else {
        localStorage.removeItem(STORAGE_KEY_USER);
      }
    } catch {
      // ignore
    }
  }, [currentUser]);

  // Keyboard shortcut Cmd+K / Ctrl+K for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const submitEnquiry = (enquiryData: Omit<AdmissionEnquiry, 'id' | 'submittedAt' | 'status'>): string => {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const newId = `ABC-2026-ENG-${randomNum}`;
    const newEnquiry: AdmissionEnquiry = {
      ...enquiryData,
      id: newId,
      submittedAt: new Date().toISOString().replace('T', ' ').substring(0, 16),
      status: 'Received',
    };

    setEnquiries(prev => [newEnquiry, ...prev]);
    setNotificationMessage(`Application #${newId} successfully submitted! Our admission team will contact you.`);
    return newId;
  };

  const loginUser = (role: 'student' | 'faculty') => {
    if (role === 'student') {
      const student: PortalUser = {
        id: 'STU-2024-042',
        name: 'Jordan Miller',
        role: 'student',
        email: 'jordan.miller@student.abctech.edu',
        department: 'Computer Science & Engineering',
        batchOrDesignation: 'Class of 2026 · Semester 6 · Roll No. 24CS104',
      };
      setCurrentUser(student);
      setNotificationMessage('Welcome Jordan Miller! Logged into Student ERP Portal.');
    } else {
      const faculty: PortalUser = {
        id: 'FAC-ENG-019',
        name: 'Dr. Evelyn Vance',
        role: 'faculty',
        email: 'e.vance@abctech.edu',
        department: 'Computer Science & Engineering',
        batchOrDesignation: 'Professor & Department Head (Dean of Computing)',
      };
      setCurrentUser(faculty);
      setNotificationMessage('Welcome Dr. Evelyn Vance! Logged into Faculty Academic Management.');
    }
    setIsPortalOpen(false);
  };

  const logoutUser = () => {
    setCurrentUser(null);
    setNotificationMessage('Successfully signed out of the academic portal.');
  };

  const openCourseModal = (courseId: string) => {
    const found = COURSES_DATA.find(c => c.id === courseId);
    if (found) {
      setSelectedCourse(found);
    }
  };

  const downloadBrochure = (course?: Course) => {
    const title = course ? `${course.name} - Academic Prospectus` : 'ABC College of Technology - Official Prospectus 2026-27';
    const content = `
=================================================================
${title}
ABC College of Technology
Accredited NAAC Grade 'A++' | NBA Accredited Tier-1 | Autonomous
=================================================================

Address: 450 University Boulevard, Tech Knowledge Park, Metro City
Helpline: +1 (800) 222-8324 | Website: https://abctech.edu

${course ? `
PROGRAM DETAILS:
----------------
Degree: ${course.degree}
Duration: ${course.duration}
Department: ${course.department}
Approved Intake: ${course.seats} Seats
Annual Tuition: ${course.annualFee}
Eligibility: ${course.eligibility}

PROGRAM OVERVIEW:
${course.fullDescription}

KEY CURRICULUM MODULES:
${course.curriculum.map((c, i) => `  ${i + 1}. ${c}`).join('\n')}

CAREER PROSPECTS & PLACEMENT PATHS:
${course.careerProspects.map((cp, i) => `  * ${cp}`).join('\n')}
` : `
INSTITUTION OVERVIEW:
--------------------
Established in 1996, ABC College of Technology is a premier autonomous
technical institution ranked in the top 35 nationally. With 28 academic
programs, 8,500+ students, 380+ faculty members, and a 96.4% placement rate.

DEPARTMENTS & PROGRAMS:
  1. Computer Science & Engineering (B.Tech - 240 Seats)
  2. Information Technology (B.Tech - 180 Seats)
  3. Electronics & Communication Engineering (B.Tech - 180 Seats)
  4. Mechanical Engineering (B.Tech - 120 Seats)
  5. Civil Engineering (B.Tech - 90 Seats)
  6. Business Administration - MBA (120 Seats)
  7. Computer Applications - MCA / BCA (120 Seats)

CAMPUS FACILITIES:
  * Central Digital Library with 120,000+ volumes & IEEE access
  * High-Performance AI Computing Cluster & NVIDIA Workstations
  * Olympic-standard Athletic Sports Complex & Turf Ground
  * Modern Residential Halls for Boys & Girls (3,200 capacity)
  * Tagore Memorial 1,500-seat Convention Auditorium
  * 45 Air-Conditioned Transportation Bus Fleet
`}

ADMISSIONS HELPLINE:
Admissions Office: +1 (800) 222-8324 / admissions@abctech.edu
Apply online at: https://abctech.edu/admissions

(C) 2026 ABC College of Technology. All Rights Reserved.
=================================================================
`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = course ? `${course.id}-prospectus-2026.txt` : 'abc-college-prospectus-2026.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setNotificationMessage(`Downloaded prospectus: ${course ? course.name : 'College Prospectus 2026-27'}`);
  };

  const clearNotification = () => setNotificationMessage(null);

  return (
    <PortalContext.Provider
      value={{
        enquiries,
        submitEnquiry,
        currentUser,
        loginUser,
        logoutUser,
        isSearchOpen,
        setIsSearchOpen,
        isPortalOpen,
        setIsPortalOpen,
        portalTab,
        setPortalTab,
        selectedCourse,
        setSelectedCourse,
        openCourseModal,
        selectedEvent,
        setSelectedEvent,
        downloadBrochure,
        notificationMessage,
        clearNotification,
      }}
    >
      {children}
    </PortalContext.Provider>
  );
};

export const usePortal = (): PortalContextType => {
  const context = useContext(PortalContext);
  if (!context) {
    throw new Error('usePortal must be used within a PortalProvider');
  }
  return context;
};
