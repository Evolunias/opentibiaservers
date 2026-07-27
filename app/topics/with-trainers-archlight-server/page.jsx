import WithTrainersArchlightServerKeywordPage, { generateMetadata } from './with-trainers-archlight-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersArchlightServerKeywordPage />;
}
