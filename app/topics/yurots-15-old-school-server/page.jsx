import Yurots15OldSchoolServerKeywordPage, { generateMetadata } from './yurots-15-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots15OldSchoolServerKeywordPage />;
}
