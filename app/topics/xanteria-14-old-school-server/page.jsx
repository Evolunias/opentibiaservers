import Xanteria14OldSchoolServerKeywordPage, { generateMetadata } from './xanteria-14-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Xanteria14OldSchoolServerKeywordPage />;
}
