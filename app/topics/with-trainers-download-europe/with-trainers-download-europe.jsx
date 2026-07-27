import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-download-europe');
}

export default function WithTrainersDownloadEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-download-europe" />;
}
