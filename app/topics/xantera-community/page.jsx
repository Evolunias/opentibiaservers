import XanteraCommunityKeywordPage, { generateMetadata } from './xantera-community';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteraCommunityKeywordPage />;
}
