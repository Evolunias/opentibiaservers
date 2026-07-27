import YurotsQuestsKeywordPage, { generateMetadata } from './yurots-quests';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsQuestsKeywordPage />;
}
