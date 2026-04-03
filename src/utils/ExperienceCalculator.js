/**
 * Experience Calculator Utility
 * Automatically computes years of experience from a start date.
 */

const CAREER_START_DATE = new Date('2024-10-01');

/**
 * Calculates years of experience from the career start date.
 * @returns {string} Formatted experience string, e.g. "1.6"
 */
export const getExperienceYears = () => {
  const now = new Date();
  const diffMs = now - CAREER_START_DATE;
  const years = diffMs / (1000 * 60 * 60 * 24 * 365.25);
  return years.toFixed(1);
};

/**
 * Returns a formatted experience label.
 * @returns {string} e.g. "1.6+"
 */
export const getExperienceLabel = () => {
  return `${getExperienceYears()}+`;
};

/**
 * Returns a full formatted experience string.
 * @returns {string} e.g. "1.6+ Years Experience"
 */
export const getExperienceString = () => {
  return `${getExperienceYears()}+ Years Experience`;
};

export default {
  getExperienceYears,
  getExperienceLabel,
  getExperienceString,
  CAREER_START_DATE
};
