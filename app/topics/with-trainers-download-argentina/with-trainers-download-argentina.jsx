import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-download-argentina');
}

export default function WithTrainersDownloadArgentinaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-download-argentina" />;
}
