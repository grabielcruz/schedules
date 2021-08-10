export interface Grade {
  Name: string;
  Subjects: Subject[];
  HoursPerDay: HoursPerDayOfSchedule;
}

interface HoursPerDayOfSchedule {
  Monday: DaySchedule;
  Tuesday: DaySchedule;
  Wednesday: DaySchedule;
  Thursday: DaySchedule;
  Friday: DaySchedule;
  Saturday: DaySchedule;
  Sunday: DaySchedule;
}

interface Subject {
  Name: string;
  HoursPerWeek: number;
  MaxHoursPerDay: number;
  NumOfSharedHours: number;
  Teacher: Teacher | null;
}

interface Teacher {
  Name: string;
  Schedule: TeacherSchedule;
}

interface TeacherSchedule {
  Monday: DayTeacher;
  Tuesday: DayTeacher;
  Wednesday: DayTeacher;
  Thursday: DayTeacher;
  Friday: DayTeacher;
  Saturday: DayTeacher;
  Sunday: DayTeacher;
}

interface DaySchedule {
  NumOfHours: number;
  Hours: ScheduleHour[];
}

interface DayTeacher {
  NumOfHours: number;
  Hours: TeacherHour[];
}

interface ScheduleHour {
  Type: 'free' | 'shared' | 'single' | 'unoccupied';
  Subject1: Subject;
  Subject2: Subject | null;
}

interface TeacherHour {
  Type: 'available' | 'unavailable';
}

type MinutesPerHour = number;