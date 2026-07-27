import Yurots13OldSchoolServerKeywordPage, { generateMetadata } from './yurots-13-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots13OldSchoolServerKeywordPage />;
}
