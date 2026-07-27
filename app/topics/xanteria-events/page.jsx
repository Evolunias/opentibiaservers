import XanteriaEventsKeywordPage, { generateMetadata } from './xanteria-events';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteriaEventsKeywordPage />;
}
