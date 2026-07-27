import ZezeniaOnlineQuestsKeywordPage, { generateMetadata } from './zezenia-online-quests';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlineQuestsKeywordPage />;
}
