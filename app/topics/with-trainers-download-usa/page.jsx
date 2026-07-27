import WithTrainersDownloadUsaKeywordPage, { generateMetadata } from './with-trainers-download-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersDownloadUsaKeywordPage />;
}
