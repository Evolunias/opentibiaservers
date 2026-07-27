import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-download');
}

export default function YurotsDownloadKeywordPage() {
  return <StaticKeywordPage slug="yurots-download" />;
}
