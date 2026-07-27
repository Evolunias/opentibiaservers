import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-germany-server');
}

export default function ZuneraOtGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-germany-server" />;
}
