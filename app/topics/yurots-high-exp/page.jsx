import YurotsHighExpKeywordPage, { generateMetadata } from './yurots-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsHighExpKeywordPage />;
}
