import YurotsOldSchoolServerArgentinaKeywordPage, { generateMetadata } from './yurots-old-school-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsOldSchoolServerArgentinaKeywordPage />;
}
