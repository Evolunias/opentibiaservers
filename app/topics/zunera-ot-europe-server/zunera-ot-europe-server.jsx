import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-europe-server');
}

export default function ZuneraOtEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-europe-server" />;
}
