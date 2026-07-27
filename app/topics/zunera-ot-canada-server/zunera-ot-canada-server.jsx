import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-canada-server');
}

export default function ZuneraOtCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-canada-server" />;
}
