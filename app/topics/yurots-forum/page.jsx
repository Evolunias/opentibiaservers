import YurotsForumKeywordPage, { generateMetadata } from './yurots-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsForumKeywordPage />;
}
