export const gradeToYear = (grade: string) => {
  switch (grade) {
    case "1":
      return "19";
    case "2":
      return "18";
    case "3":
      return "17";
    default:
      return null;
  }
};

export const classToMajor = (cla: string) => {
  switch (cla) {
    case "1":
      return "EB";
    case "2":
      return "DC";
    case "3":
      return "WP";
    case "4":
      return "WP";
    case "5":
      return "HD";
    case "6":
      return "HD";
    default:
      return null;
  }
};

