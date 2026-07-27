import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-download-sweden');
}

export default function WithTrainersDownloadSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-download-sweden" />;
}
