import XanteriaCreateAccountKeywordPage, { generateMetadata } from './xanteria-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteriaCreateAccountKeywordPage />;
}
