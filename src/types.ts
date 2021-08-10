export interface Grade {
  Name: string;
  Subjects: Subject[];
  HoursPerDay: HoursPerDayOfSchedule;
}

interface HoursPerDayOfSchedule {
  Monday: DayWeek;
  Tuesday: DayWeek;
  Wednesday: DayWeek;
  Thursday: DayWeek;
  Friday: DayWeek;
  Saturday: DayWeek;
  Sunday: DayWeek;
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
  Monday: DayWeek;
  Tuesday: DayWeek;
  Wednesday: DayWeek;
  Thursday: DayWeek;
  Friday: DayWeek;
  Saturday: DayWeek;
  Sunday: DayWeek;
}

interface DayWeek {
  NumOfHours: number;
  Hours: ScheduleHour[] | TeacherHour[];
}

interface ScheduleHour {
  Type: 'free' | 'shared' | 'single' | 'unoccupied';
}

interface TeacherHour {
  Type: 'available' | 'unavailable';
}

type MinutesPerHour = number;