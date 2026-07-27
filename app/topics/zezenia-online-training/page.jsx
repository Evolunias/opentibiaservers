import ZezeniaOnlineTrainingKeywordPage, { generateMetadata } from './zezenia-online-training';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlineTrainingKeywordPage />;
}
