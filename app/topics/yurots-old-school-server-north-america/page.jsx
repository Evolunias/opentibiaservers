import YurotsOldSchoolServerNorthAmericaKeywordPage, { generateMetadata } from './yurots-old-school-server-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsOldSchoolServerNorthAmericaKeywordPage />;
}
