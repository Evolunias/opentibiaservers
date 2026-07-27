import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-download-north-america');
}

export default function WithTrainersDownloadNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-download-north-america" />;
}
