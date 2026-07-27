import YurotsCreateAccountKeywordPage, { generateMetadata } from './yurots-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsCreateAccountKeywordPage />;
}
