import XanteriaHighExpKeywordPage, { generateMetadata } from './xanteria-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteriaHighExpKeywordPage />;
}
