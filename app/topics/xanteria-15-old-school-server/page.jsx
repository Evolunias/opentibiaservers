import Xanteria15OldSchoolServerKeywordPage, { generateMetadata } from './xanteria-15-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Xanteria15OldSchoolServerKeywordPage />;
}
