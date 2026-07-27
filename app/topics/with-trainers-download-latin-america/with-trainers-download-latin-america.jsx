import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-download-latin-america');
}

export default function WithTrainersDownloadLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-download-latin-america" />;
}
