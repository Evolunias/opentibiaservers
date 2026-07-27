import ZuneraOtQuestsKeywordPage, { generateMetadata } from './zunera-ot-quests';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOtQuestsKeywordPage />;
}
