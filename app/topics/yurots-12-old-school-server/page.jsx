import Yurots12OldSchoolServerKeywordPage, { generateMetadata } from './yurots-12-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots12OldSchoolServerKeywordPage />;
}
