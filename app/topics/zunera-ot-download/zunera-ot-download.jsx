import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-download');
}

export default function ZuneraOtDownloadKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-download" />;
}
