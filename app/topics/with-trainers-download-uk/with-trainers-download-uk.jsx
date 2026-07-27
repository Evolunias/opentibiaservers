import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-download-uk');
}

export default function WithTrainersDownloadUkKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-download-uk" />;
}
