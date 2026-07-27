import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-download');
}

export default function XanteriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="xanteria-download" />;
}
