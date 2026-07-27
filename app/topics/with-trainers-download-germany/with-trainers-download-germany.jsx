import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-download-germany');
}

export default function WithTrainersDownloadGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-download-germany" />;
}
