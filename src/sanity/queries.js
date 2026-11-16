export const EXPERIENCES_QUERY = `*[_type == "experience"] | order(order asc, startDate desc) {
  _id,
  jobTitle,
  company,
  employmentType,
  startDate,
  endDate,
  isCurrent,
  bulletPoints
}`;

export const PROFILE_QUERY = `*[_type == "profile"][0] {
  _id,
  name,
  headline,
  location,
  subheading,
  email,
  avatar,
  socialLinks
}`;

export const PROJECTS_QUERY = `*[_type == "project"] | order(order asc, _createdAt desc) {
  _id,
  title,
  slug,
  description,
  thumbnail,
  technologies,
  projectUrl,
  order
}`;

export const SKILL_CATEGORIES_QUERY = `*[_type == "skillCategory"] | order(order asc, _createdAt asc) {
  _id,
  title,
  skills,
  order
}`;
