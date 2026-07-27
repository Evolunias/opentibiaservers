import Xanteria11OldSchoolServerKeywordPage, { generateMetadata } from './xanteria-11-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Xanteria11OldSchoolServerKeywordPage />;
}
