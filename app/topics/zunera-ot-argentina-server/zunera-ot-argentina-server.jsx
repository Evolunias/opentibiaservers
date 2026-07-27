import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-argentina-server');
}

export default function ZuneraOtArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-argentina-server" />;
}
