import Yurots11OldSchoolServerKeywordPage, { generateMetadata } from './yurots-11-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots11OldSchoolServerKeywordPage />;
}
