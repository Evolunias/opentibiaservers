import YurotsOldSchoolServerUsaKeywordPage, { generateMetadata } from './yurots-old-school-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsOldSchoolServerUsaKeywordPage />;
}
