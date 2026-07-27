import YurotsOldSchoolServerEuropeKeywordPage, { generateMetadata } from './yurots-old-school-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsOldSchoolServerEuropeKeywordPage />;
}
