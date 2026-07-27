import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-download-usa');
}

export default function WithTrainersDownloadUsaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-download-usa" />;
}
