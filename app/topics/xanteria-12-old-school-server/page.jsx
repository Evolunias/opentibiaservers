import Xanteria12OldSchoolServerKeywordPage, { generateMetadata } from './xanteria-12-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Xanteria12OldSchoolServerKeywordPage />;
}
