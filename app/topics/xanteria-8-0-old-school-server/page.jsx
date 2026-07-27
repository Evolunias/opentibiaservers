import Xanteria80OldSchoolServerKeywordPage, { generateMetadata } from './xanteria-8-0-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Xanteria80OldSchoolServerKeywordPage />;
}
