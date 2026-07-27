import Yurots14OldSchoolServerKeywordPage, { generateMetadata } from './yurots-14-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots14OldSchoolServerKeywordPage />;
}
