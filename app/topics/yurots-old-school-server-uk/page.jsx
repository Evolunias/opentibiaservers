import YurotsOldSchoolServerUkKeywordPage, { generateMetadata } from './yurots-old-school-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsOldSchoolServerUkKeywordPage />;
}
