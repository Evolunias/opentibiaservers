import Xanteria86OldSchoolServerKeywordPage, { generateMetadata } from './xanteria-8-6-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Xanteria86OldSchoolServerKeywordPage />;
}
