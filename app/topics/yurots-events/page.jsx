import YurotsEventsKeywordPage, { generateMetadata } from './yurots-events';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsEventsKeywordPage />;
}
