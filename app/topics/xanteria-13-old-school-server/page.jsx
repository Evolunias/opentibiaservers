import Xanteria13OldSchoolServerKeywordPage, { generateMetadata } from './xanteria-13-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Xanteria13OldSchoolServerKeywordPage />;
}
