import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-download-mexico');
}

export default function WithTrainersDownloadMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-download-mexico" />;
}
