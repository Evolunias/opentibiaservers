import ZuneraOtTrainingKeywordPage, { generateMetadata } from './zunera-ot-training';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOtTrainingKeywordPage />;
}
