import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-download-france');
}

export default function WithTrainersDownloadFranceKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-download-france" />;
}
